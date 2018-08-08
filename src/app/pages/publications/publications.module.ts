import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule, MatCardModule, MatIconModule, MatListModule } from '@angular/material';

import { PublicationListComponent } from './publication-list/publication-list.component';
import { PublicationItemComponent } from './publication-item/publication-item.component';
import { publicationRoutes } from './publications.route';
import { PublicationShellComponent } from './publication-shell/publication-shell.component';
import { PublicationHistoryListComponent } from './publication-history-list/publication-history-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(publicationRoutes),
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    PublicationListComponent,
    PublicationItemComponent,
    PublicationShellComponent,
    PublicationHistoryListComponent
  ]
})
export class PublicationsModule { }
