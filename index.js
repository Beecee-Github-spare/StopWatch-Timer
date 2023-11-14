const minutesLabel = document.getElementById('minutes')
const secondsLabel = document.getElementById('seconds')
const millisecondsLabel = document.getElementById('milliseconds')

const startButton = document.getElementById('startbtn')
const stopButton = document.getElementById('stopbtn')
const pauseButton = document.getElementById('pausebtn')
const resetButton = document.getElementById('resetbtn')

const lapList = document.getElementById('laplist')

let milliseconds = 0
let seconds = 0
let minutes = 0
let interval

function startTimer(){

    interval = setInterval(updateTimer,10)
    startButton.disabled = true
    console.log('Clicked')
    updateTimer()
}

function stopTimer(){

    clearInterval(interval)
    addToLapList()
    resetTimerData()
    startButton.disabled = false
}

function pauseTimer(){
    clearInterval(interval)
    startButton.disabled = false
}

function resetTimer(){
    clearInterval(interval)
    resetTimerData();
    startButton.disabled = false
}

function updateTimer(){
    milliseconds++
    if(milliseconds === 100){
        seconds++
        milliseconds = 0
        if(seconds === 60){
            seconds = 0
            minutes++
        }
    }

    displayTimer()
    
}

function displayTimer(){
    millisecondsLabel.innerText = padTime(milliseconds)
    secondsLabel.innerText = padTime(seconds)
    minutesLabel.innerText = padTime(minutes)
}

function padTime(time){
    return time.toString().padStart(2,'0')
}

function resetTimerData(){
    milliseconds = 0
    seconds = 0
    minutes = 0
    displayTimer()
}

function addToLapList(){
    const laptime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`

    const listitem = document.createElement('li')
    listitem.innerHTML = `<span>Lap ${laplist.childElementCount + 1}: </span> ${laptime}`

    lapList.appendChild(listitem)
}

startButton.addEventListener('click', startTimer)
stopButton.addEventListener('click', stopTimer)
pauseButton.addEventListener('click', pauseTimer)
resetButton.addEventListener('click', resetTimer)
