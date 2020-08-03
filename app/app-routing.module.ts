import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BhpModule } from './bhp/bhp.module';

const routes: Routes = [];

@NgModule({
  imports: [
    BhpModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
