import { useEffect, useRef } from "react";

const LogoPage = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgElement = svgRef.current;

    const handleMouseMove = (event: MouseEvent) => {
      if (svgElement) {
        const rect = svgElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Generate Sparks on Mouse Move
        const spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.top = `${y}px`;
        spark.style.left = `${x}px`;
        svgElement.appendChild(spark);

        // Remove spark after animation ends
        setTimeout(() => {
          spark.remove();
        }, 500);
      }
    };

    const handleMouseOver = () => {
      if (svgElement) {
        // Show fire effect on hover
        const fire = document.createElement("div");
        fire.classList.add("fire");
        svgElement.appendChild(fire);

        // Position the fire at the center of the text
        fire.style.left = "50%";
        fire.style.top = "50%";

        // Remove fire after animation ends
        setTimeout(() => {
          fire.remove();
        }, 1000);
      }
    };

    const handleMouseLeave = () => {
      if (svgElement) {
        // Stop fire animation
        const fireElements = svgElement.querySelectorAll(".fire");
        fireElements.forEach((fire) => fire.remove());
      }
    };

    svgElement?.addEventListener("mousemove", handleMouseMove);
    svgElement?.addEventListener("mouseover", handleMouseOver);
    svgElement?.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners on component unmount
    return () => {
      svgElement?.removeEventListener("mousemove", handleMouseMove);
      svgElement?.removeEventListener("mouseover", handleMouseOver);
      svgElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        svg {
          position: relative;
          cursor: pointer;
        }

        /* Vibration effect when pointer is near */
        svg:hover {
          animation: vibrate 0.2s ease-in-out infinite;
        }

        @keyframes vibrate {
          0% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-4px);
          }
          50% {
            transform: translateX(4px);
          }
          75% {
            transform: translateX(-4px);
          }
          100% {
            transform: translateX(4px);
          }
        }

        /* Spark effects */
        .spark {
          position: absolute;
          width: 5px;
          height: 5px;
          background-color: #ffd700;
          border-radius: 50%;
          animation: spark-animation 0.5s linear infinite;
        }

        @keyframes spark-animation {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
            top: -20px;
            left: 20px;
          }
        }

        /* Fire Effect */
        .fire {
          position: absolute;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, orange, yellow);
          border-radius: 50%;
          animation: fire-animation 0.5s infinite;
          opacity: 0;
        }

        @keyframes fire-animation {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }
      `}</style>

      {/* SVG Image */}
      <img
        ref={svgRef}
        src="/csmdr.svg"
        alt="Cosmodrom Logo"
        width="300"
        height="100"
      />
    </>
  );
};

export default LogoPage;
