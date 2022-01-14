import * as THREE from './three.js-master/build/three.module.js';
// import {OrbitControls} from './three.js-master/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from './three.js-master/examples/jsm/loaders/GLTFLoader.js';


  const canvas = document.querySelector('#g');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 10;
  const aspect = 2;
  const near = 0.1;
  const far = 50;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // camera.position.x=1;
  // camera.position.y=1;
  // camera.position.z=1;
  // camera.lookAt(2, 1, 1);
  // const controls = new OrbitControls(camera, canvas);
  // controls.target.set(0, 1, 0);
  // controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('black');

  {
    const color = 0xFFFFFF;
    const intensity = 2;
    const light = new THREE.SpotLight(color, intensity);
    light.position.set(1, 20, 20);
    scene.add(light);
    scene.add(light.target);
  }

  // {
  //   const planeSize = 5;

  //   const loader = new THREE.TextureLoader();
  //   const texture = loader.load('https://threejs.org/manual/examples/resources/images/checker.png');
  //   texture.wrapS = THREE.RepeatWrapping;
  //   texture.wrapT = THREE.RepeatWrapping;
  //   texture.magFilter = THREE.NearestFilter;
  //   const repeats = planeSize / 200;
  //   texture.repeat.set(repeats, repeats);

  //   const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
  //   const planeMat = new THREE.MeshPhongMaterial({
  //     map: texture,
  //     side: THREE.DoubleSide,
  //   });
  //   const mesh = new THREE.Mesh(planeGeo, planeMat);
  //   mesh.rotation.x = Math.PI * -.5;
  //   scene.add(mesh);
  // }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    camera.near = boxSize / 10;
    camera.far = boxSize * 10;

    camera.updateProjectionMatrix();

    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  // {
  //   const loader = new THREE.TextureLoader();
  //   const texture = loader.load(
  //     'black',
  //     () => {
  //       const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
  //       rt.fromEquirectangularTexture(renderer, texture);
  //       scene.background = rt.texture;
  //     });
  // }

  const cars = [];

    // let white11 =document.getElementById('white');
    // let silver11 =document.getElementById('silver');
    // let black11 =document.getElementById('black');
    // let blue11 =document.getElementById('blue');
    // let red11 =document.getElementById('red');

    // black11.addEventListener('click', function(){
    //   gltfLoader.load('./three.js-master/red.gltf', (gltf) => {
    //     root = gltf.scene;
    //     scene.add(root);
  
    //     const box = new THREE.Box3().setFromObject(root);
  
    //     const boxSize = box.getSize(new THREE.Vector3()).length();
    //     const boxCenter = box.getCenter(new THREE.Vector3());
  
    //     frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
    //     console.log(root);
    //   });
    // })

    let root;
    const gltfLoader = new GLTFLoader();

    gltfLoader.load('./three.js-master/blue.gltf', (gltf) => {
      root = gltf.scene;
      scene.add(root);

      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);
      console.log(root);
    });
  

  

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time) {
    time *= 0.001;  // convert to seconds

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);


function updateCamera(ev) {
  root.rotation.y = 0+window.scrollY/500;
  // var scrollY = window.scrollY;
  // console.log(scrollY);
}

window.addEventListener("scroll", updateCamera);