import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BhpRoutingModule } from './bhp-routing.module';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    BhpRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ]
})
export class BhpModule { }
