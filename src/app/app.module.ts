// modules
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

// components
import { AppComponent } from './app.component';
import { MenuButtonComponent } from './shared/menu-button/menu-button.component';
import { PlayerComponent } from './pages/life-counter/player/player.component';
import { ButtonSelectComponent } from './shared/button-select/button-select.component';
import { ButtonComponent } from './shared/button/button.component';

// pages
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FetchTestComponent } from './pages/fetch-test/fetch-test.component';
import { LifeCounterComponent } from './pages/life-counter/life-counter.component';

// services
import { LocalstorageService } from './services/localstorage.service';

// directives
import { InvertAspectRatioDirective } from './directives/invert-aspect-ratio.directive';

// PrimeNG
import { MtgCardComponent } from './shared/mtg-card/mtg-card.component';
import { SignatureComponent } from './shared/signature/signature.component';
import { CardComponent } from './pages/card/card.component';
import { ThreeTestComponent } from './pages/three-test/three-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuButtonComponent,
    MenuComponent,
    HomeComponent,
    InvertAspectRatioDirective,
    LifeCounterComponent,
    PlayerComponent,
    FetchTestComponent,
    MtgCardComponent,
    ButtonSelectComponent,
    ButtonComponent,
    SignatureComponent,
    CardComponent,
    ThreeTestComponent
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
  ],
  providers: [LocalstorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
