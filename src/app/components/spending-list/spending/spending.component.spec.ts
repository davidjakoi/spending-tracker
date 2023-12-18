import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SpendingComponent } from "./spending.component";
import { CurrencyEnum } from "../../../models/currency.enum";
import { mockSpendings } from "../../../mock-data-for-testing/mock-data";

describe("SpendingComponent", () => {
  let component: SpendingComponent;
  let fixture: ComponentFixture<SpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingComponent);
    component = fixture.componentInstance;
    component.amount = mockSpendings[0].amount;
    component.currency = mockSpendings[0].currency;
    component.description = mockSpendings[0].description;
    component.spent_at = mockSpendings[0].spent_at;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should get the amount in HUF", () => {
    expect(component.getAmountInCurrency()).toEqual("100 Ft");
  });

  it("should get the amount in USD", () => {
    component.currency = CurrencyEnum.USD;
    expect(component.getAmountInCurrency()).toEqual("$100");
  });

  it("should display the correct values in the template", () => {
    expect(fixture.debugElement.nativeElement.querySelector(".currency-wrapper p").textContent).toBe(mockSpendings[0].currency);
    expect(fixture.debugElement.nativeElement.querySelector(".description").textContent).toBe(mockSpendings[0].description);
    expect(fixture.debugElement.nativeElement.querySelector(".spent-at").textContent).toBe("11:42 AM, Dec 17, 2023");
    expect(fixture.debugElement.nativeElement.querySelector(".amount-wrapper").textContent).toBe("100 Ft");
  });
});
