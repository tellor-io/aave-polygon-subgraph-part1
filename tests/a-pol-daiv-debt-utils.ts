import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolDAIVDebtAccrueInterest,
  aPolDAIVDebtApproval,
  aPolDAIVDebtBorrow,
  aPolDAIVDebtFailure,
  aPolDAIVDebtLiquidateBorrow,
  aPolDAIVDebtMint,
  aPolDAIVDebtNewAdmin,
  aPolDAIVDebtNewComptroller,
  aPolDAIVDebtNewImplementation,
  aPolDAIVDebtNewMarketInterestRateModel,
  aPolDAIVDebtNewPendingAdmin,
  aPolDAIVDebtNewReserveFactor,
  aPolDAIVDebtRedeem,
  aPolDAIVDebtRepayBorrow,
  aPolDAIVDebtReservesAdded,
  aPolDAIVDebtReservesReduced,
  aPolDAIVDebtTransfer
} from "../generated/aPolDAIVDebt/aPolDAIVDebt"

export function createaPolDAIVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolDAIVDebtAccrueInterest {
  let aPolDaivDebtAccrueInterestEvent = changetype<aPolDAIVDebtAccrueInterest>(
    newMockEvent()
  )

  aPolDaivDebtAccrueInterestEvent.parameters = new Array()

  aPolDaivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolDaivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolDaivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolDaivDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaivDebtAccrueInterestEvent
}

export function createaPolDAIVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolDAIVDebtApproval {
  let aPolDaivDebtApprovalEvent = changetype<aPolDAIVDebtApproval>(
    newMockEvent()
  )

  aPolDaivDebtApprovalEvent.parameters = new Array()

  aPolDaivDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolDaivDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolDaivDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDaivDebtApprovalEvent
}

export function createaPolDAIVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDAIVDebtBorrow {
  let aPolDaivDebtBorrowEvent = changetype<aPolDAIVDebtBorrow>(newMockEvent())

  aPolDaivDebtBorrowEvent.parameters = new Array()

  aPolDaivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolDaivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDaivDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaivDebtBorrowEvent
}

export function createaPolDAIVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolDAIVDebtFailure {
  let aPolDaivDebtFailureEvent = changetype<aPolDAIVDebtFailure>(newMockEvent())

  aPolDaivDebtFailureEvent.parameters = new Array()

  aPolDaivDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolDaivDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolDaivDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolDaivDebtFailureEvent
}

export function createaPolDAIVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolDAIVDebtLiquidateBorrow {
  let aPolDaivDebtLiquidateBorrowEvent = changetype<
    aPolDAIVDebtLiquidateBorrow
  >(newMockEvent())

  aPolDaivDebtLiquidateBorrowEvent.parameters = new Array()

  aPolDaivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolDaivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDaivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolDaivDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolDaivDebtLiquidateBorrowEvent
}

export function createaPolDAIVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolDAIVDebtMint {
  let aPolDaivDebtMintEvent = changetype<aPolDAIVDebtMint>(newMockEvent())

  aPolDaivDebtMintEvent.parameters = new Array()

  aPolDaivDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolDaivDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolDaivDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolDaivDebtMintEvent
}

export function createaPolDAIVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolDAIVDebtNewAdmin {
  let aPolDaivDebtNewAdminEvent = changetype<aPolDAIVDebtNewAdmin>(
    newMockEvent()
  )

  aPolDaivDebtNewAdminEvent.parameters = new Array()

  aPolDaivDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolDaivDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolDaivDebtNewAdminEvent
}

export function createaPolDAIVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolDAIVDebtNewComptroller {
  let aPolDaivDebtNewComptrollerEvent = changetype<aPolDAIVDebtNewComptroller>(
    newMockEvent()
  )

  aPolDaivDebtNewComptrollerEvent.parameters = new Array()

  aPolDaivDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolDaivDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolDaivDebtNewComptrollerEvent
}

export function createaPolDAIVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolDAIVDebtNewImplementation {
  let aPolDaivDebtNewImplementationEvent = changetype<
    aPolDAIVDebtNewImplementation
  >(newMockEvent())

  aPolDaivDebtNewImplementationEvent.parameters = new Array()

  aPolDaivDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolDaivDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolDaivDebtNewImplementationEvent
}

export function createaPolDAIVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolDAIVDebtNewMarketInterestRateModel {
  let aPolDaivDebtNewMarketInterestRateModelEvent = changetype<
    aPolDAIVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolDaivDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolDaivDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolDaivDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolDaivDebtNewMarketInterestRateModelEvent
}

export function createaPolDAIVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolDAIVDebtNewPendingAdmin {
  let aPolDaivDebtNewPendingAdminEvent = changetype<
    aPolDAIVDebtNewPendingAdmin
  >(newMockEvent())

  aPolDaivDebtNewPendingAdminEvent.parameters = new Array()

  aPolDaivDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolDaivDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolDaivDebtNewPendingAdminEvent
}

export function createaPolDAIVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolDAIVDebtNewReserveFactor {
  let aPolDaivDebtNewReserveFactorEvent = changetype<
    aPolDAIVDebtNewReserveFactor
  >(newMockEvent())

  aPolDaivDebtNewReserveFactorEvent.parameters = new Array()

  aPolDaivDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolDaivDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolDaivDebtNewReserveFactorEvent
}

export function createaPolDAIVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolDAIVDebtRedeem {
  let aPolDaivDebtRedeemEvent = changetype<aPolDAIVDebtRedeem>(newMockEvent())

  aPolDaivDebtRedeemEvent.parameters = new Array()

  aPolDaivDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolDaivDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolDaivDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolDaivDebtRedeemEvent
}

export function createaPolDAIVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDAIVDebtRepayBorrow {
  let aPolDaivDebtRepayBorrowEvent = changetype<aPolDAIVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolDaivDebtRepayBorrowEvent.parameters = new Array()

  aPolDaivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolDaivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDaivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDaivDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaivDebtRepayBorrowEvent
}

export function createaPolDAIVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolDAIVDebtReservesAdded {
  let aPolDaivDebtReservesAddedEvent = changetype<aPolDAIVDebtReservesAdded>(
    newMockEvent()
  )

  aPolDaivDebtReservesAddedEvent.parameters = new Array()

  aPolDaivDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolDaivDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolDaivDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDaivDebtReservesAddedEvent
}

export function createaPolDAIVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolDAIVDebtReservesReduced {
  let aPolDaivDebtReservesReducedEvent = changetype<
    aPolDAIVDebtReservesReduced
  >(newMockEvent())

  aPolDaivDebtReservesReducedEvent.parameters = new Array()

  aPolDaivDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolDaivDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolDaivDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDaivDebtReservesReducedEvent
}

export function createaPolDAIVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolDAIVDebtTransfer {
  let aPolDaivDebtTransferEvent = changetype<aPolDAIVDebtTransfer>(
    newMockEvent()
  )

  aPolDaivDebtTransferEvent.parameters = new Array()

  aPolDaivDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolDaivDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolDaivDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDaivDebtTransferEvent
}
