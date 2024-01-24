import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pokemon/pages/main-page/main-page.component';
import { PokemonInfoPageComponent } from './pokemon/pages/pokemon-info-page/pokemon-info-page.component';
import { PokemonCardComponent } from './pokemon/components/pokemon-card/pokemon-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PokemonInfoPageComponent,
    PokemonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
