import { Inject } from '@angular/core';

class CPU {
  constructor() {}
  start() {
    console.log('CPU speed 3.2GHz');
  }
}

class Computer {
  public cpu: CPU;
  constructor(@Inject(CPU) cpu: CPU ) {
    this.cpu = cpu;
  }
}

class OCCCPU {
  constructor() {}
  start() {
    console.log('CPU speed 3.2GHz');
  }
}


(function context() {
  const computer = new Computer(new OCCCPU());
  computer.cpu.start();
})();
