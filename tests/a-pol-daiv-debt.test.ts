import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { aPolDAIVDebtAccrueInterest } from "../generated/schema"
import { aPolDAIVDebtAccrueInterest as aPolDAIVDebtAccrueInterestEvent } from "../generated/aPolDAIVDebt/aPolDAIVDebt"
import { handleaPolDAIVDebtAccrueInterest } from "../src/a-pol-daiv-debt"
import { createaPolDAIVDebtAccrueInterestEvent } from "./a-pol-daiv-debt-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let cashPrior = BigInt.fromI32(234)
    let interestAccumulated = BigInt.fromI32(234)
    let borrowIndex = BigInt.fromI32(234)
    let totalBorrows = BigInt.fromI32(234)
    let newaPolDAIVDebtAccrueInterestEvent = createaPolDAIVDebtAccrueInterestEvent(
      cashPrior,
      interestAccumulated,
      borrowIndex,
      totalBorrows
    )
    handleaPolDAIVDebtAccrueInterest(newaPolDAIVDebtAccrueInterestEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("aPolDAIVDebtAccrueInterest created and stored", () => {
    assert.entityCount("aPolDAIVDebtAccrueInterest", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "aPolDAIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cashPrior",
      "234"
    )
    assert.fieldEquals(
      "aPolDAIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestAccumulated",
      "234"
    )
    assert.fieldEquals(
      "aPolDAIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowIndex",
      "234"
    )
    assert.fieldEquals(
      "aPolDAIVDebtAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalBorrows",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
