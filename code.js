
const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')
const conteudo = document.getElementById("content")

change('html')

function change(elementoId){

  let elementos = [html, css, js]

  let textos = {
    'html': "HTML, ou HyperText Markup Language, é a linguagem padrão usada para criar e estruturar páginas na web. Ele permite que você defina elementos como textos, links, imagens, vídeos e outros conteúdos, organizando-os em uma estrutura que os navegadores podem interpretar e exibir.",

    'css': "CSS, ou Cascading Style Sheets, é uma linguagem de estilo usada para descrever a apresentação de documentos HTML. Enquanto o HTML se concentra na estrutura e no conteúdo de uma página, o CSS lida com a aparência visual, como cores, fontes, espaçamento, layout e muito mais.",

    'js': "JavaScript é uma linguagem de programação amplamente utilizada para criar interatividade e dinamismo em páginas da web. Enquanto HTML e CSS são usados para estruturar e estilizar o conteúdo, o JavaScript permite que você adicione funcionalidades e responda a ações do usuário, como cliques, movimentação do mouse e entrada de dados."

  }

  elementos.forEach(element => {
    if(element.classList.contains('show')){
      element.classList.toggle('show')
    }
  });

  document.getElementById(elementoId).classList.toggle('show')

  conteudo.innerText = textos[elementoId]


}