import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PanelModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule
  ],
  exports: [
    ButtonModule,
    PanelModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule
  ]
})
export class PrimengModule { }
