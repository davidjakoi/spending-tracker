import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { SpendingListComponent } from "./spending-list.component";

describe("SpendingListComponent", () => {
  let component: SpendingListComponent;
  let fixture: ComponentFixture<SpendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingListComponent],
      providers: [provideMockStore({})]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
