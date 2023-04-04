import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipComponent } from './chip/chip.component';
import { ChipUpperCasedPipe } from './chip/directives/uppercase.pipe';
import { MinimumChipsErrorDirective } from './chip/directives/minimum-chips-error.directive';
import { DimInputOnEditDirective } from './chip/directives/dim-input-on-edit.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChipComponent,
    ChipUpperCasedPipe,
    MinimumChipsErrorDirective,
    DimInputOnEditDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ChipUpperCasedPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
