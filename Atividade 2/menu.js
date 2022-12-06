
function abrir(opcao)
{
   var celula = opcao;
   var divisao = celula.getElementsByTagName("div").item(0);
   celula.className = "menuHover";
   divisao.className = "menuHover";
}

function fechar(opcao)
{
   var celula = opcao;
   var divisao = celula.getElementsByTagName("div").item(0);
   celula.className = "menuNormal";
   divisao.className = "menuNormal";
}