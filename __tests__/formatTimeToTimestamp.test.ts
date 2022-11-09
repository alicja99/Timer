import { formatTimeToTimeStamp } from "../utils/formatTimeToTimestamp";

describe("formatTimeToTimestamp test", () => {
  it("should return -1 if time regex does not match but input is in correct format", () => {
    const input = "9:99:99";

    const result = formatTimeToTimeStamp(input);

    expect(result).toBe(-1);
  });

  it("should return -1 if time regex does not match and input is not in correct format", () => {
    const input = "abcd:99:99";

    const result = formatTimeToTimeStamp(input);

    expect(result).toBe(-1);
  });

  it("should return a timestamp if time regex does match and is in correct format with 0 at the start", () => {
    const input = "02:34:34";

    const result = formatTimeToTimeStamp(input);

    expect(result).toBeGreaterThan(-1);
  });

  it("should return a timestamp if time regex does match and is in correct format without 0 at the start", () => {
    const input = "2:34:34";

    const result = formatTimeToTimeStamp(input);

    expect(result).toBeGreaterThan(-1);
  });
});
