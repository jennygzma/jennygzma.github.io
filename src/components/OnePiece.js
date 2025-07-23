import React, { useState, useRef, useEffect } from "react";
import { Stack, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./OnePiece.css";

// Studio Ghibli-styled One Piece character images
import robinGhibli from "./assets/one-piece/robin-ghibli.png";
import frankyGhibli from "./assets/one-piece/franky-ghibli.png";
import luffyGhibli from "./assets/one-piece/luffy-ghibli.png";
import brookGhibli from "./assets/one-piece/brook-ghibli.png";
import chopperGhibli from "./assets/one-piece/chopper-ghibli.png";
import namiGhibli from "./assets/one-piece/nami-ghibli.png";
import sanjiGhibli from "./assets/one-piece/sanji-ghibli.png";
import usoppGhibli from "./assets/one-piece/usopp-ghibli.png";
import zoroGhibli from "./assets/one-piece/zoro-ghibli.png";
import backgroundGhibli from "./assets/one-piece/background-ghibli.jpg";

const allCharacters = [
  {
    id: "agentdynex",
    character: "Robin",
    image: robinGhibli,
    hasResearch: true,
    title: "AgentDynEx",
    subtitle: "Nudging the Mechanics and Dynamics of Multi-Agent Simulations",
    route: "/agentdynex",
    status: "Under Submission",
    characterMatch:
      "Robin's archaeological expertise mirrors the careful excavation of insights from complex multi-agent systems. Just as she uncovers ancient truths, this research reveals hidden dynamics in AI simulations.",
    links: {
      arxiv: "https://arxiv.org/abs/2401.00000",
      github: "https://github.com/username/agentdynex",
      video: "https://youtube.com/watch?v=example1",
      project: "/agentdynex",
    },
  },
  {
    id: "dynex",
    character: "Franky",
    image: frankyGhibli,
    hasResearch: true,
    title: "DynEx",
    subtitle: "Dynamic Code Synthesis with Structured Design Exploration",
    route: "/dynex",
    status: "CHI 2025 🎖️ Best Paper Honorable Mention",
    characterMatch:
      "Franky's genius for building incredible machines from blueprints perfectly embodies this system that constructs code through structured exploration. Both create SUPER solutions through systematic design!",
    links: {
      arxiv: "https://arxiv.org/abs/2401.00001",
      github: "https://github.com/username/dynex",
      video: "https://youtube.com/watch?v=example2",
      project: "/dynex",
    },
  },
  {
    id: "scrolly2reel",
    character: "Brook",
    image: brookGhibli,
    hasResearch: true,
    title: "Scrolly2Reel",
    subtitle: "Retargeting Graphics for Social Media Using Narrative Beats",
    route: "/scrolly2reel",
    status: "HICSS 2025",
    characterMatch:
      "Brook's musical talent for finding the perfect rhythm and beat matches this system's ability to identify narrative beats in stories and transform them into engaging social media content. Yohohoho!",
    links: {
      arxiv: "https://arxiv.org/abs/2401.00002",
      github: "https://github.com/username/scrolly2reel",
      video: "https://youtube.com/watch?v=example3",
      project: "/scrolly2reel",
    },
  },
  {
    id: "luffy",
    character: "Luffy",
    image: luffyGhibli,
    hasResearch: false,
    description: "TBD",
    characterMatch: "TBD",
  },
  {
    id: "zoro",
    character: "Zoro",
    image: zoroGhibli,
    hasResearch: false,
    description: "TBD",
    characterMatch: "TBD",
  },
  {
    id: "nami",
    character: "Nami",
    image: namiGhibli,
    hasResearch: false,
    description: "TBD",
    characterMatch: "TBD",
  },
  {
    id: "usopp",
    character: "Usopp",
    image: usoppGhibli,
    hasResearch: false,
    description: "TBD",
    characterMatch: "TBD",
  },
  {
    id: "sanji",
    character: "Sanji",
    image: sanjiGhibli,
    hasResearch: false,
    description: "TBD",
    characterMatch: "TBD",
  },
  {
    id: "chopper",
    character: "Chopper",
    image: chopperGhibli,
    hasResearch: false,
    description: "TBD",
    characterMatch: "TBD",
  },
];

export default function OnePiece() {
  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState({});
  const [centerCardIndex, setCenterCardIndex] = useState(0);
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  // Get the three visible cards (previous, current, next) with circular logic
  const getVisibleCards = () => {
    const totalCards = allCharacters.length;
    const prevIndex = (centerCardIndex - 1 + totalCards) % totalCards;
    const nextIndex = (centerCardIndex + 1) % totalCards;

    return {
      prev: prevIndex,
      center: centerCardIndex,
      next: nextIndex,
    };
  };

  const visibleCards = getVisibleCards();

  const handleCardClick = (characterId, event) => {
    event.stopPropagation();
    setFlippedCards((prev) => ({
      ...prev,
      [characterId]: !prev[characterId],
    }));
  };

  const handleLinkClick = (url, event) => {
    event.stopPropagation();
    if (url.startsWith("/")) {
      navigate(url);
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const scrollLeft = () => {
    setCenterCardIndex((prev) => {
      const totalCards = allCharacters.length;
      return (prev - 1 + totalCards) % totalCards;
    });
  };

  const scrollRight = () => {
    setCenterCardIndex((prev) => {
      const totalCards = allCharacters.length;
      return (prev + 1) % totalCards;
    });
  };

  return (
    <div className="one-piece-container">
      <div className="ghibli-background">
        {/* Floating Leaves */}
        <div className="floating-leaves"></div>
        <div className="floating-leaves leaf-2"></div>
        <div className="floating-leaves leaf-3"></div>

        {/* Sabaody Bubbles */}
        <div className="sabaody-bubble bubble-1"></div>
        <div className="sabaody-bubble bubble-2"></div>
        <div className="sabaody-bubble bubble-3"></div>
        <div className="sabaody-bubble bubble-4"></div>
        <div className="sabaody-bubble bubble-5"></div>
        <div className="sabaody-bubble bubble-6"></div>
        <div className="sabaody-bubble bubble-7"></div>
        <div className="sabaody-bubble bubble-8"></div>
        <div className="sabaody-bubble bubble-9"></div>
        <div className="sabaody-bubble bubble-10"></div>
      </div>

      <Stack spacing={4} className="one-piece-content">
        <div className="back-navigation">
          <a href="#/" className="back-link">
            ← back to home
          </a>
        </div>

        <div className="page-header">
          <Typography variant="h2" className="ghibli-title">
            One Piece X Research
          </Typography>
          <Typography variant="h6" className="ghibli-subtitle">
            one piece inspired me to quit my industry job and go into research
            so i have to honor it somehow obviously...
          </Typography>
        </div>

        <div className="carousel-container">
          <button
            className="carousel-nav-button carousel-nav-left"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            ←
          </button>

          <div className="character-grid" ref={carouselRef}>
            {[visibleCards.prev, visibleCards.center, visibleCards.next].map(
              (characterIndex, position) => {
                const character = allCharacters[characterIndex];
                const isCenter = position === 1;
                const isLeft = position === 0;
                const isRight = position === 2;

                return (
                  <div
                    key={character.id}
                    className={`character-card ${flippedCards[character.id] ? "flipped" : ""} ${
                      isCenter
                        ? "center-card"
                        : isLeft
                          ? "left-card"
                          : "right-card"
                    }`}
                    onClick={(e) => handleCardClick(character.id, e)}
                  >
                    <div className="flip-card-inner">
                      {/* Front of card */}
                      <div className="flip-card-front">
                        <div className="character-image-container">
                          <img
                            src={character.image}
                            alt={`${character.character}${character.hasResearch ? ` - ${character.title}` : ""}`}
                            className="character-image"
                          />
                          <div className="character-glow"></div>
                        </div>

                        <div className="card-content">
                          <div className="character-name">
                            {character.character}
                          </div>
                          {character.hasResearch ? (
                            <>
                              <div className="project-title">
                                {character.title}: {character.subtitle}
                              </div>
                              <div className="project-status">
                                {character.status}
                              </div>

                              {character.links && (
                                <div className="project-links">
                                  <a
                                    href={character.links.arxiv}
                                    className="project-link"
                                    onClick={(e) =>
                                      handleLinkClick(character.links.arxiv, e)
                                    }
                                  >
                                    <span className="link-icon">📄</span>
                                    ArXiv
                                  </a>
                                  <a
                                    href={character.links.github}
                                    className="project-link"
                                    onClick={(e) =>
                                      handleLinkClick(character.links.github, e)
                                    }
                                  >
                                    <span className="link-icon">💻</span>
                                    GitHub
                                  </a>
                                  <a
                                    href={character.links.video}
                                    className="project-link"
                                    onClick={(e) =>
                                      handleLinkClick(character.links.video, e)
                                    }
                                  >
                                    <span className="link-icon">🎥</span>
                                    Video
                                  </a>
                                  <a
                                    href={character.links.project}
                                    className="project-link"
                                    onClick={(e) =>
                                      handleLinkClick(
                                        character.links.project,
                                        e,
                                      )
                                    }
                                  >
                                    <span className="link-icon">🌐</span>
                                    Project
                                  </a>
                                </div>
                              )}
                            </>
                          ) : (
                            <div className="character-description">
                              {character.description}
                            </div>
                          )}
                        </div>

                        <div className="card-decoration">
                          <div className="vine-decoration"></div>
                        </div>
                      </div>

                      {/* Back of card */}
                      <div className="flip-card-back">
                        <div className="character-image-container">
                          <img
                            src={character.image}
                            alt={`${character.character} character match`}
                            className="character-image small"
                          />
                        </div>

                        <div className="card-content">
                          <div className="character-name">
                            {character.character}
                          </div>
                          <div className="match-title">Why This Character?</div>
                          <div className="character-match">
                            {character.characterMatch}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              },
            )}
          </div>

          <button
            className="carousel-nav-button carousel-nav-right"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            →
          </button>
        </div>

        <div className="navigation-hint">
          <Typography variant="body2" className="hint-text">
            Pictures are from the internet, not mine, but I also don't know
            whose
          </Typography>
        </div>
      </Stack>
    </div>
  );
}
