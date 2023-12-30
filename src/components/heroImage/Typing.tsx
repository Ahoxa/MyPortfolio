import { Typewriter } from "react-simple-typewriter";

function Typing() {
  const words = [
    "FullStuck Developer",
    "Game Developer",
    "Designer",
    "Creator",
  ];

  return (
    <div>
      <p className="text-lg md:text-2xl">I'm Ahoxa,</p>
      <span className="text-red-500 text-xl md:text-3xl">
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
}

export default Typing;
