import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable()
export class textInputService{
    name:string = "Preet";
    @Output() newName = new EventEmitter<string>();
    inputChange(input:string){
        this.name=input;
        this.newName.emit(this.name);
    }
}