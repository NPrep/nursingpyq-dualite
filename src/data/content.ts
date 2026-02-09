export const EXAMS = [
  { id: 'aiims-norcet', name: 'AIIMS NORCET', label: 'AIIMS Nursing Officer Recruitment Common Eligibility Test', category: 'Central' },
  { id: 'rrb-staff-nurse', name: 'RRB Staff Nurse', label: 'Railway Recruitment Board Staff Nurse', category: 'Central' },
  { id: 'dsssb-nursing-officer', name: 'DSSSB Nursing Officer', label: 'Delhi Subordinate Services Selection Board', category: 'State' },
  { id: 'esic-staff-nurse', name: 'ESIC Staff Nurse', label: 'Employees State Insurance Corporation', category: 'Central' },
  { id: 'nhm-cho', name: 'NHM / CHO', label: 'National Health Mission / Community Health Officer', category: 'State' },
  { id: 'btsc-staff-nurse', name: 'BTSC Staff Nurse', label: 'Bihar Technical Service Commission', category: 'State' },
  { id: 'sgpgi-nursing-officer', name: 'SGPGI Nursing Officer', label: 'Sanjay Gandhi Postgraduate Institute of Medical Sciences', category: 'State' },
  { id: 'gmch-chandigarh', name: 'GMCH Chandigarh', label: 'Government Medical College & Hospital', category: 'State' },
  { id: 'pgimer-chandigarh', name: 'PGIMER Chandigarh', label: 'Postgraduate Institute of Medical Education and Research', category: 'Central' },
  { id: 'pgims-rohtak', name: 'PGIMS Rohtak', label: 'Pandit Bhagwat Dayal Sharma Post Graduate Institute of Medical Sciences', category: 'State' },
  { id: 'jipmer-nursing-officer', name: 'JIPMER Nursing Officer', label: 'Jawaharlal Institute of Postgraduate Medical Education & Research', category: 'Central' },
  { id: 'state-staff-nurse', name: 'State Staff Nurse', label: 'State Public Service Commissions', category: 'State' },
];

export const LATEST_UPDATES = [
  { title: "RRB Staff Nurse 2024 Shift-I Paper", examId: 'rrb-staff-nurse', date: "New" },
  { title: "AIIMS NORCET 7 Prelims (Sep 2024)", examId: 'aiims-norcet', date: "New" },
  { title: "BTSC Staff Nurse Paper 2025", examId: 'btsc-staff-nurse', date: "New" },
  { title: "UPSC ESIC Nursing Officer (July 2024)", examId: 'esic-staff-nurse', date: "Recent" },
  { title: "Rajasthan CHO 2024 Official Paper", examId: 'nhm-cho', date: "Recent" },
];

export const TABLE_KEY_DETAILS = [
  { exam: 'BSc Nursing (UG)', purpose: 'Entrance for UG Nursing Course', focus: 'Physics, Chemistry, Biology' },
  { exam: 'ANM', purpose: 'Auxiliary Nursing Midwifery Admission', focus: 'Basic Health, Hygiene, Community' },
  { exam: 'GNM', purpose: 'General Nursing Midwifery Admission', focus: 'Bio-Sciences, Behavioral Sciences' },
  { exam: 'RRB Staff Nurse', purpose: 'Recruitment in Indian Railways', focus: 'Professional Nursing, Gen Awareness' },
  { exam: 'AIIMS NORCET', purpose: 'Nursing Officer in AIIMS', focus: 'Adv. Nursing, Clinical Skills' },
  { exam: 'NHM-CHO', purpose: 'Community Health Officer Post', focus: 'Community Health, Primary Care' },
];

export const TABLE_ELIGIBILITY = [
  { exam: 'AIIMS NORCET', age: '18-30 Years', qual: 'B.Sc Nursing / GNM + Exp', reg: 'RN & RM with State Council' },
  { exam: 'RRB Staff Nurse', age: '20-40 Years', qual: 'GNM / B.Sc Nursing', reg: 'Valid Registration Certificate' },
  { exam: 'DSSSB Nurse', age: '18-32 Years', qual: 'Matric + A Grade Nursing', reg: 'Registered with Nursing Council' },
  { exam: 'ESIC Nurse', age: 'Max 37 Years', qual: 'Diploma GNM / Degree', reg: 'Registered Nurse' },
  { exam: 'MNS (Military)', age: '21-35 Years', qual: 'M.Sc / PB B.Sc / B.Sc', reg: 'Permanent Commission' },
];

export const TABLE_PATTERN = [
  { exam: 'AIIMS NORCET', mode: 'Online (CBT)', duration: '3 Hours', syllabus: '200 MCQs (180 Nursing + 20 Gen)', marking: '1/3 Negative Marking' },
  { exam: 'RRB Staff Nurse', mode: 'Online (CBT)', duration: '90 Mins', syllabus: '100 Qs (70 Prof + 30 Gen)', marking: '1/3 Negative Marking' },
  { exam: 'DSSSB', mode: 'Online (CBT)', duration: '2 Hours', syllabus: '200 Qs (Nursing + Gen Section)', marking: '0.25 Negative Marking' },
  { exam: 'ESIC', mode: 'Written', duration: '2 Hours', syllabus: '125 Qs (100 Nursing + 25 Gen)', marking: '0.25 Negative Marking' },
];

