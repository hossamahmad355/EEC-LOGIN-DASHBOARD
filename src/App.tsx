/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, ShieldCheck, Users, FolderGit2, Wrench, LifeBuoy, 
  Lock, User, Eye, EyeOff, CheckCircle2, Info, Search, Bell, 
  Settings, LogOut, ChevronRight, Plus, FileText, HardHat, 
  Truck, AlertTriangle, Check, Globe, Download, ExternalLink,
  Phone, Mail, MapPin, Calendar, Clock, BarChart3, ArrowUpRight,
  Sun, Moon
} from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('EEC.LOCAL\\hossam.ahmad');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'projects' | 'directory' | 'resources' | 'equipment' | 'support'>('dashboard');
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newTicketModal, setNewTicketModal] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Mock data for EEC projects
  const [projects, setProjects] = useState([
    {
      id: 'EEC-101',
      nameAr: 'برج العاصمة الإدارية الأيقوني',
      nameEn: 'Administrative Capital Iconic Tower',
      location: 'New Capital, Cairo',
      progress: 78,
      budget: '$45M',
      manager: 'Eng. Mahmoud El-Shenawy',
      status: 'Active',
      deadline: 'Dec 2026',
      safetyScore: '98%',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f1f7d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'EEC-102',
      nameAr: 'توسعة ميناء الإسكندرية البحري',
      nameEn: 'Alexandria Port Marine Expansion',
      location: 'Alexandria Port',
      progress: 62,
      budget: '$30M',
      manager: 'Eng. Tarek Amin',
      status: 'Active',
      deadline: 'Aug 2027',
      safetyScore: '95%',
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'EEC-103',
      nameAr: 'محطة مياه الدلتا الكبرى',
      nameEn: 'Greater Delta Water Treatment Plant',
      location: 'Delta Region',
      progress: 91,
      budget: '$18M',
      manager: 'Eng. Sarah Fathy',
      status: 'Final Phase',
      deadline: 'May 2026',
      safetyScore: '99%',
      image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'EEC-104',
      nameAr: 'مجمع الصناعات الثقيلة بالسويس',
      nameEn: 'Suez Heavy Industries Complex',
      location: 'Suez Economic Zone',
      progress: 45,
      budget: '$65M',
      manager: 'Eng. Khaled Mansour',
      status: 'Active',
      deadline: 'Nov 2027',
      safetyScore: '94%',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    }
  ]);

  const employees = [
    { name: 'Dr. Eng. Ahmed Zaki', title: 'Chief Executive Officer', dept: 'Executive Board', email: 'a.zaki@eec.local', ext: '1001' },
    { name: 'Eng. Hossam Ahmad', title: 'Senior Lead Solutions Architect', dept: 'Digital Transformation', email: 'h.ahmad@eec.local', ext: '1042' },
    { name: 'Eng. Mona Mostafa', title: 'Director of Civil Engineering', dept: 'Civil & Structural', email: 'm.mostafa@eec.local', ext: '1025' },
    { name: 'Eng. Karim Rashed', title: 'Head of Safety & HSE', dept: 'Health, Safety & Environment', email: 'k.rashed@eec.local', ext: '1088' },
    { name: 'Youssef El-Gabaly', title: 'Senior Procurement Manager', dept: 'Supply Chain', email: 'y.elgabaly@eec.local', ext: '1102' }
  ];

  const equipmentList = [
    { code: 'CRANE-01', name: 'Liebherr Tower Crane 280 EC-H', site: 'New Capital Tower', status: 'Operational', lastService: '12 Oct 2026' },
    { code: 'EXC-04', name: 'Caterpillar 349 Excavator', site: 'Alexandria Port', status: 'Operational', lastService: '01 Nov 2026' },
    { code: 'PUMP-02', name: 'Putzmeister Concrete Trailer Pump', site: 'Greater Delta Plant', status: 'Maintenance', lastService: 'Today' },
    { code: 'GEN-09', name: 'Cummins 500kVA Generator', site: 'Suez Complex', status: 'Operational', lastService: '24 Sep 2026' }
  ];

  const resourcesList = [
    { title: 'EEC Corporate Safety Manual v4.2', category: 'HSE', size: '4.2 MB', date: 'Jan 2026' },
    { title: 'ISO 9001:2015 Quality Certification', category: 'Compliance', size: '2.8 MB', date: 'Mar 2025' },
    { title: 'Standard Engineering Blueprint Template (CAD)', category: 'Design', size: '15.6 MB', date: 'Feb 2026' },
    { title: 'Employee Domain Authentication & VPN Guide', category: 'IT Support', size: '1.5 MB', date: 'Aug 2025' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen relative flex items-center justify-center p-4 lg:p-8 overflow-hidden font-sans bg-slate-950">
        {/* Background Backdrop poster image */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 filter brightness-95"
          style={{ backgroundImage: `url('/assets/aistudio/EEC_Digital_Engineering_Portal_Poster_69ed91aa.png')` }}
        >
          <div className="absolute inset-0 bg-blue-950/20"></div>
        </div>
        
        {/* Fully Transparent Glassmorphic Login Card */}
        <div className="relative z-10 w-full max-w-lg bg-slate-950/35 backdrop-blur-md border border-amber-400/50 rounded-3xl shadow-2xl p-8 lg:p-10 flex flex-col justify-between text-white">
          
          {/* Top header with Egyptian flag, theme switcher, & language switcher */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5 bg-black/40 border border-amber-400/40 px-3 py-1.5 rounded-xl">
              <div className="w-6 h-4 rounded overflow-hidden shadow relative flex flex-col">
                <div className="bg-red-600 h-1/3 w-full"></div>
                <div className="bg-white h-1/3 w-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                </div>
                <div className="bg-black h-1/3 w-full"></div>
              </div>
              <span className="text-amber-300 font-bold text-xs">جمهورية مصر العربية</span>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-xl bg-blue-900/50 hover:bg-blue-800/70 border border-blue-500/30 text-blue-200 text-xs font-semibold transition"
                title="تغيير المظهر (Light/Dark)"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-200" />}
              </button>

              <button 
                onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-900/50 hover:bg-blue-800/70 border border-blue-500/30 text-blue-200 text-xs font-semibold transition"
              >
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                {lang === 'ar' ? 'English' : 'العربية'}
              </button>
            </div>
          </div>

          <div className="w-full space-y-6">
            
            {/* EEC Logo & Seal */}
            <div className="text-center space-y-3">
              <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-b from-blue-950/80 to-slate-950/90 border-2 border-amber-400 flex items-center justify-center p-2 shadow-2xl shadow-blue-900/60 relative group">
                <div className="absolute inset-1 rounded-full border border-dashed border-amber-400/60 animate-spin-slow"></div>
                <div className="text-center">
                  <Building2 className="w-10 h-10 text-amber-400 mx-auto mb-1" />
                  <span className="text-[10px] font-bold text-white tracking-widest block">EEC</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white drop-shadow">الشركة المصرية الهندسية للمقاولات</h3>
                <p className="text-xs text-slate-200">Egyptian Engineering Company</p>
              </div>
              <div className="pt-2">
                <h4 className="text-xl font-bold text-amber-400 drop-shadow">تسجيل الدخول</h4>
                <p className="text-xs text-slate-200 mt-0.5">Sign in with your company account (Domain Authentication)</p>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Domain Username Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-200">Domain \ Username</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-300">
                    <User className="w-5 h-5" />
                  </div>
                  <input 
                    type="text" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    placeholder="EEC.LOCAL\Username"
                    className="w-full pl-10 pr-4 py-3 bg-slate-950/50 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono shadow-inner backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-200">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-300">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-slate-950/50 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 text-sm font-mono shadow-inner backdrop-blur-sm"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-300 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit Button with Windows Style Icon */}
              <button 
                type="submit" 
                className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-700/90 via-blue-800/90 to-indigo-900/90 hover:from-blue-600 hover:to-indigo-800 text-white rounded-xl font-semibold shadow-lg shadow-blue-900/50 border border-blue-400/40 flex items-center justify-center gap-3 transition transform active:scale-[0.99] backdrop-blur-md"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 88 88">
                  <path d="M0 12.402l35.687-4.860v34.492h-35.687v-29.632zm35.687 34.195l0 34.603-35.687-5.011v-29.592h35.687zm4.313-39.055l48-6.542v41.696h-48v-35.154zm48 39.055v42.593l-48-6.721v-35.872h48z"/>
                </svg>
                <div className="text-left">
                  <div className="text-sm font-bold">تسجيل الدخول بحساب الشركة</div>
                  <div className="text-[10px] text-blue-200 font-normal">Sign in with Company Account</div>
                </div>
              </button>

              {/* Domain Status Badge */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-blue-950/50 border border-blue-800/50 rounded-xl text-xs text-blue-200 shadow-sm backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold">Domain: EEC.LOCAL</span>
                </div>
                <Info className="w-4 h-4 text-blue-300 cursor-pointer" title="Active Directory Connected" />
              </div>
            </form>

          </div>

          {/* Footer 4 Quick Actions */}
          <div className="grid grid-cols-4 gap-2 pt-6 mt-6 border-t border-white/10 text-center">
            <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition cursor-pointer">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-[10px] text-slate-200 font-medium">وصول آمن</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition cursor-pointer">
              <Users className="w-5 h-5 text-blue-300" />
              <span className="text-[10px] text-slate-200 font-medium">دليل الموظفين</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition cursor-pointer">
              <FolderGit2 className="w-5 h-5 text-amber-400" />
              <span className="text-[10px] text-slate-200 font-medium">موارد الشركة</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 transition cursor-pointer">
              <LifeBuoy className="w-5 h-5 text-purple-300" />
              <span className="text-[10px] text-slate-200 font-medium">الدعم الفني</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // Logged In Dashboard View with Theme support
  return (
    <div className={`min-h-screen flex font-sans transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Sidebar Navigation */}
      <aside className={`w-64 border-r flex flex-col justify-between hidden md:flex ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'}`}>
        <div>
          {/* Logo Brand Header */}
          <div className={`p-6 border-b flex items-center gap-3 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
            <div className="w-10 h-10 rounded-xl bg-blue-900 border border-amber-400 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h1 className="font-bold text-base">EEC Portal</h1>
              <p className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Egyptian Eng. Company</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'dashboard' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <BarChart3 className="w-5 h-5" />
              <span>لوحة القيادة الرئيسية</span>
            </button>

            <button 
              onClick={() => setActiveTab('projects')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'projects' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <FolderGit2 className="w-5 h-5" />
              <span>المشاريع الإنشائية</span>
            </button>

            <button 
              onClick={() => setActiveTab('directory')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'directory' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <Users className="w-5 h-5" />
              <span>دليل الموظفين (AD)</span>
            </button>

            <button 
              onClick={() => setActiveTab('resources')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'resources' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <FileText className="w-5 h-5" />
              <span>موارد الشركة والملفات</span>
            </button>

            <button 
              onClick={() => setActiveTab('equipment')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'equipment' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <Truck className="w-5 h-5" />
              <span>المعدات والآلات الثقيلة</span>
            </button>

            <button 
              onClick={() => setActiveTab('support')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${activeTab === 'support' ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : theme === 'dark' ? 'text-slate-400 hover:text-white hover:bg-slate-900' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
            >
              <LifeBuoy className="w-5 h-5" />
              <span>الدعم الفني (IT Support)</span>
            </button>
          </nav>
        </div>

        {/* User Profile Footer in Sidebar */}
        <div className={`p-4 border-t flex items-center justify-between ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-700 flex items-center justify-center font-bold text-white text-xs">
              HA
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs font-bold truncate">Eng. Hossam Ahmad</h4>
              <p className="text-[10px] text-emerald-500 truncate">EEC.LOCAL \ Connected</p>
            </div>
          </div>
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="p-2 text-slate-400 hover:text-red-500 transition"
            title="تسجيل الخروج"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Navbar */}
        <header className={`h-16 border-b px-6 flex items-center justify-between sticky top-0 z-20 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'}`}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="بحث في المشاريع، الموظفين، المستندات..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-72 pl-9 pr-4 py-2 border rounded-xl text-sm focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-100 border-slate-300 text-slate-900 placeholder-slate-400'}`}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border ${theme === 'dark' ? 'bg-blue-950/60 border-blue-800 text-blue-200' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span>Domain Active: EEC.LOCAL</span>
            </div>

            {/* Global Theme Switcher Button */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2.5 rounded-xl border transition ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'}`}
              title="تغيير المظهر (Light/Dark)"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button className={`relative p-2.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900'}`}>
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full"></span>
            </button>

            <div className={`flex items-center gap-3 pl-4 border-l ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold">Eng. Hossam Ahmad</div>
                <div className={`text-[10px] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Senior Solutions Architect</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white shadow">
                HA
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Body Content */}
        <main className="p-6 lg:p-8 space-y-8 max-w-7xl mx-auto w-full">
          
          {/* TAB 1: DASHBOARD OVERVIEW */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 border border-blue-700/40 rounded-2xl p-8 shadow-xl relative overflow-hidden text-white">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-400 via-transparent to-transparent"></div>
                <div className="relative z-10 max-w-2xl space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-800/60 border border-blue-600 text-amber-300 text-xs font-semibold">
                    <HardHat className="w-4 h-4" />
                    <span>المنصة الرقمية لإدارة المشاريع الهندسية</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-white">مرحباً بك، مهندس حسام</h2>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    تشهد الشركة المصرية الهندسية للمقاولات (EEC) حالياً إنجاز 4 مشاريع قومية كبرى بمعدل إنجاز عام يقارب 76.5%. جميع أنظمة الأمان والاتصال بنشط Domain EEC.LOCAL تعمل بكفاءة عالية.
                  </p>
                  <div className="flex items-center gap-4 pt-2">
                    <button 
                      onClick={() => setActiveTab('projects')}
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition"
                    >
                      <span>استعراض المشاريع</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setShowNewProjectModal(true)}
                      className="px-5 py-2.5 bg-blue-800/80 hover:bg-blue-700 text-white font-medium rounded-xl text-xs flex items-center gap-2 border border-blue-600 transition"
                    >
                      <Plus className="w-4 h-4" />
                      <span>إضافة مشروع جديد</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className={`border rounded-2xl p-6 shadow-sm transition ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>إجمالي المشاريع النشطة</span>
                    <div className="p-2.5 bg-blue-900/40 border border-blue-800 rounded-xl text-blue-400">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1 tabular-nums">04</div>
                  <div className="text-xs text-emerald-500 flex items-center gap-1 font-medium">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>100% مطابقة للجداول الزمنية</span>
                  </div>
                </div>

                <div className={`border rounded-2xl p-6 shadow-sm transition ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>معدل السلامة والأمان (HSE)</span>
                    <div className="p-2.5 bg-emerald-900/40 border border-emerald-800 rounded-xl text-emerald-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1 tabular-nums">96.5%</div>
                  <div className="text-xs text-emerald-500 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>بدون إصابات عمل مسجلة</span>
                  </div>
                </div>

                <div className={`border rounded-2xl p-6 shadow-sm transition ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>موظفي الشركة عبر Active Directory</span>
                    <div className="p-2.5 bg-amber-900/40 border border-amber-800 rounded-xl text-amber-400">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1 tabular-nums">1,248</div>
                  <div className="text-xs text-blue-500 flex items-center gap-1 font-medium">
                    <Info className="w-3.5 h-3.5" />
                    <span>متصلين حالياً بالشبكة الآمنة</span>
                  </div>
                </div>

                <div className={`border rounded-2xl p-6 shadow-sm transition ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>قيمة العقود الحالية</span>
                    <div className="p-2.5 bg-purple-900/40 border border-purple-800 rounded-xl text-purple-400">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1 tabular-nums">$158M</div>
                  <div className="text-xs text-emerald-500 flex items-center gap-1 font-medium">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>ضمن موازنة الاستثمار القومي</span>
                  </div>
                </div>
              </div>

              {/* Active Projects Table Preview */}
              <div className={`border rounded-2xl p-6 shadow-sm space-y-6 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">المشاريع الكبرى الجارية</h3>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>متابعة نسب إنجاز المواقع الإنشائية للشركة المصرية الهندسية للمقاولات</p>
                  </div>
                  <button 
                    onClick={() => setActiveTab('projects')}
                    className="text-xs text-amber-500 hover:text-amber-600 font-semibold flex items-center gap-1"
                  >
                    <span>عرض الكل</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-right border-collapse">
                    <thead>
                      <tr className={`border-b text-xs uppercase ${theme === 'dark' ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                        <th className="pb-3 font-semibold">كود المشروع</th>
                        <th className="pb-3 font-semibold">اسم المشروع</th>
                        <th className="pb-3 font-semibold">الموقع</th>
                        <th className="pb-3 font-semibold">مدير المشروع</th>
                        <th className="pb-3 font-semibold">نسبة الإنجاز</th>
                        <th className="pb-3 font-semibold">الموازنة</th>
                        <th className="pb-3 font-semibold">الحالة</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y text-sm ${theme === 'dark' ? 'divide-slate-900' : 'divide-slate-100'}`}>
                      {projects.map((proj) => (
                        <tr key={proj.id} className={`transition cursor-pointer ${theme === 'dark' ? 'hover:bg-slate-900/60' : 'hover:bg-slate-50'}`} onClick={() => setSelectedProject(proj)}>
                          <td className="py-4 font-mono text-xs text-amber-500 font-semibold">{proj.id}</td>
                          <td className="py-4 font-medium">{proj.nameAr}</td>
                          <td className={`py-4 text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{proj.location}</td>
                          <td className={`py-4 text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{proj.manager}</td>
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className={`flex-1 h-2 rounded-full overflow-hidden w-28 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`}>
                                <div className="bg-amber-500 h-full rounded-full" style={{ width: `${proj.progress}%` }}></div>
                              </div>
                              <span className={`text-xs font-mono font-bold tabular-nums ${theme === 'dark' ? 'text-slate-200' : 'text-slate-700'}`}>{proj.progress}%</span>
                            </div>
                          </td>
                          <td className={`py-4 font-mono text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{proj.budget}</td>
                          <td className="py-4">
                            <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-800 text-emerald-400 rounded-full text-xs font-medium">
                              {proj.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PROJECTS MANAGEMENT */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">إدارة المشاريع الإنشائية الكبرى</h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>قائمة المواقع الإنشائية والمتابعة الميدانية للشركة المصرية الهندسية للمقاولات</p>
                </div>
                <button 
                  onClick={() => setShowNewProjectModal(true)}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs flex items-center gap-2 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة مشروع جديد</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj) => (
                  <div key={proj.id} className={`border rounded-2xl overflow-hidden shadow-sm transition flex flex-col justify-between ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <div>
                      <div className="h-48 relative">
                        <img src={proj.image} alt={proj.nameAr} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                        <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-amber-400/50 text-amber-300 px-3 py-1 rounded-xl text-xs font-mono font-bold">
                          {proj.id}
                        </div>
                        <div className="absolute bottom-3 right-3 left-3">
                          <h4 className="text-lg font-bold text-white">{proj.nameAr}</h4>
                          <p className="text-xs text-slate-200">{proj.nameEn}</p>
                        </div>
                      </div>

                      <div className="p-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                            <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>الموقع الجغرافي</span>
                            <span className="font-semibold">{proj.location}</span>
                          </div>
                          <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                            <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>مدير المشروع</span>
                            <span className="font-semibold">{proj.manager}</span>
                          </div>
                          <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                            <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>الموازنة المرصودة</span>
                            <span className="font-semibold font-mono text-amber-500">{proj.budget}</span>
                          </div>
                          <div className={`p-3 rounded-xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                            <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>معدل السلامة (HSE)</span>
                            <span className="font-semibold text-emerald-500">{proj.safetyScore}</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between text-xs">
                            <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>نسبة الإنجاز الفعلية</span>
                            <span className="font-mono font-bold tabular-nums">{proj.progress}%</span>
                          </div>
                          <div className={`h-2.5 rounded-full overflow-hidden border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-200 border-slate-300'}`}>
                            <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${proj.progress}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`p-4 border-t flex items-center justify-between ${theme === 'dark' ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                      <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>التسليم المستهدف: <strong className={theme === 'dark' ? 'text-white' : 'text-slate-950'}>{proj.deadline}</strong></span>
                      <button 
                        onClick={() => setSelectedProject(proj)}
                        className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-medium transition"
                      >
                        تفاصيل الموقع
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: EMPLOYEE DIRECTORY & ACTIVE DIRECTORY */}
          {activeTab === 'directory' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">دليل الموظفين (Active Directory Sync)</h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>قائمة مهندسي وموظفي الشركة المرتبطين بنطاق EEC.LOCAL</p>
                </div>
                <div className="bg-emerald-950 border border-emerald-800 text-emerald-400 px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>AD Domain Online</span>
                </div>
              </div>

              <div className={`border rounded-2xl overflow-hidden shadow-sm ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className={`p-4 border-b flex items-center justify-between ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className="relative w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="بحث بالاسم، القسم، أو البريد الإلكتروني..." 
                      className={`w-full pl-9 pr-4 py-2 border rounded-xl text-sm focus:outline-none ${theme === 'dark' ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-slate-100 border-slate-300 text-slate-950 placeholder-slate-400'}`}
                    />
                  </div>
                  <span className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>إجمالي الموظفين المسجلين: <strong className={theme === 'dark' ? 'text-white' : 'text-slate-950'}>1,248</strong></span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-right border-collapse">
                    <thead>
                      <tr className={`border-b text-xs uppercase ${theme === 'dark' ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                        <th className="p-4 font-semibold">الموظف</th>
                        <th className="p-4 font-semibold">المسمى الوظيفي</th>
                        <th className="p-4 font-semibold">القسم / الإدارة</th>
                        <th className="p-4 font-semibold">البريد الإلكتروني</th>
                        <th className="p-4 font-semibold">رقم التحويلة (Ext)</th>
                        <th className="p-4 font-semibold">الحالة الأمنية</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y text-sm ${theme === 'dark' ? 'divide-slate-900' : 'divide-slate-100'}`}>
                      {employees.map((emp, i) => (
                        <tr key={i} className={`transition ${theme === 'dark' ? 'hover:bg-slate-900/60' : 'hover:bg-slate-50'}`}>
                          <td className="p-4 flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center font-bold text-xs text-amber-300">
                              {emp.name.split(' ').slice(-2).map(n => n[0]).join('')}
                            </div>
                            <span className="font-semibold">{emp.name}</span>
                          </td>
                          <td className={`p-4 text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{emp.title}</td>
                          <td className={`p-4 text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{emp.dept}</td>
                          <td className="p-4 font-mono text-xs text-blue-500">{emp.email}</td>
                          <td className={`p-4 font-mono text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{emp.ext}</td>
                          <td className="p-4">
                            <span className="px-2.5 py-1 bg-emerald-950 border border-emerald-800 text-emerald-400 rounded-full text-xs font-medium">
                              Authenticated
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RESOURCES & DOCUMENTS */}
          {activeTab === 'resources' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">موارد الشركة والمستندات الهندسية</h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>الأدلة الفنية، شهادات الجودة ISO، وقوالب المخططات المعتمدة</p>
                </div>
                <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs flex items-center gap-2 shadow">
                  <Plus className="w-4 h-4" />
                  <span>رفع ملف جديد</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resourcesList.map((res, i) => (
                  <div key={i} className={`border rounded-2xl p-5 flex items-center justify-between transition ${theme === 'dark' ? 'bg-slate-950 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50'}`}>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-900/30 border border-blue-800 text-amber-400 rounded-xl">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">{res.title}</h4>
                        <div className={`flex items-center gap-3 text-xs mt-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                          <span>{res.category}</span>
                          <span>·</span>
                          <span className="font-mono">{res.size}</span>
                          <span>·</span>
                          <span>{res.date}</span>
                        </div>
                      </div>
                    </div>
                    <button className={`p-2.5 rounded-xl border transition ${theme === 'dark' ? 'bg-slate-900 hover:bg-blue-900 border-slate-800 text-slate-300 hover:text-white' : 'bg-slate-100 hover:bg-blue-50 border-slate-200 text-slate-700 hover:text-blue-700'}`} title="تحميل المستند">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: EQUIPMENT & MACHINERY */}
          {activeTab === 'equipment' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">إدارة المعدات والآلات الثقيلة</h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>متابعة حالة الأوناش، الحفارات، ومعدات الخرسانة في المواقع</p>
                </div>
                <button className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs flex items-center gap-2 shadow">
                  <Plus className="w-4 h-4" />
                  <span>تسجيل معدة جديدة</span>
                </button>
              </div>

              <div className={`border rounded-2xl overflow-hidden shadow-sm ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className={`border-b text-xs uppercase ${theme === 'dark' ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                      <th className="p-4 font-semibold">كود المعدة</th>
                      <th className="p-4 font-semibold">اسم ووصف المعدة</th>
                      <th className="p-4 font-semibold">الموقع الحالي</th>
                      <th className="p-4 font-semibold">حالة التشغيل</th>
                      <th className="p-4 font-semibold">آخر صيانة</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y text-sm ${theme === 'dark' ? 'divide-slate-900' : 'divide-slate-100'}`}>
                    {equipmentList.map((eq, i) => (
                      <tr key={i} className={`transition ${theme === 'dark' ? 'hover:bg-slate-900/60' : 'hover:bg-slate-50'}`}>
                        <td className="p-4 font-mono text-xs text-amber-500 font-semibold">{eq.code}</td>
                        <td className="p-4 font-medium">{eq.name}</td>
                        <td className={`p-4 text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{eq.site}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${eq.status === 'Operational' ? 'bg-emerald-950 border-emerald-800 text-emerald-400' : 'bg-amber-950 border-amber-800 text-amber-400'}`}>
                            {eq.status === 'Operational' ? 'جاهز للعمل' : 'تحت الصيانة'}
                          </span>
                        </td>
                        <td className={`p-4 font-mono text-xs ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>{eq.lastService}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: IT SUPPORT & HELPDESK */}
          {activeTab === 'support' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">الدعم الفني وتذاكر تقنية المعلومات</h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>فريق الدعم الفني لشركة EEC جاهز لمساعدتك على مدار الساعة</p>
                </div>
                <button 
                  onClick={() => setNewTicketModal(true)}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-xs flex items-center gap-2 shadow"
                >
                  <Plus className="w-4 h-4" />
                  <span>فتح تذكرة دعم جديدة</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`border rounded-2xl p-6 text-center space-y-3 ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-blue-900/40 border border-blue-800 flex items-center justify-center text-blue-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold">الخط الساخن الداخلي</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>اتصل مباشرة بقسم الدعم الفني المركزي</p>
                  <div className="text-amber-500 font-mono font-bold text-lg">Ext. 5000</div>
                </div>

                <div className={`border rounded-2xl p-6 text-center space-y-3 ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-900/40 border border-emerald-800 flex items-center justify-center text-emerald-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold">البريد الإلكتروني للدعم</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>للاستفسارات التقنية وربط الأنظمة</p>
                  <div className="text-blue-500 font-mono text-sm font-bold">it.support@eec.local</div>
                </div>

                <div className={`border rounded-2xl p-6 text-center space-y-3 ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="w-12 h-12 mx-auto rounded-xl bg-purple-900/40 border border-purple-800 flex items-center justify-center text-purple-400">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold">حالة النطاق (EEC.LOCAL)</h4>
                  <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>جميع خوادم المصادقة تعمل بكفاءة</p>
                  <div className="text-emerald-500 font-mono text-sm font-bold">100% Online</div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`border rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <div className={`flex items-center justify-between pb-4 border-b ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              <div>
                <span className="text-xs font-mono text-amber-500">{selectedProject.id}</span>
                <h3 className="text-xl font-bold">{selectedProject.nameAr}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'}`}
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div className="h-48 rounded-xl overflow-hidden relative">
                <img src={selectedProject.image} alt={selectedProject.nameAr} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className={`p-3.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>الموقع</span>
                  <span className="font-bold">{selectedProject.location}</span>
                </div>
                <div className={`p-3.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>مدير المشروع</span>
                  <span className="font-bold">{selectedProject.manager}</span>
                </div>
                <div className={`p-3.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>الموازنة</span>
                  <span className="font-bold font-mono text-amber-500">{selectedProject.budget}</span>
                </div>
                <div className={`p-3.5 rounded-xl border ${theme === 'dark' ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <span className={`block mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>معدل السلامة</span>
                  <span className="font-bold text-emerald-500">{selectedProject.safetyScore}</span>
                </div>
              </div>
            </div>

            <div className={`flex justify-end pt-4 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Project Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`border rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <div className={`flex items-center justify-between pb-4 border-b ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              <h3 className="text-lg font-bold">إضافة مشروع هندسي جديد</h3>
              <button onClick={() => setShowNewProjectModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`text-xs font-semibold block mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>اسم المشروع (عربي)</label>
                <input type="text" placeholder="مثال: محطة توليد الطاقة الشمسية بأسوان" className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-950'}`} />
              </div>
              <div>
                <label className={`text-xs font-semibold block mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>الموقع الجغرافي</label>
                <input type="text" placeholder="مثال: أسوان، مصر" className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-950'}`} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`text-xs font-semibold block mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>الموازنة التقديرية</label>
                  <input type="text" placeholder="$25M" className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-blue-500 font-mono ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-950'}`} />
                </div>
                <div>
                  <label className={`text-xs font-semibold block mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>تاريخ التسليم</label>
                  <input type="text" placeholder="Dec 2027" className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-blue-500 font-mono ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-950'}`} />
                </div>
              </div>
            </div>
            <div className={`flex justify-end gap-3 pt-4 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              <button onClick={() => setShowNewProjectModal(false)} className={`px-4 py-2.5 rounded-xl text-xs font-semibold ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}>إلغاء</button>
              <button onClick={() => { setShowNewProjectModal(false); alert('تمت إضافة المشروع بنجاح إلى قاعدة بيانات EEC Portal'); }} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold">حفظ المشروع</button>
            </div>
          </div>
        </div>
      )}

      {/* New Ticket Modal */}
      {showNewTicketModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`border rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl ${theme === 'dark' ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <div className={`flex items-center justify-between pb-4 border-b ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              <h3 className="text-lg font-bold">فتح تذكرة دعم فني جديدة</h3>
              <button onClick={() => setNewTicketModal(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`text-xs font-semibold block mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>نوع الطلب / المشكلة</label>
                <select className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-950'}`}>
                  <option>مشكلة في شبكة النطاق (EEC.LOCAL / Active Directory)</option>
                  <option>طلب صيانة برامج هندسية (AutoCAD / Primavera)</option>
                  <option>مشكلة في الاتصال بالإنترنت بالموقع</option>
                  <option>صيانة أجهزة الحاسب أو الطابعات</option>
                </select>
              </div>
              <div>
                <label className={`text-xs font-semibold block mb-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>وصف المشكلة بالتفصيل</label>
                <textarea rows={4} placeholder="اكتب تفاصيل الطلب هنا..." className={`w-full px-4 py-2.5 border rounded-xl text-sm focus:outline-none focus:border-blue-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-100 border-slate-300 text-slate-950'}`}></textarea>
              </div>
            </div>
            <div className={`flex justify-end gap-3 pt-4 border-t ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
              <button onClick={() => setNewTicketModal(false)} className={`px-4 py-2.5 rounded-xl text-xs font-semibold ${theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700 text-slate-300' : 'bg-slate-200 hover:bg-slate-300 text-slate-800'}`}>إلغاء</button>
              <button onClick={() => { setNewTicketModal(false); alert('تم إرسال تذكرة الدعم الفني بنجاح إلى فريق IT Support (Ext. 5000)'); }} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold">إرسال التذكرة</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
