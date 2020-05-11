import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface IProduct {
  id: number;
  title: string;
  img: string;
  category: string;
  status: string;
  statusColor: string;
  description: string;
  sales: number;
  stock: number;
  date: string;
}

export interface IProductResponse {
  data: IProduct[];
  status: boolean;
  totalItem: number;
  totalPage: number;
  pageSize: string;
  currentPage: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  apikey='AIzaSyAWvmK7cavbsCrcTHV09fZbdDd1YYKjeGM';
  dataApi=environment.firebase.databaseURL;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    


  }
  getProducts(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    const url = environment.apiUrl + '/cakes/paging';
    let params = new HttpParams();
    params = params.append('pageSize', pageSize + '');
    params = params.append('currentPage', currentPage + '');
    params = params.append('search', search);
    params = params.append('orderBy', orderBy);

    return this.http.get(url, { params })
      .pipe(
        map((res: IProductResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
  authkey:'7BJTork8qwTLlORAHODyZcGZSmc2';
  getApiCall() {
    const url = `${this.dataApi}/Restaurants/Restaurant/7BJTork8qwTLlORAHODyZcGZSmc2/RestaurantData/Areas`;
    let params = new HttpParams();
   const paramskey=this.authkey;
    return this.http.get(url, { params})
      .pipe(
        map((res: IProductResponse) => {
          return res;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  delCate( requsetbody?:any, queryParam?:any):Observable<any>{
    const url =`https://us-central1-restaurantframework-775a5.cloudfunctions.net/addArea`;
    return this.http.post(url, requsetbody, {headers:new HttpHeaders({'content-Type': 'application/json'}).set('Authorization', `Bearer ${this.apikey}`), responseType: 'text' as 'json'})
  }
}
