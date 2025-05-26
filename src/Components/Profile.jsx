import React, { useState, useEffect } from "react";
import SplitText from "../ReactBit/SplitText";
import "./../App.css";

const texts = [
  "Shrimant Chhatrapati Shivaji Bhosale Maharaj",
  "श्रीमंत छत्रपती शिवाजी भोसले महाराज",
  "श्रीमंत छत्रपति शिवाजी भोसले महाराज",
];

function Profile() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // force re-render

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setAnimationKey((prev) => prev + 1); 
    }, 1000); 
  };

  return (
    <div>
      <h1>
        <SplitText
          key={animationKey}
          text={texts[currentIndex]}
          className="white text-center"
          delay={100}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </h1>
    </div>
  );
}

export default Profile;
