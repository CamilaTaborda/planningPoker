import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedUserComponent } from './connectUser.component';

describe('ConnectedUserComponent', () => {
  let component: ConnectedUserComponent;
  let fixture: ComponentFixture<ConnectedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
