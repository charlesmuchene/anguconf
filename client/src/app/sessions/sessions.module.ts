import { SessionsService } from './sessions.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SessionsComponent } from './sessions.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { SessionFormComponent } from './session-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: SessionsComponent },
	{ path: 'create', component: SessionFormComponent }
];

@NgModule({
	declarations: [ SessionsComponent, SessionFormComponent, DialogComponent ],
	imports: [
		CommonModule,
		MatCardModule,
		MatSlideToggleModule,
		DragDropModule,
		MatDividerModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
		MatCardModule,
		MatDialogModule,
		MatNativeDateModule,
		MatDatepickerModule,
		RouterModule.forChild(routes)
	],
	providers: [ SessionsService ],
	entryComponents: [ DialogComponent ],
	bootstrap: [ SessionsComponent ]
})
export class SessionsModule {}
