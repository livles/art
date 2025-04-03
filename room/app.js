import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
            import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

            // console.log(window.locat;ion.href);

            const camera = new THREE.PerspectiveCamera(10,window.innerWidth / window.innerHeight,0.1,1000);
            // camera.position.z = 13;
            camera.position.set(0, 2, 2); // Move the camera back

            
            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x404040);
            const loader = new GLTFLoader();
            loader.load('3droom.glb',
            function(gltf) {
                scene.add(gltf.scene);
            }, function(xhr) {},
            function (error) {}
        );
        
        const renderer = new THREE.WebGLRenderer({alpha:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.getElementById('container3D').appendChild(renderer.domElement);
        
        const reRender3D = () => {
            requestAnimationFrame(reRender3D);
            renderer.render(scene, camera);
        };
        reRender3D();

        // var loader = new GLTFLoader();
        // loader.load('3droom.glb', function (gltf) {
        //         room = gltf.scene;
        //         room.scale.set(2,2,2);
        //         room.position.y = 4;
        //         scene.add(room);
        // });