import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { aPolWMATICVDebtAccrueInterest } from "../generated/schema"
import { aPolWMATICVDebtAccrueInterest as aPolWMATICVDebtAccrueInterestEvent } from "../generated/aPolWMATICVDebt/aPolWMATICVDebt"
import { handleaPolWMATICVDebtAccrueInterest } from "../src/a-pol-wmaticv-debt"
import { createaPolWMATICVDebtAccrueInterestEvent } from "./a-pol-wmaticv-debt-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let cashPrior = BigInt.fromI32(234)
    let interestAccumulated = BigInt.fromI32(234)
    let borrowIndex = BigInt.fromI32(234)
    let totalBorrows = BigInt.fromI32(234)
    let newaPolWMATICVDebtAccrueInterestEvent = createaPolWMATICVDebtAccrueInterestEvent(
      cashPrior,
      interestAccumulated,
      borrowIndex,
      totalBorrows
    )
    handleaPolWMATICVDebtAccrueInterest(newaPolWMATICVDebtAccrueInterestEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("aPolWMATICVDebtAccrueInterest created and stored", () => {
    assert.entityCount("aPolWMATICVDebtAccrueInterest", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "aPolWMATICVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cashPrior",
      "234"
    )
    assert.fieldEquals(
      "aPolWMATICVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestAccumulated",
      "234"
    )
    assert.fieldEquals(
      "aPolWMATICVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowIndex",
      "234"
    )
    assert.fieldEquals(
      "aPolWMATICVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalBorrows",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
