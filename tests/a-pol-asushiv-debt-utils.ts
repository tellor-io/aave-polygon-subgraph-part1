import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolASUSHIVDebtAccrueInterest,
  aPolASUSHIVDebtApproval,
  aPolASUSHIVDebtBorrow,
  aPolASUSHIVDebtFailure,
  aPolASUSHIVDebtLiquidateBorrow,
  aPolASUSHIVDebtMint,
  aPolASUSHIVDebtNewAdmin,
  aPolASUSHIVDebtNewComptroller,
  aPolASUSHIVDebtNewImplementation,
  aPolASUSHIVDebtNewMarketInterestRateModel,
  aPolASUSHIVDebtNewPendingAdmin,
  aPolASUSHIVDebtNewReserveFactor,
  aPolASUSHIVDebtRedeem,
  aPolASUSHIVDebtRepayBorrow,
  aPolASUSHIVDebtReservesAdded,
  aPolASUSHIVDebtReservesReduced,
  aPolASUSHIVDebtTransfer
} from "../generated/aPolASUSHIVDebt/aPolASUSHIVDebt"

export function createaPolASUSHIVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolASUSHIVDebtAccrueInterest {
  let aPolAsushivDebtAccrueInterestEvent = changetype<
    aPolASUSHIVDebtAccrueInterest
  >(newMockEvent())

  aPolAsushivDebtAccrueInterestEvent.parameters = new Array()

  aPolAsushivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolAsushivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolAsushivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolAsushivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAsushivDebtAccrueInterestEvent
}

export function createaPolASUSHIVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolASUSHIVDebtApproval {
  let aPolAsushivDebtApprovalEvent = changetype<aPolASUSHIVDebtApproval>(
    newMockEvent()
  )

  aPolAsushivDebtApprovalEvent.parameters = new Array()

  aPolAsushivDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolAsushivDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolAsushivDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAsushivDebtApprovalEvent
}

export function createaPolASUSHIVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolASUSHIVDebtBorrow {
  let aPolAsushivDebtBorrowEvent = changetype<aPolASUSHIVDebtBorrow>(
    newMockEvent()
  )

  aPolAsushivDebtBorrowEvent.parameters = new Array()

  aPolAsushivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAsushivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolAsushivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAsushivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAsushivDebtBorrowEvent
}

export function createaPolASUSHIVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolASUSHIVDebtFailure {
  let aPolAsushivDebtFailureEvent = changetype<aPolASUSHIVDebtFailure>(
    newMockEvent()
  )

  aPolAsushivDebtFailureEvent.parameters = new Array()

  aPolAsushivDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolAsushivDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolAsushivDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolAsushivDebtFailureEvent
}

export function createaPolASUSHIVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolASUSHIVDebtLiquidateBorrow {
  let aPolAsushivDebtLiquidateBorrowEvent = changetype<
    aPolASUSHIVDebtLiquidateBorrow
  >(newMockEvent())

  aPolAsushivDebtLiquidateBorrowEvent.parameters = new Array()

  aPolAsushivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolAsushivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAsushivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAsushivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolAsushivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolAsushivDebtLiquidateBorrowEvent
}

export function createaPolASUSHIVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolASUSHIVDebtMint {
  let aPolAsushivDebtMintEvent = changetype<aPolASUSHIVDebtMint>(newMockEvent())

  aPolAsushivDebtMintEvent.parameters = new Array()

  aPolAsushivDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolAsushivDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolAsushivDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolAsushivDebtMintEvent
}

export function createaPolASUSHIVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolASUSHIVDebtNewAdmin {
  let aPolAsushivDebtNewAdminEvent = changetype<aPolASUSHIVDebtNewAdmin>(
    newMockEvent()
  )

  aPolAsushivDebtNewAdminEvent.parameters = new Array()

  aPolAsushivDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolAsushivDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolAsushivDebtNewAdminEvent
}

