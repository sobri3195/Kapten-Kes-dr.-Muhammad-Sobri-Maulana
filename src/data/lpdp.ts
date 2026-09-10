export const readiness=['Academic Evidence','Research Portfolio','BTKV Career Direction','Leadership','Social Contribution','English Preparation','Study Plan','Contribution Plan','Essay Readiness','Interview Readiness'].map((name,i)=>({name,status:['Building','In Progress','Ready for Review'][i%3]}));
export const trackerCategories=['BTKV Knowledge','Research','Academic Writing','Journal Club','English','Leadership','Contribution','Essay','Interview','Study Plan'];
export const essayTabs=['Commitment to Return to Indonesia','Why BTKV','Why LPDP','Contribution Plan','Career Vision','Leadership','Failure & Growth','Personal Strengths','Long-Term Impact'];
export const questions=['Why BTKV?','Why should LPDP invest in you?','Why is BTKV important for Indonesia?','Why not another specialty?','What is your post-study contribution?','How will you maintain your commitment to return?','How will you measure your contribution?','What will you do if you are not selected?','What problem in cardiothoracic care do you want to address?','What is the role of research in your career?'];
export const pathway=['Training','Specialist Competence','Clinical Service','Research','Teaching','System Improvement','Knowledge Transfer'];

export const preparationPillars = [
  { title: 'Academic Readiness', description: 'Strengthening core scientific knowledge, academic writing, critical appraisal, and the structure of a responsible study plan.' },
  { title: 'Clinical Development', description: 'Developing clinical competence and relevant experience across cardiothoracic, cardiac, vascular, perioperative, and critical care practice.' },
  { title: 'Research Portfolio', description: 'Building a transparent body of publications, research, systematic reviews, and relevant academic projects.' },
  { title: 'Public Contribution', description: 'Shaping a realistic contribution plan for healthcare quality, medical education, patient safety, and knowledge development in Indonesia.' },
] as const;

export const preparationRoadmap = [
  { title: 'Current Foundation', status: 'Ongoing', description: 'Strengthening academic, clinical, and professional foundations through consistent learning and documented practice.' },
  { title: 'Research and Portfolio', status: 'In progress', description: 'Preparing scientific manuscripts, research projects, evidence synthesis, and an organized academic portfolio.' },
  { title: 'Study Plan Development', status: 'In progress', description: 'Defining educational objectives, study priorities, and the relevance of advanced training to the intended clinical pathway.' },
  { title: 'LPDP Application Readiness', status: 'Planned', description: 'Preparing verifiable documents, essays, interview practice, and administrative requirements without implying application or selection status.' },
  { title: 'Future Contribution', status: 'Planned', description: 'Developing a measurable plan to apply knowledge through clinical service, research, teaching, patient safety, and system improvement.' },
] as const;

export const studyDirections = ['Cardiothoracic Surgery','Cardiac Surgery','Vascular Surgery','Perioperative and Critical Care','Clinical Research','Patient Safety and Health-System Improvement'] as const;
