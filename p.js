/*const jog = ["Porcos Reais",poderes: "ataque rapido", "ataque pegado"]
   const jog2=["Mago de gelo",poderes:  "Parada instantanea","Rajada gelada"]
   const jog3=[ "Espirito elétrico",poderes:  "Teletransporte", "Campo de força elétrico"]
const num= prompt("Digite um número de 1 a 3 para selecionar seu personagem:")
const num2 = Number(num) - 1
const listaNum1= jog[num2]
console.log(` ${listaNum1} será seu personagem`)*/


/*const ini = ["Valquiria" , "Mago de fogo" , "Bruxa sombria" ]
const num1 = prompt("Digite um número de 1 a 3 para selecionar seu inimigo(a):")
const num3 = Number(num) - 1
const listaNum2 = ini[num3]
console.log(` ${listaNum2} será seu inimigo(a)`)
const poder= []

console.log(`A batalha começará: ${listaNum1} VS  ${listaNum2}, Boa sorte!!`)*/



/*const jog = ["Porcos reais" , "Mago de gelo" , "Espirito elétrico" ]
const num = prompt("Digite um número de 1 a 3 para selecionar seu personagem")
const num2 = Number(num) - 1
const listaNum1 = jog[num2]
console.log(` ${listaNum1} será seu personagem`)


const ini = ["Valquiria" , "Mago de fogo" , "Bruxa sombria" ]
const num1 = prompt("Digite um número de 1 a 3 para selecionar seu inimigo(a)")
const num3 = Number(num) - 1
const listaNum2 = ini[num3]
console.log(` ${listaNum2} será seu inimigo(a)`)

console.log(`A batalha começará: ${listaNum1} VS  ${listaNum2}, Boa sorte!!`)*/

///////////////////////////////////////////                    Introdução                       ////////////////////////////////////////////////
let avisoJogador=alert("Bem-vindo ao jogo 'A Batalha dos Reinos'!")
let avisoJogador2=alert("O reino das Maravilhas está sob ameaça das trevas. Você foi convocado para derrotar o mal e restaurar a paz.")
let avisoJogador3=alert("Vamos começar sua jornada!")
let avisoJogador4=alert("Você deverá escolher um personagem para batalhar!")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////                      PRINCIPAl                                       ///////////////////////////////////

const jog = [
    { nome: "Porcos Reais", poderes: ["Transformação em pedra", "Voar", "Ataque sônico"] },
    { nome: "Mago de Gelo", poderes: ["Congelamento instantâneo", "Escudo de gelo", "Tempestade de gelo"] },
    { nome: "Espírito Elétrico", poderes: ["Choque elétrico", "Teletransporte", "Criação de campos de força"] }
];

const ini = [
    { nome: "Valquiria", poderes: ["Lâmina Divina", "Ataque afiado", "Cura Divina"] },
    { nome: "Mago de Fogo", poderes: ["Explosão de chamas", "Bola de fogo", "Chuva de fogo"] },
    { nome: "Bruxa Sombria", poderes: ["Maldição eterna", "Invocação das sombras", "Drenar vida"] }
];

function selecionarInimigoAleatorio() {
    const randomIndex = Math.floor(Math.random() * ini.length);
    return ini[randomIndex];
}

const numEscolhaPersonagem = prompt(
    "Digite o número da classificação do personagem da sua preferência:\n"+
    "1. Porcos Reais\n"+
    "2. Mago de Gelo\n"+
    "3. Espírito Elétrico"
);
const num2 = Number(numEscolhaPersonagem) - 1;
const jogador = jog[num2];

const poderEscolhidoIndex = prompt(`Escolha um poder para ${jogador.nome}:\n1. ${jogador.poderes[0]}\n2. ${jogador.poderes[1]}\n3. ${jogador.poderes[2]}`);
const poderEscolhido = jogador.poderes[Number(poderEscolhidoIndex) - 1];

console.log(`${jogador.nome} será seu personagem com o poder ${poderEscolhido}`);

const inimigo = selecionarInimigoAleatorio();
const poderInimigoIndex = Math.floor(Math.random() * inimigo.poderes.length); // Escolhe um poder aleatório do inimigo
const poderInimigo = inimigo.poderes[poderInimigoIndex];

console.log(`A batalha começará: ${jogador.nome}, Poder: ${poderEscolhido} ||| VS ||| ${inimigo.nome}, Poder: ${poderInimigo}, Boa sorte!!`);

