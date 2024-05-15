import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  homePictureUrl!: string;

  constructor(private storage: AngularFireStorage) {}
  ngOnInit() {
    this.getimageUrls();
  }

  getimageUrls() {
    this.storage
      .refFromURL('gs://crochetbunny1.appspot.com/Crochet.JPG')
      .getDownloadURL()
      .subscribe((url) => {
        this.homePictureUrl = url;
      });
  }
}
