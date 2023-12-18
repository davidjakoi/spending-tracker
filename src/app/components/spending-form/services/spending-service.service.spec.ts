import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { mockSpendings } from "../../../mock-data-for-testing/mock-data";
import { SpendingServiceService } from "./spending-service.service";

describe("SpendingServiceService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: SpendingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SpendingServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should get the spending data with a GET request", () => {
    service.getSpendings().subscribe((data) => expect(data).toEqual(mockSpendings));

    const req = httpTestingController.expectOne(service.spendingUrl);

    expect(req.request.method).toEqual("GET");

    req.flush(mockSpendings);
  });

  it("should save a spending with a POST request", () => {
    service.addSpending(mockSpendings[0]).subscribe((data) => expect(data).toEqual(mockSpendings[0]));

    const req = httpTestingController.expectOne(service.spendingUrl);

    expect(req.request.method).toEqual("POST");

    req.flush(mockSpendings[0]);
  });
});
