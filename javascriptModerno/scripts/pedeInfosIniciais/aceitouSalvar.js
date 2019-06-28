//IIFE
//ativando o modo estrito

//var aceitouAnteriormente
import * as storageAceitouSalvar from "../storage/aceitouSalvar.js"

    //let aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"))

    if (storageAceitouSalvar.aceitouSalvar === null) {
        const aceitouSalvar = confirm("Você aceita que a gente salve suas informações?")
        if (!aceitouSalvar) {

            alert("Você pode mudar isso na página de configurações")
        }
        //localStorage.setItem("aceitouSalvar", aceitouSalvar)
        //setAceitouSalvar(aceitouSalvar)
        //storageAceitouSalvar.setAceitouSalvar(aceitouSalvar)
        const funcaoSalvar = aceitouSalvar === true
        ?storageAceitouSalvar.setAceitou
        :storageAceitouSalvar.setNaoAceitou

        funcaoSalvar()
    }

