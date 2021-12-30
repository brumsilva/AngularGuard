import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { PainelComponent } from './painel/painel.component';


import { GuardAuthChildGuard } from 'src/app/guards/guard-auth-child.guard';

import { GuardsAuthGuardGuard } from 'src/app/guards/guards-auth-guard.guard';


import { ListaCoxinhasComponent } from './lista-coxinhas/lista-coxinhas.component';
import { CoxinhaInfoComponent } from './coxinha-info/coxinha-info.component';
import { AdmComponent } from './adm/adm.component';

const routes: Routes = [

  {path: '', component: PainelComponent},

  {path: 'adm', component: AdmComponent,
      canActivate: [GuardsAuthGuardGuard]},


  { path: 'revendedor',
    canActivateChild: [GuardAuthChildGuard],
    children: [
      { path: 'produto', component: ListaCoxinhasComponent }
  ]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
