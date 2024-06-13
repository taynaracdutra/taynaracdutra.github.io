diretrizesVisuais = [
  {
    id: 1,
    titulo: "Conteúdo pop-up",
    descricao:
      "É indicado que a abertura de elemento pop-up seja previamente avisada em ação anterior do usuário, desta forma é evidente o conteúdo que irá acessar. Deverá ser garantido interação entre ações do teclado e o conteúdo, oferecendo ao usuário opções.",
    referencia: "#list-group-item4",
  },
  {
    id: 2,
    titulo: "Componente carrossel",
    descricao:
      "É indicado que os conteúdos presentes em um elemento carrossel (slideshow no HTML e CSS), sejam devidamente identificados no código, por meio de estrutura hierárquica utilizando por exemplo no HTML atributos como 'aria-label' para rotular e elementos 'section' ou 'div' para indicar a seção no carrossel. Ainda a estrutura e informações principais não devem sofrer alterações sem prévia notificação ao usuário.",
    referencia: "#list-group-item4",
  },
  {
    id: 3,
    titulo: "Abas e mudanças de janelas",
    descricao:
      "É indicado que os títulos das abas (definido no elemento 'title' no HTML)  e seus conteúdos sejam coesos, garantindo lógica ao acesso do usuário, bem como é necessário garantir acesso às abas via teclado (utilizando atributos ARIA como 'aria-selected'). É preciso sinalizar também, a mudança entre janela atual para outra, garantindo ao usuário o contexto da navegação.",
    referencia: "#list-group-item4",
  },
  {
    id: 4,
    titulo: `Idioma`,
    descricao: `É indicado definir através do atributo "lang" no HTML o idioma principal apresentado no website, bem como para cada conteúdo apresentado em idioma diferente, é necessário definir previamente no código.`,
    referencia: `#list-group-item5`,
  },
  {
    id: 5,
    titulo: `Cabeçalhos sequenciais`,
    descricao: `É indicado que os websites utilizem estruturas de cabeçalhos de maneira lógica e sequencial ("h1" ao "h6" no HTML), oferecendo organização nas páginas, seções e demais elementos. É importante frisar que os elementos "h1" e "h6" são hierarquizados e portanto devem ser utilizados em sequência, sendo o "h1" comumente atrelado ao título mais importante do website, e usado apenas uma vez. Estas práticas garantem uma usabilidade descomplicada e objetiva aos leitores de tela.`,
    referencia: `#list-group-item5`,
  },
  {
    id: 6,
    titulo: `Cores e informações`,
    descricao: `É indicado evitar fazer instruções por cores como por exemplo “clique no botão azul”, bem como tabelas e gráficos não devem se ater também apenas a cores para transmitir os dados. `,
    referencia: `#list-group-item5`,
  },

  {
    id: 7,
    titulo: `Título principal`,
    descricao: `É indicado definir um título principal (elemento "title" no HTML) para o website, que seja claro e coeso com o conteúdo apresentado, assim como o uso de títulos e subtítulos hierarquizados no mapa do site. (elementos "h1"  ao "h6" no HTML)`,
    referencia: `#list-group-item5`,
  },

  {
    id: 8,
    titulo: `Gráficos`,
    descricao: `É indicado utilizar rótulos (elemento "label" no HTML) e legendas compreensíveis para conteúdos apresentados em modalidade de gráficos no website, garantindo maior sucesso aos leitores de tela.`,
    referencia: `#list-group-item5`,
  },

  {
    id: 9,
    titulo: `Estrutura no código e precisão no conteúdo`,
    descricao: `É indicado garantir uma estrutura clara, de fácil entendimento e navegação ao usuário, dispondo título da aba e cabeçalhos (elementos "titles", "headers" e "h1" ao "h6" no HTML) coesos e descritivo de acordo com os conteúdos que apresentam, assim como os links apresentados em conteúdos devem ser descritivos quanto ao objetivo que possuem. Em conteúdos em tabelas, as colunas precisam estar rotuladas ("label" no HTML)  corretamente, auxiliando no entendimento dos dados apresentados.`,
    referencia: `#list-group-item5`,
  },

  {
    id: 10,
    titulo: `Acesso via teclado`,
    descricao: `É indicado que todas as funcionalidades dispostas no site possam ser acessadas via teclados, uma vez que o ponteiro do mouse pode não ser uma alternativa aos usuários cegos e de baixa visão.`,
    referencia: `#list-group-item5`,
  },

  {
    id: 11,
    titulo: `Links descritivos`,
    descricao: `É indicado que os links do website sejam descritivos e compreensíveis, possibilitando ao usuário prever para onde serão direcionados ao clicar neles (elemento "a href= " no HTML, que é disposto como uma âncora e possui a capacidade de exibir um texto descritivo, sendo aconselhavél rotular descritivamente com o atributo "aria-label" os links apresentados). `,
    referencia: `#list-group-item5`,
  },

  {
    id: 12,
    titulo: `Conteúdo audiovisual`,
    descricao: `É indicado que conteúdos em vídeos e áudios apresentados no website ofereçam suportes textuais, como descrições de áudio e legendas estendidas.`,
    referencia: `#list-group-item6`,
  },

  {
    id: 13,
    titulo: `Imagens e elementos não textuais`,
    descricao: ` É indicado a disponibilização de textos alternativos como suporte para imagens e demais conteúdos não textuais dispostos no website, podendo ser inseridas pelo atributo 'alt' no elemento "img" em HTML,  garantindo o sucesso para leitores de tela.`,
    referencia: `#list-group-6`,
  },

  {
    id: 14,
    titulo: `Rótulos em formulários`,
    descricao: `É indicado que todos os elementos presentes em formulários de entrada de dados (elemento "forms" no HTML), ofereçam sinalização correta por rótulos para todos os campos dispostos (atributo "aria-label" no HTML)."`,
    referencia: `#list-group-6`,
  },

  {
    id: 15,
    titulo: `Tabelas`,
    descricao: `É indicado coesão nas tabelas apresentadas no website (elemento "table" no HTML), disposta de maneira sequencial, assim como é indicado evitar o alinhamento das tabelas.`,
    referencia: `#list-group-6`,
  },

  {
    id: 16,
    titulo: `Identificação de elementos gráficos`,
    descricao: `É indicado a identificação através de rótulos (atributo "aria-label" no HTML) para elementos gráficos apresentados no website, sejam eles gráficos, botões (tag "button") ou formulários (elemento "forms").`,
    referencia: `#list-group-7`,
  },

  {
    id: 17,
    titulo: `Feedback em ações em sites de e-commerce`,
    descricao: `É indicado fornecer feedbacks ao usuário em ações cruciais no website de e-commerce, como por exemplo seleção de produtos, descontos possíveis ou quantidade de mercadoria no carrinho.`,
    referencia: `#list-group-7`,
  },

  {
    id: 18,
    titulo: `Algoritmo de buscas em sites e-commerce`,
    descricao: `É indicado que os mecanismos de busca estejam alinhados, ou seja, o algoritmo precisa retornar palavras-chaves procuradas com os conteúdos que as contém.`,
    referencia: `#list-group-7`,
  },

  {
    id: 19,
    titulo: `Funções essenciais e sequência em sites e-commerce`,
    descricao: `É indicado que funções com seções essenciais do websites, por exemplo carrinho de compras, sejam fortemente rotuladas e sequenciadas, para proporcionar compreensão e facilidade ao usuário. É possível utilizar 'headers' para cabeçalho principal, 'h1' ao 'h6' para títulos, 'section' para diferentes seções e 'aria-label' para rótular no HTML."`,
    referencia: `#list-group-6`,
  },

  {
    id: 20,
    titulo: `Contrastes de cores`,
    descricao: `É indicado garantir contraste de cores suficiente entre primeiro plano e o fundo do conteúdo apresentado no website, oferecendo desta forma maior compreensão ao usuário. `,
    referencia: `#list-group-item9`,
  },

  {
    id: 21,
    titulo: `Valores em elemento lista`,
    descricao: `É indicado que todos os conteúdos de lista (elementos 'ol' ou 'ul' no HTML) tenham valor exclusivo em seus itens ('li' no HTML, sendo possível inserir um id em cada 'li'), garantindo precisão e compreensão para o usuário. `,
    referencia: `#list-group-item9`,
  },

  {
    id: 22,
    titulo: `Elemento marquee`,
    descricao: ` É desaconselhado o uso de elemento 'marquee' no HTML, responsável por fornecer uma área similar a um letreiro de texto scrolling, podendo movimentar o texto horizontalmente ou verticalmente. É desaconselhado pelas mesmas razões de slideshow e carrosséis, limitando acessibilidade ao usuário em termos de leitura e compreensão.`,
    referencia: `#list-group-item9`,
  },

  {
    id: 23,
    titulo: `Mecanismos de acessibilidade`,
    descricao: `É indicado que o website permita o uso de mecanismos que ofereçam suporte ao contraste de cores e funcionalidades por teclado.`,
    referencia: `#list-group-item10`,
  },

  {
    id: 24,
    titulo: `Contraste e brilho`,
    descricao: `É indicado que o website ofereça mecanismos de ajustes de contraste e brilho ao usuário, promovento uma adaptabilidade melhor.`,
    referencia: `#list-group-item10`,
  },

  {
    id: 25,
    titulo: `Ajustes e sintetizador de fala`,
    descricao: `É indicado que o website ofereça aos usuários possibilidade de ajustes em características de fala concedidas pelo sintetizador de fala.`,
    referencia: `#list-group-item10`,
  },

  {
    id: 26,
    titulo: `Rótulos e caixas de texto`,
    descricao: `É indicado a utilização de rótulos coesos ('aria-label' no HTML) associados as caixas de texto ('input type=""text"''> no HTML), oferecendo assim maior especificação quanto ao conteúdo apresentado e requisitado.`,
    referencia: `#list-group-item1`,
  },

  {
    id: 27,
    titulo: `Feedbacks e sinalização em ações cruciais`,
    descricao: `É indicado disponibilizar feedbacks ao usuário, de maneira destacada utilizando cores em conjunto com asteriscos, como por exemplo: campos obrigatórios em formulários, que podem ser sinalizados de acordo com asteriscos vermelhos.É possível utilizar o atributo 'required' no HTML para campos obrigatórios, acompanhado de texto claro e objetivo sobre a obrigatoriedade.`,
    referencia: `#list-group-item1`,
  },
];

