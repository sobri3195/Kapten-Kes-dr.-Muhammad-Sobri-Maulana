import { motion } from 'framer-motion';
import {
  ArrowDown,
  BookOpen,
  FileCheck2,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContributionPathway } from '../components/lpdp/ContributionPathway';
import { EssayWorkspace } from '../components/lpdp/EssayWorkspace';
import { InterviewSimulator } from '../components/lpdp/InterviewSimulator';
import { LPDPTracker } from '../components/lpdp/LPDPTracker';
import { preparationPillars, preparationRoadmap, studyDirections } from '../data/lpdp';

const icons = [BookOpen, Stethoscope, Microscope, Users] as const;
const directionIcons = [HeartPulse, HeartPulse, Stethoscope, ShieldCheck, Microscope, FileCheck2] as const;
const reveal = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .55, ease: 'easeOut' as const } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: .1 } } };

export default function LPDP() {
  return <>
    <section className="lpdp-hero" id="lpdp">
      <motion.div className="container-shell lpdp-hero-grid" initial="hidden" animate="show" variants={stagger}>
        <div>
          <motion.p variants={reveal} className="eyebrow">A documented preparation journey</motion.p>
          <motion.h1 variants={reveal} className="display lpdp-title">LPDP <span>Preparation</span></motion.h1>
          <motion.p variants={reveal} className="lpdp-subtitle">Preparing for advanced education, clinical excellence, and meaningful contribution in cardiothoracic and vascular surgery.</motion.p>
          <motion.p variants={reveal} className="lpdp-translation">Persiapan menuju pendidikan lanjutan, keunggulan klinis, dan kontribusi bermakna dalam Bedah Toraks, Kardiak, dan Vaskular.</motion.p>
          <motion.div variants={reveal} className="hero-actions"><a href="#preparation-roadmap" className="button button-primary">View LPDP Roadmap <ArrowDown size={16}/></a><Link to="/btkv" className="button button-secondary">Explore BTKV Direction</Link></motion.div>
        </div>
        <motion.aside variants={reveal} className="lpdp-intro">
          <span className="lpdp-number">01</span><p className="eyebrow">Purpose of preparation</p>
          <h2>A structured record—not a scholarship status.</h2>
          <p>LPDP Preparation documents the work of preparing for advanced education: strengthening clinical foundations, developing research capability, articulating a responsible study plan, and defining a future contribution to healthcare in Indonesia.</p>
          <p>This pathway is relevant to my academic journey because specialist development in cardiothoracic and vascular surgery requires disciplined preparation across clinical practice, scholarship, patient safety, and health-system improvement.</p>
        </motion.aside>
      </motion.div>
    </section>

    <section className="section lpdp-pillars-section" aria-labelledby="pillars-title"><div className="container-shell">
      <motion.div className="lpdp-section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} variants={reveal}><p className="eyebrow">Preparation pillars</p><h2 id="pillars-title" className="display">Four connected areas of readiness</h2><p>Each pillar supports a credible progression toward advanced clinical education and a contribution plan grounded in Indonesia's healthcare needs.</p></motion.div>
      <motion.div className="lpdp-pillars" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .12 }}>{preparationPillars.map((pillar, index) => { const Icon = icons[index]; return <motion.article variants={reveal} className="lpdp-pillar" key={pillar.title}><div className="lpdp-icon"><Icon aria-hidden="true" /></div><span>0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.description}</p></motion.article>; })}</motion.div>
    </div></section>

    <section className="section lpdp-roadmap-section" id="preparation-roadmap" aria-labelledby="roadmap-title"><div className="container-shell lpdp-roadmap-grid">
      <motion.div className="lpdp-section-heading lpdp-roadmap-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }} variants={reveal}><p className="eyebrow">Preparation roadmap</p><h2 id="roadmap-title" className="display">Progress, documented with clarity</h2><p>Statuses describe current preparation activities only. They do not represent an LPDP assessment, selection result, or scholarship recipient status.</p><div className="lpdp-legend"><span><i className="status-current"/>In progress</span><span><i/>Ongoing</span><span><i/>Planned</span></div></motion.div>
      <motion.ol className="lpdp-timeline" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .1 }}>{preparationRoadmap.map((item, index) => <motion.li variants={reveal} key={item.title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-content"><div><h3>{item.title}</h3><span className={`lpdp-status status-${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</span></div><p>{item.description}</p></div></motion.li>)}</motion.ol>
    </div></section>

    <section className="section lpdp-direction-section" aria-labelledby="direction-title"><div className="container-shell">
      <motion.div className="lpdp-section-heading" initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} variants={reveal}><p className="eyebrow">Academic focus</p><h2 id="direction-title" className="display">Study Direction</h2><p>The intended direction connects specialist clinical development with research, perioperative care, and safer health systems. Specific institutions and programs will be documented only when verified.</p></motion.div>
      <motion.div className="study-directions" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }}>{studyDirections.map((direction, index) => { const Icon = directionIcons[index]; return <motion.div variants={reveal} key={direction}><Icon aria-hidden="true"/><span>{direction}</span></motion.div>; })}</motion.div>
      <motion.blockquote className="lpdp-quote" initial="hidden" whileInView="show" viewport={{ once: true, amount: .4 }} variants={reveal}><span aria-hidden="true">“</span><p>My goal is not only to pursue advanced education, but to transform knowledge, clinical experience, and research into meaningful contributions for Indonesian healthcare.</p><footer>— Contribution vision</footer></motion.blockquote>
    </div></section>

    <section className="section lpdp-tools-section"><div className="container-shell"><div className="lpdp-section-heading"><p className="eyebrow">Working preparation tools</p><h2 className="display">From direction to documented action</h2><p>Personal workspaces support ongoing reflection and organization. Their contents are preparation aids, not claims of selection or completion.</p></div><div className="lpdp-tool"><h3>Contribution pathway</h3><ContributionPathway/></div><div className="lpdp-tool"><h3>Personal preparation tracker</h3><LPDPTracker/></div><div className="lpdp-tool"><h3>Essay workspace</h3><EssayWorkspace/></div><div className="lpdp-tool"><h3>Interview practice</h3><InterviewSimulator/></div></div></section>
  </>;
}
