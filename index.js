let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");


// camera_button.addEventListener('click', async (e) =>{
//     const videoStream = await navigator.mediaDevices.getUserMedia({video : true});
//     video.srcObject = videoStream;
// })

// click_button.addEventListener('click',(e) =>{
//     canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//     const linkBtn = document.getElementById('link');
//     linkBtn.href =canvas.toDataURL();
//     linkBtn.click();
// })


// window.addEventListener('load',async(e) =>{
//     if(navigator){
//         const creds =  await navigator.credentials.get({password: true});
//         console.log(creds);
//     }
// })


window.addEventListener('load', async (e) =>{
    const unread = 30;
    if(navigator){
         console.log( await navigator.setAppBadge(unread))
    }
})
