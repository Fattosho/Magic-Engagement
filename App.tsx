
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight,
  Zap,
  Star,
  Lock,
  Instagram,
  Code,
  ShieldAlert,
  Skull
} from 'lucide-react';
import { FEATURES } from './constants';
import SectionHeading from './components/SectionHeading';
import Calculator from './components/Calculator';

const PAYMENT_LINK = "https://payment.ticto.app/O079E8CBC";

const Logo = ({ size = "normal" }: { size?: "small" | "normal" | "large" }) => {
  const scale = size === "small" ? "scale-50" : size === "large" ? "scale-110 md:scale-125" : "scale-100";
  return (
    <div className={`flex flex-col items-center leading-none ${scale}`}>
      <span className="text-white font-black tracking-tighter text-xl md:text-3xl">MAGIC</span>
      <span className="font-logo-script text-white text-2xl md:text-4xl -mt-1 md:-mt-2">Engagement</span>
      <div className="mt-1 md:mt-2 w-5 h-5 md:w-6 md:h-6 border-2 border-white rounded-md flex items-center justify-center relative">
        <div className="w-1 h-1 bg-white rounded-full absolute top-1 right-1"></div>
        <div className="w-2.5 h-2.5 md:w-3 md:h-3 border-2 border-white rounded-full"></div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-[#d60000] selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center scale-75 md:scale-90 origin-left">
            <Logo size="small" />
          </div>

          <div className="hidden md:flex items-center gap-10">
            <button onClick={() => scrollToSection('problema')} className="text-xs font-black uppercase tracking-widest hover:text-[#d60000] transition-colors">O Negócio</button>
            <button onClick={() => scrollToSection('metodo')} className="text-xs font-black uppercase tracking-widest hover:text-[#d60000] transition-colors">A Máquina</button>
            <a 
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#d60000] text-white font-black rounded-full hover:scale-105 transition-all text-xs tracking-widest btn-neon inline-flex items-center justify-center"
            >
              FATURAR AGORA
            </a>
          </div>

          <button className="md:hidden text-[#d60000]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            <button onClick={() => scrollToSection('problema')} className="text-xl font-black uppercase text-left tracking-tighter">O Negócio</button>
            <button onClick={() => scrollToSection('metodo')} className="text-xl font-black uppercase text-left tracking-tighter">A Máquina</button>
            <a 
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-[#d60000] text-white font-black rounded-2xl text-center btn-neon inline-block"
            >
              FATURAR AGORA
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-60 md:pb-40 overflow-hidden logo-red-gradient">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mb-8 md:mb-12 inline-block p-4 md:p-6 rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 shadow-2xl reveal">
            <Logo size="large" />
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tight md:tracking-tighter max-w-6xl mx-auto italic uppercase reveal reveal-delay-1 px-2">
            ELES QUEREM <span className="text-black">RECONHECIMENTO</span>. <br className="hidden md:block" />
            VOCÊ QUER <span className="text-white underline decoration-[#d60000]">LUCRO</span>.
          </h1>
          
          <p className="text-lg md:text-3xl text-white/90 max-w-4xl mx-auto mb-10 md:mb-16 font-medium leading-tight reveal reveal-delay-2 px-4">
            A internet é um teatro de egos. Aprenda a ser o dono da bilheteria e <span className="font-black text-black uppercase">Lucre brutalmente com a vaidade dos outros.</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center reveal reveal-delay-3 px-4">
            <a 
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 md:px-14 py-6 md:py-7 bg-white text-[#d60000] font-black text-xl md:text-2xl rounded-2xl flex items-center justify-center gap-4 hover:bg-gray-100 transition-all transform hover:-translate-y-2 shadow-2xl btn-neon"
            >
              ATIVAR MINHA FÁBRICA DE STATUS <ArrowRight size={28} className="hidden sm:block" />
            </a>
          </div>

          <div className="mt-16 md:mt-24 flex flex-col items-center reveal reveal-delay-4 px-4">
            <p className="text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.3em] uppercase text-white/60 mb-6 italic">O mercado de aparências nunca para</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 grayscale opacity-40 contrast-125">
               <Instagram size={24} className="md:w-8 md:h-8" />
               <Zap size={24} className="md:w-8 md:h-8" />
               <Code size={24} className="md:w-8 md:h-8" />
               <Skull size={24} className="md:w-8 md:h-8" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[60px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C49.1,35.19,158.06,77.91,273.1,80.12,289.47,80.44,305.65,79.33,321.39,56.44Z" fill="#000000"></path>
          </svg>
        </div>
      </section>

      {/* Script Highlight */}
      <section id="metodo" className="py-16 md:py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="glass-card p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] flex flex-col md:flex-row items-center gap-10 md:gap-16 border-[#d60000]/30 reveal">
            <div className="md:w-1/2 reveal-left">
              <div className="inline-flex items-center gap-2 text-[#d60000] mb-6 font-black uppercase tracking-widest text-xs md:text-sm">
                <Skull size={20} /> O Sistema que Alimenta o Ego
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight italic">
                A MÁQUINA QUE <span className="text-[#d60000]">IMPRIME</span> DINHEIRO DO NADA.
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-8 md:mb-10 leading-relaxed">
                As pessoas vendariam a alma para parecerem bem-sucedidas. Nós te entregamos o sistema que entrega essa "fama" em segundos. O site está pronto, os fornecedores estão na mão, o lucro é inevitável.
              </p>
              <ul className="space-y-4 mb-10">
                {["Script que automatiza a vaidade", "Margens absurdas de até 1000%", "Sem precisar aparecer ou criar conteúdo", "O mercado mais viciado do mundo"].map((t, i) => (
                  <li key={i} className={`flex items-start md:items-center gap-3 text-base md:text-lg font-bold reveal reveal-delay-${i+1}`}>
                    <CheckCircle2 className="text-[#d60000] shrink-0 mt-1 md:mt-0" size={20} /> <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 relative reveal-right w-full">
               <div className="absolute -inset-4 bg-[#d60000]/20 rounded-3xl blur-3xl"></div>
               <img 
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800" 
                className="relative rounded-3xl border border-[#d60000]/20 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl w-full"
                alt="Dinheiro e Status"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <div className="reveal">
            <SectionHeading 
              title="A PSICOLOGIA DO LUCRO" 
              subtitle="O ser humano precisa ser notado. Você só precisa fornecer o que eles desejam desesperadamente."
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className={`p-8 md:p-10 rounded-3xl bg-zinc-950 border border-white/5 hover:border-[#d60000]/50 transition-all group hover:-translate-y-2 reveal reveal-delay-${(idx % 3) + 1}`}>
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#d60000]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-7 h-7 md:w-8 md:h-8 text-[#d60000]" })}
                </div>
                <h3 className="text-xl md:text-2xl font-black mb-4 uppercase tracking-tighter italic">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 md:py-24 bg-zinc-950 border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="reveal">
            <SectionHeading title="CALCULADORA DE VAIDADE" subtitle="Quanto você vai ganhar vendendo a percepção de sucesso?" />
          </div>
          <div className="reveal reveal-delay-2">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Brutal Copy Section */}
      <section id="problema" className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl text-center">
           <div className="reveal">
              <ShieldAlert className="mx-auto text-[#d60000] mb-8" size={56} />
           </div>
           <h2 className="text-4xl md:text-7xl font-black mb-8 md:mb-10 tracking-tight md:tracking-tighter uppercase italic reveal reveal-delay-1 px-2">
             O Mundo é de Quem <span className="text-[#d60000]">Parece</span> ser Grande.
           </h2>
           <p className="text-lg md:text-2xl text-gray-400 leading-relaxed mb-12 reveal reveal-delay-2 px-4">
            Ninguém quer ser o primeiro a seguir. Ninguém quer curtir um post com 2 likes. <br/><br/>
            As pessoas são gado digital. Elas seguem quem já é seguido. Elas admiram quem já é admirado. <br/><br/>
            Ao vender seguidores e curtidas, você não está vendendo números, você está vendendo <span className="text-white font-bold">STATUS, PODER E RELEVÂNCIA.</span> <br/><br/>
            <span className="text-white font-black italic">ELES PAGAM QUALQUER PREÇO PARA NÃO SEREM TRATADOS COMO NINGUÉM.</span>
           </p>
        </div>
      </section>

      {/* Pricing / Final CTA */}
      <section id="cta" className="py-16 md:py-24 logo-red-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container relative z-10 mx-auto px-4 max-w-5xl">
          <div className="bg-black/60 backdrop-blur-2xl p-8 md:p-24 rounded-[3rem] md:rounded-[4rem] border border-white/10 text-center shadow-2xl reveal">
            <div className="mb-8 scale-90 md:scale-100"><Logo size="large" /></div>
            <h2 className="text-4xl md:text-8xl font-black my-8 md:my-12 tracking-tight md:tracking-tighter uppercase italic leading-[1.1] md:leading-none reveal reveal-delay-1">
              DOMINE O MERCADO <br/>POR APENAS <span className="text-[#ff0000]">R$ 47</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 text-left mb-12 md:mb-16">
              <div className="space-y-4 md:space-y-6 reveal-left reveal-delay-2">
                {[
                  "Seu Painel de Vendas Prontinho",
                  "Fornecedores que Cobram Centavos",
                  "O Segredo da Recorrência Infinita",
                  "A Arte de Manipular Percepções",
                  "Acesso para Sempre à Mina de Ouro"
                ].map((item, i) => (
                  <div key={i} className="flex items-start md:items-center gap-3 group">
                    <div className="p-1 bg-[#d60000] rounded-full shrink-0 mt-1 md:mt-0">
                      <CheckCircle2 size={16} className="text-white" />
                    </div>
                    <span className="text-base md:text-xl font-black uppercase italic tracking-tight group-hover:text-[#d60000] transition-colors leading-tight">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 flex flex-col items-center justify-center reveal-right reveal-delay-2">
                <span className="text-gray-400 line-through text-xl md:text-2xl">R$ 297,00</span>
                <span className="text-6xl md:text-9xl font-black text-white leading-none">47</span>
                <span className="text-sm md:text-xl font-bold uppercase tracking-widest mt-2 text-center">Um Almoço para Mudar sua Vida</span>
              </div>
            </div>

            <a 
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-6 md:py-8 bg-[#d60000] text-white font-black text-xl md:text-3xl rounded-3xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-4 reveal reveal-delay-3 btn-neon inline-flex"
            >
              <Lock size={28} className="hidden sm:block" /> QUERO LUCRAR COM A VAIDADE AGORA
            </a>
            <p className="mt-8 text-white/50 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs reveal reveal-delay-4 italic">O risco é todo meu. Se não gostar, eu devolvo seus centavos.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-20 bg-black border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8 scale-75 inline-block reveal">
            <Logo size="small" />
          </div>
          <p className="text-gray-600 text-[10px] md:text-sm max-w-3xl mx-auto italic reveal reveal-delay-1 uppercase tracking-tighter leading-relaxed">
            © 2024 MAGIC ENGAGEMENT. EXPLORANDO O MERCADO DE PERCEPÇÕES DIGITAIS. <br/>
            Este site ensina estratégias de marketing agressivo. Aplique por sua conta e risco.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
