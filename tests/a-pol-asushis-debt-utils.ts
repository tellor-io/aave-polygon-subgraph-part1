import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolASUSHISDebtAccrueInterest,
  aPolASUSHISDebtApproval,
  aPolASUSHISDebtBorrow,
  aPolASUSHISDebtFailure,
  aPolASUSHISDebtLiquidateBorrow,
  aPolASUSHISDebtMint,
  aPolASUSHISDebtNewAdmin,
  aPolASUSHISDebtNewComptroller,
  aPolASUSHISDebtNewImplementation,
  aPolASUSHISDebtNewMarketInterestRateModel,
  aPolASUSHISDebtNewPendingAdmin,
  aPolASUSHISDebtNewReserveFactor,
  aPolASUSHISDebtRedeem,
  aPolASUSHISDebtRepayBorrow,
  aPolASUSHISDebtReservesAdded,
  aPolASUSHISDebtReservesReduced,
  aPolASUSHISDebtTransfer
} from "../generated/aPolASUSHISDebt/aPolASUSHISDebt"

export function createaPolASUSHISDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolASUSHISDebtAccrueInterest {
  let aPolAsushisDebtAccrueInterestEvent = changetype<
    aPolASUSHISDebtAccrueInterest
  >(newMockEvent())

  aPolAsushisDebtAccrueInterestEvent.parameters = new Array()

  aPolAsushisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolAsushisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolAsushisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolAsushisDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAsushisDebtAccrueInterestEvent
}

export function createaPolASUSHISDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolASUSHISDebtApproval {
  let aPolAsushisDebtApprovalEvent = changetype<aPolASUSHISDebtApproval>(
    newMockEvent()
  )

  aPolAsushisDebtApprovalEvent.parameters = new Array()

  aPolAsushisDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolAsushisDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolAsushisDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAsushisDebtApprovalEvent
}

export function createaPolASUSHISDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolASUSHISDebtBorrow {
  let aPolAsushisDebtBorrowEvent = changetype<aPolASUSHISDebtBorrow>(
    newMockEvent()
  )

  aPolAsushisDebtBorrowEvent.parameters = new Array()

  aPolAsushisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAsushisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolAsushisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAsushisDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAsushisDebtBorrowEvent
}

export function createaPolASUSHISDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolASUSHISDebtFailure {
  let aPolAsushisDebtFailureEvent = changetype<aPolASUSHISDebtFailure>(
    newMockEvent()
  )

  aPolAsushisDebtFailureEvent.parameters = new Array()

  aPolAsushisDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolAsushisDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolAsushisDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolAsushisDebtFailureEvent
}

export function createaPolASUSHISDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolASUSHISDebtLiquidateBorrow {
  let aPolAsushisDebtLiquidateBorrowEvent = changetype<
    aPolASUSHISDebtLiquidateBorrow
  >(newMockEvent())

  aPolAsushisDebtLiquidateBorrowEvent.parameters = new Array()

  aPolAsushisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolAsushisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAsushisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAsushisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolAsushisDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolAsushisDebtLiquidateBorrowEvent
}

export function createaPolASUSHISDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolASUSHISDebtMint {
  let aPolAsushisDebtMintEvent = changetype<aPolASUSHISDebtMint>(newMockEvent())

  aPolAsushisDebtMintEvent.parameters = new Array()

  aPolAsushisDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolAsushisDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolAsushisDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolAsushisDebtMintEvent
}

export function createaPolASUSHISDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolASUSHISDebtNewAdmin {
  let aPolAsushisDebtNewAdminEvent = changetype<aPolASUSHISDebtNewAdmin>(
    newMockEvent()
  )

  aPolAsushisDebtNewAdminEvent.parameters = new Array()

  aPolAsushisDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolAsushisDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolAsushisDebtNewAdminEvent
}

export function createaPolASUSHISDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolASUSHISDebtNewComptroller {
  let aPolAsushisDebtNewComptrollerEvent = changetype<
    aPolASUSHISDebtNewComptroller
  >(newMockEvent())

  aPolAsushisDebtNewComptrollerEvent.parameters = new Array()

  aPolAsushisDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolAsushisDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolAsushisDebtNewComptrollerEvent
}

export function createaPolASUSHISDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolASUSHISDebtNewImplementation {
  let aPolAsushisDebtNewImplementationEvent = changetype<
    aPolASUSHISDebtNewImplementation
  >(newMockEvent())

  aPolAsushisDebtNewImplementationEvent.parameters = new Array()

  aPolAsushisDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolAsushisDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolAsushisDebtNewImplementationEvent
}

export function createaPolASUSHISDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolASUSHISDebtNewMarketInterestRateModel {
  let aPolAsushisDebtNewMarketInterestRateModelEvent = changetype<
    aPolASUSHISDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolAsushisDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolAsushisDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolAsushisDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolAsushisDebtNewMarketInterestRateModelEvent
}

export function createaPolASUSHISDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolASUSHISDebtNewPendingAdmin {
  let aPolAsushisDebtNewPendingAdminEvent = changetype<
    aPolASUSHISDebtNewPendingAdmin
  >(newMockEvent())

  aPolAsushisDebtNewPendingAdminEvent.parameters = new Array()

  aPolAsushisDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolAsushisDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolAsushisDebtNewPendingAdminEvent
}

export function createaPolASUSHISDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolASUSHISDebtNewReserveFactor {
  let aPolAsushisDebtNewReserveFactorEvent = changetype<
    aPolASUSHISDebtNewReserveFactor
  >(newMockEvent())

  aPolAsushisDebtNewReserveFactorEvent.parameters = new Array()

  aPolAsushisDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolAsushisDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolAsushisDebtNewReserveFactorEvent
}

export function createaPolASUSHISDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolASUSHISDebtRedeem {
  let aPolAsushisDebtRedeemEvent = changetype<aPolASUSHISDebtRedeem>(
    newMockEvent()
  )

  aPolAsushisDebtRedeemEvent.parameters = new Array()

  aPolAsushisDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolAsushisDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolAsushisDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolAsushisDebtRedeemEvent
}

export function createaPolASUSHISDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolASUSHISDebtRepayBorrow {
  let aPolAsushisDebtRepayBorrowEvent = changetype<aPolASUSHISDebtRepayBorrow>(
    newMockEvent()
  )

  aPolAsushisDebtRepayBorrowEvent.parameters = new Array()

  aPolAsushisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolAsushisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAsushisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAsushisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAsushisDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAsushisDebtRepayBorrowEvent
}

export function createaPolASUSHISDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolASUSHISDebtReservesAdded {
  let aPolAsushisDebtReservesAddedEvent = changetype<
    aPolASUSHISDebtReservesAdded
  >(newMockEvent())

  aPolAsushisDebtReservesAddedEvent.parameters = new Array()

  aPolAsushisDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolAsushisDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolAsushisDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAsushisDebtReservesAddedEvent
}

export function createaPolASUSHISDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolASUSHISDebtReservesReduced {
  let aPolAsushisDebtReservesReducedEvent = changetype<
    aPolASUSHISDebtReservesReduced
  >(newMockEvent())

  aPolAsushisDebtReservesReducedEvent.parameters = new Array()

  aPolAsushisDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolAsushisDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolAsushisDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAsushisDebtReservesReducedEvent
}

export function createaPolASUSHISDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolASUSHISDebtTransfer {
  let aPolAsushisDebtTransferEvent = changetype<aPolASUSHISDebtTransfer>(
    newMockEvent()
  )

  aPolAsushisDebtTransferEvent.parameters = new Array()

  aPolAsushisDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolAsushisDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolAsushisDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAsushisDebtTransferEvent
}
