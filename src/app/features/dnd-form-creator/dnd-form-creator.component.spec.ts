import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DndFormCreatorComponent } from './dnd-form-creator.component';

describe('DndFormCreatorComponent', () => {
  let component: DndFormCreatorComponent;
  let fixture: ComponentFixture<DndFormCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndFormCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndFormCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
