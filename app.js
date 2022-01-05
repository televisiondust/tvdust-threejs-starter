/// <reference path='ref/index.d.ts'/>

import {
	OrbitControls
} from './controls/OrbitControls.js';

let t = 1;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
	preserveDrawingBuffer: true,
	antialias: true
});

renderer.autoClearColor = false;
renderer.clear();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial();
const light = new THREE.DirectionalLight(0xff2fff, 2);
const lightfill = new THREE.DirectionalLight(0x00ffff, 1);
// lightfill.position = new THREE.Vector3(-1,-2,-1);
lightfill.position.set(-1, -2, -1);
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
scene.add(light);
scene.add(lightfill);
camera.position.z = 5;
controls.update();

function animate() {
	requestAnimationFrame(animate);
	t += 0.01;
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	cube.scale.x = Math.sin(t) * 10;

	controls.update();

	renderer.render(scene, camera);
};

animate();