import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolUSDTDebtAccrueInterest,
  aPolUSDTDebtApproval,
  aPolUSDTDebtBorrow,
  aPolUSDTDebtFailure,
  aPolUSDTDebtLiquidateBorrow,
  aPolUSDTDebtMint,
  aPolUSDTDebtNewAdmin,
  aPolUSDTDebtNewComptroller,
  aPolUSDTDebtNewImplementation,
  aPolUSDTDebtNewMarketInterestRateModel,
  aPolUSDTDebtNewPendingAdmin,
  aPolUSDTDebtNewReserveFactor,
  aPolUSDTDebtRedeem,
  aPolUSDTDebtRepayBorrow,
  aPolUSDTDebtReservesAdded,
  aPolUSDTDebtReservesReduced,
  aPolUSDTDebtTransfer
} from "../generated/aPolUSDTDebt/aPolUSDTDebt"

export function createaPolUSDTDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolUSDTDebtAccrueInterest {
  let aPolUsdtDebtAccrueInterestEvent = changetype<aPolUSDTDebtAccrueInterest>(
    newMockEvent()
  )

  aPolUsdtDebtAccrueInterestEvent.parameters = new Array()

  aPolUsdtDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolUsdtDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolUsdtDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolUsdtDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtDebtAccrueInterestEvent
}

export function createaPolUSDTDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolUSDTDebtApproval {
  let aPolUsdtDebtApprovalEvent = changetype<aPolUSDTDebtApproval>(
    newMockEvent()
  )

  aPolUsdtDebtApprovalEvent.parameters = new Array()

  aPolUsdtDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolUsdtDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolUsdtDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdtDebtApprovalEvent
}

export function createaPolUSDTDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDTDebtBorrow {
  let aPolUsdtDebtBorrowEvent = changetype<aPolUSDTDebtBorrow>(newMockEvent())

  aPolUsdtDebtBorrowEvent.parameters = new Array()

  aPolUsdtDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolUsdtDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdtDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtDebtBorrowEvent
}

export function createaPolUSDTDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolUSDTDebtFailure {
  let aPolUsdtDebtFailureEvent = changetype<aPolUSDTDebtFailure>(newMockEvent())

  aPolUsdtDebtFailureEvent.parameters = new Array()

  aPolUsdtDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolUsdtDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolUsdtDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolUsdtDebtFailureEvent
}

export function createaPolUSDTDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolUSDTDebtLiquidateBorrow {
  let aPolUsdtDebtLiquidateBorrowEvent = changetype<
    aPolUSDTDebtLiquidateBorrow
  >(newMockEvent())

  aPolUsdtDebtLiquidateBorrowEvent.parameters = new Array()

  aPolUsdtDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolUsdtDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdtDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolUsdtDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolUsdtDebtLiquidateBorrowEvent
}

export function createaPolUSDTDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolUSDTDebtMint {
  let aPolUsdtDebtMintEvent = changetype<aPolUSDTDebtMint>(newMockEvent())

  aPolUsdtDebtMintEvent.parameters = new Array()

  aPolUsdtDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolUsdtDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolUsdtDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolUsdtDebtMintEvent
}

export function createaPolUSDTDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolUSDTDebtNewAdmin {
  let aPolUsdtDebtNewAdminEvent = changetype<aPolUSDTDebtNewAdmin>(
    newMockEvent()
  )

  aPolUsdtDebtNewAdminEvent.parameters = new Array()

  aPolUsdtDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolUsdtDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolUsdtDebtNewAdminEvent
}

export function createaPolUSDTDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolUSDTDebtNewComptroller {
  let aPolUsdtDebtNewComptrollerEvent = changetype<aPolUSDTDebtNewComptroller>(
    newMockEvent()
  )

  aPolUsdtDebtNewComptrollerEvent.parameters = new Array()

  aPolUsdtDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolUsdtDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolUsdtDebtNewComptrollerEvent
}

export function createaPolUSDTDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolUSDTDebtNewImplementation {
  let aPolUsdtDebtNewImplementationEvent = changetype<
    aPolUSDTDebtNewImplementation
  >(newMockEvent())

  aPolUsdtDebtNewImplementationEvent.parameters = new Array()

  aPolUsdtDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolUsdtDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolUsdtDebtNewImplementationEvent
}

export function createaPolUSDTDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolUSDTDebtNewMarketInterestRateModel {
  let aPolUsdtDebtNewMarketInterestRateModelEvent = changetype<
    aPolUSDTDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolUsdtDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolUsdtDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolUsdtDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolUsdtDebtNewMarketInterestRateModelEvent
}

export function createaPolUSDTDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolUSDTDebtNewPendingAdmin {
  let aPolUsdtDebtNewPendingAdminEvent = changetype<
    aPolUSDTDebtNewPendingAdmin
  >(newMockEvent())

  aPolUsdtDebtNewPendingAdminEvent.parameters = new Array()

  aPolUsdtDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolUsdtDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolUsdtDebtNewPendingAdminEvent
}

export function createaPolUSDTDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolUSDTDebtNewReserveFactor {
  let aPolUsdtDebtNewReserveFactorEvent = changetype<
    aPolUSDTDebtNewReserveFactor
  >(newMockEvent())

  aPolUsdtDebtNewReserveFactorEvent.parameters = new Array()

  aPolUsdtDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolUsdtDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolUsdtDebtNewReserveFactorEvent
}

export function createaPolUSDTDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolUSDTDebtRedeem {
  let aPolUsdtDebtRedeemEvent = changetype<aPolUSDTDebtRedeem>(newMockEvent())

  aPolUsdtDebtRedeemEvent.parameters = new Array()

  aPolUsdtDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolUsdtDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolUsdtDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolUsdtDebtRedeemEvent
}

export function createaPolUSDTDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDTDebtRepayBorrow {
  let aPolUsdtDebtRepayBorrowEvent = changetype<aPolUSDTDebtRepayBorrow>(
    newMockEvent()
  )

  aPolUsdtDebtRepayBorrowEvent.parameters = new Array()

  aPolUsdtDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolUsdtDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdtDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdtDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtDebtRepayBorrowEvent
}

export function createaPolUSDTDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDTDebtReservesAdded {
  let aPolUsdtDebtReservesAddedEvent = changetype<aPolUSDTDebtReservesAdded>(
    newMockEvent()
  )

  aPolUsdtDebtReservesAddedEvent.parameters = new Array()

  aPolUsdtDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolUsdtDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolUsdtDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdtDebtReservesAddedEvent
}

export function createaPolUSDTDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDTDebtReservesReduced {
  let aPolUsdtDebtReservesReducedEvent = changetype<
    aPolUSDTDebtReservesReduced
  >(newMockEvent())

  aPolUsdtDebtReservesReducedEvent.parameters = new Array()

  aPolUsdtDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolUsdtDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolUsdtDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdtDebtReservesReducedEvent
}

export function createaPolUSDTDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolUSDTDebtTransfer {
  let aPolUsdtDebtTransferEvent = changetype<aPolUSDTDebtTransfer>(
    newMockEvent()
  )

  aPolUsdtDebtTransferEvent.parameters = new Array()

  aPolUsdtDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolUsdtDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolUsdtDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdtDebtTransferEvent
}
