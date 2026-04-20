import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  CircleSlash2, 
  Users2, 
  TrendingDown, 
  LayoutGrid, 
  Users, 
  Store, 
  ClipboardCheck, 
  UserPlus, 
  Rocket, 
  FilePlus, 
  Zap, 
  MoveRight, 
  Calendar, 
  Play, 
  Star, 
  Send, 
  MessageCircle,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`bg-surface font-body text-on-surface antialiased ${isPopupOpen ? 'overflow-hidden h-screen' : ''}`}>
      {/* Top Navigation Shell */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm border-b border-outline-variant/30">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <img 
              src="https://phanmemmkt.vn/wp-content/uploads/2022/10/Logo-Phan-mem-MKT.png" 
              alt="MKT Software Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-slate-600 font-medium hover:text-primary transition-colors" href="#process">Giải Pháp</a>
            <a className="text-slate-600 font-medium hover:text-primary transition-colors" href="#features">Tính Năng</a>
            <a className="text-slate-600 font-medium hover:text-primary transition-colors" href="#results">Lợi Ích</a>
            <a className="text-slate-600 font-medium hover:text-primary transition-colors" href="#pricing">Báo Giá</a>
            <a className="text-slate-600 font-medium hover:text-primary transition-colors" href="#faq">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <button 
              className="hidden sm:block bg-primary-gradient text-on-primary px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
              onClick={() => setIsPopupOpen(true)}
            >
              ĐĂNG KÝ
            </button>
            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-outline-variant/30 overflow-hidden"
            >
              <div className="flex flex-col p-6 space-y-4">
                <a className="text-slate-600 font-medium" href="#process" onClick={() => setIsMenuOpen(false)}>Giải Pháp</a>
                <a className="text-slate-600 font-medium" href="#features" onClick={() => setIsMenuOpen(false)}>Tính Năng</a>
                <a className="text-slate-600 font-medium" href="#results" onClick={() => setIsMenuOpen(false)}>Lợi Ích</a>
                <a className="text-slate-600 font-medium" href="#pricing" onClick={() => setIsMenuOpen(false)}>Báo Giá</a>
                <a className="text-slate-600 font-medium" href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                <button 
                  className="w-full bg-primary-gradient text-on-primary px-6 py-3 rounded-xl font-semibold"
                  onClick={() => { setIsPopupOpen(true); setIsMenuOpen(false); }}
                >
                  ĐĂNG KÝ
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {isPopupOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsPopupOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Left Side: Offer Info */}
              <div className="md:w-[55%] bg-[#1a237e] text-white p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#3f51b5_0%,transparent_70%)]" />
                  <div className="w-full h-full opacity-30" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-8 font-headline italic tracking-tighter">
                    ĐỪNG BỎ LỠ!
                  </h2>
                  <ul className="space-y-5 mb-8">
                    <li className="flex gap-3 text-sm md:text-base">
                      <div className="shrink-0 w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                        <CheckCircle2 className="text-cyan-400" size={16} />
                      </div>
                      <p className="leading-tight">Hỗ trợ 24/7, hướng dẫn <span className="font-bold text-cyan-400">TẬN-TÌNH</span> đến khi bạn thành thạo sử dụng công cụ</p>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <div className="shrink-0 w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                        <CheckCircle2 className="text-cyan-400" size={16} />
                      </div>
                      <p className="leading-tight">Huấn luyện <span className="font-bold text-cyan-400">tư duy chiến lược</span> với đội ngũ chuyên gia &gt;10 năm kinh nghiệm</p>
                    </li>
                    <li className="flex gap-3 text-sm md:text-base">
                      <div className="shrink-0 w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                        <CheckCircle2 className="text-cyan-400" size={16} />
                      </div>
                      <p className="leading-tight">Bảo trì và cập nhật phần mềm trọn đời miễn phí</p>
                    </li>
                  </ul>
                  
                  <div className="mt-12 flex justify-center md:justify-start">
                    <img 
                      src="https://picsum.photos/seed/mkt-robot/400/200" 
                      alt="Software Preview Illustration" 
                      className="rounded-xl shadow-2xl border border-white/10 max-w-full h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="relative z-10 pt-12">
                  <div className="inline-block bg-blue-600/60 backdrop-blur-md px-6 py-2 rounded-full text-sm md:text-base font-bold border border-white/20 mb-8 whitespace-nowrap">
                    +600.000 Khách hàng đã phục vụ
                  </div>
                  <div className="grid grid-cols-3 gap-6 items-center opacity-90">
                    <div className="bg-white p-3 rounded-lg flex items-center justify-center h-12">
                      <span className="text-[#0a1e4d] font-black text-sm">AGENCY</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-center justify-center h-12 text-center">
                      <span className="text-[#9c0a0a] font-black text-[10px] leading-tight">ACAC ACADEMY</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg flex items-center justify-center h-12">
                      <span className="text-[#d4af37] font-black text-sm">ASANA</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Contact List */}
              <div className="md:w-[45%] bg-[#fcfcfc] p-8 md:p-12 flex flex-col items-center justify-center relative">
                <button 
                  className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setIsPopupOpen(false)}
                >
                  <X size={28} />
                </button>

                <div className="w-full space-y-10">
                  <div className="text-center">
                    <span className="text-[#b47c4c] text-sm md:text-base font-bold tracking-wider uppercase">HỖ TRỢ & TƯ VẤN NHANH CHÓNG</span>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mt-2 font-headline tracking-tighter">LIÊN HỆ NGAY</h3>
                  </div>

                  <div className="space-y-6">
                    <a 
                      href="https://t.me/minhquangmkt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-2xl flex items-center gap-5 transition-all shadow-xl shadow-blue-500/30 group"
                    >
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Send size={28} className="fill-white" />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] opacity-90 font-bold uppercase tracking-widest mb-1">HỖ TRỢ TELEGRAM</p>
                        <p className="text-xl md:text-2xl font-black font-headline">@minhquangmkt</p>
                      </div>
                    </a>

                    <a 
                      href="https://zalo.me/0869506789" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[#0068ff] text-white p-5 rounded-2xl flex items-center gap-5 transition-all shadow-xl shadow-blue-400/30 group"
                    >
                      <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform p-2.5">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/1024px-Icon_of_Zalo.svg.png" 
                          alt="Zalo" 
                          className="w-full h-full"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-[11px] opacity-90 font-bold uppercase tracking-widest mb-1">HỖ TRỢ ZALO</p>
                        <p className="text-xl md:text-2xl font-black font-headline">0869.50.6789</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-3/5" {...fadeIn}>
            <span className="text-tertiary font-semibold tracking-widest text-sm font-label uppercase mb-4 block">
              CHIẾN LƯỢC FACEBOOK GROUP 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline leading-[1.1] tracking-tight text-on-surface mb-6">
              XÂY GROUP FACEBOOK – <span className="text-gradient">CHUYỂN ĐỔI CAO</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
              Không còn phụ thuộc quảng cáo – Không lo hết khách khi tắt ads – Sở hữu data khách hàng của riêng bạn để kinh doanh bền vững.
            </p>
            
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium text-on-surface">Không còn phụ thuộc quảng cáo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium text-on-surface">Không lo hết khách khi tắt ads</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary" size={20} />
                <span className="font-medium text-on-surface">Xây hệ thống khách hàng bền vững</span>
              </div>
            </div>

            <div className="p-6 bg-tertiary-container/10 rounded-xl border-l-4 border-tertiary mb-8">
              <p className="text-tertiary font-bold text-lg italic">
                “Biến Group Facebook thành cỗ máy kiếm tiền tự động trong 30 ngày”
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                className="bg-primary-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                onClick={() => setIsPopupOpen(true)}
              >
                Nhận Demo Ngay
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="md:w-2/5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 ambient-shadow rounded-2xl overflow-hidden border border-outline-variant/30">
              <img 
                alt="Dashboard Analytics" 
                className="w-full h-auto" 
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/672257553_1465037595419113_1563292303817999546_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=L6sRhXjHPrEQ7kNvwGi1ABU&_nc_oc=Ado2eB4nACBkUnZp6ye7uatKcuJcvO6AgQlqpTZITY-VuQdg1R_KvKCpE8jOhEJ_3DQ&_nc_zt=23&_nc_ht=scontent.fhan14-3.fna&_nc_gid=xI0RiN9uwVs9aohRPdcocQ&_nc_ss=7a3a8&oh=00_Af1mhjCTiuz0JW7R_3ZJkgo-nlV29hvJnSdUKVjXCpLkzg&oe=69E8971A"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-effect bg-white/40 p-4 rounded-xl flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img 
                    alt="Member" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                    src="https://picsum.photos/seed/person1/100/100" 
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    alt="Member" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                    src="https://picsum.photos/seed/person2/100/100" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-xs text-white font-bold border-2 border-white">
                    +2k
                  </div>
                </div>
                <span className="text-sm font-semibold text-on-surface">Thành viên mới tham gia hôm nay</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-headline text-on-surface mb-4">Bạn đang gặp những vấn đề này?</h2>
            <div className="w-20 h-1 bg-tertiary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <CircleSlash2 className="text-error" size={36} />, title: "Đốt tiền cho Ads", desc: "Chi tiền khủng cho quảng cáo nhưng tắt là hết khách. Doanh thu bấp bênh không ổn định." },
              { icon: <Users2 className="text-error" size={36} />, title: "Không biết cách xây Group", desc: "Group lập ra không có tương tác, không biết cách kéo member chất lượng vào đúng tệp." },
              { icon: <TrendingDown className="text-error" size={36} />, title: "Tỉ lệ chuyển đổi thấp", desc: "Có member nhưng không ra đơn. Sai tệp khách hàng ngay từ bước xây dựng nền móng." }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="bg-surface-container-lowest p-8 rounded-xl ghost-border hover:shadow-xl transition-all"
                {...fadeIn}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-on-surface max-w-3xl mx-auto leading-relaxed">
              “Không có hệ thống <span className="text-error">→</span> Không có data <span className="text-error">→</span> <span className="underline decoration-error decoration-4">Không thể scale</span>”
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold font-headline mb-8">Giải pháp xây group Facebook thực chiến</h2>
              <p className="text-lg text-on-surface-variant mb-12">
                Chúng tôi không dạy lý thuyết suông. Đây là bộ quy trình được đúc kết từ việc vận hành hàng trăm Group lớn nhỏ.
              </p>
              <div className="space-y-8">
                {[
                  { id: 1, title: "Hệ thống xây group chuẩn tệp", desc: "Xác định chân dung khách hàng và ngách tiềm năng nhất để bắt đầu." },
                  { id: 2, title: "Kéo member tự nhiên (Organic)", desc: "Kỹ thuật \"viral content\" và mồi nhử khiến khách hàng tự động tìm đến group." },
                  { id: 3, title: "Automation tiết kiệm 80% thời gian", desc: "Sử dụng công cụ để vận hành tự động, kéo member, phê duyệt đến đăng bài seeding." }
                ].map((step, idx) => (
                  <motion.div key={step.id} className="flex gap-6" {...fadeIn} transition={{ delay: idx * 0.2 }}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {step.id}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                      <p className="text-on-surface-variant">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div className="md:w-1/2 bg-surface-container-high rounded-3xl p-8 relative" {...fadeIn}>
              <div className="absolute -top-6 -left-6 bg-tertiary text-white px-6 py-2 rounded-lg font-bold shadow-lg z-20">
                THỰC CHIẾN 100%
              </div>
              <div className="overflow-hidden rounded-2xl mb-8 shadow-2xl">
                <img 
                  alt="Practical Strategy" 
                  className="w-full h-auto hover:scale-105 transition-transform duration-700" 
                  src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/673990507_1465039338752272_3635522735969786239_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=102&ccb=1-7&_nc_sid=13d280&_nc_ohc=snW-dtOxhoUQ7kNvwFjR-dj&_nc_oc=AdpBnAVxYEqnHUFXf-GHrJm0ml5x5qswFxvzvhgdT53s3GCtXjr01vhIDCTfM-eEWn8&_nc_zt=23&_nc_ht=scontent.fhan14-4.fna&_nc_gid=1eY_BNu__4_MIyta6Zb-sg&_nc_ss=7a3a8&oh=00_Af2ZXT00I9RG955Dta_4R-i9ZpJwBDB0-lzlj_EZbmqYRw&oe=69E8B4C4"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-on-surface italic text-lg leading-relaxed border-l-4 border-primary pl-6">
                "Đây là quy trình thực chiến, giúp bạn sở hữu cộng đồng hàng trăm nghìn thành viên mà không tốn một đồng quảng cáo nào."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-surface-container-low" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6">Tính năng phần mềm hỗ trợ</h2>
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-2xl border border-primary/20">
              <p className="text-primary font-bold text-lg">Giúp bạn xây và vận hành hàng chục group cùng lúc</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Group 1: Quản lý & Vận hành */}
            <motion.div className="bg-white rounded-3xl p-8 md:p-10 ambient-shadow border border-outline-variant/30" {...fadeIn}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white">
                  <LayoutGrid size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-headline">Quản lý & Vận hành Group</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <Users size={18} className="text-primary" />, text: "Nuôi và quản lý không giới hạn số lượng tài khoản Facebook" },
                  { icon: <Store size={18} className="text-primary" />, text: "Tạo group Facebook hàng loạt" },
                  { icon: <ClipboardCheck size={18} className="text-primary" />, text: "Tự động phê duyệt bài viết, quản lý các bài viết" },
                  { icon: <UserPlus size={18} className="text-primary" />, text: "Tự động phê duyệt thành viên, tương tác thành viên" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-surface rounded-xl hover:bg-primary/5 transition-colors group">
                    <div className="flex-shrink-0 w-8 h-8 bg-white border border-outline-variant/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="font-medium text-on-surface leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Group 2: Nuôi và phát triển */}
            <motion.div className="bg-white rounded-3xl p-8 md:p-10 ambient-shadow border border-outline-variant/30 relative overflow-hidden" {...fadeIn}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-tertiary rounded-2xl flex items-center justify-center text-white">
                  <Rocket size={32} />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold font-headline">Nuôi & Phát triển Group</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: <FilePlus size={18} className="text-tertiary" />, text: "Tăng số lượng bài viết cho group Facebook" },
                  { icon: <Zap size={18} className="text-tertiary" />, text: "Tăng tương tác cho group Facebook" },
                  { icon: <MoveRight size={18} className="text-tertiary" />, text: "Kéo thành viên từ group đối thủ về group đang xây" },
                  { icon: <TrendingDown size={18} className="text-tertiary rotate-180" />, text: "Làm group tối ưu và cắn đề xuất từ nền tảng" },
                  { icon: <Calendar size={18} className="text-tertiary" />, text: "Đăng tải nội dung, lập lịch, tự động chăm sóc" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-surface rounded-xl hover:bg-tertiary/5 transition-colors group">
                    <div className="flex-shrink-0 w-8 h-8 bg-white border border-outline-variant/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <p className="font-medium text-on-surface leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold font-headline mb-12">Xem toàn bộ chiến lược tại đây</h2>
          <motion.div 
            className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mICAqAdgTXM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-surface-container-low" id="results">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
            {[
              { val: "500+", lbl: "Khách hàng áp dụng" },
              { val: "100+", lbl: "Group >20.000 mem" },
              { val: "15+", lbl: "Ngành hàng khác nhau" },
              { val: "80%", lbl: "Tiết kiệm phí Ads" }
            ].map((stat, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <span className="text-4xl md:text-5xl font-extrabold text-primary block mb-2">{stat.val}</span>
                <span className="text-on-surface-variant font-medium text-sm md:text-base">{stat.lbl}</span>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                name: "Anh Minh Tuấn", 
                role: "Chủ shop thời trang", 
                text: "Trước đây mình tốn 20-30tr tiền ads mỗi tháng. Từ khi áp dụng quy trình build group, lượng khách về đều đặn mà không tốn xu nào.",
                img: "https://picsum.photos/seed/tuan/100/100"
              },
              { 
                name: "Chị Hoàng Lan", 
                role: "Agency Marketing", 
                text: "Quy trình tự động hóa thực sự giúp ích rất nhiều. Mình quản lý 5 group lớn chỉ mất 30p mỗi ngày.",
                img: "https://picsum.photos/seed/lan/100/100"
              }
            ].map((testi, i) => (
              <motion.div key={i} className="bg-white p-8 rounded-2xl border border-outline-variant/30 flex flex-col sm:flex-row gap-6 shadow-sm" {...fadeIn}>
                <img alt={testi.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" src={testi.img} referrerPolicy="no-referrer" />
                <div>
                  <div className="flex text-tertiary mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-on-surface italic mb-4 leading-relaxed">"{testi.text}"</p>
                  <h4 className="font-bold">{testi.name} - <span className="text-on-surface-variant font-normal text-sm">{testi.role}</span></h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white" id="pricing">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="bg-surface rounded-3xl overflow-hidden ambient-shadow border-2 border-primary relative"
            {...fadeIn}
          >
            <div className="bg-primary p-8 text-center text-on-primary">
              <span className="font-bold tracking-widest text-sm uppercase">GÓI CHIẾN LƯỢC TOÀN DIỆN</span>
              <h2 className="text-3xl font-extrabold mt-2 font-headline">XÂY GROUP FACEBOOK TỪ 0 → 100K MEMBER</h2>
            </div>
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <div>
                  <h4 className="font-bold text-lg mb-6 text-primary border-b border-primary/10 pb-2">Nội dung bao gồm:</h4>
                  <ul className="space-y-4 text-sm">
                    {["Quy trình xây Group 0-100k member", "Kịch bản Seeding & Nuôi Group tự động", "Tool Automation Facebook (1 năm)"].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <CheckCircle2 className="text-primary flex-shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-tertiary/5 p-6 rounded-2xl border border-tertiary/10">
                  <h4 className="font-bold text-lg mb-4 text-tertiary">Siêu Bonus Độc Quyền:</h4>
                  <ul className="space-y-3 text-sm font-medium text-on-surface">
                    <li className="flex items-center gap-2">🔥 Bộ tài liệu xu hướng 2026</li>
                    <li className="flex items-center gap-2">✅ Checklist triển khai hàng ngày</li>
                    <li className="flex items-center gap-2">📈 Kho kịch bản Content</li>
                  </ul>
                </div>
              </div>
              <div className="text-center border-t border-outline-variant/30 pt-10">
                <p className="text-on-surface-variant line-through text-xl">Giá gốc: 16.000.000 VNĐ</p>
                <p className="text-5xl md:text-6xl font-extrabold text-on-surface my-4">
                  9.000.000 <span className="text-xl">VNĐ/NĂM</span>
                </p>
                <p className="text-tertiary font-bold mb-8 flex items-center justify-center gap-2">
                  <Zap size={18} fill="currentColor" /> Ưu đãi chỉ dành cho 3 người đăng ký đầu tiên!
                </p>
                <button 
                  className="w-full bg-primary-gradient text-on-primary py-6 rounded-2xl text-2xl font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  onClick={() => setIsPopupOpen(true)}
                >
                  NHẬN ƯU ĐÃI NGAY
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-container-low" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold font-headline mb-12 text-center">Câu hỏi thường gặp</h2>
          <div className="space-y-4">
            {[
              { q: "Phần mềm có dễ sử dụng không?", a: "Phần mềm được thiết kế với giao diện thân thiện, trực quan, rất dễ sử dụng ngay cả với người mới bắt đầu. Chúng tôi cũng có đội ngũ hỗ trợ 1-1 để hướng dẫn bạn." },
              { q: "Phần mềm chạy trên thiết bị nào?", a: "Tính tới thời điểm hiện tại, phần mềm có thể được cài đặt sử dụng trên laptop, PC hệ điều hành Windows (từ Windows 10 trở về sau)." },
              { q: "Có được hỗ trợ trong quá trình sử dụng không?", a: "Bạn sẽ được chuyên gia và bộ phận support hỗ trợ suốt quá trình sử dụng. Chuyên gia sẽ cố vấn chiến lược và chuyển giao quy trình cho riêng doanh nghiệp của bạn." },
              { q: "Phần mềm xây group facebook có bản dùng thử không?", a: "Các bạn sẽ được trải nghiệm phần mềm qua bản demo trên máy tính nhân sự công ty. Phần mềm là 1 phần của giải pháp xây group facebook bao gồm quy trình triển khai, biểu thời gian thực hiện và kế hoạch ứng dụng riêng cho từng doanh nghiệp. Vì vậy MKT Software rất cần thấu hiểu mục đích xây hệ thống của bạn để hỗ trợ tốt nhất." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-outline-variant/30 overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg list-none appearance-none">
                  {faq.q}
                  <ChevronDown className="group-open:rotate-180 transition-transform" size={24} />
                </summary>
                <div className="p-6 pt-0 text-on-surface-variant leading-relaxed border-t border-outline-variant/10">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-24 bg-primary text-on-primary overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2 className="text-4xl md:text-5xl font-extrabold font-headline mb-6" {...fadeIn}>
            Đừng tiếp tục mất tiền vào quảng cáo vô nghĩa
          </motion.h2>
          <p className="text-xl mb-12 opacity-90">Tham gia ngay để sở hữu cỗ máy bán hàng tự động của riêng bạn.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button 
              onClick={() => setIsPopupOpen(true)}
              className="bg-white text-primary px-10 py-5 rounded-2xl text-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-white/10 flex items-center justify-center gap-3"
            >
              <Zap size={24} fill="currentColor" />
              NHẬN TƯ VẤN NGAY
            </button>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://t.me/minhquangmkt"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white/20 transition-colors border border-white/20"
              >
                <Send size={20} /> Telegram
              </a>
              <a 
                href="https://zalo.me/0869506789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0068ff] text-white px-8 py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-[#0055d4] transition-all shadow-lg shadow-blue-500/20"
              >
                <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center p-0.5">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" 
                    alt="Zalo" 
                    className="w-full h-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                Zalo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-outline-variant/30 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <img 
              src="https://phanmemmkt.vn/wp-content/uploads/2022/10/Logo-Phan-mem-MKT.png" 
              alt="MKT Software Logo" 
              className="h-12 w-auto mb-4 mx-auto md:mx-0"
              referrerPolicy="no-referrer"
            />
            <p className="text-sm text-slate-500 mt-2">© 2026 MKT Software. All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Terms of Service</a>
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Contact Support</a>
            <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Affiliate Program</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
