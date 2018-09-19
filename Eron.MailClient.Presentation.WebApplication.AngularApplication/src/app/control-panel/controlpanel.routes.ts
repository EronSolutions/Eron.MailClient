import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlPanelComponent } from './control-panel.component';

const routes: Routes = [
  { path: '', component: ControlPanelComponent, children: [
    { path: '', component: DashboardComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ControlPanelRoutingModule {
  public ControlPanelRoutes = routes[0];
}
