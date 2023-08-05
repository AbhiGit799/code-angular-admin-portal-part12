import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import * as feather from 'feather-icons';
const feather = require('feather-icons');   //npm i --save-dev @types/feather-icons    

import Swal from 'sweetalert2'
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
  
})
export class AppComponent {

  constructor(private _location:Location)
  {

  }

  goback()
  {
   this._location.back();
  }
  

}



