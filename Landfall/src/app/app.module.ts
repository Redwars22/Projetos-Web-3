import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/components/header.component';
import { MainComponent } from './ui/components/main.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, MainComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
