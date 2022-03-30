import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YipliComponent } from './yipli.component';

describe('YipliComponent', () => {
  let component: YipliComponent;
  let fixture: ComponentFixture<YipliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YipliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YipliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
