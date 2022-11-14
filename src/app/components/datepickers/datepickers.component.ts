import { Component } from "@angular/core";

@Component({
    selector: "app-datepickers" ,
    templateUrl: "./datepickers.component.html" ,
    styleUrls: ["./datepickers.component.css"]
})

export class DatepickersComponent {

    minDate: Date;
    maxDate: Date;

    constructor() {
        // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
        const currentYear = new Date().getFullYear();
        this.minDate = new Date(currentYear - 99 , 0 , 1);
        this.maxDate = new Date(currentYear + 1 , 11 , 31);
    }

}
