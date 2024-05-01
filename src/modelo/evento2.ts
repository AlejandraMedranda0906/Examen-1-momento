enum TipEvento {
    Asteroide,
    Aliens,
    AgujeroNegro,
    Otro,
  }
  
  class Evento {
    constructor(public tipo: TipEvento, public peligroso: number) {}
  
    trigger(): void {
      console.log(`Evento: ${TipEvento[this.tipo]}, Nivel de peligro: ${this.peligroso}`);
    }
  }
  
  export { Evento, TipEvento };
  