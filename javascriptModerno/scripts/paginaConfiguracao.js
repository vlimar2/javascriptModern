
//import e módulo (const)
import * as storagePaginaInicial from "/scripts/storage/paginaInicial.js"
import * as storageAceitouSalvar from "/scripts/storage/aceitouSalvar.js"

//destruturing
//desestruturação
import { formataEndereco } from "/scripts/endereco/formataEndereco.js"


$inputPaginainicial.value = storagePaginaInicial.paginaInicial
$inputAceitouSalvar.checked = storagePaginaInicial.inputPaginainicial

//const enderecoCompleto = formataEndereco ($inputPaginainicial.value)
//$inputPaginainicial.value = enderecoCompleto

//o que vai ser executado quando salvar
//o que vai ser executado quando o evento de click acontecer
$botaoSalvar.onclick = salvar
//função de callback
//hoisting
function salvar() {

    const enderecoCompleto = formataEndereco($inputPaginainicial.value)
    $inputPaginainicial.value = enderecoCompleto

    storagePaginaInicial.setPaginaInicial($inputPaginainicial.value)
    const funcaoEscolhida = $inputPaginainicial.checked = true
        //localStorage.setItem("aceitouSalvar", $inputAceitouSalvar.checked)//inputAceitouSalvar
        //localStorage.setItem("paginaInicial", $aceitouSalvar.value)

        //storageAceitouSalvar.setAceitouSalvar($inputAceitouSalvar.checked)
        ? storageAceitouSalvar.setAceitou
        : storageAceitouSalvar.setNaoAceitou

    funcaoEscolhida()
}

$botaoLimpaTudo.addEventListener("click", function () {
    const chavesPermanentes = [
        "aceitouSalvar",
        "aceitoTermos"
    ]

    const listaChaveLocalStorage = Object.keys(localStorage)
    for (let chave of listaChaveLocalStorage) {

        const isChavePermanente = chavesPermanentes.includes(chave)

        if (!isChavePermanente) {
            localStorage.removeItem(chave)
        }
    }

    const listaChaveSessionStorage = Object.keys(sessionStorage)
    for (let chave of listaChaveSessionStorage) {
        sessionStorage.removeItem(chave)
    }

    window.location.reload ()
})
