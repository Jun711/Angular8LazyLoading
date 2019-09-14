import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyPathOneComponent } from './lazy-path-one.component';

const routes: Routes = [{ path: '', component: LazyPathOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyPathOneRoutingModule { }
