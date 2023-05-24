interface Livro {
    nome: string;
    preco: number;
    categoria: string;
  }
  
  const livros: Livro[] = [
    { nome: "The Hobbit", preco: 10, categoria: "Ação" },
    { nome: "King of Torns", preco: 15, categoria: "Ficção Científica" },
    { nome: "O melhor de mim", preco: 20, categoria: "Romance" },
  ];
  
  livros.forEach((livro) => {
    console.log(`Nome: ${livro.nome}`);
    console.log(`Preço: ${livro.preco}`);
    console.log(`Categoria: ${livro.categoria}`);
    console.log("-------------------");
  });
  