export function createaPolASUSHIVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolASUSHIVDebtNewComptroller {
  let aPolAsushivDebtNewComptrollerEvent = changetype<
    aPolASUSHIVDebtNewComptroller
  >(newMockEvent())

  aPolAsushivDebtNewComptrollerEvent.parameters = new Array()

  aPolAsushivDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolAsushivDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolAsushivDebtNewComptrollerEvent
}

export function createaPolASUSHIVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolASUSHIVDebtNewImplementation {
  let aPolAsushivDebtNewImplementationEvent = changetype<
    aPolASUSHIVDebtNewImplementation
  >(newMockEvent())

  aPolAsushivDebtNewImplementationEvent.parameters = new Array()

  aPolAsushivDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolAsushivDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolAsushivDebtNewImplementationEvent
}

export function createaPolASUSHIVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolASUSHIVDebtNewMarketInterestRateModel {
  let aPolAsushivDebtNewMarketInterestRateModelEvent = changetype<
    aPolASUSHIVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolAsushivDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolAsushivDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolAsushivDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolAsushivDebtNewMarketInterestRateModelEvent
}

export function createaPolASUSHIVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolASUSHIVDebtNewPendingAdmin {
  let aPolAsushivDebtNewPendingAdminEvent = changetype<
    aPolASUSHIVDebtNewPendingAdmin
  >(newMockEvent())

  aPolAsushivDebtNewPendingAdminEvent.parameters = new Array()

  aPolAsushivDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolAsushivDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolAsushivDebtNewPendingAdminEvent
}

export function createaPolASUSHIVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolASUSHIVDebtNewReserveFactor {
  let aPolAsushivDebtNewReserveFactorEvent = changetype<
    aPolASUSHIVDebtNewReserveFactor
  >(newMockEvent())

  aPolAsushivDebtNewReserveFactorEvent.parameters = new Array()

  aPolAsushivDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolAsushivDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolAsushivDebtNewReserveFactorEvent
}

export function createaPolASUSHIVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolASUSHIVDebtRedeem {
  let aPolAsushivDebtRedeemEvent = changetype<aPolASUSHIVDebtRedeem>(
    newMockEvent()
  )

  aPolAsushivDebtRedeemEvent.parameters = new Array()

  aPolAsushivDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolAsushivDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolAsushivDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolAsushivDebtRedeemEvent
}

export function createaPolASUSHIVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolASUSHIVDebtRepayBorrow {
  let aPolAsushivDebtRepayBorrowEvent = changetype<aPolASUSHIVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolAsushivDebtRepayBorrowEvent.parameters = new Array()

  aPolAsushivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolAsushivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAsushivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAsushivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAsushivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAsushivDebtRepayBorrowEvent
}

export function createaPolASUSHIVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolASUSHIVDebtReservesAdded {
  let aPolAsushivDebtReservesAddedEvent = changetype<
    aPolASUSHIVDebtReservesAdded
  >(newMockEvent())

  aPolAsushivDebtReservesAddedEvent.parameters = new Array()

  aPolAsushivDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolAsushivDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolAsushivDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAsushivDebtReservesAddedEvent
}

export function createaPolASUSHIVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolASUSHIVDebtReservesReduced {
  let aPolAsushivDebtReservesReducedEvent = changetype<
    aPolASUSHIVDebtReservesReduced
  >(newMockEvent())

  aPolAsushivDebtReservesReducedEvent.parameters = new Array()

  aPolAsushivDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolAsushivDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolAsushivDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAsushivDebtReservesReducedEvent
}

export function createaPolASUSHIVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolASUSHIVDebtTransfer {
  let aPolAsushivDebtTransferEvent = changetype<aPolASUSHIVDebtTransfer>(
    newMockEvent()
  )

  aPolAsushivDebtTransferEvent.parameters = new Array()

  aPolAsushivDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolAsushivDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolAsushivDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAsushivDebtTransferEvent
}
