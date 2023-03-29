import { addDays } from "date-fns";
import { printOwing } from "./Example1";

describe("Example 1", () => {
  it("should print client owing", () => {
    const consoleMock = jest.spyOn(console, "log");
    const mockInvoice = {
      customer: "John Doe",
      dueDate: new Date(),
      orders: [{ amount: 5 }, { amount: 10 }],
    };
    const mockDueDate = addDays(mockInvoice.dueDate, 30);
    printOwing(mockInvoice);

    expect(consoleMock).toHaveBeenCalledTimes(6);
    expect(consoleMock).toHaveBeenCalledWith(`name: ${mockInvoice.customer}`);
    expect(consoleMock).toHaveBeenCalledWith(`amount: 15`);
    expect(consoleMock).toHaveBeenCalledWith(
      `due: ${mockDueDate.toLocaleDateString()}`
    );
  });
});
