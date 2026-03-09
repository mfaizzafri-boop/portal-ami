'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  MapPin, 
  ArrowRight,
  ChevronRight,
  Mail,
  Phone,
  ExternalLink,
  Lock,
  User,
  Eye,
  EyeOff
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import Image from 'next/image';

// --- Data ---
const statsData = [
  { year: '2020', value: 2180689 },
  { year: '2021', value: 2000000 },
  { year: '2022', value: 1800000 },
  { year: '2023', value: 770545 },
  { year: '2024', value: 927335 },
  { year: '2025', value: 959565 },
];

const features = [
  {
    title: "Pemantauan Harga Masa Nyata",
    desc: "Harga ladang, borong dan runcit dikemaskini secara harian oleh pegawai FAMA di seluruh Malaysia.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "border-green-500"
  },
  {
    title: "Liputan Komoditi Menyeluruh",
    desc: "Merangkumi 262 varieti komoditi termasuk buah-buahan, sayur-sayuran, ternakan, dan perikanan.",
    icon: <Globe className="w-6 h-6" />,
    color: "border-blue-500"
  },
  {
    title: "Laporan & Analisis Automatik",
    desc: "Jana laporan mingguan, bulanan dan tahunan secara automatik dengan analisis trend harga.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "border-purple-500"
  },
  {
    title: "Sistem Amaran Harga",
    desc: "Mengesan turun naik harga melebihi julat yang ditetapkan untuk tindakan segera.",
    icon: <AlertTriangle className="w-6 h-6" />,
    color: "border-orange-500"
  },
  {
    title: "Visualisasi Data Interaktif",
    desc: "Graf, carta dan peta interaktif memudahkan pengguna memahami trend harga mengikut kawasan.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    color: "border-pink-500"
  },
  {
    title: "Integrasi Pelbagai Sistem",
    desc: "Bersambung dengan portal ekosistem digital FAMA yang lain secara berpusat.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "border-teal-500"
  }
];

const benefits = [
  { title: "Kestabilan Harga", desc: "Mencegah ketidakstabilan dan memastikan harga adil." },
  { title: "Perancangan Strategik", desc: "Menyokong kerajaan dalam membuat dasar berasaskan data." },
  { title: "Maklumat Pasaran Tepat", desc: "Menyediakan maklumat harga untuk pembuatan keputusan lebih baik." },
  { title: "Panduan Penanaman", desc: "Membantu petani memilih komoditi sesuai berdasarkan potensi pasaran." },
  { title: "Sistem Amaran Awal", desc: "Mengenal pasti perubahan harga mendadak secara automatik." }
];

const userTypes = [
  { title: "Petani & Pengeluar", desc: "Merancang penanaman berdasarkan harga semasa.", icon: <Users /> },
  { title: "Pemasar & Pemborong", desc: "Menetapkan harga yang kompetitif.", icon: <Users /> },
  { title: "Agensi Kerajaan", desc: "Pembangunan dasar dan kawalan harga.", icon: <Users /> },
  { title: "Pengkaji & Akademik", desc: "Penyelidikan trend pasaran pertanian.", icon: <Users /> },
  { title: "Pengguna Akhir", desc: "Menyemak harga barangan harian.", icon: <Users /> },
  { title: "Pengusaha Industri", desc: "Perolehan bahan mentah yang optimum.", icon: <Users /> }
];

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-card px-6 py-4 flex justify-between items-center mx-4 mt-4 rounded-2xl shadow-lg border border-white/20">
    <div className="flex items-center gap-3">
      <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1 shadow-lg">
  <Image
    src="/FAMA.png"
    alt="FAMA Logo"
    width={40}
    height={40}
    className="object-contain"
  />
