#!/bin/bash

# Loop through all PNG files in the current directory
for file in *.jpg; do
  # Get the filename without extension
  filename=$(basename "$file" .jpg)
  # Convert the PNG to WebP with quality 80
  cwebp -q 80 "$file" -o "${filename}.webp"
done
