import { DictionaryService } from './../dictionary.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css'],
})
export class DictionaryComponent implements OnInit {
  word: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoDictionaryDetail(){
    this.router.navigateByUrl('dictionary/' + this.word)
  }

}
