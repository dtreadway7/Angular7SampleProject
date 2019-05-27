import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material";
import { MaterialModule } from "./features/material-module";
import { HttpClientModule } from "@angular/common/http";
import { DndComponent } from './features/dnd/dnd.component';
import { DndFormCreatorComponent } from './features/dnd-form-creator/dnd-form-creator.component';
import { DropListScrollerDirective } from "./drop-list-scroller.directive";

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    DndFormCreatorComponent,
    DropListScrollerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
