export const handleHoverProjectsGrid = (state) => {

  const body = document.querySelector('body');
  
  state ? body.style.overflow = 'hidden' : body.style.overflow = 'scroll'
}