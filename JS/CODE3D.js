async function loadModules() {
    // Importer THREE
    const THREE = await import('https://unpkg.com/three@0.168.0/build/three.module.js');
    console.log(THREE, "THREE");

    // Importer GLTFLoader
    const { GLTFLoader } = await import('https://unpkg.com/three@0.168.0/examples/jsm/loaders/GLTFLoader.js');
    console.log(GLTFLoader, "GLTFLoader");

    // Importer OrbitControls
    const { OrbitControls } = await import('https://unpkg.com/three@0.168.0/examples/jsm/controls/OrbitControls.js');
    console.log(OrbitControls, "OrbitControls");

    // Importer EffectComposer
    const { EffectComposer } = await import('https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/EffectComposer.js');
    console.log(EffectComposer, "EffectComposer");

    // Importer RenderPass
    const { RenderPass } = await import('https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/RenderPass.js');
    console.log(RenderPass, "RenderPass");

    // Importer UnrealBloomPass
    const { UnrealBloomPass } = await import('https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/UnrealBloomPass.js');
    console.log(UnrealBloomPass, "UnrealBloomPass");

    // Importer ShaderPass
    const { ShaderPass } = await import('https://unpkg.com/three@0.168.0/examples/jsm/postprocessing/ShaderPass.js');
    console.log(ShaderPass, "ShaderPass");
}

// Appeler la fonction pour charger les modules
loadModules().catch(err => console.error('Erreur lors du chargement des modules :', err));

// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.168.0/build/three.module.js';
// console.log(THREE, "THREE");
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/loaders/GLTFLoader.js';
// console.log(GLTFLoader, "GLTFLoader");
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/controls/OrbitControls.js';
// console.log(OrbitControls, "OrbitControls");
// import { EffectComposer } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/postprocessing/EffectComposer.js';
// console.log(EffectComposer, "EffectComposer");
// import { RenderPass } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/postprocessing/RenderPass.js';
// console.log(RenderPass, "RenderPass");
// import { UnrealBloomPass } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/postprocessing/UnrealBloomPass.js';
// console.log(UnrealBloomPass, "UnrealBloomPass");
// import { ShaderPass } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/postprocessing/ShaderPass.js';
// console.log(ShaderPass, "ShaderPass");
// const KirschShader = {
//     uniforms: {
//         'tDiffuse': { value: null },
//         'resolution': { value: new THREE.Vector2() }
//     },
//     vertexShader: `
//         varying vec2 vUv;
//         void main() {
//             vUv = uv;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//     `,
//     fragmentShader: `
//         varying vec2 vUv;
//         uniform sampler2D tDiffuse;
//         uniform vec2 resolution;

//         // Noyaux de convolution Kirsch
//         mat3 kirschKernelX = mat3(
//             5.0,  5.0,  5.0,
//             -3.0,  0.0, -3.0,
//             -3.0, -3.0, -3.0
//         );

//         mat3 kirschKernelY = mat3(
//             5.0, -3.0, -3.0,
//             5.0,  0.0, -3.0,
//             5.0, -3.0, -3.0
//         );

//         // Applique le filtre Kirsch dans une direction donnée
//         float applyKirsch(mat3 kernel, vec2 uv, vec2 texelSize) {
//             float edge = 0.0;
//             for (int i = -1; i <= 1; i++) {
//                 for (int j = -1; j <= 1; j++) {
//                     vec2 offset = texelSize * vec2(float(i), float(j));
//                     vec4 color = texture2D(tDiffuse, uv + offset);
//                     edge += kernel[i + 1][j + 1] * color.r;
//                 }
//             }
//             return edge;
//         }

//         void main() {
//             vec2 texelSize = 0.2 / resolution;
            
//             // Applique le filtre dans les deux directions principales
//             float edgeX = applyKirsch(kirschKernelX, vUv, texelSize);
//             float edgeY = applyKirsch(kirschKernelY, vUv, texelSize);

