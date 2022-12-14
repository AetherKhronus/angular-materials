import { Component , Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: "app-dialog" ,
    templateUrl: "./dialog.component.html" ,
    styleUrls: ["./dialog.component.css"]
})

export class DialogComponent {

    num: number;
    str: string;

    constructor(@Inject(MAT_DIALOG_DATA) data: any) {

        this.num = data.num;
        this.str = data.str;

    }

}
