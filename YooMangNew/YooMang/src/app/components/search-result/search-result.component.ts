import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoDetail } from '../video-detail.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() result: VideoDetail;
  @Output() myclick: any = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  myVideoUrl(video) {
      console.log(video, "checking !!!")
      this.myclick.emit(video);
  }
}
