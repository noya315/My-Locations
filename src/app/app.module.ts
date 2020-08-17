import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LocationsModule } from './locations/locations.module';
import { CategoriesModule } from './categories/categories.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CategoriesModule,
    LocationsModule,
    AppRoutingModule,

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
