var doorImage1 = document.getElementById('door_a')
var doorImage2 = document.getElementById('door_b')
var doorImage3 = document.getElementById('door_c')
var flyDoorPath = './findfly.png';
var oceanPath = './ocean.png';
var forestPath = './forest.png';
doorImage1.onclick = ()=>{
doorImage1.src=flyDoorPath; 
}
doorImage2.onclick = ()=>{
  doorImage2.src=oceanPath; 
  }

  doorImage3.onclick = ()=>{
    doorImage3.src=forestPath; 
    }
    ////////