import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//importing our photo service.
import { PhotoServiceService } from '../../services/photo-service.service';

//here we are setting up an interface which will allow us to define the functionality of our event.
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  photoSelected: String | ArrayBuffer;

  constructor(private photoService: PhotoServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    this.photoService.createPhoto(title.value, description.value, this.file)
    .subscribe(res =>{
      this.router.navigate(['/photos']);
    }, err => console.log(err));
    return false;
  }

}
