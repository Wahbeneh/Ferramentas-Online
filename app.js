/* Declarando variáveis */
const hamburguer = document.querySelector(".hamburguer"); // Seleciona o elemento com a classe "hamburguer"
const nav = document.querySelector(".nav"); // Seleciona o elemento com a classe "nav"

/* Adiciona um ouvinte de evento para alternar a classe "active" da navegação quando o "hamburguer" é clicado */
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

/* Função para calcular a idade com base na data de nascimento fornecida pelo usuário */
function calcularIdade() {
    data_atual = new Date(); // Obtém a data atual
    data_nascimento = document.getElementById('data_nascimento').value; // Obtém a data de nascimento do elemento HTML
    parametros = data_nascimento.split("-"); // Divide a data de nascimento em parâmetros
    data_nascimento = new Date(parametros); // Cria um objeto de data para a data de nascimento
    idade = data_atual.getFullYear() - data_nascimento.getFullYear(); // Calcula a idade
    document.getElementById('idade').value = idade; // Exibe a idade no elemento HTML com o id "idade"
}

/* Função para converter o texto com base no formato escolhido pelo usuário */
function converteTexto() {
    formato_texto = document.getElementById('formato_texto').value; // Obtém o formato escolhido do elemento HTML
    texto = document.getElementById('texto').value; // Obtém o texto do elemento HTML
    texto = texto.trim(); // Remove espaços em branco no início e no final do texto

    if (formato_texto == 'maiuscula') {
        texto = texto.toUpperCase(); // Converte o texto para maiúsculas
    } else if (formato_texto == 'minuscula') {
        texto = texto.toLowerCase(); // Converte o texto para minúsculas
    } else {
        palavras = texto.split(" "); // Divide o texto em palavras
        
        for (i = 0; i < palavras.length; i++) {
            palavra = palavras[i];
            primeira_letra = palavra[0].toUpperCase(); // Converte a primeira letra de cada palavra para maiúscula
            outras_letras = palavra.substr(1).toLowerCase(); // Converte as outras letras de cada palavra para minúscula
            palavra = primeira_letra + outras_letras;
            palavras[i] = palavra;
        }

        texto = palavras.join(" "); // Junta as palavras de volta em um texto
    }

    document.getElementById('resultado').value = texto; // Exibe o resultado no elemento HTML com o id "resultado"
}

/* Função para realizar um sorteio a partir de uma lista de nomes fornecida pelo usuário */
function sorteio() {
    texto = document.getElementById('lista_de_nomes').value; // Obtém a lista de nomes do elemento HTML
    lista = texto.split("\n"); // Divide a lista em linhas
    total = lista.length; // Obtém o total de nomes na lista
    numero_sorteado = Math.random() * total; // Gera um número aleatório baseado no total de nomes
    numero_sorteado = Math.floor(numero_sorteado); // Arredonda o número para baixo para obter um índice válido na lista
    resultado = lista[numero_sorteado]; // Obtém o nome sorteado

    document.getElementById('sorteado').value = resultado; // Exibe o nome sorteado no elemento HTML com o id "sorteado"
}

/* Função para compartilhar o conteúdo da página (se o navegador suportar) */
function share() {
    if (navigator.share !== undefined) {
        navigator.share({
            title: 'Ferramentas online' ,
            text: 'Ferramentas uteis no seu dia a dia',
            url: 'https://wahbeneh.github.io/Ferramentas-Online/'
        })
        .then(() => console.log('Compartilhamento bem-sucedido'))
        .catch((error) => console.log('Erro ao compartilhar', error));
    }
}

/* Função simples para exibir um alerta indicando que a mensagem foi enviada com sucesso */
function mostrarMensagem() {
    alert('Mensagem enviada com sucesso!');
}
