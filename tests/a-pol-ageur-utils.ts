import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolAGEURAccrueInterest,
  aPolAGEURApproval,
  aPolAGEURBorrow,
  aPolAGEURFailure,
  aPolAGEURLiquidateBorrow,
  aPolAGEURMint,
  aPolAGEURNewAdmin,
  aPolAGEURNewComptroller,
  aPolAGEURNewImplementation,
  aPolAGEURNewMarketInterestRateModel,
  aPolAGEURNewPendingAdmin,
  aPolAGEURNewReserveFactor,
  aPolAGEURRedeem,
  aPolAGEURRepayBorrow,
  aPolAGEURReservesAdded,
  aPolAGEURReservesReduced,
  aPolAGEURTransfer
} from "../generated/aPolAGEUR/aPolAGEUR"

export function createaPolAGEURAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolAGEURAccrueInterest {
  let aPolAgeurAccrueInterestEvent = changetype<aPolAGEURAccrueInterest>(
    newMockEvent()
  )

  aPolAgeurAccrueInterestEvent.parameters = new Array()

  aPolAgeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolAgeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolAgeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolAgeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeurAccrueInterestEvent
}

export function createaPolAGEURApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolAGEURApproval {
  let aPolAgeurApprovalEvent = changetype<aPolAGEURApproval>(newMockEvent())

  aPolAgeurApprovalEvent.parameters = new Array()

  aPolAgeurApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolAgeurApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolAgeurApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAgeurApprovalEvent
}

export function createaPolAGEURBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolAGEURBorrow {
  let aPolAgeurBorrowEvent = changetype<aPolAGEURBorrow>(newMockEvent())

  aPolAgeurBorrowEvent.parameters = new Array()

  aPolAgeurBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeurBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolAgeurBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAgeurBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeurBorrowEvent
}

export function createaPolAGEURFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolAGEURFailure {
  let aPolAgeurFailureEvent = changetype<aPolAGEURFailure>(newMockEvent())

  aPolAgeurFailureEvent.parameters = new Array()

  aPolAgeurFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolAgeurFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolAgeurFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolAgeurFailureEvent
}

export function createaPolAGEURLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolAGEURLiquidateBorrow {
  let aPolAgeurLiquidateBorrowEvent = changetype<aPolAGEURLiquidateBorrow>(
    newMockEvent()
  )

  aPolAgeurLiquidateBorrowEvent.parameters = new Array()

  aPolAgeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolAgeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAgeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolAgeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolAgeurLiquidateBorrowEvent
}

export function createaPolAGEURMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolAGEURMint {
  let aPolAgeurMintEvent = changetype<aPolAGEURMint>(newMockEvent())

  aPolAgeurMintEvent.parameters = new Array()

  aPolAgeurMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolAgeurMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolAgeurMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolAgeurMintEvent
}

export function createaPolAGEURNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolAGEURNewAdmin {
  let aPolAgeurNewAdminEvent = changetype<aPolAGEURNewAdmin>(newMockEvent())

  aPolAgeurNewAdminEvent.parameters = new Array()

  aPolAgeurNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolAgeurNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolAgeurNewAdminEvent
}

export function createaPolAGEURNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolAGEURNewComptroller {
  let aPolAgeurNewComptrollerEvent = changetype<aPolAGEURNewComptroller>(
    newMockEvent()
  )

  aPolAgeurNewComptrollerEvent.parameters = new Array()

  aPolAgeurNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolAgeurNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolAgeurNewComptrollerEvent
}

export function createaPolAGEURNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolAGEURNewImplementation {
  let aPolAgeurNewImplementationEvent = changetype<aPolAGEURNewImplementation>(
    newMockEvent()
  )

  aPolAgeurNewImplementationEvent.parameters = new Array()

  aPolAgeurNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolAgeurNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolAgeurNewImplementationEvent
}

export function createaPolAGEURNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolAGEURNewMarketInterestRateModel {
  let aPolAgeurNewMarketInterestRateModelEvent = changetype<
    aPolAGEURNewMarketInterestRateModel
  >(newMockEvent())

  aPolAgeurNewMarketInterestRateModelEvent.parameters = new Array()

  aPolAgeurNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolAgeurNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolAgeurNewMarketInterestRateModelEvent
}

export function createaPolAGEURNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolAGEURNewPendingAdmin {
  let aPolAgeurNewPendingAdminEvent = changetype<aPolAGEURNewPendingAdmin>(
    newMockEvent()
  )

  aPolAgeurNewPendingAdminEvent.parameters = new Array()

  aPolAgeurNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolAgeurNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolAgeurNewPendingAdminEvent
}

export function createaPolAGEURNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolAGEURNewReserveFactor {
  let aPolAgeurNewReserveFactorEvent = changetype<aPolAGEURNewReserveFactor>(
    newMockEvent()
  )

  aPolAgeurNewReserveFactorEvent.parameters = new Array()

  aPolAgeurNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolAgeurNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolAgeurNewReserveFactorEvent
}

export function createaPolAGEURRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolAGEURRedeem {
  let aPolAgeurRedeemEvent = changetype<aPolAGEURRedeem>(newMockEvent())

  aPolAgeurRedeemEvent.parameters = new Array()

  aPolAgeurRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolAgeurRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolAgeurRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolAgeurRedeemEvent
}

export function createaPolAGEURRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolAGEURRepayBorrow {
  let aPolAgeurRepayBorrowEvent = changetype<aPolAGEURRepayBorrow>(
    newMockEvent()
  )

  aPolAgeurRepayBorrowEvent.parameters = new Array()

  aPolAgeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolAgeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolAgeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolAgeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolAgeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolAgeurRepayBorrowEvent
}

export function createaPolAGEURReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolAGEURReservesAdded {
  let aPolAgeurReservesAddedEvent = changetype<aPolAGEURReservesAdded>(
    newMockEvent()
  )

  aPolAgeurReservesAddedEvent.parameters = new Array()

  aPolAgeurReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolAgeurReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolAgeurReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAgeurReservesAddedEvent
}

export function createaPolAGEURReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolAGEURReservesReduced {
  let aPolAgeurReservesReducedEvent = changetype<aPolAGEURReservesReduced>(
    newMockEvent()
  )

  aPolAgeurReservesReducedEvent.parameters = new Array()

  aPolAgeurReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolAgeurReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolAgeurReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolAgeurReservesReducedEvent
}

export function createaPolAGEURTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolAGEURTransfer {
  let aPolAgeurTransferEvent = changetype<aPolAGEURTransfer>(newMockEvent())

  aPolAgeurTransferEvent.parameters = new Array()

  aPolAgeurTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolAgeurTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolAgeurTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolAgeurTransferEvent
}
