import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchInputComponent]
})
export class SharedModule { }
