import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolUSDTAccrueInterest,
  aPolUSDTApproval,
  aPolUSDTBorrow,
  aPolUSDTFailure,
  aPolUSDTLiquidateBorrow,
  aPolUSDTMint,
  aPolUSDTNewAdmin,
  aPolUSDTNewComptroller,
  aPolUSDTNewImplementation,
  aPolUSDTNewMarketInterestRateModel,
  aPolUSDTNewPendingAdmin,
  aPolUSDTNewReserveFactor,
  aPolUSDTRedeem,
  aPolUSDTRepayBorrow,
  aPolUSDTReservesAdded,
  aPolUSDTReservesReduced,
  aPolUSDTTransfer
} from "../generated/aPolUSDT/aPolUSDT"

export function createaPolUSDTAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolUSDTAccrueInterest {
  let aPolUsdtAccrueInterestEvent = changetype<aPolUSDTAccrueInterest>(
    newMockEvent()
  )

  aPolUsdtAccrueInterestEvent.parameters = new Array()

  aPolUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtAccrueInterestEvent
}

export function createaPolUSDTApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolUSDTApproval {
  let aPolUsdtApprovalEvent = changetype<aPolUSDTApproval>(newMockEvent())

  aPolUsdtApprovalEvent.parameters = new Array()

  aPolUsdtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolUsdtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolUsdtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdtApprovalEvent
}

export function createaPolUSDTBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDTBorrow {
  let aPolUsdtBorrowEvent = changetype<aPolUSDTBorrow>(newMockEvent())

  aPolUsdtBorrowEvent.parameters = new Array()

  aPolUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtBorrowEvent
}

export function createaPolUSDTFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolUSDTFailure {
  let aPolUsdtFailureEvent = changetype<aPolUSDTFailure>(newMockEvent())

  aPolUsdtFailureEvent.parameters = new Array()

  aPolUsdtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolUsdtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolUsdtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolUsdtFailureEvent
}

export function createaPolUSDTLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolUSDTLiquidateBorrow {
  let aPolUsdtLiquidateBorrowEvent = changetype<aPolUSDTLiquidateBorrow>(
    newMockEvent()
  )

  aPolUsdtLiquidateBorrowEvent.parameters = new Array()

  aPolUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolUsdtLiquidateBorrowEvent
}

export function createaPolUSDTMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolUSDTMint {
  let aPolUsdtMintEvent = changetype<aPolUSDTMint>(newMockEvent())

  aPolUsdtMintEvent.parameters = new Array()

  aPolUsdtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolUsdtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolUsdtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolUsdtMintEvent
}

export function createaPolUSDTNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolUSDTNewAdmin {
  let aPolUsdtNewAdminEvent = changetype<aPolUSDTNewAdmin>(newMockEvent())

  aPolUsdtNewAdminEvent.parameters = new Array()

  aPolUsdtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolUsdtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolUsdtNewAdminEvent
}

export function createaPolUSDTNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolUSDTNewComptroller {
  let aPolUsdtNewComptrollerEvent = changetype<aPolUSDTNewComptroller>(
    newMockEvent()
  )

  aPolUsdtNewComptrollerEvent.parameters = new Array()

  aPolUsdtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolUsdtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolUsdtNewComptrollerEvent
}

export function createaPolUSDTNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolUSDTNewImplementation {
  let aPolUsdtNewImplementationEvent = changetype<aPolUSDTNewImplementation>(
    newMockEvent()
  )

  aPolUsdtNewImplementationEvent.parameters = new Array()

  aPolUsdtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolUsdtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolUsdtNewImplementationEvent
}

export function createaPolUSDTNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolUSDTNewMarketInterestRateModel {
  let aPolUsdtNewMarketInterestRateModelEvent = changetype<
    aPolUSDTNewMarketInterestRateModel
  >(newMockEvent())

  aPolUsdtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolUsdtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolUsdtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolUsdtNewMarketInterestRateModelEvent
}

export function createaPolUSDTNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolUSDTNewPendingAdmin {
  let aPolUsdtNewPendingAdminEvent = changetype<aPolUSDTNewPendingAdmin>(
    newMockEvent()
  )

  aPolUsdtNewPendingAdminEvent.parameters = new Array()

  aPolUsdtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolUsdtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolUsdtNewPendingAdminEvent
}

export function createaPolUSDTNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolUSDTNewReserveFactor {
  let aPolUsdtNewReserveFactorEvent = changetype<aPolUSDTNewReserveFactor>(
    newMockEvent()
  )

  aPolUsdtNewReserveFactorEvent.parameters = new Array()

  aPolUsdtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolUsdtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolUsdtNewReserveFactorEvent
}

export function createaPolUSDTRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolUSDTRedeem {
  let aPolUsdtRedeemEvent = changetype<aPolUSDTRedeem>(newMockEvent())

  aPolUsdtRedeemEvent.parameters = new Array()

  aPolUsdtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolUsdtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolUsdtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolUsdtRedeemEvent
}

export function createaPolUSDTRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDTRepayBorrow {
  let aPolUsdtRepayBorrowEvent = changetype<aPolUSDTRepayBorrow>(newMockEvent())

  aPolUsdtRepayBorrowEvent.parameters = new Array()

  aPolUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdtRepayBorrowEvent
}

export function createaPolUSDTReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDTReservesAdded {
  let aPolUsdtReservesAddedEvent = changetype<aPolUSDTReservesAdded>(
    newMockEvent()
  )

  aPolUsdtReservesAddedEvent.parameters = new Array()

  aPolUsdtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolUsdtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolUsdtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdtReservesAddedEvent
}

export function createaPolUSDTReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDTReservesReduced {
  let aPolUsdtReservesReducedEvent = changetype<aPolUSDTReservesReduced>(
    newMockEvent()
  )

  aPolUsdtReservesReducedEvent.parameters = new Array()

  aPolUsdtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolUsdtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolUsdtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdtReservesReducedEvent
}

export function createaPolUSDTTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolUSDTTransfer {
  let aPolUsdtTransferEvent = changetype<aPolUSDTTransfer>(newMockEvent())

  aPolUsdtTransferEvent.parameters = new Array()

  aPolUsdtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolUsdtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolUsdtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdtTransferEvent
}
