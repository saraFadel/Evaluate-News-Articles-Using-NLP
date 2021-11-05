import { URLValidator } from "../src/client/js/checkURL"

describe("Testing URL Validation", () => {
  test("Is URL defined", () => {
    expect(URLValidator).toBeDefined()
  })

  test("Valid URL returns true", () => {
    expect(URLValidator("https://stackoverflow.com/questions")).toBeTruthy()
  })

  test("Notvalid URL returns false", () => {
    expect(URLValidator("HelloWorld")).toBeFalsy()
  })
})
