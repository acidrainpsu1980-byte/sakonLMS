'use client';

import Link from 'next/link';
import { BookOpen, Users, Award, TrendingUp, LogOut, Menu } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Navigation */}
            <nav className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-8 h-8 text-primary-600" />
                            <span className="text-2xl font-bold gradient-text">SakonLMS</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/courses" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 transition-colors">
                                คอร์สเรียน
                            </Link>
                            <Link href="/assignments" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 transition-colors">
                                งานมอบหมาย
                            </Link>
                            <Button variant="ghost" size="sm">
                                <LogOut className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8 animate-fade-in">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        สวัสดี, นักเรียน! 👋
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400">
                        ยินดีต้อนรับสู่แดชบอร์ดของคุณ พร้อมเรียนรู้สิ่งใหม่ๆ กันเถอะ
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    <StatCard
                        icon={<BookOpen className="w-8 h-8 text-primary-600" />}
                        title="คอร์สที่ลงทะเบียน"
                        value="5"
                        bgColor="bg-primary-50 dark:bg-primary-900/20"
                    />
                    <StatCard
                        icon={<TrendingUp className="w-8 h-8 text-success-600" />}
                        title="ความคืบหน้า"
                        value="68%"
                        bgColor="bg-success-50 dark:bg-success-900/20"
                    />
                    <StatCard
                        icon={<Award className="w-8 h-8 text-warning-600" />}
                        title="ใบประกาศนียบัตร"
                        value="2"
                        bgColor="bg-warning-50 dark:bg-warning-900/20"
                    />
                    <StatCard
                        icon={<Users className="w-8 h-8 text-secondary-600" />}
                        title="งานที่ค้างส่ง"
                        value="3"
                        bgColor="bg-secondary-50 dark:bg-secondary-900/20"
                    />
                </div>

                {/* Course Progress */}
                <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    <Card className="animate-slide-up">
                        <CardHeader>
                            <CardTitle>คอร์สที่กำลังเรียน</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <CourseProgress
                                    title="Introduction to Web Development"
                                    progress={75}
                                    instructor="อ. สมชาย"
                                    status="กำลังเรียน"
                                />
                                <CourseProgress
                                    title="Advanced React Patterns"
                                    progress={45}
                                    instructor="อ. สมหญิง"
                                    status="กำลังเรียน"
                                />
                                <CourseProgress
                                    title="Database Design"
                                    progress={90}
                                    instructor="อ. วิชัย"
                                    status="ใกล้เสร็จ"
                                />
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <CardHeader>
                            <CardTitle>งานมอบหมายล่าสุด</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <AssignmentItem
                                    title="Build a Todo App"
                                    course="Web Development"
                                    dueDate="3 วันที่เหลือ"
                                    status="pending"
                                />
                                <AssignmentItem
                                    title="Database Schema Design"
                                    course="Database Design"
                                    dueDate="1 สัปดาห์ที่เหลือ"
                                    status="pending"
                                />
                                <AssignmentItem
                                    title="React Component Library"
                                    course="Advanced React"
                                    dueDate="ส่งแล้ว"
                                    status="submitted"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <Card className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                    <CardHeader>
                        <CardTitle>การดำเนินการด่วน</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/courses">
                                <Button variant="outline" className="w-full">
                                    <BookOpen className="w-5 h-5" />
                                    เรียกดูคอร์สทั้งหมด
                                </Button>
                            </Link>
                            <Link href="/assignments">
                                <Button variant="outline" className="w-full">
                                    <Award className="w-5 h-5" />
                                    ดูงานมอบหมาย
                                </Button>
                            </Link>
                            <Link href="/certificates">
                                <Button variant="outline" className="w-full">
                                    <TrendingUp className="w-5 h-5" />
                                    ใบประกาศนียบัตร
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}

function StatCard({ icon, title, value, bgColor }: { icon: React.ReactNode; title: string; value: string; bgColor: string }) {
    return (
        <Card hover className="animate-scale-in">
            <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${bgColor}`}>
                    {icon}
                </div>
                <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{title}</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
                </div>
            </div>
        </Card>
    );
}

function CourseProgress({ title, progress, instructor, status }: { title: string; progress: number; instructor: string; status: string }) {
    return (
        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">
            <div className="flex items-start justify-between mb-2">
                <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{instructor}</p>
                </div>
                <Badge variant={progress >= 80 ? 'success' : 'info'}>{status}</Badge>
            </div>
            <Progress value={progress} showLabel />
        </div>
    );
}

function AssignmentItem({ title, course, dueDate, status }: { title: string; course: string; dueDate: string; status: 'pending' | 'submitted' }) {
    return (
        <div className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary-500 transition-colors">
            <div className="flex items-start justify-between">
                <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{course}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{dueDate}</p>
                </div>
                <Badge variant={status === 'submitted' ? 'success' : 'warning'}>
                    {status === 'submitted' ? 'ส่งแล้ว' : 'รอส่ง'}
                </Badge>
            </div>
        </div>
    );
}