//             // Combine les résultats pour obtenir les contours
//             float edge = sqrt(edgeX * edgeX + edgeY * edgeY);
            
//             // Récupère la couleur d'origine
//             vec4 originalColor = texture2D(tDiffuse, vUv);

//             // Couleur de contour : orange
//             vec3 edgeColor = vec3(1.0, 0.5, 0.0); // Orange
            
//             // Ajuster l'intensité des contours
//             float intensity = clamp(edge, 0.0, 0.4);

//             // Mélanger l'original avec la couleur de contour
//             vec3 finalColor = mix(originalColor.rgb, edgeColor, intensity); // Mélange entre original et orange
            
//             // Appliquer un effet de dégradé vers le noir
//             finalColor *= (0.2 + intensity); // Assombrit le centre

//             // Appliquer un filtre pour que les zones intenses soient plus lumineuses
//             finalColor += edgeColor * intensity * 0.5; // Ajouter un peu de l'orange aux bords
            
//             gl_FragColor = vec4(finalColor, originalColor.a);
//         }
//     `
// };

// const canvas = document.getElementById("canvas"); // Canvas du loader

// // Fonction pour redimensionner le canvas du loader
// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }

// resizeCanvas();
// window.addEventListener('resize', resizeCanvas);

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
// renderer.setClearColor(0x1C1C1C, 1); // La couleur de fond est définie ici
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Orbit Controls
// // const controls = new OrbitControls(camera, renderer.domElement);
// camera.position.set(0, 0, 9);
// // controls.update();

// // // Grid Helper
// // const gridHelper = new THREE.GridHelper(100, 100, 0xff0000);
// // scene.add(gridHelper);

// // GLTF Loader
// const loader = new GLTFLoader();
// const animationDelay = 300;
// let mixer;

// loader.load("/Code3D.glb", function (gltf) {
//     const mesh = gltf.scene;

//     // Applique une rotation et ajoute le modèle à la scène
//     mesh.rotation.y = -Math.PI / 2;
//     mesh.position.set(-0.2, 0, 0);
//     scene.add(mesh);

//     if (!gltf.animations.length) {
//         console.warn('Le modèle GLTF ne contient aucune animation.');
//     }
//     // Active les animations
//     if (gltf.animations && gltf.animations.length) {
//         console.log("verif")
//         mixer = new THREE.AnimationMixer(mesh);
//         gltf.animations.forEach((clip) => {
//             const action = mixer.clipAction(clip);
//             setTimeout(() => {
//                 action.timeScale = 0.6; // Ralentit l'animation par 2
//                 action.play(); // Démarre l'animation après le délai
//             }, animationDelay);
//         });
//     }
// }, undefined, function (error) {
//     console.error(error);
// });

// // Ajouter de la lumière
// const light = new THREE.PointLight(0xffffff, 1, 100);
// light.position.set(10, 10, 10);
// scene.add(light);

// // Configurer l'effet de bloom
// const renderScene = new RenderPass(scene, camera);
// const bloomPass = new UnrealBloomPass(
//     new THREE.Vector2(window.innerWidth, window.innerHeight),
//     0.6, // intensity
//     1, // radius
//     0 // threshold
// );

// const kirschPass = new ShaderPass(KirschShader);
// kirschPass.uniforms['resolution'].value.set(window.innerWidth, window.innerHeight);


// // Composer de post-processing
// const composer = new EffectComposer(renderer);
// composer.addPass(renderScene);
// composer.addPass(bloomPass);
// composer.addPass(kirschPass);

// // Fonction d'animation
// function animate() {
//     requestAnimationFrame(animate);

//     // Mise à jour du mixer d'animations (si présent)
//     if (mixer) mixer.update(0.01);

//     // Utilisation du composer pour le rendu avec l'effet de bloom
//     composer.render();
//     // controls.update();
//     console.log("base")
// }

// animate();


// // const light = new THREE.PointLight(0xeeeeee);
// // scene.add(light);
// // light.position.set(0, 0, 3);
