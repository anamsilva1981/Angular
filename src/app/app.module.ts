import { MeuPrimComponent } from './meu-prim/meu-prim.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrim2Component } from './meu-prim2/meu-prim2.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimComponent,
    MeuPrim2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
