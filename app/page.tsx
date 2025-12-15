import Link from 'next/link';
import { BookOpen, Users, Award, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export default function HomePage() {
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 glass-dark border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-8 h-8 text-primary-400" />
                            <span className="text-2xl font-bold gradient-text">SakonLMS</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/login" className="text-slate-300 hover:text-white transition-colors">
                                เข้าสู่ระบบ
                            </Link>
                            <Link href="/register" className="btn btn-primary">
                                สมัครสมาชิก
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-transparent"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                            เรียนรู้อย่างไร้ขีดจำกัด
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                            ระบบการเรียนการสอนออนไลน์ที่ทันสมัย พร้อมเครื่องมือครบครัน
                            เพื่อการเรียนรู้ที่มีประสิทธิภาพ
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/register" className="btn btn-primary text-lg px-8 py-4 hover-lift">
                                เริ่มต้นใช้งานฟรี
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/courses" className="btn btn-outline text-lg px-8 py-4 hover-lift">
                                ดูคอร์สเรียน
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
                        ฟีเจอร์ที่โดดเด่น
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<BookOpen className="w-12 h-12 text-primary-500" />}
                            title="คอร์สเรียนหลากหลาย"
                            description="เลือกเรียนจากคอร์สมากมาย ครอบคลุมทุกสาขาวิชา"
                        />
                        <FeatureCard
                            icon={<Users className="w-12 h-12 text-secondary-500" />}
                            title="เรียนกับผู้เชี่ยวชาญ"
                            description="อาจารย์ผู้สอนที่มีประสบการณ์และความเชี่ยวชาญ"
                        />
                        <FeatureCard
                            icon={<Award className="w-12 h-12 text-success-500" />}
                            title="ใบประกาศนียบัตร"
                            description="รับใบประกาศนียบัตรเมื่อจบคอร์สเรียน"
                        />
                        <FeatureCard
                            icon={<TrendingUp className="w-12 h-12 text-warning-500" />}
                            title="ติดตามความก้าวหน้า"
                            description="ระบบติดตามผลการเรียนแบบเรียลไทม์"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-up">
                            <h2 className="text-4xl font-bold mb-6 gradient-text">
                                ทำไมต้องเลือก SakonLMS?
                            </h2>
                            <div className="space-y-4">
                                <BenefitItem text="เรียนได้ทุกที่ทุกเวลา ผ่านอุปกรณ์ใดก็ได้" />
                                <BenefitItem text="เนื้อหาคุณภาพสูง อัพเดทอยู่เสมอ" />
                                <BenefitItem text="ระบบทดสอบและงานมอบหมายที่หลากหลาย" />
                                <BenefitItem text="ติดต่ออาจารย์และเพื่อนร่วมชั้นได้ง่าย" />
                                <BenefitItem text="ราคาเหมาะสม คุ้มค่ากับการลงทุน" />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-secondary-600 p-1 hover-lift">
                                <div className="w-full h-full rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="text-6xl font-bold gradient-text mb-4">1000+</div>
                                        <div className="text-xl text-slate-600 dark:text-slate-300">
                                            นักเรียนที่ไว้วางใจ
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-secondary-600">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl font-bold mb-6">
                        พร้อมที่จะเริ่มต้นการเรียนรู้แล้วหรือยัง?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        สมัครสมาชิกวันนี้ รับฟรี 7 วันทดลองใช้งาน
                    </p>
                    <Link href="/register" className="btn bg-white text-primary-600 hover:bg-slate-100 text-lg px-8 py-4 hover-lift">
                        เริ่มต้นเลย
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen className="w-6 h-6 text-primary-400" />
                                <span className="text-xl font-bold text-white">SakonLMS</span>
                            </div>
                            <p className="text-sm">
                                ระบบการเรียนการสอนออนไลน์ที่ทันสมัย
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">เกี่ยวกับเรา</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/about" className="hover:text-white transition-colors">เกี่ยวกับ SakonLMS</Link></li>
                                <li><Link href="/team" className="hover:text-white transition-colors">ทีมงาน</Link></li>
                                <li><Link href="/careers" className="hover:text-white transition-colors">ร่วมงานกับเรา</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">บริการ</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link href="/courses" className="hover:text-white transition-colors">คอร์สเรียน</Link></li>
                                <li><Link href="/pricing" className="hover:text-white transition-colors">ราคา</Link></li>
                                <li><Link href="/support" className="hover:text-white transition-colors">ช่วยเหลือ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-4">ติดต่อเรา</h3>
                            <ul className="space-y-2 text-sm">
                                <li>อีเมล: info@sakonlms.com</li>
                                <li>โทร: 02-XXX-XXXX</li>
                                <li>Line: @sakonlms</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 pt-8 text-center text-sm">
                        <p>&copy; 2024 SakonLMS. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="card hover-lift animate-scale-in text-center">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{description}</p>
        </div>
    );
}

function BenefitItem({ text }: { text: string }) {
    return (
        <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-success-500 flex-shrink-0 mt-0.5" />
            <p className="text-lg text-slate-700 dark:text-slate-300">{text}</p>
        </div>
    );
}
