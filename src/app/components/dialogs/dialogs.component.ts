import { DialogComponent } from "./dialog/dialog.component";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
    selector: "app-dialogs" ,
    templateUrl: "./dialogs.component.html" ,
    styleUrls: ["./dialogs.component.css"]
})

export class DialogsComponent {

    constructor(private dialog: MatDialog) {

    }

    openDialog(): void {

        this.dialog.open(DialogComponent , {
            data: {
                num: 1 ,
                str: "Hello"
            }
        })
            .afterClosed()
            .subscribe(result => console.log("User pressed:" + result));

    }

}
