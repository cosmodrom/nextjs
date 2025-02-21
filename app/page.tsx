import React, { useState } from 'react';
import styles from './page.module.css';

// Component to render the logo with effects
const Logo: React.FC = () => {
  const [hover, setHover] = useState(false);
  const [sparkle, setSparkle] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const distance = Math.sqrt((x - width / 2) ** 2 + (y - height / 2) ** 2);
    const maxDistance = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
    setSparkle(distance < maxDistance / 2);
  };

  const handleMClick = () => {
    setPopupVisible(!popupVisible);
  };

  return (
    <>
      {popupVisible && (
        <div className={styles.popup}>
          <p>Popup content goes here!</p>
          <button onClick={() => setPopupVisible(false)}>Close</button>
        </div>
      )}
      <div
        className={`${styles.logo} ${sparkle ? styles.sparkle : ''} ${hover ? styles.fire : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <svg className={styles.svgLogo} onClick={handleMClick}>
          <use xlinkHref="/csmdr.svg#csmdr"></use>
        </svg>
      </div>
    </>
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
