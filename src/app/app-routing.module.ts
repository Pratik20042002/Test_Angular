import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: '/summary', pathMatch: 'full' }, // Default route
  // { path: 'summary', component: SummaryViewComponent },
  // { path: 'details', component: DetailedViewComponent },
  // { path: '**', redirectTo: '/summary' }, // Wildcard route for 404
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
