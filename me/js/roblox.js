
let build;

const scene = new THREE.Scene();
const loader = new THREE.GLTFLoader();
let container;
loader.load( 'img/sports.glb', function ( gltf ) {
     build = gltf.scene.children[0];
    build.scale.set(2,2,2);

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
// scene.background = new THREE.Color(0x282c34);
const camera = new THREE.PerspectiveCamera(400, 2, 0.1, 10000);
camera.position.set(500,200,1200);
// camera.zoom = 0.1;
const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize(800, 400);
renderer.setClearColor( 0x000000, 0 );
container = document.getElementById('sketch-container').appendChild(renderer.domElement);

var controls = new THREE.OrbitControls(camera , renderer.domElement);
controls.addEventListener('change', renderer);
controls.enableZoom=false;

const frontSpot = new THREE.SpotLight(0xeeeece);
frontSpot.position.set(1000, 1000, 1000);
scene.add(frontSpot);

const frontSpot2 = new THREE.SpotLight(0xddddce);
frontSpot2.position.set(-500, -500, -500);
scene.add(frontSpot2);
const hlight = new THREE.AmbientLight (0x3d3d3d,7);
    scene.add(hlight);
  const  directionalLight = new THREE.DirectionalLight(0x3d3d3d,10);
    directionalLight.position.set(0.5,0.5,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
   const  light = new THREE.PointLight(0x3d3d3d,10);
    light.position.set(0,1,1);
    scene.add(light);
const animate = function () {
  requestAnimationFrame(animate);

    build.rotation.y += 0.005;

  renderer.render(scene, camera);
};

animate();