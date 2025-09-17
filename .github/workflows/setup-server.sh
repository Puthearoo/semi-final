#!/bin/bash
set -e

echo "🔄 Setting up server for CI/CD deployment..."

# Update system
sudo apt update
sudo apt upgrade -y

# Install Node.js
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Install nginx
if ! command -v nginx &> /dev/null; then
    echo "📦 Installing nginx..."
    sudo apt install nginx -y
    sudo systemctl enable nginx
    sudo systemctl start nginx
fi

# Install ngrok
if ! command -v ngrok &> /dev/null; then
    echo "📦 Installing ngrok..."
    wget -q https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz -O ngrok.tgz
    tar -xzf ngrok.tgz
    sudo mv ngrok /usr/local/bin/
    rm ngrok.tgz
fi

# Setup deployment directory
mkdir -p ~/backend
sudo mkdir -p /var/www/html
sudo chown -R $USER:$USER /var/www/html

echo "✅ Server setup completed!"
echo "📝 Next steps:"
echo "1. Add your public key to ~/.ssh/authorized_keys"
echo "2. Configure ngrok authtoken: ngrok config add-authtoken YOUR_TOKEN"
echo "3. Ensure SSH service is running: sudo systemctl status ssh"