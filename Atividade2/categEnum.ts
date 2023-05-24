enum Categoria {
    ACAO = "Ação",
    FICCAO = "Ficção Científica",
    ROMANCE = "Romance",
  }
  
  interface Livro {
    nome: string;
    preco: number;
    categoria?: Categoria;
  }
  
  const livros: Livro[] = [
    { nome: "The Hobbit", preco: 10, categoria: Categoria.ACAO },
    { nome: "King of Torns", preco: 15 },
    { nome: "O melhor de mim", preco: 20, categoria: Categoria.ROMANCE },
  ];
  
  livros.forEach((livro) => {
    console.log(`Nome: ${livro.nome}`);
    console.log(`Preço: ${livro.preco}`);
    if (livro.categoria) {
      console.log(`Categoria: ${livro.categoria}`);
    }
    console.log("-------------------");
  });
  