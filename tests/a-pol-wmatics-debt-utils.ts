import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWMATICSDebtAccrueInterest,
  aPolWMATICSDebtApproval,
  aPolWMATICSDebtBorrow,
  aPolWMATICSDebtFailure,
  aPolWMATICSDebtLiquidateBorrow,
  aPolWMATICSDebtMint,
  aPolWMATICSDebtNewAdmin,
  aPolWMATICSDebtNewComptroller,
  aPolWMATICSDebtNewImplementation,
  aPolWMATICSDebtNewMarketInterestRateModel,
  aPolWMATICSDebtNewPendingAdmin,
  aPolWMATICSDebtNewReserveFactor,
  aPolWMATICSDebtRedeem,
  aPolWMATICSDebtRepayBorrow,
  aPolWMATICSDebtReservesAdded,
  aPolWMATICSDebtReservesReduced,
  aPolWMATICSDebtTransfer
} from "../generated/aPolWMATICSDebt/aPolWMATICSDebt"

export function createaPolWMATICSDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWMATICSDebtAccrueInterest {
  let aPolWmaticsDebtAccrueInterestEvent = changetype<
    aPolWMATICSDebtAccrueInterest
  >(newMockEvent())

  aPolWmaticsDebtAccrueInterestEvent.parameters = new Array()

  aPolWmaticsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWmaticsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWmaticsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWmaticsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticsDebtAccrueInterestEvent
}

export function createaPolWMATICSDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWMATICSDebtApproval {
  let aPolWmaticsDebtApprovalEvent = changetype<aPolWMATICSDebtApproval>(
    newMockEvent()
  )

  aPolWmaticsDebtApprovalEvent.parameters = new Array()

  aPolWmaticsDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWmaticsDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWmaticsDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWmaticsDebtApprovalEvent
}

export function createaPolWMATICSDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWMATICSDebtBorrow {
  let aPolWmaticsDebtBorrowEvent = changetype<aPolWMATICSDebtBorrow>(
    newMockEvent()
  )

  aPolWmaticsDebtBorrowEvent.parameters = new Array()

  aPolWmaticsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWmaticsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWmaticsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticsDebtBorrowEvent
}

export function createaPolWMATICSDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWMATICSDebtFailure {
  let aPolWmaticsDebtFailureEvent = changetype<aPolWMATICSDebtFailure>(
    newMockEvent()
  )

  aPolWmaticsDebtFailureEvent.parameters = new Array()

  aPolWmaticsDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWmaticsDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWmaticsDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWmaticsDebtFailureEvent
}

export function createaPolWMATICSDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWMATICSDebtLiquidateBorrow {
  let aPolWmaticsDebtLiquidateBorrowEvent = changetype<
    aPolWMATICSDebtLiquidateBorrow
  >(newMockEvent())

  aPolWmaticsDebtLiquidateBorrowEvent.parameters = new Array()

  aPolWmaticsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWmaticsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWmaticsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWmaticsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWmaticsDebtLiquidateBorrowEvent
}

export function createaPolWMATICSDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWMATICSDebtMint {
  let aPolWmaticsDebtMintEvent = changetype<aPolWMATICSDebtMint>(newMockEvent())

  aPolWmaticsDebtMintEvent.parameters = new Array()

  aPolWmaticsDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWmaticsDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWmaticsDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWmaticsDebtMintEvent
}

export function createaPolWMATICSDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWMATICSDebtNewAdmin {
  let aPolWmaticsDebtNewAdminEvent = changetype<aPolWMATICSDebtNewAdmin>(
    newMockEvent()
  )

  aPolWmaticsDebtNewAdminEvent.parameters = new Array()

  aPolWmaticsDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWmaticsDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWmaticsDebtNewAdminEvent
}

export function createaPolWMATICSDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWMATICSDebtNewComptroller {
  let aPolWmaticsDebtNewComptrollerEvent = changetype<
    aPolWMATICSDebtNewComptroller
  >(newMockEvent())

  aPolWmaticsDebtNewComptrollerEvent.parameters = new Array()

  aPolWmaticsDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWmaticsDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWmaticsDebtNewComptrollerEvent
}

export function createaPolWMATICSDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWMATICSDebtNewImplementation {
  let aPolWmaticsDebtNewImplementationEvent = changetype<
    aPolWMATICSDebtNewImplementation
  >(newMockEvent())

  aPolWmaticsDebtNewImplementationEvent.parameters = new Array()

  aPolWmaticsDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWmaticsDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWmaticsDebtNewImplementationEvent
}

export function createaPolWMATICSDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWMATICSDebtNewMarketInterestRateModel {
  let aPolWmaticsDebtNewMarketInterestRateModelEvent = changetype<
    aPolWMATICSDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolWmaticsDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWmaticsDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWmaticsDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWmaticsDebtNewMarketInterestRateModelEvent
}

export function createaPolWMATICSDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWMATICSDebtNewPendingAdmin {
  let aPolWmaticsDebtNewPendingAdminEvent = changetype<
    aPolWMATICSDebtNewPendingAdmin
  >(newMockEvent())

  aPolWmaticsDebtNewPendingAdminEvent.parameters = new Array()

  aPolWmaticsDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWmaticsDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWmaticsDebtNewPendingAdminEvent
}

export function createaPolWMATICSDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWMATICSDebtNewReserveFactor {
  let aPolWmaticsDebtNewReserveFactorEvent = changetype<
    aPolWMATICSDebtNewReserveFactor
  >(newMockEvent())

  aPolWmaticsDebtNewReserveFactorEvent.parameters = new Array()

  aPolWmaticsDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWmaticsDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWmaticsDebtNewReserveFactorEvent
}

export function createaPolWMATICSDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWMATICSDebtRedeem {
  let aPolWmaticsDebtRedeemEvent = changetype<aPolWMATICSDebtRedeem>(
    newMockEvent()
  )

  aPolWmaticsDebtRedeemEvent.parameters = new Array()

  aPolWmaticsDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWmaticsDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWmaticsDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWmaticsDebtRedeemEvent
}

export function createaPolWMATICSDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWMATICSDebtRepayBorrow {
  let aPolWmaticsDebtRepayBorrowEvent = changetype<aPolWMATICSDebtRepayBorrow>(
    newMockEvent()
  )

  aPolWmaticsDebtRepayBorrowEvent.parameters = new Array()

  aPolWmaticsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWmaticsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWmaticsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWmaticsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticsDebtRepayBorrowEvent
}

export function createaPolWMATICSDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWMATICSDebtReservesAdded {
  let aPolWmaticsDebtReservesAddedEvent = changetype<
    aPolWMATICSDebtReservesAdded
  >(newMockEvent())

  aPolWmaticsDebtReservesAddedEvent.parameters = new Array()

  aPolWmaticsDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWmaticsDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWmaticsDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWmaticsDebtReservesAddedEvent
}

export function createaPolWMATICSDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWMATICSDebtReservesReduced {
  let aPolWmaticsDebtReservesReducedEvent = changetype<
    aPolWMATICSDebtReservesReduced
  >(newMockEvent())

  aPolWmaticsDebtReservesReducedEvent.parameters = new Array()

  aPolWmaticsDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWmaticsDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWmaticsDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWmaticsDebtReservesReducedEvent
}

export function createaPolWMATICSDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWMATICSDebtTransfer {
  let aPolWmaticsDebtTransferEvent = changetype<aPolWMATICSDebtTransfer>(
    newMockEvent()
  )

  aPolWmaticsDebtTransferEvent.parameters = new Array()

  aPolWmaticsDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWmaticsDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWmaticsDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWmaticsDebtTransferEvent
}
