class ColeccionRecursos<T> {
    private recursos: T[] = [];
  
    add(recursos: T): void {
      this.recursos.push(recursos);
      console.log(`Se obtiene: ${recursos}`);
    }
  
    getAll(): T[] {
      return this.recursos;
    }
  }
  
  export { ColeccionRecursos };
  