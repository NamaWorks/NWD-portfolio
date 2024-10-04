// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYX1234567890abcdefghijklmnopqrstuvwxyz"
const letters = "1234567890abcdefghijklmnopqrstuvwxyz"

export const matrixEffect = (event, itemText) => {
  event.target.setAttribute("data-value", itemText || event.target.innerText)
  let iterations = 0
 const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("")
  .map((letter, index) => {
    if(index < iterations){
      return event.target.dataset.value[index]
    }else {
    return letters[Math.floor(Math.random() * 26)]
    }
  }  
  )
  .join("")
  if(iterations>= event.target.dataset.value.length) clearInterval(interval)
  iterations += 1 / 4
 }, 10);
}