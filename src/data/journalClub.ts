export type JournalEntry={articleTitle:string;journal:string;year:number;category:'Cardiac'|'Thoracic'|'Vascular'|'ECMO'|'Critical Care'|'Perioperative'|'Research Methods';clinicalQuestion:string;pico:string;studyDesign:string;primaryOutcome:string;keyResult:string;strengths:string;limitations:string;clinicalRelevance:string;whatILearned:string};
/** Add only personally verified article appraisals. Never add placeholder citations. */
export const journalClubEntries:JournalEntry[]=[];
export const journalFilters=['Cardiac','Thoracic','Vascular','ECMO','Critical Care','Perioperative','Research Methods'] as const;
