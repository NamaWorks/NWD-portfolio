export const handleScroll = (currentSection) => {
  let newSection = currentSection
  if(currentSection == "hero-section"){
    location.href = "#projects-section"
    newSection="projects-section"
  } else {
    location.href = "#hero-section"
    newSection="hero-section"
  }
  return newSection
}