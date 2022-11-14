import { Component } from "@angular/core";

@Component({
    selector: "app-inputs" ,
    templateUrl: "./inputs.component.html" ,
    styleUrls: ["./inputs.component.css"]
})

export class InputsComponent {

    colors = [
        {id: 1 , name: "Red"} ,
        {id: 2 , name: "Green"} ,
        {id: 3 , name: "Blue"} ,
        {id: 4 , name: "Yellow"} ,
        {id: 5 , name: "White"} ,
        {id: 6 , name: "Black"}
    ];

    color = 2;
    
}
