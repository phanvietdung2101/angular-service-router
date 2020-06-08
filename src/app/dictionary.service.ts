import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor() {}

  getResult(word) {
    let url  = 'https://wordsapiv1.p.rapidapi.com/words/' + word
    fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
        'x-rapidapi-key': '0350f62424msh45f58ebd7a09bd1p1cbd37jsn4a2679326399',
      },
    })
      .then((response) => {
        return response
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
