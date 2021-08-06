import { Component, Input, OnInit } from '@angular/core';
import { textInputService } from './textInput.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  @Input() name:string="";

  constructor(private textInputService:textInputService ) { 
    this.textInputService.newName.subscribe(
      (newName:string) => this.name=newName 
    );
  }

  ngOnInit(): void {
    this.name=this.textInputService.name;
  }

  inputChange(newInput:string){
    this.textInputService.inputChange(newInput);
  }
}
