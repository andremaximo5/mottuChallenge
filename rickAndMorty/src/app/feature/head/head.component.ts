import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  public imagine = "rickAndMorty/src/assets/sample/rickandmorty.png"

  title = 'rickAndMorty';

  constructor() { }

  ngOnInit() {
  }

}
