# Website Estático CPA

<p align="center">
  <img src="Logo.png" alt="Logo CPA">
</p>

Este repositório contém o código-fonte e os arquivos necessários para o Website Estático da CPA.


__O que é a CPA?__

A Comissão Própria de Avaliação é responsável pela coordenação do processo de auto avaliação institucional, desde a elaboração do questionário até a produção do Relatório Anual de Avaliação Institucional. <br> O objetivo da CPA é avaliar o desempenho da instituição e promover a melhoria contínua do processo educativo, identificando pontos de melhoria e potencialidades, visando à excelência acadêmica.

## Tecnologias Utilizadas

O Site CPA foi desenvolvido utilizando as seguintes tecnologias:

- HTML5 e CSS3 para a estrutura e estilo do site
- JavaScript para introduzir alguma interatividade e recursos dinâmicos
- Carrossel responsivo usando o plugin para jQuery [Slick](https://kenwheeler.github.io/slick/)

## Documentação

- Especificação dos Requisitos: Requisitos elaborados a partir da entrevista feita com a colaboradora Daniele Wolfart.
- Projeto UX: Especificações do projeto baseado nas etapas de desenvolvimento em User Experience
- Protótipo de UX: [Figma](https://www.figma.com/file/NgLEP64ywlgENkHGIYXCdz/Projeto---Site-CPA?type=design&t=1zsZ4dJBSJOqBoQj-1)
## Estrutura do Repositório

O repositório está organizado da seguinte forma:

- `assets/`: diretório para armazenar imagens utilizadas no site
- `css/`: diretório contendo os arquivos CSS
- `docs/`: diretório contendo a documentação do projeto
- `html/`: diretório contendo os arquivos HTML
- `scripts/`: diretório contendo os arquivos JavaScript
- `server/`: diretório com arquivos necessários para configurar e executar um servidor web local
- `slick/`: diretório da biblioteca do carrossel

## Executando o Site

__Por conta deste projeto possuir scripts de injeção de código (arquivo `include.js`) e por ser estruturado para a execução em servidores não é possível de abri-lo através da visualização local.__

Todavia é possível executar o site localmente através do servidor incluso no projeto, para tanto siga as etapas abaixo:

1. Clone ou faça o download do repositório do Site CPA para o seu computador.

2. Instale o [Node.JS](https://nodejs.org/en) em sua máquina.

2. Navegue até o diretório `server/`, onde você encontrará os arquivos `star_sever.cmd`.

3. Execute o arquivo. Será aberto dois prompts de comando, um com o link para o acesso ao website e outro para encerrar a execução do site.

Obs. Caso esteja executando este site através de rede WI-FI será necessário alterar a constante ```interfaceName``` de ```'Ethernet'``` para ```'WI-FI'``` no arquivo `server.js`. Caso ainda não funcione verifique o nome do seu adaptador de rede através do comando ```'ipconfig'```.

Também é possível executar este site através da extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) disponível para o Visual Studio Code.

## Equipe

O Site CPA foi desenvolvido pela equipe 1 do primeiro semestre de 2023 do curso de Análise e Desenvolvimento de Sistemas do Biopark <br>
Integrantes:
- Gabriel Antonio Xander  
- Luiz Gabriel Pagliari Moreira 
- Eduardo Todeschini 
- Samuel Andrei Horn Thomas 
- Fernando Ninaus 
- Alan Valentina 

## Licença

A licença [MIT](https://github.com/eagleyes005/Site_CPA/blob/main/LICENSE) permite que qualquer pessoa obtenha, use, modifique e distribua o software sob os termos da licença. Ela oferece liberdade aos desenvolvedores para adaptar o software de acordo com suas necessidades e usá-lo em projetos comerciais e não comerciais, sem restrições significativas.
