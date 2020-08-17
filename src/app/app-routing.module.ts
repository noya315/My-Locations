import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsPageComponent } from './locations/locations-page/locations-page.component';
import { CategoriesPageComponent } from './categories/categories-page/categories-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesPageComponent },
  { path: 'locations', component: LocationsPageComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
