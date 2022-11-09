import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWETHDebtAccrueInterest,
  aPolWETHDebtApproval,
  aPolWETHDebtBorrow,
  aPolWETHDebtFailure,
  aPolWETHDebtLiquidateBorrow,
  aPolWETHDebtMint,
  aPolWETHDebtNewAdmin,
  aPolWETHDebtNewComptroller,
  aPolWETHDebtNewImplementation,
  aPolWETHDebtNewMarketInterestRateModel,
  aPolWETHDebtNewPendingAdmin,
  aPolWETHDebtNewReserveFactor,
  aPolWETHDebtRedeem,
  aPolWETHDebtRepayBorrow,
  aPolWETHDebtReservesAdded,
  aPolWETHDebtReservesReduced,
  aPolWETHDebtTransfer
} from "../generated/aPolWETHDebt/aPolWETHDebt"

export function createaPolWETHDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWETHDebtAccrueInterest {
  let aPolWethDebtAccrueInterestEvent = changetype<aPolWETHDebtAccrueInterest>(
    newMockEvent()
  )

  aPolWethDebtAccrueInterestEvent.parameters = new Array()

  aPolWethDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWethDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWethDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWethDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethDebtAccrueInterestEvent
}

export function createaPolWETHDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWETHDebtApproval {
  let aPolWethDebtApprovalEvent = changetype<aPolWETHDebtApproval>(
    newMockEvent()
  )

  aPolWethDebtApprovalEvent.parameters = new Array()

  aPolWethDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWethDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWethDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWethDebtApprovalEvent
}

export function createaPolWETHDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWETHDebtBorrow {
  let aPolWethDebtBorrowEvent = changetype<aPolWETHDebtBorrow>(newMockEvent())

  aPolWethDebtBorrowEvent.parameters = new Array()

  aPolWethDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWethDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWethDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethDebtBorrowEvent
}

export function createaPolWETHDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWETHDebtFailure {
  let aPolWethDebtFailureEvent = changetype<aPolWETHDebtFailure>(newMockEvent())

  aPolWethDebtFailureEvent.parameters = new Array()

  aPolWethDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWethDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWethDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWethDebtFailureEvent
}

export function createaPolWETHDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWETHDebtLiquidateBorrow {
  let aPolWethDebtLiquidateBorrowEvent = changetype<
    aPolWETHDebtLiquidateBorrow
  >(newMockEvent())

  aPolWethDebtLiquidateBorrowEvent.parameters = new Array()

  aPolWethDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWethDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWethDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWethDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWethDebtLiquidateBorrowEvent
}

export function createaPolWETHDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWETHDebtMint {
  let aPolWethDebtMintEvent = changetype<aPolWETHDebtMint>(newMockEvent())

  aPolWethDebtMintEvent.parameters = new Array()

  aPolWethDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWethDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWethDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWethDebtMintEvent
}

export function createaPolWETHDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWETHDebtNewAdmin {
  let aPolWethDebtNewAdminEvent = changetype<aPolWETHDebtNewAdmin>(
    newMockEvent()
  )

  aPolWethDebtNewAdminEvent.parameters = new Array()

  aPolWethDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWethDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWethDebtNewAdminEvent
}

export function createaPolWETHDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWETHDebtNewComptroller {
  let aPolWethDebtNewComptrollerEvent = changetype<aPolWETHDebtNewComptroller>(
    newMockEvent()
  )

  aPolWethDebtNewComptrollerEvent.parameters = new Array()

  aPolWethDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWethDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWethDebtNewComptrollerEvent
}

export function createaPolWETHDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWETHDebtNewImplementation {
  let aPolWethDebtNewImplementationEvent = changetype<
    aPolWETHDebtNewImplementation
  >(newMockEvent())

  aPolWethDebtNewImplementationEvent.parameters = new Array()

  aPolWethDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWethDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWethDebtNewImplementationEvent
}

export function createaPolWETHDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWETHDebtNewMarketInterestRateModel {
  let aPolWethDebtNewMarketInterestRateModelEvent = changetype<
    aPolWETHDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolWethDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWethDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWethDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWethDebtNewMarketInterestRateModelEvent
}

export function createaPolWETHDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWETHDebtNewPendingAdmin {
  let aPolWethDebtNewPendingAdminEvent = changetype<
    aPolWETHDebtNewPendingAdmin
  >(newMockEvent())

  aPolWethDebtNewPendingAdminEvent.parameters = new Array()

  aPolWethDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWethDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWethDebtNewPendingAdminEvent
}

export function createaPolWETHDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWETHDebtNewReserveFactor {
  let aPolWethDebtNewReserveFactorEvent = changetype<
    aPolWETHDebtNewReserveFactor
  >(newMockEvent())

  aPolWethDebtNewReserveFactorEvent.parameters = new Array()

  aPolWethDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWethDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWethDebtNewReserveFactorEvent
}

export function createaPolWETHDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWETHDebtRedeem {
  let aPolWethDebtRedeemEvent = changetype<aPolWETHDebtRedeem>(newMockEvent())

  aPolWethDebtRedeemEvent.parameters = new Array()

  aPolWethDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWethDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWethDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWethDebtRedeemEvent
}

export function createaPolWETHDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWETHDebtRepayBorrow {
  let aPolWethDebtRepayBorrowEvent = changetype<aPolWETHDebtRepayBorrow>(
    newMockEvent()
  )

  aPolWethDebtRepayBorrowEvent.parameters = new Array()

  aPolWethDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWethDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWethDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWethDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethDebtRepayBorrowEvent
}

export function createaPolWETHDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWETHDebtReservesAdded {
  let aPolWethDebtReservesAddedEvent = changetype<aPolWETHDebtReservesAdded>(
    newMockEvent()
  )

  aPolWethDebtReservesAddedEvent.parameters = new Array()

  aPolWethDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWethDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWethDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWethDebtReservesAddedEvent
}

export function createaPolWETHDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWETHDebtReservesReduced {
  let aPolWethDebtReservesReducedEvent = changetype<
    aPolWETHDebtReservesReduced
  >(newMockEvent())

  aPolWethDebtReservesReducedEvent.parameters = new Array()

  aPolWethDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWethDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWethDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWethDebtReservesReducedEvent
}

export function createaPolWETHDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWETHDebtTransfer {
  let aPolWethDebtTransferEvent = changetype<aPolWETHDebtTransfer>(
    newMockEvent()
  )

  aPolWethDebtTransferEvent.parameters = new Array()

  aPolWethDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWethDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWethDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWethDebtTransferEvent
}
