import { Component } from "@angular/core";
import { Observable , timer } from "rxjs";

@Component({
    selector: "app-progress-spinners" ,
    templateUrl: "./progress-spinners.component.html" ,
    styleUrls: ["./progress-spinners.component.css"]
})
export class ProgressSpinnersComponent {

    progress = 0;
    timer!: NodeJS.Timer;
    isLoading1 = false;
    isLoading2 = false;

    start(): void {

        this.isLoading1 = true;
        this.progress = 0;
        this.timer = setInterval(() => {

            this.progress = this.progress + 0.05;

            if (this.progress == 100) {

                clearInterval(this.timer);
                this.isLoading2 = false;

            }

        } , 20);

    }

    connect(): void {

        this.isLoading2 = true;

        this.wait()
            .subscribe(() => this.isLoading2 = false);
        
    }

    wait(): Observable<0> {

        return timer(2000);
        
    }

}
