import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SessionsComponent } from './sessions.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
	declarations: [ SessionsComponent ],
	imports: [
		CommonModule,
		MatCardModule,
		MatSlideToggleModule,
		BrowserAnimationsModule,
		DragDropModule,
		MatDividerModule
	],
	exports: [ SessionsComponent ]
})
export class SessionsModule {}
