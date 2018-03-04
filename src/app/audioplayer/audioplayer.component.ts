import { Component, OnInit, OnDestroy } from '@angular/core';
import { AudioPlayerTrack } from './audioplayer-track';
import { trackList } from './audioplayer-tracks';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit, OnDestroy {
  constructor() { }
  private __audio: any = null;
  private __playing = false;
  private __tracks: AudioPlayerTrack[] = trackList;
  private __currentTrack: AudioPlayerTrack;
  private __trackIndex = 0;
  panelOpenState = false;
  __playTrack() {
    this.__audio.play();
    this.__playing = true;
  }
  __pauseTrack() {
    this.__audio.pause();
    this.__playing = false;
  }
  __stopTrack() {
    this.__audio.pause();
    this.__playing = false;
    this.__audio.currentTime = 0;
  }
  __nextTrack() {
    this.__stopTrack();
    this.__trackIndex++;
    if (this.__trackIndex > this.__tracks.length) {
      this.__trackIndex = 0;
    }
    this.__currentTrack = this.__tracks[this.__trackIndex];
    this.__audio.src = this.__currentTrack.uri;
    this.__audio.load();
    this.__playTrack();
  }
  __previousTrack() {
    this.__stopTrack();
    this.__trackIndex--;
    if (this.__trackIndex < 0) {
      this.__trackIndex = this.__tracks.length - 1;
    }
    this.__currentTrack = this.__tracks[this.__trackIndex];
    this.__audio.src = this.__currentTrack.uri;
    this.__audio.load();
    this.__playTrack();
  }
  __setTrack(track: AudioPlayerTrack) {
    this.__stopTrack();
    this.__trackIndex = track.id;
    this.__currentTrack = this.__tracks[track.id];
    this.__audio.src = this.__currentTrack.uri;
    this.__audio.load();
    this.__playTrack();
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
