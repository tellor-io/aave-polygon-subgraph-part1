import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWBTCDebtAccrueInterest,
  aPolWBTCDebtApproval,
  aPolWBTCDebtBorrow,
  aPolWBTCDebtFailure,
  aPolWBTCDebtLiquidateBorrow,
  aPolWBTCDebtMint,
  aPolWBTCDebtNewAdmin,
  aPolWBTCDebtNewComptroller,
  aPolWBTCDebtNewImplementation,
  aPolWBTCDebtNewMarketInterestRateModel,
  aPolWBTCDebtNewPendingAdmin,
  aPolWBTCDebtNewReserveFactor,
  aPolWBTCDebtRedeem,
  aPolWBTCDebtRepayBorrow,
  aPolWBTCDebtReservesAdded,
  aPolWBTCDebtReservesReduced,
  aPolWBTCDebtTransfer
} from "../generated/aPolWBTCDebt/aPolWBTCDebt"

export function createaPolWBTCDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWBTCDebtAccrueInterest {
  let aPolWbtcDebtAccrueInterestEvent = changetype<aPolWBTCDebtAccrueInterest>(
    newMockEvent()
  )

  aPolWbtcDebtAccrueInterestEvent.parameters = new Array()

  aPolWbtcDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWbtcDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWbtcDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWbtcDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcDebtAccrueInterestEvent
}

export function createaPolWBTCDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWBTCDebtApproval {
  let aPolWbtcDebtApprovalEvent = changetype<aPolWBTCDebtApproval>(
    newMockEvent()
  )

  aPolWbtcDebtApprovalEvent.parameters = new Array()

  aPolWbtcDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWbtcDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWbtcDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWbtcDebtApprovalEvent
}

export function createaPolWBTCDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWBTCDebtBorrow {
  let aPolWbtcDebtBorrowEvent = changetype<aPolWBTCDebtBorrow>(newMockEvent())

  aPolWbtcDebtBorrowEvent.parameters = new Array()

  aPolWbtcDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWbtcDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWbtcDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcDebtBorrowEvent
}

export function createaPolWBTCDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWBTCDebtFailure {
  let aPolWbtcDebtFailureEvent = changetype<aPolWBTCDebtFailure>(newMockEvent())

  aPolWbtcDebtFailureEvent.parameters = new Array()

  aPolWbtcDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWbtcDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWbtcDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWbtcDebtFailureEvent
}

export function createaPolWBTCDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWBTCDebtLiquidateBorrow {
  let aPolWbtcDebtLiquidateBorrowEvent = changetype<
    aPolWBTCDebtLiquidateBorrow
  >(newMockEvent())

  aPolWbtcDebtLiquidateBorrowEvent.parameters = new Array()

  aPolWbtcDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWbtcDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWbtcDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWbtcDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWbtcDebtLiquidateBorrowEvent
}

export function createaPolWBTCDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWBTCDebtMint {
  let aPolWbtcDebtMintEvent = changetype<aPolWBTCDebtMint>(newMockEvent())

  aPolWbtcDebtMintEvent.parameters = new Array()

  aPolWbtcDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWbtcDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWbtcDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWbtcDebtMintEvent
}

export function createaPolWBTCDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWBTCDebtNewAdmin {
  let aPolWbtcDebtNewAdminEvent = changetype<aPolWBTCDebtNewAdmin>(
    newMockEvent()
  )

  aPolWbtcDebtNewAdminEvent.parameters = new Array()

  aPolWbtcDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWbtcDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWbtcDebtNewAdminEvent
}

export function createaPolWBTCDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWBTCDebtNewComptroller {
  let aPolWbtcDebtNewComptrollerEvent = changetype<aPolWBTCDebtNewComptroller>(
    newMockEvent()
  )

  aPolWbtcDebtNewComptrollerEvent.parameters = new Array()

  aPolWbtcDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWbtcDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWbtcDebtNewComptrollerEvent
}

export function createaPolWBTCDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWBTCDebtNewImplementation {
  let aPolWbtcDebtNewImplementationEvent = changetype<
    aPolWBTCDebtNewImplementation
  >(newMockEvent())

  aPolWbtcDebtNewImplementationEvent.parameters = new Array()

  aPolWbtcDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWbtcDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWbtcDebtNewImplementationEvent
}

export function createaPolWBTCDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWBTCDebtNewMarketInterestRateModel {
  let aPolWbtcDebtNewMarketInterestRateModelEvent = changetype<
    aPolWBTCDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolWbtcDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWbtcDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWbtcDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWbtcDebtNewMarketInterestRateModelEvent
}

export function createaPolWBTCDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWBTCDebtNewPendingAdmin {
  let aPolWbtcDebtNewPendingAdminEvent = changetype<
    aPolWBTCDebtNewPendingAdmin
  >(newMockEvent())

  aPolWbtcDebtNewPendingAdminEvent.parameters = new Array()

  aPolWbtcDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWbtcDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWbtcDebtNewPendingAdminEvent
}

export function createaPolWBTCDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWBTCDebtNewReserveFactor {
  let aPolWbtcDebtNewReserveFactorEvent = changetype<
    aPolWBTCDebtNewReserveFactor
  >(newMockEvent())

  aPolWbtcDebtNewReserveFactorEvent.parameters = new Array()

  aPolWbtcDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWbtcDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWbtcDebtNewReserveFactorEvent
}

export function createaPolWBTCDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWBTCDebtRedeem {
  let aPolWbtcDebtRedeemEvent = changetype<aPolWBTCDebtRedeem>(newMockEvent())

  aPolWbtcDebtRedeemEvent.parameters = new Array()

  aPolWbtcDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWbtcDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWbtcDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWbtcDebtRedeemEvent
}

export function createaPolWBTCDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWBTCDebtRepayBorrow {
  let aPolWbtcDebtRepayBorrowEvent = changetype<aPolWBTCDebtRepayBorrow>(
    newMockEvent()
  )

  aPolWbtcDebtRepayBorrowEvent.parameters = new Array()

  aPolWbtcDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWbtcDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWbtcDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWbtcDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcDebtRepayBorrowEvent
}

export function createaPolWBTCDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWBTCDebtReservesAdded {
  let aPolWbtcDebtReservesAddedEvent = changetype<aPolWBTCDebtReservesAdded>(
    newMockEvent()
  )

  aPolWbtcDebtReservesAddedEvent.parameters = new Array()

  aPolWbtcDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWbtcDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWbtcDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWbtcDebtReservesAddedEvent
}

export function createaPolWBTCDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWBTCDebtReservesReduced {
  let aPolWbtcDebtReservesReducedEvent = changetype<
    aPolWBTCDebtReservesReduced
  >(newMockEvent())

  aPolWbtcDebtReservesReducedEvent.parameters = new Array()

  aPolWbtcDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWbtcDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWbtcDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWbtcDebtReservesReducedEvent
}

export function createaPolWBTCDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWBTCDebtTransfer {
  let aPolWbtcDebtTransferEvent = changetype<aPolWBTCDebtTransfer>(
    newMockEvent()
  )

  aPolWbtcDebtTransferEvent.parameters = new Array()

  aPolWbtcDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWbtcDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWbtcDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWbtcDebtTransferEvent
}
