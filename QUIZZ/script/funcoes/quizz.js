

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let pontos = 0
let placar = 0


//PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

//ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

//article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
//ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",  
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Dois mais dois é igual a: ",
    alternativaA : "1",
    alternativaB : "3",
    alternativaC : "4",
    correta      : "4",    
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Dois mais nove é igual a: ",
    alternativaA : "1",
    alternativaB : "11",
    alternativaC : "4",
    correta      : "11",    
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Dois mais um é igual a: ",
    alternativaA : "1",
    alternativaB : "3",
    alternativaC : "4",
    correta      : "3",    
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Dois mais seis é igual a: ",
    alternativaA : "8",
    alternativaB : "3",
    alternativaC : "4",
    correta      : "8",    
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "cinco mais dois é igual a? ",
    alternativaA : "1",
    alternativaB : "7",
    alternativaC : "4",
    correta      : "7",    
}

function lerdadosNovaQuestao(){

    let incrementonumQuestao = questoes.length
    let informacoes = {}
    
    informacoes.numQuestao = incrementonumQuestao
    informacoes.pergunta = document.querySelector('#nova_questao').value
    informacoes.alternativaA = document.querySelector('#nova_resp_a').value
    informacoes.alternativaB = document.querySelector('#nova_resp_b').value
    informacoes.alternativaC = document.querySelector('#nova_resp_c').value
    informacoes.correta = document.querySelector('#nova_resp_correta').value
    return informacoes
}


function adicionarQuestao(){

        let informacoes = lerdadosNovaQuestao()
        questoes.push(informacoes)
        console.log(questoes)
}

//CONSTANTE COM ARRAY DE OBJETOS DE TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalQuestoes = (questoes.length)-1

total.textContent = totalQuestoes

//MONTAR A 1ª QUESTAO COMPLETA  PARA INICIAR O QUIZ
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

//CONFIGURAR O VALUE INICIAL DA 1ª QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

//PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao){
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas(){
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas(){
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta){

    let numeroDaQuestao = nQuestao.value


    let respostaEscolhida = resposta.textContent


    let certa = questoes[numeroDaQuestao].correta


    if(respostaEscolhida == certa){


        pontos += 10
    }else{

        

    }

    //atualizar placar
    placar = pontos
    instrucoes.textContent = 'Pontos' + placar

    //bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function(){

        proxima = numeroDaQuestao+1

        if(proxima > totalQuestoes){

            fimDoJogo()
        }else{
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo(){

    instrucoes.textContent = "Fim do Jogo"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent = "Voce conseguiu " + pontos +  " " + pont

    aviso.textContent = "Voce consegiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    //ocultar o article da questao 
    articleQuestoes.style.display = 'none'

    setTimeout(function(){
        
        pontos = 0 //zerar placar
        location.reload();
    },3000)
}

