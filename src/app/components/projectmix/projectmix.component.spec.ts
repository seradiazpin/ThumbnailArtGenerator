import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmixComponent } from './projectmix.component';

describe('ProjectmixComponent', () => {
  let component: ProjectmixComponent;
  let fixture: ComponentFixture<ProjectmixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
