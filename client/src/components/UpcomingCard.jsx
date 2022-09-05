import { useEffect, useState } from "react";

export default function UpcomingCard({
  title,
  image,

  rowTitle,
  episodeNum,
  trailerVideoId,
  setIsPlaying,
  setTrailerId,
  id,
}) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
      console.log(windowSize);
    });
  });

  const calculateSize = (windowSize) => {
    if (windowSize > 1850) return [240, 430];
    else if (windowSize > 1700 && windowSize < 1850) return [210, 400];
    else return [130, 225];
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setTrailerId(trailerVideoId);
        setIsPlaying(true);
      }}
      className="animecard-wrapper"
      style={{
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
        height: "fit-content",

        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          borderRadius: "10px",
          backgroundImage: `url(${image})`,
          height: calculateSize(windowSize)[0],
          width: calculateSize(windowSize)[1],
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {episodeNum > 0 && (
        <h5 style={{ color: "white", fontWeight: "lighter" }}>
          Episode {episodeNum}
        </h5>
      )}

      <a
        onClick={(e) => {
          e.preventDefault();
          console.log("Anime title clicked");
        }}
        href="/"
        className="anime-card-title"
        style={{ color: "white", fontWeight: "lighter" }}
      >
        {title}
      </a>
    </div>
  );
}