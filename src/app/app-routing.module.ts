import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabelPresenterComponent } from './label-presenter/label-presenter.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: LabelPresenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
