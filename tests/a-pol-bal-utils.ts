import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolBALAccrueInterest,
  aPolBALApproval,
  aPolBALBorrow,
  aPolBALFailure,
  aPolBALLiquidateBorrow,
  aPolBALMint,
  aPolBALNewAdmin,
  aPolBALNewComptroller,
  aPolBALNewImplementation,
  aPolBALNewMarketInterestRateModel,
  aPolBALNewPendingAdmin,
  aPolBALNewReserveFactor,
  aPolBALRedeem,
  aPolBALRepayBorrow,
  aPolBALReservesAdded,
  aPolBALReservesReduced,
  aPolBALTransfer
} from "../generated/aPolBAL/aPolBAL"

export function createaPolBALAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolBALAccrueInterest {
  let aPolBalAccrueInterestEvent = changetype<aPolBALAccrueInterest>(
    newMockEvent()
  )

  aPolBalAccrueInterestEvent.parameters = new Array()

  aPolBalAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolBalAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolBalAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolBalAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolBalAccrueInterestEvent
}

export function createaPolBALApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolBALApproval {
  let aPolBalApprovalEvent = changetype<aPolBALApproval>(newMockEvent())

  aPolBalApprovalEvent.parameters = new Array()

  aPolBalApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolBalApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolBalApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolBalApprovalEvent
}

export function createaPolBALBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolBALBorrow {
  let aPolBalBorrowEvent = changetype<aPolBALBorrow>(newMockEvent())

  aPolBalBorrowEvent.parameters = new Array()

  aPolBalBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolBalBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolBalBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolBalBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolBalBorrowEvent
}

export function createaPolBALFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolBALFailure {
  let aPolBalFailureEvent = changetype<aPolBALFailure>(newMockEvent())

  aPolBalFailureEvent.parameters = new Array()

  aPolBalFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolBalFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolBalFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolBalFailureEvent
}

export function createaPolBALLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolBALLiquidateBorrow {
  let aPolBalLiquidateBorrowEvent = changetype<aPolBALLiquidateBorrow>(
    newMockEvent()
  )

  aPolBalLiquidateBorrowEvent.parameters = new Array()

  aPolBalLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolBalLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolBalLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolBalLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolBalLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolBalLiquidateBorrowEvent
}

export function createaPolBALMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolBALMint {
  let aPolBalMintEvent = changetype<aPolBALMint>(newMockEvent())

  aPolBalMintEvent.parameters = new Array()

  aPolBalMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolBalMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolBalMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolBalMintEvent
}

export function createaPolBALNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolBALNewAdmin {
  let aPolBalNewAdminEvent = changetype<aPolBALNewAdmin>(newMockEvent())

  aPolBalNewAdminEvent.parameters = new Array()

  aPolBalNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolBalNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolBalNewAdminEvent
}

export function createaPolBALNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolBALNewComptroller {
  let aPolBalNewComptrollerEvent = changetype<aPolBALNewComptroller>(
    newMockEvent()
  )

  aPolBalNewComptrollerEvent.parameters = new Array()

  aPolBalNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolBalNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolBalNewComptrollerEvent
}

export function createaPolBALNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolBALNewImplementation {
  let aPolBalNewImplementationEvent = changetype<aPolBALNewImplementation>(
    newMockEvent()
  )

  aPolBalNewImplementationEvent.parameters = new Array()

  aPolBalNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolBalNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolBalNewImplementationEvent
}

export function createaPolBALNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolBALNewMarketInterestRateModel {
  let aPolBalNewMarketInterestRateModelEvent = changetype<
    aPolBALNewMarketInterestRateModel
  >(newMockEvent())

  aPolBalNewMarketInterestRateModelEvent.parameters = new Array()

  aPolBalNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolBalNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolBalNewMarketInterestRateModelEvent
}

export function createaPolBALNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolBALNewPendingAdmin {
  let aPolBalNewPendingAdminEvent = changetype<aPolBALNewPendingAdmin>(
    newMockEvent()
  )

  aPolBalNewPendingAdminEvent.parameters = new Array()

  aPolBalNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolBalNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolBalNewPendingAdminEvent
}

export function createaPolBALNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolBALNewReserveFactor {
  let aPolBalNewReserveFactorEvent = changetype<aPolBALNewReserveFactor>(
    newMockEvent()
  )

  aPolBalNewReserveFactorEvent.parameters = new Array()

  aPolBalNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolBalNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolBalNewReserveFactorEvent
}

export function createaPolBALRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolBALRedeem {
  let aPolBalRedeemEvent = changetype<aPolBALRedeem>(newMockEvent())

  aPolBalRedeemEvent.parameters = new Array()

  aPolBalRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolBalRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolBalRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolBalRedeemEvent
}

export function createaPolBALRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolBALRepayBorrow {
  let aPolBalRepayBorrowEvent = changetype<aPolBALRepayBorrow>(newMockEvent())

  aPolBalRepayBorrowEvent.parameters = new Array()

  aPolBalRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolBalRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolBalRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolBalRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolBalRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolBalRepayBorrowEvent
}

export function createaPolBALReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolBALReservesAdded {
  let aPolBalReservesAddedEvent = changetype<aPolBALReservesAdded>(
    newMockEvent()
  )

  aPolBalReservesAddedEvent.parameters = new Array()

  aPolBalReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolBalReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolBalReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolBalReservesAddedEvent
}

export function createaPolBALReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolBALReservesReduced {
  let aPolBalReservesReducedEvent = changetype<aPolBALReservesReduced>(
    newMockEvent()
  )

  aPolBalReservesReducedEvent.parameters = new Array()

  aPolBalReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolBalReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolBalReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolBalReservesReducedEvent
}

export function createaPolBALTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolBALTransfer {
  let aPolBalTransferEvent = changetype<aPolBALTransfer>(newMockEvent())

  aPolBalTransferEvent.parameters = new Array()

  aPolBalTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolBalTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolBalTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolBalTransferEvent
}
