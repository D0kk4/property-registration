let cadastro = [];
let opcao = "";

do {
  function cadastrarImovel() {
    //function que pega as informações e se o usuario comfirmar que quer salvar
    imovel = {}; //adiciona os dados no objeto em um indice do array
    imovel.nome = prompt("Qual o nome do proprietario? ");
    imovel.quantidadeQuartos = prompt("Quantos quartos tem? ");
    imovel.quantidadeBanheiro = prompt("Quantos banheiros tem? ");

    const confirmation = confirm("Tem garagem? ");

    if (confirmation) {
      imovel.garagem = "Sim";
    } else {
      imovel.garagem = "Não";
    }

    const confirmar = confirm("Deseja salvar as informações? ");

    if (confirmar) {
      //confirmação se quer salvar as informações e da um push no array.
      cadastro.push(imovel);
    } else {
      alert("Descartando informação.");
    }
  }

  opcao = prompt(`Imoves cadastrados: ${cadastro.length} 
      Escolha uma opção: 
      1- Cadastrar novo imovel.
      2- Mostrar todos os imoveis.
      3- sair.`);

  switch (opcao) {
    case "1": //chama a funcao para colocar informações e salvar novo imovel.
      cadastrarImovel();
      break;
    case "2": //Mostra todos os imoveis cadastrados até o momento, com cada informação salva.
      for (let i = 0; i < cadastro.length; i++) {
        //for serve para mostrar uma informação do imovel por vez
        alert(
          //Para não ficar tudo em um unico alert
          `imovis: ${i + 1} 
            Proprietario: ${cadastro[i].nome}
            Quartos: ${cadastro[i].quantidadeQuartos}
            Banheiro: ${cadastro[i].quantidadeBanheiro}
            possui garagem? ${cadastro[i].garagem}`
        );
      }
      break;
    case "3":
      alert("Saindo!");
      break;
    default:
      alert("Opção invalida.");
  }
} while (opcao !== "3");
