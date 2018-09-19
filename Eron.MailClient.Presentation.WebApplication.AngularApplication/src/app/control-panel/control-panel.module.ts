import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideComponent } from './layout/side/side.component';
import { ControlPanelComponent } from './control-panel.component';
import { BaseModule } from '../base/base.module';
import { MaterialModule } from '../base/angular-material/material.module';
import { ControlPanelRoutingModule } from './controlpanel.routes';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SideComponent,
    ControlPanelComponent
  ],
  imports: [
    BaseModule,
    MaterialModule,
    ControlPanelRoutingModule
  ],
  exports: []
})
export class ControlPanelModule {}
