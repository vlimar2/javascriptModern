import { criaEndereco } from "/scripts/endereco/criaEndereco.js";

export function carregar (seila){

    let endereco

    if (typeof seila === "string"){
        endereco = new criaEndereco(seila)
    } else if (seila instanceof criaEndereco){
        endereco = seila
    }else {
        throw new Error (`
        Você passou um endereço que não é uma string nem Endereço:
        Valor: ${JSON.stringify(seila)}
        Tipo: ${typeof seila}
        `)
    }

    $janelaPrincipal.src = endereco.urlCompleta
    $inputEndereco.value = endereco.urlCompleta
}