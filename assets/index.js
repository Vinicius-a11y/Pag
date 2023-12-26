async function imgDog() {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      exibirImagemCachorro(data.message);
    } catch (error) {
      console.error('Ocorreu um erro ao buscar a imagem do cachorro:', error);
    }
  }

  function exibirImagemCachorro(url) {
    // Criar um elemento de imagem e definir a URL recebida
    const imagemCachorro = document.createElement('img');
    imagemCachorro.src = url;

    // Adicionar a imagem à página HTML
    document.body.appendChild(imagemCachorro);
  }