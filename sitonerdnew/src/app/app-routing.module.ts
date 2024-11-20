import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatiComponent } from './dati/dati.component';

const routes: Routes = [
  { path: 'carta/:name', component: DatiComponent}
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
