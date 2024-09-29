
export const handlePrEntrySize = (elementId, active = false) => {
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
  console.log(error)
}
};