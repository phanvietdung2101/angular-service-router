import { DictionaryService } from './../dictionary.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: string;
  result;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
  }

  search(){
    this.result = this.dictionaryService.getResult(this.word);
  }

}
