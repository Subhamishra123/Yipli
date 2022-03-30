import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {IData} from '../model/IData';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }
  public getRecords(): Observable<IData>{
    const dataUrl = 'https://us-central1-yipli-project.cloudfunctions.net/leaderBoard/campaign/result/FknYkZF49CCy';
    return this.httpClient.get<IData>(dataUrl).pipe(retry(1),
      catchError(this.handleError));
  }
  // tslint:disable-next-line:typedef
  public handleError(error: HttpErrorResponse){
    let errorMessage = '';
    if (error.error instanceof ErrorEvent){
      errorMessage = `Error : ${error.error.message}`;
    }
    else{
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