/*const jog = [
    { nome: "Porcos Reais", poderes: ["Transformação em pedra", "Voar", "Ataque sônico"] },
    { nome: "Mago de Gelo", poderes: ["Congelamento instantâneo", "Escudo de gelo", "Tempestade de gelo"] },
    { nome: "Espírito Elétrico", poderes: ["Choque elétrico", "Teletransporte", "Criação de campos de força"] }
];

const ini = [
    { nome: "Valquiria", poderes: ["Lâmina Divina", "Voo Celestial", "Cura Divina"] },
    { nome: "Mago de Fogo", poderes: ["Explosão de chamas", "Escudo de fogo", "Chuva de fogo"] },
    { nome: "Bruxa Sombria", poderes: ["Maldição eterna", "Invocação das sombras", "Drenar vida"] }
];

const numEscolhaPersonagem = prompt(
    "Digite o número da classificação do personagem da sua escolha:\n"+
    "1. Porcos Reais\n"+
    "2. Mago de Gelo\n"+
    "3. Espírito Elétrico"
);
const num2 = Number(numEscolhaPersonagem) - 1;
const jogador = jog[num2];

const poderEscolhidoIndex = prompt(`Escolha um poder para ${jogador.nome}:\n1. ${jogador.poderes[0]}\n2. ${jogador.poderes[1]}\n3. ${jogador.poderes[2]}`);
const poderEscolhido = jogador.poderes[Number(poderEscolhidoIndex) - 1];

console.log(`${jogador.nome} será seu personagem com o poder ${poderEscolhido}`);

const num1 = prompt(
    "Digite o número da classificação do inimigo da sua escolha:\n"+
    "1. Valquiria\n"+
    "2. Mago de Fogo\n"+
    "3. Bruxa Sombria"    
);
const num3 = Number(num1) - 1;
const inimigo = ini[num3];

const poderInimigoIndex = prompt(`Escolha um poder para ${inimigo.nome}:\n1. ${inimigo.poderes[0]}\n2. ${inimigo.poderes[1]}\n3. ${inimigo.poderes[2]}`);
const poderInimigo = inimigo.poderes[Number(poderInimigoIndex) - 1];

console.log(`A batalha começará: ${jogador.nome} Poder:${poderEscolhido} |||VS||| ${inimigo.nome} Poder:${poderInimigo}, Boa sorte!!`);*/



////////////////////////////////////////////////////////      dinheiro:               //////////////////////////////////////////////////////////////

