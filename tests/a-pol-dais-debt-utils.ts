import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolDAISDebtAccrueInterest,
  aPolDAISDebtApproval,
  aPolDAISDebtBorrow,
  aPolDAISDebtFailure,
  aPolDAISDebtLiquidateBorrow,
  aPolDAISDebtMint,
  aPolDAISDebtNewAdmin,
  aPolDAISDebtNewComptroller,
  aPolDAISDebtNewImplementation,
  aPolDAISDebtNewMarketInterestRateModel,
  aPolDAISDebtNewPendingAdmin,
  aPolDAISDebtNewReserveFactor,
  aPolDAISDebtRedeem,
  aPolDAISDebtRepayBorrow,
  aPolDAISDebtReservesAdded,
  aPolDAISDebtReservesReduced,
  aPolDAISDebtTransfer
} from "../generated/aPolDAISDebt/aPolDAISDebt"

export function createaPolDAISDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolDAISDebtAccrueInterest {
  let aPolDaisDebtAccrueInterestEvent = changetype<aPolDAISDebtAccrueInterest>(
    newMockEvent()
  )

  aPolDaisDebtAccrueInterestEvent.parameters = new Array()

  aPolDaisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolDaisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolDaisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolDaisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaisDebtAccrueInterestEvent
}

export function createaPolDAISDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolDAISDebtApproval {
  let aPolDaisDebtApprovalEvent = changetype<aPolDAISDebtApproval>(
    newMockEvent()
  )

  aPolDaisDebtApprovalEvent.parameters = new Array()

  aPolDaisDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolDaisDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolDaisDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDaisDebtApprovalEvent
}

export function createaPolDAISDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDAISDebtBorrow {
  let aPolDaisDebtBorrowEvent = changetype<aPolDAISDebtBorrow>(newMockEvent())

  aPolDaisDebtBorrowEvent.parameters = new Array()

  aPolDaisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolDaisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDaisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaisDebtBorrowEvent
}

export function createaPolDAISDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolDAISDebtFailure {
  let aPolDaisDebtFailureEvent = changetype<aPolDAISDebtFailure>(newMockEvent())

  aPolDaisDebtFailureEvent.parameters = new Array()

  aPolDaisDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolDaisDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolDaisDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolDaisDebtFailureEvent
}

export function createaPolDAISDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolDAISDebtLiquidateBorrow {
  let aPolDaisDebtLiquidateBorrowEvent = changetype<
    aPolDAISDebtLiquidateBorrow
  >(newMockEvent())

  aPolDaisDebtLiquidateBorrowEvent.parameters = new Array()

  aPolDaisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolDaisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDaisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolDaisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolDaisDebtLiquidateBorrowEvent
}

export function createaPolDAISDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolDAISDebtMint {
  let aPolDaisDebtMintEvent = changetype<aPolDAISDebtMint>(newMockEvent())

  aPolDaisDebtMintEvent.parameters = new Array()

  aPolDaisDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolDaisDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolDaisDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolDaisDebtMintEvent
}

export function createaPolDAISDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolDAISDebtNewAdmin {
  let aPolDaisDebtNewAdminEvent = changetype<aPolDAISDebtNewAdmin>(
    newMockEvent()
  )

  aPolDaisDebtNewAdminEvent.parameters = new Array()

  aPolDaisDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolDaisDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolDaisDebtNewAdminEvent
}

export function createaPolDAISDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolDAISDebtNewComptroller {
  let aPolDaisDebtNewComptrollerEvent = changetype<aPolDAISDebtNewComptroller>(
    newMockEvent()
  )

  aPolDaisDebtNewComptrollerEvent.parameters = new Array()

  aPolDaisDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolDaisDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolDaisDebtNewComptrollerEvent
}

export function createaPolDAISDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolDAISDebtNewImplementation {
  let aPolDaisDebtNewImplementationEvent = changetype<
    aPolDAISDebtNewImplementation
  >(newMockEvent())

  aPolDaisDebtNewImplementationEvent.parameters = new Array()

  aPolDaisDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolDaisDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolDaisDebtNewImplementationEvent
}

export function createaPolDAISDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolDAISDebtNewMarketInterestRateModel {
  let aPolDaisDebtNewMarketInterestRateModelEvent = changetype<
    aPolDAISDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolDaisDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolDaisDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolDaisDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolDaisDebtNewMarketInterestRateModelEvent
}

export function createaPolDAISDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolDAISDebtNewPendingAdmin {
  let aPolDaisDebtNewPendingAdminEvent = changetype<
    aPolDAISDebtNewPendingAdmin
  >(newMockEvent())

  aPolDaisDebtNewPendingAdminEvent.parameters = new Array()

  aPolDaisDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolDaisDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolDaisDebtNewPendingAdminEvent
}

export function createaPolDAISDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolDAISDebtNewReserveFactor {
  let aPolDaisDebtNewReserveFactorEvent = changetype<
    aPolDAISDebtNewReserveFactor
  >(newMockEvent())

  aPolDaisDebtNewReserveFactorEvent.parameters = new Array()

  aPolDaisDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolDaisDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolDaisDebtNewReserveFactorEvent
}

export function createaPolDAISDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolDAISDebtRedeem {
  let aPolDaisDebtRedeemEvent = changetype<aPolDAISDebtRedeem>(newMockEvent())

  aPolDaisDebtRedeemEvent.parameters = new Array()

  aPolDaisDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolDaisDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolDaisDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolDaisDebtRedeemEvent
}

export function createaPolDAISDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDAISDebtRepayBorrow {
  let aPolDaisDebtRepayBorrowEvent = changetype<aPolDAISDebtRepayBorrow>(
    newMockEvent()
  )

  aPolDaisDebtRepayBorrowEvent.parameters = new Array()

  aPolDaisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolDaisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDaisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDaisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaisDebtRepayBorrowEvent
}

export function createaPolDAISDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolDAISDebtReservesAdded {
  let aPolDaisDebtReservesAddedEvent = changetype<aPolDAISDebtReservesAdded>(
    newMockEvent()
  )

  aPolDaisDebtReservesAddedEvent.parameters = new Array()

  aPolDaisDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolDaisDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolDaisDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDaisDebtReservesAddedEvent
}

export function createaPolDAISDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolDAISDebtReservesReduced {
  let aPolDaisDebtReservesReducedEvent = changetype<
    aPolDAISDebtReservesReduced
  >(newMockEvent())

  aPolDaisDebtReservesReducedEvent.parameters = new Array()

  aPolDaisDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolDaisDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolDaisDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDaisDebtReservesReducedEvent
}

export function createaPolDAISDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolDAISDebtTransfer {
  let aPolDaisDebtTransferEvent = changetype<aPolDAISDebtTransfer>(
    newMockEvent()
  )

  aPolDaisDebtTransferEvent.parameters = new Array()

  aPolDaisDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolDaisDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolDaisDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDaisDebtTransferEvent
}
