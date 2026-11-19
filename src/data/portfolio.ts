export interface ExperienceRole {
  company: string;
  role: string;
  period: string;
  location: string;
  categoryLabel: string;
  summary: string;
  highlights: string[];
  relatedCaseLinks?: { label: string; href: string }[];
}

export interface SkillGroup {
  title: string;
  categoryTag: string;
  description: string;
  skills: string[];
  proofLabel: string;
  proofHref: string;
  secondaryProof?: { label: string; href: string };
}

export interface PublicRepoSample {
  name: string;
  badge: string;
  stack: string[];
  repoUrl: string;
  description: string;
  engineeringNote: string;
}

export const SITE_META = {
  name: 'Mohamed Ali Rafat',
  role: 'Software Engineer',
  location: 'Giza, Egypt',
  email: 'mohammednoureldeen9@gmail.com',
  linkedin: 'https://linkedin.com/in/MuhamedRafat',
  github: 'https://github.com/MohammedNoureldeen',
  cvUrl: '/cv/Mohamed_Ali_Rafat_CV.pdf',
  heroLead:
    'I build the systems behind video editing and export. I keep sound and picture in sync and correct transcripts without moving a word’s timing.',
};

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    company: 'Spokn',
    role: 'Software Engineer',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    categoryLabel: 'Employer Project · Production Video Platform',
    summary:
      'I build Node.js and TypeScript services for a collaborative video editor, from export pipelines to reviewer permissions.',
    highlights: [
      'Fixed FFmpeg timing issues and checked the exported video with a flash-and-beep regression test.',
      'Integrated OpenAI into glossary-based transcript correction, making context-aware decisions per occurrence while locking word timings and retaining original text when model calls fail.',
      'Built ordered story approval workflows and team administration APIs with sequential review steps, reviewer assignments, role restrictions, and Customer.io notification integrations.',
      'Implemented selective HLS re-encoding with automatic full-encode fallback and parallel AWS S3 transfers to avoid unnecessary segment reprocessing during video edits.',
      'Implemented GCP Pub/Sub export preparation and failure handling, and corrected real-time export-progress delivery across application replicas.',
      'Updated Sequelize and mysql2 integrations for MySQL migration work; improved story pagination, batched user/team lookups, and SQL diagnostics.',
      'Added React/Remotion lower-third still rendering with shared timing and reusable assets; resolved frontend WebSocket and environment-specific alert routing issues.',
      'Uses Codex, Claude Code, and Cursor for implementation and debugging—combining scoped tasks, diff review, targeted regression tests, and direct inspection of generated media outputs.',
    ],
    relatedCaseLinks: [
      { label: 'Case 01: Audio & video sync', href: '/work/audio-video-sync/' },
      { label: 'Case 02: Timing-safe AI transcripts', href: '/work/transcript-timing-correction/' },
      { label: 'Case 03: Ordered story approvals', href: '/work/ordered-story-approvals/' },
    ],
  },
  {
    company: 'Sanam (Fintech)',
    role: 'Data Scientist',
    period: 'Jan 2025 – Apr 2025',
    location: 'Remote',
    categoryLabel: 'Employer Project · Financial ML',
    summary:
      'Developed classification workflows for financial transaction data, establishing habits in data hygiene, reproducible evaluation, and edge-case inspection.',
    highlights: [
      'Built machine learning models for financial transaction categorization across noisy merchant and description inputs.',
      'Owned preprocessing pipelines, domain feature engineering, and iterative model optimization.',
    ],
  },
  {
    company: 'WorldQuant University / SHAI for AI',
    role: 'Data Science Trainee / Analyst',
    period: 'Feb 2023 – Jan 2024',
    location: 'Program / Remote',
    categoryLabel: 'Applied Data Training',
    summary:
      'Built core analytical fluency across structured SQL querying, Python data preparation, predictive modeling, and visual communication.',
    highlights: [
      'Completed 8+ end-to-end Python and SQL data projects spanning data cleaning, predictive modeling, and explanatory visualization.',
    ],
  },
];

