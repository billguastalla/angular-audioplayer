import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AudioplayerComponent } from './audioplayer/audioplayer.component';
import { MatSliderModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AudioplayerComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
