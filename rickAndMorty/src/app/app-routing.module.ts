import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRickMortyComponent } from './feature/home-rick-morty/home-rick-morty.component';
import { RickAndMortyCharactersComponent } from './rick-and-morty-characters/rick-and-morty-characters.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'rickandMorty',
    pathMatch: 'full'
  },
  {
    path: 'rickandMorty',
    component: RickAndMortyCharactersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
