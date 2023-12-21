import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 1400);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(0, 0, 500);
renderer.render(scene, camera);

// Load textures mapping (โหลดรูปดาว)
const textures = {
  earth: new THREE.TextureLoader().load('earth.jpg'),
  moon: new THREE.TextureLoader().load('moon.jpg'),
  venus: new THREE.TextureLoader().load('venus.jpg'),
  mercury: new THREE.TextureLoader().load('mercury.jpg'),
  sun: new THREE.TextureLoader().load('sun.jpg'),
  mars: new THREE.TextureLoader().load('mars.jpg'),
  jupiter: new THREE.TextureLoader().load('jupiter.jpg'),
  saturn: new THREE.TextureLoader().load('saturn.jpg'),
  ring: new THREE.TextureLoader().load('rings.jpg'),
  uranus: new THREE.TextureLoader().load('uranus.jpg'),
  neptune: new THREE.TextureLoader().load('neptune.jpg'),
  pluto: new THREE.TextureLoader().load('pluto.jpg'),
  space: new THREE.TextureLoader().load('space.jpg'),
};

// Function to create a planet with orbit (ฟังก์ชันสร้างดาวที่มีการโคจรรอบดวงอาทิตย์)
function createPlanetWithOrbit(radius, texture, orbitRadius, orbitSpeed) {
  function createPlanet() {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const planet = new THREE.Mesh(geometry, material);
    planet.orbitRadius = orbitRadius;
    planet.orbitSpeed = orbitSpeed;
    return planet;
  }

  const planet = createPlanet();

  // Create orbit line (สร้างเส้นโคจร)
  const orbitLineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    opacity: 0.5,
    transparent: true,
  });

  const orbitLineGeometry = new THREE.BufferGeometry().setFromPoints(getOrbitPoints(orbitRadius));
  const orbitLine = new THREE.Line(orbitLineGeometry, orbitLineMaterial);
  scene.add(orbitLine);
  orbitLine.add(planet);

  return planet;
}


// Function to get points for orbit circle (กำหนดขนาดเส้นโคจร)
function getOrbitPoints(radius, segments = 64) {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const theta = (i / segments) * Math.PI * 2;
    const x = radius * Math.cos(theta);
    const z = radius * Math.sin(theta);
    points.push(new THREE.Vector3(x, 0, z));
  }
  return points;
}

// create planets and sun (สร้างดวงดาวกับดวงอาทิตย์)
const sunSphere = createPlanetWithOrbit(50, textures.sun, 0, 0);
const earthSphere = createPlanetWithOrbit(10, textures.earth, 200, 0.8);
const moonSphere = createPlanetWithOrbit(1, textures.moon, 30, 0.8);
scene.add(earthSphere);
earthSphere.add(moonSphere);
const planetsData = [
  { radius: 6, texture: textures.venus, orbitRadius: 150, orbitSpeed: 1.5 },
  { radius: 4, texture: textures.mercury, orbitRadius: 100, orbitSpeed: 3 },
  { radius: 8, texture: textures.mars, orbitRadius: 300, orbitSpeed: 0.66 },
  { radius: 25, texture: textures.jupiter, orbitRadius: 400, orbitSpeed: 0.42 },
  { radius: 20, texture: textures.saturn, orbitRadius: 500, orbitSpeed: 0.38 },
  { radius: 15, texture: textures.uranus, orbitRadius: 600, orbitSpeed: 0.32 },
  { radius: 18, texture: textures.neptune, orbitRadius: 700, orbitSpeed: 0.25 },
  { radius: 3, texture: textures.pluto, orbitRadius: 750, orbitSpeed: 0.2 },
  { radius: 10, texture: textures.earth, orbitRadius: 200, orbitSpeed: 1 },
  { radius: 1, texture: textures.moon, orbitRadius: 30, orbitSpeed: 1 },
];

const planets = planetsData.map(data => createPlanetWithOrbit(data.radius, data.texture, data.orbitRadius, data.orbitSpeed));

// saturn ring (สร้างวงแหวนดาวเสาร์)
const ringGeometry = new THREE.RingGeometry(25, 40, 64);
const ringMaterial = new THREE.MeshBasicMaterial({ map: textures.ring, side: THREE.DoubleSide });
const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
ringMesh.rotation.x = Math.PI * 0.25;
planets[4].add(ringMesh); // adding the ring to Saturn
planets[8].add(planets[9]);
// Lights and controls (แสง)
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 0);
pointLight.intensity = 50;

const ambientLight = new THREE.AmbientLight(0x404040, 25);
scene.add(pointLight, ambientLight);

// Enable camera movement using mouse (ขยับกล้องด้วยเมาส์)
const controls = new OrbitControls(camera, renderer.domElement);

//  Create star in the solar system (สร้างดวงดาวจุดเล็กๆรอบระบบสุริยะ)
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 16, 16);
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(900));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(250).fill().forEach(addStar);

// Background and resize handling (พื้นหลัง)
scene.background = new THREE.Color(0x000000);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Settings the camera to be near Bird's eye viewpoint (กำหนดมุมกล้องให้อยู่คล้ายมุมมองบน)
const birdEyeButton = document.getElementById('bird');
const birdEyePosition = new THREE.Vector3(0, 700, 500);
const rotationeyeButton = new THREE.Euler(0,Math.PI / 2, 0);

birdEyeButton.addEventListener('click', () => {
  camera.position.copy(birdEyePosition);
  camera.rotation.copy(rotationeyeButton);
});

// Animate function (อนิเมชั่นลูปเพื่อหมุนและโคจรดวงดาว)
function animate() {
  requestAnimationFrame(animate);

  planets.forEach(body => {
    body.rotation.x += 0.005;
    body.rotation.y += 0.005;
  });
  const time = performance.now() * 0.0001;

  planets.forEach(body => {
    body.position.x = Math.cos(time * body.orbitSpeed) * body.orbitRadius;
    body.position.z = -Math.sin(time * body.orbitSpeed) * body.orbitRadius;
  });

  controls.update();
  renderer.render(scene, camera);

  console.log('Camera X:', camera.position.x);
console.log('Camera Y:', camera.position.y);
console.log('Camera Z:', camera.position.z);
console.log('Camera Rotation:', camera.rotation.x, camera.rotation.y, camera.rotation.z);
console.log('Camera Zoom:', camera.zoom);
}



animate();


