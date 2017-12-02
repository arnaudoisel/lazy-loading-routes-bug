import { NgModule } from '@angular/core';

import { LazyComponent } from './lazy.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: '', component: LazyComponent }]),
  ],
  exports: [],
  declarations: [LazyComponent],
  providers: [],
})
export class LazyModule { }
