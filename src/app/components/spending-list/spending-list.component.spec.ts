import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { spendingsState } from "../../store/selector/app.selector";
import { SpendingListComponent } from "./spending-list.component";
import { mockSpendings } from "../../mock-data-for-testing/mock-data";

describe("SpendingListComponent", () => {
  let component: SpendingListComponent;
  let fixture: ComponentFixture<SpendingListComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingListComponent],
      providers: [provideMockStore({})]
    }).compileComponents();

    mockStore = TestBed.inject(MockStore);
    mockStore.overrideSelector(spendingsState, mockSpendings);

    fixture = TestBed.createComponent(SpendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should return the correct spendings and should render as many spending components", (done) => {
    component.spendings$.subscribe((value) => {
      expect(value).toBe(mockSpendings);
      expect(fixture.nativeElement.querySelector(".spending-list-wrapper").querySelectorAll("spending")).toHaveSize(value.length);
      done();
    });
  });
});
