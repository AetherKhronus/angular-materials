import { ComponentFixture , TestBed } from "@angular/core/testing";

import { TextareasComponent } from "./textareas.component";

describe("TextareasComponent" , () => {

    let component: TextareasComponent;
    let fixture: ComponentFixture<TextareasComponent>;

    beforeEach(async () => {

        await TestBed.configureTestingModule({

            declarations: [ TextareasComponent ]

        }).compileComponents();

        fixture = TestBed.createComponent(TextareasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

    });

    it("should create" , () => {

        expect(component).toBeTruthy();

    });
    
});
