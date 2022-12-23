import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  editResto = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
  }

}
