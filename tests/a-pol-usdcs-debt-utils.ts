import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolUSDCSDebtAccrueInterest,
  aPolUSDCSDebtApproval,
  aPolUSDCSDebtBorrow,
  aPolUSDCSDebtFailure,
  aPolUSDCSDebtLiquidateBorrow,
  aPolUSDCSDebtMint,
  aPolUSDCSDebtNewAdmin,
  aPolUSDCSDebtNewComptroller,
  aPolUSDCSDebtNewImplementation,
  aPolUSDCSDebtNewMarketInterestRateModel,
  aPolUSDCSDebtNewPendingAdmin,
  aPolUSDCSDebtNewReserveFactor,
  aPolUSDCSDebtRedeem,
  aPolUSDCSDebtRepayBorrow,
  aPolUSDCSDebtReservesAdded,
  aPolUSDCSDebtReservesReduced,
  aPolUSDCSDebtTransfer
} from "../generated/aPolUSDCSDebt/aPolUSDCSDebt"

export function createaPolUSDCSDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolUSDCSDebtAccrueInterest {
  let aPolUsdcsDebtAccrueInterestEvent = changetype<
    aPolUSDCSDebtAccrueInterest
  >(newMockEvent())

  aPolUsdcsDebtAccrueInterestEvent.parameters = new Array()

  aPolUsdcsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolUsdcsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolUsdcsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolUsdcsDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcsDebtAccrueInterestEvent
}

export function createaPolUSDCSDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolUSDCSDebtApproval {
  let aPolUsdcsDebtApprovalEvent = changetype<aPolUSDCSDebtApproval>(
    newMockEvent()
  )

  aPolUsdcsDebtApprovalEvent.parameters = new Array()

  aPolUsdcsDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolUsdcsDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolUsdcsDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdcsDebtApprovalEvent
}

export function createaPolUSDCSDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDCSDebtBorrow {
  let aPolUsdcsDebtBorrowEvent = changetype<aPolUSDCSDebtBorrow>(newMockEvent())

  aPolUsdcsDebtBorrowEvent.parameters = new Array()

  aPolUsdcsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolUsdcsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdcsDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcsDebtBorrowEvent
}

export function createaPolUSDCSDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolUSDCSDebtFailure {
  let aPolUsdcsDebtFailureEvent = changetype<aPolUSDCSDebtFailure>(
    newMockEvent()
  )

  aPolUsdcsDebtFailureEvent.parameters = new Array()

  aPolUsdcsDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolUsdcsDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolUsdcsDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolUsdcsDebtFailureEvent
}

export function createaPolUSDCSDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolUSDCSDebtLiquidateBorrow {
  let aPolUsdcsDebtLiquidateBorrowEvent = changetype<
    aPolUSDCSDebtLiquidateBorrow
  >(newMockEvent())

  aPolUsdcsDebtLiquidateBorrowEvent.parameters = new Array()

  aPolUsdcsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolUsdcsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdcsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolUsdcsDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolUsdcsDebtLiquidateBorrowEvent
}

export function createaPolUSDCSDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolUSDCSDebtMint {
  let aPolUsdcsDebtMintEvent = changetype<aPolUSDCSDebtMint>(newMockEvent())

  aPolUsdcsDebtMintEvent.parameters = new Array()

  aPolUsdcsDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolUsdcsDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolUsdcsDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolUsdcsDebtMintEvent
}

export function createaPolUSDCSDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolUSDCSDebtNewAdmin {
  let aPolUsdcsDebtNewAdminEvent = changetype<aPolUSDCSDebtNewAdmin>(
    newMockEvent()
  )

  aPolUsdcsDebtNewAdminEvent.parameters = new Array()

  aPolUsdcsDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolUsdcsDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolUsdcsDebtNewAdminEvent
}

