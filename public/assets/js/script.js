

let ganador;
function aleatorio1(min, max)
{
  let resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return resultado;
}
  ganador = aleatorio1(1, 47);

const jugar = document.getElementById('jugar');
jugar.addEventListener('click', ()=>{

    let num1 = document.getElementById('inp1').value;
    num1 = parseFloat(num1)
        if(num1==ganador){
            
            alert(`ganaste, el numero ganador era: ${ganador}`);
        }else{
            
            alert(`perdiste, el numero ganador era:  ${ganador}`);
        }
});
const volver = document.getElementById('volver');
volver.addEventListener('click', ()=>{
      window.location.reload(true);
})

  

