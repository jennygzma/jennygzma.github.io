// Studio Ghibli-styled One Piece character images
import robinGhibli from "../components/assets/one-piece/robin-ghibli.png";
import frankyGhibli from "../components/assets/one-piece/franky-ghibli.png";
import luffyGhibli from "../components/assets/one-piece/luffy-ghibli.png";
import brookGhibli from "../components/assets/one-piece/brook-ghibli.png";
import chopperGhibli from "../components/assets/one-piece/chopper-ghibli.png";
import namiGhibli from "../components/assets/one-piece/nami-ghibli.png";
import sanjiGhibli from "../components/assets/one-piece/sanji-ghibli.png";
import usoppGhibli from "../components/assets/one-piece/usopp-ghibli.png";
import zoroGhibli from "../components/assets/one-piece/zoro-ghibli.png";

// Research projects
export const RESEARCH_CHARACTERS = [
  {
    id: "zoro",
    name: "Zoro",
    image: zoroGhibli,
    project: {
      title: "ZORO",
      titleFont: "'Roboto Mono', monospace",
      subtitle: "Active Controls to Support Rule Following in Vibe Coding",
      status: "UIST 2026",
      links: {
        arxiv: "https://arxiv.org/pdf/2604.15625",
        // github: "COMING SOON",
        video: "https://www.youtube.com/watch?v=G78p5_e2hxs",
        // project: "COMING SOON",
      },
    },
    match:
      "Zoro is the swordsman of the crew. This paper is about making sure the user's rules get ENFORCED...",},
  {
    id: "agentdynex",
    name: "Robin",
    image: robinGhibli,
    project: {
      title: "AgentDynEx",
      subtitle: "Nudging the Mechanics and Dynamics of Multi-Agent Simulations",
      status: "HCOMP 2026",
      links: {
        arxiv: "https://arxiv.org/pdf/2504.09662v2",
        github: "https://github.com/jennygzma/agentdynex",
        video: "https://www.youtube.com/watch?v=cHc240qd81M",
        project: "/agentdynex",
      },
    },
    match:
      "Multi-agent simulations have millions of agents that work together. Robin can sprout any amount of hands at will. This took some thought but... it's obvious.",
  },
  {
    id: "dynex",
    name: "Franky",
    image: frankyGhibli,
    project: {
      title: "DynEx",
      subtitle: "Dynamic Code Synthesis with Structured Design Exploration",
      status: "CHI 2025 🎖️ Best Paper Honorable Mention",
      links: {
        arxiv: "https://arxiv.org/pdf/2410.00400",
        github: "https://github.com/jennygzma/dynex",
        video: "https://www.youtube.com/watch?v=ZYbXXdvsLk0",
        project: "/dynex",
      },
    },
    match:
      "Franky is the ship engineer. This paper worked on creating tools for people",
  },
  {
    id: "scrolly2reel",
    name: "Brook",
    image: brookGhibli,
    project: {
      title: "Scrolly2Reel",
      subtitle: "Retargeting Graphics for Social Media Using Narrative Beats",
      status: "HICSS 2025",
      links: {
        arxiv: "https://arxiv.org/pdf/2403.18111",
        github: "https://github.com/username/scrolly2reel",
        video: "https://youtube.com/watch?v=example3",
        project: "/scrolly2reel",
      },
    },
    match:
      "The paper transforms news articles into reels using narrative beats and breathes life into it... Just like Soul King...Yohohoho!",
  },
];

// Placeholder characters
export const PLACEHOLDER_CHARACTERS = [
  { id: "luffy", name: "Luffy", image: luffyGhibli },
  { id: "nami", name: "Nami", image: namiGhibli },
  { id: "usopp", name: "Usopp", image: usoppGhibli },
  { id: "sanji", name: "Sanji", image: sanjiGhibli },
  { id: "chopper", name: "Chopper", image: chopperGhibli },
];

// All characters combined
export const ALL_CHARACTERS = [
  ...RESEARCH_CHARACTERS,
  ...PLACEHOLDER_CHARACTERS.map((char) => ({ ...char, match: "TBD" })),
];

// Link types for project links
export const LINK_TYPES = [
  { key: "arxiv", icon: "📄", label: "ArXiv" },
  { key: "github", icon: "💻", label: "GitHub" },
  { key: "video", icon: "🎥", label: "Video" },
  { key: "project", icon: "🌐", label: "Project" },
];
