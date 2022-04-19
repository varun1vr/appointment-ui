import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { TokenstorageService } from 'src/app/services/tokenstorage.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  queryId!: number;
  question: string = "";
  messages: Array<any> = new Array();
  constructor(
    private http: HttpService,
    private fb: FormBuilder,
    private tokenService: TokenstorageService,
    private route: ActivatedRoute,
    public dialog: MatDialog) {
    this.route.params.subscribe(param => {
      if (param && param.id) {
        console.log(param);
        this.queryId = param.id;
        this.http.getListData("message/query/" + param.id).subscribe(resp => {
          if (resp) {
            this.messages = resp;
          }
        });
      } else {
        const user = this.tokenService.getUser();
        
        const dialogRef = this.dialog.open(SessionQueryDialog, {
          width: '250px',
         // data: {name: this.name, animal: this.animal}
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          const query: Query = {
            "userId": user.id,
            "name": result,
          }
          this.http.saveData(JSON.stringify(query), "query").subscribe((resp: any) => {
            if (resp) {
              console.log(resp);
              this.queryId = resp['id'];
            }
          });
         
        });

        
      }
    })

  }


  ngOnInit(): void {
    console.log("oninit");

  }

  createQuestion(event: any) {
    const question = {
      "text": event,
      "queryId": this.queryId,
      "createdByUser": true,
    }
    this.http.saveData(JSON.stringify(question), "message").subscribe((resp: any) => {
      if (resp) {
        console.log(resp);
        this.question = "";
        this.messages.push(resp);
      }
    })
  }

}
export interface Query {
  userId: number;
  id?: number;
  name:string;
}

@Component({
  selector: 'session-query-dialog',
  templateUrl: 'session-query-dialog.html',
})
export class SessionQueryDialog {

  constructor(
    public dialogRef: MatDialogRef<SessionQueryDialog>) {}
    data:string="";
  onNoClick(): void {
    this.dialogRef.close();
  }

}
