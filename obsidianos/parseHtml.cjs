const fs = require('fs');

const html = `
<div class="container">
    <span class="section-tag reveal revealed">Price Lists</span>
    <h2 class="section-title reveal revealed">PRODUCT CATALOGUE</h2>
    <p class="section-sub reveal revealed">Retail MRP prices shown. Partner wholesale prices available after registration. <a href="Kelpro Catalogue 2026.pdf" download="" style="color:var(--accent);font-weight:600">Download full PDF catalogue →</a></p>
 
    <div class="cat-tabs" id="catTabs">
      <button class="cat-tab active" data-tab="pumps">Fuel Pumps</button>
      <button class="cat-tab" data-tab="water">Water Pumps</button>
      <button class="cat-tab" data-tab="engmount">Engine Mountings</button>
      <button class="cat-tab" data-tab="strut">Strut Mounts</button>
      <button class="cat-tab" data-tab="calliper">Calliper Kits</button>
      <button class="cat-tab" data-tab="tailgate">Tailgate Struts</button>
      <button class="cat-tab" data-tab="wipers">Wiper Blades</button>
      <button class="cat-tab" data-tab="oilcooler">Oil Coolers</button>
    </div>
 
    <div class="cat-panel active" id="tab-pumps">
      <table class="cat-table">
        <thead><tr><th>Ref No.</th><th>Suitable For</th><th>MRP (₹)</th></tr></thead>
        <tbody>
          <tr><td class="part-num">KFM 01</td><td>NANO</td><td class="mrp">₹990</td></tr>
          <tr><td class="part-num">KFM 02</td><td>KWID</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 03</td><td>SUPER CARRY</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 04</td><td>ZEN</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 05</td><td>MPFI</td><td class="mrp">₹715</td></tr>
          <tr><td class="part-num">KFM 06</td><td>SANTRO, I20 1st Gen</td><td class="mrp">₹715</td></tr>
          <tr><td class="part-num">KFM 07</td><td>K SERIES</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 08</td><td>SWIFT PETROL</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 09</td><td>ETIOS</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 10</td><td>MAXIMO</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 11</td><td>ACE SUPER</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 12</td><td>XCENT / EON</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 13</td><td>AMAZE PETROL</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 14</td><td>BALENO N/M</td><td class="mrp">₹1,155</td></tr>
          <tr><td class="part-num">KFM 15</td><td>TRIBER / KIGER</td><td class="mrp">₹1,265</td></tr>
          <tr><td class="part-num">KFM 16</td><td>POLO DIESEL</td><td class="mrp">₹1,430</td></tr>
          <tr><td class="part-num">KFM 17</td><td>ERTIGA DIESEL</td><td class="mrp">₹1,650</td></tr>
          <tr><td class="part-num">KFM 18</td><td>BEAT DIESEL</td><td class="mrp">₹1,595</td></tr>
          <tr><td class="part-num">KFM 19</td><td>CIAZ</td><td class="mrp">₹1,870</td></tr>
          <tr><td class="part-num">KFM 20</td><td>ECCO BS6</td><td class="mrp">₹1,078</td></tr>
          <tr><td class="part-num">KFM 21</td><td>ERTIGA PETROL</td><td class="mrp">₹1,285</td></tr>
          <tr><td class="part-num">KFM 22</td><td>BOLERO</td><td class="mrp">₹990</td></tr>
          <tr><td class="part-num">KFM 23</td><td>BEAT PETROL</td><td class="mrp">₹1,045</td></tr>
          <tr><td class="part-num">KFM 24</td><td>BOLERO NM</td><td class="mrp">₹1,650</td></tr>
          <tr><td class="part-num">KFM 25</td><td>BOLERO PICKUP</td><td class="mrp">₹1,650</td></tr>
          <tr><td class="part-num">KFM 26</td><td>ERTIGA / SWIFT DSL NM</td><td class="mrp">₹1,650</td></tr>
          <tr><td class="part-num">KFM 27</td><td>SWIFT NM</td><td class="mrp">₹1,650</td></tr>
          <tr><td class="part-num">KFM 28</td><td>HONDA CITY</td><td class="mrp">₹1,265</td></tr>
          <tr><td class="part-num">KFM 29</td><td>CRETA</td><td class="mrp">₹1,265</td></tr>
          <tr><td class="part-num">30</td><td>I20 ELITE</td><td class="mrp">₹1,265</td></tr>
        </tbody>
      </table>
    </div>
 
    <div class="cat-panel" id="tab-water">
      <table class="cat-table">
        <thead><tr><th>Product No.</th><th>Suitable For</th><th>Brand</th><th>MRP (₹)</th></tr></thead>
        <tbody>
          <tr class="brand-row"><td colspan="4">MARUTI-SUZUKI</td></tr>
          <tr><td class="part-num">KWP/MS/001</td><td>Car Petrol</td><td>Maruti</td><td class="mrp">₹770</td></tr>
          <tr><td class="part-num">KWP/MS/002</td><td>Alto Petrol</td><td>Maruti</td><td class="mrp">₹780</td></tr>
          <tr><td class="part-num">KWP/MS/003</td><td>Zen Petrol</td><td>Maruti</td><td class="mrp">₹925</td></tr>
          <tr><td class="part-num">KWP/MS/004</td><td>Zen MPFI</td><td>Maruti</td><td class="mrp">₹925</td></tr>
          <tr><td class="part-num">KWP/MS/005</td><td>Gypsy King Petrol</td><td>Maruti</td><td class="mrp">₹925</td></tr>
          <tr><td class="part-num">KWP/MS/006</td><td>Eeco Petrol</td><td>Maruti</td><td class="mrp">₹999</td></tr>
          <tr><td class="part-num">KWP/MS/007</td><td>Alto 800 Petrol</td><td>Maruti</td><td class="mrp">₹925</td></tr>
          <tr><td class="part-num">KWP/MS/008</td><td>Swift Diesel</td><td>Maruti</td><td class="mrp">₹1,375</td></tr>
          <tr><td class="part-num">KWP/MS/009</td><td>Ertiga / Ciaz K-Series</td><td>Maruti</td><td class="mrp">₹980</td></tr>
          <tr><td class="part-num">KWP/MS/010</td><td>Ciaz Diesel</td><td>Maruti</td><td class="mrp">₹1,850</td></tr>
          <tr><td class="part-num">KWP/MS/011</td><td>S-Cross</td><td>Maruti</td><td class="mrp">₹1,850</td></tr>
          <tr><td class="part-num">KWP/MS/012</td><td>XL BS6</td><td>Maruti</td><td class="mrp">₹1,590</td></tr>
          <tr><td class="part-num">KWP/MS/013</td><td>Super Carry Diesel</td><td>Maruti</td><td class="mrp">₹2,200</td></tr>
          <tr class="brand-row"><td colspan="4">TATA MOTORS</td></tr>
          <tr><td class="part-num">KWP/TM/001</td><td>Iris / Zip BS4 Pulley</td><td>Tata</td><td class="mrp">₹1,135</td></tr>
          <tr><td class="part-num">KWP/TM/002</td><td>Iris</td><td>Tata</td><td class="mrp">₹795</td></tr>
          <tr><td class="part-num">KWP/TM/003</td><td>Sumo 2.2</td><td>Tata</td><td class="mrp">₹1,450</td></tr>
          <tr><td class="part-num">KWP/TM/004</td><td>Sumo</td><td>Tata</td><td class="mrp">₹1,050</td></tr>
          <tr><td class="part-num">KWP/TM/007</td><td>Indica Vista</td><td>Tata</td><td class="mrp">₹1,450</td></tr>
          <tr><td class="part-num">KWP/TM/009</td><td>Bolt / Zest</td><td>Tata</td><td class="mrp">₹1,650</td></tr>
          <tr><td class="part-num">KWP/TM/010</td><td>Tiago / Tigor</td><td>Tata</td><td class="mrp">₹1,650</td></tr>
          <tr class="brand-row"><td colspan="4">MAHINDRA</td></tr>
          <tr><td class="part-num">KWP/MM/001</td><td>Bolero Universal</td><td>Mahindra</td><td class="mrp">₹2,500</td></tr>
          <tr><td class="part-num">KWP/MM/002</td><td>Bolero M2di</td><td>Mahindra</td><td class="mrp">₹2,120</td></tr>
          <tr><td class="part-num">KWP/MM/007</td><td>M-Hawk</td><td>Mahindra</td><td class="mrp">₹2,100</td></tr>
          <tr class="brand-row"><td colspan="4">TOYOTA</td></tr>
          <tr><td class="part-num">KWP/TY/001</td><td>Etios Liva Diesel</td><td>Toyota</td><td class="mrp">₹1,980</td></tr>
          <tr><td class="part-num">KWP/TY/002</td><td>Etios Liva Petrol</td><td>Toyota</td><td class="mrp">₹1,720</td></tr>
          <tr><td class="part-num">KWP/TY/004</td><td>Innova Crysta</td><td>Toyota</td><td class="mrp">₹2,900</td></tr>
          <tr><td class="part-num">KWP/TY/005</td><td>Innova Diesel</td><td>Toyota</td><td class="mrp">₹2,500</td></tr>
          <tr class="brand-row"><td colspan="4">HYUNDAI</td></tr>
          <tr><td class="part-num">KWP/HY/001</td><td>Santro</td><td>Hyundai</td><td class="mrp">₹925</td></tr>
          <tr><td class="part-num">KWP/HY/004</td><td>i10, i20</td><td>Hyundai</td><td class="mrp">₹900</td></tr>
          <tr><td class="part-num">KWP/HY/008</td><td>Venue Petrol</td><td>Hyundai</td><td class="mrp">₹1,750</td></tr>
          <tr><td class="part-num">KWP/HY/009</td><td>Creta Petrol</td><td>Hyundai</td><td class="mrp">₹1,990</td></tr>
          <tr class="brand-row"><td colspan="4">SKODA / VOLKSWAGEN</td></tr>
          <tr><td class="part-num">KWP/VW/001</td><td>Polo Petrol 1.2</td><td>VW</td><td class="mrp">₹1,850</td></tr>
          <tr><td class="part-num">KWP/VW/003</td><td>Polo / Vento Diesel</td><td>VW</td><td class="mrp">₹1,400</td></tr>
          <tr><td class="part-num">KWP/VW/006</td><td>Octavia 1.8 Petrol</td><td>Skoda</td><td class="mrp">₹2,900</td></tr>
        </tbody>
      </table>
    </div>
 
    <div class="cat-panel" id="tab-engmount">
      <table class="cat-table">
        <thead><tr><th>Ref No.</th><th>Description</th><th>OEM Number</th><th>Brand</th></tr></thead>
        <tbody>
          <tr class="brand-row"><td colspan="4">MARUTI SUZUKI</td></tr>
          <tr><td class="part-num">MA 8</td><td>Front Engine Gypsy</td><td class="oem">11610M80020</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 9</td><td>Rear Engine Gypsy</td><td class="oem">11710M80010</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 45</td><td>Front Mounting Right – Alto 800 / Wagon R</td><td class="oem">11610M79F00</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 46</td><td>Front Mounting Left – Alto 800 / Wagon R</td><td class="oem">11610M79G10</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 47</td><td>Rear Mounting – Wagon R / Alto / Baleno / Alto 800</td><td class="oem">11620M79F20</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 58</td><td>Front Engine Left – Swift / Dzire O/M</td><td class="oem">11620 M 75J00</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 59</td><td>Front Engine Right – Swift / Dzire O/M</td><td class="oem">11610 M 86J00</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 72</td><td>Front Mounting Right – Alto K10, Zen Estilo</td><td class="oem">11610 M 65L00</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 78</td><td>Front Mounting Left – Wagon R N/M</td><td class="oem">11620 M 67L00</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 191</td><td>Rear Right – Celerio T2, Wagon R 2018</td><td class="oem">11910 M 69R00</td><td>Maruti</td></tr>
          <tr><td class="part-num">MA 192</td><td>Rear Rod – Ertiga, XL6</td><td class="oem">11910 M 72R00</td><td>Maruti</td></tr>
          <tr class="brand-row"><td colspan="4">TOYOTA</td></tr>
          <tr><td class="part-num">TY 01</td><td>Front Engine – Innova, Fortuner</td><td class="oem">12361 0L030</td><td>Toyota</td></tr>
          <tr><td class="part-num">TY 02</td><td>Transmission – Innova</td><td class="oem">12371 0C081</td><td>Toyota</td></tr>
          <tr><td class="part-num">TY 62</td><td>Gearbox – Innova, Fortuner</td><td class="oem">12371-0C072</td><td>Toyota</td></tr>
          <tr class="brand-row"><td colspan="4">HYUNDAI</td></tr>
          <tr><td class="part-num">HY 01</td><td>Front Engine – Santro</td><td class="oem">21840-02000</td><td>Hyundai</td></tr>
          <tr><td class="part-num">HY 02</td><td>Front Engine – Santro Xing</td><td class="oem">21840-05200</td><td>Hyundai</td></tr>
          <tr><td class="part-num">HY 44</td><td>Gearbox – Santro Xing</td><td class="oem">21830-05200</td><td>Hyundai</td></tr>
          <tr class="brand-row"><td colspan="4">TATA</td></tr>
          <tr><td class="part-num">TT 48</td><td>Mounting – Indica Vista / Indigo Manza TDI</td><td class="oem">27902 4100169</td><td>Tata</td></tr>
          <tr><td class="part-num">TT 70</td><td>Engine Mounting C – Tiago / Tigor</td><td class="oem">540124100159</td><td>Tata</td></tr>
          <tr><td class="part-num">TT 79</td><td>Engine Mounting C – Nexon</td><td class="oem">543824100114</td><td>Tata</td></tr>
          <tr class="brand-row"><td colspan="4">MAHINDRA</td></tr>
          <tr><td class="part-num">MS 01</td><td>Front Engine – Scorpio</td><td class="oem">0203AD20020N</td><td>Mahindra</td></tr>
          <tr><td class="part-num">MS 02</td><td>Gearbox – Scorpio</td><td class="oem">0203AD0060N</td><td>Mahindra</td></tr>
          <tr><td class="part-num">MS 31</td><td>Gearbox – Scorpio CRDi</td><td class="oem">0703AD3370N</td><td>Mahindra</td></tr>
          <tr><td class="part-num">MS 60</td><td>Gearbox – Scorpio, Thar</td><td class="oem">0703AD3530N</td><td>Mahindra</td></tr>
          <tr><td class="part-num">MH 48</td><td>Gearbox – Bolero NM</td><td class="oem">0401BA2700N</td><td>Mahindra</td></tr>
        </tbody>
      </table>
    </div>
 
    <div class="cat-panel" id="tab-strut">
      <table class="cat-table">
        <thead><tr><th>Ref No.</th><th>Description</th><th>OEM Number</th></tr></thead>
        <tbody>
          <tr class="brand-row"><td colspan="3">MARUTI SUZUKI</td></tr>
          <tr><td class="part-num">MA 132</td><td>Front Strut Mount – Celerio</td><td class="oem">41710M7600</td></tr>
          <tr><td class="part-num">MA 144</td><td>Front Strut Mount – Swift/Dzire 3rd Gen, Baleno/Fronx</td><td class="oem">41710M55R00</td></tr>
          <tr><td class="part-num">MA 68</td><td>Front Strut Mount – Ciaz/Ertiga 1st Gen, Swift/Dzire 2nd Gen</td><td class="oem">41710M74L00</td></tr>
          <tr><td class="part-num">MA 67</td><td>Front Strut Mount – Swift/Dzire 1st Gen</td><td class="oem">41710M75J30</td></tr>
          <tr><td class="part-num">MA 143</td><td>Front Strut Mount – Ertiga 2nd Gen, XL6</td><td class="oem">41710M72M00</td></tr>
          <tr><td class="part-num">MA 190</td><td>Front Strut Mount – Brezza, S-Cross, GV</td><td class="oem">41710M82P00</td></tr>
          <tr class="brand-row"><td colspan="3">HYUNDAI</td></tr>
          <tr><td class="part-num">HY 82</td><td>Front Strut Mount – Creta 2015/18/20</td><td class="oem">54610A0000</td></tr>
          <tr><td class="part-num">HY 51</td><td>Front Strut Mount – i20 "D" Cut, Grand, Xcent</td><td class="oem">54611-1J000</td></tr>
          <tr><td class="part-num">HY 49</td><td>Front Strut Mount – I10 First Gen / Eon</td><td class="oem">54611-07000</td></tr>
          <tr><td class="part-num">HY 54</td><td>Front Strut Mount – Verna Fluidic</td><td class="oem">54611-0U000</td></tr>
          <tr><td class="part-num">HY 57</td><td>Front Strut Mount – Venue, Verna Latest</td><td class="oem">54611-H6000</td></tr>
          <tr class="brand-row"><td colspan="3">TOYOTA</td></tr>
          <tr><td class="part-num">TY 54</td><td>Front Strut Mount – Fortuner First Gen</td><td class="oem">48609-0K040</td></tr>
          <tr><td class="part-num">TY 56</td><td>Front Strut Mount – Fortuner Second Gen</td><td class="oem">48609-0K120</td></tr>
          <tr><td class="part-num">TY 22</td><td>Front Strut Mount – Innova, Crysta</td><td class="oem">48609-0K09</td></tr>
          <tr class="brand-row"><td colspan="3">MAHINDRA</td></tr>
          <tr><td class="part-num">MS 42</td><td>Front Strut Mount – Scorpio-S, TUV300, Bolero Neo</td><td class="oem">0403AAA01571N</td></tr>
          <tr><td class="part-num">MX 55</td><td>Front Strut Mount – XUV 300</td><td class="oem">0401EBC00481N</td></tr>
          <tr><td class="part-num">MX 44</td><td>Front Strut Mount – XUV 500 2nd Gen</td><td class="oem">0401BBC00211N</td></tr>
          <tr class="brand-row"><td colspan="3">SKODA / VW / OTHERS</td></tr>
          <tr><td class="part-num">VW 1</td><td>Front Strut – Fabia, Kushaq, Rapid, Polo, Taigun, Vento, Virtus, Slavia</td><td class="oem">1J0412331C</td></tr>
          <tr><td class="part-num">HC 5</td><td>Front Strut – Amaze, BRV, Brio, City, Jazz, Mobilio, WRV</td><td class="oem">51920 TG2 T01</td></tr>
          <tr><td class="part-num">FD 04</td><td>Front Strut – Ford EcoSport</td><td class="oem">AY113K155AC</td></tr>
        </tbody>
      </table>
    </div>
 
    <div class="cat-panel" id="tab-calliper">
      <table class="cat-table">
        <thead><tr><th>Part No.</th><th>Suitable For</th><th>Rate/Kit (₹)</th></tr></thead>
        <tbody>
          <tr><td class="part-num">112</td><td>Ciaz, Swift, Baleno</td><td class="mrp">₹375</td></tr>
          <tr><td class="part-num">120</td><td>Astar, Alto, Celerio, Eeco, Jimny, Wagon R, Zen</td><td class="mrp">₹375</td></tr>
          <tr><td class="part-num">131</td><td>Alcazar, Creta, Elantra, i20, Venue, Verna, Altroz, Punch, Nexon, Tiago, Brio, Jazz, WRV, Seltos, Sonet</td><td class="mrp">₹405</td></tr>
          <tr><td class="part-num">141</td><td>Micra, Sunny, Corolla, Compass (rear), Gloster</td><td class="mrp">₹405</td></tr>
          <tr><td class="part-num">142</td><td>Amaze (2013–2016)</td><td class="mrp">₹405</td></tr>
          <tr><td class="part-num">151</td><td>Bolero, Pickup, KUV100, Scorpio, TUV 300, Verito, Xylo</td><td class="mrp">₹380</td></tr>
          <tr><td class="part-num">152</td><td>Ignis, Scorpio S2, Thar, Harrier, Amaze (2016–2023), Civic</td><td class="mrp">₹445</td></tr>
          <tr><td class="part-num">181</td><td>Etios, Corolla Altis, Liva</td><td class="mrp">₹445</td></tr>
          <tr><td class="part-num">191</td><td>Compass (2017–2020)</td><td class="mrp">₹500</td></tr>
          <tr><td class="part-num">222</td><td>Ertiga, XL6, Grand Vitara, Swift (2021–22), City</td><td class="mrp">₹405</td></tr>
          <tr><td class="part-num">333</td><td>Car, Esteem, Brezza, Van, S-Presso, Santro, ACE, Indica, Figo, Kwid, Dost</td><td class="mrp">₹375</td></tr>
          <tr><td class="part-num">444</td><td>Aura, Creta (rear), Eon, i20 (rear), Grand i10, Santro New, Venue (rear)</td><td class="mrp">₹430</td></tr>
          <tr><td class="part-num">555</td><td>Accent, Getz, i10, i20 Petrol</td><td class="mrp">₹375</td></tr>
          <tr><td class="part-num">666</td><td>Innova (2005–2018)</td><td class="mrp">₹445</td></tr>
          <tr><td class="part-num">776</td><td>Fabia, Octavia, Rapid, Superb, Polo, Vento</td><td class="mrp">₹405</td></tr>
          <tr><td class="part-num">777</td><td>EcoSport, Fabia, Laura, Octavia, Polo, Vento, Virtus, Range Rover Evoque, Audi A3</td><td class="mrp">₹500</td></tr>
          <tr><td class="part-num">888</td><td>Duster (2012–2022)</td><td class="mrp">₹500</td></tr>
          <tr><td class="part-num">1041</td><td>Innova Crysta</td><td class="mrp">₹600</td></tr>
        </tbody>
      </table>
    </div>
 
    <div class="cat-panel" id="tab-tailgate">
      <table class="cat-table">
        <thead><tr><th>Model</th><th>Brand</th><th>Price/Piece (₹)</th></tr></thead>
        <tbody>
          <tr class="brand-row"><td colspan="3">MARUTI SUZUKI</td></tr>
          <tr><td>Maruti Car</td><td>Maruti</td><td class="mrp">₹125</td></tr>
          <tr><td>Maruti Alto</td><td>Maruti</td><td class="mrp">₹150</td></tr>
          <tr><td>Maruti Wagon-R</td><td>Maruti</td><td class="mrp">₹163</td></tr>
          <tr><td>Maruti Wagon-R N/M</td><td>Maruti</td><td class="mrp">₹194</td></tr>
          <tr><td>Maruti Swift</td><td>Maruti</td><td class="mrp">₹181</td></tr>
          <tr><td>Ertiga</td><td>Maruti</td><td class="mrp">₹219</td></tr>
          <tr><td>Baleno / S-Cross / Brezza / Ignis / S-Presso</td><td>Maruti</td><td class="mrp">₹219</td></tr>
          <tr class="brand-row"><td colspan="3">HYUNDAI</td></tr>
          <tr><td>Santro Zip / Xing</td><td>Hyundai</td><td class="mrp">₹144</td></tr>
          <tr><td>i-10 / i-20</td><td>Hyundai</td><td class="mrp">₹188</td></tr>
          <tr><td>Eon / Grand i10 / Creta</td><td>Hyundai</td><td class="mrp">₹219</td></tr>
          <tr class="brand-row"><td colspan="3">TATA</td></tr>
          <tr><td>Tata Indica</td><td>Tata</td><td class="mrp">₹113</td></tr>
          <tr><td>Tata Indica V2</td><td>Tata</td><td class="mrp">₹125</td></tr>
          <tr><td>Tata Vista</td><td>Tata</td><td class="mrp">₹181</td></tr>
          <tr><td>Tiago / Bolt / Nano / Nexon</td><td>Tata</td><td class="mrp">₹219</td></tr>
          <tr class="brand-row"><td colspan="3">TOYOTA</td></tr>
          <tr><td>Toyota Qualis</td><td>Toyota</td><td class="mrp">₹238</td></tr>
          <tr><td>Innova</td><td>Toyota</td><td class="mrp">₹313</td></tr>
          <tr><td>Etios</td><td>Toyota</td><td class="mrp">₹219</td></tr>
          <tr class="brand-row"><td colspan="3">MAHINDRA / SKODA / OTHERS</td></tr>
          <tr><td>XUV-500 / KUV-100 / Scorpio Bonnet</td><td>Mahindra</td><td class="mrp">₹219</td></tr>
          <tr><td>Laura / Octavia / Superb / Fabia</td><td>Skoda</td><td class="mrp">₹219</td></tr>
          <tr><td>Duster / Kwid / Lodgy</td><td>Renault</td><td class="mrp">₹219</td></tr>
        </tbody>
      </table>
    </div>
 
    <div class="cat-panel" id="tab-wipers">
      <table class="cat-table">
        <thead><tr><th>Size</th><th>MRP / Piece (₹)</th><th>Master Pack</th></tr></thead>
        <tbody>
          <tr><td>12"</td><td class="mrp">₹120</td><td>50 pcs</td></tr>
          <tr><td>13"</td><td class="mrp">₹120</td><td>50 pcs</td></tr>
          <tr><td>14"</td><td class="mrp">₹120</td><td>50 pcs</td></tr>
          <tr><td>15"</td><td class="mrp">₹120</td><td>50 pcs</td></tr>
          <tr><td>16"</td><td class="mrp">₹130</td><td>50 pcs</td></tr>
          <tr><td>17"</td><td class="mrp">₹130</td><td>50 pcs</td></tr>
          <tr><td>18"</td><td class="mrp">₹140</td><td>50 pcs</td></tr>
          <tr><td>19"</td><td class="mrp">₹150</td><td>50 pcs</td></tr>
          <tr><td>20"</td><td class="mrp">₹150</td><td>50 pcs</td></tr>
          <tr><td>21"</td><td class="mrp">₹160</td><td>50 pcs</td></tr>
          <tr><td>22"</td><td class="mrp">₹170</td><td>50 pcs</td></tr>
          <tr><td>24"</td><td class="mrp">₹180</td><td>50 pcs</td></tr>
          <tr><td>26"</td><td class="mrp">₹190</td><td>50 pcs</td></tr>
        </tbody>
      </table>
      <p style="margin-top:1rem;font-size:13px;color:var(--grey-light)">100% Natural GOMA Rubber with Silicon · 1.2mm blade · Stainless steel body · J-shaped hook universal fit</p>
    </div>
 
    <div class="cat-panel" id="tab-oilcooler">
      <table class="cat-table">
        <thead><tr><th>OEM Number</th><th>Suitable For</th><th>MRP (₹)</th></tr></thead>
        <tbody>
          <tr><td class="oem">03L115389H</td><td>Laura, Rapid, Yeti, Superb, Vento DIESEL</td><td class="mrp">₹1,550</td></tr>
          <tr><td class="oem">03P115389A</td><td>Polo, Fabia DIESEL</td><td class="mrp">₹1,550</td></tr>
          <tr><td class="oem">5655305</td><td>Ciaz, Ertiga DIESEL 2019–20</td><td class="mrp">₹425</td></tr>
          <tr><td class="oem">55193743</td><td>Swift 2007–10 / Ritz 2009–11</td><td class="mrp">₹425</td></tr>
          <tr><td class="oem">55210712</td><td>Ciaz 2014–19, Ertiga 2012–19, S-Cross, Grand Vitara, SX4</td><td class="mrp">₹425</td></tr>
          <tr><td class="oem">1103.L1</td><td>Figo, Fusion, Ikon, Fiesta OLD MODEL</td><td class="mrp">₹600</td></tr>
          <tr><td class="oem">0702AAK00011N</td><td>XUV 2015–2021</td><td class="mrp">₹1,600</td></tr>
          <tr><td class="oem">8200068115</td><td>Logan, Verito</td><td class="mrp">₹800</td></tr>
          <tr><td class="oem">8200779744</td><td>Duster 85</td><td class="mrp">₹750</td></tr>
          <tr><td class="oem">8200923115</td><td>Duster 110</td><td class="mrp">₹750</td></tr>
          <tr><td class="oem">213059324R</td><td>Micra</td><td class="mrp">₹750</td></tr>
          <tr><td class="oem">26410-04501</td><td>Grand I10, Venue, Sonet (turbo petrol)</td><td class="mrp">₹1,100</td></tr>
          <tr><td class="oem">26410-08000</td><td>Alcazar, Creta Turbo, Verna 1.5 turbo petrol</td><td class="mrp">₹1,100</td></tr>
          <tr><td class="oem">26410-2A300</td><td>Creta, Elantra, Fludic, Getz, i20, Venue, Verna (diesel)</td><td class="mrp">₹450</td></tr>
          <tr><td class="oem">0303DAM00081N</td><td>XUV 500 2nd Gen / Scorpio NM</td><td class="mrp">₹1,100</td></tr>
          <tr><td class="oem">06J117021D</td><td>Laura, Octavia, Superb, Yeti, A3, A4 (Petrol) OLD 2008–14</td><td class="mrp">₹1,150</td></tr>
          <tr><td class="oem">06L117021C</td><td>Laura, Octavia, Superb, A3, A4 (Petrol) NEW 2015+</td><td class="mrp">₹1,150</td></tr>
        </tbody>
      </table>
    </div>
 
  </div>
`;

const cheerio = require('cheerio');
const $ = cheerio.load(html);

const tabs = [];
$('.cat-tab').each((i, el) => {
  tabs.push({ id: $(el).attr('data-tab'), label: $(el).text() });
});

const catalogueData = [];

$('.cat-panel').each((i, panel) => {
  const id = $(panel).attr('id').replace('tab-', '');
  const headers = [];
  $(panel).find('thead th').each((j, th) => headers.push($(th).text()));
  
  const rows = [];
  $(panel).find('tbody tr').each((j, tr) => {
    if ($(tr).hasClass('brand-row')) {
      rows.push({ type: 'brand-row', label: $(tr).text().trim() });
    } else {
      const cells = [];
      $(tr).find('td').each((k, td) => {
        cells.push($(td).text().trim());
      });
      rows.push({ cells });
    }
  });

  const footer = $(panel).find('p').text().trim() || null;

  catalogueData.push({ id, headers, rows, footer });
});

fs.writeFileSync('catalogueData.json', JSON.stringify({tabs, catalogueData}, null, 2));
console.log('Done');
