import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { MaterialModule } from './angular-material/material.module';
import { JalaliPipe } from './pipes/jalali.pipe';

@NgModule({
  declarations: [
    FooterComponent,
    ContentWrapperComponent,
    JalaliPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent,
    ContentWrapperComponent,
    MaterialModule,
    JalaliPipe
  ]
})
export class BaseModule {}
