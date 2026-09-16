import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [status, setStatus] = useState("closed");

  const handleClick = () => {
    if (status === "closed") {
      setStatus("opening");
    } else if (status === "open") {
      setStatus("closing");
    }
  };

  const flapIsOpen = status !== "closed";
  const letterIsOut = status === "open";

  return (
    <main className="page">
      <div className="envelope" onClick={handleClick}>
        <div className="envelope-back" />

        <motion.div
          className="letter"
          initial={false}
          animate={{
            y: letterIsOut ? -120 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={() => {
            if (status === "closing") {
              setStatus("closed");
            }
          }}
        >
          <motion.p
            initial={false}
            animate={{
              opacity: letterIsOut ? 1 : 0,
            }}
            transition={{
              delay: letterIsOut ? 0.25 : 0,
              duration: 0.4,
            }}
          >
            Love You ❤️
          </motion.p>
        </motion.div>

        <motion.div
          className="flap"
          initial={false}
          animate={{
            rotateX: flapIsOpen ? 180 : 0,
          }}
          style={{
            zIndex: status === "closed" || status === "opening" ? 4 : 1,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => {
            if (status === "opening") {
              setStatus("open");
            }
          }}
        />

        <div className="envelope-front" />
      </div>
    </main>
  );
}
