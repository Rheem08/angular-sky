import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        NgxNavbarModule 
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('TestBed is accessable', ()=>{
    expect(TestBed).toBeTruthy();
  });

  it('AppComponent is accessable', ()=>{
    expect(AppComponent).toBeTruthy();
  });

  it('should create fixture', ()=>{
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'store'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('store');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('store app is running!');
  });
});
