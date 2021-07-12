const Project = function(name, description, link) {
  this.name = name;
  this.description = description;
  this.link = link;
}

export const devFinances = new Project('dev.finance$',
  "dev-finance$: este foi um projeto construído durante a maratona do Discover. Ele tem como função principal receber e armazenar internamente no browser quantias de entradas e saídas de dinheiro e calcular para devolver o balanço de forma reativa.",
  'dev-finances'
)

export const fastapping = new Project('fastapping',
  "fastapping: este foi um projeto que eu criei do zero. Ele é um 'game' que testa quantas palavras o usuário consegue digitar por minuto e a precisão ao digitar e, conforme o usuário vai treinando, um gráfico vai sendo desenvolvido com a evolução dele. O programa foi feito com apenas HTML, CSS e Javascript puro.",
  'fastapping'
)

export const rocketQ = new Project("rocket.q",
  "rocket.q: este foi um projeto desenvolvido durante a NLW - together, da Rocketseat. Ele trata de ciar ou entrar em salas já existentes para fazer perguntas anônimas, que podem ser moderadas pelo criador da sala ou qualquer um que tenha a senha dela. O programa foi feito com EJS, Javascript, Node com express e usando o SQLite como banco de dados.",
  'https://rocketq-app.herokuapp.com/'
)

export const todoList = new Project("todo-list",
  "todo-list: este foi um projeto desenvolvido por mim para auxiliar os alunos do IFCE a iniciarem com o desenvolvimento para a web. Ele é um CRUD de uma lista de tarefas que possui o armazenamento local e permite criar quantas tarefas forem necessárias, marcá-las como concluídas e excluí-las. Ele usa somente HTML, CSS e Javascript puro.",
  'todo-list'
)

export const pixelizeMe = new Project("pixelize.me",
  "pixelize.me: este foi um projeto desenvolvido por mim para permitir pessoas a fazerem pixel arts (desenhos feitos apenas com pixels) de maneira simples e gratuita. Ele usa somente HTML, CSS e Javascript puro.",
  'pixelize-me'
)
