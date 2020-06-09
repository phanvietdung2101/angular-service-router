import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Word } from './model/Word';
@Injectable({
  providedIn: 'root',
})
export class DictionaryService {

  constructor(private httpClient: HttpClient) {}

  // getResult(word) {
  //   fetch('https://wordsapiv1.p.rapidapi.com/words/' + word, {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
  //       'x-rapidapi-key': '0350f62424msh45f58ebd7a09bd1p1cbd37jsn4a2679326399',
  //     },
  //   })
  //     .then((response) => {
  //       console.log(response.json()) ;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  getResult(word): Observable<Word> {
    const headers = {
      'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
      'x-rapidapi-key': '0350f62424msh45f58ebd7a09bd1p1cbd37jsn4a2679326399'
    }
    return (
      this.httpClient.get<Word>('https://wordsapiv1.p.rapidapi.com/words/' + word,{headers})
    )
  }
}