export const SKILLS_IN_PRACTICE: SkillGroup[] = [
  {
    title: 'Media Processing & Rendering',
    categoryTag: 'VIDEO & STREAMING',
    description:
      'Keeping edited audio and picture aligned, avoiding redundant segment transcodes, and verifying rendered outputs objectively.',
    skills: ['FFmpeg', 'HLS', 'React / Remotion', 'AWS S3 (Parallel Transfers)', 'Real-Media Regression Fixtures'],
    proofLabel: 'FFmpeg & HLS · See the sync test',
    proofHref: '/work/audio-video-sync/',
  },
  {
    title: 'Backend Workflows & Cloud Infrastructure',
    categoryTag: 'APIS & DISTRIBUTED STATE',
    description:
      'Translating product rules into sequential state transitions, role-checked REST APIs, batched SQL queries, and cross-replica event delivery.',
    skills: [
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Express',
      'MySQL',
      'Sequelize',
      'Redis',
      'GCP Pub/Sub & Cloud Logging',
      'Docker',
      'REST APIs',
      'Git',
    ],
    proofLabel: 'Node.js & APIs · See ordered approvals',
    proofHref: '/work/ordered-story-approvals/',
  },
  {
    title: 'Applied AI, Data & Verification Workflow',
    categoryTag: 'LLM RELIABILITY & ML',
    description:
      'Designing AI integrations that respect deterministic invariants (like word timestamps) and degrade safely when external model calls fail.',
    skills: [
      'Python',
      'SQL',
      'OpenAI API',
      'Feature Engineering',
      'Codex / Claude Code / Cursor (Diff-Reviewed + Tested)',
    ],
    proofLabel: 'OpenAI API · See timing-safe transcript correction',
    proofHref: '/work/transcript-timing-correction/',
    secondaryProof: {
      label: 'Public repo · Engineering Coach',
      href: 'https://github.com/MohammedNoureldeen/engineering-coach',
    },
  },
];

export const PUBLIC_CODE_SAMPLES: PublicRepoSample[] = [
  {
    name: 'Engineering Coach',
    badge: 'Public Code Sample · Developer Tooling (MIT)',
    stack: ['Python', 'Markdown Skill', 'Codex & Claude Code', 'English & Arabic'],
    repoUrl: 'https://github.com/MohammedNoureldeen/engineering-coach',
    description:
      'Open-source teaching skill with six modes (changes, decisions, terms, flow, quiz, practice) that turns real diffs and features into structured engineering lessons—complete with English and Arabic guides.',
    engineeringNote:
      'Includes synthetic, public-safe learning cases covering N+1 database batching, expiry boundary bugs, and tracing audio frames through a noise-gate filter.',
  },
  {
    name: 'Titanic ML Analysis',
    badge: 'Public Code Sample · Data Science Foundation',
    stack: ['Python', 'Jupyter Notebook', 'pandas', 'scikit-learn'],
    repoUrl: 'https://github.com/MohammedNoureldeen/Titanic-ML-Analysis/blob/main/README.md',
    description:
      'Public exploratory analysis and classification workflow documenting missing-value strategy, feature engineering, logistic regression, and random forest comparison.',
    engineeringNote:
      'Demonstrates the structured data-science foundation that preceded production ML work at Sanam and backend systems engineering at Spokn.',
  },
];

export const EDUCATION_AND_RECOGNITION = [
  {
    title: 'BSc in Computer Science',
    org: 'Misr University for Science and Technology',
    period: 'Sep 2019 – Jun 2024',
    type: 'University Degree',
    detail: 'Core computer science curriculum covering algorithms, data structures, databases, and software engineering.',
  },
  {
    title: 'Data Science & Engineering Program',
    org: 'ALX',
    period: 'May 2023 – Aug 2024',
    type: 'Training Program',
    detail: 'Intensive applied data science and data engineering training program.',
  },
  {
    title: 'Second Place — Student Innovation and Technology Hackathon',
    org: 'Healthcare-Focused Project',
    period: 'Award & Recognition',
    type: 'Hackathon Placement',
    detail: 'Earned second-place recognition for an applied healthcare technology submission.',
  },
];
