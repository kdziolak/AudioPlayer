import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

@Injectable()
export class AudioPlayerService {

  private baseURL = "https://audioplayer-3e1ba.firebaseio.com/"

  constructor(private http: Http){}

  getSongs(){
    return this.http.get(`${this.baseURL}/songs.json`)
            .toPromise()
            .then(response => this.convert(response.json()));
  }

  private convert(convertResponse){
    return Object.keys(convertResponse)
      .map(id => ({
        id: id,
        artist: convertResponse[id].artist,
        title: convertResponse[id].title,
        type: convertResponse[id].type,
        urlToSong: convertResponse[id].urlToSong,
        urlToPic: convertResponse[id].urlToPic
      }))
      .sort((a, b) => a.artist.localeCompare(b.artist));
  }

}
