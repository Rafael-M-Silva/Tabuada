function verificar(){
    let tabuada = document.querySelector('#tab');
    let res = document.querySelector('#res');
    let tab = Number(tabuada.value);
    if (tabuada.value.length == 0 || tab == 0){
        window.alert('[ERRO] Digite um Valor!')
        res.innerHTML = ''
    }else{
        res.innerHTML = `Tabuada do ${tab} <hr>`
        for (let s = 1;s <= 10; s++){
            res.innerHTML += `${s} x ${tab} = ${s*tab}<br>`
        }
    }
}