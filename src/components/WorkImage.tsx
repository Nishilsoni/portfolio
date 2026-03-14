import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  title?: string;
  category?: string;
  tools?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const toolList = props.tools
    ? props.tools
        .split(",")
        .map((tool) => tool.trim())
        .filter(Boolean)
        .slice(0, 3)
    : [];

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const visualContent = (
    <>
      {props.link && (
        <div className="work-link">
          <MdArrowOutward />
        </div>
      )}
      <div className="work-visual-card">
        <div className="work-visual-glow"></div>
        <div className="work-visual-content">
          <p className="work-visual-eyebrow">Live Project</p>
          <h5>{props.title || props.alt || "Project"}</h5>
          <p>{props.category || "Creative build"}</p>
          <div className="work-visual-tags">
            {toolList.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
    </>
  );

  return (
    <div className="work-image">
      {props.link ? (
        <a
          className="work-image-in"
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noreferrer"
          data-cursor={"disable"}
          aria-label={`Open ${props.title || props.alt || "project"}`}
        >
          {visualContent}
        </a>
      ) : (
        <div
          className="work-image-in"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          data-cursor={"disable"}
          aria-label={props.title || props.alt || "project preview"}
        >
          {visualContent}
        </div>
      )}
    </div>
  );
};

export default WorkImage;
