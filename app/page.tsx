import React, { useState } from 'react';
import styles from './page.module.css';
<img src="/public/csmdr.cvg" id="logo" alt="cosmodrom" />

<!-- Music Pop-up -->
<div id="music-popup" class="hidden">
    <div class="popup-content">
        <button id="play-music">▶ Play</button>
        <button id="stop-music">⏹ Stop</button>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const popup = document.getElementById("music-popup");
    const playBtn = document.getElementById("play-music");
    const stopBtn = document.getElementById("stop-music");
    let audio = new Audio("/public/music-loop.mp3");
    audio.loop = true;

    // Detect click on the "m" of .cosmodrom
    logo.addEventListener("click", function (event) {
        const rect = logo.getBoundingClientRect();
        const clickX = event.clientX - rect.left;
        const logoWidth = rect.width;
        if (clickX > logoWidth * 0.85) { // Click near the end (where "m" is)
            popup.classList.toggle("hidden");
        }
    });

    playBtn.addEventListener("click", function () {
        audio.play();
    });

    stopBtn.addEventListener("click", function () {
        audio.pause();
        audio.currentTime = 0;
    });
});
</script>

<style>
#music-popup {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 200px;
    height: 150px;
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid cyan;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 0 10px cyan;
}
.hidden {
    display: none;
}
.popup-content button {
    margin: 10px;
    padding: 10px 20px;
    background: cyan;
    border: none;
    cursor: pointer;
}
</style>
// Component to render the logo with effects
const Logo: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [sparkle, setSparkle] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const distance = Math.sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2);
    const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
    setSparkle(distance < maxDistance / 2);
  };

  return (
    <div
      className={`${styles.logo} ${sparkle ? styles.sparkle : ''} ${hover ? styles.fire : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      .cosmodrom
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};

export default Page;
