const timeElement = document.getElementById("time")
const dayOfWeekElement = document.getElementById("day")

const date = new Date ();

let day = date.getDay()


const newArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

console.log(newArr[day])

setInterval(()=>{
    timeElement.innerHTML = new Date().toUTCString()
    const dayOfWeek = new Date().getDay()
    dayOfWeekElement.innerHTML = newArr[dayOfWeek]

}, 1000)




