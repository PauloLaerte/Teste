// Suponha que o arquivo json seja um array de objetos com a estrutura: [{ "chave": "valor" }, ...]
const arquivoJson = 'arquivoJson.json';

// Função para ler o arquivo JSON e processar os resultados
function processarJSON(json) {
    const jsonResultsDiv = document.getElementById('jsonResults');
    let htmlContent = '';

    // Iterar sobre os objetos do JSON e criar o conteúdo HTML
    json.forEach(obj => {
        htmlContent += `<p>Chave: ${obj.chave}, Valor: ${obj.valor}</p>`;
    });

    // Adicionar o conteúdo HTML ao div com id="jsonResults"
    jsonResultsDiv.innerHTML = htmlContent;
}

// Lógica para fazer a requisição do arquivo JSON e chamar a função de processamento
fetch(arquivoJson)
    .then(response => response.json())
    .then(json => processarJSON(json))
    .catch(err => console.error('Erro ao carregar o arquivo JSON:', err));