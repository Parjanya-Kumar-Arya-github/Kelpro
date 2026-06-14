import urllib.request
import re
import os
import json

url = "https://obsidianos.com/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
except Exception as e:
    print(f"Error fetching HTML: {e}")
    exit(1)

os.makedirs('public/assets', exist_ok=True)

# 1. Find all image URLs ending with .webp, .svg, .avif, .png, etc.
# We'll look for anything in src=".../_astro/..."
src_pattern = re.compile(r'src="(/_astro/[^"]+\.(webp|svg|png|jpg))"')
matches = src_pattern.findall(html)

downloaded_files = {}

for match in matches:
    img_path = match[0] # e.g. /_astro/stone-left.bG7f73ao_1bzuE6.webp
    filename = img_path.split('/')[-1]
    
    # Identify what this image is
    key = None
    if 'stone-left' in filename: key = 'stone-left'
    elif 'stone-right' in filename: key = 'stone-right'
    elif 'home-hero.C' in filename: key = 'home-hero'
    elif 'home-hero-mobile' in filename: key = 'home-hero-mobile'
    elif 'ai-practice-management' in filename and not 'nav-' in filename and not '-bg' in filename: key = 'grid-ai'
    elif 'custody-execution' in filename and not 'nav-' in filename and not '-bg' in filename: key = 'grid-custody'
    elif 'feature-independent' in filename or 'day-plan' in filename: key = 'feature-independent'
    
    elif 'blackrock' in filename.lower(): key = 'logo-blackrock'
    elif 'revolut' in filename.lower(): key = 'logo-revolut'
    elif 'jpmorgan' in filename.lower(): key = 'logo-jpmorgan'
    elif 'parmenion' in filename.lower(): key = 'logo-parmenion'
    elif 'wise' in filename.lower(): key = 'logo-wise'
    
    if key:
        full_url = "https://obsidianos.com" + img_path
        local_path = os.path.join('public/assets', filename)
        
        if key not in downloaded_files:
            try:
                urllib.request.urlretrieve(full_url, local_path)
                downloaded_files[key] = f"/assets/{filename}"
            except Exception as e:
                print(f"Failed to download {full_url}: {e}")

print(json.dumps(downloaded_files, indent=2))
