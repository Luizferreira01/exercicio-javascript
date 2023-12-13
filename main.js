const form = document.getElementById('form');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const acerto = document.getElementById('campocorreto');
const erro = document.getElementById('erro');

function comparandocampo(saldo, saque){
    return saldo > saque;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validarForm = comparandocampo(campoA.valueAsNumber, campoB.valueAsNumber)
    if(validarForm){
        acerto.style.display = 'block';
        campoA.value='';
        campoB.value='';
    }
})

campoA.addEventListener('keyup', function(e){
    let validarForm = comparandocampo(campoA.valueAsNumber, campoB.valueAsNumber)
    if(!validarForm){
        erro.style.display = 'block';
        acerto.style.display = 'none';
    } else{
        erro.style.display = 'none';
    }

})