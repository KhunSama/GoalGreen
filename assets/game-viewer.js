import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OutlineEffect } from 'three/examples/jsm/effects/OutlineEffect.js';

function displayGLTFModel1(containerClass, modelPath) {
    const container = document.querySelector(`.${containerClass}`);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.domElement);

    const effect = new OutlineEffect(renderer, {
        edgeStrength: 3,
        edgeThickness: 1.2,
        visibleEdgeColor: '#000000',
        hiddenEdgeColor: '#000000'
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    loader.load(
        modelPath,
        (gltf) => {
            const model = gltf.scene;
            model.scale.set(1.5, 1.5, 1.5);
            scene.add(model);
            animate();
        },
        undefined,
        (error) => {
            console.error('Error loading GLTF model:', error);
        }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        effect.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        const width = container.offsetWidth;
        const height = container.offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });
}

displayGLTFModel1('model-game1', 'Recycle_Bin.glb');
displayGLTFModel1('model-game2', 'Recycle_Bin.glb');
displayGLTFModel1('model-game3', 'Recycle_Bin.glb');