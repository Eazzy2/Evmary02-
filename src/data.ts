export interface RoleHolder {
  id: number;
  title: string;
  holder: string;
  category: string;
  description: string;
}

export const VCLP_DATA: RoleHolder[] = [
  // COMMUNITY OPERATIONS
  {
    id: 1,
    category: "Community Operations",
    title: "Community Operations Lead",
    holder: "@NaqiGill",
    description: "Oversees the daily heartbeat of the community, ensuring all operational processes run smoothly and efficiently."
  },
  {
    id: 2,
    category: "Community Operations",
    title: "Community Support Lead",
    holder: "@Naymerjr2005",
    description: "The primary point of contact for member inquiries, providing guidance and resolving issues with a helpful spirit."
  },
  {
    id: 3,
    category: "Community Operations",
    title: "Moderation Support Officer",
    holder: "@Rehanahmed4",
    description: "Maintains a safe and respectful environment across all platforms, ensuring community guidelines are upheld."
  },
  {
    id: 4,
    category: "Community Operations",
    title: "Community Onboarding Lead",
    holder: "@jamestows1",
    description: "Welcomes new members into the ecosystem, guiding them through their first steps and ensuring a warm integration."
  },
  {
    id: 5,
    category: "Community Operations",
    title: "Member Feedback Coordinator",
    holder: "@Officialchaserice0100",
    description: "Gathers and synthesizes member insights to help the leadership team improve the community experience."
  },

  // EVENTS & ENGAGEMENT
  {
    id: 6,
    category: "Events & Engagement",
    title: "Community Engagement Director",
    holder: "@faheemgill752",
    description: "Strategizes and drives high-level engagement initiatives to keep the community vibrant and active."
  },
  {
    id: 7,
    category: "Events & Engagement",
    title: "Events Lead",
    holder: "@omologo5",
    description: "Plans and executes community events, from AMAs to virtual meetups, ensuring memorable experiences for all."
  },
  {
    id: 8,
    category: "Events & Engagement",
    title: "Event Assistant",
    holder: "@RealKEFI",
    description: "Supports the Events Lead in logistics and coordination, ensuring every event runs without a hitch."
  },
  {
    id: 9,
    category: "Events & Engagement",
    title: "Daily Crypto Talk Lead",
    holder: "@Legend832",
    description: "Hosts daily discussions on market trends and crypto news, fostering educational dialogue within the community."
  },

  // GROWTH & PARTNERSHIPS
  {
    id: 10,
    category: "Growth & Partnerships",
    title: "Alliance Builder / Growth Collaboration",
    holder: "@LiquidtyApe",
    description: "Forges strategic alliances with other projects and communities to expand the Verse ecosystem's reach."
  },
  {
    id: 11,
    category: "Growth & Partnerships",
    title: "Partnership Development Coordinator",
    holder: "@Rairacrypto",
    description: "Manages the lifecycle of partnerships, from initial outreach to long-term relationship maintenance."
  },
  {
    id: 12,
    category: "Growth & Partnerships",
    title: "Community Promotion Officer",
    holder: "@Kelvumeh",
    description: "Spreads the word about Verse across social media and other platforms to attract new enthusiasts."
  },
  {
    id: 13,
    category: "Growth & Partnerships",
    title: "Partnerships Research Assistant",
    holder: "@verselead1",
    description: "Identifies potential growth opportunities and researches emerging trends to inform partnership strategies."
  },

  // BUILDER & TECHNICAL ECOSYSTEM
  {
    id: 14,
    category: "Builder & Technical Ecosystem",
    title: "Builder Ecosystem Lead & Vibe Coding Expert",
    holder: "@Sadikufav",
    description: "Leads the developer community and champions 'Vibe Coding'—a modern, intuitive approach to technical creation."
  },
  {
    id: 15,
    category: "Builder & Technical Ecosystem",
    title: "Assistant Builder Ecosystem & Vibe Coding Expert",
    holder: "@Jessymia0505",
    description: "Supports technical initiatives and helps developers navigate the Verse builder tools and resources."
  },

  // MARKET RESEARCH & CRYPTO EDUCATION
  {
    id: 16,
    category: "Market Research & Crypto Education",
    title: "Market Research Lead",
    holder: "@camiellaph",
    description: "Analyzes market data and trends to provide the community with actionable insights and deep-dives."
  },
  {
    id: 17,
    category: "Market Research & Crypto Education",
    title: "Market Research Assistant",
    holder: "@Mistress_Kerty22",
    description: "Assists in data collection and report generation, ensuring our research is thorough and up-to-date."
  },
  {
    id: 18,
    category: "Market Research & Crypto Education",
    title: "Crypto Education Lead",
    holder: "@Chukwudi12390",
    description: "Curates educational content to simplify complex crypto concepts for members of all skill levels."
  },
  {
    id: 19,
    category: "Market Research & Crypto Education",
    title: "Learning Session Host",
    holder: "@shojib1122334",
    description: "Facilitates live learning sessions and workshops, encouraging active participation and knowledge sharing."
  },

  // CONTENT & MEDIA
  {
    id: 20,
    category: "Content & Media",
    title: "Content & Media Lead",
    holder: "@desi_boii7",
    description: "Directs the creative vision for all community content, from articles to video productions."
  },
  {
    id: 21,
    category: "Content & Media",
    title: "Graphic Design Contributor",
    holder: "@jame_rush001",
    description: "Creates stunning visual assets that define the Verse brand and community aesthetic."
  },

  // DATA & ANALYTICS
  {
    id: 22,
    category: "Data & Analytics",
    title: "Community Data Analyst",
    holder: "@Ghulamrabbani330",
    description: "Tracks community metrics and growth patterns to help leadership make data-driven decisions."
  },
  {
    id: 23,
    category: "Data & Analytics",
    title: "Weekly Community Highlights Curator",
    holder: "@talhaasmat",
    description: "Summarizes the best moments and key achievements of the week for the entire community to celebrate."
  },

  // TOP MANAGEMENT
  {
    id: 24,
    category: "Top Management",
    title: "Chief People Officer (CPO)",
    holder: "@WasiAbaas",
    description: "Focuses on the human element of the leadership program, ensuring every role holder is supported and empowered."
  },
  {
    id: 25,
    category: "Top Management",
    title: "Head of Communications",
    holder: "@aderojuisaac",
    description: "Shapes the official voice of Verse, managing public relations and high-level messaging."
  },
  {
    id: 26,
    category: "Top Management",
    title: "Chief Audit Officer",
    holder: "@IamFHG",
    description: "Ensures transparency and accountability within the leadership program through regular audits and reviews."
  }
];

export const CATEGORIES = Array.from(new Set(VCLP_DATA.map(item => item.category)));
