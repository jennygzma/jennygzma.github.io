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
    id: "agentdynex",
    name: "Robin",
    image: robinGhibli,
    project: {
      title: "AgentDynEx",
      subtitle: "Nudging the Mechanics and Dynamics of Multi-Agent Simulations",
      status: "Under Submission",
      links: {
        arxiv: "https://arxiv.org/abs/2401.00000",
        github: "https://github.com/username/agentdynex",
        video: "https://youtube.com/watch?v=example1",
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
        arxiv: "https://arxiv.org/abs/2401.00001",
        github: "https://github.com/username/dynex",
        video: "https://youtube.com/watch?v=example2",
        project: "/dynex",
      },
    },
    match:
      "Franky is the ship engineer. This paper worked on creating tools for people. SuperDuh.",
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
        arxiv: "https://arxiv.org/abs/2401.00002",
        github: "https://github.com/username/scrolly2reel",
        video: "https://youtube.com/watch?v=example3",
        project: "/scrolly2reel",
      },
    },
    match:
      "The paper transforms news articles into reels using narrative beats and breathes life into it. Just like Soul King...Yohohoho!",
  },
];

// Placeholder characters
export const PLACEHOLDER_CHARACTERS = [
  { id: "luffy", name: "Luffy", image: luffyGhibli },
  { id: "zoro", name: "Zoro", image: zoroGhibli },
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
