const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Michael Jackson ficou famoso por sua habilidade em dançar e cantar. Qual é o nome do álbum que fez dele uma lenda do pop?",
        alternativas: [
            {
                texto: "Off the Wall",
                afirmacao: "Você lembrou corretamente! 'Off the Wall' é um dos álbuns que ajudou a solidificar a carreira de Michael Jackson."
            },
            {
                texto: "Thriller",
                afirmacao: "Correto! 'Thriller' é o álbum mais famoso de Michael Jackson e é considerado o maior sucesso da carreira dele."
            }
        ]
    },
    {
        enunciado: "Michael Jackson é conhecido por seu icônico movimento de dança, o 'moonwalk'. Em que ano ele apresentou essa dança pela primeira vez na televisão?",
        alternativas: [
            {
                texto: "1983",
                afirmacao: "Isso mesmo! Michael Jackson apresentou o 'moonwalk' pela primeira vez durante uma performance na televisão em 1983."
            },
            {
                texto: "1985",
                afirmacao: "Não exatamente. O 'moonwalk' foi apresentado pela primeira vez em 1983."
            }
        ]
    },
    {
        enunciado: "Michael Jackson lançou um videoclipe inovador para a música 'Thriller'. Qual é a característica marcante desse videoclipe?",
        alternativas: [
            {
                texto: "Foi o primeiro videoclipe a incluir efeitos especiais.",
                afirmacao: "Não é bem isso. 'Thriller' é famoso por seus elementos de dança e efeitos especiais, mas não foi o primeiro a incluir esses efeitos."
            },
            {
                texto: "Foi o primeiro videoclipe a contar uma história completa com dança e efeitos especiais.",
                afirmacao: "Correto! O videoclipe de 'Thriller' é conhecido por sua narrativa e produção inovadora, incluindo uma coreografia elaborada e efeitos especiais."
            }
        ]
    },
    {
        enunciado: "Michael Jackson ganhou vários prêmios ao longo de sua carreira. Qual prêmio importante ele ganhou em 1984?",
        alternativas: [
            {
                texto: "Grammy de Álbum do Ano",
                afirmacao: "Na verdade, ele ganhou o Grammy de Álbum do Ano por 'Thriller' em 1984, o que foi um marco em sua carreira."
            },
            {
                texto: "Grammy de Melhor Videoclipe",
                afirmacao: "Embora ele tenha recebido muitos prêmios, o Grammy de Álbum do Ano foi um dos mais notáveis ganhos em 1984."
            }
        ]
    },
    {
        enunciado: "Michael Jackson é conhecido por seu compromisso com a filantropia. Qual fundação ele ajudou a fundar para apoiar crianças?",
        alternativas: [
            {
                texto: "Fundação Make-A-Wish",
                afirmacao: "A Fundação Make-A-Wish é uma organização separada, mas Michael Jackson apoiou várias causas infantis."
            },
            {
                texto: "Fundação Heal the World",
                afirmacao: "Isso mesmo! Michael Jackson fundou a 'Heal the World Foundation' para apoiar crianças e causas humanitárias ao redor do mundo."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resumo da sua jornada pelo universo de Michael Jackson:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
