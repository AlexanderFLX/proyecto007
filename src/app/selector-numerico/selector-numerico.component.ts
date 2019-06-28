import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  templateUrl: './selector-numerico.component.html',
  styleUrls: ['./selector-numerico.component.css']
})
export class SelectorNumericoComponent implements OnInit {

  @Input() minimo: number;
  @Input() maximo: number;
  actual: number;

  constructor() { }

  ngOnInit() {
    this.actual = this.minimo;
  }

  incrementar() {
    if (this.actual < this.maximo) {
      this.actual++;
    }
  }

  decrementar() {
    if (this.actual > this.minimo) {
      this.actual--;
    }
  }

  fijar(valor: number) {
    if (valor >= this.minimo && valor <= this.maximo) {
      this.actual = valor;
    }
  }

}
