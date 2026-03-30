import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SustainabilityRoutingModule} from './sustainability-routing.module';
import {SustainabilityComponent} from './sustainability.component';


@NgModule({
  imports: [
    CommonModule,
    SustainabilityRoutingModule,
    SustainabilityComponent
  ]
})
export class SustainabilityModule { }
