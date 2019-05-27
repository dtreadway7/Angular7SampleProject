import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DndComponent} from "./features/dnd/dnd.component";

const routes: Routes = [
  { path: 'dnd',
    pathMatch: 'full',
    component: DndComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
