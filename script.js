const extensoes = [
  {
    index: 1,
    nome: "FocusFlow",
    descricao: "Bloqueia notificações e redes sociais para foco total.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/target.svg"
  },
  {
    index: 2,
    nome: "CodeWhisperer Pro",
    descricao: "Sugere refatoração de código com IA em tempo real.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/code-2.svg"
  },
  {
    index: 3,
    nome: "EcoTab",
    descricao: "Suspende abas inativas para economizar memória e energia.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/leaf.svg"
  },
  {
    index: 4,
    nome: "GrammarGuard",
    descricao: "Corretor gramatical avançado com ajuste de tom de voz.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/languages.svg"
  },
  {
    index: 5,
    nome: "ColorPicker Vision",
    descricao: "Identifica cores e gera paletas complementares instantâneas.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/palette.svg"
  },
  {
    index: 6,
    nome: "SecurePass Ghost",
    descricao: "Gera e preenche senhas descartáveis de alta segurança.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/shield-check.svg"
  },
  {
    index: 7,
    nome: "SwiftReader",
    descricao: "Resume artigos longos em três pontos principais usando IA.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/book-open-check.svg"
  },
  {
    index: 8,
    nome: "DarkMode Everywhere",
    descricao: "Força o modo noturno inteligente em qualquer site da web.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/moon.svg"
  },
  {
    index: 9,
    nome: "PriceTracker Ninja",
    descricao: "Monitora preços e avisa sobre o menor valor histórico.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/trending-down.svg"
  },
  {
    index: 10,
    nome: "TabOrganizer AI",
    descricao: "Agrupa abas abertas automaticamente por contexto de uso.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/layout-grid.svg"
  },
  {
    index: 11,
    nome: "SEO Insight Bar",
    descricao: "Exibe métricas de SEO e palavras-chave de qualquer página.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/bar-chart-3.svg"
  },
  {
    index: 12,
    nome: "DevDoc Search",
    descricao: "Atalho rápido para documentações oficiais de linguagens.",
    iconUrl: "https://unpkg.com/lucide-static@latest/icons/search-code.svg"
  }
];

const containerExtensoes = document.querySelector('.container')

extensoes.forEach((e) => {
 const index = e.index;
 const nome = e.nome;
 const img = e.iconUrl;
 const desc = e.descricao
    const divDesactive = document.createElement('div')
    divDesactive.classList.add(`divDesactive${index}`)
    divDesactive.setAttribute('data-target', `${index}`)
  const itemBox = document.createElement('div');
  itemBox.classList.add('itemBoxInactive');
  itemBox.classList.add('itemBox')
  itemBox.innerHTML = `<div class='logoTitle'><div id='logoBox' class='logoBox${index}'><img src='${img}'></img></div> <h3>${nome}</h3></div> <p>${desc}</p> <div class='btnAndCheckbox'><button class='btn' class=btn${index}>Remover</button> <input id="toggle" type='checkbox' class='toggle'> `
  divDesactive.appendChild(itemBox)
  containerExtensoes.appendChild(divDesactive);
 
  
})

const btns = document.querySelectorAll('.btn');

// remove o container mais proximo do botão clicado
btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const itemBoxRemove = event.currentTarget.closest('.itemBox')
    if(itemBoxRemove){
      itemBoxRemove.remove()
    }
  })
})

const toggles = document.querySelectorAll('.toggle');

// ativa e desativa toggle
toggles.forEach((toggle)=> {
  toggle.addEventListener('click', (event)=> {
    const itemBox = event.currentTarget.closest('.itemBox')

    if(itemBox.classList.contains('itemBoxInactive')) {
    itemBox.classList.replace('itemBoxInactive', 'itemBoxActive');
  } else {
    itemBox.classList.replace('itemBoxActive', 'itemBoxInactive');
  }
  })
});

// Botões de ativos e inativos

const actives = document.querySelector('#actives');
const inactives = document.querySelector('#inactives');
const all = document.querySelector('#all');

const itemBox = document.querySelectorAll('.itemBox')

function filtrar(abaSelecionada) {
  itemBox.forEach((item)=> {

    item.classList.remove('itemBoxHide');

    if(abaSelecionada === 'actives'){
      if(item.classList.contains('itemBoxInactive')) {
        item.classList.add('itemBoxHide')
    }
    } else if (abaSelecionada === 'inactives'){
      if(item.classList.contains('itemBoxActive')) {
        item.classList.add('itemBoxHide')
    }
  }

  })

}

actives.addEventListener('click', () => filtrar('actives') )
inactives.addEventListener('click', () => filtrar('inactives') )
all.addEventListener('click', () => filtrar('all') )