import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClienteService } from './servico/cliente.service';
import {PrincipalComponent} from "./principal/principal.component";
import {FormsModule} from "@angular/forms";

import {HttpClientModule, provideHttpClient} from '@angular/common/http';
@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ClienteService

  ],
  bootstrap: [
  ]
})
export class AppModule {}
