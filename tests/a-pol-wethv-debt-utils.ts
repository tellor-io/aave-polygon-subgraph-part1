import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWETHVDebtAccrueInterest,
  aPolWETHVDebtApproval,
  aPolWETHVDebtBorrow,
  aPolWETHVDebtFailure,
  aPolWETHVDebtLiquidateBorrow,
  aPolWETHVDebtMint,
  aPolWETHVDebtNewAdmin,
  aPolWETHVDebtNewComptroller,
  aPolWETHVDebtNewImplementation,
  aPolWETHVDebtNewMarketInterestRateModel,
  aPolWETHVDebtNewPendingAdmin,
  aPolWETHVDebtNewReserveFactor,
  aPolWETHVDebtRedeem,
  aPolWETHVDebtRepayBorrow,
  aPolWETHVDebtReservesAdded,
  aPolWETHVDebtReservesReduced,
  aPolWETHVDebtTransfer
} from "../generated/aPolWETHVDebt/aPolWETHVDebt"

export function createaPolWETHVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWETHVDebtAccrueInterest {
  let aPolWethvDebtAccrueInterestEvent = changetype<
    aPolWETHVDebtAccrueInterest
  >(newMockEvent())

  aPolWethvDebtAccrueInterestEvent.parameters = new Array()

  aPolWethvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWethvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWethvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWethvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethvDebtAccrueInterestEvent
}

export function createaPolWETHVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWETHVDebtApproval {
  let aPolWethvDebtApprovalEvent = changetype<aPolWETHVDebtApproval>(
    newMockEvent()
  )

  aPolWethvDebtApprovalEvent.parameters = new Array()

  aPolWethvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWethvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWethvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWethvDebtApprovalEvent
}

export function createaPolWETHVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWETHVDebtBorrow {
  let aPolWethvDebtBorrowEvent = changetype<aPolWETHVDebtBorrow>(newMockEvent())

  aPolWethvDebtBorrowEvent.parameters = new Array()

  aPolWethvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWethvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWethvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethvDebtBorrowEvent
}

export function createaPolWETHVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWETHVDebtFailure {
  let aPolWethvDebtFailureEvent = changetype<aPolWETHVDebtFailure>(
    newMockEvent()
  )

  aPolWethvDebtFailureEvent.parameters = new Array()

  aPolWethvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWethvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWethvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWethvDebtFailureEvent
}

export function createaPolWETHVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWETHVDebtLiquidateBorrow {
  let aPolWethvDebtLiquidateBorrowEvent = changetype<
    aPolWETHVDebtLiquidateBorrow
  >(newMockEvent())

  aPolWethvDebtLiquidateBorrowEvent.parameters = new Array()

  aPolWethvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWethvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWethvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWethvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWethvDebtLiquidateBorrowEvent
}

export function createaPolWETHVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWETHVDebtMint {
  let aPolWethvDebtMintEvent = changetype<aPolWETHVDebtMint>(newMockEvent())

  aPolWethvDebtMintEvent.parameters = new Array()

  aPolWethvDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWethvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWethvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWethvDebtMintEvent
}

export function createaPolWETHVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWETHVDebtNewAdmin {
  let aPolWethvDebtNewAdminEvent = changetype<aPolWETHVDebtNewAdmin>(
    newMockEvent()
  )

  aPolWethvDebtNewAdminEvent.parameters = new Array()

  aPolWethvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWethvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWethvDebtNewAdminEvent
}

export function createaPolWETHVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWETHVDebtNewComptroller {
  let aPolWethvDebtNewComptrollerEvent = changetype<
    aPolWETHVDebtNewComptroller
  >(newMockEvent())

  aPolWethvDebtNewComptrollerEvent.parameters = new Array()

  aPolWethvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWethvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWethvDebtNewComptrollerEvent
}

export function createaPolWETHVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWETHVDebtNewImplementation {
  let aPolWethvDebtNewImplementationEvent = changetype<
    aPolWETHVDebtNewImplementation
  >(newMockEvent())

  aPolWethvDebtNewImplementationEvent.parameters = new Array()

  aPolWethvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWethvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWethvDebtNewImplementationEvent
}

export function createaPolWETHVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWETHVDebtNewMarketInterestRateModel {
  let aPolWethvDebtNewMarketInterestRateModelEvent = changetype<
    aPolWETHVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolWethvDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWethvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWethvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWethvDebtNewMarketInterestRateModelEvent
}

export function createaPolWETHVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWETHVDebtNewPendingAdmin {
  let aPolWethvDebtNewPendingAdminEvent = changetype<
    aPolWETHVDebtNewPendingAdmin
  >(newMockEvent())

  aPolWethvDebtNewPendingAdminEvent.parameters = new Array()

  aPolWethvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWethvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWethvDebtNewPendingAdminEvent
}

export function createaPolWETHVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWETHVDebtNewReserveFactor {
  let aPolWethvDebtNewReserveFactorEvent = changetype<
    aPolWETHVDebtNewReserveFactor
  >(newMockEvent())

  aPolWethvDebtNewReserveFactorEvent.parameters = new Array()

  aPolWethvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWethvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWethvDebtNewReserveFactorEvent
}

export function createaPolWETHVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWETHVDebtRedeem {
  let aPolWethvDebtRedeemEvent = changetype<aPolWETHVDebtRedeem>(newMockEvent())

  aPolWethvDebtRedeemEvent.parameters = new Array()

  aPolWethvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWethvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWethvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWethvDebtRedeemEvent
}

export function createaPolWETHVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWETHVDebtRepayBorrow {
  let aPolWethvDebtRepayBorrowEvent = changetype<aPolWETHVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolWethvDebtRepayBorrowEvent.parameters = new Array()

  aPolWethvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWethvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWethvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWethvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethvDebtRepayBorrowEvent
}

export function createaPolWETHVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWETHVDebtReservesAdded {
  let aPolWethvDebtReservesAddedEvent = changetype<aPolWETHVDebtReservesAdded>(
    newMockEvent()
  )

  aPolWethvDebtReservesAddedEvent.parameters = new Array()

  aPolWethvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWethvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWethvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWethvDebtReservesAddedEvent
}

export function createaPolWETHVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWETHVDebtReservesReduced {
  let aPolWethvDebtReservesReducedEvent = changetype<
    aPolWETHVDebtReservesReduced
  >(newMockEvent())

  aPolWethvDebtReservesReducedEvent.parameters = new Array()

  aPolWethvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWethvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWethvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWethvDebtReservesReducedEvent
}

export function createaPolWETHVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWETHVDebtTransfer {
  let aPolWethvDebtTransferEvent = changetype<aPolWETHVDebtTransfer>(
    newMockEvent()
  )

  aPolWethvDebtTransferEvent.parameters = new Array()

  aPolWethvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWethvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWethvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWethvDebtTransferEvent
}
