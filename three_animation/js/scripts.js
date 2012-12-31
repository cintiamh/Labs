// set the scene size
var WIDTH = 800,
    HEIGHT = 600;

// set some camera attributes
var VIEW_ANGLE = 45,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 1,
    FAR = 10000;

var container = $('#canvas');

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
var scene = new THREE.Scene();

scene.add(camera);
camera.position.z = 300;
renderer.setSize(WIDTH, HEIGHT);
container.append(renderer.domElement);

var cube = new THREE.Mesh(
    new THREE.CubeGeometry(50, 50, 50),
    new THREE.MeshLambertMaterial({color: 0xCC0000})
);
scene.add(cube);

planeGeo = new THREE.PlaneGeometry(300, 200, 10, 10);
planeMat = new THREE.MeshLambertMaterial({color:0xFFFFFF});
plane = new THREE.Mesh(planeGeo, planeMat);
plane.rotation.x = -Math.PI/2;
plane.position.y = -25;
plane.receiveShadow = true;
scene.add(plane);

var radius = 25,
    segments = 16,
    rings = 16;

var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(radius, segments, rings),
    sphereMaterial
);
sphere.position.y = 50;
scene.add(sphere);

var pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 0;
pointLight.position.y = 100;
pointLight.position.z = 130;

scene.add(pointLight);

renderer.render(scene, camera);


function animate(t) {

    sphere.position.x = Math.cos(t/600) * 85;
    sphere.position.y = 60 - Math.sin(t/900) * 25;
    sphere.position.z = Math.sin(t/600) * 85;
    sphere.rotation.x = t/500;
    sphere.rotation.y = t/800;

    camera.position.x = Math.sin(t/1000) * 300;
    camera.position.y = 150;
    camera.position.z = Math.cos(t/1000) * 300;

    camera.lookAt(scene.position);

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate, renderer.domElement);
}

animate(new Date().getTime());
