# Windows Google Drive Notification System

This project sets up a **Google Drive → Google Sheets → Windows Desktop Notification** system using Google Apps Script and PowerShell.  

## 📌 Features
- **Automatic Sync**: Google Sheets updates trigger notifications on your Windows PC.  
- **No Manual Checking**: Always know when new data is added.  
- **Lightweight Setup**: Uses Google Drive sync + PowerShell + Apps Script.  

---

## 🚀 Setup Instructions

### 1️⃣ Install & Configure Google Drive
1. **Download & Install Google Drive** from [Google Drive Download Page](https://www.google.com/drive/download/).  
2. After installation, locate your Google Drive folder:  
   ```
   C:\Users\USER\Google Drive
   ```
3. Inside **My Drive**, create a new folder named:
   ```
   notifications
   ```
4. Open Google Drive software, click **"Add Folder to Sync"**, and select your new **notifications** folder.

---

### 2️⃣ Add Google Apps Script (JavaScript)
1. Open your **Google Sheets** file.  
2. Go to:
   ```
   Extensions → Apps Script
   ```
3. Create a **new file** and paste the contents of [`app_script.js`](https://github.com/your-repo/app_script.js).  
4. Click **Save** and **Deploy**.

---

### 3️⃣ Add Google Apps Script `application.json`
1. In the same **Apps Script** editor:  
   ```
   Extensions → Apps Script
   ```
2. Open the JSON settings file.  
3. Paste the contents of [`application.json`](https://github.com/your-repo/application.json).  
4. Click **Save**.

---

### 4️⃣ Download & Save `win_notify.ps1`
1. Download [`win_notify.ps1`](https://github.com/your-repo/win_notify.ps1).  
2. Save it to **any location** on your computer (e.g., `F:\win_notify.ps1`).  

---

### 5️⃣ Add PowerShell Script to Windows Startup
1. Press **`Win + R`**, type:
   ```
   shell:startup
   ```
   and press **Enter**.  
2. This opens your **Startup** folder.  
3. Create a new text file inside and paste:
   ```powershell
   powershell -ExecutionPolicy Bypass -WindowStyle Hidden -File "F:\win_notify.ps1"
   ```
   *(Replace `F:\win_notify.ps1` with your actual script location)*  
4. Save the file with a `.bat` extension, e.g.:
   ```
   start_notify.bat
   ```

---

### 6️⃣ Restart Your Computer
- The system will now automatically check the **Google Drive notifications folder** and show Windows notifications when new updates arrive.  

---

## 📂 File Structure
```
📁 Google Drive
 ├── My Drive
 │   ├── notifications
 │
📁 Local Computer
 ├── win_notify.ps1
 ├── start_notify.bat (in Startup folder)
```

---

## ⚠️ Notes
- Ensure **Google Drive Sync** is running at all times.  
- If PowerShell execution is disabled, this script enables it temporarily with `-ExecutionPolicy Bypass`.  
- Internet connection is required for Google Sheets syncing.  

---

## 📜 License
This project is open-source and licensed under the MIT License.  
