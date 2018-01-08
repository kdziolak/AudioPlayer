import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent {

  song = {};

  @Output() save = new EventEmitter();

  onSave() {
    console.log(this.song);
    this.save.emit(this.song);
  }

}
