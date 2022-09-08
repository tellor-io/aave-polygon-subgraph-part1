import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolJEURAccrueInterest,
  aPolJEURApproval,
  aPolJEURBorrow,
  aPolJEURFailure,
  aPolJEURLiquidateBorrow,
  aPolJEURMint,
  aPolJEURNewAdmin,
  aPolJEURNewComptroller,
  aPolJEURNewImplementation,
  aPolJEURNewMarketInterestRateModel,
  aPolJEURNewPendingAdmin,
  aPolJEURNewReserveFactor,
  aPolJEURRedeem,
  aPolJEURRepayBorrow,
  aPolJEURReservesAdded,
  aPolJEURReservesReduced,
  aPolJEURTransfer
} from "../generated/aPolJEUR/aPolJEUR"

export function createaPolJEURAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolJEURAccrueInterest {
  let aPolJeurAccrueInterestEvent = changetype<aPolJEURAccrueInterest>(
    newMockEvent()
  )

  aPolJeurAccrueInterestEvent.parameters = new Array()

  aPolJeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolJeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolJeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolJeurAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolJeurAccrueInterestEvent
}

export function createaPolJEURApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolJEURApproval {
  let aPolJeurApprovalEvent = changetype<aPolJEURApproval>(newMockEvent())

  aPolJeurApprovalEvent.parameters = new Array()

  aPolJeurApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolJeurApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolJeurApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolJeurApprovalEvent
}

export function createaPolJEURBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolJEURBorrow {
  let aPolJeurBorrowEvent = changetype<aPolJEURBorrow>(newMockEvent())

  aPolJeurBorrowEvent.parameters = new Array()

  aPolJeurBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolJeurBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolJeurBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolJeurBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolJeurBorrowEvent
}

export function createaPolJEURFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolJEURFailure {
  let aPolJeurFailureEvent = changetype<aPolJEURFailure>(newMockEvent())

  aPolJeurFailureEvent.parameters = new Array()

  aPolJeurFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolJeurFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolJeurFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolJeurFailureEvent
}

export function createaPolJEURLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolJEURLiquidateBorrow {
  let aPolJeurLiquidateBorrowEvent = changetype<aPolJEURLiquidateBorrow>(
    newMockEvent()
  )

  aPolJeurLiquidateBorrowEvent.parameters = new Array()

  aPolJeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolJeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolJeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolJeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolJeurLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolJeurLiquidateBorrowEvent
}

export function createaPolJEURMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolJEURMint {
  let aPolJeurMintEvent = changetype<aPolJEURMint>(newMockEvent())

  aPolJeurMintEvent.parameters = new Array()

  aPolJeurMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolJeurMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolJeurMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolJeurMintEvent
}

export function createaPolJEURNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolJEURNewAdmin {
  let aPolJeurNewAdminEvent = changetype<aPolJEURNewAdmin>(newMockEvent())

  aPolJeurNewAdminEvent.parameters = new Array()

  aPolJeurNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolJeurNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolJeurNewAdminEvent
}

export function createaPolJEURNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolJEURNewComptroller {
  let aPolJeurNewComptrollerEvent = changetype<aPolJEURNewComptroller>(
    newMockEvent()
  )

  aPolJeurNewComptrollerEvent.parameters = new Array()

  aPolJeurNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolJeurNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolJeurNewComptrollerEvent
}

export function createaPolJEURNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolJEURNewImplementation {
  let aPolJeurNewImplementationEvent = changetype<aPolJEURNewImplementation>(
    newMockEvent()
  )

  aPolJeurNewImplementationEvent.parameters = new Array()

  aPolJeurNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolJeurNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolJeurNewImplementationEvent
}

export function createaPolJEURNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolJEURNewMarketInterestRateModel {
  let aPolJeurNewMarketInterestRateModelEvent = changetype<
    aPolJEURNewMarketInterestRateModel
  >(newMockEvent())

  aPolJeurNewMarketInterestRateModelEvent.parameters = new Array()

  aPolJeurNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolJeurNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolJeurNewMarketInterestRateModelEvent
}

export function createaPolJEURNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolJEURNewPendingAdmin {
  let aPolJeurNewPendingAdminEvent = changetype<aPolJEURNewPendingAdmin>(
    newMockEvent()
  )

  aPolJeurNewPendingAdminEvent.parameters = new Array()

  aPolJeurNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolJeurNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolJeurNewPendingAdminEvent
}

export function createaPolJEURNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolJEURNewReserveFactor {
  let aPolJeurNewReserveFactorEvent = changetype<aPolJEURNewReserveFactor>(
    newMockEvent()
  )

  aPolJeurNewReserveFactorEvent.parameters = new Array()

  aPolJeurNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolJeurNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolJeurNewReserveFactorEvent
}

export function createaPolJEURRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolJEURRedeem {
  let aPolJeurRedeemEvent = changetype<aPolJEURRedeem>(newMockEvent())

  aPolJeurRedeemEvent.parameters = new Array()

  aPolJeurRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolJeurRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolJeurRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolJeurRedeemEvent
}

export function createaPolJEURRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolJEURRepayBorrow {
  let aPolJeurRepayBorrowEvent = changetype<aPolJEURRepayBorrow>(newMockEvent())

  aPolJeurRepayBorrowEvent.parameters = new Array()

  aPolJeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolJeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolJeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolJeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolJeurRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolJeurRepayBorrowEvent
}

export function createaPolJEURReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolJEURReservesAdded {
  let aPolJeurReservesAddedEvent = changetype<aPolJEURReservesAdded>(
    newMockEvent()
  )

  aPolJeurReservesAddedEvent.parameters = new Array()

  aPolJeurReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolJeurReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolJeurReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolJeurReservesAddedEvent
}

export function createaPolJEURReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolJEURReservesReduced {
  let aPolJeurReservesReducedEvent = changetype<aPolJEURReservesReduced>(
    newMockEvent()
  )

  aPolJeurReservesReducedEvent.parameters = new Array()

  aPolJeurReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolJeurReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolJeurReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolJeurReservesReducedEvent
}

export function createaPolJEURTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolJEURTransfer {
  let aPolJeurTransferEvent = changetype<aPolJEURTransfer>(newMockEvent())

  aPolJeurTransferEvent.parameters = new Array()

  aPolJeurTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolJeurTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolJeurTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolJeurTransferEvent
}
