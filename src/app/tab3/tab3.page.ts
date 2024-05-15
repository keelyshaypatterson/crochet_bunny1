import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  slipknotUrl!: string;
  chainUrl!: string;
  singleCrochetUrl!: string;
  halfDoubleCrochetUrl!: string;
  doubleCrochetUrl!: string;
  trebleCrochetUrl!: string;
  doubleTrebleCrochetUrl!: string;
  tripleTrebleCrochetUrl!: string;
  magicRingUrl!: string;
  frontLoopOnlyUrl!: string;
  backLoopOnlyUrl!: string;

  constructor(private storage: AngularFireStorage) {}

  ngOnInit() {
    this.getVideoUrls();
  }

  getVideoUrls() {
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/Slipknot - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.slipknotUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/chain - Made with Clipchamp_1713726620464.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.chainUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/single - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.singleCrochetUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/halfdouble - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.halfDoubleCrochetUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/double - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.doubleCrochetUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/treble - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.trebleCrochetUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/doubletreble - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.doubleTrebleCrochetUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/tripletreble - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.tripleTrebleCrochetUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/MagicRing - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.magicRingUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/frontloop - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.frontLoopOnlyUrl = url;
      });
    this.storage
      .refFromURL(
        'gs://crochetbunny1.appspot.com/backloop - Made with Clipchamp.mp4'
      )
      .getDownloadURL()
      .subscribe((url) => {
        this.backLoopOnlyUrl = url;
      });
  }
}