diretrizesAuditivas = [
  {
    id: 1,
    titulo: `Links`,
    descricao: `É indicado a utilização de rótulos (atributo "label" no HTML) e descrições para tornar os links compreensíveis aos usuários, deixando claro para onde levarão e o conteúdo que possuem.`,
    referencia: `#list-group-item3`,
  },

  {
    id: 2,
    titulo: `Glossário`,
    descricao: `É indicado a disponibilização de glossário em linguagem de sinais para todos os conteúdos em textos disponibilizados no website.`,
    referencia: `#list-group-item3`,
  },

  {
    id: 3,
    titulo: `Vocabulário`,
    descricao: `É indicado a utilização do método leitura fácil,que objetiva proporciona textos curtos e menos complexos, garantindo maior compreensão ao usuário.`,
    referencia: `#list-group-item3`,
  },

  {
    id: 4,
    titulo: `Títulos`,
    descricao: `É indicado definir um título (tag title no HTML) coeso e claro para a página web, apresentando o conteúdo. O mesmo deverá ser seguido para títulos principais e subtítulos (elementos "h1" ao "h6" no HTML) de seção e conteúdo do web site `,
    referencia: `#list-group-item3`,
  },

  {
    id: 5,
    titulo: `Descrição de links`,
    descricao: `É indicado que os links do web site sejam descritivos e compreensíveis, possibilitando ao usuário prever para onde serão direcionados ao clicar neles. Oferecer uma estrutura de navegação lógica, garante ao usuário acessibilidade na navegação. `,
    referencia: `#list-group-item3`,
  },

  {
    id: 6,
    titulo: `Acesso via teclado`,
    descricao: `É indicado que todas as funcionalidades dispostas no web site sejam acessadas via teclado, já que o ponteiro do mouse pode não ser uma alternativa aos usuários cegos. Seguir a semântica no HTML pode oferecer navegabilidade pelo teclado.  `,
    referencia: `#list-group-item3`,
  },

  {
    id: 7,
    titulo: `Legendas`,
    descricao: `É indicado que todo conteúdo no website, apresentado por áudio possua legendas descritivas fiés ao conteúdo em mídia.`,
    referencia: `#list-group-item9`,
  },

  {
    id: 8,
    titulo: `Conteúdo sequencial`,
    descricao: `É indicado que o website siga uma sequência coesa ao apresentar elementos e conteúdos, para que o usuário tenha uma navegabilidade intuitiva e de fácil compreensão.`,
    referencia: `#list-group-item1`,
  },

  {
    id: 9,
    titulo: `Idioma`,
    descricao: `É indicado que a utilização do atributo 'lang' no HTML, com o intuito de especificar o idioma utilizado pelo website, e quando conteúdos forem apresentados em outro idioma, deverá ser previamente disposto no código.`,
    referencia: `#list-group-item9`,
  },
];

