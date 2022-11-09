import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWBTCVDebtAccrueInterest,
  aPolWBTCVDebtApproval,
  aPolWBTCVDebtBorrow,
  aPolWBTCVDebtFailure,
  aPolWBTCVDebtLiquidateBorrow,
  aPolWBTCVDebtMint,
  aPolWBTCVDebtNewAdmin,
  aPolWBTCVDebtNewComptroller,
  aPolWBTCVDebtNewImplementation,
  aPolWBTCVDebtNewMarketInterestRateModel,
  aPolWBTCVDebtNewPendingAdmin,
  aPolWBTCVDebtNewReserveFactor,
  aPolWBTCVDebtRedeem,
  aPolWBTCVDebtRepayBorrow,
  aPolWBTCVDebtReservesAdded,
  aPolWBTCVDebtReservesReduced,
  aPolWBTCVDebtTransfer
} from "../generated/aPolWBTCVDebt/aPolWBTCVDebt"

export function createaPolWBTCVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWBTCVDebtAccrueInterest {
  let aPolWbtcvDebtAccrueInterestEvent = changetype<
    aPolWBTCVDebtAccrueInterest
  >(newMockEvent())

  aPolWbtcvDebtAccrueInterestEvent.parameters = new Array()

  aPolWbtcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWbtcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWbtcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWbtcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcvDebtAccrueInterestEvent
}

export function createaPolWBTCVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWBTCVDebtApproval {
  let aPolWbtcvDebtApprovalEvent = changetype<aPolWBTCVDebtApproval>(
    newMockEvent()
  )

  aPolWbtcvDebtApprovalEvent.parameters = new Array()

  aPolWbtcvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWbtcvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWbtcvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWbtcvDebtApprovalEvent
}

export function createaPolWBTCVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWBTCVDebtBorrow {
  let aPolWbtcvDebtBorrowEvent = changetype<aPolWBTCVDebtBorrow>(newMockEvent())

  aPolWbtcvDebtBorrowEvent.parameters = new Array()

  aPolWbtcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWbtcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWbtcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcvDebtBorrowEvent
}

export function createaPolWBTCVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWBTCVDebtFailure {
  let aPolWbtcvDebtFailureEvent = changetype<aPolWBTCVDebtFailure>(
    newMockEvent()
  )

  aPolWbtcvDebtFailureEvent.parameters = new Array()

  aPolWbtcvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWbtcvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWbtcvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWbtcvDebtFailureEvent
}

export function createaPolWBTCVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWBTCVDebtLiquidateBorrow {
  let aPolWbtcvDebtLiquidateBorrowEvent = changetype<
    aPolWBTCVDebtLiquidateBorrow
  >(newMockEvent())

  aPolWbtcvDebtLiquidateBorrowEvent.parameters = new Array()

  aPolWbtcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWbtcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWbtcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWbtcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWbtcvDebtLiquidateBorrowEvent
}

export function createaPolWBTCVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWBTCVDebtMint {
  let aPolWbtcvDebtMintEvent = changetype<aPolWBTCVDebtMint>(newMockEvent())

  aPolWbtcvDebtMintEvent.parameters = new Array()

  aPolWbtcvDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWbtcvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWbtcvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWbtcvDebtMintEvent
}

export function createaPolWBTCVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWBTCVDebtNewAdmin {
  let aPolWbtcvDebtNewAdminEvent = changetype<aPolWBTCVDebtNewAdmin>(
    newMockEvent()
  )

  aPolWbtcvDebtNewAdminEvent.parameters = new Array()

  aPolWbtcvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWbtcvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWbtcvDebtNewAdminEvent
}

export function createaPolWBTCVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWBTCVDebtNewComptroller {
  let aPolWbtcvDebtNewComptrollerEvent = changetype<
    aPolWBTCVDebtNewComptroller
  >(newMockEvent())

  aPolWbtcvDebtNewComptrollerEvent.parameters = new Array()

  aPolWbtcvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWbtcvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWbtcvDebtNewComptrollerEvent
}

export function createaPolWBTCVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWBTCVDebtNewImplementation {
  let aPolWbtcvDebtNewImplementationEvent = changetype<
    aPolWBTCVDebtNewImplementation
  >(newMockEvent())

  aPolWbtcvDebtNewImplementationEvent.parameters = new Array()

  aPolWbtcvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWbtcvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWbtcvDebtNewImplementationEvent
}

export function createaPolWBTCVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWBTCVDebtNewMarketInterestRateModel {
  let aPolWbtcvDebtNewMarketInterestRateModelEvent = changetype<
    aPolWBTCVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolWbtcvDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWbtcvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWbtcvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWbtcvDebtNewMarketInterestRateModelEvent
}

export function createaPolWBTCVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWBTCVDebtNewPendingAdmin {
  let aPolWbtcvDebtNewPendingAdminEvent = changetype<
    aPolWBTCVDebtNewPendingAdmin
  >(newMockEvent())

  aPolWbtcvDebtNewPendingAdminEvent.parameters = new Array()

  aPolWbtcvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWbtcvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWbtcvDebtNewPendingAdminEvent
}

export function createaPolWBTCVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWBTCVDebtNewReserveFactor {
  let aPolWbtcvDebtNewReserveFactorEvent = changetype<
    aPolWBTCVDebtNewReserveFactor
  >(newMockEvent())

  aPolWbtcvDebtNewReserveFactorEvent.parameters = new Array()

  aPolWbtcvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWbtcvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWbtcvDebtNewReserveFactorEvent
}

export function createaPolWBTCVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWBTCVDebtRedeem {
  let aPolWbtcvDebtRedeemEvent = changetype<aPolWBTCVDebtRedeem>(newMockEvent())

  aPolWbtcvDebtRedeemEvent.parameters = new Array()

  aPolWbtcvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWbtcvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWbtcvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWbtcvDebtRedeemEvent
}

export function createaPolWBTCVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWBTCVDebtRepayBorrow {
  let aPolWbtcvDebtRepayBorrowEvent = changetype<aPolWBTCVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolWbtcvDebtRepayBorrowEvent.parameters = new Array()

  aPolWbtcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWbtcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWbtcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWbtcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcvDebtRepayBorrowEvent
}

export function createaPolWBTCVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWBTCVDebtReservesAdded {
  let aPolWbtcvDebtReservesAddedEvent = changetype<aPolWBTCVDebtReservesAdded>(
    newMockEvent()
  )

  aPolWbtcvDebtReservesAddedEvent.parameters = new Array()

  aPolWbtcvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWbtcvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWbtcvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWbtcvDebtReservesAddedEvent
}

export function createaPolWBTCVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWBTCVDebtReservesReduced {
  let aPolWbtcvDebtReservesReducedEvent = changetype<
    aPolWBTCVDebtReservesReduced
  >(newMockEvent())

  aPolWbtcvDebtReservesReducedEvent.parameters = new Array()

  aPolWbtcvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWbtcvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWbtcvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWbtcvDebtReservesReducedEvent
}

export function createaPolWBTCVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWBTCVDebtTransfer {
  let aPolWbtcvDebtTransferEvent = changetype<aPolWBTCVDebtTransfer>(
    newMockEvent()
  )

  aPolWbtcvDebtTransferEvent.parameters = new Array()

  aPolWbtcvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWbtcvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWbtcvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWbtcvDebtTransferEvent
}
