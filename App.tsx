
import React, { useState } from 'react';
import { 
  Globe, 
  Code, 
  Smartphone, 
  Rocket, 
  CheckCircle2, 
  MessageSquare, 
  Instagram, 
  Linkedin, 
  ArrowRight,
  Menu,
  X,
  Zap,
  Layout,
  ShoppingCart,
  User,
  MapPin,
  Calendar
} from 'lucide-react';
import { getGeminiResponse } from './services/geminiService';
import { ChatMessage } from './types';

// Components
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white p-2 rounded-lg border border-gray-100">
                {/* ESPAÇO PARA LOGO: Substitua o ícone <Code /> por uma tag <img src="sua-logo.png" /> */}
                <Code className="text-blue-600 w-7 h-7" />
              </div>
            </div>
            <span className="text-xl md:text-2xl font-bold font-heading tracking-tight text-gray-900">
              Guilherme <span className="text-blue-600">WebSites</span>
            </span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Início</a>
            <a href="#sobre" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Sobre Mim</a>
            <a href="#servicos" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Serviços</a>
            <a href="#por-que" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Importância</a>
            <a href="#portfolio" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Portfólio</a>
            <a 
              href="https://wa.me/556182292636" 
              target="_blank" 
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 active:scale-95 flex items-center gap-2"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-6 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg text-gray-700 font-semibold border-b border-gray-50 pb-2">Início</a>
          <a href="#sobre" onClick={() => setIsOpen(false)} className="text-lg text-gray-700 font-semibold border-b border-gray-50 pb-2">Sobre Mim</a>
          <a href="#servicos" onClick={() => setIsOpen(false)} className="text-lg text-gray-700 font-semibold border-b border-gray-50 pb-2">Serviços</a>
          <a href="#por-que" onClick={() => setIsOpen(false)} className="text-lg text-gray-700 font-semibold border-b border-gray-50 pb-2">Importância</a>
          <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-lg text-gray-700 font-semibold border-b border-gray-50 pb-2">Portfólio</a>
          <a 
            href="https://wa.me/556182292636" 
            target="_blank"
            className="bg-blue-600 text-white px-4 py-4 rounded-xl text-center font-bold text-lg shadow-md"
          >
            Falar no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="pt-40 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
        
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-8 animate-fade-in border border-blue-100">
          <Zap size={16} fill="currentColor" /> Soluções Web que Convertem
        </div>
        <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tight mb-8 leading-[1.1] text-gray-900">
          Sua Marca com a <br />
          <span className="gradient-text">Excelência Digital</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Olá, sou o Guilherme. Desenvolvo sites de alto desempenho para empresas que buscam autoridade e resultados reais na internet.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a 
            href="https://wa.me/556182292636" 
            target="_blank"
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-300/50 flex items-center justify-center gap-3 group active:scale-95"
          >
            Começar meu projeto <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-xl hover:border-blue-100 hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            Ver Portfólio
          </a>
        </div>
      </div>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-2/5 relative">
            <div className="w-full aspect-square bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              {/* ESPAÇO PARA SUA FOTO: Substitua a imagem abaixo pela sua foto */}
              <img
                src="img/img.png"
                alt="Guilherme"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-3xl -z-0 animate-pulse hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 rounded-full -z-0 hidden md:block"></div>
          </div>

          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading mb-6">Quem é o <span className="text-blue-600">Guilherme?</span></h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Tenho 17 anos, sou desenvolvedor de software apaixonado por tecnologia e moro no <span className="font-bold text-gray-900">Distrito Federal</span>.
              Minha missão é clara: ajudar empresas a escalarem seus resultados e converterem mais clientes através de sites modernos, rápidos e estratégicos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center"><Calendar size={22} /></div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Idade</p>
                  <p className="text-lg font-bold text-gray-800">17 Anos</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center"><MapPin size={22} /></div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Localização</p>
                  <p className="text-lg font-bold text-gray-800">Distrito Federal, BR</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/guilherme-ribeiro-46a329257/"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-95"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://instagram.com/guilhermeefsantos"
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-xl font-bold hover:brightness-110 transition-all shadow-lg active:scale-95"
              >
                <Instagram size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description, icon }: { title: string, description: string, icon: any }) => (
  <div className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
    <div className="relative z-10">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold font-heading mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
);

