import { Component, OnInit } from '@angular/core';
import {IData} from '../../model/IData';
import {ProfileService} from '../../service/profile.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  public data: IData = {} as IData;
  public errorMessage = '';
  constructor(private service: ProfileService) { }

  ngOnInit(): void {
    this.service.getRecords().subscribe(data => {
      this.data = data;
    }, error => {
      this.errorMessage = error;
    });
  }

}