export function createaPolUSDCSDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolUSDCSDebtNewComptroller {
  let aPolUsdcsDebtNewComptrollerEvent = changetype<
    aPolUSDCSDebtNewComptroller
  >(newMockEvent())

  aPolUsdcsDebtNewComptrollerEvent.parameters = new Array()

  aPolUsdcsDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolUsdcsDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolUsdcsDebtNewComptrollerEvent
}

export function createaPolUSDCSDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolUSDCSDebtNewImplementation {
  let aPolUsdcsDebtNewImplementationEvent = changetype<
    aPolUSDCSDebtNewImplementation
  >(newMockEvent())

  aPolUsdcsDebtNewImplementationEvent.parameters = new Array()

  aPolUsdcsDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolUsdcsDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolUsdcsDebtNewImplementationEvent
}

export function createaPolUSDCSDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolUSDCSDebtNewMarketInterestRateModel {
  let aPolUsdcsDebtNewMarketInterestRateModelEvent = changetype<
    aPolUSDCSDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolUsdcsDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolUsdcsDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolUsdcsDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolUsdcsDebtNewMarketInterestRateModelEvent
}

export function createaPolUSDCSDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolUSDCSDebtNewPendingAdmin {
  let aPolUsdcsDebtNewPendingAdminEvent = changetype<
    aPolUSDCSDebtNewPendingAdmin
  >(newMockEvent())

  aPolUsdcsDebtNewPendingAdminEvent.parameters = new Array()

  aPolUsdcsDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolUsdcsDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolUsdcsDebtNewPendingAdminEvent
}

export function createaPolUSDCSDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolUSDCSDebtNewReserveFactor {
  let aPolUsdcsDebtNewReserveFactorEvent = changetype<
    aPolUSDCSDebtNewReserveFactor
  >(newMockEvent())

  aPolUsdcsDebtNewReserveFactorEvent.parameters = new Array()

  aPolUsdcsDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolUsdcsDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolUsdcsDebtNewReserveFactorEvent
}

export function createaPolUSDCSDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolUSDCSDebtRedeem {
  let aPolUsdcsDebtRedeemEvent = changetype<aPolUSDCSDebtRedeem>(newMockEvent())

  aPolUsdcsDebtRedeemEvent.parameters = new Array()

  aPolUsdcsDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolUsdcsDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolUsdcsDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolUsdcsDebtRedeemEvent
}

export function createaPolUSDCSDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDCSDebtRepayBorrow {
  let aPolUsdcsDebtRepayBorrowEvent = changetype<aPolUSDCSDebtRepayBorrow>(
    newMockEvent()
  )

  aPolUsdcsDebtRepayBorrowEvent.parameters = new Array()

  aPolUsdcsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolUsdcsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdcsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdcsDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcsDebtRepayBorrowEvent
}

export function createaPolUSDCSDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDCSDebtReservesAdded {
  let aPolUsdcsDebtReservesAddedEvent = changetype<aPolUSDCSDebtReservesAdded>(
    newMockEvent()
  )

  aPolUsdcsDebtReservesAddedEvent.parameters = new Array()

  aPolUsdcsDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolUsdcsDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolUsdcsDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdcsDebtReservesAddedEvent
}

export function createaPolUSDCSDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDCSDebtReservesReduced {
  let aPolUsdcsDebtReservesReducedEvent = changetype<
    aPolUSDCSDebtReservesReduced
  >(newMockEvent())

  aPolUsdcsDebtReservesReducedEvent.parameters = new Array()

  aPolUsdcsDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolUsdcsDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolUsdcsDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdcsDebtReservesReducedEvent
}

export function createaPolUSDCSDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolUSDCSDebtTransfer {
  let aPolUsdcsDebtTransferEvent = changetype<aPolUSDCSDebtTransfer>(
    newMockEvent()
  )

  aPolUsdcsDebtTransferEvent.parameters = new Array()

  aPolUsdcsDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolUsdcsDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolUsdcsDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdcsDebtTransferEvent
}
