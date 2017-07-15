import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from 'app/calculator/display/display.component';
import { CalculatorComponent } from 'app/calculator/calculator.component';
import { SharedModule } from 'app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DisplayComponent,
    CalculatorComponent
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
