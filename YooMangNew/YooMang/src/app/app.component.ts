//import { Component } from '@angular/core';
import { VideoDetail } from './components/video-detail.model';
import { DomSanitizer, SafeResourceUrl  } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YooMang';
  results: VideoDetail[];
  loading: boolean;
  message = '';
  url: SafeResourceUrl = '';
  firstUrl : SafeResourceUrl = 'https://www.youtube.com/embed/'
  // <iframe src="https://www.youtube.com/embed/CWYDxh7QD34?enablejsapi=1&origin=http://localhost:4200" frameborder="0"></iframe>
  secondUrl : SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {

    // &origin=http://localhost:4200
    // this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/NLl8qQWJsa4")
    // this.url = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/1J0o3v8ptHY")

  }
  updateResults(results: VideoDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = 'Not found...';
    } else {
      this.message = 'Top 10 results:';
    }
  }

  myCalledEvent(data) {
    console.log(data.id)
    let completeUrl = this.firstUrl + data.id;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(completeUrl);
    console.log("this is in the parent Component!!", data)
  }
}
