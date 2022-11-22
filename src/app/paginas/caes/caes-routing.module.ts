import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaesPage } from './caes.page';

const routes: Routes = [
  {
    path: '',
    component: CaesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaesPageRoutingModule {}
