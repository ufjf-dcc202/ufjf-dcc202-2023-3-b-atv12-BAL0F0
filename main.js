const olJoao=document.querySelector("#joao");
const olMaria=document.querySelector("#maria");
document.entrada.enviar.addEventListener('submit' , leFormulario);

function leFormulario(event){
    event.preventDefault();
    const quantidade =document.entrada.quantidade.valueAsNumber;
    const fruta =document.entrada.fruta.value;
    const origem=document=document.entrada.origem.value;
    const destino=document=document.entrada.destino.value;
}
