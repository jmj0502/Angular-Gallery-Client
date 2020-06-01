import { Injectable } from '@angular/core';
//imporpoting other angular models.
import { HttpClient } from '@angular/common/http';

//importing our Photo interface.
import { Photo } from '../interfaces/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  link = 'http://localhost:4000/api/photos';

  constructor(private http: HttpClient) { }

  //here we are creating a method which will allow us to post our images to the backend.
  createPhoto(title: string, description: string, image: File) {
    const fd = new FormData;
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', image);
    return this.http.post(this.link, fd);
  }

  //this method will return a photo back to our ui.
  getPhoto() {
    return this.http.get<Photo[]>(this.link)
  }

  getImg(id:string) {
    return this.http.get<Photo>(this.link + '/' + id);
  }

  deleteImg(id:string) {
    return this.http.delete(this.link + '/' + id)
  }

  updatePhoto(id: string, title: string, description: string) {
    return this.http.put(this.link + '/' + id, { title, description });
  }
}
