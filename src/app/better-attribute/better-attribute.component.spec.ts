import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetterAttributeComponent } from './better-attribute.component';

describe('BetterAttributeComponent', () => {
  let component: BetterAttributeComponent;
  let fixture: ComponentFixture<BetterAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetterAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetterAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
