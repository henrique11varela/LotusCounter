import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { LifeCounterComponent } from './pages/life-counter/life-counter.component';
import { FetchTestComponent } from './pages/fetch-test/fetch-test.component';
import { CardComponent } from './pages/card/card.component';
import { ThreeTestComponent } from './pages/three-test/three-test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'counter',
    component: LifeCounterComponent
  },
  {
    path: 'test',
    component: FetchTestComponent
  },
  {
    path: 'three',
    component: ThreeTestComponent
  },
  {
    path: 'card',
    children: [
      {
        path: ':id',
        component: CardComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
