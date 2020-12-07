const videoElement = document.getElementById("video")
const button = document.getElementById("button")


// prompt to select media stream, pass to video element, then play
// using async function 
async function selectMediaStream(){
try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
        videoElement.play()
    }

}catch(error){
    // catch Error Here 

}
}

// Event listener
button.addEventListener("click", async() => {
    // Disable the button
    button.disabled = true

    // start picture in picture
    await videoElement.requestPictureInPicture()

    // Reset the button
    button.disabled = false
})

// On load
selectMediaStream()