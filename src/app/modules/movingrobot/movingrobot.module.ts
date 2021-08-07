import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { TabletopComponent } from './components/tabletop/tabletop.component';
import { LogComponent } from './components/log/log.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlPlaceComponent } from './components/control-place/control-place.component';
import { ControlMoveComponent } from './components/control-move/control-move.component';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CoresModule } from 'src/app/modules/cores/cores.module';

@NgModule({
  declarations: [
    MainComponent,
    TabletopComponent,
    LogComponent,
    ControlPlaceComponent,
    ControlMoveComponent,
  ],
  exports: [MainComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule,
    CoresModule,
  ],
})
export class MovingrobotModule {}