diretrizesMotoras = [
  {
    id: 1,
    titulo: `Acessibilidade para navegação via teclado`,
    descricao: `É indicado que os websites sejam construídos de maneira a oferecer navegação e acesso ao usuário através do teclado, e não apenas pelo ponteiro do mouse. Seguir a hierarquia do HTML e proporcionar estrutura ao código é de suma importância, podendo utilizar também o atributo "tabindex" para tornar o elemento focavél em navegações via teclado. `,
    referencia: `#list-group-item1`,
  },
  {
    id: 2,
    titulo: `Mecanismos de acessibilidade`,
    descricao: `É indicado que o website permita o uso de mecanismos que ofereçam suporte ao contraste de cores e funcionalidades por teclado.`,
    referencia: `#list-group-item10`,
  },
  {
    id: 3,
    titulo: `Eventos javascript`,
    descricao: `É indicado que haja implementação de eventos a possibilidade de ativação de eventos em javascript, para possibilitar navegação via teclado e não atrelando apenas ao mouse. Por meio de eventos em JS é possível também tornar outros elementos dos websites acessíveis, como cards com destaque em foco.`,
    referencia: `#list-group-item13`,
  },
];

diretrizesIntelectuais = [
  {
    id: 1,
    titulo: `Ícones`,
    descricao: `É indicado reduzir o número de ícones e incluir títulos textuais junto quando apresentados em um website.`,
    referencia: `#list-group-item8`,
  },

  {
    id: 2,
    titulo: `Links em conteúdo textual`,
    descricao: `É indicado que links sejam apresentados diretamente no conteúdo textual principal do website, evitando assim tempo de resposta ao uso do mouse em um menu. É uma maneira de facilitar a navegação do usuário, (podendo utilizar elemento 'a herf="" para o link, que é disposto como uma âncora e possui a capacidade de exibir um texto descritivo).`,
    referencia: `#list-group-item8`,
  },

  {
    id: 3,
    titulo: `Textos extensos e palavras complexas`,
    descricao: `É indicado evitar o uso de textos extensos e palavras muito complexas, mas quando apresentados, precisam de um texto explicativo para oferecer suporte junto, possibilitando melhor interpretação ao usuário. `,
    referencia: `#list-group-item8`,
  },

  {
    id: 4,
    titulo: `Abreviações`,
    descricao: `É indicado evitar o uso de abreviações em conteúdos textuais apresentados no website, garantindo ao usuário maior compreensão do conteúdo. `,
    referencia: `#list-group-item8`,
  },
  {
    id: 5,
    titulo: `Tamanho de frases`,
    descricao: `É indicado a utilização de frases mais curtas nos conteúdos textuais apresentados no website, contendo até 25 palavras, uma vez que pode proporcionar uma experiência melhor de leitura ao usuário. `,
    referencia: `#list-group-item8`,
  },

  {
    id: 6,
    titulo: `Narrador em conteúdos em vídeo`,
    descricao: `É indicado a utilização de um narrador visível (pessoa/personagem) para conteúdos apresentados por meio de vídeos. Mesmo vídeos que apenas possuam transcrições e legendas, a utilização de narrador visível é uma recomendação para dar um suporte maior ao usuário. `,
    referencia: `#list-group-item8`,
  },

  {
    id: 8,
    titulo: `Conteúdos em áudio`,
    descricao: `É indicado que conteúdos em áudio sejam disponibilizados com reprodução em 20dB (decibél utilizado para medir o nível e intensidade do som) e sem ruídos de fundo.`,
    referencia: `#list-group-item8`,
  },

  {
    id: 9,
    titulo: `Cronômetros e temporizadores`,
    descricao: `É indicado evitar o uso de temporizadores/cronômetros para resolução de tarefas ou outros em websites, uma vez que pode proporcionar perda de atenção e nervosismo ao usuário. `,
    referencia: `#list-group-item8`,
  },

  {
    id: 10,
    titulo: `Cor ao fundo`,
    descricao: `É indicado a utilização de cor monocromática ao fundo do conteúdo, promovendo destaque e suporte a legibilidade.`,
    referencia: `#list-group-item8`,
  },
  {
    id: 11,
    titulo: `Feedbacks e sinalização em ações cruciais`,
    descricao: `É indicado disponibilizar feedbacks ao usuário, de maneira destacada utilizando cores em conjunto com asteriscos, como por exemplo: campos obrigatórios em formulários, que podem ser sinalizados de acordo com asteriscos vermelhos.É possível utilizar o atributo 'required' no HTML para campos obrigatórios, acompanhado de texto claro e objetivo sobre a obrigatoriedade.`,
    referencia: `#list-group-item1`,
  },
  {
    id: 12,
    titulo: `Legendas`,
    descricao: `É indicado que todo conteúdo disponibilizado no website em formato de vídeo ofereça , oferecendo suporte ao usuário.`,
    referencia: `#list-group-item11`,
  },
  {
    id: 13,
    titulo: `Elemento marquee`,
    descricao: `É indicado que o elemento 'marquee' no HTML (slideshow) seja substituído por elementos estáticos, objetivando garantir a compreensão para usuários que necessitem de mais tempo para ler e compreender. `,
    referencia: `#list-group-item12`,
  },
];

