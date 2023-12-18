import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideAnimations } from "@angular/platform-browser/animations";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { mockSpendings } from "../../mock-data-for-testing/mock-data";
import { CurrencyEnum } from "../../models/currency.enum";
import { OrderEnum } from "../../models/order.enum";
import { addSpending, addSpendings } from "../../store/action/app.action";
import { AppState } from "../../store/app.state";
import { SpendingServiceService } from "./services/spending-service.service";
import { SpendingFormComponent } from "./spending-form.component";
import SpyObj = jasmine.SpyObj;

describe("SpendingFormComponent", () => {
  let addSpendingsSpy: jasmine.Spy;
  let component: SpendingFormComponent;
  let fixture: ComponentFixture<SpendingFormComponent>;
  let getSpendingsSpy: jasmine.Spy;
  let mockspendingServiceService: SpyObj<SpendingServiceService>;
  let mockStore: jasmine.SpyObj<Store<AppState>>;

  beforeEach(async () => {
    mockspendingServiceService = jasmine.createSpyObj("SpendingServiceService", ["getSpendings", "addSpending"]);
    addSpendingsSpy = mockspendingServiceService.addSpending.and.returnValue(of(mockSpendings[0]));
    getSpendingsSpy = mockspendingServiceService.getSpendings.and.returnValue(of(mockSpendings));
    mockStore = jasmine.createSpyObj("Store", ["dispatch"]);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SpendingFormComponent],
      providers: [{ provide: Store, useValue: mockStore }, provideAnimations(), { provide: SpendingServiceService, useValue: mockspendingServiceService }]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get and store spendings in ngOnInit", () => {
    component.ngOnInit();
    expect(mockStore.dispatch).toHaveBeenCalledWith(addSpendings({ spendings: mockSpendings }));
  });

  it("should get and store spendings if a form value change is detected", () => {
    getSpendingsSpy = mockspendingServiceService.getSpendings.and.returnValue(of([mockSpendings[1]]));
    component.sortAndFilterForm.setValue({ currency: CurrencyEnum.USD, order: OrderEnum.SpentAtDescending });
    expect(mockStore.dispatch).toHaveBeenCalledWith(addSpendings({ spendings: [mockSpendings[1]] }));
  });

  it("should get and store spendings if getAndStoreSpendings is called", () => {
    component.getAndStoreSpendings();
    expect(mockStore.dispatch).toHaveBeenCalledWith(addSpendings({ spendings: mockSpendings }));
  });

  it("should dispatch addSpending and reset form if form is valid", () => {
    component.newSpendingForm.setValue({ amount: 100, currency: CurrencyEnum.USD, description: "Apple" });
    component.submitForm();
    expect(mockStore.dispatch).toHaveBeenCalledWith(addSpending({ spending: mockSpendings[0] }));
    expect(component.newSpendingForm.value).toEqual(component.defaultNewSpendingFormValue);
  });

  it("should submit form and mark it as touched and display error messages if form is invalid", () => {
    component.ngOnInit();
    component.submitForm();
    fixture.detectChanges();
    const matFormFields = fixture.nativeElement.querySelector(".new-spending-form-wrapper form").querySelectorAll("mat-form-field");

    expect(component.newSpendingForm.touched).toBeTrue();
    expect(matFormFields[0].querySelector("mat-error").textContent).toBe("Description is required!");
    expect(matFormFields[1].querySelector("mat-error").textContent).toBe("Amount is required!");
    expect(matFormFields[2].querySelector("mat-error").textContent).toBe("Currency is required!");
  });
});
