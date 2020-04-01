import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinPage } from './fin.page';

describe('FinPage', () => {
  let component: FinPage;
  let fixture: ComponentFixture<FinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
