import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() heroe : Heroe;
  @Input() id : number;

  @Output() selectedHero : EventEmitter<number>

  constructor(
    private _router : Router
  ) {
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // De esta forma navegamos a la información del héroe desde el componente actual
    this._router.navigate(['/heroe', this.id])

    // De esta forma emitimos el id al componente padre para que el se encarge de la redirección
    // this.selectedHero.emit(this.id)
  }

}
