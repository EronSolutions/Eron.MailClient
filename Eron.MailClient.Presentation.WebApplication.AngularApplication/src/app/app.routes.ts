import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'controlpanel',
        // canActivate: [AuthGuard],
        loadChildren:
          '../app/control-panel/control-panel.module#ControlPanelModule'
      },
      {
        path: '',
        loadChildren:
          '../app/authentication/authentication.module#AuthenticationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutesModule {}
