import { Component, OnInit } from '@angular/core';
import { PhotoServiceService } from '../../services/photo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: any;

  constructor(private photoService: PhotoServiceService, private router: Router) { }

  ngOnInit(): void {
    this.photoService.getPhoto()
    .subscribe(res => this.photos = res,
              err => console.log(err)
    );
  }

  selectedCard(id: string) {
    this.photoService.getImg(id)
    .subscribe(res => {
      this.router.navigate(['/photos/' + id])
    }, err => console.log(err));
  }

}
