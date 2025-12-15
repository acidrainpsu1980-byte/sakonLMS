'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'student' as 'student' | 'instructor',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (formData.password !== formData.confirmPassword) {
            setError('รหัสผ่านไม่ตรงกัน');
            return;
        }

        if (formData.password.length < 8) {
            setError('รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร');
            return;
        }

        setIsLoading(true);

        try {
            // TODO: Implement actual registration
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Redirect to dashboard
            router.push('/dashboard');
        } catch (err) {
            setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
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
                        สร้างบัญชีใหม่
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        เริ่มต้นการเรียนรู้ของคุณวันนี้
                    </p>
                </div>

                {/* Register Form */}
                <div className="card animate-slide-up">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 rounded-lg bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-700 dark:text-danger-400 text-sm">
                                {error}
                            </div>
                        )}

                        <Input
                            type="text"
                            label="ชื่อ-นามสกุล"
                            placeholder="สมชาย ใจดี"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            icon={<User className="w-5 h-5" />}
                            required
                        />

                        <Input
                            type="email"
                            label="อีเมล"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            icon={<Mail className="w-5 h-5" />}
                            required
                        />

                        <Input
                            type="password"
                            label="รหัสผ่าน"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            icon={<Lock className="w-5 h-5" />}
                            required
                        />

                        <Input
                            type="password"
                            label="ยืนยันรหัสผ่าน"
                            placeholder="••••••••"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            icon={<Lock className="w-5 h-5" />}
                            required
                        />

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                ประเภทบัญชี
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: 'student' })}
                                    className={`p-4 rounded-lg border-2 transition-all ${formData.role === 'student'
                                            ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                            : 'border-slate-300 dark:border-slate-600 hover:border-primary-400'
                                        }`}
                                >
                                    <div className="text-center">
                                        <BookOpen className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                                        <div className="font-medium">นักเรียน</div>
                                    </div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: 'instructor' })}
                                    className={`p-4 rounded-lg border-2 transition-all ${formData.role === 'instructor'
                                            ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/20'
                                            : 'border-slate-300 dark:border-slate-600 hover:border-primary-400'
                                        }`}
                                >
                                    <div className="text-center">
                                        <User className="w-8 h-8 mx-auto mb-2 text-primary-600" />
                                        <div className="font-medium">อาจารย์</div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="text-xs text-slate-600 dark:text-slate-400">
                            การสมัครสมาชิกถือว่าคุณยอมรับ{' '}
                            <Link href="/terms" className="text-primary-600 hover:text-primary-700">
                                ข้อกำหนดการใช้งาน
                            </Link>{' '}
                            และ{' '}
                            <Link href="/privacy" className="text-primary-600 hover:text-primary-700">
                                นโยบายความเป็นส่วนตัว
                            </Link>
                        </div>

                        <Button type="submit" className="w-full" isLoading={isLoading}>
                            สมัครสมาชิก
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
                            สมัครด้วย Google
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
                        มีบัญชีอยู่แล้ว?{' '}
                        <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                            เข้าสู่ระบบ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
