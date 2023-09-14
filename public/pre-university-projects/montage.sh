#sudo apt install -y imagemagick

images=(
  "c++-meteors.webp"
  "c++-streak-space-invaders-clone.webp"
  "c++-molten-miner.png"
  "c++-snake-opengl.webp"
  "csharp-forms-space-invaders.webp"
  "csharp-snake-ascii.webp"
)

montage ${images[@]} -mode concatenate -border 0 -tile 3x3 montage.webp
