import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from './rating.component';

const MaterialFeatures: any[] = [MatIconModule];


@NgModule({
  imports: [BrowserModule,CommonModule, MaterialFeatures],
  declarations: [RatingComponent],
  providers: [],
  exports: [MaterialFeatures, RatingComponent],
})
export class ControlsModule {}
