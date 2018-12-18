import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhsSearchComponent } from './mhs-search.component';

describe('MhsSearchComponent', () => {
  let component: MhsSearchComponent;
  let fixture: ComponentFixture<MhsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
