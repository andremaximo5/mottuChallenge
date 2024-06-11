import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeRickMortyComponent } from './feature/home-rick-morty/home-rick-morty.component';
import { FavoriteRickMortyComponent } from './feature/favorite-rick-morty/favorite-rick-morty.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HeadComponent } from './feature/head/head.component';
import {MatCardModule} from '@angular/material/card'
import { RickAndMortyCharactersComponent } from './rick-and-morty-characters/rick-and-morty-characters.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      HomeRickMortyComponent,
      FavoriteRickMortyComponent,
      HeadComponent,
      HomeRickMortyComponent,
      RickAndMortyCharactersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports:[  MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule],

  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
