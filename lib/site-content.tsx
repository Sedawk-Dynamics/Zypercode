import type { LucideIcon } from "lucide-react"
import {
  FileText, Brain, ShieldCheck, BarChart3,
  Building2, Stethoscope, HeartPulse, Briefcase, Code2, TrendingUp, Users, HeadsetIcon, Workflow,
} from "lucide-react"

export type Category = "services" | "who-we-serve"

export interface CardContent {
  slug: string
  category: Category
  anchorId: string
  Icon: LucideIcon
  title: string
  tag: string
  tagline: string
  shortDesc: string
  image?: string
  intro: string
  overview: string[]
  highlights: { title: string; desc: string }[]
  benefits: string[]
  stats: { value: string; label: string }[]
  process?: { step: string; title: string; desc: string }[]
  faqs?: { q: string; a: string }[]
}

// ─────────────────────────────────────────────────────────────
// SERVICES
// ─────────────────────────────────────────────────────────────
export const services: CardContent[] = [
  {
    slug: "medical-coding",
    category: "services",
    anchorId: "service-coding",
    Icon: FileText,
    title: "Medical Coding (ICD-10 / CPT / HCC)",
    tag: "Core Service",
    tagline: "Certified accuracy across every claim",
    shortDesc:
      "Precise inpatient and outpatient coding across all specialties using the latest ICD-10-CM/PCS, CPT, and HCPCS code sets. Our AHIMA/AAPC-certified coders ensure maximum reimbursement with zero compliance risk.",
    image: "/images/medical-coding-card.jpg",
    intro:
      "Specialty-accurate medical coding that protects your revenue and keeps you audit-ready — delivered by AHIMA and AAPC certified professionals.",
    overview: [
      "Our coding teams translate complex clinical documentation into precise, compliant code sets across every care setting. From high-volume emergency departments to subspecialty surgical practices, we apply the latest ICD-10-CM/PCS, CPT, and HCPCS guidelines so every claim reflects the full clinical picture.",
      "Each chart passes through a dual-layer quality process — a certified primary coder followed by a senior auditor — giving you consistently high first-pass acceptance rates, fewer denials, and complete defensibility if a payer ever asks questions.",
    ],
    highlights: [
      { title: "All specialties covered", desc: "Cardiology, orthopedics, oncology, neurology, ED, surgery, anesthesia, radiology, and 15+ more domains." },
      { title: "Inpatient & outpatient", desc: "Facility (IP/OP) and professional-fee coding under one accountable, SLA-backed team." },
      { title: "Dual-layer QA", desc: "Primary coder plus senior auditor review on every chart for 99%+ accuracy." },
      { title: "Always current", desc: "Annual code updates, payer policy changes, and CMS guidance tracked and applied continuously." },
    ],
    benefits: [
      "Maximized, compliant reimbursement on every encounter",
      "Higher first-pass clean-claim rate, fewer denials",
      "Full audit trail and documentation defensibility",
      "Rapid scaling for backlogs and seasonal volume",
      "Dedicated coding lead and transparent reporting",
      "HIPAA-compliant, secure delivery workflows",
    ],
    stats: [
      { value: "99%+", label: "Coding accuracy" },
      { value: "24–48h", label: "Turnaround time" },
      { value: "15+", label: "Specialties covered" },
    ],
    process: [
      { step: "01", title: "Document intake", desc: "Charts received securely through your EHR or our HIPAA-compliant portal." },
      { step: "02", title: "Certified coding", desc: "Specialty-matched certified coders assign and validate codes." },
      { step: "03", title: "Quality audit", desc: "Senior auditor reviews for accuracy, completeness, and compliance." },
      { step: "04", title: "Delivery & feedback", desc: "Coded charts returned within SLA with monthly performance reporting." },
    ],
    faqs: [
      { q: "Which certifications do your coders hold?", a: "Our coders hold AHIMA (RHIA, CCS) and AAPC (CPC, CRC) credentials, matched to the specialty they code." },
      { q: "How quickly can you onboard?", a: "Most engagements are live within 48 hours, including secure access setup and workflow alignment." },
    ],
  },
  {
    slug: "clinical-documentation-improvement",
    category: "services",
    anchorId: "service-cdi",
    Icon: Brain,
    title: "Clinical Documentation Improvement (CDI)",
    tag: "Documentation",
    tagline: "Clinical clarity, captured at the source",
    shortDesc:
      "Bridge the gap between clinical care and accurate documentation. Our CDI specialists work alongside your physicians to capture the complete severity of illness and complexity of care.",
    image: "/images/cdi-documentation-card.jpg",
    intro:
      "Documentation that tells the complete clinical story — improving severity capture, quality scores, and reimbursement integrity.",
    overview: [
      "Strong clinical documentation is the foundation of accurate coding, fair reimbursement, and quality reporting. Our CDI specialists partner with your physicians to close documentation gaps in real time, ensuring the record reflects the true severity of illness and complexity of care delivered.",
      "Through concurrent and retrospective review, compliant physician queries, and education that sticks, we help your teams document right the first time — lifting your case mix index, sharpening quality metrics, and reducing downstream denials.",
    ],
    highlights: [
      { title: "Concurrent review", desc: "Real-time chart review while the patient is still in-house to capture clarifications early." },
      { title: "Compliant queries", desc: "Non-leading, AHIMA/ACDIS-compliant physician queries that strengthen the record." },
      { title: "Severity & risk capture", desc: "Accurate SOI/ROM and HCC capture that reflects true patient acuity." },
      { title: "Physician education", desc: "Targeted, specialty-specific education that improves documentation habits." },
    ],
    benefits: [
      "Higher case mix index and severity capture",
      "Improved quality and mortality-index scores",
      "Fewer clinical-validation and DRG denials",
      "Stronger alignment between coders and clinicians",
      "Defensible, complete medical records",
      "Measurable ROI within the first quarter",
    ],
    stats: [
      { value: "↑ CMI", label: "Case mix uplift" },
      { value: "99%+", label: "Query compliance" },
      { value: "100%", label: "HIPAA compliant" },
    ],
  },
  {
    slug: "risk-adjustment",
    category: "services",
    anchorId: "service-hcc",
    Icon: ShieldCheck,
    title: "Risk Adjustment Coding (HCC)",
    tag: "Risk Adjustment",
    tagline: "Accurate risk scores. Right payments.",
    shortDesc:
      "Comprehensive Hierarchical Condition Category (HCC) coding for Medicare Advantage and value-based care programs. Capture accurate risk scores and ensure appropriate capitation payments.",
    image: "/images/risk-adjustment-card.jpg",
    intro:
      "Complete, compliant HCC capture for Medicare Advantage and value-based care — so your risk scores and capitation payments are exactly right.",
    overview: [
      "In value-based and Medicare Advantage programs, accurate risk adjustment is the difference between sustainable margins and left-on-the-table revenue. Our certified risk-adjustment coders perform thorough chart reviews to capture every supported HCC while rigorously avoiding unsupported codes.",
      "We run prospective, concurrent, and retrospective reviews, supported by RADV-style audit readiness, so your RAF scores accurately reflect member acuity and your program stands up to payer and CMS scrutiny.",
    ],
    highlights: [
      { title: "CRC-certified coders", desc: "Risk-adjustment specialists trained on CMS-HCC and HHS-HCC models." },
      { title: "Full review spectrum", desc: "Prospective, concurrent, and retrospective chart reviews tailored to your program." },
      { title: "RADV audit readiness", desc: "Documentation and coding that withstand CMS validation audits." },
      { title: "Suspect & gap analytics", desc: "Identify undocumented conditions and recapture opportunities." },
    ],
    benefits: [
      "Accurate RAF scores and capitation payments",
      "Reduced compliance and over-coding risk",
      "Recaptured chronic conditions year over year",
      "Audit-ready documentation and trails",
      "Clear analytics on gaps and suspects",
      "Scalable capacity for AEP and sweeps",
    ],
    stats: [
      { value: "100%", label: "Audit-ready charts" },
      { value: "99%+", label: "Coding accuracy" },
      { value: "RADV", label: "Validation ready" },
    ],
  },
  {
    slug: "coding-audits",
    category: "services",
    anchorId: "service-audits",
    Icon: BarChart3,
    title: "Coding Audits & Compliance",
    tag: "Compliance",
    tagline: "Audit-grade integrity, every chart",
    shortDesc:
      "Prospective and retrospective coding audits to identify errors, recover lost revenue, and mitigate compliance risk. Detailed reporting with actionable recommendations.",
    image: "/images/compliance-audit.jpg",
    intro:
      "Independent coding audits that surface revenue leakage and compliance risk — with clear, prioritized recommendations you can act on.",
    overview: [
      "Even strong coding operations drift over time. Our audit teams provide an objective, evidence-based assessment of coding accuracy, documentation support, and compliance posture — pinpointing both under-coding that costs you revenue and over-coding that creates exposure.",
      "Every engagement ends with a clear scorecard, root-cause findings, and a prioritized remediation plan, plus optional coder education so improvements stick rather than recur.",
    ],
    highlights: [
      { title: "Prospective & retrospective", desc: "Pre-bill and post-bill audits scoped to your risk areas and specialties." },
      { title: "Revenue recovery", desc: "Identify missed charges and under-coded encounters to reclaim lost revenue." },
      { title: "Compliance assurance", desc: "Reduce exposure to payer takebacks, OIG focus areas, and penalties." },
      { title: "Actionable reporting", desc: "Scorecards, root-cause analysis, and a prioritized remediation roadmap." },
    ],
    benefits: [
      "Recovered revenue from under-coded claims",
      "Reduced audit, takeback, and penalty exposure",
      "Objective, benchmarked accuracy scores",
      "Root-cause insight, not just error lists",
      "Targeted coder education and follow-up",
      "Confidence ahead of payer or CMS audits",
    ],
    stats: [
      { value: "360°", label: "Audit coverage" },
      { value: "100%", label: "Findings documented" },
      { value: "$$$", label: "Revenue recovered" },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// WHO WE SERVE
// ─────────────────────────────────────────────────────────────
export const segments: CardContent[] = [
  {
    slug: "hospitals",
    category: "who-we-serve",
    anchorId: "serve-hospitals",
    Icon: Building2,
    title: "Hospitals & Health Systems",
    tag: "Healthcare",
    tagline: "High-volume coding, seamless EHR flows",
    shortDesc:
      "We support large health systems with high-volume inpatient and outpatient coding, CDI programs, and seamless EHR-integrated workflows that keep your revenue cycle moving.",
    intro:
      "A dependable coding and CDI partner for health systems that cannot afford backlogs, denials, or compliance surprises.",
    overview: [
      "Large hospitals and IDNs run on volume and accuracy at the same time. We embed certified coders and CDI specialists into your EHR-driven workflows to keep inpatient and outpatient coding moving without sacrificing quality.",
      "Whether you need overflow capacity, full-function outsourcing, or specialty depth, we scale to your census and integrate with Epic, Cerner, Meditech, and other systems so your revenue cycle never stalls.",
    ],
    highlights: [
      { title: "IP & OP at scale", desc: "Facility and professional coding capacity that flexes with your census." },
      { title: "EHR-integrated", desc: "We work inside Epic, Cerner, Meditech, and your existing tooling." },
      { title: "CDI programs", desc: "Concurrent documentation improvement to lift CMI and quality scores." },
      { title: "Denials support", desc: "Coding-driven denial prevention and appeal assistance." },
    ],
    benefits: [
      "No more coding backlogs or DNFB spikes",
      "Higher clean-claim and first-pass rates",
      "Scalable overflow or full outsourcing",
      "Specialty-matched certified coders",
      "Transparent SLAs and monthly reporting",
      "HIPAA-compliant, secure operations",
    ],
    stats: [
      { value: "24–48h", label: "Turnaround time" },
      { value: "99%+", label: "Coding accuracy" },
      { value: "15+", label: "Specialties" },
    ],
  },
  {
    slug: "physician-groups",
    category: "who-we-serve",
    anchorId: "serve-physicians",
    Icon: Stethoscope,
    title: "Physician Groups & Clinics",
    tag: "Healthcare",
    tagline: "Specialty coding from primary to subspecialty",
    shortDesc:
      "Specialty-specific professional fee coding for single and multi-specialty groups — from primary care to cardiology, orthopedics, neurology, and more.",
    intro:
      "Professional-fee coding precision for practices of every size and specialty — so your providers get paid fully and on time.",
    overview: [
      "Independent practices and multi-specialty groups need coding that understands the nuance of each specialty and each payer. We match certified coders to your specialty mix and keep pace with E/M changes, modifier rules, and payer-specific edits.",
      "The result is cleaner claims, faster payment, and more time for your clinicians to focus on patients instead of paperwork.",
    ],
    highlights: [
      { title: "Specialty-matched", desc: "Coders aligned to your exact specialties, from primary care to surgery." },
      { title: "E/M expertise", desc: "Current on 2021+ E/M guidelines and ongoing CPT changes." },
      { title: "Payer-savvy", desc: "Modifier and edit knowledge tuned to your payer mix." },
      { title: "Flexible engagement", desc: "Per-encounter, hourly, or full-outsourcing models." },
    ],
    benefits: [
      "Faster, fuller professional-fee reimbursement",
      "Fewer modifier and bundling denials",
      "Coders who know your specialty",
      "Scales with seasonal and growth volume",
      "Less administrative load on clinicians",
      "Transparent, predictable pricing",
    ],
    stats: [
      { value: "99%+", label: "Coding accuracy" },
      { value: "48h", label: "Onboarding" },
      { value: "10+", label: "Specialties" },
    ],
  },
  {
    slug: "health-plans-payers",
    category: "who-we-serve",
    anchorId: "serve-payers",
    Icon: HeartPulse,
    title: "Health Plans & Payers",
    tag: "Healthcare",
    tagline: "Accurate risk capture, optimized payments",
    shortDesc:
      "Risk adjustment coding, HCC capture, and retrospective chart reviews to ensure your member risk scores are accurate and your capitation payments are optimized.",
    intro:
      "Risk-adjustment and chart-review partners who make your RAF scores accurate, your payments right, and your program audit-ready.",
    overview: [
      "Health plans operate under intense accuracy and compliance demands. Our CRC-certified teams perform high-volume retrospective and prospective chart reviews that capture every supported condition while protecting you from unsupported coding.",
      "We pair coding depth with suspect analytics and RADV audit readiness, so your member acuity is fully and defensibly represented.",
    ],
    highlights: [
      { title: "HCC capture", desc: "Complete, compliant capture across CMS-HCC and HHS-HCC models." },
      { title: "Chart reviews", desc: "Scalable retrospective and prospective review programs." },
      { title: "Suspect analytics", desc: "Identify likely undocumented conditions and close gaps." },
      { title: "RADV readiness", desc: "Documentation that withstands CMS validation audits." },
    ],
    benefits: [
      "Accurate RAF scores and capitation",
      "Reduced over-coding and compliance risk",
      "High-volume review capacity on demand",
      "Closed care and documentation gaps",
      "Audit-ready trails and reporting",
      "HIPAA-compliant data handling",
    ],
    stats: [
      { value: "RADV", label: "Audit ready" },
      { value: "99%+", label: "Review accuracy" },
      { value: "100%", label: "Compliant" },
    ],
  },
  {
    slug: "revenue-cycle-companies",
    category: "who-we-serve",
    anchorId: "serve-rcm",
    Icon: Briefcase,
    title: "Revenue Cycle Companies",
    tag: "Partnership",
    tagline: "Scale without adding headcount",
    shortDesc:
      "White-label and outsourced coding partnerships for RCM companies looking to scale capacity, reduce costs, and maintain quality without adding headcount.",
    intro:
      "A white-label coding engine for RCM companies — expand capacity and margins without the cost and risk of building your own team.",
    overview: [
      "RCM companies win by scaling quickly while protecting quality and margin. We operate as a seamless, white-label extension of your team, absorbing coding volume so you can take on more clients without hiring sprees.",
      "Your clients see your brand; you get certified coders, dual-layer QA, and SLA-backed delivery behind the scenes — with flexible commercial models that protect your economics.",
    ],
    highlights: [
      { title: "White-label delivery", desc: "We work invisibly under your brand and your client relationships." },
      { title: "Elastic capacity", desc: "Spin up or scale down coding volume to match your pipeline." },
      { title: "Margin protection", desc: "Offshore-strength pricing with onshore-grade quality control." },
      { title: "Quality guarantees", desc: "Dual-layer QA and SLAs you can promise your own clients." },
    ],
    benefits: [
      "Win more clients without hiring delays",
      "Improve and protect your margins",
      "Maintain quality under your brand",
      "Flexible per-chart or FTE models",
      "Rapid ramp for new client onboarding",
      "Reliable, SLA-backed throughput",
    ],
    stats: [
      { value: "White-label", label: "Under your brand" },
      { value: "99%+", label: "Quality SLA" },
      { value: "Flexible", label: "Commercials" },
    ],
  },
  {
    slug: "it-services-consulting",
    category: "who-we-serve",
    anchorId: "serve-it",
    Icon: Code2,
    title: "IT Services and Consulting",
    tag: "Technology",
    tagline: "Modernize. Integrate. Scale.",
    shortDesc:
      "End-to-end IT services and consulting — application development, cloud and infrastructure management, enterprise software engineering, API and systems integration, data analytics, cybersecurity, and managed support. Our consultants partner with you to design the right architecture, modernize legacy systems, and align technology investments with business outcomes.",
    intro:
      "Technology partners who help IT-driven organizations modernize systems, ship software, and align every investment with measurable business outcomes.",
    overview: [
      "From startups to established enterprises, we provide the engineering depth and strategic guidance to build, integrate, and run modern technology. Our consultants assess your stack, design the right architecture, and deliver solutions that scale.",
      "Whether it is custom application development, a cloud migration, a data platform, or hardening your security posture, we bring senior talent and proven delivery practices to the table.",
    ],
    highlights: [
      { title: "Software engineering", desc: "Custom application and product development with modern stacks." },
      { title: "Cloud & infrastructure", desc: "Migration and managed operations on AWS, Azure, and GCP." },
      { title: "Data & integration", desc: "API/systems integration, data engineering, and analytics." },
      { title: "Security & DevOps", desc: "Cybersecurity hardening and DevOps automation for reliable delivery." },
    ],
    benefits: [
      "Modernized, scalable architecture",
      "Faster, more reliable delivery",
      "Lower total cost of ownership",
      "Stronger security and compliance posture",
      "Senior engineering and consulting talent",
      "Technology aligned to business goals",
    ],
    stats: [
      { value: "Cloud", label: "AWS · Azure · GCP" },
      { value: "24/7", label: "Managed support" },
      { value: "E2E", label: "Build to run" },
    ],
    process: [
      { step: "01", title: "Assess & advise", desc: "We audit your stack, goals, and constraints to define the right approach." },
      { step: "02", title: "Architect", desc: "Scalable, secure architecture and a pragmatic delivery roadmap." },
      { step: "03", title: "Build & integrate", desc: "Engineering, integration, and migration with modern best practices." },
      { step: "04", title: "Run & optimize", desc: "Managed support, monitoring, and continuous optimization." },
    ],
  },
  {
    slug: "finance-accounting",
    category: "who-we-serve",
    anchorId: "serve-finance",
    Icon: TrendingUp,
    title: "Finance and Accounting",
    tag: "Outsourcing",
    tagline: "Books, reports, analytics — handled",
    shortDesc:
      "Finance and accounting support services including bookkeeping, financial reporting, accounts payable/receivable, and business analytics to streamline your financial operations.",
    intro:
      "Reliable finance and accounting operations — accurate books, timely reporting, and the analytics you need to make decisions.",
    overview: [
      "Back-office finance work is essential but resource-heavy. We take ownership of the day-to-day — bookkeeping, AP/AR, reconciliations, and close — so your internal team can focus on strategy instead of data entry.",
      "Layered on top is clear, on-time reporting and analytics that give leadership a trustworthy view of the numbers, every period.",
    ],
    highlights: [
      { title: "Bookkeeping & close", desc: "Accurate day-to-day books and a faster, cleaner period-end close." },
      { title: "AP / AR", desc: "Accounts payable and receivable managed end to end." },
      { title: "Financial reporting", desc: "Timely, accurate statements and management reporting." },
      { title: "Business analytics", desc: "KPIs and dashboards that turn numbers into decisions." },
    ],
    benefits: [
      "Accurate, always-current books",
      "Faster month-end close",
      "Healthier cash flow and collections",
      "Reliable reporting for leadership",
      "Lower cost than in-house staffing",
      "Scales with your business",
    ],
    stats: [
      { value: "On-time", label: "Period close" },
      { value: "AP/AR", label: "Fully managed" },
      { value: "KPI", label: "Clear analytics" },
    ],
  },
  {
    slug: "human-resources",
    category: "who-we-serve",
    anchorId: "serve-hr",
    Icon: Users,
    title: "Human Resources",
    tag: "Outsourcing",
    tagline: "People operations, fully outsourced",
    shortDesc:
      "HR support services including payroll processing, employee onboarding, benefits administration, compliance, and HR consulting to help your organization scale efficiently.",
    intro:
      "End-to-end people operations — payroll, onboarding, benefits, and compliance — so your team can grow without the overhead.",
    overview: [
      "Growing organizations need HR that just works. We handle the operational backbone — accurate payroll, smooth onboarding, benefits administration, and compliance — with the consistency your employees expect.",
      "Beyond operations, our HR consultants help you put the right policies, processes, and structures in place to scale your workforce confidently.",
    ],
    highlights: [
      { title: "Payroll processing", desc: "Accurate, on-time payroll with statutory compliance handled." },
      { title: "Onboarding", desc: "Smooth, consistent onboarding that ramps new hires quickly." },
      { title: "Benefits admin", desc: "Day-to-day benefits administration and employee support." },
      { title: "HR consulting", desc: "Policies, processes, and structure to scale your workforce." },
    ],
    benefits: [
      "Accurate, on-time payroll every cycle",
      "Compliant, low-risk HR operations",
      "Faster, smoother employee onboarding",
      "Reduced administrative burden",
      "Expert guidance as you scale",
      "Better employee experience",
    ],
    stats: [
      { value: "On-time", label: "Every payroll" },
      { value: "100%", label: "Compliance focus" },
      { value: "E2E", label: "People ops" },
    ],
  },
  {
    slug: "customer-experience",
    category: "who-we-serve",
    anchorId: "serve-cx",
    Icon: HeadsetIcon,
    title: "Customer Experience",
    tag: "Outsourcing",
    tagline: "Every channel. Every customer. Every time.",
    shortDesc:
      "Multi-channel customer support solutions including chat, email, voice support, and customer success management to enhance client relationships and satisfaction.",
    intro:
      "Multi-channel customer support that protects your brand — responsive, on-message, and available across chat, email, and voice.",
    overview: [
      "Customers judge your brand by every interaction. Our trained support teams deliver consistent, on-brand experiences across chat, email, and voice, with the coverage and quality monitoring that keep satisfaction high.",
      "From frontline support to proactive customer success, we help you retain customers and turn service into a competitive advantage.",
    ],
    highlights: [
      { title: "Omnichannel", desc: "Chat, email, and voice support under one coordinated team." },
      { title: "Trained on your brand", desc: "Agents onboarded to your products, tone, and playbooks." },
      { title: "Customer success", desc: "Proactive outreach that drives retention and expansion." },
      { title: "Quality monitoring", desc: "QA, CSAT tracking, and continuous coaching." },
    ],
    benefits: [
      "Faster response and resolution times",
      "Consistent, on-brand interactions",
      "Higher CSAT and retention",
      "Flexible coverage including after-hours",
      "Lower cost per contact",
      "Actionable voice-of-customer insight",
    ],
    stats: [
      { value: "Omni", label: "Chat · Email · Voice" },
      { value: "↑ CSAT", label: "Satisfaction" },
      { value: "Flexible", label: "Coverage" },
    ],
  },
  {
    slug: "bpm",
    category: "who-we-serve",
    anchorId: "serve-bpm",
    Icon: Workflow,
    title: "BPM (Business Process Management)",
    tag: "BPM Services",
    tagline: "Integrated end-to-end outsourcing",
    shortDesc:
      "We as BPM focus on integrated end-to-end outsourcing and deliver transformational benefits to clients through reduced cost, improved productivity, and process improvement. Voice and non-voice services for US, UK, Australia and Europe — including Google mapping, finance services, chat and email support, and technical support (networking, network setup, infrastructure).",
    intro:
      "Integrated end-to-end outsourcing that delivers transformational benefits through reduced cost, improved productivity, and process improvement.",
    overview: [
      "Our BPM practice takes ownership of complete processes — not just tasks — across voice and non-voice operations for clients in the US, UK, Australia, and Europe. We combine skilled teams, refined workflows, and the right technology to drive measurable outcomes.",
      "From Google mapping and finance services to chat, email, and technical support, we engineer each process for quality and efficiency, then continuously improve it so your costs fall while your service levels rise.",
    ],
    highlights: [
      { title: "Google mapping", desc: "Accurate, large-scale mapping and data operations." },
      { title: "Finance services", desc: "Transaction processing and finance back-office support." },
      { title: "Chat & email support", desc: "Responsive non-voice customer support at scale." },
      { title: "Technical support", desc: "Networking, network setup, and infrastructure support." },
    ],
    benefits: [
      "Reduced operating cost",
      "Improved productivity and throughput",
      "Continuous process improvement",
      "Voice and non-voice coverage",
      "Global delivery across US, UK, AU, EU",
      "Transformational, measurable outcomes",
    ],
    stats: [
      { value: "E2E", label: "End-to-end" },
      { value: "4 regions", label: "US · UK · AU · EU" },
      { value: "Voice+", label: "Voice & non-voice" },
    ],
    process: [
      { step: "01", title: "Discover", desc: "We map your current process, costs, and pain points in detail." },
      { step: "02", title: "Design", desc: "We re-engineer the workflow and define the right delivery model." },
      { step: "03", title: "Transition", desc: "Knowledge transfer and a managed, low-risk go-live." },
      { step: "04", title: "Optimize", desc: "Ongoing measurement and improvement against agreed KPIs." },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────
export const allContent: CardContent[] = [...services, ...segments]

export function getContent(category: Category, slug: string): CardContent | undefined {
  return allContent.find((c) => c.category === category && c.slug === slug)
}

export function getSlugs(category: Category): { slug: string }[] {
  return allContent.filter((c) => c.category === category).map((c) => ({ slug: c.slug }))
}