/*const itens = [
    { nome: "Pocao de Vida", preço: 50, descricao: "Recupera 50 pontos de vida." },
    { nome: "Escudo Reforçado", preço: 100, descricao: "Aumenta a defesa em 40%." },
    { nome: "Espada Lendária", preço: 150, descricao: "Aumenta o dano em 35%." }
];

const poderes = [
    { nome: "Bola de Fogo", descricao: "Causa 100 pontos de dano de fogo." },
    { nome: "Congelamento", descricao: "Imobiliza o inimigo por 2 turnos." },
    { nome: "Raio Elétrico", descricao: "Paralisa o inimigo por 1 turno." }
];

let dinheiro = 200; // Dinheiro inicial do jogo

function escolherPoder() {
    const opcoes = poderes.map((poder, index) => `${index + 1}. ${poder.nome}`).join("\n");
    const numPoder = prompt(
        `Escolha um poder para causar no inimigo:\n` +
        opcoes +
        `\n0. Cancelar`
    );

    const num = Number(numPoder);
    if (num === 0) {
        console.log("Você decidiu não usar poder.");
        return false; // Retorna falso se o jogador cancelar a escolha
    } else if (num >= 1 && num <= poderes.length) {
        const poderSelecionado = poderes[num - 1];
        console.log(`Você usou ${poderSelecionado.nome}.`);
        console.log(`Efeito: ${poderSelecionado.descricao}`);
        return true; // Retorna verdadeiro se o jogador escolher um poder
    } else {
        console.log("Escolha inválida. Tente novamente.");
        return escolherPoder(); // Exibe o prompt novamente se a escolha for inválida
    }
}

function comprarItem() {
    const opcoes = itens.map((item, index) => `${index + 1}. ${item.nome} - $${item.preço}`).join("\n");
    const numCompra = prompt(
        `Escolha um item para comprar:\n` +
        `Seu dinheiro atual: $${dinheiro}\n` +  
        opcoes +
        `\n0. Sair`
    );

    const num = Number(numCompra);
    if (num === 0) {
        return; // Volta se o jogador quiser voltar
    } else if (num >= 1 && num <= itens.length) {
        const itemSelecionado = itens[num - 1];
        
        const poderEscolhido = escolherPoder(); // Chama a função para escolher um poder antes de comprar o item
        
        if (poderEscolhido) {
            if (dinheiro >= itemSelecionado.preço) {
                dinheiro -= itemSelecionado.preço;
                console.log(`Você comprou ${itemSelecionado.nome}.`);
                console.log(`Descrição: ${itemSelecionado.descricao}`);
            } else {
                console.log("Dinheiro insuficiente. Escolha outro item ou ganhe mais dinheiro.");
            }
        } else {
            console.log("Decidiu não comprar o item neste momento.");
        }
    } else {
        console.log("Escolha inválida. Tente novamente.");
        comprarItem(); // Exibe o prompt novamente se a escolha for inválida
    }
}

// Chamada da função comprarItem para iniciar o processo de compra
comprarItem();

console.log(`Seu dinheiro atual: $${dinheiro}`);





*/



   /*const itens = [
        { nome: "Pocao de Vida", preco: 50, descricao: "Recupera 50 pontos de vida." },
        { nome: "Escudo Reforçado", preco: 100, descricao: "Aumenta a defesa em 40%." },
        { nome: "Espada Lendária", preco: 150, descricao: "Aumenta o dano em 35%." }
    ];

    let dinheiro = 200; // Dinheiro inicio do jogo

    function comprarItem() {
        const opcoes = itens.map((item, index) => `${index + 1}. ${item.nome} - $${item.preco}`).join("\n");
        const numCompra = prompt(
            `Escolha um item para comprar:\n` +
            `Seu dinheiro atual: $${dinheiro}\n` +  
            opcoes +
            `\n0. Sair`
        );

        const num = Number(numCompra);
        if (num === 0) {
            return; // Volta se o jogador quiser voltar
        } else if (num >= 1 && num <= itens.length) {
            const itemSelecionado = itens[num - 1];
            
            if (dinheiro >= itemSelecionado.preco) {
                dinheiro -= itemSelecionado.preco;
                console.log(`Você comprou ${itemSelecionado.nome}.`);
                console.log(`Descrição: ${itemSelecionado.descricao}`);
            } else {
                console.log("Dinheiro insuficiente. Escolha outro item ou ganhe mais dinheiro.");
                comprarItem(); // Exibe o prompt novamente se o dinheiro for insuficiente
            }
        } else {
            console.log("Escolha inválida. Tente novamente.");
        comprarItem(); // Exibe o prompt novamente se a escolha for inválida
    }
}

// Chamada da função comprarItem para iniciar o processo de compra
comprarItem();

console.log(`Seu dinheiro atual: $${dinheiro}`);
comprarItem();*/





/*const jog = [
    { nome: "Guerreiro", poderes: ["Força física", "Agilidade", "Resistência"] },
    { nome: "Mago", poderes: ["Manipulação de elementos", "Telecinese", "Ilusão"] },
    { nome: "Arqueiro", poderes: ["Precisão", "Camuflagem", "Furtividade"] }
];

const ini = [
    { nome: "Orc", poderes: ["Força bruta", "Resistência", "Fúria"] },
    { nome: "Necromante", poderes: ["Necromancia", "Maldição", "Invocação de mortos-vivos"] },
    { nome: "Feiticeira", poderes: ["Encantamentos", "Magia negra", "Transformação"] }
];

let escolhaJogador = "Escolha seu personagem:\n";
jog.forEach((personagem, index) => {
    escolhaJogador += `${index + 1}. ${personagem.nome}\n`;
});
const num = prompt(escolhaJogador);
const num2 = Number(num) - 1;
const jogador = jog[num2];

let escolhaInimigo = "Escolha seu inimigo:\n";
ini.forEach((personagem, index) => {
    escolhaInimigo += `${index + 1}. ${personagem.nome}\n`;
});
const num3 = prompt(escolhaInimigo);
const num4 = Number(num3) - 1;
const inimigo = ini[num4];

const poderEscolhidoIndex = prompt(`Escolha um poder para ${jogador.nome}:\n1. ${jogador.poderes[0]}\n2. ${jogador.poderes[1]}\n3. ${jogador.poderes[2]}`);
const poderEscolhido = jogador.poderes[Number(poderEscolhidoIndex) - 1];

const poderInimigoIndex = prompt(`Escolha um poder para ${inimigo.nome}:\n1. ${inimigo.poderes[0]}\n2. ${inimigo.poderes[1]}\n3. ${inimigo.poderes[2]}`);
const poderInimigo = inimigo.poderes[Number(poderInimigoIndex) - 1];

console.log(`A batalha começará: ${jogador.nome} (${poderEscolhido}) VS ${inimigo.nome} (${poderInimigo}), Boa sorte!!`);*/




