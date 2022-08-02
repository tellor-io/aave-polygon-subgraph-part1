import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CErc20Delegator_hLINKAccrueInterest } from "../generated/schema"
import { CErc20Delegator_hLINKAccrueInterest as CErc20Delegator_hLINKAccrueInterestEvent } from "../generated/CErc20Delegator_hLINK/CErc20Delegator_hLINK"
import { handleCErc20Delegator_hLINKAccrueInterest } from "../src/c-erc-20-delegator-h-link"
import { createCErc20Delegator_hLINKAccrueInterestEvent } from "./c-erc-20-delegator-h-link-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let cashPrior = BigInt.fromI32(234)
    let interestAccumulated = BigInt.fromI32(234)
    let borrowIndex = BigInt.fromI32(234)
    let totalBorrows = BigInt.fromI32(234)
    let newCErc20Delegator_hLINKAccrueInterestEvent = createCErc20Delegator_hLINKAccrueInterestEvent(
      cashPrior,
      interestAccumulated,
      borrowIndex,
      totalBorrows
    )
    handleCErc20Delegator_hLINKAccrueInterest(
      newCErc20Delegator_hLINKAccrueInterestEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CErc20Delegator_hLINKAccrueInterest created and stored", () => {
    assert.entityCount("CErc20Delegator_hLINKAccrueInterest", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CErc20Delegator_hLINKAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cashPrior",
      "234"
    )
    assert.fieldEquals(
      "CErc20Delegator_hLINKAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestAccumulated",
      "234"
    )
    assert.fieldEquals(
      "CErc20Delegator_hLINKAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowIndex",
      "234"
    )
    assert.fieldEquals(
      "CErc20Delegator_hLINKAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalBorrows",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
