if (localStorage.getItem("aceitoTermos") === null) {

    const nome = prompt("Qual seu nome?")

    const aceitoTermos = confirm(`
Olá ${nome}!
Antes de usar o Cake, precisamos que 
você aceite nossos termos de uso:

• Você aceita que este software foi 
    feito por pessoas que participaram 
    do curso de JavaScript.
• Você aceita que o código dessas 
    pessoas pode acessar tudo o que 
    você digitar aqui.`)

    if (!aceitoTermos) {
        alert(nome + ",não podemos continuar juntos :(")
        window.close()
    } else {
        localStorage.setItem("aceitoTermos", aceitoTermos)
    }
}