import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-rick-morty',
  templateUrl: './home-rick-morty.component.html',
  styleUrls: ['./home-rick-morty.component.css']
})
export class HomeRickMortyComponent implements OnInit {
  @Input() list: any;
  modalAberto: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onModalChange(evento: boolean) {
    this.modalAberto = evento;
  }
  Teste(){
    console.log("Teste");
  }

}