diretrizesTEA = [
  {
    id: 1,
    titulo: `Elementos`,
    descricao: `É indicado o uso reduzido de elementos em um site, tendo em vista que quando há presença de muito elementos, pode acarretar uma carga cognitiva maior ao usuário.`,
    referencia: `#list-group-item2`,
  },

  {
    id: 2,
    titulo: `Mídia extra`,
    descricao: `É indicado não disponibilizar mídias extras aos conteúdos, como por exemplo vídeos e áudios de suporte para textos. Quando presentes, podem ocasionar uma compreensão mais longa do conteúdo. `,
    referencia: `#list-group-item2`,
  },
  {
    id: 3,
    titulo: `Redução de tempo e informações`,
    descricao: `É indicado que haja implementações coesas que objetivem reduzir o tempo para o usuário chegar ao conteúdo desejado e entendê-lo. Disponibilizar mais de um conteúdo como apoio pode ocasionar distração, ao invés disso, é recomendado que se mantenha objetivo e compreensível.`,
    referencia: `#list-group-item2`,
  },

  {
    id: 4,
    titulo: `Slides e pré-visualizações automáticas`,
    descricao: `É indicado que conteúdos apresentados em forma de slide (como carrosseis no HTML ou elemento marquee), pré visualizações e outros com reprodução automática, permitam tempo extra entre as alterações.`,
    referencia: `#list-group-item2`,
  },
];
var containerDeficienciaVisual = document.getElementById(
  "containerDeficienciaVisual"
);

