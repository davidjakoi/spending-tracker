import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SpendingFormComponent } from "./spending-form.component";
import { provideMockStore } from "@ngrx/store/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { provideAnimations } from "@angular/platform-browser/animations";

describe("SpendingFormComponent", () => {
  let component: SpendingFormComponent;
  let fixture: ComponentFixture<SpendingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SpendingFormComponent],
      providers: [provideMockStore({}), provideAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
