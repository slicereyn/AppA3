import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'resgate',
    loadChildren: () => import('./paginas/resgate/resgate.module').then( m => m.ResgatePageModule)
  },
  {
    path: 'institucional',
    loadChildren: () => import('./paginas/institucional/institucional.module').then( m => m.InstitucionalPageModule)
  },
  {
    path: 'gatos',
    loadChildren: () => import('./paginas/gatos/gatos.module').then( m => m.GatosPageModule)
  },
  {
    path: 'caes',
    loadChildren: () => import('./paginas/caes/caes.module').then( m => m.CaesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
