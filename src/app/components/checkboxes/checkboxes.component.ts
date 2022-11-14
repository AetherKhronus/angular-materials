import { Component } from "@angular/core";

@Component({
    selector: "app-checkboxes" ,
    templateUrl: "./checkboxes.component.html" ,
    styleUrls: ["./checkboxes.component.css"]
})

export class CheckboxesComponent {

    isChecked = false;

    onChange($event: boolean): void {

        console.log($event);

    }
}
