import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhotoServiceService } from '../../services/photo-service.service';
import { Photo } from '../../interfaces/Photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private photoService: PhotoServiceService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getImg(this.id)
      .subscribe(
        res => {
          this.photo = res;
        }, err => console.log(err)
      )
    })
  }

  deletePhoto(id: string) {
    this.photoService.deleteImg(id)
    .subscribe( res => {
      console.log(res);
      this.router.navigate(['/photos']);
    }, err => console.log(err))
  }

  updateImg(title: HTMLInputElement, description: HTMLTextAreaElement): boolean {
   this.photoService.updatePhoto(this.id, title.value, description.value)
   .subscribe(res => {
     console.log(res);
     this.router.navigate(['/photos']);
   }, err => console.log(err))
   return false;
  }

}
