import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatExpansionModule} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
  ],

})
export class SharedModule { }
