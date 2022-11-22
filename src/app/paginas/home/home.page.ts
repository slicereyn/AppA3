import { Component, OnInit } from '@angular/core';
import { UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public nav: NavController) { }
  abrirPagina(x: string | any[] | UrlTree){
    this.nav.navigateForward(x);
  }
  ngOnInit() {
  }

}
