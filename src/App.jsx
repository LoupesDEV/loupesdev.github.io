import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Code, User, Send, Clock, ArrowLeft, 
  Github, Linkedin, ExternalLink, Mail, X, Scroll, 
  Sword, Crown, Lock, MapPin, Anchor, BookOpen, 
  Shield, Zap, Brain, Target, Volume2, VolumeX, Play,
  Film, Gamepad2, Headphones, Monitor, Coffee, Feather
} from 'lucide-react';


const SECTIONS = {
  HOME: 'home',
  PROJECTS: 'projets',
  SKILLS: 'compétences',
  ABOUT: 'à-propos',
  TIMELINE: 'parcours',
  CONTACT: 'contact',
};

const AUDIO_URL = "assets/audio/background.mp3";

const ISLAND_DATA = [
  {
    id: SECTIONS.PROJECTS,
    title: " PROJETS",
    label: "PROJETS", 
    color: "from-purple-600 to-indigo-900",
    accent: "border-purple-500",
    path: "M45,20 C48,18 52,19 55,15 C57,12 62,8 65,5 C69,2 73,12 75,15 C77,18 82,19 85,20 C89,22 92,28 95,30 C100,33 110,35 115,40 C118,45 112,55 110,60 C108,65 108,68 105,70 C101,73 95,80 90,85 C86,89 80,88 75,90 C70,91 60,88 55,85 C50,82 40,83 35,80 C30,77 28,73 25,70 C21,65 18,55 15,50 C13,45 22,38 25,35 C29,31 40,23 45,20 Z M30,50 L40,55 M70,40 L80,45 M50,70 L60,75 M90,60 L100,65",
    x: 10, y: 15,
    delay: "0s"
  },
  {
    id: SECTIONS.SKILLS,
    title: " COMPÉTENCES",
    label: "SAVOIR",
    color: "from-blue-700 to-slate-900",
    accent: "border-blue-500",
    path: "M30,10 C34,8 38,7 40,5 C43,3 47,-2 50,0 C54,2 57,3 60,5 C64,8 68,9 70,10 C74,13 77,20 80,25 C83,30 87,35 90,40 C93,45 97,55 95,60 C93,66 85,75 80,80 C76,84 70,83 65,85 C60,86 55,88 50,90 C45,91 40,88 35,85 C30,81 25,75 20,70 C17,64 13,45 10,40 C8,35 12,28 15,25 C19,20 26,13 30,10 Z M20,40 L30,45 M60,20 L70,25 M40,70 L50,75 M80,50 L90,55",
    x: 65, y: 10,
    delay: "1.2s"
  },
  {
    id: SECTIONS.ABOUT,
    title: " A PROPOS",
    label: "À PROPOS",
    color: "from-emerald-800 to-teal-950",
    accent: "border-emerald-500",
    path: "M40,15 C45,13 50,12 55,10 C60,8 65,3 70,5 C75,7 80,12 85,15 C88,18 89,22 90,25 C92,32 93,38 95,45 C97,50 99,55 100,60 C100,67 92,75 85,80 C79,84 75,90 70,95 C64,99 55,93 50,90 C45,88 35,88 30,85 C25,81 18,75 15,70 C13,64 11,55 10,50 C9,43 17,33 20,30 C25,25 35,18 40,15 Z M30,60 L40,65 M70,30 L80,35 M50,80 L60,85 M90,50 L95,55",
    x: 40, y: 40,
    delay: "2.4s"
  },
  {
    id: SECTIONS.TIMELINE,
    title: " PARCOURS",
    label: "PARCOURS",
    color: "from-amber-700 to-orange-900",
    accent: "border-amber-600",
    path: "M25,20 C30,18 35,17 40,15 C45,13 50,8 55,10 C60,12 65,13 70,15 C75,17 80,18 85,20 C90,24 93,30 95,35 C98,40 102,45 105,50 C106,59 98,70 95,75 C92,80 89,86 85,90 C80,93 70,91 65,88 C60,85 50,87 45,85 C39,82 30,79 25,75 C20,70 16,65 15,60 C13,53 11,45 10,40 C9,33 20,25 25,20 Z M30,50 L40,55 M70,30 L80,35 M50,70 L60,75 M90,50 L95,55",
    x: 10, y: 60,
    delay: "0.6s"
  },
  {
    id: SECTIONS.CONTACT,
    title: " CONTACT",
    label: "CONTACT",
    color: "from-rose-800 to-red-950",
    accent: "border-rose-600",
    path: "M35,10 C40,8 45,7 50,5 C55,3 60,-2 65,0 C70,2 75,8 80,10 C85,13 90,15 95,20 C98,27 99,33 100,40 C102,47 104,53 105,60 C105,67 95,75 90,80 C85,84 80,91 75,95 C70,98 60,93 55,90 C50,87 40,88 35,85 C30,81 23,75 20,70 C17,64 16,55 15,50 C14,43 21,34 25,30 C29,25 32,13 35,10 Z M30,60 L40,65 M70,30 L80,35 M50,80 L60,85 M90,50 L95,55",
    x: 70, y: 55,
    delay: "1.8s"
  },
];

