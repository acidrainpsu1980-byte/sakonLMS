# SakonLMS - Learning Management System

A modern, feature-rich Learning Management System built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **User Authentication**: Email/password and Google OAuth login
- **Role-Based Access**: Student, Instructor, and Admin roles
- **Course Management**: Create, edit, and manage courses
- **Content Delivery**: Organize content with modules and lessons
- **Assignments & Grading**: Submit assignments and receive grades
- **Progress Tracking**: Track learning progress in real-time
- **Modern UI/UX**: Beautiful, responsive design with animations
- **Dark Mode**: Full dark mode support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: NextAuth.js
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sakonlms.git
cd sakonlms
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your credentials:
- Supabase URL and keys
- NextAuth secret
- Google OAuth credentials (optional)

4. Set up the database:
- Create a Supabase project at https://supabase.com
- Run the SQL schema from `lib/supabase/schema.sql` in the Supabase SQL editor

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗄️ Database Setup

1. Create a new project on [Supabase](https://supabase.com)
2. Go to the SQL Editor
3. Copy and paste the contents of `lib/supabase/schema.sql`
4. Run the SQL to create all tables and relationships
5. Copy your project URL and anon key to `.env.local`

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/sakonlms)

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID` (optional)
- `GOOGLE_CLIENT_SECRET` (optional)

## 📁 Project Structure

```
sakonlms/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Login page
│   ├── register/         # Registration page
│   ├── courses/          # Course pages
│   ├── assignments/      # Assignment pages
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/            # React components
│   ├── ui/               # UI components
│   ├── layout/           # Layout components
│   ├── courses/          # Course components
│   └── assignments/      # Assignment components
├── lib/                   # Utility functions
│   ├── supabase/         # Supabase client & schema
│   └── auth.ts           # Auth utilities
├── public/               # Static assets
└── package.json          # Dependencies
```

## 🎨 Design Features

- **Glassmorphism Effects**: Modern glass-like UI elements
- **Smooth Animations**: Fade-in, slide-up, and scale animations
- **Gradient Text**: Eye-catching gradient text effects
- **Hover Effects**: Interactive hover states with lift effects
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Automatic dark mode support

## 👥 User Roles

### Student
- Enroll in courses
- View course content
- Submit assignments
- Track progress
- View grades

### Instructor
- Create and manage courses
- Upload course content
- Create assignments
- Grade submissions
- View student progress

### Admin
- Manage all users
- Manage all courses
- View analytics
- System configuration

## 📝 License

MIT License - feel free to use this project for learning or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For support, email info@sakonlms.com or create an issue in the repository.

---

Built with ❤️ using Next.js and Tailwind CSS
