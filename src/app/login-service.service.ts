import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {
  loginStatus: string;
  logedUserData = {
    username: String,
    regNo: String,
    imageLink: String,
    first_name: String,
    second_name: String,
    telephone: String,
    dob: String,
    address: String,
    email: String,
    gender: String
  };

  constructor() { }

  users = [
    {
      username: 'kasun-123',
      Password: '123',
      userdata: {
        username: 'kasun-123',
        regNo: '1234-6543-5678',
        imageLink: 'https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=1f618aaa43a1e4bb6bf7bce205e422ecb&authkey=AUe7nQveIT8E9Pck5lZ46yc&expiration=2018-01-24T09%3A09%3A05.000Z&e=4c267d579b8344fd80a0fe21281ab726',
        first_name: 'Kasun',
        second_name: ' Madusaka',
        telephone: '071-25642012',
        dob: '1995/10/14',
        address: 'No 1299, Hokandara Road,Pannipitiya.',
        email: 'kmkasunmadushanka@gmail.com',
        gender: 'male'
      }
    },
    {
      username: 'dilshani',
      Password: '123',
      userdata: {
        username: 'dilshani',
        regNo: '1234-6543-5678',
        imageLink: 'https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=166005136b13749c2850f3bd6fdbdedb1&authkey=AZMGTwe9E-9AU9WcANhrHo8&expiration=2018-01-24T09%3A09%3A23.000Z&e=11502604f28e41ee88871a734f9146b5',
        first_name: 'Dilshani',
        second_name: ' Bandara',
        telephone: '071-4567567',
        dob: '1992/10/26',
        address: 'No 500, University Road,Wijerama.',
        email: 'dilshanibandara@gmail.com',
        gender: 'female'
      }
    },
    {
      username: 'ranura',
      Password: '123',
      userdata: {
        username: 'ranura',
        regNo: '1234-6543-5678',
        imageLink: 'https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=17f8dd945a015494692df996e2fafa20f&authkey=ATBLqruHV4L44W9LbgUkUpM&expiration=2018-01-24T09%3A09%3A45.000Z&e=3b603266a6214570a1d6c6e8efc89730',
        first_name: 'Ranura',
        second_name: ' Dissanayaka',
        telephone: '071-5676567',
        dob: '1989/01/20',
        address: 'No 100, Madinnagoda,Rajagiriya.',
        email: 'ranura@gmail.com',
        gender: 'male'
      }
    },
    {
      username: 'dhanuka',
      Password: '123',
      userdata: {
        username: 'dhanuka',
        regNo: '1234-6543-5678',
        imageLink: 'https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=11a0b8a43804446828035a870811641e3&authkey=AekBiBx5HYkYO2EN8gOsEVs&expiration=2018-01-24T09%3A10%3A04.000Z&e=c968c0c7c45249b982f47e4c27ca49df',
        first_name: 'Dhanuka',
        second_name: ' Perera',
        telephone: '071-5678765',
        dob: '1994/12/26',
        address: 'No 100, High way,Waththala.',
        email: 'dhanuka@gmail.com',
        gender: 'male'
      }
    },
    {
      username: 'saman',
      Password: '123',
      userdata: {
        username: 'saman',
        regNo: '1234-6543-5678',
        imageLink: 'https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=1d2bdffeb3a2b4c08b7584126aa7bd356&authkey=ARp5z-3hC7PEzIvVLr6Eyfw&expiration=2018-01-24T09%3A10%3A17.000Z&e=df85a3553ebb4ecc89c1d6c16011f4e4',
        first_name: 'Saman',
        second_name: ' Cahndana',
        telephone: '071-578940',
        dob: '1990/11/19',
        address: 'No 100, new Kandy Road,Arangala.',
        email: 'saman@gmail.com',
        gender: 'male'
      }
    },
    {
      username: 'lakith',
      Password: '123',
      userdata: {
        username: 'lakith',
        regNo: '1234-6543-5678',
        imageLink: 'https://mysliit-my.sharepoint.com/personal/it15116420_my_sliit_lk/_layouts/15/guestaccess.aspx?docid=13e5b3c0e5c17496b9b0c50a64365c68a&authkey=AQYfisTzqQZW_ytD_Srf44Y&expiration=2018-01-24T09%3A10%3A30.000Z&e=ad0770ad5d58477b86342f87422dc464',
        first_name: 'Lakith',
        second_name: ' Candeepa',
        telephone: '071-5673884',
        dob: '1996/01/19',
        address: 'No 100, Navinna,Maharagama.',
        email: 'saima@gmail.com',
        gender: 'male'
      }
    }
  ];


  checkUser(username, Password) {
    for (const user of this.users) {
      if (username === user.username && Password === user.Password) {
        this.setLoginStatus('yes');
        this.setUserdata(user.userdata);
        console.log(this.getUserdata());
      }
    }

  }

  setLoginStatus(status) {
    this.loginStatus = status;
  }

  getLoginStatus() {
    return this.loginStatus;
  }

  setUserdata(userdata) {
    this.logedUserData = userdata;
  }

  getUserdata() {
    return this.logedUserData;
  }

}
