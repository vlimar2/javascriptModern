let aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"))

function setAceitouSalvar (valor) {
    aceitouSalvar = valor 
    localStorage.setItem("aceitouSalvar", valor)
}

function setAceitou (){
    setAceitouSalvar(true)
}

function setNaoAceitou (){
    setAceitouSalvar(false)
}

//revealing module pattern
export {
    aceitouSalvar,
    setAceitou,
    setNaoAceitou
}