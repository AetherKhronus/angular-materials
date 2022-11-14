import { ErrorHandler , NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes , RouterModule } from "@angular/router";

import { MatNativeDateModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDividerModule } from "@angular/material/divider";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule } from "@angular/material/dialog";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatExpansionModule } from "@angular/material/expansion";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AppErrorHandler } from "./errors/app-error-handler";
import { NotFoundComponent } from "./errors/components/not-found/not-found.component";
import { NoAccessComponent } from "./errors/components/no-access/no-access.component";
import { HomeComponent } from "./components/home/home.component";

import { CheckboxesComponent } from "./components/checkboxes/checkboxes.component";
import { RadiobuttonsComponent } from "./components/radiobuttons/radiobuttons.component";
import { SelectsComponent } from "./components/selects/selects.component";
import { InputsComponent } from "./components/inputs/inputs.component";
import { TextareasComponent } from "./components/textareas/textareas.component";
import { DatepickersComponent } from "./components/datepickers/datepickers.component";
import { IconsComponent } from "./components/icons/icons.component";
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { ChipsComponent } from "./components/chips/chips.component";
import { ProgressBarsComponent } from "./components/progress-bars/progress-bars.component";
import { ProgressSpinnersComponent } from "./components/progress-spinners/progress-spinners.component";
import { TooltipsComponent } from "./components/tooltips/tooltips.component";
import { TabsComponent } from "./components/tabs/tabs.component";
import { DialogsComponent } from "./components/dialogs/dialogs.component";
import { DialogComponent } from "./components/dialogs/dialog/dialog.component";
import { AutocompleteComponent } from "./components/autocomplete/autocomplete.component";
import { BadgesComponent } from "./components/badges/badges.component";
import { ExpansionPanelsComponent } from "./components/expansion-panels/expansion-panels.component";

const routes: Routes = [
    { path : "" , component: HomeComponent } ,
    { path : "home" , component: HomeComponent } ,

    { path : "autocomplete" , component: AutocompleteComponent } ,
    { path : "badges" , component: BadgesComponent } ,
    { path : "buttons" , component: ButtonsComponent } ,
    { path : "checkboxes" , component: CheckboxesComponent } ,
    { path : "chips" , component: ChipsComponent } ,
    { path : "date-pickers" , component: DatepickersComponent } ,
    { path : "dialogs" , component: DialogsComponent } ,
    { path : "expansion-panel" , component: ExpansionPanelsComponent } ,
    { path : "icons" , component: IconsComponent } ,
    { path : "inputs" , component: InputsComponent } ,
    { path : "progress-bars" , component: ProgressBarsComponent } ,
    { path : "progress-spinners" , component: ProgressSpinnersComponent } ,
    { path : "radio-buttons" , component: RadiobuttonsComponent } ,
    { path : "selects" , component: SelectsComponent } ,
    { path : "tabs" , component: TabsComponent } ,
    { path : "text-areas" , component: TextareasComponent } ,
    { path : "tooltips" , component: TooltipsComponent } ,

    { path : "no-access" , component: NoAccessComponent } ,
    { path : "**" , component: NotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent ,
        NoAccessComponent ,
        NotFoundComponent ,
        HomeComponent ,
        CheckboxesComponent ,
        RadiobuttonsComponent ,
        SelectsComponent ,
        InputsComponent ,
        TextareasComponent ,
        DatepickersComponent ,
        IconsComponent ,
        ButtonsComponent ,
        ChipsComponent ,
        ProgressBarsComponent ,
        ProgressSpinnersComponent ,
        TooltipsComponent ,
        TabsComponent ,
        DialogsComponent ,
        DialogComponent ,
        AutocompleteComponent ,
        BadgesComponent ,
        ExpansionPanelsComponent
    ] ,
    entryComponents: [
        DialogComponent
    ] ,
    imports: [
        BrowserModule ,
        AppRoutingModule ,
        BrowserAnimationsModule ,
        RouterModule.forRoot(routes) ,
        ReactiveFormsModule ,
        FormsModule ,
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
    ] ,
    exports: [
        RouterModule
    ] ,
    providers: [
        { provide: ErrorHandler , useClass: AppErrorHandler }
    ] ,
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { 

}
