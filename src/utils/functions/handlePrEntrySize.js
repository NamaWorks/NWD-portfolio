
export const handlePrEntrySize = (elementId, active = false, selectedView ) => {

  if(selectedView == "list"){
    try {
      const prEntry = document.querySelector(`#${elementId}`)
    
      const prMainInfo = prEntry.querySelector('.pr-main-info')
      const prContent = prEntry.querySelector(".pr-inner-info")
    
      if(!active) {
        return Number(prMainInfo.getBoundingClientRect().height) + 20
      } else if (active){
        return Number(prContent.getBoundingClientRect().height) + Number(prMainInfo.getBoundingClientRect().height) + 64
      }
    } catch (error) {
      // console.log(error)
    }
  } else if (selectedView == "grid") {
    try {
      const prEntry = document.querySelector(`#${elementId}`)

      const prMainImage = prEntry.querySelector('.pr-main-image')
      const prContent = prEntry.querySelector('pr-main-info')

      if(!active){
        // console.log(prEntry.getBoundingClientRect().width)
        // console.log(prMainImage.getBoundingClientRect().width)

        return Number(prMainImage.getBoundingClientRect().width)
      } else if (active) {
        return Number(prEntry.getBoundingClientRect().width) +  Number(prMainImage.getBoundingClientRect().width) + 20
      }
    } catch (error) {
      // console.log(error)
    }
  }
};