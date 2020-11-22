import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  searchHeroe( termino : string, event : KeyboardEvent = null ){

    // Si se da enter se manda el evento
    if(event !== null){
      event.preventDefault();
    }
    
    document.querySelector('input').value = ''
    this._router.navigate(['/heroes/search', termino])
    
  }

}
