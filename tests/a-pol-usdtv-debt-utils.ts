import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolUSDTVDebtAccrueInterest,
  aPolUSDTVDebtApproval,
  aPolUSDTVDebtBorrow,
  aPolUSDTVDebtFailure,
  aPolUSDTVDebtLiquidateBorrow,
  aPolUSDTVDebtMint,
  aPolUSDTVDebtNewAdmin,
  aPolUSDTVDebtNewComptroller,
  aPolUSDTVDebtNewImplementation,
  aPolUSDTVDebtNewMarketInterestRateModel,
  aPolUSDTVDebtNewPendingAdmin,
  aPolUSDTVDebtNewReserveFactor,
  aPolUSDTVDebtRedeem,
  aPolUSDTVDebtRepayBorrow,
  aPolUSDTVDebtReservesAdded,
  aPolUSDTVDebtReservesReduced,
  aPolUSDTVDebtTransfer
} from "../generated/aPolUSDTVDebt/aPolUSDTVDebt"

export function createaPolUSDTVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolUSDTVDebtAccrueInterest {
  let aPolUsdtvDebtAccrueInterestEvent = changetype<
    aPolUSDTVDebtAccrueInterest
  >(newMockEvent())

  aPolUsdtvDebtAccrueInterestEvent.parameters = new Array()

  aPolUsdtvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolUsdtvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolUsdtvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolUsdtvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtvDebtAccrueInterestEvent
}

export function createaPolUSDTVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolUSDTVDebtApproval {
  let aPolUsdtvDebtApprovalEvent = changetype<aPolUSDTVDebtApproval>(
    newMockEvent()
  )

  aPolUsdtvDebtApprovalEvent.parameters = new Array()

  aPolUsdtvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolUsdtvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolUsdtvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdtvDebtApprovalEvent
}

export function createaPolUSDTVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDTVDebtBorrow {
  let aPolUsdtvDebtBorrowEvent = changetype<aPolUSDTVDebtBorrow>(newMockEvent())

  aPolUsdtvDebtBorrowEvent.parameters = new Array()

  aPolUsdtvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolUsdtvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdtvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtvDebtBorrowEvent
}

export function createaPolUSDTVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolUSDTVDebtFailure {
  let aPolUsdtvDebtFailureEvent = changetype<aPolUSDTVDebtFailure>(
    newMockEvent()
  )

  aPolUsdtvDebtFailureEvent.parameters = new Array()

  aPolUsdtvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolUsdtvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolUsdtvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolUsdtvDebtFailureEvent
}

export function createaPolUSDTVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolUSDTVDebtLiquidateBorrow {
  let aPolUsdtvDebtLiquidateBorrowEvent = changetype<
    aPolUSDTVDebtLiquidateBorrow
  >(newMockEvent())

  aPolUsdtvDebtLiquidateBorrowEvent.parameters = new Array()

  aPolUsdtvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolUsdtvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdtvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolUsdtvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolUsdtvDebtLiquidateBorrowEvent
}

export function createaPolUSDTVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolUSDTVDebtMint {
  let aPolUsdtvDebtMintEvent = changetype<aPolUSDTVDebtMint>(newMockEvent())

  aPolUsdtvDebtMintEvent.parameters = new Array()

  aPolUsdtvDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolUsdtvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolUsdtvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolUsdtvDebtMintEvent
}

export function createaPolUSDTVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolUSDTVDebtNewAdmin {
  let aPolUsdtvDebtNewAdminEvent = changetype<aPolUSDTVDebtNewAdmin>(
    newMockEvent()
  )

  aPolUsdtvDebtNewAdminEvent.parameters = new Array()

  aPolUsdtvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolUsdtvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolUsdtvDebtNewAdminEvent
}

export function createaPolUSDTVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolUSDTVDebtNewComptroller {
  let aPolUsdtvDebtNewComptrollerEvent = changetype<
    aPolUSDTVDebtNewComptroller
  >(newMockEvent())

  aPolUsdtvDebtNewComptrollerEvent.parameters = new Array()

  aPolUsdtvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolUsdtvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolUsdtvDebtNewComptrollerEvent
}

export function createaPolUSDTVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolUSDTVDebtNewImplementation {
  let aPolUsdtvDebtNewImplementationEvent = changetype<
    aPolUSDTVDebtNewImplementation
  >(newMockEvent())

  aPolUsdtvDebtNewImplementationEvent.parameters = new Array()

  aPolUsdtvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolUsdtvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolUsdtvDebtNewImplementationEvent
}

export function createaPolUSDTVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolUSDTVDebtNewMarketInterestRateModel {
  let aPolUsdtvDebtNewMarketInterestRateModelEvent = changetype<
    aPolUSDTVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolUsdtvDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolUsdtvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolUsdtvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolUsdtvDebtNewMarketInterestRateModelEvent
}

export function createaPolUSDTVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolUSDTVDebtNewPendingAdmin {
  let aPolUsdtvDebtNewPendingAdminEvent = changetype<
    aPolUSDTVDebtNewPendingAdmin
  >(newMockEvent())

  aPolUsdtvDebtNewPendingAdminEvent.parameters = new Array()

  aPolUsdtvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolUsdtvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolUsdtvDebtNewPendingAdminEvent
}

export function createaPolUSDTVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolUSDTVDebtNewReserveFactor {
  let aPolUsdtvDebtNewReserveFactorEvent = changetype<
    aPolUSDTVDebtNewReserveFactor
  >(newMockEvent())

  aPolUsdtvDebtNewReserveFactorEvent.parameters = new Array()

  aPolUsdtvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolUsdtvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolUsdtvDebtNewReserveFactorEvent
}

export function createaPolUSDTVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolUSDTVDebtRedeem {
  let aPolUsdtvDebtRedeemEvent = changetype<aPolUSDTVDebtRedeem>(newMockEvent())

  aPolUsdtvDebtRedeemEvent.parameters = new Array()

  aPolUsdtvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolUsdtvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolUsdtvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolUsdtvDebtRedeemEvent
}

export function createaPolUSDTVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDTVDebtRepayBorrow {
  let aPolUsdtvDebtRepayBorrowEvent = changetype<aPolUSDTVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolUsdtvDebtRepayBorrowEvent.parameters = new Array()

  aPolUsdtvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolUsdtvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdtvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdtvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtvDebtRepayBorrowEvent
}

export function createaPolUSDTVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDTVDebtReservesAdded {
  let aPolUsdtvDebtReservesAddedEvent = changetype<aPolUSDTVDebtReservesAdded>(
    newMockEvent()
  )

  aPolUsdtvDebtReservesAddedEvent.parameters = new Array()

  aPolUsdtvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolUsdtvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolUsdtvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdtvDebtReservesAddedEvent
}

export function createaPolUSDTVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDTVDebtReservesReduced {
  let aPolUsdtvDebtReservesReducedEvent = changetype<
    aPolUSDTVDebtReservesReduced
  >(newMockEvent())

  aPolUsdtvDebtReservesReducedEvent.parameters = new Array()

  aPolUsdtvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolUsdtvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolUsdtvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdtvDebtReservesReducedEvent
}

export function createaPolUSDTVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolUSDTVDebtTransfer {
  let aPolUsdtvDebtTransferEvent = changetype<aPolUSDTVDebtTransfer>(
    newMockEvent()
  )

  aPolUsdtvDebtTransferEvent.parameters = new Array()

  aPolUsdtvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolUsdtvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolUsdtvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdtvDebtTransferEvent
}
