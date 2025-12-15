# 🚀 Quick Start: Deploy to Azure (5 นาที)

## ✅ สิ่งที่เตรียมไว้แล้ว
- ✅ โค้ดอยู่บน GitHub: https://github.com/acidrainpsu1980-byte/sakonLMS
- ✅ ไฟล์ configuration สำหรับ Azure
- ✅ GitHub Actions workflow

## 📋 สิ่งที่ต้องทำ

### 1. สร้าง Supabase Database (5 นาที)

1. ไปที่ https://supabase.com และ Sign up/Login
2. คลิก **New Project**
   - Name: `sakonlms`
   - Database Password: สร้างรหัสผ่านที่แข็งแรง
   - Region: Southeast Asia (Singapore)
3. รอให้ database สร้างเสร็จ (1-2 นาที)
4. ไปที่ **SQL Editor** (เมนูด้านซ้าย)
5. คลิก **New query**
6. Copy โค้ดจากไฟล์ `lib/supabase/schema.sql` ทั้งหมด
7. Paste และคลิก **Run**
8. บันทึกข้อมูลเหล่านี้ (Settings > API):
   ```
   Project URL: https://xxxxx.supabase.co
   anon/public key: eyJhbGc...
   service_role key: eyJhbGc...
   ```

### 2. Deploy ไปยัง Azure (10 นาที)

#### ขั้นตอนที่ 1: สร้าง Static Web App

1. ไปที่ https://portal.azure.com
2. คลิก **Create a resource** (ปุ่มสีน้ำเงิน)
3. ค้นหา **Static Web App** และคลิก **Create**

#### ขั้นตอนที่ 2: กรอกข้อมูล

**Basics:**
- Subscription: เลือก subscription ของคุณ
- Resource Group: คลิก **Create new** → ตั้งชื่อ `sakonlms-rg`
- Name: `sakonlms` (หรือชื่อที่ต้องการ)
- Plan type: **Free** (สำหรับทดสอบ)
- Region for Azure Functions: **East Asia**
- Source: **GitHub**

**GitHub Details:**
- คลิก **Sign in with GitHub** และอนุญาต
- Organization: `acidrainpsu1980-byte`
- Repository: `sakonLMS`
- Branch: `main`

**Build Details:**
- Build Presets: **Next.js**
- App location: `/`
- Api location: (ปล่อยว่าง)
- Output location: `.next`

#### ขั้นตอนที่ 3: สร้าง

1. คลิก **Review + create**
2. ตรวจสอบข้อมูล
3. คลิก **Create**
4. รอ 2-3 นาที

#### ขั้นตอนที่ 4: ตั้งค่า Environment Variables

1. หลังจากสร้างเสร็จ คลิก **Go to resource**
2. เลือก **Configuration** จากเมนูด้านซ้าย
3. คลิก **+ Add** และเพิ่มทีละตัว:

```bash
# Supabase (จากขั้นตอนที่ 1)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...

# NextAuth
NEXTAUTH_URL=https://sakonlms.azurestaticapps.net
NEXTAUTH_SECRET=<สร้างด้านล่าง>
```

**สร้าง NEXTAUTH_SECRET:**
- เปิด Terminal
- รัน: `openssl rand -base64 32`
- Copy ผลลัพธ์ไปใส่

4. คลิก **Save**

#### ขั้นตอนที่ 5: ตั้งค่า GitHub Secrets

1. ไปที่ https://github.com/acidrainpsu1980-byte/sakonLMS
2. คลิก **Settings** > **Secrets and variables** > **Actions**
3. คลิก **New repository secret** และเพิ่ม:

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://xxxxx.supabase.co

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGc...

Name: NEXTAUTH_URL
Value: https://sakonlms.azurestaticapps.net

Name: NEXTAUTH_SECRET
Value: <ค่าที่สร้างไว้>
```

#### ขั้นตอนที่ 6: Trigger Deployment

1. ไปที่ GitHub repository
2. คลิก **Actions** (เมนูบน)
3. คลิก workflow ที่กำลังรัน (ถ้ามี) หรือ
4. กลับไปที่ Azure Portal > Static Web App > **Deployments**
5. รอให้ status เป็น **Ready** (3-5 นาที)

### 3. ทดสอบ

1. ไปที่ Azure Portal > Static Web App > **Overview**
2. คลิกที่ **URL** (https://sakonlms.azurestaticapps.net)
3. ทดสอบ:
   - ✅ Landing page โหลดได้
   - ✅ คลิก "สมัครสมาชิก" ไปหน้า register
   - ✅ คลิก "เข้าสู่ระบบ" ไปหน้า login

## 🎯 URL ของคุณ

- **Production URL**: https://sakonlms.azurestaticapps.net
- **GitHub Repo**: https://github.com/acidrainpsu1980-byte/sakonLMS
- **Supabase Dashboard**: https://app.supabase.com

## 🔄 การอัพเดทในอนาคต

เมื่อต้องการแก้ไขโค้ด:

```bash
# แก้ไขไฟล์
git add .
git commit -m "Update: คำอธิบาย"
git push origin main
```

GitHub Actions จะ deploy ใหม่อัตโนมัติภายใน 3-5 นาที!

## ❓ ถ้ามีปัญหา

### Build ไม่สำเร็จ
1. ไปที่ GitHub > Actions
2. คลิกที่ workflow ที่ล้มเหลว
3. ดู error logs

### Environment variables ไม่ทำงาน
1. ตรวจสอบว่าตั้งค่าครบทั้งใน Azure และ GitHub
2. Redeploy: GitHub > Actions > Re-run workflow

### Database connection error
1. ตรวจสอบ Supabase URL และ keys อีกครั้ง
2. ตรวจสอบว่ารัน schema.sql แล้ว

## 📞 ต้องการความช่วยเหลือ?

ดูคู่มือฉบับเต็มที่: `DEPLOYMENT_AZURE.md`
