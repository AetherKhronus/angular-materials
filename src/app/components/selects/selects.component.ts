import { Component } from "@angular/core";

@Component({
    selector: "app-selects" ,
    templateUrl: "./selects.component.html" ,
    styleUrls: ["./selects.component.css"]
})

export class SelectsComponent {

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
