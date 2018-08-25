import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public http:HttpClient){
  	console.log("dsadas")
http.get("/api/users").subscribe(data=>{

	console.log("dsadas")
})
  }
 
}
