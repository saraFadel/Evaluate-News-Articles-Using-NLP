import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing existance", () => {

  test("Is defined", () => {
    expect(handleSubmit).toBeDefined()
  })
  
})
