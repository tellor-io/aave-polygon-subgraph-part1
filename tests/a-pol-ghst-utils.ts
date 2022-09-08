import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolGHSTAccrueInterest,
  aPolGHSTApproval,
  aPolGHSTBorrow,
  aPolGHSTFailure,
  aPolGHSTLiquidateBorrow,
  aPolGHSTMint,
  aPolGHSTNewAdmin,
  aPolGHSTNewComptroller,
  aPolGHSTNewImplementation,
  aPolGHSTNewMarketInterestRateModel,
  aPolGHSTNewPendingAdmin,
  aPolGHSTNewReserveFactor,
  aPolGHSTRedeem,
  aPolGHSTRepayBorrow,
  aPolGHSTReservesAdded,
  aPolGHSTReservesReduced,
  aPolGHSTTransfer
} from "../generated/aPolGHST/aPolGHST"

export function createaPolGHSTAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolGHSTAccrueInterest {
  let aPolGhstAccrueInterestEvent = changetype<aPolGHSTAccrueInterest>(
    newMockEvent()
  )

  aPolGhstAccrueInterestEvent.parameters = new Array()

  aPolGhstAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolGhstAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolGhstAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolGhstAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolGhstAccrueInterestEvent
}

export function createaPolGHSTApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolGHSTApproval {
  let aPolGhstApprovalEvent = changetype<aPolGHSTApproval>(newMockEvent())

  aPolGhstApprovalEvent.parameters = new Array()

  aPolGhstApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolGhstApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolGhstApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolGhstApprovalEvent
}

export function createaPolGHSTBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolGHSTBorrow {
  let aPolGhstBorrowEvent = changetype<aPolGHSTBorrow>(newMockEvent())

  aPolGhstBorrowEvent.parameters = new Array()

  aPolGhstBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolGhstBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolGhstBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolGhstBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolGhstBorrowEvent
}

export function createaPolGHSTFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolGHSTFailure {
  let aPolGhstFailureEvent = changetype<aPolGHSTFailure>(newMockEvent())

  aPolGhstFailureEvent.parameters = new Array()

  aPolGhstFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolGhstFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolGhstFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolGhstFailureEvent
}

export function createaPolGHSTLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolGHSTLiquidateBorrow {
  let aPolGhstLiquidateBorrowEvent = changetype<aPolGHSTLiquidateBorrow>(
    newMockEvent()
  )

  aPolGhstLiquidateBorrowEvent.parameters = new Array()

  aPolGhstLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolGhstLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolGhstLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolGhstLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolGhstLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolGhstLiquidateBorrowEvent
}

export function createaPolGHSTMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolGHSTMint {
  let aPolGhstMintEvent = changetype<aPolGHSTMint>(newMockEvent())

  aPolGhstMintEvent.parameters = new Array()

  aPolGhstMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolGhstMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolGhstMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolGhstMintEvent
}

export function createaPolGHSTNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolGHSTNewAdmin {
  let aPolGhstNewAdminEvent = changetype<aPolGHSTNewAdmin>(newMockEvent())

  aPolGhstNewAdminEvent.parameters = new Array()

  aPolGhstNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolGhstNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolGhstNewAdminEvent
}

export function createaPolGHSTNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolGHSTNewComptroller {
  let aPolGhstNewComptrollerEvent = changetype<aPolGHSTNewComptroller>(
    newMockEvent()
  )

  aPolGhstNewComptrollerEvent.parameters = new Array()

  aPolGhstNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolGhstNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolGhstNewComptrollerEvent
}

export function createaPolGHSTNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolGHSTNewImplementation {
  let aPolGhstNewImplementationEvent = changetype<aPolGHSTNewImplementation>(
    newMockEvent()
  )

  aPolGhstNewImplementationEvent.parameters = new Array()

  aPolGhstNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolGhstNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolGhstNewImplementationEvent
}

export function createaPolGHSTNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolGHSTNewMarketInterestRateModel {
  let aPolGhstNewMarketInterestRateModelEvent = changetype<
    aPolGHSTNewMarketInterestRateModel
  >(newMockEvent())

  aPolGhstNewMarketInterestRateModelEvent.parameters = new Array()

  aPolGhstNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolGhstNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolGhstNewMarketInterestRateModelEvent
}

export function createaPolGHSTNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolGHSTNewPendingAdmin {
  let aPolGhstNewPendingAdminEvent = changetype<aPolGHSTNewPendingAdmin>(
    newMockEvent()
  )

  aPolGhstNewPendingAdminEvent.parameters = new Array()

  aPolGhstNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolGhstNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolGhstNewPendingAdminEvent
}

export function createaPolGHSTNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolGHSTNewReserveFactor {
  let aPolGhstNewReserveFactorEvent = changetype<aPolGHSTNewReserveFactor>(
    newMockEvent()
  )

  aPolGhstNewReserveFactorEvent.parameters = new Array()

  aPolGhstNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolGhstNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolGhstNewReserveFactorEvent
}

export function createaPolGHSTRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolGHSTRedeem {
  let aPolGhstRedeemEvent = changetype<aPolGHSTRedeem>(newMockEvent())

  aPolGhstRedeemEvent.parameters = new Array()

  aPolGhstRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolGhstRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolGhstRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolGhstRedeemEvent
}

export function createaPolGHSTRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolGHSTRepayBorrow {
  let aPolGhstRepayBorrowEvent = changetype<aPolGHSTRepayBorrow>(newMockEvent())

  aPolGhstRepayBorrowEvent.parameters = new Array()

  aPolGhstRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolGhstRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolGhstRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolGhstRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolGhstRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolGhstRepayBorrowEvent
}

export function createaPolGHSTReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolGHSTReservesAdded {
  let aPolGhstReservesAddedEvent = changetype<aPolGHSTReservesAdded>(
    newMockEvent()
  )

  aPolGhstReservesAddedEvent.parameters = new Array()

  aPolGhstReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolGhstReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolGhstReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolGhstReservesAddedEvent
}

export function createaPolGHSTReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolGHSTReservesReduced {
  let aPolGhstReservesReducedEvent = changetype<aPolGHSTReservesReduced>(
    newMockEvent()
  )

  aPolGhstReservesReducedEvent.parameters = new Array()

  aPolGhstReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolGhstReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolGhstReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolGhstReservesReducedEvent
}

export function createaPolGHSTTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolGHSTTransfer {
  let aPolGhstTransferEvent = changetype<aPolGHSTTransfer>(newMockEvent())

  aPolGhstTransferEvent.parameters = new Array()

  aPolGhstTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolGhstTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolGhstTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolGhstTransferEvent
}
