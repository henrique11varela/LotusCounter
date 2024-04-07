// modules
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

// components
import { AppComponent } from './app.component';
import { MenuButtonComponent } from './shared/menu-button/menu-button.component';

// pages
import { MenuComponent } from './pages/menu/menu.component';

// services
import { LocalstorageService } from './services/localstorage.service';

// PrimeNG
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './pages/home/home.component';
import { InvertAspectRatioDirective } from './directives/invert-aspect-ratio.directive';
import { LifeCounterComponent } from './pages/life-counter/life-counter.component';
import { PlayerComponent } from './pages/life-counter/player/player.component';
import { FetchTestComponent } from './pages/fetch-test/fetch-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    MenuComponent,
    HomeComponent,
    InvertAspectRatioDirective,
    LifeCounterComponent,
    PlayerComponent,
    FetchTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    SelectButtonModule,
    ButtonModule
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
