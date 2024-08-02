import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyseService {

  public host:String="http://127.0.0.1:5000/"
  constructor(private http:HttpClient) { }
  
  public resumeExtraction(form:any){
    return this.http.post(this.host+"analyze_resume",form);
  }
  
}
