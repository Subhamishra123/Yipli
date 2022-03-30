import { Component, OnInit } from '@angular/core';
import {IData} from '../../model/IData';
import {ProfileService} from '../../service/profile.service';
import {IProfile} from '../../model/IProfile';

@Component({
  selector: 'app-yipli',
  templateUrl: './yipli.component.html',
  styleUrls: ['./yipli.component.css']
})
export class YipliComponent implements OnInit {


  public data: IData = {} as IData;
  public profiles: IProfile[] = [] as IProfile[];
  public errorMessage = '';
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getRecords().subscribe(data => {
      this.data = data;
      this.profiles = this.sort(this.data.body.result);
    }, error => {
      this.errorMessage = error;
    });
  }
  public sort(profile): IProfile[]{
    profile.sort((a, b) => {
      return -a.count + b.count;
    });

    return profile;
  }

}
