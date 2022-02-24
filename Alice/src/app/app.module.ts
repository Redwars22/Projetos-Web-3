import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Step1of2Component } from './character-generator/step1/step1.component';
import { Step2Of2Component } from './character-generator/step2/step2.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    Step1of2Component,
    Step2Of2Component,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
