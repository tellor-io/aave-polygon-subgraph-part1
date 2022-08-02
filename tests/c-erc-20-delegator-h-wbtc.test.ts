import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { CErc20Delegator_hWBTCAccrueInterest } from "../generated/schema"
import { CErc20Delegator_hWBTCAccrueInterest as CErc20Delegator_hWBTCAccrueInterestEvent } from "../generated/CErc20Delegator_hWBTC/CErc20Delegator_hWBTC"
import { handleCErc20Delegator_hWBTCAccrueInterest } from "../src/c-erc-20-delegator-h-wbtc"
import { createCErc20Delegator_hWBTCAccrueInterestEvent } from "./c-erc-20-delegator-h-wbtc-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let cashPrior = BigInt.fromI32(234)
    let interestAccumulated = BigInt.fromI32(234)
    let borrowIndex = BigInt.fromI32(234)
    let totalBorrows = BigInt.fromI32(234)
    let newCErc20Delegator_hWBTCAccrueInterestEvent = createCErc20Delegator_hWBTCAccrueInterestEvent(
      cashPrior,
      interestAccumulated,
      borrowIndex,
      totalBorrows
    )
    handleCErc20Delegator_hWBTCAccrueInterest(
      newCErc20Delegator_hWBTCAccrueInterestEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CErc20Delegator_hWBTCAccrueInterest created and stored", () => {
    assert.entityCount("CErc20Delegator_hWBTCAccrueInterest", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CErc20Delegator_hWBTCAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "cashPrior",
      "234"
    )
    assert.fieldEquals(
      "CErc20Delegator_hWBTCAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interestAccumulated",
      "234"
    )
    assert.fieldEquals(
      "CErc20Delegator_hWBTCAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "borrowIndex",
      "234"
    )
    assert.fieldEquals(
      "CErc20Delegator_hWBTCAccrueInterest",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "totalBorrows",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
