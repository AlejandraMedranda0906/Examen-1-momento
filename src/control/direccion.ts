type Direccion = 'Norte' | 'Sur' | 'Este' | 'Oeste';

function navegar(direccion: Direccion): void {
  console.log(`Navegando ${direccion}...`);
}

export { navegar };
