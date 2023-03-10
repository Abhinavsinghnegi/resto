import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { RestoService } from "../services/resto.service";

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alert:boolean=false;

  constructor(private resto:RestoService) { }

  ngOnInit(): void {
  }

  addResto = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })

  collectResto = () => {
    this.resto.saveResto(this.addResto.value).subscribe((result) => {
      this.alert=true;
      this.addResto.reset({});
    })
    
  }

  closeAlert = () => {
    this.alert = false;
  }

}
