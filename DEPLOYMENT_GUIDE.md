# Deployment Guide for NetworkSolutions

## 📦 What to Upload

You need to upload the **entire `.next/standalone/` folder** to your server.

## 📁 Folder Structure on Your Server

After uploading, your server should have this structure:

```
your-server-root/
├── standalone/
│   ├── .next/
│   │   ├── static/          (CSS, JS, images)
│   │   ├── BUILD_ID
│   │   └── [other build files]
│   ├── public/
│   │   ├── images/
│   │   └── [other public files]
│   ├── node_modules/        (will be created after npm install)
│   ├── server.js            (main server file)
│   └── package.json
```

## 🚀 Step-by-Step Upload Instructions

### Option 1: Upload as ZIP (Easier)

1. **Create a ZIP file:**
   - Navigate to `.next/standalone/` folder
   - Compress it into a ZIP file (name it `standalone.zip`)
   - Upload `standalone.zip` to your server
   - Extract it on the server (NetworkSolutions file manager should have an extract option)

2. **After extraction:**
   - You should have a `standalone` folder on your server
   - Navigate into it via SSH or terminal

### Option 2: Upload Folder Structure (Manual)

If you must use the file manager:

1. **Create the folder structure on your server:**
   - Create a folder called `standalone`
   - Inside `standalone`, create:
     - `.next` folder
     - `public` folder

2. **Upload files:**
   - Upload all files from `.next/standalone/.next/` → `standalone/.next/`
   - Upload all files from `.next/standalone/public/` → `standalone/public/`
   - Upload `server.js` → `standalone/server.js`
   - Upload `package.json` → `standalone/package.json`

## ⚙️ Server Setup (After Upload)

### Via SSH/Terminal:

```bash
# Navigate to the standalone folder
cd standalone

# Install production dependencies
npm install --production

# Set environment variable (replace with your actual key)
export RESEND_API_KEY=re_PgUjwo7Z_PyU2QWoigJsNHsVNzRR97KZ1

# Start the server
node server.js
```

### Via NetworkSolutions Control Panel:

1. **Set Environment Variable:**
   - Look for "Environment Variables" or "App Settings"
   - Add: `RESEND_API_KEY` = `re_PgUjwo7Z_PyU2QWoigJsNHsVNzRR97KZ1`

2. **Install Dependencies:**
   - Use their terminal/SSH feature to run: `npm install --production`

3. **Start the Server:**
   - They might have a "Start Application" button
   - Or use: `node server.js`
   - Or set up a process manager (PM2, forever, etc.)

## 🔧 Important Notes

1. **Port Configuration:**
   - The server runs on port 3000 by default
   - NetworkSolutions might require a specific port
   - Check their documentation or set `PORT` environment variable

2. **Node.js Version:**
   - Make sure your server has Node.js 18+ installed
   - Check with: `node --version`

3. **Keep Server Running:**
   - Use a process manager like PM2:
     ```bash
     npm install -g pm2
     pm2 start server.js --name portfolio
     pm2 save
     pm2 startup
     ```

4. **Domain Configuration:**
   - Point your domain to the server
   - If using a subdomain, configure it in NetworkSolutions DNS settings

## 📋 Quick Checklist

- [ ] Upload `.next/standalone/` folder to server
- [ ] Extract/unzip if needed
- [ ] Run `npm install --production` in the standalone folder
- [ ] Set `RESEND_API_KEY` environment variable
- [ ] Configure port (if needed)
- [ ] Start the server (`node server.js` or via PM2)
- [ ] Test the site at your domain
- [ ] Test the contact form

## 🆘 Troubleshooting

**Server won't start:**
- Check Node.js version: `node --version` (needs 18+)
- Check if port 3000 is available
- Check server logs for errors

**Static files not loading:**
- Verify `.next/static` folder exists in `standalone/.next/`
- Check file permissions

**Contact form not working:**
- Verify `RESEND_API_KEY` is set correctly
- Check server logs for API errors

## 📞 Need Help?

If you get stuck, check:
- NetworkSolutions documentation for Node.js apps
- Server error logs
- Node.js version compatibility
