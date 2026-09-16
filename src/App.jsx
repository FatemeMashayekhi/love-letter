import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="page">
      <div
        className="envelope"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="envelope-back" />

        <motion.div
          className="letter"
          animate={{
            y: isOpen ? -120 : 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            transition={{
              delay: isOpen ? 0.5 : 0,
              duration: 0.4,
            }}
          >
           Love You ❤️
          </motion.p>
        </motion.div>

        <motion.div
          className="flap"
          animate={{
            rotateX: isOpen ? 180 : 0,
            zIndex: isOpen ? 1 : 4,
          }}
          transition={{
            rotateX: {
              duration: 0.7,
              ease: "easeInOut",
            },
            zIndex: {
              duration: 0,
            },
          }}
        />

        <div className="envelope-front" />
      </div>
    </main>
  );
}

