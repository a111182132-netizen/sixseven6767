import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Instagram, 
  Youtube, 
  Mail, 
  MapPin, 
  Calendar, 
  Briefcase, 
  Languages, 
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  Plane
} from 'lucide-react';

// --- Types ---
interface Experience {
  id: string;
  period: string;
  title: string;
  company: string;
  description: string[];
}

interface LanguageSkill {
  name: string;
  level: string;
  score?: string;
}

// --- Data ---
const experiences: Experience[] = [
  {
    id: '1',
    period: '2025-08 - 2025-11',
    title: '蒸鮮腸粉港式飲茶 客戶承辦有限公司',
    company: '負責協助服務客人',
    description: [
      '負責現場客席服務與點餐。',
      '處理顧客需求並確保高品質服務流程。'
    ]
  },
  {
    id: '2',
    period: '2025-05 - 2025-06',
    title: '教育局御風輪',
    company: '教育部相關職務',
    description: [
      '目前與海事相關之 ECDIS (電子海圖) 與 IBS (整合航管系統) 管理。',
      '參與相關訓練與實習與海上實施。',
      '強化海上與港口通訊品質與安全流程。',
      '實施進具 STCW 國際公約之演習，包含船舶管理與防損控制。'
    ]
  },
  {
    id: '3',
    period: '2024-07 - 2025-05',
    title: '小雷鳥育樂運動社會企業',
    company: '教練助理',
    description: [
      '負責規劃分組及各校足球活動、訓練。',
      '引導與帶領 20 人以上之大型團隊足球運動任務。',
      '提升孩子們對運動的興趣與積極主動。',
      '建立團隊合作與良好品格。'
    ]
  }
];

const languageSkills: LanguageSkill[] = [
  { name: '英文', level: '精通', score: 'TOEIC 900' },
  { name: '日文', level: '略懂', score: 'N1' },
  { name: '韓文', level: '普通', score: 'TOPIK I' },
  { name: '西語', level: '普通' }
];

const galleryItems = [
  { id: 2, title: 'Internship Life', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', tag: 'Work' },
  { id: 3, title: 'City Exploration', url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80', tag: 'Travel' },
  { id: 4, title: 'Modern Architecture', url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', tag: 'Design' },
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-sm"></div>
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white uppercase">
            浦士麒 <span className="text-indigo-400 font-light ml-1">Eason</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {['首頁', '實習與旅遊經驗', '履歷'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="sleek-button-primary">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1224] border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['首頁', '實習與旅遊經驗', '履歷'].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-200">{item}</a>
              ))}
              <button className="sleek-button-primary w-full py-3">與我聯絡</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-indigo-500/30 bg-[#020617] text-slate-200 relative overflow-hidden">
      <div className="ambient-gradient-1" />
      <div className="ambient-gradient-2" />
      
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="首頁" className="pt-40 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8 max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-300">Available for projects</span>
              </div>
              
              <h1 className="text-6xl lg:text-8xl font-display font-bold leading-[0.9] text-white tracking-tighter">
                浦士麒 <br/>
                <span className="gradient-text">Eason Portfolio</span>
              </h1>

              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-lg text-slate-400 leading-relaxed">
                  您好，我是浦士麒。受過海洋教育的影響，我自幼嚮往獨立成長的性格，並立志追尋與世界接軌的足跡。
                </p>
                <div className="flex flex-wrap gap-6 text-xs font-mono text-slate-500 uppercase tracking-widest justify-center">
                  <div className="flex items-center gap-2 border-r border-white/10 pr-6"><MapPin size={14} className="text-indigo-400" /> 高雄市, 台灣</div>
                  <div className="flex items-center gap-2 border-r border-white/10 pr-6"><Calendar size={14} className="text-indigo-400" /> 2007-05-29</div>
                  <div className="flex items-center gap-2"><Mail size={14} className="text-indigo-400" /> API: active</div>
                </div>
              </div>

              <div className="flex gap-4 pt-6 justify-center">
                <button className="sleek-button-primary px-8 py-4 text-sm">與我聯絡</button>
                <button className="sleek-button-secondary px-8 py-4 text-sm">下載履歷</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="實習與旅遊經驗" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div className="space-y-4">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Background</div>
                <h2 className="text-4xl font-display font-bold text-white tracking-tighter flex items-center gap-3">
                  工作與實習經驗
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {experiences.map((exp, idx) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="sleek-card p-8 group overflow-hidden relative"
                >
                  <div className="text-[10px] font-mono text-indigo-400 mb-6 uppercase tracking-widest">period_key: {exp.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{exp.title}</h3>
                  <div className="text-xs font-semibold text-slate-500 mb-8 uppercase tracking-wider">{exp.company}</div>
                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-slate-400 flex gap-3 leading-relaxed">
                        <div className="w-1 h-1 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl group-hover:bg-indigo-500/10 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-6 bg-white/[0.02] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div className="space-y-4">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Exploration</div>
                <h2 className="text-4xl font-display font-bold text-white tracking-tighter flex items-center gap-3">
                  精選旅程紀錄
                </h2>
              </div>
              <button className="text-xs font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 group">
                View all journey <ExternalLink size={14} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryItems.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden group border border-white/10"
                >
                  <img src={item.url} alt={item.title} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="text-[10px] font-bold text-indigo-400 mb-2 uppercase tracking-[0.2em]">{item.tag}</div>
                    <h4 className="text-lg font-display font-bold text-white">{item.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-20">
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Capabilities</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter">語言能力</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {languageSkills.map((skill, idx) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="sleek-card p-6 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-all text-indigo-400">
                    <Languages size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                  <div className="text-sm font-medium text-slate-400 mb-4">{skill.level}</div>
                  {skill.score && (
                    <div className="text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-full uppercase tracking-widest">{skill.score}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / CTA Section */}
        <section id="履歷" className="py-32 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-white leading-none">
                BUILD <br/>
                SYSTEM <span className="gradient-text italic">v2.0</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                對我的經歷感興趣嗎？歡迎隨時與我聯繫，期待與您共同構建未來的專案。
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="sleek-button-primary px-12 py-5 text-sm shadow-2xl shadow-indigo-500/20">
                INITIATE CONTACT
              </button>
              <button className="sleek-button-secondary px-12 py-5 text-sm">
                SYSTEM.EXTRACT(CV)
              </button>
            </div>

            <footer class="relative z-10 pt-24 px-6 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5">
              <div class="flex gap-12">
                <div>
                  <div class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Network</div>
                  <div class="text-white font-medium text-sm">Global Ops</div>
                </div>
                <div>
                  <div class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Security</div>
                  <div class="text-white font-medium text-sm">Encrypted</div>
                </div>
                <div>
                  <div class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Status</div>
                  <div class="text-white font-medium text-sm flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500 pulse"></span>
                    Online
                  </div>
                </div>
              </div>
              <div class="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">
                &copy; 2026 EASON CORE SYSTEMS. ALL RIGHTS RESERVED.
              </div>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
