import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
//scene = container
// perspective camera mimicks how the human eye works

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// First Passthrough: Field of view 75||  Field of view - the amount of the world visible based on 360 degrees ||
// Second Passthrough: Aspect Ratio, based off users browser window (this is how to make a responsive site) inner width divided by inner height (easy formula"window.innerWidth / window.innerHeight")
// Third Passthrough: View Frustrum || controls which objects are visible relative to the camera distance. .01 to 1000 allows you to see pretty much everything.


const renderer = new THREE.WebGLRenderer({
//renders the graphics to the scene, requires DOM element (in this case the Canvas with the background tag 'BG')
 canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio (window.devicePixelRatio); //sets pixel ratio to whatever device is being used to view the page
renderer.setSize(window.innerWidth, window.innerHeight); // creates full screen canvas setting render size to window size
camera.position.setZ(30); // moves camera along Z axis


renderer.render(scene, camera); 
// renderer.setClearColor(0xeef34); - changes background color using Hex


const geometry = new THREE.TorusGeometry (10,3,16,100) // built in shapes with three.js, set paramaters to change shape
const material = new THREE.MeshStandardMaterial({color: 0xFF6347, }); 
// like wrapping paper for geometry shapes, images can be used as well for 'texture'
// ** some  materials (ex. THREE.MeshStandardMaterial)require a light source to bounce off of them for adequate visibility 
// ** Wireframe allows you to see the internals, like a house with no drywall
const torus = new THREE.Mesh(geometry, material); // MESH puts the geometry + material together to produce your object

function animate() {  //render.render(scene, camera) must be called again, it is easier to set up a recursive function with an infinite loop to complete this task
  requestAnimationFrame(animate); // continuously updating UI
  
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  
  
  renderer.render (scene, camera);
}  // also known as a GAME LOOP in gamaing development to keep the enviroment updating with new materials

animate() 




