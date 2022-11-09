import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolUSDCVDebtAccrueInterest,
  aPolUSDCVDebtApproval,
  aPolUSDCVDebtBorrow,
  aPolUSDCVDebtFailure,
  aPolUSDCVDebtLiquidateBorrow,
  aPolUSDCVDebtMint,
  aPolUSDCVDebtNewAdmin,
  aPolUSDCVDebtNewComptroller,
  aPolUSDCVDebtNewImplementation,
  aPolUSDCVDebtNewMarketInterestRateModel,
  aPolUSDCVDebtNewPendingAdmin,
  aPolUSDCVDebtNewReserveFactor,
  aPolUSDCVDebtRedeem,
  aPolUSDCVDebtRepayBorrow,
  aPolUSDCVDebtReservesAdded,
  aPolUSDCVDebtReservesReduced,
  aPolUSDCVDebtTransfer
} from "../generated/aPolUSDCVDebt/aPolUSDCVDebt"

export function createaPolUSDCVDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolUSDCVDebtAccrueInterest {
  let aPolUsdcvDebtAccrueInterestEvent = changetype<
    aPolUSDCVDebtAccrueInterest
  >(newMockEvent())

  aPolUsdcvDebtAccrueInterestEvent.parameters = new Array()

  aPolUsdcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolUsdcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolUsdcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolUsdcvDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcvDebtAccrueInterestEvent
}

export function createaPolUSDCVDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolUSDCVDebtApproval {
  let aPolUsdcvDebtApprovalEvent = changetype<aPolUSDCVDebtApproval>(
    newMockEvent()
  )

  aPolUsdcvDebtApprovalEvent.parameters = new Array()

  aPolUsdcvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolUsdcvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolUsdcvDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdcvDebtApprovalEvent
}

export function createaPolUSDCVDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDCVDebtBorrow {
  let aPolUsdcvDebtBorrowEvent = changetype<aPolUSDCVDebtBorrow>(newMockEvent())

  aPolUsdcvDebtBorrowEvent.parameters = new Array()

  aPolUsdcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolUsdcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdcvDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcvDebtBorrowEvent
}

export function createaPolUSDCVDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolUSDCVDebtFailure {
  let aPolUsdcvDebtFailureEvent = changetype<aPolUSDCVDebtFailure>(
    newMockEvent()
  )

  aPolUsdcvDebtFailureEvent.parameters = new Array()

  aPolUsdcvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolUsdcvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolUsdcvDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolUsdcvDebtFailureEvent
}

export function createaPolUSDCVDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolUSDCVDebtLiquidateBorrow {
  let aPolUsdcvDebtLiquidateBorrowEvent = changetype<
    aPolUSDCVDebtLiquidateBorrow
  >(newMockEvent())

  aPolUsdcvDebtLiquidateBorrowEvent.parameters = new Array()

  aPolUsdcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolUsdcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolUsdcvDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolUsdcvDebtLiquidateBorrowEvent
}

export function createaPolUSDCVDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolUSDCVDebtMint {
  let aPolUsdcvDebtMintEvent = changetype<aPolUSDCVDebtMint>(newMockEvent())

  aPolUsdcvDebtMintEvent.parameters = new Array()

  aPolUsdcvDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolUsdcvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolUsdcvDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolUsdcvDebtMintEvent
}

export function createaPolUSDCVDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolUSDCVDebtNewAdmin {
  let aPolUsdcvDebtNewAdminEvent = changetype<aPolUSDCVDebtNewAdmin>(
    newMockEvent()
  )

  aPolUsdcvDebtNewAdminEvent.parameters = new Array()

  aPolUsdcvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolUsdcvDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolUsdcvDebtNewAdminEvent
}

export function createaPolUSDCVDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolUSDCVDebtNewComptroller {
  let aPolUsdcvDebtNewComptrollerEvent = changetype<
    aPolUSDCVDebtNewComptroller
  >(newMockEvent())

  aPolUsdcvDebtNewComptrollerEvent.parameters = new Array()

  aPolUsdcvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolUsdcvDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolUsdcvDebtNewComptrollerEvent
}

export function createaPolUSDCVDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolUSDCVDebtNewImplementation {
  let aPolUsdcvDebtNewImplementationEvent = changetype<
    aPolUSDCVDebtNewImplementation
  >(newMockEvent())

  aPolUsdcvDebtNewImplementationEvent.parameters = new Array()

  aPolUsdcvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolUsdcvDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolUsdcvDebtNewImplementationEvent
}

export function createaPolUSDCVDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolUSDCVDebtNewMarketInterestRateModel {
  let aPolUsdcvDebtNewMarketInterestRateModelEvent = changetype<
    aPolUSDCVDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolUsdcvDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolUsdcvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolUsdcvDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolUsdcvDebtNewMarketInterestRateModelEvent
}

export function createaPolUSDCVDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolUSDCVDebtNewPendingAdmin {
  let aPolUsdcvDebtNewPendingAdminEvent = changetype<
    aPolUSDCVDebtNewPendingAdmin
  >(newMockEvent())

  aPolUsdcvDebtNewPendingAdminEvent.parameters = new Array()

  aPolUsdcvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolUsdcvDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolUsdcvDebtNewPendingAdminEvent
}

export function createaPolUSDCVDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolUSDCVDebtNewReserveFactor {
  let aPolUsdcvDebtNewReserveFactorEvent = changetype<
    aPolUSDCVDebtNewReserveFactor
  >(newMockEvent())

  aPolUsdcvDebtNewReserveFactorEvent.parameters = new Array()

  aPolUsdcvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolUsdcvDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolUsdcvDebtNewReserveFactorEvent
}

export function createaPolUSDCVDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolUSDCVDebtRedeem {
  let aPolUsdcvDebtRedeemEvent = changetype<aPolUSDCVDebtRedeem>(newMockEvent())

  aPolUsdcvDebtRedeemEvent.parameters = new Array()

  aPolUsdcvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolUsdcvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolUsdcvDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolUsdcvDebtRedeemEvent
}

export function createaPolUSDCVDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDCVDebtRepayBorrow {
  let aPolUsdcvDebtRepayBorrowEvent = changetype<aPolUSDCVDebtRepayBorrow>(
    newMockEvent()
  )

  aPolUsdcvDebtRepayBorrowEvent.parameters = new Array()

  aPolUsdcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolUsdcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdcvDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcvDebtRepayBorrowEvent
}

export function createaPolUSDCVDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDCVDebtReservesAdded {
  let aPolUsdcvDebtReservesAddedEvent = changetype<aPolUSDCVDebtReservesAdded>(
    newMockEvent()
  )

  aPolUsdcvDebtReservesAddedEvent.parameters = new Array()

  aPolUsdcvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolUsdcvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolUsdcvDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdcvDebtReservesAddedEvent
}

export function createaPolUSDCVDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDCVDebtReservesReduced {
  let aPolUsdcvDebtReservesReducedEvent = changetype<
    aPolUSDCVDebtReservesReduced
  >(newMockEvent())

  aPolUsdcvDebtReservesReducedEvent.parameters = new Array()

  aPolUsdcvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolUsdcvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolUsdcvDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdcvDebtReservesReducedEvent
}

export function createaPolUSDCVDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolUSDCVDebtTransfer {
  let aPolUsdcvDebtTransferEvent = changetype<aPolUSDCVDebtTransfer>(
    newMockEvent()
  )

  aPolUsdcvDebtTransferEvent.parameters = new Array()

  aPolUsdcvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolUsdcvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolUsdcvDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdcvDebtTransferEvent
}