const Services = () => (
  <section id="servicos" className="py-24 bg-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">O que eu faço por <span className="text-blue-600">você?</span></h2>
        <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">Combinamos tecnologia moderna com design focado em resultados para entregar a melhor experiência digital.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceCard 
          icon={<Layout size={32} />}
          title="Landing Pages"
          description="Páginas de alta conversão criadas para transformar visitantes em leads e vendas diretas. Design persuasivo e carregamento instantâneo."
        />
        <ServiceCard 
          icon={<ShoppingCart size={32} />}
          title="E-commerce"
          description="Lojas virtuais completas, seguras e fáceis de gerenciar. Tudo o que você precisa para vender seus produtos online 24h por dia."
        />
        <ServiceCard 
          icon={<Globe size={32} />}
          title="Sites Profissionais"
          description="Sua empresa com a autoridade que merece. Sites institucionais modernos que transmitem confiança e profissionalismo aos seus clientes."
        />
      </div>
    </div>
  </section>
);

const WhySection = () => (
  <section id="por-que" className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-20">
      <div className="lg:w-1/2">
        <h2 className="text-4xl md:text-6xl font-black font-heading mb-10 leading-tight">
          Por que ter um <br />
          <span className="text-blue-600">Site é Vital?</span>
        </h2>
        <div className="space-y-8">
          {[
            { 
              title: "Autoridade e Confiança", 
              desc: "9 em cada 10 clientes pesquisam no Google antes de comprar. Sem site, você não existe para eles.",
              icon: <CheckCircle2 className="text-blue-600" />,
              color: "bg-blue-50"
            },
            { 
              title: "Vendedor 24 Horas", 
              desc: "Seu site trabalha enquanto você descansa, apresentando seus serviços e captando clientes sem parar.",
              icon: <Rocket className="text-purple-600" />,
              color: "bg-purple-50"
            },
            { 
              title: "Independência das Redes", 
              desc: "As redes sociais mudam as regras o tempo todo. Seu site é seu território, onde você manda.",
              icon: <Zap className="text-amber-500" />,
              color: "bg-amber-50"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 group">
              <div className={`flex-shrink-0 w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold font-heading mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] -rotate-3 transform scale-105"></div>
        <div className="relative bg-gray-900 rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <Code size={40} className="text-blue-500 opacity-50" />
          </div>
          <div className="mb-12">
            <h5 className="text-5xl font-black mb-2 text-blue-400">93%</h5>
            <p className="text-gray-400 text-lg">das experiências online começam com uma busca.</p>
          </div>
          <div className="space-y-4">
             <div className="h-2 bg-blue-600 w-full rounded-full"></div>
             <div className="h-2 bg-gray-700 w-3/4 rounded-full"></div>
             <div className="h-2 bg-gray-700 w-1/2 rounded-full"></div>
          </div>
          <p className="mt-12 text-xl font-medium text-gray-300 italic">
            "Sua empresa não precisa de apenas um site, ela precisa de uma máquina de conversão."
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { id: 1, title: "Plataforma Darcy", category: "Plataforma educacional em desenvolvimento", img: "img/img_7.png" },
      { id: 2, title: "Villas Carnes", category: "Distibuidora de carnes", img: "img/img_10.png" },
    { id: 3, title: "Fernanda Design", category: "Design", img: "img/img_11.png" },
  ];

  const next = () => setCurrentIndex((currentIndex + 1) % items.length);
  const prev = () => setCurrentIndex((currentIndex - 1 + items.length) % items.length);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black font-heading mb-6 tracking-tight">Projetos <span className="text-blue-600">Recentes</span></h2>
            <p className="text-gray-500 text-xl">Uma vitrine do que construímos para levar empresas ao próximo nível.</p>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all shadow-sm active:scale-90 group">
              <ArrowRight className="rotate-180 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={next} className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-black transition-all shadow-xl active:scale-90 group">
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[3rem] bg-gray-50 h-[35rem] md:h-[45rem] shadow-2xl">
           <div className="absolute inset-0 flex">
             {items.map((item, idx) => (
               <div 
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) transform ${idx === currentIndex ? 'opacity-100 scale-100 translate-x-0 z-10' : 'opacity-0 scale-110 translate-x-full z-0'}`}
               >
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                 <div className="absolute bottom-0 left-0 right-0 p-10 md:p-20 text-white">
                   <span className="px-5 py-2 bg-blue-600 rounded-full text-sm font-black mb-6 inline-block uppercase tracking-widest">{item.category}</span>
                   <h3 className="text-4xl md:text-6xl font-black font-heading">{item.title}</h3>
                   <div className="mt-8 h-1 w-24 bg-blue-600"></div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

const AIConsultant = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Olá! Sou o consultor virtual do Guilherme. Me conte: qual o seu negócio e qual seu maior desafio digital hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getGeminiResponse(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[600px]">
          <div className="md:w-2/5 bg-gray-900 p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent -z-0"></div>
            <div className="relative z-10">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                <MessageSquare size={30} />
              </div>
              <h3 className="text-3xl font-black font-heading mb-6 leading-tight">Consultoria <br/><span className="text-blue-500">Inteligente</span></h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">Receba uma análise instantânea baseada em inteligência artificial para o seu próximo projeto web.</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm font-bold text-gray-500 bg-white/5 p-3 rounded-xl border border-white/10">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   Analisando tendências de mercado
                </div>
              </div>
            </div>
            <div className="mt-12 text-xs font-bold uppercase tracking-widest text-gray-600 flex items-center gap-2">
              <Code size={14}/> Guilherme AI Engine
            </div>
          </div>
          
          <div className="md:w-3/5 flex flex-col h-[600px] bg-white">
            <div className="flex-1 p-8 overflow-y-auto space-y-6 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[90%] p-5 rounded-3xl ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-xl shadow-blue-100' : 'bg-gray-50 text-gray-800 rounded-tl-none border border-gray-100'}`}>
                    <p className="leading-relaxed text-lg">{m.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="p-6 border-t border-gray-100">
              <div className="flex gap-3 bg-gray-50 p-2 rounded-2xl border border-gray-200 focus-within:border-blue-300 transition-all">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Descreva seu projeto ou dúvida..."
                  className="flex-1 bg-transparent px-4 py-3 outline-none text-lg text-gray-700 font-medium"
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-blue-600 text-white w-12 h-12 rounded-xl hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-200 flex items-center justify-center disabled:opacity-50 disabled:grayscale"
                >
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-white text-gray-900 pt-24 pb-12 px-4 border-t border-gray-50">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-blue-600 p-2 rounded-xl shadow-lg">
              <Code className="text-white w-7 h-7" />
            </div>
            <span className="text-3xl font-black font-heading tracking-tight">Guilherme <span className="text-blue-600">WebSites</span></span>
          </div>
          <p className="text-gray-500 text-xl max-w-sm mb-10 leading-relaxed font-medium">
            Transformando o cenário digital de Brasília e do Brasil com sites de alta performance.
          </p>
          <div className="flex gap-5">
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" className="w-14 h-14 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
              <Linkedin size={24} />
            </a>
            <a href="https://instagram.com/seu-perfil" target="_blank" className="w-14 h-14 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/556182292636" target="_blank" className="w-14 h-14 bg-gray-50 text-gray-600 rounded-2xl flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-sm hover:shadow-xl hover:-translate-y-1">
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8 font-heading text-gray-900">Navegação</h4>
          <ul className="space-y-4 text-lg font-semibold text-gray-500">
            <li><a href="#inicio" className="hover:text-blue-600 transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-blue-600 transition-colors">Sobre Mim</a></li>
            <li><a href="#servicos" className="hover:text-blue-600 transition-colors">Serviços</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600 transition-colors">Portfólio</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-8 font-heading text-gray-900">Contato Direto</h4>
          <ul className="space-y-6 text-lg font-semibold text-gray-500">
            <li className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Smartphone size={20} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-bold uppercase">WhatsApp</span>
                <span className="text-gray-900 font-black">+55 61 8229-2636</span>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-sm text-gray-400 font-bold uppercase">Base</span>
                <span className="text-gray-900 font-black">Brasília, DF</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 font-bold text-sm uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Guilherme WebSites. Todos os direitos reservados.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-gray-900 transition-colors">Privacidade</a>
           <a href="#" className="hover:text-gray-900 transition-colors">Termos</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <WhySection />
      <AIConsultant />
      <Portfolio />
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/556182292636" 
          target="_blank"
          className="bg-green-500 text-white w-16 h-16 md:w-20 md:h-20 rounded-[2rem] shadow-2xl hover:bg-green-600 transition-all flex items-center justify-center active:scale-90 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <MessageSquare className="w-8 h-8 md:w-10 md:h-10 relative z-10" fill="white" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black animate-bounce shadow-md">1</span>
        </a>
      </div>

      <Footer />
    </div>
  );
}
