import {Link} from 'react-router-dom';
import {ArrowRight,Activity,BookOpen,HeartPulse,Microscope,ShieldCheck,Stethoscope,Waypoints} from 'lucide-react';
import {motion} from 'framer-motion';
import {SectionTitle} from '../components/ui/SectionTitle';
import {research} from '../data/research';
import {projects} from '../data/projects';
import {roadmap} from '../data/roadmap';

const focusAreas=[
  ['Cardiac Surgery',HeartPulse],['Thoracic Surgery',Stethoscope],['Vascular Surgery',Waypoints],
  ['Perioperative Medicine',Activity],['Critical Care',ShieldCheck],['Systematic Review',BookOpen],
  ['Meta-Analysis',Microscope],['Patient Safety',ShieldCheck],
] as const;
const purpose=[
  [Stethoscope,'Clinical Foundation','Strengthening the anatomy, physiology, and perioperative principles that underpin safe surgical learning.'],
  [Microscope,'Research','Developing careful questions and evidence synthesis around meaningful cardiothoracic and vascular outcomes.'],
  [BookOpen,'Academic Development','Building consistent habits in critical appraisal, scientific writing, and specialist-training preparation.'],
  [ShieldCheck,'Contribution','Preparing responsible tools and knowledge that may support Indonesian cardiovascular care in the future.'],
] as const;

function Anatomy(){return <div className="hero-art" aria-hidden="true"><div className="particles">{Array.from({length:8},(_,i)=><i key={i}/>)}</div><svg viewBox="0 0 520 540" role="presentation"><defs><linearGradient id="vessel" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#00C6D7"/><stop offset="1" stopColor="#0A9EAA"/></linearGradient></defs><circle cx="260" cy="270" r="218" className="orbit"/><circle cx="260" cy="270" r="164" className="orbit orbit-inner"/><path className="anatomy-line" d="M260 76v89m0-46c-58-52-120-15-112 70 7 71 52 126 112 154m0-224c58-52 120-15 112 70-7 71-52 126-112 154"/><path className="heart" d="M260 194c-37-48-91 1-66 51 14 28 66 68 66 68s52-40 66-68c25-50-29-99-66-51Z"/><path className="vessel" d="M260 194V91c0-26 37-26 37 0v57M260 313v145m0-79-65 78m65-78 65 78m-65-116-48 51m48-51 48 51"/><path className="pulse" d="M52 360h90l18-37 23 72 28-61 22 26h84l16-31 18 31h117"/><g className="nodes"><circle cx="105" cy="158" r="5"/><circle cx="415" cy="170" r="5"/><circle cx="114" cy="423" r="5"/><circle cx="405" cy="414" r="5"/></g></svg><p className="hero-art-caption">A conceptual study of heart, thorax, and vascular pathways</p></div>}

const entrance={hidden:{opacity:0,y:16},show:{opacity:1,y:0}};
const reveal={hidden:{opacity:0,y:28},show:{opacity:1,y:0,transition:{duration:.55,ease:'easeOut' as const}}};
const stagger={hidden:{},show:{transition:{staggerChildren:.1}}};
export default function Home(){const featured=[...research.slice(0,2).map((item)=>({category:'Research',title:item.title,summary:item.summary,status:item.status,path:'/research'})),{category:'Digital project',title:projects[0].title,summary:projects[0].subtitle,status:projects[0].status,path:'/projects'}];return <>
  <section className="hero"><div className="container-shell hero-grid"><motion.div initial="hidden" animate="show" transition={{staggerChildren:.085}}>
    <motion.p variants={entrance} className="eyebrow">Kapten Kes dr. Muhammad Sobri Maulana</motion.p>
    <motion.div variants={entrance} className="mt-5 flex flex-wrap gap-2"><span className="chip">BTKV Aspirant</span><span className="chip">Indonesia</span></motion.div>
    <motion.h1 variants={entrance} className="display hero-title">Building a Future in <span>Cardiothoracic &amp; Vascular Surgery</span></motion.h1>
    <motion.p variants={entrance} className="prose-copy hero-copy">A structured academic journey through clinical learning, research, and responsible innovation in Indonesian cardiovascular care.</motion.p>
    <motion.div variants={entrance} className="hero-actions"><Link to="/academic-works" className="button button-primary">Explore Portfolio <ArrowRight size={16}/></Link><Link to="/research" className="button button-secondary">View Research</Link></motion.div>
    <motion.div variants={entrance} className="hero-links"><Link to="/lpdp" className="lpdp-hero-link">Explore LPDP Preparation <ArrowRight size={14}/></Link><Link to="/cv">View CV <ArrowRight size={14}/></Link></motion.div>
  </motion.div><motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.65,delay:.25}}><Anatomy/></motion.div></div></section>

  <section className="section section-light" id="portfolio"><div className="container-shell"><SectionTitle label="Selected portfolio" title="Evidence of a deliberate journey" copy="Research, academic writing, and digital concepts developed as part of a focused preparation pathway."/><motion.div className="featured-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,amount:.12}}>{featured.map((item,i)=><motion.div variants={reveal} key={item.title} className={i===0?'featured-card-main':''}><Link to={item.path} className="featured-card"><div><span className="card-index">0{i+1}</span><span className="card-category">{item.category}</span></div><h3>{item.title}</h3><p>{item.summary}</p><div className="card-footer"><span>{item.status}</span><ArrowRight size={19}/></div></Link></motion.div>)}</motion.div></div></section>

  <section className="section" id="focus"><div className="container-shell"><SectionTitle label="Areas of focus" title="A connected field of study" copy="Eight complementary areas frame the clinical and academic preparation documented across this portfolio."/><motion.div className="focus-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}}>{focusAreas.map(([name,Icon],i)=><motion.article variants={reveal} key={name} className="focus-item"><span>0{i+1}</span><Icon aria-hidden="true"/><h3>{name}</h3></motion.article>)}</motion.div></div></section>

  <section className="section purpose-section"><div className="container-shell"><SectionTitle label="Academic direction" title="Why this portfolio exists" copy="A transparent record of preparation toward advanced training in Bedah Toraks, Kardiak, dan Vaskular."/><motion.div className="purpose-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,amount:.15}}>{purpose.map(([Icon,title,copy])=><motion.article variants={reveal} className="purpose-card" key={title}><Icon aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></motion.article>)}</motion.div></div></section>

  <section className="section roadmap-preview"><div className="container-shell roadmap-layout"><div><SectionTitle label="Preparation roadmap" title="Progress with purpose" copy="The roadmap organizes foundational study, specialist domains, research, and portfolio readiness without implying completion."/><Link to="/roadmap" className="text-link">Open the full roadmap <ArrowRight size={16}/></Link></div><motion.ol variants={stagger} initial="hidden" whileInView="show" viewport={{once:true,amount:.2}}>{roadmap.slice(0,3).map(item=><motion.li variants={reveal} key={item.month}><span>Stage {String(item.month).padStart(2,'0')}</span><div><h3>{item.title}</h3><p>{item.items.slice(0,3).join(' · ')}</p></div></motion.li>)}</motion.ol></div></section>
  </>}
