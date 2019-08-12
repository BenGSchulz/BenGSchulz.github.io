import React, { useState, useEffect } from "react"
import throttle from "lodash.throttle"
// import debounce from "lodash.debounce"

import Header from "./header/header"

let contentArea = null
const contentElements = []
let currentSectionIndex = 2

// let scrollPos = 0;

const Navigation = () => {
  const [currentSectionId, setCurrentSectionId] = useState("Projects")

  const handleNavClick = id => {
    const el = document.getElementById(id)
    el.scrollIntoView({
      behavior: "smooth",
    })
    setCurrentSectionId(id)
    currentSectionIndex = contentElements.indexOf(el)
  }

  const handleScroll = event => {
    event.stopPropagation()
    event.preventDefault()

    if (event.deltaY < 0) {
      if (currentSectionIndex < contentElements.length - 1) {
        currentSectionIndex++
      }
    } else {
      if (currentSectionIndex > 0) {
        currentSectionIndex--
      }
    }

    handleNavClick(contentElements[currentSectionIndex].id)
  }

  const throttledScroll = throttle(handleScroll, 500, { trailing: false })

  useEffect(() => {
    contentElements.push(
      document.getElementById("Resume"),
      document.getElementById("About"),
      document.getElementById("Projects")
    )

    contentArea = document.getElementById("ContentArea")

    window.addEventListener(
      "wheel",
      e => {
        e.preventDefault()
      },
      { passive: false }
    )

    contentArea.addEventListener("wheel", throttledScroll)

    return () => {
      window.removeEventListener(
        "wheel",
        e => {
          e.preventDefault()
        },
        { passive: false }
      )

      contentArea.removeEventListener("wheel", throttledScroll)
    }
  }, [contentElements])

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
