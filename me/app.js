 
  var scene, camera, renderer , controls;
  init();
  animate();
  function init() {
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild( renderer.domElement );

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    


    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;
    controls = new THREE.OrbitControls(camera , renderer.domElement);
    //lights 
    hlight = new THREE.AmbientLight (0x3d3d3d,7);
    scene.add(hlight);
    directionalLight = new THREE.DirectionalLight(0x3d3d3d,10);
    directionalLight.position.set(0.5,0.5,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    light = new THREE.PointLight(0x3d3d3d,10);
    light.position.set(0,1,1);
    scene.add(light);

    controls.addEventListener('change', renderer);
    document.body.appendChild(renderer.domElement);
    let loader = new THREE.GLTFLoader();
    loader.load('sports.glb', function(gltf){
      build = gltf.scene.children[0];
      build.scale.set(1.5,1.5,1.5);
      scene.add(gltf.scene);
      // animate();
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
 
  }
  // init();