const USER_DATA = {
    projects: [
        { 
            id: 1, 
            type: "Personnel",
            title: 'StreamIt', 
            desc: 'Expérience de streaming fluide.', 
            longDesc: 'Une plateforme née d\'un besoin personnel de gérer 1.5To de films et séries. L\'objectif était de créer une expérience sur-mesure, fluide, avec un accès direct aux métadonnées des épisodes.', 
            techs: ['HTML', 'CSS', 'JS'],
            github: 'https://github.com/LoupesDEV/StreamIt',
            demo: 'http://www.matheo-pichotmoise.fr/StreamIt/'
        },
        { 
            id: 2, 
            type: "Personnel",
            title: 'LiftIt', 
            desc: 'Configurateur d\'équipement SimRacing.', 
            longDesc: 'Application web légère pour configurer et estimer un équipement de simulation de course. Regroupe les liens, noms et prix des marques (cockpits, sièges, volants) pour faciliter la création de setups complets.', 
            techs: ['HTML', 'CSS', 'JS'],
            github: 'https://github.com/LoupesDEV/LiftIt',
            demo: 'http://www.matheo-pichotmoise.fr/LiftIt/'
        },
        { 
            id: 3, 
            type: "Professionnel",
            title: 'Fermyland Anniv', 
            desc: 'Plateforme de réservation pour parc.', 
            longDesc: 'Numérisation complète du processus de réservation d\'anniversaires pour le parc Fermyland (Orcet). Remplace un système papier par une app web permettant la réservation en ligne, le paiement d\'acomptes et la gestion administrative simplifiée.', 
            techs: ['HTML', 'CSS', 'JS', 'Python'],
            github: null,
            demo: 'https://anniversaire.fermyland.com/'
        },
        { 
            id: 4, 
            type: "Open Source",
            title: 'SoundFixer', 
            desc: 'Extension web audio booster.', 
            longDesc: 'Contribution à une extension Web permettant de corriger les problèmes de son (ex: YouTube). Elle détecte les sources audio de chaque onglet et permet d\'amplifier ou d\'atténuer le volume indépendamment.', 
            techs: ['JS', 'HTML', 'CSS'],
            github: 'https://github.com/valpackett/soundfixer',
            demo: 'https://addons.mozilla.org/en-GB/firefox/addon/soundfixer/'
        },
    ],
    skills: {
        frontend: ['React', 'Vue', 'Tailwind', 'Three.js', 'HTML/CSS/JS'],
        backend: ['NodeJS', 'Python', 'PHP', 'PostgreSQL', 'C', 'C++', 'C#'],
        tools: ['Git', 'Docker', 'OVH', 'Replit', 'Hostinger']
    },
    timeline: [
        { date: "Oct 2025 - Présent", title: "Software Developer", place: "Fermyland", desc: "Développement logiciel et solutions web.", type: "pro" },
        { date: "Sept 2025 - Présent", title: "BUT Informatique", place: "IUT Aubière", desc: "1ère année. Apprentissage approfondi du développement.", type: "school" },
        { date: "Avril - Oct 2025", title: "Employé Polyvalent", place: "Fermyland", desc: "Animateur et gestion opérationnelle au parc d'attraction.", type: "pro" },
        { date: "2023 - 2024", title: "BAC STI2D", place: "Lycée La Fayette", desc: "Spécialité Systèmes d'Information et Numérique.", type: "school" },
        { date: "Été 2022 - 2024", title: "Employé Agricole", place: "Saisonnier", desc: "Expériences de travail saisonnier.", type: "pro" }
    ],
    stats: [
        { label: "Créativité", value: 90, icon: <Brain size={16}/> },
        { label: "Logique", value: 95, icon: <Zap size={16}/> },
        { label: "Endurance", value: 85, icon: <Shield size={16}/> },
        { label: "Stratégie", value: 100, icon: <Target size={16}/> },
    ],
    favorites: {
        movies: ["Rush", "Hunger Games", "Le Labyrinthe"],
        series: ["The 100", "Game of Thrones", "Le Jeu de la Dame"],
        games: ["Assetto Corsa (Sim Racing)"],
        music: ["Sabrina Carpenter", "Pop"],
        tech: ["MacOS <3", "Jetbrains Suite", "Schweppes"],
        quote: "Le code est l'art de donner vie à la logique.",
        philosophy: "Artistique. Je veux proposer des \"expériences\", pas juste du code."
    }
};

