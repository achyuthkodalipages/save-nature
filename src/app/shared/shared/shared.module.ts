import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, MatRadioModule, MatCardModule],
  exports: [MatIconModule, MatRadioModule, MatCardModule],
})
export class SharedModule {}
