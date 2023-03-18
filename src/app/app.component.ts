import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IQuestion} from "./model/IQuestion";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:8090/api/v1/search/$';
  questions: IQuestion[] = [];
  allQuestions: IQuestion[] = [];

  getQuestions(title: string, username: string, password: string) {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('responseType', 'text')
      .set('Authorization', 'Basic ' + btoa(username + ':' + password));
    this.http.get<IQuestion[]>((this.baseUrl.replace('$', title)), {'headers': headers})
      .subscribe(models => {
        console.log('response', models)
        this.questions = models
        this.allQuestions = models
      })
  }

  getAnswered(isCheked: boolean) {
    if (isCheked) this.questions = this.allQuestions.filter((q) => q.is_answered)
  }

  getNotAnswered(isCheked: boolean) {
    if (isCheked) this.questions = this.allQuestions.filter((q) => !q.is_answered)
  }

  getAll() {
    this.questions = this.allQuestions
  }
}
