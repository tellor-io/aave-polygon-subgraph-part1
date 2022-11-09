import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolAGEURSDebtAccrueInterest,
  aPolAGEURSDebtApproval,
  aPolAGEURSDebtBorrow,
  aPolAGEURSDebtFailure,
  aPolAGEURSDebtLiquidateBorrow,
  aPolAGEURSDebtMint,
  aPolAGEURSDebtNewAdmin,
  aPolAGEURSDebtNewComptroller,
  aPolAGEURSDebtNewImplementation,
  aPolAGEURSDebtNewMarketInterestRateModel,
  aPolAGEURSDebtNewPendingAdmin,
  aPolAGEURSDebtNewReserveFactor,
  aPolAGEURSDebtRedeem,
  aPolAGEURSDebtRepayBorrow,
  aPolAGEURSDebtReservesAdded,
  aPolAGEURSDebtReservesReduced,
  aPolAGEURSDebtTransfer
} from "../generated/aPolAGEURSDebt/aPolAGEURSDebt"

export function createaPolAGEURSDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolAGEURSDebtAccrueInterest {
  let aPolAgeursDebtAccrueInterestEvent = changetype<
    aPolAGEURSDebtAccrueInterest
  >(newMockEvent())

  aPolAgeursDebtAccrueInterestEvent.parameters = new Array()

  aPolAgeursDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolAgeursDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolAgeursDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolAgeursDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeursDebtAccrueInterestEvent
}

export function createaPolAGEURSDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolAGEURSDebtApproval {
  let aPolAgeursDebtApprovalEvent = changetype<aPolAGEURSDebtApproval>(
    newMockEvent()
  )

  aPolAgeursDebtApprovalEvent.parameters = new Array()

  aPolAgeursDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolAgeursDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolAgeursDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAgeursDebtApprovalEvent
}

export function createaPolAGEURSDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolAGEURSDebtBorrow {
  let aPolAgeursDebtBorrowEvent = changetype<aPolAGEURSDebtBorrow>(
    newMockEvent()
  )

  aPolAgeursDebtBorrowEvent.parameters = new Array()

  aPolAgeursDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeursDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolAgeursDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAgeursDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeursDebtBorrowEvent
}

export function createaPolAGEURSDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolAGEURSDebtFailure {
  let aPolAgeursDebtFailureEvent = changetype<aPolAGEURSDebtFailure>(
    newMockEvent()
  )

  aPolAgeursDebtFailureEvent.parameters = new Array()

  aPolAgeursDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolAgeursDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolAgeursDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolAgeursDebtFailureEvent
}

export function createaPolAGEURSDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolAGEURSDebtLiquidateBorrow {
  let aPolAgeursDebtLiquidateBorrowEvent = changetype<
    aPolAGEURSDebtLiquidateBorrow
  >(newMockEvent())

  aPolAgeursDebtLiquidateBorrowEvent.parameters = new Array()

  aPolAgeursDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolAgeursDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeursDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAgeursDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolAgeursDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolAgeursDebtLiquidateBorrowEvent
}

export function createaPolAGEURSDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolAGEURSDebtMint {
  let aPolAgeursDebtMintEvent = changetype<aPolAGEURSDebtMint>(newMockEvent())

  aPolAgeursDebtMintEvent.parameters = new Array()

  aPolAgeursDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolAgeursDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolAgeursDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolAgeursDebtMintEvent
}

export function createaPolAGEURSDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolAGEURSDebtNewAdmin {
  let aPolAgeursDebtNewAdminEvent = changetype<aPolAGEURSDebtNewAdmin>(
    newMockEvent()
  )

  aPolAgeursDebtNewAdminEvent.parameters = new Array()

  aPolAgeursDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolAgeursDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolAgeursDebtNewAdminEvent
}

export function createaPolAGEURSDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolAGEURSDebtNewComptroller {
  let aPolAgeursDebtNewComptrollerEvent = changetype<
    aPolAGEURSDebtNewComptroller
  >(newMockEvent())

  aPolAgeursDebtNewComptrollerEvent.parameters = new Array()

  aPolAgeursDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolAgeursDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolAgeursDebtNewComptrollerEvent
}

export function createaPolAGEURSDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolAGEURSDebtNewImplementation {
  let aPolAgeursDebtNewImplementationEvent = changetype<
    aPolAGEURSDebtNewImplementation
  >(newMockEvent())

  aPolAgeursDebtNewImplementationEvent.parameters = new Array()

  aPolAgeursDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolAgeursDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolAgeursDebtNewImplementationEvent
}

export function createaPolAGEURSDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolAGEURSDebtNewMarketInterestRateModel {
  let aPolAgeursDebtNewMarketInterestRateModelEvent = changetype<
    aPolAGEURSDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolAgeursDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolAgeursDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolAgeursDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolAgeursDebtNewMarketInterestRateModelEvent
}

export function createaPolAGEURSDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolAGEURSDebtNewPendingAdmin {
  let aPolAgeursDebtNewPendingAdminEvent = changetype<
    aPolAGEURSDebtNewPendingAdmin
  >(newMockEvent())

  aPolAgeursDebtNewPendingAdminEvent.parameters = new Array()

  aPolAgeursDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolAgeursDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolAgeursDebtNewPendingAdminEvent
}

export function createaPolAGEURSDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolAGEURSDebtNewReserveFactor {
  let aPolAgeursDebtNewReserveFactorEvent = changetype<
    aPolAGEURSDebtNewReserveFactor
  >(newMockEvent())

  aPolAgeursDebtNewReserveFactorEvent.parameters = new Array()

  aPolAgeursDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolAgeursDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolAgeursDebtNewReserveFactorEvent
}

export function createaPolAGEURSDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolAGEURSDebtRedeem {
  let aPolAgeursDebtRedeemEvent = changetype<aPolAGEURSDebtRedeem>(
    newMockEvent()
  )

  aPolAgeursDebtRedeemEvent.parameters = new Array()

  aPolAgeursDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolAgeursDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolAgeursDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolAgeursDebtRedeemEvent
}

export function createaPolAGEURSDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolAGEURSDebtRepayBorrow {
  let aPolAgeursDebtRepayBorrowEvent = changetype<aPolAGEURSDebtRepayBorrow>(
    newMockEvent()
  )

  aPolAgeursDebtRepayBorrowEvent.parameters = new Array()

  aPolAgeursDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolAgeursDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeursDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAgeursDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAgeursDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeursDebtRepayBorrowEvent
}

export function createaPolAGEURSDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolAGEURSDebtReservesAdded {
  let aPolAgeursDebtReservesAddedEvent = changetype<
    aPolAGEURSDebtReservesAdded
  >(newMockEvent())

  aPolAgeursDebtReservesAddedEvent.parameters = new Array()

  aPolAgeursDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolAgeursDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolAgeursDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAgeursDebtReservesAddedEvent
}

export function createaPolAGEURSDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolAGEURSDebtReservesReduced {
  let aPolAgeursDebtReservesReducedEvent = changetype<
    aPolAGEURSDebtReservesReduced
  >(newMockEvent())

  aPolAgeursDebtReservesReducedEvent.parameters = new Array()

  aPolAgeursDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolAgeursDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolAgeursDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAgeursDebtReservesReducedEvent
}

export function createaPolAGEURSDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolAGEURSDebtTransfer {
  let aPolAgeursDebtTransferEvent = changetype<aPolAGEURSDebtTransfer>(
    newMockEvent()
  )

  aPolAgeursDebtTransferEvent.parameters = new Array()

  aPolAgeursDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolAgeursDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolAgeursDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAgeursDebtTransferEvent
}
