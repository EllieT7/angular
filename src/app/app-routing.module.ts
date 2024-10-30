import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPageComponent } from './products/detail-page/detail-page.component';
import { ListComponent } from './products/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'detail/:id', component: DetailPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