// Definição dos personagens com suas classes
/*const jogadores = ["Guerreiro", "Mago", "Arqueiro"];
const inimigos = ["Orc", "Necromante", "Feiticeira"];

// Solicitar ao usuário a escolha do personagem e do inimigo
const numJogador = (prompt(
    "Escolha seu personagem:\n" +
    "1. Guerreiro\n" +
    "2. Mago\n" +
    "3. Arqueiro"
)) - 1;

const poderJogador = (prompt(
    `Escolha um poder para ${numJogador}:\n` +
     `1. espada matadora\n` +
     `2.espada \n` +
     `3.martelo \n`
)) - 1;

const numInimigo = parseInt(prompt(
    "Escolha seu inimigo:\n" +
    "1. Orc\n" +
    "2. Necromante\n" +
    "3. Feiticeira"
)) - 1;
// Exibir o personagem e o inimigo escolhidos
console.log("Você escolheu " + jogadores[numJogador] + " como seu personagem.");
console.log("Você escolheu " + inimigos[numInimigo] + "como seu inimigo.");*/
















/*const jogadores = [
    { nome: "Porcos reais", poderes: ["Transformação em pedra", "Visão Noturna", "Esmagamento"] },
    { nome: "Mago de gelo", poderes: ["Congelamento instantâneo", "Escudo de gelo", "Rajada gelada"] },
    { nome: "Espírito elétrico", poderes: ["Choque elétrico", "Teletransporte", "Campo de força elétrico"] }
];

const inimigos = [
    { nome: "Valquiria", poderes: ["Lâmina Divina", "Voo Celestial", "Cura Divina"] },
    { nome: "Mago de fogo", poderes: ["Explosão de chamas", "Escudo de fogo", "Cone de fogo"] },
    { nome: "Bruxa sombria", poderes: ["Maldição eterna", "Invocação das sombras", "Drenar vida"] }
];

const num = prompt("Digite um número de 1 a 3 para selecionar seu personagem");
const num2 = Number(num) - 1;
const jogador = jogadores[num2];

console.log(`Escolha um poder para ${jogador.nome}:`);
console.log("1. " + jogador.poderes[0]);
console.log("2. " + jogador.poderes[1]);
console.log("3. " + jogador.poderes[2]);

const poderEscolhidoIndex = prompt("Digite o número correspondente ao poder escolhido:");
const poderEscolhido = jogador.poderes[Number(poderEscolhidoIndex) - 1];

console.log(`${jogador.nome} será seu personagem com o poder ${poderEscolhido}`);

const num1 = prompt("Digite um número de 1 a 3 para selecionar seu inimigo(a)");
const num3 = Number(num1) - 1;
const inimigo = inimigos[num3];

console.log(`Escolha um poder para ${inimigo.nome}:`);
console.log("1. " + inimigo.poderes[0]);
console.log("2. " + inimigo.poderes[1]);
console.log("3. " + inimigo.poderes[2]);

const poderInimigoIndex = prompt("Digite o número correspondente ao poder do inimigo escolhido:");
cons
*/


