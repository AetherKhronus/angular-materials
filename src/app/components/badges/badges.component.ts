import { Component } from "@angular/core";

@Component({
    selector: "app-badges" ,
    templateUrl: "./badges.component.html" ,
    styleUrls: ["./badges.component.css"]
})
export class BadgesComponent {

    count = 0;

    addCount(): void {

        this.count = this.count + 1;

    }

    removeCount(): void {

        this.count = this.count - 1;

        if (this.count < 0) {

            this.count = 0;

        }

    }

}
