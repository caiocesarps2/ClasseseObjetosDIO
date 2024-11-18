class Heroi {
    // Construtor que recebe nome, idade e tipo como parâmetros
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem com base no tipo do herói
    atacar() {
      let ataque;
  
      // Dependendo do tipo, define a descrição do ataque
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou uma habilidade desconhecida';
          break;
      }
  
      // Exibe a mensagem conforme o tipo e ataque
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis com diferentes tipos
  const mago = new Heroi('Gandalf', 1000, 'mago');
  const guerreiro = new Heroi('Conan', 30, 'guerreiro');
  const monge = new Heroi('Shaolin', 45, 'monge');
  const ninja = new Heroi('Naruto', 18, 'ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar(); // O mago atacou usando magia
  guerreiro.atacar(); // O guerreiro atacou usando espada
  monge.atacar(); // O monge atacou usando artes marciais
  ninja.atacar(); // O ninja atacou usando shuriken
  