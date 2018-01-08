import { Component } from '@angular/core';
import { AllSongsListComponent } from "./all-songs-list/all-songs-list.component";
import { AudioPlayerService } from "./audio-player.service";

@Component({
  selector: 'app-root',
  providers: [AllSongsListComponent, AudioPlayerService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  songs = [];
  menuClass = [{
      optionName: 'song-list',
      decription: 'Wszystkie utwory'
    },
    {
      optionName: 'xxx',
      decription: 'XXX'
    },
    {
      optionName: 'xxx',
      decription: 'XXX'
    },
    {
      optionName: 'xxx',
      decription: 'XXX'
    },
    {
      optionName: 'add-song active',
      decription: 'Dodaj utwór'
    }];
    prevTarget;


  constructor(private audioPlayer: AudioPlayerService){
    this.audioPlayer.getSongs()
      .then(songs => this.songs = songs);
  }

  checkLi(elemLi) {
    for (let i = 0; i < elemLi.children.length; i++) {
      if (elemLi.children[i].classList.contains('song-list') &&
          elemLi.children[i].classList.contains('active') ) {
        return 'song-list';
      }else if (elemLi.children[i].classList.contains('add-song') &&
                elemLi.children[i].classList.contains('active')) {
        return 'add-song';
      }
    }
  }

  setActive(event) {
    if (event.target.tagName === 'UL') {
      return;
    }
    if (!this.prevTarget){
      console.log(event.target.tagName)
      event.target.classList.add('active');
      this.prevTarget = event.target;
    }else {
      this.prevTarget.classList.remove('active');
      event.target.classList.add('active');
      this.prevTarget = event.target;
    }
  }

  save(song) {
    console.log(song);
  }
}
