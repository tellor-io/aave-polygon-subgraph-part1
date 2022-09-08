import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolLINKAccrueInterest,
  aPolLINKApproval,
  aPolLINKBorrow,
  aPolLINKFailure,
  aPolLINKLiquidateBorrow,
  aPolLINKMint,
  aPolLINKNewAdmin,
  aPolLINKNewComptroller,
  aPolLINKNewImplementation,
  aPolLINKNewMarketInterestRateModel,
  aPolLINKNewPendingAdmin,
  aPolLINKNewReserveFactor,
  aPolLINKRedeem,
  aPolLINKRepayBorrow,
  aPolLINKReservesAdded,
  aPolLINKReservesReduced,
  aPolLINKTransfer
} from "../generated/aPolLINK/aPolLINK"

export function createaPolLINKAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolLINKAccrueInterest {
  let aPolLinkAccrueInterestEvent = changetype<aPolLINKAccrueInterest>(
    newMockEvent()
  )

  aPolLinkAccrueInterestEvent.parameters = new Array()

  aPolLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinkAccrueInterestEvent
}

export function createaPolLINKApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolLINKApproval {
  let aPolLinkApprovalEvent = changetype<aPolLINKApproval>(newMockEvent())

  aPolLinkApprovalEvent.parameters = new Array()

  aPolLinkApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolLinkApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolLinkApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolLinkApprovalEvent
}

export function createaPolLINKBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolLINKBorrow {
  let aPolLinkBorrowEvent = changetype<aPolLINKBorrow>(newMockEvent())

  aPolLinkBorrowEvent.parameters = new Array()

  aPolLinkBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinkBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolLinkBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolLinkBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinkBorrowEvent
}

export function createaPolLINKFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolLINKFailure {
  let aPolLinkFailureEvent = changetype<aPolLINKFailure>(newMockEvent())

  aPolLinkFailureEvent.parameters = new Array()

  aPolLinkFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolLinkFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolLinkFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolLinkFailureEvent
}

export function createaPolLINKLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolLINKLiquidateBorrow {
  let aPolLinkLiquidateBorrowEvent = changetype<aPolLINKLiquidateBorrow>(
    newMockEvent()
  )

  aPolLinkLiquidateBorrowEvent.parameters = new Array()

  aPolLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolLinkLiquidateBorrowEvent
}

export function createaPolLINKMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolLINKMint {
  let aPolLinkMintEvent = changetype<aPolLINKMint>(newMockEvent())

  aPolLinkMintEvent.parameters = new Array()

  aPolLinkMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolLinkMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolLinkMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolLinkMintEvent
}

export function createaPolLINKNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolLINKNewAdmin {
  let aPolLinkNewAdminEvent = changetype<aPolLINKNewAdmin>(newMockEvent())

  aPolLinkNewAdminEvent.parameters = new Array()

  aPolLinkNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolLinkNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolLinkNewAdminEvent
}

export function createaPolLINKNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolLINKNewComptroller {
  let aPolLinkNewComptrollerEvent = changetype<aPolLINKNewComptroller>(
    newMockEvent()
  )

  aPolLinkNewComptrollerEvent.parameters = new Array()

  aPolLinkNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolLinkNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolLinkNewComptrollerEvent
}

export function createaPolLINKNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolLINKNewImplementation {
  let aPolLinkNewImplementationEvent = changetype<aPolLINKNewImplementation>(
    newMockEvent()
  )

  aPolLinkNewImplementationEvent.parameters = new Array()

  aPolLinkNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolLinkNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolLinkNewImplementationEvent
}

export function createaPolLINKNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolLINKNewMarketInterestRateModel {
  let aPolLinkNewMarketInterestRateModelEvent = changetype<
    aPolLINKNewMarketInterestRateModel
  >(newMockEvent())

  aPolLinkNewMarketInterestRateModelEvent.parameters = new Array()

  aPolLinkNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolLinkNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolLinkNewMarketInterestRateModelEvent
}

export function createaPolLINKNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolLINKNewPendingAdmin {
  let aPolLinkNewPendingAdminEvent = changetype<aPolLINKNewPendingAdmin>(
    newMockEvent()
  )

  aPolLinkNewPendingAdminEvent.parameters = new Array()

  aPolLinkNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolLinkNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolLinkNewPendingAdminEvent
}

export function createaPolLINKNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolLINKNewReserveFactor {
  let aPolLinkNewReserveFactorEvent = changetype<aPolLINKNewReserveFactor>(
    newMockEvent()
  )

  aPolLinkNewReserveFactorEvent.parameters = new Array()

  aPolLinkNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolLinkNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolLinkNewReserveFactorEvent
}

export function createaPolLINKRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolLINKRedeem {
  let aPolLinkRedeemEvent = changetype<aPolLINKRedeem>(newMockEvent())

  aPolLinkRedeemEvent.parameters = new Array()

  aPolLinkRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolLinkRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolLinkRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolLinkRedeemEvent
}

export function createaPolLINKRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolLINKRepayBorrow {
  let aPolLinkRepayBorrowEvent = changetype<aPolLINKRepayBorrow>(newMockEvent())

  aPolLinkRepayBorrowEvent.parameters = new Array()

  aPolLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolLinkRepayBorrowEvent
}

export function createaPolLINKReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolLINKReservesAdded {
  let aPolLinkReservesAddedEvent = changetype<aPolLINKReservesAdded>(
    newMockEvent()
  )

  aPolLinkReservesAddedEvent.parameters = new Array()

  aPolLinkReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolLinkReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolLinkReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolLinkReservesAddedEvent
}

export function createaPolLINKReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolLINKReservesReduced {
  let aPolLinkReservesReducedEvent = changetype<aPolLINKReservesReduced>(
    newMockEvent()
  )

  aPolLinkReservesReducedEvent.parameters = new Array()

  aPolLinkReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolLinkReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolLinkReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolLinkReservesReducedEvent
}

export function createaPolLINKTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolLINKTransfer {
  let aPolLinkTransferEvent = changetype<aPolLINKTransfer>(newMockEvent())

  aPolLinkTransferEvent.parameters = new Array()

  aPolLinkTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolLinkTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolLinkTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolLinkTransferEvent
}
