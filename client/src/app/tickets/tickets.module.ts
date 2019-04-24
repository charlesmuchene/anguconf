import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TicketsService } from './tickets.service';
import { TicketsComponent } from './tickets.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [TicketsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {path: '', component: TicketsComponent}
    ])
  ],
  providers:[TicketsService],
  bootstrap:[TicketsComponent]
})
export class TicketsModule { }