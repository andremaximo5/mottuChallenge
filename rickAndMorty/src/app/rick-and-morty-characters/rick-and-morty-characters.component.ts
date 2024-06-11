import { Component, OnInit } from '@angular/core';
import { RickAndMortyServiceService } from '../services/rick-and-morty-service.service';
import { Subject, Subscription, catchError, debounceTime, filter, map, switchMap, tap, throwError } from 'rxjs';
import { Result } from '../interface/rick-and-morty-api';
import { ResultRickAndMorty } from '../interface/results-rick-morty';
import { FormControl } from '@angular/forms';
const PAUSA = 300
@Component({
  selector: 'app-rick-and-morty-characters',
  templateUrl: './rick-and-morty-characters.component.html',
  styleUrls: ['./rick-and-morty-characters.component.css']
})

export class RickAndMortyCharactersComponent implements OnInit {
  public campoBusca = new FormControl()
  public subscriptionRickAndMorty: Subscription
  public listCard:any
  public forName = '?name='
  public mensagemErro: string
  constructor(private rickAndMortyServiceService: RickAndMortyServiceService ) { }

  ngOnInit() {
    this.Inicialization()
  }

  Inicialization(){
    this.subscriptionRickAndMorty = this.rickAndMortyServiceService.getPersonRickandMorty().subscribe({
      next:(item) => {
          this.listCard = this.listCards(item.results)
        }
      })
  }



  listCardFilter$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((handleType)=> handleType.length >= 3),
    switchMap((valDigit)=>
    this.rickAndMortyServiceService.getPersonRickandMorty(`${this.forName}`+valDigit)),
    map((item) => this.listCard = this.listCards(item.results)),
    catchError((erro)=> {
    // this.mensagemErro= 'Ops, apresentou erro'
    // return EMPTY  //  encerra sem precisar do trecho abaixo
    console.log(erro)
    return throwError((
      new Error(this.mensagemErro= 'Ops, apresentou erro')
    ))
    })
    )

  listCards(items:Result[]){
    return items.map((item)=>{
    return new ResultRickAndMorty(item)})
  }

}
