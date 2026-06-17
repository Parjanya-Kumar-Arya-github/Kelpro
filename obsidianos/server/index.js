import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { createClient } from '@libsql/client';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'kelproautospares@gmail.com',
    pass: process.env.EMAIL_PASS || '', // App Password goes here
  },
});

// 1. Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, businessName, email, phone, region, tier, products, message } = req.body;

  if (!name || !businessName || !phone) {
    return res.status(400).json({ error: 'Name, Business Name, and Phone are required.' });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER || 'kelpromailing@gmail.com',
    to: process.env.RECEIVER_EMAIL || 'kelproautospares@gmail.com',
    subject: `New Partnership Enquiry from ${businessName} (${name})`,
    text: `
You have received a new partnership enquiry.

Name: ${name}
Business Name: ${businessName}
Email: ${email || 'N/A'}
Phone: ${phone}
Region: ${region || 'N/A'}
Tier: ${tier || 'N/A'}
Products of Interest: ${products || 'N/A'}

Message:
${message || 'No message provided.'}
    `,
  };

  try {
    console.log('Attempting to send email with:');
    console.log('User:', process.env.EMAIL_USER);
    console.log('Pass length:', process.env.EMAIL_PASS?.length);
    console.log('Receiver:', process.env.RECEIVER_EMAIL);
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Check SMTP configuration.', details: error.message });
  }
});

// 2. Admin Login Endpoint
app.post('/api/login', (req, res) => {
  const { id, password } = req.body;
  const adminId = process.env.ADMIN_ID || 'admin';
  const adminPass = process.env.ADMIN_PASS || 'kelpro123';

  if (id === adminId && password === adminPass) {
    res.status(200).json({ success: true, token: 'admin_token_123' }); // very basic token
  } else {
    res.status(401).json({ error: 'Invalid ID or Password' });
  }
});

// 3. Catalogue Endpoints
const jsonFilePath = path.join(__dirname, '../src/data/catalogueData.json');

let db;

async function initDB() {
  const dbUrl = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!dbUrl) {
    console.error('TURSO_DATABASE_URL is missing in .env!');
    return;
  }

  db = createClient({
    url: dbUrl,
    authToken: authToken,
  });

  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS catalogue_store (
        id INTEGER PRIMARY KEY CHECK (id = 1),
        data TEXT NOT NULL
      )
    `);

    const result = await db.execute('SELECT data FROM catalogue_store WHERE id = 1');
    if (result.rows.length === 0) {
      try {
        const jsonData = await fs.readFile(jsonFilePath, 'utf8');
        await db.execute({
          sql: 'INSERT INTO catalogue_store (id, data) VALUES (1, ?)',
          args: [jsonData]
        });
        console.log('Seeded Turso database with JSON file.');
      } catch (e) {
        console.log('No initial JSON file found to seed.');
      }
    } else {
      console.log('Connected to Turso DB. Data already exists.');
    }
  } catch (err) {
    console.error('Failed to initialize or connect to Turso DB:', err.message);
  }
}

initDB().catch(console.error);

app.get('/api/catalogue', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  try {
    const result = await db.execute('SELECT data FROM catalogue_store WHERE id = 1');
    if (result.rows.length > 0) {
      res.status(200).json(JSON.parse(result.rows[0].data));
    } else {
      res.status(404).json({ error: 'Catalogue not found' });
    }
  } catch (error) {
    console.error('Error reading catalogue data:', error);
    res.status(500).json({ error: 'Failed to read catalogue data' });
  }
});

app.post('/api/catalogue', async (req, res) => {
  if (!db) return res.status(500).json({ error: 'Database not initialized' });
  // Normally you'd check auth token here
  const authHeader = req.headers.authorization;
  if (authHeader !== 'Bearer admin_token_123') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const newCatalogueData = req.body;
    await db.execute({
      sql: 'UPDATE catalogue_store SET data = ? WHERE id = 1',
      args: [JSON.stringify(newCatalogueData)]
    });
    res.status(200).json({ success: true, message: 'Catalogue updated successfully' });
  } catch (error) {
    console.error('Error writing catalogue data:', error);
    res.status(500).json({ error: 'Failed to write catalogue data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

// Force the event loop to stay alive
setInterval(() => {}, 60000);
