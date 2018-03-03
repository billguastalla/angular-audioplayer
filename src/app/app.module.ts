import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';


@NgModule({
  declarations: [
    AppComponent,
    AudioplayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
