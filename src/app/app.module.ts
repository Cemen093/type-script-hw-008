import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { WarriorsComponent } from './warriors/warriors.component';
import { WarriorComponent } from './warrior/warrior.component';

@NgModule({
  declarations: [
    WarriorsComponent,
    WarriorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [WarriorsComponent]
})
export class AppModule { }