const MapBackground = () => (
  <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0a0c] pointer-events-none">
    <svg className="absolute inset-0 w-full h-full opacity-20 mix-blend-overlay">
      <filter id="paperNoise">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#paperNoise)" />
    </svg>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
    
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-purple-300/20 blur-[1px]"
        style={{
          width: Math.random() * 2 + 1 + 'px',
          height: Math.random() * 2 + 1 + 'px',
          top: Math.random() * 100 + '%',
          left: Math.random() * 100 + '%',
          animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`
        }}
      />
    ))}
    <style>{`
      @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        50% { opacity: 0.5; }
        100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
      }
    `}</style>
  </div>
);

const RealisticClouds = ({ active }) => {
  return (
    <div className={`fixed inset-0 z-50 pointer-events-none flex flex-col md:flex-row h-screen w-screen transition-opacity duration-100 ${active ? 'opacity-100' : 'opacity-0 delay-500'}`}>
      <svg className="absolute w-0 h-0">
        <filter id="cloudFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="5" seed="1" />
          <feDisplacementMap in="SourceGraphic" scale="100" />
        </filter>
      </svg>
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${active ? 'opacity-100 delay-300' : 'opacity-0 delay-200'}`} />

      <div 
        className={`relative w-full md:w-[51%] h-1/2 md:h-full bg-[#1a1625] transition-transform duration-[1.4s] ease-in-out flex items-center justify-end
        ${active ? 'translate-x-0 translate-y-0' : 'translate-x-0 -translate-y-full md:-translate-x-full md:translate-y-0'}`}
        style={{ filter: 'url(#cloudFilter)', boxShadow: '10px 10px 50px rgba(0,0,0,0.8)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/40 to-transparent opacity-80" />
      </div>

      <div 
        className={`relative w-full md:w-[51%] h-1/2 md:h-full bg-[#1a1625] transition-transform duration-[1.4s] ease-in-out flex items-center justify-start md:-ml-1
        ${active ? 'translate-x-0 translate-y-0' : 'translate-x-0 translate-y-full md:translate-x-full md:translate-y-0'}`}
        style={{ filter: 'url(#cloudFilter)', boxShadow: '-10px -10px 50px rgba(0,0,0,0.8)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-l from-black via-indigo-900/40 to-transparent opacity-80" />
      </div>
      
      <div className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${active ? 'opacity-100 delay-700' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-400 rounded-full animate-spin mb-4" />
        <span className="text-purple-200 font-serif tracking-[0.3em] text-sm animate-pulse uppercase">Traversée de l'Ether...</span>
      </div>
    </div>
  );
};

const WelcomeScreen = ({ onStart }) => {
    return (
        <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-[#050407] transition-opacity duration-1000">
            <div className="text-center animate-fadeInUp px-4">
                <div className="mb-8 relative inline-block">
                    <div className="absolute inset-0 bg-[#bf9b30] blur-2xl opacity-20 animate-pulse"></div>
                    <h1 className="relative text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#e2c792] via-[#bf9b30] to-[#8a6d1c] tracking-widest mb-4">
                        L'ARCHIPEL
                    </h1>
                </div>
                <p className="text-slate-400 font-serif tracking-[0.2em] uppercase text-xs md:text-sm mb-12">
                    Portfolio &bull; Mathéo Pichot-Moïse
                </p>
                
                <button 
                    onClick={onStart}
                    className="group relative px-8 py-4 bg-transparent border border-[#bf9b30]/30 hover:border-[#bf9b30] transition-all duration-500"
                >
                    <div className="absolute inset-0 bg-[#bf9b30]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    <span className="relative flex items-center gap-3 text-[#bf9b30] font-serif uppercase tracking-widest text-sm">
                        <Play size={16} className="fill-current" /> Entrer dans le monde
                    </span>
                </button>
            </div>
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
            <div className="relative bg-[#1a1625] border border-purple-500/30 w-full max-w-2xl rounded-sm shadow-[0_0_50px_rgba(100,50,255,0.15)] animate-scaleIn p-1 max-h-[90vh] overflow-y-auto custom-scrollbar">
                 <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-400 -mt-1 -ml-1" />
                 <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-400 -mt-1 -mr-1" />
                 <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-400 -mb-1 -ml-1" />
                 <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-400 -mb-1 -mr-1" />

                <div className="relative bg-slate-900/50 p-6 md:p-8">
                    <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                    
                    <div className="mb-6 border-b border-white/10 pb-4">
                        <div className="flex justify-between items-center">
                            <span className="text-purple-400 text-xs font-serif uppercase tracking-widest">Archive {project.type}</span>
                            <div className="flex gap-2">
                                {project.techs.map(t => (
                                    <span key={t} className="text-[10px] px-2 py-1 bg-slate-800 border border-purple-500/20 text-slate-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">{project.title}</h2>
                    </div>

                    <div className="space-y-4 text-slate-300 leading-relaxed font-serif">
                        <p>{project.longDesc}</p>
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row gap-4">
                         {project.github ? (
                            <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 text-white py-3 font-serif uppercase tracking-widest text-sm transition-colors border border-purple-500/50">
                                <Github size={18} /> Voir le Code
                            </a>
                         ) : (
                            <button disabled className="flex-1 flex items-center justify-center gap-2 bg-slate-800 text-slate-500 py-3 font-serif uppercase tracking-widest text-sm border border-slate-700 cursor-not-allowed">
                                <Lock size={18} /> Code Privé
                            </button>
                         )}
                         
                         {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white py-3 font-serif uppercase tracking-widest text-sm transition-colors border border-white/20">
                                <ExternalLink size={18} /> Accès Site
                            </a>
                         )}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes scaleIn {
                    from { transform: scale(0.9); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-scaleIn { animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            `}</style>
        </div>
    );
};

const MapScreen = ({ onNavigate, isZooming }) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center overflow-hidden transition-transform duration-[1.5s] ease-in-out ${isZooming ? 'scale-[4] opacity-0' : 'scale-100 opacity-100'}`}>
      
      <div className="relative w-full h-full p-0 select-none">
        
        <div className="absolute top-4 md:top-8 left-0 right-0 text-center pointer-events-none z-10">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#e2c792] via-[#bf9b30] to-[#8a6d1c] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] tracking-widest">
            ARCHIPEL
          </h1>
          <div className="flex items-center justify-center gap-4 mt-2 opacity-80">
             <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-[#bf9b30]" />
             <p className="text-[#bf9b30] text-[10px] md:text-xs uppercase tracking-[0.5em] font-serif">Mathéo Pichot-Moïse</p>
             <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-[#bf9b30]" />
          </div>
        </div>

        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
          <pattern id="waves-bg" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
             <path d="M0,5 Q2.5,2.5 5,5 T10,5" fill="none" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="0.5" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#waves-bg)" />
        </svg>

        <div className="relative w-full h-full flex items-center justify-center p-4">
            <svg viewBox="5 5 110 90" preserveAspectRatio="xMidYMid meet" className="w-full h-full max-w-full max-h-full filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
            
            <path d="M30,30 Q45,25 65,30 T90,40" stroke="#bf9b30" strokeWidth="0.3" strokeDasharray="1 2" strokeOpacity="0.4" fill="none" />
            <path d="M90,50 Q80,70 65,80" stroke="#bf9b30" strokeWidth="0.3" strokeDasharray="1 2" strokeOpacity="0.4" fill="none" />
            <path d="M50,85 Q30,80 20,60" stroke="#bf9b30" strokeWidth="0.3" strokeDasharray="1 2" strokeOpacity="0.4" fill="none" />
            
            <pattern id="hatch" width="5" height="5" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="5" style={{stroke:'rgba(255,255,255,0.1)', strokeWidth:0.5}} />
            </pattern>

            {ISLAND_DATA.map((island) => (
                <g 
                key={island.id} 
                onClick={() => onNavigate(island.id)}
                className="cursor-pointer group"
                style={{ 
                    animation: `float 8s ease-in-out infinite`,
                    animationDelay: island.delay
                }}
                >
                <defs>
                    <linearGradient id={`grad-${island.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2a2438" />
                    <stop offset="100%" stopColor="#15121e" />
                    </linearGradient>
                    <filter id={`glow-${island.id}`}>
                        <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor={island.accent === 'border-purple-500' ? '#a855f7' : '#eab308'} floodOpacity="0.3" />
                    </filter>
                </defs>
                
                <foreignObject x={island.x} y={island.y} width="35" height="35" className="overflow-visible">
                    <div className="relative w-full h-full flex flex-col items-center justify-center group transition-transform duration-500 hover:scale-105">
                        <svg viewBox="0 0 130 130" className="w-full h-full overflow-visible">
                            <path 
                                d={island.path} 
                                fill={`url(#grad-${island.id})`}
                                stroke={island.accent === 'border-purple-500' ? '#a855f7' : island.accent === 'border-blue-500' ? '#3b82f6' : island.accent === 'border-emerald-500' ? '#10b981' : island.accent === 'border-amber-600' ? '#d97706' : '#e11d48'}
                                strokeWidth="0.8"
                                className="transition-all duration-300 group-hover:stroke-[1.5]"
                                style={{ filter: `url(#glow-${island.id})` }}
                            />
                            <path 
                                d={island.path} 
                                fill="url(#hatch)"
                                className="pointer-events-none opacity-50"
                            />
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-[#bf9b30] font-serif font-bold text-[2px] md:text-[3px] tracking-widest drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] opacity-90 group-hover:text-white transition-colors duration-300 text-center px-1">
                                {island.label}
                            </span>
                        </div>
                    </div>
                </foreignObject>
                </g>
            ))}
            
            <g transform="translate(10, 85)" opacity="0.3">
                <circle r="8" stroke="#bf9b30" strokeWidth="0.5" fill="none" />
                <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" fill="#bf9b30" />
            </g>
            </svg>
        </div>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
        `}</style>
      </div>
    </div>
  );
};

const ContentPage = ({ id, onBack }) => {
  const data = ISLAND_DATA.find(i => i.id === id) || ISLAND_DATA[0];
  const [selectedProject, setSelectedProject] = useState(null);

  const renderContent = () => {
    switch(id) {
        case SECTIONS.PROJECTS:
            return (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 pb-20">
                        {USER_DATA.projects.map((item) => (
                            <div 
                                key={item.id} 
                                onClick={() => setSelectedProject(item)}
                                className="relative bg-[#15121e] border border-white/5 p-1 group cursor-pointer hover:border-[#bf9b30]/50 transition-colors duration-300"
                            >
                                <div className="absolute inset-0 border border-white/5 m-1 pointer-events-none" />
                                
                                <div className="h-48 bg-[#0a0810] mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                                        <Code className="text-[#bf9b30] opacity-20" size={60}/>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#15121e] to-transparent opacity-80" />
                                    <div className="absolute top-2 right-2">
                                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 border ${item.type === 'Professionnel' ? 'text-amber-400 border-amber-400/30' : 'text-purple-400 border-purple-400/30'} bg-black/50`}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-2 left-4">
                                        <span className="text-[#bf9b30] text-xs font-serif uppercase tracking-widest">Artefact {item.id}</span>
                                    </div>
                                </div>
                                
                                <div className="p-4 pt-0">
                                    <h3 className="text-xl font-serif font-bold text-slate-200 group-hover:text-[#bf9b30] transition-colors mb-2">{item.title}</h3>
                                    <p className="text-slate-500 text-sm font-serif italic mb-4 line-clamp-2">{item.desc}</p>
                                    <div className="flex gap-2">
                                        {item.techs.slice(0, 3).map(t => (
                                            <span key={t} className="text-[10px] uppercase tracking-wider text-slate-400 border border-slate-700 px-2 py-1">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                </>
            );
        case SECTIONS.SKILLS:
            return (
                <div className="mt-8 space-y-12 font-serif pb-20">
                    <div className="relative border-l border-[#bf9b30]/30 pl-8 py-2">
                        <h3 className="text-2xl text-[#bf9b30] mb-6 flex items-center gap-3"><Crown size={24}/> Magie Frontale</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {USER_DATA.skills.frontend.map(skill => (
                                <div key={skill} className="flex items-center gap-2 text-slate-300 bg-white/5 p-3 border border-white/5 hover:border-[#bf9b30]/30 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-[#bf9b30] rotate-45" />
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative border-l border-blue-500/30 pl-8 py-2">
                        <h3 className="text-2xl text-blue-400 mb-6 flex items-center gap-3"><Code size={24}/> Arcanes Dorsales & Langages</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {USER_DATA.skills.backend.map(skill => (
                                <div key={skill} className="flex items-center gap-2 text-slate-300 bg-white/5 p-3 border border-white/5 hover:border-blue-500/30 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-blue-500 rotate-45" />
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative border-l border-slate-500/30 pl-8 py-2">
                        <h3 className="text-2xl text-slate-400 mb-6 flex items-center gap-3"><Anchor size={24}/> Outils de la Forge</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {USER_DATA.skills.tools.map(skill => (
                                <div key={skill} className="flex items-center gap-2 text-slate-400 bg-white/5 p-3 border border-white/5 hover:border-slate-500/30 transition-colors">
                                    <div className="w-1.5 h-1.5 bg-slate-500 rotate-45" />
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case SECTIONS.ABOUT:
            return (
                <div className="mt-8 pb-20">
                    <div className="flex flex-col items-center mb-16 text-center">
                        <div className="w-32 h-32 rounded-full border-2 border-[#bf9b30] flex items-center justify-center bg-[#1a1625] shadow-[0_0_30px_rgba(191,155,48,0.2)] mb-8 animate-float">
                            <User size={48} className="text-[#bf9b30]" />
                        </div>
                        
                        <div className="max-w-2xl space-y-6 font-serif leading-relaxed text-slate-300">
                            <p className="text-xl">
                                Je suis <span className="text-[#bf9b30] font-bold">Mathéo PICHOT-MOÏSE</span>, étudiant en BUT Informatique à l'IUT de Clermont-Ferrand.
                            </p>
                            <p className="italic text-slate-400 border-l-2 border-[#bf9b30] pl-4">
                                "{USER_DATA.favorites.quote}"
                            </p>
                            <div className="py-6 flex justify-center">
                                <div className="inline-flex items-center gap-3 px-6 py-3 border border-[#bf9b30] bg-[#bf9b30]/10 rounded-sm">
                                    <Crown size={20} className="text-[#bf9b30]" />
                                    <span className="uppercase tracking-widest text-sm text-[#bf9b30] font-bold">Titre FIDE (Échecs)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        
                        <div className="bg-[#15121e] border border-white/10 p-6 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Film size={64}/></div>
                            <h3 className="text-[#bf9b30] font-serif text-lg mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                                <Film size={18}/> Culture Pop
                            </h3>
                            <div className="space-y-3 text-sm text-slate-400 font-serif">
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Univers Favori</span>
                                    <span className="text-white">Post-apocalyptique / The 100 ❤️</span>
                                    <div className="text-[10px] italic mt-1 text-[#bf9b30]">"Puissions-nous nous retrouver"</div>
                                </div>
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Séries Cultes</span>
                                    <div className="flex flex-wrap gap-2">
                                        {USER_DATA.favorites.series.map(s => <span key={s} className="px-2 py-1 bg-white/5 border border-white/5">{s}</span>)}
                                    </div>
                                </div>
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Films</span>
                                    <div className="flex flex-wrap gap-2">
                                        {USER_DATA.favorites.movies.map(m => <span key={m} className="px-2 py-1 bg-white/5 border border-white/5">{m}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#15121e] border border-white/10 p-6 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Gamepad2 size={64}/></div>
                            <h3 className="text-blue-400 font-serif text-lg mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                                <Gamepad2 size={18}/> Zone Ludique
                            </h3>
                            <div className="space-y-4 text-sm text-slate-400 font-serif">
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Jeu de Coeur</span>
                                    <div className="text-white text-lg font-bold">Assetto Corsa</div>
                                    <div className="text-xs text-blue-300">Simulation de course pure</div>
                                </div>
                                <div className="p-3 bg-blue-900/10 border border-blue-500/20 rounded">
                                    <span className="text-xs uppercase text-blue-400 block mb-1">Style de Jeu</span>
                                    Simulation & Stratégie
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#15121e] border border-white/10 p-6 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Headphones size={64}/></div>
                            <h3 className="text-pink-400 font-serif text-lg mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                                <Headphones size={18}/> Fréquences
                            </h3>
                            <div className="space-y-4 text-sm text-slate-400 font-serif">
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Artiste Favori</span>
                                    <div className="text-white text-lg font-bold">Sabrina Carpenter</div>
                                    <div className="text-[10px] text-pink-300 bg-pink-900/20 px-2 py-1 inline-block mt-1 border border-pink-500/20">
                                        Top 1 sur 1M+ sur Deezer en 2025
                                    </div>
                                </div>
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Genre</span>
                                    Pop
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#15121e] border border-white/10 p-6 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Monitor size={64}/></div>
                            <h3 className="text-emerald-400 font-serif text-lg mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
                                <Monitor size={18}/> Setup & Philosophie
                            </h3>
                            <div className="grid grid-cols-2 gap-4 text-sm text-slate-400 font-serif">
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">OS Principal</span>
                                    <div className="text-white">MacOS <span className="text-red-400">&lt;3</span></div>
                                </div>
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">IDE</span>
                                    <div className="text-white">Jetbrains Suite</div>
                                </div>
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Carburant</span>
                                    <div className="text-white flex items-center gap-2"><Coffee size={12}/> Schweppes</div>
                                </div>
                                <div>
                                    <span className="text-slate-500 uppercase text-xs tracking-wider block mb-1">Style Code</span>
                                    <div className="text-emerald-300">Artistique & Expérientiel</div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-full mt-12 p-6 bg-black/30 border border-white/10 rounded-sm max-w-5xl mx-auto">
                        <h3 className="text-[#bf9b30] uppercase tracking-widest mb-6 text-sm border-b border-white/10 pb-2 flex items-center gap-2">
                            <Feather size={16}/> Attributs du Personnage
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {USER_DATA.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-2">
                                    <div className="p-3 bg-slate-800 rounded-full text-[#bf9b30] mb-1 ring-1 ring-[#bf9b30]/30">
                                        {stat.icon}
                                    </div>
                                    <span className="text-xs uppercase text-slate-500">{stat.label}</span>
                                    <div className="w-full h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                                        <div className="h-full bg-[#bf9b30]" style={{ width: `${stat.value}%` }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case SECTIONS.TIMELINE:
             const pro = USER_DATA.timeline.filter(t => t.type === 'pro');
             const school = USER_DATA.timeline.filter(t => t.type === 'school');

             return (
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
                    <div>
                        <h3 className="text-2xl font-serif text-[#bf9b30] mb-8 flex items-center gap-2 border-b border-[#bf9b30]/30 pb-2">
                            <Sword size={20}/> Quêtes Professionnelles
                        </h3>
                        <div className="relative border-l-2 border-[#bf9b30]/20 ml-3 space-y-12">
                            {pro.map((item, i) => (
                                <div key={i} className="relative pl-8 group">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rotate-45 bg-[#0a0a0c] border-2 border-[#bf9b30] transition-all group-hover:scale-125"></div>
                                    <span className="text-xs font-serif uppercase tracking-widest text-[#bf9b30]">
                                        {item.date}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-white mt-1">{item.title}</h3>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2 font-serif uppercase tracking-wider">
                                        <MapPin size={12}/> {item.place}
                                    </div>
                                    <p className="text-slate-500 font-serif italic text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                         <h3 className="text-2xl font-serif text-blue-400 mb-8 flex items-center gap-2 border-b border-blue-400/30 pb-2">
                            <BookOpen size={20}/> Académie & Savoirs
                        </h3>
                        <div className="relative border-l-2 border-blue-500/20 ml-3 space-y-12">
                            {school.map((item, i) => (
                                <div key={i} className="relative pl-8 group">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rotate-45 bg-[#0a0a0c] border-2 border-blue-500 transition-all group-hover:scale-125"></div>
                                    <span className="text-xs font-serif uppercase tracking-widest text-blue-400">
                                        {item.date}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-white mt-1">{item.title}</h3>
                                    <div className="flex items-center gap-2 text-slate-400 text-sm mb-2 font-serif uppercase tracking-wider">
                                        <MapPin size={12}/> {item.place}
                                    </div>
                                    <p className="text-slate-500 font-serif italic text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        case SECTIONS.CONTACT:
             return (
                <div className="mt-8 max-w-2xl mx-auto bg-[#1a1625]/50 p-8 border border-rose-900/50 backdrop-blur-sm pb-20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl text-rose-500 font-serif mb-2">Envoyer un Corbeau</h2>
                        <p className="text-slate-500 italic">Disponibles pour de nouvelles quêtes et alliances.</p>
                    </div>

                    <div className="space-y-6 font-serif">
                        <a href="mailto:contact@matheo-pichotmoise.fr" className="flex items-center gap-4 p-4 border border-white/10 hover:border-rose-500/50 transition-colors group bg-black/20">
                            <div className="p-3 bg-rose-900/20 text-rose-500 rounded-full group-hover:scale-110 transition-transform"><Mail size={20}/></div>
                            <div>
                                <div className="text-xs uppercase text-slate-500">Messagerie Pro</div>
                                <div className="text-white">contact@matheo-pichotmoise.fr</div>
                            </div>
                        </a>
                         <a href="mailto:matheo.pichot-moise@etu.uca.fr" className="flex items-center gap-4 p-4 border border-white/10 hover:border-rose-500/50 transition-colors group bg-black/20">
                            <div className="p-3 bg-rose-900/20 text-rose-500 rounded-full group-hover:scale-110 transition-transform"><BookOpen size={20}/></div>
                            <div>
                                <div className="text-xs uppercase text-slate-500">Messagerie Étudiante</div>
                                <div className="text-white">matheo.pichot-moise@etu.uca.fr</div>
                            </div>
                        </a>
                        
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <a href="https://github.com/LoupesDEV" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-4 border border-white/10 hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
                                <Github size={20}/> <span className="uppercase tracking-widest text-xs">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/math%C3%A9o-pichot-mo%C3%AFse-b538222a0/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-4 border border-white/10 hover:bg-blue-900/20 text-slate-300 hover:text-blue-300 transition-colors">
                                <Linkedin size={20}/> <span className="uppercase tracking-widest text-xs">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            );
        default:
            return null;
    }
  }

  return (
    <div className="absolute inset-0 z-10 overflow-y-auto custom-scrollbar bg-[#050407]">
        <div className="w-full min-h-full px-6 py-12 md:px-12 md:py-20 flex flex-col">
            <div className="max-w-6xl mx-auto w-full mb-12 flex items-center justify-between border-b border-white/10 pb-6">
                <button 
                    onClick={onBack}
                    className="group flex items-center gap-3 text-[#bf9b30] hover:text-[#e2c792] transition-colors"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform"/>
                    <span className="uppercase tracking-[0.2em] text-xs font-serif font-bold">Retour Carte</span>
                </button>
                
                <div className="text-center">
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 uppercase tracking-widest">
                        {data.title.split(' ').slice(1).join(' ')}
                    </h1>
                </div>

                <div className={`w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white bg-gradient-to-br ${data.color} opacity-80`}>
                    {data.icon}
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full animate-fadeInUp flex-1">
                {renderContent()}
            </div>
        </div>
        <style>{`
            .custom-scrollbar::-webkit-scrollbar { width: 6px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #0a0a0c; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-5px); }
            }
            .animate-float {
                animation: float 4s ease-in-out infinite;
            }
        `}</style>
    </div>
  );
};

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState(SECTIONS.HOME);
  const [isZooming, setIsZooming] = useState(false); 
  const [cloudsVisible, setCloudsVisible] = useState(false);
  
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const handleStart = () => {
    setHasStarted(true);
    if (audioRef.current) {
        audioRef.current.play().catch(error => console.log("Audio play failed:", error));
        audioRef.current.volume = 0.005;
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    }
  };

  const handleNavigation = (target) => {
    if (target === currentPage) return;
    if (currentPage === SECTIONS.HOME) setIsZooming(true);
    
    setTimeout(() => setCloudsVisible(true), 300);

    setTimeout(() => {
        setCurrentPage(target);
        window.scrollTo(0,0);
        setIsZooming(false); 
        setTimeout(() => setCloudsVisible(false), 300);
    }, 1700); 
  };

  return (
    <div className="relative w-full h-screen bg-[#050407] text-slate-200 overflow-hidden font-sans selection:bg-[#bf9b30]/30 selection:text-white">
      
      <audio ref={audioRef} loop src={AUDIO_URL} />

      <MapBackground />
      <RealisticClouds active={cloudsVisible} />

      {!hasStarted ? (
        <WelcomeScreen onStart={handleStart} />
      ) : (
        <>
            <main className="relative z-10 w-full h-full">
                {currentPage === SECTIONS.HOME ? (
                <MapScreen onNavigate={handleNavigation} isZooming={isZooming} />
                ) : (
                <ContentPage id={currentPage} onBack={() => handleNavigation(SECTIONS.HOME)} />
                )}
            </main>

            <button 
                onClick={toggleMute}
                className="fixed bottom-6 right-6 z-50 p-3 bg-black/50 border border-[#bf9b30]/30 rounded-full text-[#bf9b30] hover:bg-black/80 hover:border-[#bf9b30] transition-colors"
                title={isMuted ? "Activer le son" : "Couper le son"}
            >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400&display=swap');
        .font-serif { font-family: 'Cinzel', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
      `}</style>
    </div>
  );
}