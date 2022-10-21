const button = document.querySelector("#button")
button.addEventListener("click", () =>{
    var tabuada = document.querySelector("#tab")
    var res = document.querySelector("#res")
    var tab = Number(tabuada.value)
    if (tabuada.value.length == 0 | tab == 0){
        window.alert("[ERRO] Digite um Valor!")
        res.innerHTML = ""  
    }else{
        res.innerHTML = `<strong>Tabuada do ${tab}</strong> <hr>`
        for (var number = 1; number <= 10; number ++){
            res.innerHTML += `${number} x ${tab} = ${number*tab}<br>`
        }
    }
})