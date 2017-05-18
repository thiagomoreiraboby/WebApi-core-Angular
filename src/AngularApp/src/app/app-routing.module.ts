import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from "app/cliente/cliente.component";
import { ClienteFormComponent } from "app/cliente-form/cliente-form.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cliente' },
  { path: 'cliente/novo', component: ClienteFormComponent },
  { path: 'cliente/:id', component: ClienteFormComponent },
  { path: 'cliente', component: ClienteComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
