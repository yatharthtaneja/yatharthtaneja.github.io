 
  var scene, camera, renderer , controls;
  var zoom;
  let container;
  init();
  animate();
  function init() {
  container = document.querySelector(".Roblox");
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0B0C10);
    
    const fov = 400;
    const aspect = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far =4000;
  
    //Camera setup
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(500, 200, 1200);
    // camera.position.
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  
    container.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls(camera , renderer.domElement);
    // controls.enableZoom = false ;
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
    container.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('sports.glb', function(gltf){
      build = gltf.scene.children[0];
      build.scale.set(1.5,1.5,1.5);

        // console.log(zoom);
        // on zoom <= 1071 remove left tab;
      scene.add(gltf.scene);
      build.position.set(270,1,1);
      // animate();
    });
  }
  function animate() {
    requestAnimationFrame(animate);
    build.rotation.y += 0.005;
    zoom = controls.target.distanceTo( controls.object.position )
    var flag  = 1 ;
    if(zoom<=1071){
      $(".Roblox-info").css('opacity',0);
      // $(".remove-scroll").remove();
      flag=0;
    }
    if( zoom >1071)
    {
      // $(".remove-scroll").appendChild('<div class = "Roblox-info">   <h1 style="color: #66FCF1;"> Roblox </h1><p>Made Virtual campus of IIITD during the covid-19 pandemic on Roblox. Various events such as HuntIT - Treasure Hunt, Graduation Day, Cadence were conducted on this platform </p> <p><b>Team Size : 2 </b><p> <button href="#" class="button1"> <span >Visit Roblox</span><div></div></button></div>');
      // $(".remove-scroll").load($(this).data(".remove-scroll"))
      $(".Roblox-info").css('opacity',1);

    }
    renderer.render(scene,camera);
 
  }

  function onWindowResize(){
      camera.aspect = container.clientWidth/container.clientHeight;
      camera.updateProjectMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
  }  // init();
  window.addEventListener("resize", onWindowResize);