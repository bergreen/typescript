enum Categoria {
    ACAO = "Ação",
    FICCAO = "Ficção Científica",
    ROMANCE = "Romance",
  }
  
  interface Autor {
    nome: string;
  }
  
  interface Livro {
    nome: string;
    preco: number;
    categoria?: Categoria;
    autor: Autor;
  }
  
  type Biblioteca = Map<Autor, Livro[]>;
  
  // Criação de autores
  const autor1: Autor = { nome: "Autor 1" };
  const autor2: Autor = { nome: "Autor 2" };
  
  // Criação de livros
  const livrosAutor1: Livro[] = [
    { nome: "The Hobbit", preco: 10, categoria: Categoria.ACAO, autor: autor1 },
    { nome: "King of Torns", preco: 15, autor: autor1 },
  ];
  
  const livrosAutor2: Livro[] = [
    { nome: "O melhor de mim", preco: 20, categoria: Categoria.ROMANCE, autor: autor2 },
  ];
  
  // Criação do mapa de biblioteca
  const biblioteca: Biblioteca = new Map();
  biblioteca.set(autor1, livrosAutor1);
  biblioteca.set(autor2, livrosAutor2);
  
  // Acessar e imprimir os livros de cada biblioteca
  biblioteca.forEach((livros, autor) => {
    console.log(`Livros do autor ${autor.nome}:`);
    livros.forEach((livro) => {
      console.log(`- Nome: ${livro.nome}`);
      console.log(`  Preço: ${livro.preco}`);
      if (livro.categoria) {
        console.log(`  Categoria: ${livro.categoria}`);
      }
    });
    console.log("-------------------");
  });
  