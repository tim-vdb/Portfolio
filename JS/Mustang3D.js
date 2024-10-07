import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.156.0/build/three.module.js';
console.log(THREE, "THREE");
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.156.0/examples/jsm/loaders/GLTFLoader.js';
console.log(GLTFLoader, "GLTFLoader");
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.156.0/examples/jsm/controls/OrbitControls.js';
console.log(OrbitControls, "OrbitControls");
import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.156.0/examples/jsm/postprocessing/EffectComposer.js';
console.log(EffectComposer, "EffectComposer");
import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.156.0/examples/jsm/postprocessing/RenderPass.js';
console.log(RenderPass, "RenderPass");
import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.156.0/examples/jsm/postprocessing/UnrealBloomPass.js';
console.log(UnrealBloomPass, "UnrealBloomPass");
import { ShaderPass } from 'https://cdn.jsdelivr.net/npm/three@0.156.0/examples/jsm/postprocessing/ShaderPass.js';
console.log(ShaderPass, "ShaderPass");
import { RGBELoader } from 'https://cdn.jsdelivr.net/npm/three@0.156.0/examples/jsm/loaders/RGBELoader.js'; // Remplacer EXRLoader par RGBELoader
console.log(RGBELoader, "RGBELoader");

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

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

// Remplacer EXRLoader par RGBELoader pour charger un fichier HDR
const rgbeLoader = new RGBELoader();
rgbeLoader.load('./public/wildflower_field_4k.hdr', function (texture) {
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
controls.update();

// Grid Helper
const gridHelper = new THREE.GridHelper(100, 100, 0xff0000);
scene.add(gridHelper);

// GLTF Loader
const loader = new GLTFLoader();

loader.load("./public/mustang.glb", function (gltf) {
    const mesh = gltf.scene;

    // Applique une rotation et ajoute le modèle à la scène
    mesh.rotation.y = -Math.PI / 2;
    mesh.position.set(0, -0.1, 0);
    scene.add(mesh);

}, undefined, function (error) {
    console.error(error);
});

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
