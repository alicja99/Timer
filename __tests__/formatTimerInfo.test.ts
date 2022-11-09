import { formatTimerInfo } from "../utils/formatTimerInfo";

describe("formatTimeToTimestamp test", () => {
  it("should return 'This is not a time from past' text if time is not from the past'", () => {
    const currentDate = new Date();
    currentDate.setHours(20, 0, 0);
    const lastSeenDate = new Date();
    lastSeenDate.setHours(23, 0, 0);

    const expected = "This is not a time from past";

    const result = formatTimerInfo(
      lastSeenDate.getTime(),
      currentDate.getTime()
    );

    expect(result).toEqual(expected);
  });

  it("should return '1 .. n minutes ago' text if time is > 60s'", () => {
    const currentDate = new Date();
    currentDate.setHours(20, 2, 0);
    const lastSeenDate = new Date();
    lastSeenDate.setHours(20, 0, 0);

    const expected = "1 .. n minutes ago";

    const result = formatTimerInfo(
      lastSeenDate.getTime(),
      currentDate.getTime()
    );

    expect(result).toEqual(expected);
  });

  it("should return '1 .. n minutes ago' text if time is > 60s'", () => {
    const currentDate = new Date();
    currentDate.setHours(20, 2, 0);
    const lastSeenDate = new Date();
    lastSeenDate.setHours(20, 0, 0);

    const expected = "1 .. n minutes ago";

    const result = formatTimerInfo(
      lastSeenDate.getTime(),
      currentDate.getTime()
    );

    expect(result).toEqual(expected);
  });

  it("should return '1 .. n minutes ago' text if time is < 60s'", () => {
    const currentDate = new Date();
    currentDate.setHours(20, 0, 10);
    const lastSeenDate = new Date();
    lastSeenDate.setHours(20, 0, 0);

    const expected = "0 ... 60 seconds ago";

    const result = formatTimerInfo(
      lastSeenDate.getTime(),
      currentDate.getTime()
    );

    expect(result).toEqual(expected);
  });
});
