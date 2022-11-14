import { Component , OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable , startWith , map , of } from "rxjs";
 
@Component({
    selector: "app-autocomplete" ,
    templateUrl: "./autocomplete.component.html" ,
    styleUrls: ["./autocomplete.component.css"]
})
export class AutocompleteComponent implements OnInit {

    myControl = new FormControl("");
    options = ["Angular" , "TypeScript" , "HTML" , "CSS" , "Firebase" , "Express" , "Mongo" , "Unity" , "C#" , "Blender"];
    filteredOptions: Observable<string[]> = of([]);

    ngOnInit(): void {

        this.filteredOptions = this.myControl.valueChanges.pipe(

            startWith("") ,
            map(value => this._filter(value || "")) ,

        );

    }

    private _filter(value: string): string[] {

        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));

    }
  
}

