import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncrementerComponent } from './incrementer/incrementer.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [IncrementerComponent],
  exports: [IncrementerComponent],
})
export class ComponentsModule {}
