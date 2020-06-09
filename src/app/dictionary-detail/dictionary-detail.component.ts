import { Word } from './../model/Word';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DictionaryService } from './../dictionary.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit,OnDestroy {
  input: string
  meaning: any
  sub: Subscription
  word: Word
  constructor(private dictionaryService: DictionaryService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.input = paramMap.get('word');
      // Use service to get define
      this.dictionaryService.getResult(this.input).subscribe(result => {
        this.word = result;
      });
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe;
  }

}
