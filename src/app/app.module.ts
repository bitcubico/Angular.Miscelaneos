import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssParticularComponent } from './components/css-particular/css-particular.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssParticularComponent,
    NgClassComponent,
    ResaltadoDirective,
    DirectivasComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
