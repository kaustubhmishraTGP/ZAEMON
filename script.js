/* Minecraft animated background */

const canvas = document.getElementById("mc-bg")

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
)

const renderer = new THREE.WebGLRenderer({canvas:canvas})

renderer.setSize(window.innerWidth,window.innerHeight)

camera.position.set(0,4,8)



const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(5,10,5)
scene.add(light)



const loader = new THREE.TextureLoader()

const grass = loader.load("https://i.imgur.com/8yKXsgF.png")

const material = new THREE.MeshLambertMaterial({map:grass})



for(let x=-15;x<=15;x++){

for(let z=-15;z<=15;z++){

const block = new THREE.Mesh(
new THREE.BoxGeometry(1,1,1),
material
)

block.position.set(x,-1,z)

scene.add(block)

}

}



function animate(){

requestAnimationFrame(animate)

camera.position.x = Math.sin(Date.now()*0.0003)*10

camera.lookAt(0,0,0)

renderer.render(scene,camera)

}

animate()



/* Minecraft player */

const playerCanvas = document.getElementById("mc-player")

const viewer = new skinview3d.SkinViewer({
canvas: playerCanvas,
width: 220,
height: 300,
skin: "images/skin.png"
})

viewer.animation = new skinview3d.WalkingAnimation()



playerCanvas.addEventListener("click",()=>{

viewer.animation = new skinview3d.SwingAnimation()

setTimeout(()=>{
viewer.animation = new skinview3d.WalkingAnimation()
},800)

})



/* auto videos */

async function loadVideos(){

const res=await fetch(
"https://yt.lemnoslife.com/noKey/search?part=snippet&channelId=UCmGQrmdnM5uyknkDQt1YNzw&maxResults=6&order=date"
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
