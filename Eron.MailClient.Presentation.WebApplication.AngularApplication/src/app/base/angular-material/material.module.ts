import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatIconModule,
  MatProgressBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatExpansionModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatListModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
