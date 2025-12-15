# 🚀 คู่มือการ Deploy SakonLMS ไปยัง Azure

## ขั้นตอนที่ 1: เตรียม Supabase Database

1. ไปที่ [Supabase](https://supabase.com) และสร้างโปรเจกต์ใหม่
2. ไปที่ **SQL Editor** และรันคำสั่งจากไฟล์ `lib/supabase/schema.sql`
3. บันทึกข้อมูลต่อไปนี้:
   - Project URL: `https://xxxxx.supabase.co`
   - Anon Key: จาก Settings > API > anon/public key
   - Service Role Key: จาก Settings > API > service_role key

## ขั้นตอนที่ 2: Push โค้ดไปยัง GitHub

```bash
# ถ้ายังไม่ได้ init git
git init
git add .
git commit -m "Initial commit - SakonLMS"

# สร้าง repository ใหม่บน GitHub แล้วรัน
git remote add origin https://github.com/YOUR_USERNAME/sakonlms.git
git branch -M main
git push -u origin main
```

## ขั้นตอนที่ 3: สร้าง Azure Static Web App

### วิธีที่ 1: ผ่าน Azure Portal (แนะนำ)

1. ไปที่ [Azure Portal](https://portal.azure.com)
2. คลิก **Create a resource**
3. ค้นหา **Static Web App** และคลิก **Create**
4. กรอกข้อมูล:
   - **Subscription**: เลือก subscription ของคุณ
   - **Resource Group**: สร้างใหม่หรือเลือกที่มีอยู่
   - **Name**: `sakonlms` (หรือชื่อที่คุณต้องการ)
   - **Plan type**: Free (สำหรับทดสอบ)
   - **Region**: Southeast Asia
   - **Deployment details**:
     - Source: GitHub
     - Organization: YOUR_GITHUB_USERNAME
     - Repository: sakonlms
     - Branch: main
   - **Build Details**:
     - Build Presets: Next.js
     - App location: `/`
     - Api location: (ปล่อยว่าง)
     - Output location: `.next`

5. คลิก **Review + create** แล้ว **Create**

### วิธีที่ 2: ผ่าน Azure CLI

```bash
# ติดตั้ง Azure CLI (ถ้ายังไม่มี)
brew install azure-cli

# Login
az login

# สร้าง Static Web App
az staticwebapp create \
  --name sakonlms \
  --resource-group YOUR_RESOURCE_GROUP \
  --source https://github.com/YOUR_USERNAME/sakonlms \
  --location "Southeast Asia" \
  --branch main \
  --app-location "/" \
  --output-location ".next" \
  --login-with-github
```

## ขั้นตอนที่ 4: ตั้งค่า Environment Variables

1. ไปที่ Azure Portal > Static Web App ที่สร้าง
2. เลือก **Configuration** จากเมนูด้านซ้าย
3. คลิก **+ Add** และเพิ่ม environment variables:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXTAUTH_URL=https://your-app-name.azurestaticapps.net
NEXTAUTH_SECRET=generate_random_secret_here
```

**สร้าง NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

4. คลิก **Save**

## ขั้นตอนที่ 5: ตั้งค่า GitHub Secrets

1. ไปที่ GitHub repository > Settings > Secrets and variables > Actions
2. คลิก **New repository secret** และเพิ่ม:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXTAUTH_URL=https://your-app-name.azurestaticapps.net
NEXTAUTH_SECRET=your_secret
```

## ขั้นตอนที่ 6: Deploy

การ deploy จะเกิดขึ้นอัตโนมัติเมื่อ push โค้ดไปยัง GitHub:

```bash
git add .
git commit -m "Configure for Azure deployment"
git push origin main
```

ตรวจสอบสถานะการ deploy:
- ไปที่ GitHub repository > Actions
- หรือไปที่ Azure Portal > Static Web App > Deployments

## ขั้นตอนที่ 7: ตรวจสอบ

1. รอให้ deployment เสร็จ (ประมาณ 3-5 นาที)
2. เปิด URL ที่ได้: `https://your-app-name.azurestaticapps.net`
3. ทดสอบฟีเจอร์ต่างๆ:
   - Landing page
   - Login/Register
   - Dashboard

## 🔧 Troubleshooting

### ปัญหา: Build ไม่สำเร็จ
- ตรวจสอบ logs ใน GitHub Actions
- ตรวจสอบว่า dependencies ใน package.json ครบถ้วน

### ปัญหา: Environment variables ไม่ทำงาน
- ตรวจสอบว่าตั้งค่าทั้งใน Azure Portal และ GitHub Secrets
- Redeploy หลังจากเพิ่ม environment variables

### ปัญหา: Database connection error
- ตรวจสอบ Supabase URL และ keys
- ตรวจสอบว่ารัน schema.sql แล้ว

## 📊 ตรวจสอบ Logs

```bash
# ดู deployment logs
az staticwebapp show --name sakonlms --resource-group YOUR_RESOURCE_GROUP

# ดู application logs
az staticwebapp logs show --name sakonlms --resource-group YOUR_RESOURCE_GROUP
```

## 🔄 Update แอพ

เมื่อต้องการอัพเดทแอพ:

```bash
# แก้ไขโค้ด
git add .
git commit -m "Update: description of changes"
git push origin main
```

GitHub Actions จะ deploy ใหม่อัตโนมัติ!

## 💰 ค่าใช้จ่าย

- **Free Tier**: 
  - 100 GB bandwidth/month
  - 0.5 GB storage
  - Custom domains
  - SSL certificates
  - เหมาะสำหรับ development และ small projects

- **Standard Tier**: 
  - Unlimited bandwidth
  - 10 GB storage
  - ราคาเริ่มต้น ~$9/month

## 🌐 Custom Domain (Optional)

1. ไปที่ Azure Portal > Static Web App > Custom domains
2. คลิก **+ Add**
3. ใส่ domain ของคุณ
4. ตั้งค่า DNS ตามที่ Azure แนะนำ

---

**หมายเหตุ**: ถ้าต้องการใช้ Azure App Service แทน Static Web Apps (สำหรับ features ที่ซับซ้อนกว่า) สามารถใช้ Docker deployment ได้ค่ะ
