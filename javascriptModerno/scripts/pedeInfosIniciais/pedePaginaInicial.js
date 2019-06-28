//const paginaInicial = undefined
//const aceitouSalvar = JSON.parse(localStorage.getItem("aceitouSalvar"))
import { aceitouSalvar as storageAceitouSalvar } from "../storage/aceitouSalvar.js"
import { paginaInicial, setPaginaInicial } from "../storage/paginaInicial.js"
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"

if (storageAceitouSalvar === null || storageAceitouSalvar === true) {

    let paginaInicialDefault = paginaInicial

    if (!paginaInicialDefault) {
        paginaInicialDefault = prompt("Insira endereço da página desejada")
    }

    if (paginaInicialDefault) {

            const enderecoCompleto = formataEndereco(paginaInicialDefault)
            setPaginaInicial(enderecoCompleto)
    
        //if (paginaInicialDefault.substring(0, 7) !== "http://" && paginaInicialDefault.substring(0, 8) !== "https://") {
        //    paginaInicialDefault = "http://" + paginaInicialDefault
        // }
    }
    // $janelaPrincipal.src = paginaInicialDefault
    // $inputEndereco.value = paginaInicialDefault


    //localStorage.setItem("paginaInicial", paginInicialDefault)
}

//const enderecoCompleto = formataEndereco(paginaInicialDefault)
//$janelaPrincipal.src = enderecoCompleto
//$inputEndereco.value = enderecoCompleto

