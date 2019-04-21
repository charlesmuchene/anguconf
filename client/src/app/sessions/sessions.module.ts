import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { SessionsComponent } from './sessions.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
	declarations: [ SessionsComponent ],
	imports: [ CommonModule, MatCardModule, MatSlideToggleModule, BrowserAnimationsModule, DragDropModule ],
	exports: [ SessionsComponent ]
})
export class SessionsModule {}
