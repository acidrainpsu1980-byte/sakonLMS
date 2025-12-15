'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // TODO: Implement actual authentication
            // For now, just simulate login
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect to dashboard
            router.push('/dashboard');
        } catch (err) {
            setError('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8 animate-fade-in">
                    <Link href="/" className="inline-flex items-center gap-2 mb-4">
                        <BookOpen className="w-10 h-10 text-primary-600" />
                        <span className="text-3xl font-bold gradient-text">SakonLMS</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        ยินดีต้อนรับกลับมา
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        เข้าสู่ระบบเพื่อเริ่มเรียนรู้
                    </p>
                </div>

                {/* Login Form */}
                <div className="card animate-slide-up">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 rounded-lg bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm">
                                {error}
                            </div>
                        )}

                        <Input
                            type="email"
                            label="อีเมล"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            icon={<Mail className="w-5 h-5" />}
                            required
                        />

                        <Input
                            type="password"
                            label="รหัสผ่าน"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            icon={<Lock className="w-5 h-5" />}
                            required
                        />

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" />
                                <span className="text-slate-600 dark:text-slate-400">จดจำฉัน</span>
                            </label>
                            <Link href="/forgot-password" className="text-primary-600 hover:text-primary-700 font-medium">
                                ลืมรหัสผ่าน?
                            </Link>
                        </div>

                        <Button type="submit" className="w-full" isLoading={isLoading}>
                            เข้าสู่ระบบ
                        </Button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-300 dark:border-slate-600"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white dark:bg-slate-800 text-slate-500">หรือ</span>
                            </div>
                        </div>

                        <Button type="button" variant="outline" className="w-full">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            เข้าสู่ระบบด้วย Google
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                        ยังไม่มีบัญชี?{' '}
                        <Link href="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                            สมัครสมาชิก
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
