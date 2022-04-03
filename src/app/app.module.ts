import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { TeatrComponent } from './teatr/teatr.component';
import { MusicComponent } from './music/music.component';
import { OutputComponent } from './output/output.component';
import { NewservicesService } from './newservices.service';
import { FavoritesComponent } from './favorites/favorites.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    TeatrComponent,
    MusicComponent,
    OutputComponent,
    FavoritesComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [NewservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
