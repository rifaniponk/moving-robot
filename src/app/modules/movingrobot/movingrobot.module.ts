import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { TabletopComponent } from './components/tabletop/tabletop.component';
import { LogComponent } from './components/log/log.component';
import { ControlComponent } from './components/control/control.component';

@NgModule({
  declarations: [
    MainComponent,
    TabletopComponent,
    LogComponent,
    ControlComponent,
  ],
  imports: [CommonModule],
})
export class MovingrobotModule {}
