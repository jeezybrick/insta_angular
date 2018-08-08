import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/shell/shell.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    data: { state: 'shell'},
    children: [
      {
        path: '',
        loadChildren: './pages/publications/publications.module#PublicationsModule'
      }
    ]
  },
  {path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