diretrizesVisuais.forEach((el) => {
  containerDeficienciaVisual.innerHTML += `
        <div class="cardNew" tabindex="0">
          <div class="title-box">
            <h2 tabindex="0">${el.titulo}</h2>
          </div>
      
          <div class="cardNew-content" tabindex="0">
            <p tabindex="0">
              ${el.descricao}
            </p>
            <a href="${el.referencia}" class="card-link" aria-label="Ir para a seção de referências" tabindex="0">Referência</a> 
          </div>
        </div>
    `;
});

var containerDeficienciaAuditiva = document.getElementById(
  "containerDeficienciaAuditiva"
);

diretrizesAuditivas.forEach((el) => {
  containerDeficienciaAuditiva.innerHTML += `
        <div class="cardNew" tabindex="0">
          <div class="title-box">
            <h2 tabindex="0">${el.titulo}</h2>
          </div>
      
          <div class="cardNew-content" tabindex="0">
            <p tabindex="0">
              ${el.descricao}
            </p>
            <a href="${el.referencia}" class="card-link" aria-label="Ir para a seção de referências" tabindex="0">Referência</a> 
          </div>
        </div>
    `;
});

var containerDeficienciaMotora = document.getElementById(
  "containerDeficienciaMotora"
);

diretrizesMotoras.forEach((el) => {
  containerDeficienciaMotora.innerHTML += `
        <div class="cardNew" tabindex="0">
          <div class="title-box">
            <h2 tabindex="0">${el.titulo}</h2>
          </div>
      
          <div class="cardNew-content" tabindex="0">
            <p tabindex="0">
              ${el.descricao}
            </p>
            <a href="${el.referencia}" class="card-link" aria-label="Ir para a seção de referências" tabindex="0">Referência</a> 
          </div>
        </div>
    `;
});

var containerDeficienciaIntelectual = document.getElementById(
  "containerDeficienciaCognitivaNeural"
);

diretrizesIntelectuais.forEach((el) => {
  containerDeficienciaIntelectual.innerHTML += `
        <div class="cardNew" tabindex="0">
          <div class="title-box">
            <h2 tabindex="0">${el.titulo}</h2>
          </div>
      
          <div class="cardNew-content" tabindex="0">
            <p tabindex="0">
              ${el.descricao}
            </p>
            <a href="${el.referencia}" class="card-link" aria-label="Ir para a seção de referências" tabindex="0">Referência</a> 
          </div>
        </div>
    `;
});

var containerTEA = document.getElementById("containerTEA");

diretrizesTEA.forEach((el) => {
  containerTEA.innerHTML += `
        <div class="cardNew" tabindex="0">
          <div class="title-box">
            <h2 tabindex="0">${el.titulo}</h2>
          </div>
      
          <div class="cardNew-content" tabindex="0">
            <p tabindex="0">
              ${el.descricao}
            </p>
            <a href="${el.referencia}" class="card-link" aria-label="Ir para a seção de referências" tabindex="0">Referência</a> 
          </div>
        </div>
    `;
});
