function shout(string) {
    return string.toUpperCase()
}
function whisper(string) {
    return string.toLowerCase()
}
function logShout(string) {
    console.log(string.toUpperCase())
}
function logWhisper(string) {
    console.log(string.toLowerCase())
}
function sayHiToHeadphonedRoommate (string) {
    let Uppercase = string.toUpperCase()
    let lowerCase = string.toLowerCase()
    if (string === Uppercase) {
        return "YES INDEED!"        
    }
    else if(string === lowerCase) {
        return "I can\'t hear you!"
    }
    else if (string === "Let's have dinner together!") {
        return "I would love to!"
    }
}