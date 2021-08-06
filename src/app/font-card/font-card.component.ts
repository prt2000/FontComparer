import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-card',
  templateUrl: './font-card.component.html',
  styleUrls: ['./font-card.component.css']
})
export class FontCardComponent implements OnInit {
  sampleParah:string = "This is a sample paragraph trying to show the differences between Serif and Sans Serif fonts. Hopefully you can see how the serif font seems more readable in this paragraph while also giving the same feeling as reading a newspaper article while it is in a smaller size. Meanwhile the sans serif font looks more modern and better suited as a title.";
  constructor() { }

  ngOnInit(): void {
  }

}
