console.log('JS connected')

function loadContent(id,file){
    fetch(file)
    .then(response => response.text())
    .then(data => {
        document.getElementById(id).innerHTML = data;

})
    .catch(e => {
        console.log('Failed to fetch file')
    })
}

// function renderThreeModel() {
//   const container = document.getElementById("three-container");

//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
//   const renderer = new THREE.WebGLRenderer({ alpha: true });

//   renderer.setSize(container.clientWidth, container.clientHeight);
//   container.appendChild(renderer.domElement);

//   // A simple rotating cube
//   const geometry = new THREE.BoxGeometry();
//   const material = new THREE.MeshStandardMaterial({ color: 0x0077ff });
//   const cube = new THREE.Mesh(geometry, material);
//   scene.add(cube);

//   // Lighting
//   const light = new THREE.PointLight(0xffffff, 1, 100);
//   light.position.set(10, 10, 10);
//   scene.add(light);

//   camera.position.z = 5;

//   function animate() {
//     requestAnimationFrame(animate);
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;
//     renderer.render(scene, camera);
//   }

//   animate();
// }




loadContent('hero','components/hero.html')
loadContent('about','components/about.html')
loadContent('projects','components/projects.html')
loadContent('contact','components/contact.html')