import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolLINKVDebtAccrueInterest,
  aPolLINKVDebtApproval,
  aPolLINKVDebtBorrow,
  aPolLINKVDebtFailure,
  aPolLINKVDebtLiquidateBorrow,
  aPolLINKVDebtMint,
  aPolLINKVDebtNewAdmin,
  aPolLINKVDebtNewComptroller,
  aPolLINKVDebtNewImplementation,
  aPolLINKVDebtNewMarketInterestRateModel,
  aPolLINKVDebtNewPendingAdmin,
  aPolLINKVDebtNewReserveFactor,
  aPolLINKVDebtRedeem,
  aPolLINKVDebtRepayBorrow,
  aPolLINKVDebtReservesAdded,
  aPolLINKVDebtReservesReduced,
  aPolLINKVDebtTransfer
} from "../generated/aPolLINKVDebt/aPolLINKVDebt"

export function createaPolLINKVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolLINKVDebtAccrueInterest {
  let aPolLinkvDebtAccrueInterestEvent = changetype<
    aPolLINKVDebtAccrueInterest
  >(newMockEvent())

  aPolLinkvDebtAccrueInterestEvent.parameters = new Array()

  aPolLinkvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolLinkvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolLinkvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolLinkvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinkvDebtAccrueInterestEvent
}

export function createaPolLINKVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolLINKVDebtApproval {
  let aPolLinkvDebtApprovalEvent = changetype<aPolLINKVDebtApproval>(
    newMockEvent()
  )

  aPolLinkvDebtApprovalEvent.parameters = new Array()

  aPolLinkvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolLinkvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolLinkvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolLinkvDebtApprovalEvent
}

export function createaPolLINKVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolLINKVDebtBorrow {
  let aPolLinkvDebtBorrowEvent = changetype<aPolLINKVDebtBorrow>(newMockEvent())

  aPolLinkvDebtBorrowEvent.parameters = new Array()

  aPolLinkvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinkvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolLinkvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolLinkvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinkvDebtBorrowEvent
}

export function createaPolLINKVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolLINKVDebtFailure {
  let aPolLinkvDebtFailureEvent = changetype<aPolLINKVDebtFailure>(
    newMockEvent()
  )

  aPolLinkvDebtFailureEvent.parameters = new Array()

  aPolLinkvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolLinkvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolLinkvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolLinkvDebtFailureEvent
}

export function createaPolLINKVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolLINKVDebtLiquidateBorrow {
  let aPolLinkvDebtLiquidateBorrowEvent = changetype<
    aPolLINKVDebtLiquidateBorrow
  >(newMockEvent())

  aPolLinkvDebtLiquidateBorrowEvent.parameters = new Array()

  aPolLinkvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolLinkvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinkvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolLinkvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolLinkvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolLinkvDebtLiquidateBorrowEvent
}

export function createaPolLINKVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolLINKVDebtMint {
  let aPolLinkvDebtMintEvent = changetype<aPolLINKVDebtMint>(newMockEvent())

  aPolLinkvDebtMintEvent.parameters = new Array()

  aPolLinkvDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolLinkvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolLinkvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolLinkvDebtMintEvent
}

export function createaPolLINKVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolLINKVDebtNewAdmin {
  let aPolLinkvDebtNewAdminEvent = changetype<aPolLINKVDebtNewAdmin>(
    newMockEvent()
  )

  aPolLinkvDebtNewAdminEvent.parameters = new Array()

  aPolLinkvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolLinkvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolLinkvDebtNewAdminEvent
}

export function createaPolLINKVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolLINKVDebtNewComptroller {
  let aPolLinkvDebtNewComptrollerEvent = changetype<
    aPolLINKVDebtNewComptroller
  >(newMockEvent())

  aPolLinkvDebtNewComptrollerEvent.parameters = new Array()

  aPolLinkvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolLinkvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolLinkvDebtNewComptrollerEvent
}

export function createaPolLINKVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolLINKVDebtNewImplementation {
  let aPolLinkvDebtNewImplementationEvent = changetype<
    aPolLINKVDebtNewImplementation
  >(newMockEvent())

  aPolLinkvDebtNewImplementationEvent.parameters = new Array()

  aPolLinkvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolLinkvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolLinkvDebtNewImplementationEvent
}

export function createaPolLINKVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolLINKVDebtNewMarketInterestRateModel {
  let aPolLinkvDebtNewMarketInterestRateModelEvent = changetype<
    aPolLINKVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolLinkvDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolLinkvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolLinkvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolLinkvDebtNewMarketInterestRateModelEvent
}

export function createaPolLINKVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolLINKVDebtNewPendingAdmin {
  let aPolLinkvDebtNewPendingAdminEvent = changetype<
    aPolLINKVDebtNewPendingAdmin
  >(newMockEvent())

  aPolLinkvDebtNewPendingAdminEvent.parameters = new Array()

  aPolLinkvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolLinkvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolLinkvDebtNewPendingAdminEvent
}

export function createaPolLINKVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolLINKVDebtNewReserveFactor {
  let aPolLinkvDebtNewReserveFactorEvent = changetype<
    aPolLINKVDebtNewReserveFactor
  >(newMockEvent())

  aPolLinkvDebtNewReserveFactorEvent.parameters = new Array()

  aPolLinkvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolLinkvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolLinkvDebtNewReserveFactorEvent
}

export function createaPolLINKVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolLINKVDebtRedeem {
  let aPolLinkvDebtRedeemEvent = changetype<aPolLINKVDebtRedeem>(newMockEvent())

  aPolLinkvDebtRedeemEvent.parameters = new Array()

  aPolLinkvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolLinkvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolLinkvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolLinkvDebtRedeemEvent
}

export function createaPolLINKVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolLINKVDebtRepayBorrow {
  let aPolLinkvDebtRepayBorrowEvent = changetype<aPolLINKVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolLinkvDebtRepayBorrowEvent.parameters = new Array()

  aPolLinkvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolLinkvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinkvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolLinkvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolLinkvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinkvDebtRepayBorrowEvent
}

export function createaPolLINKVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolLINKVDebtReservesAdded {
  let aPolLinkvDebtReservesAddedEvent = changetype<aPolLINKVDebtReservesAdded>(
    newMockEvent()
  )

  aPolLinkvDebtReservesAddedEvent.parameters = new Array()

  aPolLinkvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolLinkvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolLinkvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolLinkvDebtReservesAddedEvent
}

export function createaPolLINKVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolLINKVDebtReservesReduced {
  let aPolLinkvDebtReservesReducedEvent = changetype<
    aPolLINKVDebtReservesReduced
  >(newMockEvent())

  aPolLinkvDebtReservesReducedEvent.parameters = new Array()

  aPolLinkvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolLinkvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolLinkvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolLinkvDebtReservesReducedEvent
}

export function createaPolLINKVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolLINKVDebtTransfer {
  let aPolLinkvDebtTransferEvent = changetype<aPolLINKVDebtTransfer>(
    newMockEvent()
  )

  aPolLinkvDebtTransferEvent.parameters = new Array()

  aPolLinkvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolLinkvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolLinkvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolLinkvDebtTransferEvent
}
