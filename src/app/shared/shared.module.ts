import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'app/shared/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent
  ],
  exports: [
    ButtonComponent
  ]
})
export class SharedModule { }
