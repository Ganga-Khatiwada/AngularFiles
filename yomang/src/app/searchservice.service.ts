import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VideoDetail } from 'src/app/video-details.model';

const YOUTUBE_API_KEY = 'AIzaSyCX8CqvXHen2A6DIYlvuj9MnAaT1RhGBj';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'
@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private http: HttpClient) { }
    search(value: string): Observable<VideoDetail[]> {
      const params: string = [
        `q=${value}`,
        `key=${YOUTUBE_API_KEY}`,
        `part=snippet`,
        `type=video`,
        `maxResults=10`
      ].join('&');
      const valueUrl = `${YOUTUBE_API_URL}?${params}`;
 
      return this.http.get(valueUrl).pipe(map(response => {
        return response['items'].map(item => {
          return new VideoDetail({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      }));

  }
}
