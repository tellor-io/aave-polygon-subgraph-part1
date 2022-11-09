import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolAGEURVDebtAccrueInterest,
  aPolAGEURVDebtApproval,
  aPolAGEURVDebtBorrow,
  aPolAGEURVDebtFailure,
  aPolAGEURVDebtLiquidateBorrow,
  aPolAGEURVDebtMint,
  aPolAGEURVDebtNewAdmin,
  aPolAGEURVDebtNewComptroller,
  aPolAGEURVDebtNewImplementation,
  aPolAGEURVDebtNewMarketInterestRateModel,
  aPolAGEURVDebtNewPendingAdmin,
  aPolAGEURVDebtNewReserveFactor,
  aPolAGEURVDebtRedeem,
  aPolAGEURVDebtRepayBorrow,
  aPolAGEURVDebtReservesAdded,
  aPolAGEURVDebtReservesReduced,
  aPolAGEURVDebtTransfer
} from "../generated/aPolAGEURVDebt/aPolAGEURVDebt"

export function createaPolAGEURVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolAGEURVDebtAccrueInterest {
  let aPolAgeurvDebtAccrueInterestEvent = changetype<
    aPolAGEURVDebtAccrueInterest
  >(newMockEvent())

  aPolAgeurvDebtAccrueInterestEvent.parameters = new Array()

  aPolAgeurvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolAgeurvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolAgeurvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolAgeurvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeurvDebtAccrueInterestEvent
}

export function createaPolAGEURVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolAGEURVDebtApproval {
  let aPolAgeurvDebtApprovalEvent = changetype<aPolAGEURVDebtApproval>(
    newMockEvent()
  )

  aPolAgeurvDebtApprovalEvent.parameters = new Array()

  aPolAgeurvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolAgeurvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolAgeurvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAgeurvDebtApprovalEvent
}

export function createaPolAGEURVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolAGEURVDebtBorrow {
  let aPolAgeurvDebtBorrowEvent = changetype<aPolAGEURVDebtBorrow>(
    newMockEvent()
  )

  aPolAgeurvDebtBorrowEvent.parameters = new Array()

  aPolAgeurvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeurvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolAgeurvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAgeurvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeurvDebtBorrowEvent
}

export function createaPolAGEURVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolAGEURVDebtFailure {
  let aPolAgeurvDebtFailureEvent = changetype<aPolAGEURVDebtFailure>(
    newMockEvent()
  )

  aPolAgeurvDebtFailureEvent.parameters = new Array()

  aPolAgeurvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolAgeurvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolAgeurvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolAgeurvDebtFailureEvent
}

export function createaPolAGEURVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolAGEURVDebtLiquidateBorrow {
  let aPolAgeurvDebtLiquidateBorrowEvent = changetype<
    aPolAGEURVDebtLiquidateBorrow
  >(newMockEvent())

  aPolAgeurvDebtLiquidateBorrowEvent.parameters = new Array()

  aPolAgeurvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolAgeurvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeurvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAgeurvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolAgeurvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolAgeurvDebtLiquidateBorrowEvent
}

export function createaPolAGEURVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolAGEURVDebtMint {
  let aPolAgeurvDebtMintEvent = changetype<aPolAGEURVDebtMint>(newMockEvent())

  aPolAgeurvDebtMintEvent.parameters = new Array()

  aPolAgeurvDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolAgeurvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolAgeurvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolAgeurvDebtMintEvent
}

export function createaPolAGEURVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolAGEURVDebtNewAdmin {
  let aPolAgeurvDebtNewAdminEvent = changetype<aPolAGEURVDebtNewAdmin>(
    newMockEvent()
  )

  aPolAgeurvDebtNewAdminEvent.parameters = new Array()

  aPolAgeurvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolAgeurvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolAgeurvDebtNewAdminEvent
}

export function createaPolAGEURVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolAGEURVDebtNewComptroller {
  let aPolAgeurvDebtNewComptrollerEvent = changetype<
    aPolAGEURVDebtNewComptroller
  >(newMockEvent())

  aPolAgeurvDebtNewComptrollerEvent.parameters = new Array()

  aPolAgeurvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolAgeurvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolAgeurvDebtNewComptrollerEvent
}

export function createaPolAGEURVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolAGEURVDebtNewImplementation {
  let aPolAgeurvDebtNewImplementationEvent = changetype<
    aPolAGEURVDebtNewImplementation
  >(newMockEvent())

  aPolAgeurvDebtNewImplementationEvent.parameters = new Array()

  aPolAgeurvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolAgeurvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolAgeurvDebtNewImplementationEvent
}

export function createaPolAGEURVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolAGEURVDebtNewMarketInterestRateModel {
  let aPolAgeurvDebtNewMarketInterestRateModelEvent = changetype<
    aPolAGEURVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolAgeurvDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolAgeurvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolAgeurvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolAgeurvDebtNewMarketInterestRateModelEvent
}

export function createaPolAGEURVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolAGEURVDebtNewPendingAdmin {
  let aPolAgeurvDebtNewPendingAdminEvent = changetype<
    aPolAGEURVDebtNewPendingAdmin
  >(newMockEvent())

  aPolAgeurvDebtNewPendingAdminEvent.parameters = new Array()

  aPolAgeurvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolAgeurvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolAgeurvDebtNewPendingAdminEvent
}

export function createaPolAGEURVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolAGEURVDebtNewReserveFactor {
  let aPolAgeurvDebtNewReserveFactorEvent = changetype<
    aPolAGEURVDebtNewReserveFactor
  >(newMockEvent())

  aPolAgeurvDebtNewReserveFactorEvent.parameters = new Array()

  aPolAgeurvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolAgeurvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolAgeurvDebtNewReserveFactorEvent
}

export function createaPolAGEURVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolAGEURVDebtRedeem {
  let aPolAgeurvDebtRedeemEvent = changetype<aPolAGEURVDebtRedeem>(
    newMockEvent()
  )

  aPolAgeurvDebtRedeemEvent.parameters = new Array()

  aPolAgeurvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolAgeurvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolAgeurvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolAgeurvDebtRedeemEvent
}

export function createaPolAGEURVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolAGEURVDebtRepayBorrow {
  let aPolAgeurvDebtRepayBorrowEvent = changetype<aPolAGEURVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolAgeurvDebtRepayBorrowEvent.parameters = new Array()

  aPolAgeurvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolAgeurvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeurvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAgeurvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAgeurvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeurvDebtRepayBorrowEvent
}

export function createaPolAGEURVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolAGEURVDebtReservesAdded {
  let aPolAgeurvDebtReservesAddedEvent = changetype<
    aPolAGEURVDebtReservesAdded
  >(newMockEvent())

  aPolAgeurvDebtReservesAddedEvent.parameters = new Array()

  aPolAgeurvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolAgeurvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolAgeurvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAgeurvDebtReservesAddedEvent
}

export function createaPolAGEURVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolAGEURVDebtReservesReduced {
  let aPolAgeurvDebtReservesReducedEvent = changetype<
    aPolAGEURVDebtReservesReduced
  >(newMockEvent())

  aPolAgeurvDebtReservesReducedEvent.parameters = new Array()

  aPolAgeurvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolAgeurvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolAgeurvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAgeurvDebtReservesReducedEvent
}

export function createaPolAGEURVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolAGEURVDebtTransfer {
  let aPolAgeurvDebtTransferEvent = changetype<aPolAGEURVDebtTransfer>(
    newMockEvent()
  )

  aPolAgeurvDebtTransferEvent.parameters = new Array()

  aPolAgeurvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolAgeurvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolAgeurvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAgeurvDebtTransferEvent
}
