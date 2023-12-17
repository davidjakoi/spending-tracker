import { TestBed } from "@angular/core/testing";
import { SpendingServiceService } from "./spending-service.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("SpendingServiceService", () => {
  let service: SpendingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SpendingServiceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
