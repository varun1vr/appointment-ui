import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router,
    private tokenService:TokenstorageService,
    private httpService:HttpService) { };

    queries:Array<any>=new Array();
    queryAvaiable:boolean=false;
  ngOnInit(): void {
  }

  createQuery() {
    this.route.navigateByUrl("query");
  }

  viewQueries() {
    const user = this.tokenService.getUser();
    this.httpService.getListData("query/user/"+user.id).subscribe((resp)=> {
      if(resp){
        console.log(resp);
        this.queries = resp;
        this.queryAvaiable = true;
      }
    });
  }

  goToQuery(id:number){
    console.log(id);
    event?.stopPropagation();
    this.route.navigateByUrl("query/"+id);
  }

}
