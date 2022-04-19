import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEstablishmentModalComponent } from '../add-establishment-modal/add-establishment-modal.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-establishment-board',
  templateUrl: './establishment-board.component.html',
  styleUrls: ['./establishment-board.component.scss'],
})
export class EstablishmentBoardComponent implements OnInit {
  establishMentData = [
    { id: 1, name: 'rai clinic', address: '1.0079', type: 'CLINIC' },
    { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

  headers = [
    'id',
    'establishmentName',
    'address',
    'type',
    'opening time',
    'closing time',
    'pincode',
  ];

  establishmentForm = this.fb.group({
    establishmentName: ['', Validators.required],
    phoneNumber: [''],
    address: ['', Validators.required],
    type: ['', Validators.required],
    openingTime: [''],
    closingTime: [''],
    info: [''],
    pincode: ['', Validators.required],
  });
  constructor(
    private httpService: HttpService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.httpService.getListData('establishment').subscribe((resp) => {
      if (resp) {
        console.log(resp);
        this.establishMentData = resp;
      }
    });
  }
  onSubmit() {
    this.httpService
      .saveData(this.establishmentForm.value, 'establishment')
      .subscribe((resp) => {
        if (resp) {
          window.alert('Success');
        }
      });
  }

  addEstablishment(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }
}
