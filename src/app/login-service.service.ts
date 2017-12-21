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
        imageLink: 'https://lh3.googleusercontent.com/X8sfWgUgmfxPgnrzcfRmOK5JkYJqatvBbjFdoZut9ZoPmfUYW0ynFWjIpURx9QFVV-6FpayF0uy_sloVdYWPXLuHXnOxTivdMbzbospWxRd_ZCO7XcImMlCDWRe-W_LFhAX-h1LTdlgRY0ddgoUofJ8dnztbCOvihxuEHHFLAuJs8cf8fq6Up_PwiakybVysmxcmcOGQ4LsAXban400M_WFQ1UOB55D28djOm530zIend6G0QSM_B5o78OJ-fGQEl0nPv883AOvq_Sp_eQRJLmeOvIXW1HPf52axwy0XgKHXOW9uoYcaKCu2jSa9K5NBEVIVaCx89SyoWzwhfBKffRUKZR9g_LySAn-omUmu5TkalRSft2k5qUGEAzcLYwBI7H8NvwB25TvPf0sChhQnA-8H469Zl-Qowq54xVDN1oL82GyK70EH7AemSvZLhOyzCHoarDFkVF3JnXaHU6r1m3h5FxZ7Rc1K1D63bi8QE1JGTSA0cPv90273V9pTgyTduaCMKiG-c_pIAlcZ77aTEIea1fihB04mBzafJNwBmICF76t48DRJk9w7nT29lBi0VUNSycs2u8LokDpXAU2xE3P35Gy5TFJEqrDUpCA=s637-no',
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
