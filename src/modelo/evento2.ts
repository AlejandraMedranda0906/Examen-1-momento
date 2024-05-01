enum Evento2 {
    Asteroide,
    Aliens,
    AgujeroNegro,
    Otro,
  }
  
  class Evento {
    constructor(public tipo: Evento2, public peligroso: number) {}
  
    trigger(): void {
      console.log(`Evento: ${Evento2[this.tipo]}, Nivel de peligro: ${this.peligroso}`);
      // Simulate event effects here
    }
  }
  
  export { Evento, Evento2 };
  