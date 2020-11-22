import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  public heroes : Array<Heroe> = [];
  public termino : string = '';

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _heroesService : HeroesService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( params => {
      
      this.termino = params.termino      
      this.heroes = this._heroesService.searchHeroes(params.termino)

    })
  }

}
