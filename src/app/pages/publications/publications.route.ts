import { Routes } from '@angular/router';

import { PublicationShellComponent } from './publication-shell/publication-shell.component';


export const publicationRoutes: Routes = [
  { path: '', component: PublicationShellComponent },
/*  {
    path: 'add',
    component: ContactModifyComponent,
    canActivate: [ContactsListExistsGuard]
  },
  {
    path: ':id/edit',
    component: ContactModifyComponent,
    canActivate: [ContactsListExistsGuard]
  },
  {
    path: ':id',
    component: ContactDetailComponent,
    canActivate: [ContactsListExistsGuard]
  },*/
];
