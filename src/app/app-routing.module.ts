import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pokemon/pages/main-page/main-page.component';
import { PokemonInfoPageComponent } from './pokemon/pages/pokemon-info-page/pokemon-info-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'pokemon/:name',
    component: PokemonInfoPageComponent
  },
  {
    path: '**',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
