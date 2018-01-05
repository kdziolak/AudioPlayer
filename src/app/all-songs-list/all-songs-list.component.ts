import {Component, Input, OnInit} from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-all-songs-list',
  providers: [NgxCarousel],
  templateUrl: './all-songs-list.component.html',
  styleUrls: ['./all-songs-list.component.css']
})
export class AllSongsListComponent implements OnInit {

  @Input() songs = [];
  public carouselTile: NgxCarousel;
  songPlay: boolean = true;
  player;
  songSrc = '';
  val: number = 12;
  val2: number = 9;
  currentSong;

  ngOnInit() {

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
      slide: 2,
      speed: 400,
      interval: 4000,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      loop: this.songPlay,
      touch: true,
      easing: 'ease'
    };
  }

  public carouselTileLoad(evt: any) {}

  play(song, songi) {
    if (this.songPlay) {
      this.songSrc = songi.urlToSong;
      song.src = songi.urlToSong;
      song.src += '=1';
      this.currentSong = song;
      this.carouselTile.interval = 10000000;
      song.style.zIndex = '0';
      this.songPlay = false;
    }else if (!(this.songPlay) && (songi.urlToSong !== this.songSrc)) {
      this.currentSong.src += '=0';
      this.currentSong.style.zIndex = '-1';
      this.currentSong = song;
      this.songSrc = songi.urlToSong;
      song.src = songi.urlToSong;
      song.src += '=1';
      this.carouselTile.interval = 10000000;
      song.style.zIndex = '0';
    }else {
      this.currentSong.src += '=0';
      this.currentSong.style.zIndex = '-1';
      this.carouselTile.interval = 4000;
      this.songPlay = true;
    }
  }
}