export const UPCOMING_EXAMS_TEXT = {
  rrb: "The RRB Staff Nurse Exam 2026 is one of the most anticipated recruitment drives by the Indian Railways. It aims to fill vacancies in railway hospitals across various zones. Previous Year Questions (PYQs) for RRB are crucial as they often repeat patterns related to General Science and Arithmetic, alongside core nursing subjects.",
  aiims: "AIIMS NORCET 2026 continues to be the gold standard for nursing officer recruitment in India. Conducted twice a year, this exam tests clinical priority and practical application. Solving NORCET PYQs helps aspirants understand the high difficulty level and the emphasis on image-based questions.",
  dsssb: "The DSSSB Staff Nurse Exam 2026 focuses on recruiting for Delhi government hospitals. The paper is known for its balanced mix of nursing and general aptitude sections. Reviewing past papers helps candidates manage time effectively between the technical and non-technical sections.",
  jipmer: "JIPMER Nursing Officer Exam 2026 is a prestigious central government examination. The pattern typically leans heavily towards clinical scenarios and medical-surgical nursing. PYQs are the best resource to gauge the depth of medical knowledge required.",
  esic: "ESIC Staff Nurse Exam 2026 offers excellent central government benefits. The exam pattern is straightforward but competitive. Practicing previous year papers ensures accuracy, which is vital given the negative marking scheme.",
  osssc: "The OSSSC Nursing Officer Exam 2026 is a major state-level recruitment for Odisha. It generally follows a syllabus strictly adhered to the GNM/BSc curriculum. PYQs serve as a direct roadmap for the types of theoretical questions asked.",
  nhm: "NHM State CHO Exam 2026 recruits Community Health Officers under the Ayushman Bharat initiative. The focus is heavily on Community Health Nursing, Immunization, and Primary Healthcare. Past papers are essential to master the specific public health schemes asked.",
  uppsc: "UPPSC / UPSSSC Staff Nurse Exam 2026 involves both preliminary and main examinations in some cycles. The syllabus includes Hindi and General Knowledge alongside Nursing. PYQs help aspirants balance their preparation between core subjects and state-specific general knowledge."
};

// Comprehensive Exam Specific Links - Updated with latest user input
export const EXAM_SPECIFIC_LINKS: Record<string, { title: string; url: string }[]> = {
  'aiims-norcet': [
    { title: "NORCET - 3 (2022) Shift - 1", url: "https://links.nprep.in/f2X7pvwHMZb" },
    { title: "NORCET 3 - 2022 ; Shift-II", url: "https://links.nprep.in/K7VH496yQZb" },
    { title: "NORCET 7 prelims - (Sep) 2024", url: "https://links.nprep.in/aXOX5oZXPZb" },
    { title: "NORCET 3 - June 2023", url: "https://links.nprep.in/weaumiphIZb" },
    { title: "NORCET 20 Nov, Shift 2", url: "https://links.nprep.in/xkOMXfpAhZb" },
  ],
  'rrb-staff-nurse': [
    { title: "RRB Shift - I (20 JULY)", url: "https://links.nprep.in/Wm36lpRx0Zb" },
    { title: "RRB Shift - I (21 July 2019)", url: "https://links.nprep.in/9PwNw5DuPZb" },
    { title: "RRB Nursing Superintendent 29 APRIL Shift 3", url: "https://links.nprep.in/8LR9YaHPEZb" },
    { title: "RRB Nursing Officer", url: "https://links.nprep.in/iYJK63NtHZb" },
    { title: "RRB Nursing Officer-2021", url: "https://links.nprep.in/QNGYhi8GfZb" },
  ],
  'nhm-cho': [
    { title: "MP CHO", url: "https://links.nprep.in/OT7EWR5r3Zb" },
    { title: "MP CHO Paper - 2022", url: "https://links.nprep.in/EKC5ZE7r3Zb" },
    { title: "Rajasthan CHO - 2024", url: "https://links.nprep.in/rocuf2uwYXb" },
    { title: "Rajasthan CHO-2023", url: "https://links.nprep.in/J4rAoKv3ZZb" },
    { title: "UK CHO - 2021", url: "https://links.nprep.in/3MAAJScs3Zb" },
    { title: "UP CHO", url: "https://links.nprep.in/7eNfOtC51Zb" },
    { title: "NHM Haryana CHO Official Paper (Held On: 29 Jan 2023)", url: "https://links.nprep.in/SBr7raqs3Zb" },
  ],
  'esic-staff-nurse': [
    { title: "ESIC 19 Mar, Shift 2", url: "https://links.nprep.in/wjFgvVwa7Zb" },
    { title: "ESIC Shift 1 2016", url: "https://links.nprep.in/8IQ1zxGs8Zb" },
    { title: "ESIC Paper - 2019 Shift - I", url: "https://links.nprep.in/wpMKcyDzQZb" },
    { title: "ESIC 2019 Shift 2", url: "https://links.nprep.in/Bk1Ehoy14Zb" },
    { title: "UPSC ESIC NO 07 July 2024", url: "https://links.nprep.in/PKB7mMivuZb" },
  ],
  'dsssb-nursing-officer': [
    { title: "DSSSB Public Health Nurse Solved Paper 2015", url: "https://links.nprep.in/Q7Cp7d4n8Zb" },
    { title: "DSSSB Shift - I 28 August 2019", url: "https://links.nprep.in/PYdwRLVs8Zb" },
    { title: "DSSSB Shift - II 28 AUG 2019", url: "https://links.nprep.in/FZqrzFWs8Zb" },
    { title: "DSSSB Shift - II 29 Aug. 2019", url: "https://links.nprep.in/Na51lFXs8Zb" },
    { title: "DSSSB 29 Aug. S-I-2019", url: "https://links.nprep.in/e6PFDXYs8Zb" },
  ],
  'btsc-staff-nurse': [
    { title: "BTSC Staff Nurse", url: "https://links.nprep.in/fCgXW8DSWZb" },
    { title: "BTSC Staff Nurse", url: "https://links.nprep.in/oCMagiQs8Zb" },
    { title: "BTSC Staff Nurse", url: "https://links.nprep.in/M23vprRs8Zb" },
    { title: "BTSC Staff Nurse Paper- 2025", url: "https://links.nprep.in/ZpyBui10qZb" },
  ],
  'sgpgi-nursing-officer': [
    { title: "SGPGI Lucknow, Nursing Officer - 2022", url: "https://links.nprep.in/Vy4XCouzQZb" },
  ],
  'gmch-chandigarh': [
    { title: "Government Medical College & Hospital (GMCH), Chandigarh", url: "https://links.nprep.in/Jol2zqwzQZb" },
  ],
  'pgims-rohtak': [
    { title: "PGIMS Rohtak - 2017", url: "https://links.nprep.in/EWf3btIKZZb" },
  ],
  'pgimer-chandigarh': [
    { title: "PGIMER Chandigarh, Staff Nurse - 2015", url: "https://links.nprep.in/w3MkLFIJZZb" },
  ],
};