/*const jogadores = [
    { nome: "Porcos reais", poderes: ["Transformação em pedra", "Voar", "Ataque sônico"] },
    { nome: "Mago de gelo", poderes: ["Congelamento instantâneo", "Escudo de gelo", "Tempestade de gelo"] },
    { nome: "Espírito elétrico", poderes: ["Choque elétrico", "Teletransporte", "Criação de campos de força"] }
];

const inimigos = [
    { nome: "Valquiria", poderes: ["Lâmina Divina", "Voo Celestial", "Cura Divina"] },
    { nome: "Mago de fogo", poderes: ["Explosão de chamas", "Escudo de fogo", "Chuva de fogo"] },
    { nome: "Bruxa sombria", poderes: ["Maldição eterna", "Invocação das sombras", "Drenar vida"] }
];

function escolherPersonagem() {
    const numEscolhaPersonagem = prompt(
        "Escolha seu personagem:\n" +
        "1. Porcos reais\n" +
        "2. Mago de gelo\n" +
        "3. Espírito elétrico\n" +
        "0. Voltar"
    );

    const num2 = Number(numEscolhaPersonagem);
    if (num2 === 0) {
        return null; // Retorna null para indicar que o usuário quer voltar
    } else if (num2 >= 1 && num2 <= jogadores.length) {
        const jogador = jogadores[num2 - 1];
        console.log(`Você escolheu ${jogador.nome} como seu personagem.`);
        return jogador;
    } else {
        console.log("Escolha inválida. Tente novamente.");
        return escolherPersonagem();
    }
}

function escolherInimigo() {
    const numEscolhaInimigo = prompt(
        "Escolha seu inimigo:\n" +
        "1. Valquiria\n" +
        "2. Mago de fogo\n" +
        "3. Bruxa sombria\n" +
        "0. Voltar"
    );

    const num3 = Number(numEscolhaInimigo);
    if (num3 === 0) {
        return null; // Retorna null para indicar que o usuário quer voltar
    } else if (num3 >= 1 && num3 <= inimigos.length) {
        const inimigo = inimigos[num3 - 1];
        console.log(`Seu inimigo será ${inimigo.nome}.`);
        return inimigo;
    } else {
        console.log("Escolha inválida. Tente novamente.");
        return escolherInimigo();
    }
}

let jogador = null;
let inimigo = null;

while (!jogador) {
    jogador = escolherPersonagem();
}

while (!inimigo) {
    inimigo = escolherInimigo();
*/







const jogadores = [
    { nome: "Porcos Reais", poderes: ["Transformação em pedra", "Voar", "Ataque sônico"], hp: 100 },
    { nome: "Mago de Gelo", poderes: ["Congelamento instantâneo", "Escudo de gelo", "Tempestade de gelo"], hp: 120 },
    { nome: "Espírito Elétrico", poderes: ["Choque elétrico", "Teletransporte", "Criação de campos de força"], hp: 80 }
];

const inimigos = [
    { nome: "Valquiria", poderes: ["Lâmina Divina", "Ataque afiado", "Cura Divina"], hp: 100 },
    { nome: "Mago de Fogo", poderes: ["Explosão de chamas", "Bola de fogo", "Chuva de fogo"], hp: 120 },
    { nome: "Bruxa Sombria", poderes: ["Maldição eterna", "Invocação das sombras", "Drenar vida"], hp: 80 },
    { nome: "CHEFÃO - Dragão Infernal", poderes: ["Sopro de fogo", "Asas de sombras", "Meteoro Ardente"], hp: 200 }
];

const itens = [
    { nome: "Poção de Vida", preço: 50, descricao: "Recupera 50 pontos de vida." },
    { nome: "Escudo Reforçado", preço: 100, descricao: "Aumenta a defesa em 40%." },
    { nome: "Espada Lendária", preço: 150, descricao: "Ataque aumentado em 60%." },
    { nome: "Poção de Mana", preço: 50, descricao: "Recupera 50 pontos de mana." }
];

let dinheiro = 200; // Dinheiro inicial do jogador

function escolherPoder(poderes) {
    const opcoes = poderes.map((poder, index) => `${index + 1}. ${poder}`).join("\n");
    const numPoder = prompt(
        `Escolha um poder para usar:\n` +
        opcoes +
        `\n0. Cancelar`
    );

    const num = Number(numPoder);
    if (num === 0) {
        console.log("Você decidiu não usar poder.");
        return null; // Retorna nulo se o jogador cancelar a escolha
    } else if (num >= 1 && num <= poderes.length) {
        const poderSelecionado = poderes[num - 1];
        console.log(`Você usou "${poderSelecionado}".`);
        return poderSelecionado; // Retorna o poder selecionado
    } else {
        console.log("Escolha inválida. Tente novamente.");
        return escolherPoder(poderes); // Exibe o prompt novamente se a escolha for inválida
    }
}

