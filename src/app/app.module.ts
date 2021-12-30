import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PainelComponent } from './painel/painel.component';
import { ListaCoxinhasComponent } from './lista-coxinhas/lista-coxinhas.component';
import { CoxinhaInfoComponent } from './coxinha-info/coxinha-info.component';

import { GuardsAuthGuardGuard } from 'src/app/guards/guards-auth-guard.guard';

import { GuardAuthChildGuard } from 'src/app/guards/guard-auth-child.guard';


import { AdmComponent } from './adm/adm.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PainelComponent,
    ListaCoxinhasComponent,
    CoxinhaInfoComponent,
    AdmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GuardsAuthGuardGuard,
    GuardAuthChildGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