export const SUBJECT_TESTS = [
  { title: "MSN", url: "https://links.nprep.in/hm3aQhddIZb" },
  { title: "OBG", url: "https://links.nprep.in/cpRfJAdQPYb" },
  { title: "CHN", url: "https://links.nprep.in/vGYx4MAtWZb" },
  { title: "Pedia", url: "https://links.nprep.in/NbTlCc02ZZb" },
  { title: "Psychiatry", url: "https://links.nprep.in/mEhGXn27ZZb" },
  { title: "Nutrition", url: "https://links.nprep.in/xqzNDqLI1Zb" },
  { title: "Research", url: "https://links.nprep.in/IuYQSDcC6Zb" },
];

export const MOCK_TESTS = [
  { title: "NORCET", url: "https://links.nprep.in/XMYlOC6F5Zb" },
  { title: "AIIMS Nursing Officer Exams", url: "https://links.nprep.in/u34K12Mq6Zb" },
  { title: "KGMU Nursing Officer", url: "https://links.nprep.in/NOfgXlxg6Zb" },
  { title: "SGPGI Nursing Officer", url: "https://links.nprep.in/C0hk9CHg6Zb" },
  { title: "PGIMER", url: "https://links.nprep.in/X6m4Q62F6Zb" },
  { title: "RRB Nursing Officer", url: "https://links.nprep.in/pC4gYL3eSZb" },
  { title: "AIIMS CRE", url: "https://links.nprep.in/VpwyAGbG6Zb" },
];

export const COURSES_LIST = [
  {
    title: "Test Series",
    link: "https://qtestseries.nprep.in",
    features: [
      "30,000+ Questions - QBank(Topic Wise)",
      "Each Question with Explaination",
      "Subject Wise Tests",
      "Daily Test Series",
      "Previous Year Question Papers",
      "IBQs, Clinical Scenario Questions"
    ]
  },
  {
    title: "Rapid Revision 2.0",
    link: "https://rapid.nprep.in",
    features: [
      "NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered",
      "Complete Nursing Syllabus in 100 Hours",
      "Previous Year Papers - with Explainations",
      "Daily Test Series",
      "30,000+ Questions - QBank ( Topic Wise)",
      "Subject Wise Tests"
    ]
  },
  {
    title: "GOLD Batch",
    link: "https://gold.nprep.in",
    features: [
      "NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered",
      "900 Hours - Basic to Advanced Theory (with Clinicals)",
      "100 Hrs - Rapid Revision 2.0",
      "30,000 Questions - QBank (Topic Wise)",
      "Daily Test Series",
      "Previous Year Papers",
      "Subject Wise Papers"
    ]
  }
];
