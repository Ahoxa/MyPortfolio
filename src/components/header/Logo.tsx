import { useState } from "react";

const fontStyle = {
  fontFamily: "Cormorant Garamond",
  serif: "serif",
};

const Logo = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="/" style={fontStyle}>
      <span
        className="group inline-flex items-center h-14 leading-5 ml-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className={`left transition-all duration-300 ease-in-out text-4xl mr-1 ${
            isHovered ? "translate-x-[-5px]" : ""
          }`}
        >
          {"{"}
        </span>
        <div className="font-light text-xl">
          <p>Ahoxa</p>
          <p>Portfolio</p>
        </div>
        <span
          className={`right transition-all duration-300 ease-in-out text-4xl ml-1 ${
            isHovered ? "translate-x-[5px]" : ""
          }`}
        >
          {"}"}
        </span>
      </span>
    </a>
  );
};

export default Logo;
