import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyPathOneRoutingModule } from './lazy-path-one-routing.module';
import { LazyPathOneComponent } from './lazy-path-one.component';
import { Component1Component } from './component1/component1.component';


@NgModule({
  declarations: [LazyPathOneComponent, Component1Component],
  imports: [
    CommonModule,
    LazyPathOneRoutingModule
  ]
})
export class LazyPathOneModule { }
