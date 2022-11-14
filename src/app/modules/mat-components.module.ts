import { NgModule } from "@angular/core";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
    exports: [
        MatNativeDateModule ,
        MatCheckboxModule ,
        MatDividerModule ,
        MatRadioModule ,
        MatSelectModule ,
        MatInputModule ,
        MatDatepickerModule ,
        MatIconModule ,
        MatButtonModule ,
        MatChipsModule ,
        MatProgressBarModule ,
        MatProgressSpinnerModule ,
        MatTooltipModule ,
        MatTabsModule ,
        MatDialogModule ,
        MatAutocompleteModule ,
        MatBadgeModule ,
        MatExpansionModule
    ]
})

export class MatComponentsModule { }
