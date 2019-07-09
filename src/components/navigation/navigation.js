import React, { useState, useEffect } from "react"
import throttle from 'lodash.throttle'
// import debounce from "lodash.debounce"

import Header from "./header/header"

const contentElements = []
// let currentSectionIndex = 0

const Navigation = () => {
  const [currentSectionId, setCurrentSectionId] = useState("Projects")

  const handleNavClick = id => {
    const el = document.getElementById(id);
    el.scrollIntoView({
      behavior: "smooth",
    })
    setCurrentSectionId(id)

    // currentSectionIndex = contentElements.indexOf(el);
  }

  const handleScroll = event => {
    // if (event.deltaY < 0) {
    //   if (currentSectionIndex < contentElements.length - 1) {
    //     currentSectionIndex++;
    //   }
    // } else {
    //   if (currentSectionIndex > 0) {
    //     currentSectionIndex--;
    //   }
    // }

    // handleNavClick(contentElements[currentSectionIndex].id);

    contentElements.some((el) => {
      const boundingRect = el.getBoundingClientRect();
      if (boundingRect.y <= 100) {
        setCurrentSectionId(el.id);
        return true;
      } else {
        return false;
      }
    });
  }

  // const debouncedScroll = debounce(handleScroll, 250, { maxWait: 2000 })
  const throttledScroll = throttle(handleScroll, 500);

  useEffect(() => {
    contentElements.push(
      document.getElementById("Resume"),
      document.getElementById("About"),
      document.getElementById("Projects")
    );

    // currentSectionIndex = contentElements.length - 1;

    // contentElements.forEach(element => {
    //   element.addEventListener("wheel", () => {
    //     return false;
    //   })
    // });

    // document.getElementById("ContentArea").onwheel = function(){ return false; }

    // window.addEventListener("wheel", debouncedScroll);
    window.addEventListener('wheel', throttledScroll);

    return () => {
      // window.removeEventListener("wheel", debouncedScroll);
      window.removeEventListener('wheel', throttledScroll);
    }
  }, [contentElements]);

  return (
    <div>
      <Header
        currentSection={currentSectionId}
        handleNavClick={handleNavClick}
      />
    </div>
  )
}

export default Navigation
