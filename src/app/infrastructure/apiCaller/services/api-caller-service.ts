import { Injectable } from "@angular/core";
//import { HTTP,HTTPResponse } from '@ionic-native/http/ngx';
import { BaseRequestDTO } from "../domain/requestDTO";
import { BaseResponseDTO } from "../domain/responseDTO";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { HttpClient,HttpResponse,HttpHeaders } from "@angular/common/http";

@Injectable()
export class ApiCallerService {
  //private baseUrl: string = "";

  constructor(private http: HttpClient) {

  }

  private Post<TRequest extends BaseRequestDTO, TResponse extends BaseResponseDTO>(url: string, request: TRequest, headers: any): Observable<TResponse> {
    return this.http.post<TResponse>(url, request, { headers: headers, observe: 'response' })
      .map((res: HttpResponse<TResponse>) => {
        console.log(res);
        return res.body;
      })
      .switchMap((res: TResponse) => {
        console.log(res);
        if (res.success){
          console.log("http - url: " +  url);
          return new Observable<TResponse>((observable) => { observable.next(res); observable.complete(); });
        }
        
       //Error handling yapılaiblir.
            
        return new Observable<TResponse>((observable) => { observable.next(res); observable.complete(); });
      });
  }

  CallApi<TRequest extends BaseRequestDTO, TResponse extends BaseResponseDTO>(url: string, request: TRequest): Observable<TResponse> {

    //let messageHeader: string = "test";
   //authentication kontrolü yapılabilir
   //custom header bilgisi gönderilebilir.
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      //"messageHeader": messageHeader
    });

    return this.Post<TRequest, TResponse>(url, request, headers);
  }
}