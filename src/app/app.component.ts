import { Component } from '@angular/core';
import { AllSongsListComponent } from "./all-songs-list/all-songs-list.component";
import { AudioPlayerService } from "./audio-player.service";
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-root',
  providers: [AllSongsListComponent, AudioPlayerService, NgxCarousel],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  songs = [];

  constructor(private audioPlayer: AudioPlayerService){
    this.audioPlayer.getSongs()
      .then(songs => this.songs = songs);
  }
}
