import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolLINKSDebtAccrueInterest,
  aPolLINKSDebtApproval,
  aPolLINKSDebtBorrow,
  aPolLINKSDebtFailure,
  aPolLINKSDebtLiquidateBorrow,
  aPolLINKSDebtMint,
  aPolLINKSDebtNewAdmin,
  aPolLINKSDebtNewComptroller,
  aPolLINKSDebtNewImplementation,
  aPolLINKSDebtNewMarketInterestRateModel,
  aPolLINKSDebtNewPendingAdmin,
  aPolLINKSDebtNewReserveFactor,
  aPolLINKSDebtRedeem,
  aPolLINKSDebtRepayBorrow,
  aPolLINKSDebtReservesAdded,
  aPolLINKSDebtReservesReduced,
  aPolLINKSDebtTransfer
} from "../generated/aPolLINKSDebt/aPolLINKSDebt"

export function createaPolLINKSDebtAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolLINKSDebtAccrueInterest {
  let aPolLinksDebtAccrueInterestEvent = changetype<
    aPolLINKSDebtAccrueInterest
  >(newMockEvent())

  aPolLinksDebtAccrueInterestEvent.parameters = new Array()

  aPolLinksDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolLinksDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolLinksDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolLinksDebtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinksDebtAccrueInterestEvent
}

export function createaPolLINKSDebtApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolLINKSDebtApproval {
  let aPolLinksDebtApprovalEvent = changetype<aPolLINKSDebtApproval>(
    newMockEvent()
  )

  aPolLinksDebtApprovalEvent.parameters = new Array()

  aPolLinksDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolLinksDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolLinksDebtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolLinksDebtApprovalEvent
}

export function createaPolLINKSDebtBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolLINKSDebtBorrow {
  let aPolLinksDebtBorrowEvent = changetype<aPolLINKSDebtBorrow>(newMockEvent())

  aPolLinksDebtBorrowEvent.parameters = new Array()

  aPolLinksDebtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinksDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolLinksDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolLinksDebtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinksDebtBorrowEvent
}

export function createaPolLINKSDebtFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolLINKSDebtFailure {
  let aPolLinksDebtFailureEvent = changetype<aPolLINKSDebtFailure>(
    newMockEvent()
  )

  aPolLinksDebtFailureEvent.parameters = new Array()

  aPolLinksDebtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolLinksDebtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolLinksDebtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolLinksDebtFailureEvent
}

export function createaPolLINKSDebtLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolLINKSDebtLiquidateBorrow {
  let aPolLinksDebtLiquidateBorrowEvent = changetype<
    aPolLINKSDebtLiquidateBorrow
  >(newMockEvent())

  aPolLinksDebtLiquidateBorrowEvent.parameters = new Array()

  aPolLinksDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolLinksDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinksDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolLinksDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolLinksDebtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolLinksDebtLiquidateBorrowEvent
}

export function createaPolLINKSDebtMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolLINKSDebtMint {
  let aPolLinksDebtMintEvent = changetype<aPolLINKSDebtMint>(newMockEvent())

  aPolLinksDebtMintEvent.parameters = new Array()

  aPolLinksDebtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolLinksDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolLinksDebtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolLinksDebtMintEvent
}

export function createaPolLINKSDebtNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolLINKSDebtNewAdmin {
  let aPolLinksDebtNewAdminEvent = changetype<aPolLINKSDebtNewAdmin>(
    newMockEvent()
  )

  aPolLinksDebtNewAdminEvent.parameters = new Array()

  aPolLinksDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolLinksDebtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolLinksDebtNewAdminEvent
}

export function createaPolLINKSDebtNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolLINKSDebtNewComptroller {
  let aPolLinksDebtNewComptrollerEvent = changetype<
    aPolLINKSDebtNewComptroller
  >(newMockEvent())

  aPolLinksDebtNewComptrollerEvent.parameters = new Array()

  aPolLinksDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolLinksDebtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolLinksDebtNewComptrollerEvent
}

export function createaPolLINKSDebtNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolLINKSDebtNewImplementation {
  let aPolLinksDebtNewImplementationEvent = changetype<
    aPolLINKSDebtNewImplementation
  >(newMockEvent())

  aPolLinksDebtNewImplementationEvent.parameters = new Array()

  aPolLinksDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolLinksDebtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolLinksDebtNewImplementationEvent
}

export function createaPolLINKSDebtNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolLINKSDebtNewMarketInterestRateModel {
  let aPolLinksDebtNewMarketInterestRateModelEvent = changetype<
    aPolLINKSDebtNewMarketInterestRateModel
  >(newMockEvent())

  aPolLinksDebtNewMarketInterestRateModelEvent.parameters = new Array()

  aPolLinksDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolLinksDebtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolLinksDebtNewMarketInterestRateModelEvent
}

export function createaPolLINKSDebtNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolLINKSDebtNewPendingAdmin {
  let aPolLinksDebtNewPendingAdminEvent = changetype<
    aPolLINKSDebtNewPendingAdmin
  >(newMockEvent())

  aPolLinksDebtNewPendingAdminEvent.parameters = new Array()

  aPolLinksDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolLinksDebtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolLinksDebtNewPendingAdminEvent
}

export function createaPolLINKSDebtNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolLINKSDebtNewReserveFactor {
  let aPolLinksDebtNewReserveFactorEvent = changetype<
    aPolLINKSDebtNewReserveFactor
  >(newMockEvent())

  aPolLinksDebtNewReserveFactorEvent.parameters = new Array()

  aPolLinksDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolLinksDebtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolLinksDebtNewReserveFactorEvent
}

export function createaPolLINKSDebtRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolLINKSDebtRedeem {
  let aPolLinksDebtRedeemEvent = changetype<aPolLINKSDebtRedeem>(newMockEvent())

  aPolLinksDebtRedeemEvent.parameters = new Array()

  aPolLinksDebtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolLinksDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolLinksDebtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolLinksDebtRedeemEvent
}

export function createaPolLINKSDebtRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolLINKSDebtRepayBorrow {
  let aPolLinksDebtRepayBorrowEvent = changetype<aPolLINKSDebtRepayBorrow>(
    newMockEvent()
  )

  aPolLinksDebtRepayBorrowEvent.parameters = new Array()

  aPolLinksDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolLinksDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinksDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolLinksDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolLinksDebtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinksDebtRepayBorrowEvent
}

export function createaPolLINKSDebtReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolLINKSDebtReservesAdded {
  let aPolLinksDebtReservesAddedEvent = changetype<aPolLINKSDebtReservesAdded>(
    newMockEvent()
  )

  aPolLinksDebtReservesAddedEvent.parameters = new Array()

  aPolLinksDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolLinksDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolLinksDebtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolLinksDebtReservesAddedEvent
}

export function createaPolLINKSDebtReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolLINKSDebtReservesReduced {
  let aPolLinksDebtReservesReducedEvent = changetype<
    aPolLINKSDebtReservesReduced
  >(newMockEvent())

  aPolLinksDebtReservesReducedEvent.parameters = new Array()

  aPolLinksDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolLinksDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolLinksDebtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolLinksDebtReservesReducedEvent
}

export function createaPolLINKSDebtTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolLINKSDebtTransfer {
  let aPolLinksDebtTransferEvent = changetype<aPolLINKSDebtTransfer>(
    newMockEvent()
  )

  aPolLinksDebtTransferEvent.parameters = new Array()

  aPolLinksDebtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolLinksDebtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolLinksDebtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolLinksDebtTransferEvent
}
