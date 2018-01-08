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
  index = 0;

  public carouselTile: NgxCarousel;
  songPlay: boolean = true;
  songSrc = '';
  currentSong;

  ngOnInit() {

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 3, all: 0},
      speed: 400,
      interval: 4000,
      animation: 'lazy',
      point: {
        visible: true
      },
      loop: this.songPlay,
      touch: true,
      easing: 'ease'
    };

  }

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

  searchSong(songTitle, toSearch, prev, next) {
    if (songTitle.indexOf(toSearch)) {
      if (this.index <= this.carouselTile.grid.lg) {
        this.carouselTile.interval = 10000000;
        this.carouselTile.point.visible = false;
        prev.style.display = 'none';
        next.style.display = 'none';
      }
      this.index = 0;
      return 'none';
    }
    if(this.index >= 5) {
      prev.style.display = 'inline';
      next.style.display = 'inline';
    }
    this.index++;
    return;
  }

  setView() {
    if(this.songPlay) {
      this.carouselTile.interval = 4000;
      this.carouselTile.point.visible = true;
      return true;
    }else{
      this.carouselTile.interval = 100000000;
      this.carouselTile.point.visible = true;
      return true;
    }
  }
}
