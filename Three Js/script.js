const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
scene.add(camera);


const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);


const canvas = document.querySelector("#draw");
const renderer = new THREE.WebGLRenderer({ canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

let clock = new THREE.Clock();
function animate() {
  window.requestAnimationFrame(animate);
  renderer.render(scene, camera);
  cube.rotation.x = clock.getElapsedTime();
}

animate();
