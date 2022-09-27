/*geometria*/
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xB1E128);

var loader = new THREE.TextureLoader();
loader.load('./images/images.jpg', function(texture) {
    scene.background = texture;
})
/*camara*/
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
//policia
const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load('../images/personaje/policia.gltf',
(gltf) =>{
        var loaderObjeto = gltf.scene;
        loaderObjeto.scale.set(25,25,25);

        loaderObjeto.position.x = -11;
        loaderObjeto.position.y = -50;
        loaderObjeto.position.z = 1;
        scene.add(loaderObjeto);
        console.log('carga completa');
        //Dragcontrols
 let objects = [loaderObjeto]

 const DragControls = new THREE.DragControls( objects, camera, renderer.domElement );
 DragControls.enabled = true;
 
 DragControls.deactivate();
 DragControls.activate();
 
 DragControls.addEventListener("hoveron", function (event){
 
     //console.log.apply(event.object)
     //event.object.material.wireframe = true;
     event.object.scale.y *=2;
 });
 
 DragControls.addEventListener("hoveroff", function (event){
 
     //console.log.apply(event.object)
      //event.object.material.wireframe = false;
      event.object.scale.y /=2;
  });
  //fin Dragcontrols


}, ()=> {
    console.log('cargando');
}, ()=> {
    console.log('error');
}

);
gltfLoader.load('../images/basura/basurero.gltf',
(gltf) =>{
        var loaderObjeto2 = gltf.scene;
        loaderObjeto2.scale.set(25,25,25);

        loaderObjeto2.position.x = 31;
        loaderObjeto2.position.y = -50;
        loaderObjeto2.position.z = 1;
        scene.add(loaderObjeto2);
        console.log('carga completa');
        //Dragcontrols
 let objects = [loaderObjeto2]

 const DragControls = new THREE.DragControls( objects, camera, renderer.domElement );
 DragControls.enabled = true;
 
 DragControls.deactivate();
 DragControls.activate();
 
 DragControls.addEventListener("hoveron", function (event){
 
     //console.log.apply(event.object)
     //event.object.material.wireframe = true;
     event.object.scale.y *=2;
 });
 
 DragControls.addEventListener("hoveroff", function (event){
 
     //console.log.apply(event.object)
      //event.object.material.wireframe = false;
      event.object.scale.y /=2;
  });
  //fin Dragcontrols*/


}, ()=> {
    console.log('cargando');
}, ()=> {
    console.log('error');
}

);
const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );
// White directional light at half intensity shining from the top.
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
scene.add( directionalLight );

//camara position
        camera.position.z = 100;



/*animacion??*/
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
