import React, { useCallback } from "react";
import { Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ALL_CHARACTERS, LINK_TYPES } from "../data/characters";
import { useCarousel } from "../hooks/useCarousel";
import "./OnePiece.css";

// Background animations
const BackgroundElements = () => (
  <div className="ghibli-background">
    {[1, 2, 3].map((i) => (
      <div
        key={`leaf-${i}`}
        className={`floating-leaves ${i > 1 ? `leaf-${i}` : ""}`}
      />
    ))}
    {Array.from({ length: 10 }, (_, i) => (
      <div
        key={`bubble-${i + 1}`}
        className={`sabaody-bubble bubble-${i + 1}`}
      />
    ))}
  </div>
);

// Project links
const ProjectLinks = ({ links, onLinkClick }) => (
  <div className="project-links">
    {LINK_TYPES.map(({ key, icon, label }) => (
      <a
        key={key}
        href={links[key]}
        className="project-link"
        onClick={(e) => onLinkClick(links[key], e)}
      >
        <span className="link-icon">{icon}</span>
        {label}
      </a>
    ))}
  </div>
);

// Character card
const CharacterCard = ({
  character,
  position,
  isFlipped,
  onCardClick,
  onLinkClick,
}) => {
  const positionClass = ["left-card", "center-card", "right-card"][position];
  const hasProject = !!character.project;
  const isCenterCard = position === 1;

  // Side cards (left/right) - show image and name only
  if (!isCenterCard) {
    return (
      <div className={`character-card ${positionClass} preview-only`}>
        <div className="character-image-container">
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
          />
          <div className="character-glow"></div>
        </div>
        <div className="card-content">
          <div className="character-name">{character.name}</div>
        </div>
      </div>
    );
  }

  // Center card - full functionality
  return (
    <div
      className={`character-card ${isFlipped ? "flipped" : ""} ${positionClass}`}
      onClick={(e) => onCardClick(character.id, e)}
    >
      <div className="flip-card-inner">
        {/* Front */}
        <div className="flip-card-front">
          <div className="character-image-container">
            <img
              src={character.image}
              alt={`${character.name}${hasProject ? ` - ${character.project.title}` : ""}`}
              className="character-image"
            />
            <div className="character-glow"></div>
          </div>

          <div className="card-content">
            <div className="character-name">{character.name}</div>
            {hasProject ? (
              <>
                <div className="project-title">
                  {character.project.title}: {character.project.subtitle}
                </div>
                <div className="project-status">{character.project.status}</div>
                <ProjectLinks
                  links={character.project.links}
                  onLinkClick={onLinkClick}
                />
              </>
            ) : (
              <div className="character-description">TBD</div>
            )}
          </div>

          <div className="card-decoration">
            <div className="vine-decoration"></div>
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back">
          <div className="character-image-container">
            <img
              src={character.image}
              alt={`${character.name} character match`}
              className="character-image small"
            />
          </div>
          <div className="card-content">
            <div className="character-name">{character.name}</div>
            <div className="match-title">Why This Character?</div>
            <div className="character-match">{character.match}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Navigation button
const NavButton = ({ direction, onClick, children }) => (
  <button
    className={`carousel-nav-button carousel-nav-${direction}`}
    onClick={onClick}
    aria-label={`Scroll ${direction}`}
  >
    {children}
  </button>
);

// Main component
export default function OnePiece() {
  const navigate = useNavigate();
  const {
    visibleItems,
    goToPrevious,
    goToNext,
    toggleCardFlip,
    isCardFlipped,
  } = useCarousel(ALL_CHARACTERS);

  const handleCardClick = useCallback(
    (characterId, event) => {
      event.stopPropagation();
      toggleCardFlip(characterId);
    },
    [toggleCardFlip],
  );

  const handleLinkClick = useCallback(
    (url, event) => {
      event.stopPropagation();
      if (url.startsWith("/")) {
        navigate(url);
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    },
    [navigate],
  );

  return (
    <div className="one-piece-container">
      <BackgroundElements />

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
          <Typography variant="h6" className="ghibli-subtitle-brown">
            this is vibecoded btw
          </Typography>
        </div>

        <div className="carousel-container">
          <NavButton direction="left" onClick={goToPrevious}>
            ←
          </NavButton>

          <div className="character-grid">
            {visibleItems.map((character, position) => (
              <CharacterCard
                key={character.id}
                character={character}
                position={position}
                isFlipped={isCardFlipped(character.id)}
                onCardClick={handleCardClick}
                onLinkClick={handleLinkClick}
              />
            ))}
          </div>

          <NavButton direction="right" onClick={goToNext}>
            →
          </NavButton>
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