function causarDano(jogador, inimigo, poder) {
    let dano = 0;

    switch (poder) {
        case "Transformação em pedra":
            dano = Math.floor(Math.random() * 20) + 30; // Dano entre 30 e 50
            break;
        case "Voar":
            dano = Math.floor(Math.random() * 30) + 40; // Dano entre 40 e 70
            break;
        case "Ataque sônico":
            dano = Math.floor(Math.random() * 40) + 50; // Dano entre 50 e 90
            break;
        case "Congelamento instantâneo":
            dano = Math.floor(Math.random() * 20) + 50; // Dano entre 50 e 70
            break;
        case "Escudo de gelo":
            dano = Math.floor(Math.random() * 30) + 60; // Dano entre 60 e 90
            break;
        case "Tempestade de gelo":
            dano = Math.floor(Math.random() * 40) + 70; // Dano entre 70 e 110
            break;
        case "Choque elétrico":
            dano = Math.floor(Math.random() * 20) + 40; // Dano entre 40 e 60
            break;
        case "Teletransporte":
            dano = Math.floor(Math.random() * 30) + 50; // Dano entre 50 e 80
            break;
        case "Criação de campos de força":
            dano = Math.floor(Math.random() * 40) + 60; // Dano entre 60 e 100
            break;
        default:
            console.log("Poder não reconhecido.");
            return 0;
    }

    inimigo.hp -= dano;
    console.log(`Você causou ${dano} de dano no ${inimigo.nome}. HP do ${inimigo.nome}: ${inimigo.hp}`);

    return dano;
}

function batalhar(jogador, inimigo) {
    const poderJogador = escolherPoder(jogador.poderes);
    if (!poderJogador) {
        console.log("Você decidiu não usar poder. Batalha cancelada.");
        return false;
    }

    alert(`Você derrotou ${inimigo.nome}! Vamos para o próximo inimigo.`);

    console.log(`Batalha: ${jogador.nome} com "${poderJogador}" VS ${inimigo.nome}.`);

    while (jogador.hp > 0 && inimigo.hp > 0) {
        const danoJogador = causarDano(jogador, inimigo, poderJogador);

        if (inimigo.hp <= 0) {
            console.log(`Você derrotou ${inimigo.nome}!`);
            const dinheiroGanho = Math.floor(Math.random() * 100) + 50; // Dinheiro aleatório entre 50 e 150
            dinheiro += dinheiroGanho;
            console.log(`Você ganhou $${dinheiroGanho}. Dinheiro atual: $${dinheiro}`);
            return true; // Retorna true se o inimigo foi derrotado
        }

        if (danoJogador > 0) {
            const danoInimigo = Math.floor(Math.random() * 50) + 30; // Dano aleatório entre 30 e 80
            jogador.hp -= danoInimigo;
            console.log(`${inimigo.nome} causou ${danoInimigo} de dano em você. Seu HP: ${jogador.hp}`);

            if (jogador.hp <= 0) {
                console.log(`Você foi derrotado por ${inimigo.nome}. Fim de jogo!`);
                return false; // Retorna false se o jogador foi derrotado
            }
        }
    }
}

function comprarItem() {
    const opcoes = itens.map((item, index) => `${index + 1}. ${item.nome} - $${item.preço}`).join("\n");
    const numCompra = prompt(
        `Escolha um item para comprar:\n` +
        `Seu dinheiro atual: $${dinheiro}\n` +  
        opcoes +
        `\n0. Sair`
    );

    const num = Number(numCompra);
    if (num === 0) {
        return; // Retorna se o jogador quiser sair
    } else if (num >= 1 && num <= itens.length) {
        const itemSelecionado = itens[num - 1];
        
        const poderEscolhido = escolherPoder(jogadores[0].poderes); // Exemplo: Escolhe poder do primeiro jogador
        
        if (poderEscolhido) {
            if (dinheiro >= itemSelecionado.preço) {
                dinheiro -= itemSelecionado.preço;
                console.log(`Você comprou "${itemSelecionado.nome}".`);
                console.log(`Descrição: ${itemSelecionado.descricao}`);
            } else {
                console.log("Dinheiro insuficiente. Escolha outro item ou ganhe mais dinheiro.");
            }
        } else {
            console.log("Decidiu não comprar o item neste momento.");
        }
    } else {
        console.log("Escolha inválida. Tente novamente.");
        comprarItem(); // Exibe o prompt novamente se a escolha for inválida
    }
}

// Lógica principal do jogo
let continuarJogando = true;
let indiceInimigo = 0;

while (continuarJogando && indiceInimigo < inimigos.length) {
    const numEscolhaPersonagem = prompt(
        "Escolha um personagem para a próxima batalha:\n" +
        "1. Porcos Reais\n" +
        "2. Mago de Gelo\n" +
        "3. Espírito Elétrico"
    );
    const numJogador = Number(numEscolhaPersonagem) - 1;
    const jogador = jogadores[numJogador];

    if (batalhar(jogador, inimigos[indiceInimigo])) {
        alert(`Você derrotou ${inimigos[indiceInimigo].nome}! Preparando próxima batalha.`);
        indiceInimigo++;
    } else {
        continuarJogando = false;
    }
}

console.log("Fim do jogo.");
