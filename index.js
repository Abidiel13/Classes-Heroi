// Definindo a classe Hero
class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque = '';
      
      switch (this.tipo) {
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
          ataque = 'usou um ataque desconhecido';
          break;
      }
      
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando instâncias de heróis
  const mago = new Hero('Merlin', 30, 'mago');
  const guerreiro = new Hero('Conan', 35, 'guerreiro');
  const monge = new Hero('Bruce', 25, 'monge');
  const ninja = new Hero('Hanzo', 28, 'ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();