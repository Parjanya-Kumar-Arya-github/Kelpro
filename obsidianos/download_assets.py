import urllib.request
import re
import os
import json

url = "https://obsidianos.com/"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find all image URLs
img_urls = set(re.findall(r'src="([^"]+)"', html))
valid_extensions = ('.webp', '.png', '.jpg', '.jpeg', '.svg')
img_urls = [u for u in img_urls if u.endswith(valid_extensions)]

# Extract SVG tags
svg_tags = re.findall(r'<svg[^>]*>.*?</svg>', html, re.DOTALL)

output = {
    'img_urls': img_urls,
    'svg_tags': len(svg_tags)
}

print(json.dumps(output))

# Also create the assets folder
os.makedirs('public/assets', exist_ok=True)

# Download images
for i_url in img_urls:
    full_url = "https://obsidianos.com" + i_url if i_url.startswith('/') else i_url
    filename = i_url.split('/')[-1]
    filepath = os.path.join('public/assets', filename)
    try:
        urllib.request.urlretrieve(full_url, filepath)
        print(f"Downloaded {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
