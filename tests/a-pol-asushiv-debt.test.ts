import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { aPolASUSHIVDebtAccrueInterest } from "../generated/schema"
import { aPolASUSHIVDebtAccrueInterest as aPolASUSHIVDebtAccrueInterestEvent } from "../generated/aPolASUSHIVDebt/aPolASUSHIVDebt"
import { handleaPolASUSHIVDebtAccrueInterest } from "../src/a-pol-asushiv-debt"
import { createaPolASUSHIVDebtAccrueInterestEvent } from "./a-pol-asushiv-debt-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let cashPrior = BigInt.fromI32(234)
    let interestAccumulated = BigInt.fromI32(234)
    let borrowIndex = BigInt.fromI32(234)
    let totalBorrows = BigInt.fromI32(234)
    let newaPolASUSHIVDebtAccrueInterestEvent = createaPolASUSHIVDebtAccrueInterestEvent(
      cashPrior,
      interestAccumulated,
      borrowIndex,
      totalBorrows
    )
    handleaPolASUSHIVDebtAccrueInterest(newaPolASUSHIVDebtAccrueInterestEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("aPolASUSHIVDebtAccrueInterest created and stored", () => {
    assert.entityCount("aPolASUSHIVDebtAccrueInterest", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "aPolASUSHIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cashPrior",
      "234"
    )
    assert.fieldEquals(
      "aPolASUSHIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestAccumulated",
      "234"
    )
    assert.fieldEquals(
      "aPolASUSHIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowIndex",
      "234"
    )
    assert.fieldEquals(
      "aPolASUSHIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalBorrows",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
