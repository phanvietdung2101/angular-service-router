import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DictionaryService } from './../dictionary.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
interface Definition {
  results : {
    definition : string
  }
}
@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit,OnDestroy {
  word: string;
  meaning: any;
  sub: Subscription
  constructor(private dictionaryService: DictionaryService,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.word = paramMap.get('word');
      this.meaning = this.dictionaryService.getResult(this.word);
      console.log(this.meaning)
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe;
  }

}