</div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-black text-xl tracking-tighter text-fama-blue">AMI FAMA</span>
        <span className="text-[10px] font-bold text-fama-green uppercase tracking-widest">Agri Market Insight</span>
      </div>
    </div>
    <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider text-slate-600">
      <a href="#about" className="hover:text-fama-green transition-colors">Mengenai AMI</a>
      <a href="#features" className="hover:text-fama-green transition-colors">Ciri-ciri</a>
      <a href="#stats" className="hover:text-fama-green transition-colors">Statistik</a>
      <a href="#login" className="bg-fama-blue text-white px-6 py-2.5 rounded-xl hover:bg-fama-green transition-all shadow-xl shadow-blue-500/20 hover:shadow-green-500/20 active:scale-95">Login Sistem</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-24 px-6 overflow-hidden">
    <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-green-50/80 to-transparent rounded-full blur-3xl opacity-50" />
    <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-50" />
    
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white shadow-sm border border-slate-100 text-fama-green text-xs font-black uppercase tracking-widest mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-fama-green animate-pulse" />
          Platform Digital Rasmi FAMA
        </motion.div>
        
        <h1 className="text-6xl lg:text-8xl font-display font-black leading-[0.9] mb-8 text-slate-900 tracking-tighter">
          Pusat <br />
          <span className="gradient-text">Risikan Data</span> <br />
          Agromakanan.
        </h1>
        
        <p className="text-xl text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
          Sistem AMI memperkasa rantaian bekalan makanan negara melalui analitik data harga masa nyata yang telus dan berpusat.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#login" 
            className="flex items-center gap-3 bg-fama-blue text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-fama-green transition-all shadow-2xl shadow-blue-500/30 hover:shadow-green-500/30"
          >
            Masuk Sistem <ArrowRight className="w-6 h-6" />
          </motion.a>
          <motion.a 
            whileHover={{ backgroundColor: '#f8fafc' }}
            href="#about" 
            className="flex items-center gap-3 bg-white border-2 border-slate-100 text-slate-700 px-10 py-5 rounded-[2rem] font-black text-lg transition-all"
          >
            Ketahui Lanjut
          </motion.a>
        </div>
        
        <div className="mt-12 flex items-center gap-6">
          <div className="flex -space-x-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" width={100} height={100} referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div className="text-sm">
            <div className="font-black text-slate-900">1,793+ Responden</div>
            <div className="text-slate-500 font-medium">Menyumbang data setiap hari</div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative"
      >
        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white">
          <Image 
            src="https://picsum.photos/seed/fama-ami/1000/1200" 
            alt="AMI Interface" 
            width={1000} 
            height={1200}
            className="object-cover aspect-[4/5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fama-blue/40 to-transparent" />
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 z-20 glass-card p-6 rounded-3xl shadow-2xl border border-white/50 max-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-green-100 text-green-600 rounded-xl">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Harga Runcit</span>
          </div>
          <div className="text-2xl font-black text-slate-900">+12.5%</div>
          <div className="text-[10px] text-slate-500 font-bold">Trend Mingguan</div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-10 -left-10 z-20 glass-card p-6 rounded-3xl shadow-2xl border border-white/50"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/40">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Lokasi Pantauan</div>
              <div className="text-xl font-black text-slate-900">417 Titik</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-white px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-display font-black mb-4">Apakah AMI?</h2>
        <div className="w-20 h-1.5 bg-fama-green mx-auto rounded-full" />
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            Sistem Agri Market Insight (AMI) adalah platform digital yang dibangunkan oleh <span className="text-fama-blue font-bold">Bahagian Risikan dan Pemodenan Pasaran, FAMA</span>.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Ia berfungsi sebagai repositori utama data harga produk pertanian di seluruh Malaysia, menyokong fungsi FAMA dalam menyediakan maklumat terkini kepada semua pihak berkepentingan secara sistematik, telus dan berpusat.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 pt-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6" />
              </div>
              <div className="font-bold text-sm">Liputan Nasional</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="font-bold text-sm">Akses Pelbagai Platform</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="font-bold text-sm">Data Masa Nyata</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="h-48 rounded-3xl overflow-hidden shadow-lg">
              <Image src="https://picsum.photos/seed/farm1/400/400" alt="Farm" width={400} height={400} className="object-cover h-full w-full" referrerPolicy="no-referrer" />
            </div>
            <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
              <Image src="https://picsum.photos/seed/market/400/600" alt="Market" width={400} height={600} className="object-cover h-full w-full" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
              <Image src="https://picsum.photos/seed/logistics/400/600" alt="Logistics" width={400} height={600} className="object-cover h-full w-full" referrerPolicy="no-referrer" />
            </div>
            <div className="h-48 rounded-3xl overflow-hidden shadow-lg">
              <Image src="https://picsum.photos/seed/tech/400/400" alt="Tech" width={400} height={400} className="object-cover h-full w-full" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="features" className="py-24 bg-slate-50 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-display font-black mb-4">Ciri-Ciri Utama</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Teknologi pintar untuk pengurusan data agromakanan yang lebih efisien.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`p-8 rounded-3xl bg-white border-t-4 ${f.color} shadow-xl shadow-slate-200/50`}
          >
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 text-slate-800">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Stats = () => (
  <section id="stats" className="py-24 bg-fama-blue text-white px-6 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
      <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-fama-green rounded-full blur-3xl" />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-4 gap-8 mb-20">
        {[
          { label: "Negeri", val: "14", sub: "Liputan seluruh Malaysia" },
          { label: "Varieti", val: "262", sub: "Produk pertanian dipantau" },
          { label: "Lokasi", val: "417", sub: "Titik pemantauan pasaran" },
          { label: "Responden", val: "1793", sub: "Pembekal maklumat utama" }
        ].map((s, i) => (
          <div key={i} className="text-center p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20">
            <div className="text-5xl font-black mb-2">{s.val}</div>
            <div className="text-lg font-bold mb-2 uppercase tracking-widest">{s.label}</div>
            <div className="text-sm text-blue-100">{s.sub}</div>
          </div>
        ))}
      </div>
      
      <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold mb-8 text-center">Trend Jumlah Data Harga Dikumpul (2020–2025)</h3>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={statsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="year" stroke="#fff" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#fff" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `${(val/1000000).toFixed(1)}M`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff' }}
                itemStyle={{ color: '#8CC63F' }}
              />
              <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                {statsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === statsData.length - 1 ? '#8CC63F' : '#ffffff80'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  </section>
);

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <section id="login" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl lg:text-6xl font-display font-black mb-6">Akses Sistem <br /><span className="text-fama-blue">AMI FAMA</span></h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Sila log masuk menggunakan akaun rasmi FAMA anda untuk mengakses modul data, laporan interaktif, dan fungsi pengurusan harga.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700">Sambungan Selamat & Terenkripsi</span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="font-medium text-slate-700">Sokongan Pengesahan Dua Faktor (2FA)</span>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200 border border-slate-100"
        >
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-fama-blue rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-blue-500/20">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Log Masuk</h3>
            <p className="text-slate-400 text-sm">Masukkan kredential anda</p>
          </div>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">ID Pengguna / Email</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Contoh: ali@fama.gov.my"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-fama-blue focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Kata Laluan</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-fama-blue focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-fama-blue focus:ring-fama-blue" />
                <span className="text-slate-600">Ingat saya</span>
              </label>
              <a href="#" className="text-fama-blue font-bold hover:underline">Lupa kata laluan?</a>
            </div>
            
            <button className="w-full bg-fama-blue text-white py-4 rounded-2xl font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl shadow-blue-500/20">
              Log Masuk Sekarang
            </button>
            
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-slate-400 font-bold">Atau Akses Awam</span></div>
            </div>
            
            <a href="https://ami.fama.gov.my/awam" target="_blank" className="w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-700 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              Portal Awam <ExternalLink className="w-4 h-4" />
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-fama-green rounded-lg flex items-center justify-center font-bold text-white text-xl">F</div>
            <span className="font-display font-bold text-2xl tracking-tight">AMI FAMA</span>
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed mb-8">
            Platform digital terulung untuk risikan pasaran agromakanan Malaysia. Memastikan kestabilan harga dan bekalan untuk kesejahteraan rakyat.
          </p>
          <div className="flex gap-4">
            {['facebook', 'twitter', 'instagram', 'youtube'].map((s) => (
              <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-fama-green transition-colors">
                <div className="w-5 h-5 bg-slate-400 rounded-sm" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Pautan Pantas</h4>
          <ul className="space-y-4 text-slate-400">
            <li><a href="#about" className="hover:text-white transition-colors">Tentang AMI</a></li>
            <li><a href="#features" className="hover:text-white transition-colors">Ciri-ciri Utama</a></li>
            <li><a href="#stats" className="hover:text-white transition-colors">Statistik Data</a></li>
            <li><a href="https://www.fama.gov.my" className="hover:text-white transition-colors">Portal Rasmi FAMA</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-lg">Hubungi Kami</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-fama-green shrink-0" />
              <span>Bahagian Risikan & Pemodenan Pasaran, FAMA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-fama-green shrink-0" />
              <span>03-6136 2020</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-fama-green shrink-0" />
              <span>rmp@fama.gov.my</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2026 Lembaga Pemasaran Pertanian Persekutuan (FAMA). Hak Cipta Terpelihara.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Dasar Privasi</a>
          <a href="#" className="hover:text-white">Terma & Syarat</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Stats />
      
      {/* Data Collected Section (Page 3) */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-black mb-4">Data Yang Dikumpul</h2>
            <p className="text-slate-500">AMI mengintegrasikan pelbagai dimensi data untuk ekosistem agromakanan yang lengkap.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-fama-green">Data Harga</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-fama-green" /> Harga Ladang</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-fama-green" /> Harga Borong</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-fama-green" /> Harga Runcit</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-fama-blue">Data Bekalan</h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-fama-blue" /> Trend Bekalan Pasaran</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-fama-blue" /> Stok Semasa Komoditi</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-fama-blue" /> Anggaran Bekalan Musim Hadapan</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-4 text-purple-600">Komoditi & Lokasi</h4>
              <ul className="space-y-2 text-slate-600 text-sm grid grid-cols-2 gap-x-4">
                <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-purple-600" /> Buah-buahan</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-purple-600" /> Tanaman Kontan</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-purple-600" /> Sayur-sayuran</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-purple-600" /> Ternakan</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-purple-600" /> Ikan Air Tawar</li>
                <li className="flex items-center gap-2"><ChevronRight className="w-3 h-3 text-purple-600" /> Makanan Proses</li>
              </ul>
              <p className="mt-4 text-xs text-slate-400 italic">Lokasi pasaran mengikut negeri di seluruh Malaysia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-black mb-4">Faedah & Manfaat</h2>
            <p className="text-slate-500">Impak positif sistem AMI kepada ekosistem agromakanan negara.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-fama-green/20 text-fama-green flex items-center justify-center shrink-0">
                  <ChevronRight className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{b.title}</h4>
                  <p className="text-slate-500 text-sm">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Users Section */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-display font-black mb-4">Siapa Pengguna AMI?</h2>
            <p className="text-slate-400">AMI direka untuk memenuhi keperluan pelbagai pihak berkepentingan.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {userTypes.map((u, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-fama-green rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{u.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LoginForm />
      <Footer />
    </main>
  );
}
