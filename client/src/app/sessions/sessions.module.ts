import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SessionsComponent } from './sessions.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { SessionFormComponent } from './session-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@NgModule({
	declarations: [ SessionsComponent, SessionFormComponent, DialogComponent ],
	imports: [
		CommonModule,
		MatCardModule,
		MatSlideToggleModule,
		BrowserAnimationsModule,
		DragDropModule,
		MatDividerModule,
		MatButtonModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		MatInputModule,
		MatCardModule,
		MatDialogModule,
		MatNativeDateModule,
		MatDatepickerModule
	],
	entryComponents: [ DialogComponent ],
	exports: [ SessionsComponent ]
})
export class SessionsModule {}