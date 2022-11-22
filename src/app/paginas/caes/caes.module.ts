import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaesPageRoutingModule } from './caes-routing.module';

import { CaesPage } from './caes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaesPageRoutingModule
  ],
  declarations: [CaesPage]
})
export class CaesPageModule {}
