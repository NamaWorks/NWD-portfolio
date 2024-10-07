// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYX1234567890abcdefghijklmnopqrstuvwxyz"
const letters = "1234567890abcdefghijklmnopqrstuvwxyz"

export const matrixEffect = (event, itemText) => { 

  const element = event.target || event

  element.setAttribute("data-value", itemText || element.innerText)
  let iterations = 0
 const interval = setInterval(() => {
  element.innerText = element.innerText.split("")
  .map((letter, index) => {
    if(index < iterations){
      return element.dataset.value[index]
    }else {
    return letters[Math.floor(Math.random() * 26)]
    }
  }  
  )
  .join("")
  if(iterations>= element.dataset.value.length) clearInterval(interval)
  iterations += 1 / 4
 }, 10);
}