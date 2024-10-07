import * as THREE from 'https://unpkg.com/three@0.168.0/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.168.0/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.168.0/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/UnrealBloomPass.js';

import { ShaderPass } from 'https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/ShaderPass.js';

const Mustang3D = document.getElementById('mustang');
const divtest = document.getElementById("testo");

// Fonction pour redimensionner le canvas de la Mustang
function resizeMustang() {
    Mustang3D.width = divtest.clientWidth;
    Mustang3D.height = divtest.clientHeight;
}

resizeMustang();
window.addEventListener('resize', resizeMustang);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, divtest.clientWidth / divtest.clientHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ Mustang3D, antialias: true });
renderer.setClearColor(0x1C1C1C, 1); // La couleur de fond est définie ici
renderer.setSize(divtest.clientWidth, divtest.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
divtest.appendChild(renderer.domElement);
// document.body.appendChild(renderer.domElement);

import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

const exrLoader = new EXRLoader();
exrLoader.load('wildflower_field_4k.exr', function (texture) {
    const envMap = pmremGenerator.fromEquirectangular(texture).texture;
    texture.dispose();
    pmremGenerator.dispose(); // Optionnel : Libère de la mémoire après génération
    renderer.toneMapping = THREE.ACESFilmicToneMapping;  // Choix de ToneMapping
    renderer.toneMappingExposure = 0.5;  // Vous pouvez ajuster cette valeur

    // Applique la map HDRI à la scène
    scene.environment = envMap;
    scene.background = new THREE.Color(0x444444);
});


// Orbit Controls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(-2, 2, 4);
controls.minDistance = 4;
controls.maxDistance = 6;
controls.enablePan = false;
// controls.enableZoom = false;
controls.update();

// // Grid Helper
const gridHelper = new THREE.GridHelper(100, 100, 0xff0000);
scene.add(gridHelper);

// GLTF Loader
const loader = new GLTFLoader();

loader.load("/mustang.glb", function (gltf) {
    const mesh = gltf.scene;

    // Applique une rotation et ajoute le modèle à la scène
    mesh.rotation.y = -Math.PI / 2;
    mesh.position.set(0, -0.1, 0);
    scene.add(mesh);

    // Active les animations
    // if (gltf.animations && gltf.animations.length) {
    //     mixer = new THREE.AnimationMixer(mesh);
    //     gltf.animations.forEach((clip) => {
    //         const action = mixer.clipAction(clip);
    //         setTimeout(() => {
    //         action.play(); // Démarre l'animation après le délai
    //     }, animationDelay);
    //     });
    // }
}, undefined, function (error) {
    console.error(error);
});

// Ajouter de la lumière
// const light = new THREE.PointLight(0xffffff, 100, 100);
// light.position.set(0, 5, 0);
// scene.add(light);

// Configurer l'effet de bloom
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5, // intensity
    1, // radius
    1 // threshold
);

// Composer de post-processing
const composer = new EffectComposer(renderer);
composer.addPass(renderScene);
composer.addPass(bloomPass);

// Fonction d'animation
function animate() {
    requestAnimationFrame(animate);

    // Rendre d'abord l'environnement
    renderer.clear(); // Nettoyer le rendu précédent
    renderer.render(scene, camera); // Rendre la scène sans effets de bloom

    // Rendre la scène avec effet de bloom
    composer.render(); // Utiliser composer pour le rendu
}

animate();


// const light = new THREE.PointLight(0xeeeeee);
// scene.add(light);
// light.position.set(0, 0, 3);
