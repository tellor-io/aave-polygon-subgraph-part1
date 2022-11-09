import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWMATICVDebtAccrueInterest,
  aPolWMATICVDebtApproval,
  aPolWMATICVDebtBorrow,
  aPolWMATICVDebtFailure,
  aPolWMATICVDebtLiquidateBorrow,
  aPolWMATICVDebtMint,
  aPolWMATICVDebtNewAdmin,
  aPolWMATICVDebtNewComptroller,
  aPolWMATICVDebtNewImplementation,
  aPolWMATICVDebtNewMarketInterestRateModel,
  aPolWMATICVDebtNewPendingAdmin,
  aPolWMATICVDebtNewReserveFactor,
  aPolWMATICVDebtRedeem,
  aPolWMATICVDebtRepayBorrow,
  aPolWMATICVDebtReservesAdded,
  aPolWMATICVDebtReservesReduced,
  aPolWMATICVDebtTransfer
} from "../generated/aPolWMATICVDebt/aPolWMATICVDebt"

export function createaPolWMATICVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWMATICVDebtAccrueInterest {
  let aPolWmaticvDebtAccrueInterestEvent = changetype<
    aPolWMATICVDebtAccrueInterest
  >(newMockEvent())

  aPolWmaticvDebtAccrueInterestEvent.parameters = new Array()

  aPolWmaticvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWmaticvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWmaticvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWmaticvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticvDebtAccrueInterestEvent
}

export function createaPolWMATICVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWMATICVDebtApproval {
  let aPolWmaticvDebtApprovalEvent = changetype<aPolWMATICVDebtApproval>(
    newMockEvent()
  )

  aPolWmaticvDebtApprovalEvent.parameters = new Array()

  aPolWmaticvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWmaticvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWmaticvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWmaticvDebtApprovalEvent
}

export function createaPolWMATICVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWMATICVDebtBorrow {
  let aPolWmaticvDebtBorrowEvent = changetype<aPolWMATICVDebtBorrow>(
    newMockEvent()
  )

  aPolWmaticvDebtBorrowEvent.parameters = new Array()

  aPolWmaticvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWmaticvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWmaticvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticvDebtBorrowEvent
}

export function createaPolWMATICVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWMATICVDebtFailure {
  let aPolWmaticvDebtFailureEvent = changetype<aPolWMATICVDebtFailure>(
    newMockEvent()
  )

  aPolWmaticvDebtFailureEvent.parameters = new Array()

  aPolWmaticvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWmaticvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWmaticvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWmaticvDebtFailureEvent
}

export function createaPolWMATICVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWMATICVDebtLiquidateBorrow {
  let aPolWmaticvDebtLiquidateBorrowEvent = changetype<
    aPolWMATICVDebtLiquidateBorrow
  >(newMockEvent())

  aPolWmaticvDebtLiquidateBorrowEvent.parameters = new Array()

  aPolWmaticvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWmaticvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWmaticvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWmaticvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWmaticvDebtLiquidateBorrowEvent
}

export function createaPolWMATICVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWMATICVDebtMint {
  let aPolWmaticvDebtMintEvent = changetype<aPolWMATICVDebtMint>(newMockEvent())

  aPolWmaticvDebtMintEvent.parameters = new Array()

  aPolWmaticvDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWmaticvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWmaticvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWmaticvDebtMintEvent
}

export function createaPolWMATICVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWMATICVDebtNewAdmin {
  let aPolWmaticvDebtNewAdminEvent = changetype<aPolWMATICVDebtNewAdmin>(
    newMockEvent()
  )

  aPolWmaticvDebtNewAdminEvent.parameters = new Array()

  aPolWmaticvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWmaticvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWmaticvDebtNewAdminEvent
}

export function createaPolWMATICVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWMATICVDebtNewComptroller {
  let aPolWmaticvDebtNewComptrollerEvent = changetype<
    aPolWMATICVDebtNewComptroller
  >(newMockEvent())

  aPolWmaticvDebtNewComptrollerEvent.parameters = new Array()

  aPolWmaticvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWmaticvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWmaticvDebtNewComptrollerEvent
}

export function createaPolWMATICVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWMATICVDebtNewImplementation {
  let aPolWmaticvDebtNewImplementationEvent = changetype<
    aPolWMATICVDebtNewImplementation
  >(newMockEvent())

  aPolWmaticvDebtNewImplementationEvent.parameters = new Array()

  aPolWmaticvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWmaticvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWmaticvDebtNewImplementationEvent
}

export function createaPolWMATICVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWMATICVDebtNewMarketInterestRateModel {
  let aPolWmaticvDebtNewMarketInterestRateModelEvent = changetype<
    aPolWMATICVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolWmaticvDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWmaticvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWmaticvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWmaticvDebtNewMarketInterestRateModelEvent
}

export function createaPolWMATICVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWMATICVDebtNewPendingAdmin {
  let aPolWmaticvDebtNewPendingAdminEvent = changetype<
    aPolWMATICVDebtNewPendingAdmin
  >(newMockEvent())

  aPolWmaticvDebtNewPendingAdminEvent.parameters = new Array()

  aPolWmaticvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWmaticvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWmaticvDebtNewPendingAdminEvent
}

export function createaPolWMATICVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWMATICVDebtNewReserveFactor {
  let aPolWmaticvDebtNewReserveFactorEvent = changetype<
    aPolWMATICVDebtNewReserveFactor
  >(newMockEvent())

  aPolWmaticvDebtNewReserveFactorEvent.parameters = new Array()

  aPolWmaticvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWmaticvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWmaticvDebtNewReserveFactorEvent
}

export function createaPolWMATICVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWMATICVDebtRedeem {
  let aPolWmaticvDebtRedeemEvent = changetype<aPolWMATICVDebtRedeem>(
    newMockEvent()
  )

  aPolWmaticvDebtRedeemEvent.parameters = new Array()

  aPolWmaticvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWmaticvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWmaticvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWmaticvDebtRedeemEvent
}

export function createaPolWMATICVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWMATICVDebtRepayBorrow {
  let aPolWmaticvDebtRepayBorrowEvent = changetype<aPolWMATICVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolWmaticvDebtRepayBorrowEvent.parameters = new Array()

  aPolWmaticvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWmaticvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWmaticvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWmaticvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticvDebtRepayBorrowEvent
}

export function createaPolWMATICVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWMATICVDebtReservesAdded {
  let aPolWmaticvDebtReservesAddedEvent = changetype<
    aPolWMATICVDebtReservesAdded
  >(newMockEvent())

  aPolWmaticvDebtReservesAddedEvent.parameters = new Array()

  aPolWmaticvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWmaticvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWmaticvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWmaticvDebtReservesAddedEvent
}

export function createaPolWMATICVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWMATICVDebtReservesReduced {
  let aPolWmaticvDebtReservesReducedEvent = changetype<
    aPolWMATICVDebtReservesReduced
  >(newMockEvent())

  aPolWmaticvDebtReservesReducedEvent.parameters = new Array()

  aPolWmaticvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWmaticvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWmaticvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWmaticvDebtReservesReducedEvent
}

export function createaPolWMATICVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWMATICVDebtTransfer {
  let aPolWmaticvDebtTransferEvent = changetype<aPolWMATICVDebtTransfer>(
    newMockEvent()
  )

  aPolWmaticvDebtTransferEvent.parameters = new Array()

  aPolWmaticvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWmaticvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWmaticvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWmaticvDebtTransferEvent
}
