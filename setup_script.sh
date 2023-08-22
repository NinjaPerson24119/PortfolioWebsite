#!/usr/bin/env bash

# install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
source ~/.bashrc

# install NodeJS
nvm use node

# install pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -


# install fonts
sudo apt install fonts-roboto
