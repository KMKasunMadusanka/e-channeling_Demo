import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FormControl } from '@angular/forms';
import { LoginServiceService } from './../login-service.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})

export class SettingComponent implements OnInit {
  Fname;
  Sname;
  userName;
  regNo;
  phone;
  dob;
  addr;
  email;
  gender;
  imagePath;
  lineChartOptions;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  date;


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  constructor(private loginService: LoginServiceService) {
    this.imagePath = "https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=1dac3fdf77d7c4c41bf0090575289e6d2&authkey=AX1zWkXzsCLAU9Wa2rex6Lk&expiration=2018-01-24T09%3A08%3A00.000Z&e=dda926b2f92f488e92b637e45a6780f0";
   }

  ngOnInit() {
    if (this.loginService.getLoginStatus() == 'yes') { 
      let data = this.loginService.getUserdata();
      this.Fname = data.first_name;
      this.Sname = data.second_name; 
      this.addr = data.address;
      this.userName = data.username;
      this.regNo = data.regNo;
      this.phone = data.telephone;
      this.email = data.email;
      this.date = data.dob;
      this.date = new Date(this.date);
      this.gender = data.gender;
      this.imagePath = data.imageLink;
    }
  }

  // lineChart
  public lineChartData: Array<any> = [
    [2000, 1950, 1860, 3000],
    [1720, 2000, 2500, 2000]
  ];
  public lineChartLabels: Array<any> = ['April', 'May', 'June', 'July'];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';

  // Pie
  public pieChartLabels: string[] = ['Asiri Hospital', 'Nawaloka Hospital', ' Genaral Hospital'];
  public pieChartData: number[] = [3, 5, 1];

  public randomizeType(): void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  { position: '2017/12/06', name: 'Dr.Kasun Madusanka', weight: 'Hemas Hospital', symbol: '1500.00' },
  { position: '2017/05/16', name: 'Dr.Nishantha Hemachandra', weight: 'Asiri Hospital', symbol: '2575.00' },
  { position: '2017/02/03', name: 'Dr.Kasun Madusanka', weight: 'Hemas Hospital', symbol: '1500.00' },
  { position: '2016/05/17', name: 'Dr.Hemamal Kumarihami', weight: 'Genaral Hospital', symbol: '2000.00' },
  { position: '2016/05/04', name: 'Dr.Chaminda Kumara', weight: 'Navaloka Hospital', symbol: '2750.00' }
];
