import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit, OnDestroy {

  constructor() { }

  private __audio: any = null;

  __playTrack() {
    this.__audio.play();
  }
  __pauseTrack() {
    this.__audio.pause();
  }
  __stopTrack() {
    this.__audio.pause();
    this.__audio.currentTime = 0;
  }

  __nextTrack() {

  }

  __previousTrack() {
    
  }

  __setVolume(vol) {
    this.__audio.volume = vol;
  }

  __setProgress(prog) {
    this.__audio.currentTime = prog;
  }

  ngOnInit() {
    this.__audio = new Audio();
  }
  ngOnDestroy() {
    if (this.__audio) {
      this.__audio.pause();
      this.__audio = null;
    }
  }
}
