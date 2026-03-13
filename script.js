async function loadVideos(){

const channelID="UCmGQrmdnM5uyknkDQt1YNzw"

const res=await fetch(
`https://yt.lemnoslife.com/noKey/search?part=snippet&channelId=${channelID}&maxResults=6&order=date`
)

const data=await res.json()

const container=document.getElementById("video-container")

data.items.forEach(v=>{

const thumb=v.snippet.thumbnails.medium.url
const id=v.id.videoId

const img=document.createElement("img")

img.src=thumb

img.onclick=()=>{
window.open("https://youtube.com/watch?v="+id)
}

container.appendChild(img)

})

}

loadVideos()



async function getSubs(){

try{

const res=await fetch(
"https://api.socialcounts.org/youtube-live-subscriber-count/UCmGQrmdnM5uyknkDQt1YNzw"
)

const data=await res.json()

document.getElementById("subs").innerText=data.est_sub

}

catch{

document.getElementById("subs").innerText="12.9K+"

}

}

getSubs()



/* Minecraft player */

const viewer = new skinview3d.SkinViewer({

canvas: document.createElement("canvas"),
width: 300,
height: 400,
skin: "images/skin.png"

})

document.getElementById("player-viewer").appendChild(viewer.canvas)

viewer.controls.enableRotate = true
viewer.controls.enableZoom = true

viewer.animation = new skinview3d.WalkingAnimation()

viewer.canvas.addEventListener("click", () => {

viewer.animation = new skinview3d.SwingAnimation()

setTimeout(() => {

viewer.animation = new skinview3d.WalkingAnimation()

}, 800)

})
