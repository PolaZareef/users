import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeUsersComponent } from './some-users.component';

describe('SomeUsersComponent', () => {
  let component: SomeUsersComponent;
  let fixture: ComponentFixture<SomeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
