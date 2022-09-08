import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolEURSAccrueInterest,
  aPolEURSApproval,
  aPolEURSBorrow,
  aPolEURSFailure,
  aPolEURSLiquidateBorrow,
  aPolEURSMint,
  aPolEURSNewAdmin,
  aPolEURSNewComptroller,
  aPolEURSNewImplementation,
  aPolEURSNewMarketInterestRateModel,
  aPolEURSNewPendingAdmin,
  aPolEURSNewReserveFactor,
  aPolEURSRedeem,
  aPolEURSRepayBorrow,
  aPolEURSReservesAdded,
  aPolEURSReservesReduced,
  aPolEURSTransfer
} from "../generated/aPolEURS/aPolEURS"

export function createaPolEURSAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolEURSAccrueInterest {
  let aPolEursAccrueInterestEvent = changetype<aPolEURSAccrueInterest>(
    newMockEvent()
  )

  aPolEursAccrueInterestEvent.parameters = new Array()

  aPolEursAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolEursAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolEursAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolEursAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolEursAccrueInterestEvent
}

export function createaPolEURSApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolEURSApproval {
  let aPolEursApprovalEvent = changetype<aPolEURSApproval>(newMockEvent())

  aPolEursApprovalEvent.parameters = new Array()

  aPolEursApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolEursApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolEursApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolEursApprovalEvent
}

export function createaPolEURSBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolEURSBorrow {
  let aPolEursBorrowEvent = changetype<aPolEURSBorrow>(newMockEvent())

  aPolEursBorrowEvent.parameters = new Array()

  aPolEursBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolEursBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolEursBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolEursBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolEursBorrowEvent
}

export function createaPolEURSFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolEURSFailure {
  let aPolEursFailureEvent = changetype<aPolEURSFailure>(newMockEvent())

  aPolEursFailureEvent.parameters = new Array()

  aPolEursFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolEursFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolEursFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolEursFailureEvent
}

export function createaPolEURSLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolEURSLiquidateBorrow {
  let aPolEursLiquidateBorrowEvent = changetype<aPolEURSLiquidateBorrow>(
    newMockEvent()
  )

  aPolEursLiquidateBorrowEvent.parameters = new Array()

  aPolEursLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolEursLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolEursLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolEursLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolEursLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolEursLiquidateBorrowEvent
}

export function createaPolEURSMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolEURSMint {
  let aPolEursMintEvent = changetype<aPolEURSMint>(newMockEvent())

  aPolEursMintEvent.parameters = new Array()

  aPolEursMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolEursMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolEursMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolEursMintEvent
}

export function createaPolEURSNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolEURSNewAdmin {
  let aPolEursNewAdminEvent = changetype<aPolEURSNewAdmin>(newMockEvent())

  aPolEursNewAdminEvent.parameters = new Array()

  aPolEursNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolEursNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolEursNewAdminEvent
}

export function createaPolEURSNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolEURSNewComptroller {
  let aPolEursNewComptrollerEvent = changetype<aPolEURSNewComptroller>(
    newMockEvent()
  )

  aPolEursNewComptrollerEvent.parameters = new Array()

  aPolEursNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolEursNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolEursNewComptrollerEvent
}

export function createaPolEURSNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolEURSNewImplementation {
  let aPolEursNewImplementationEvent = changetype<aPolEURSNewImplementation>(
    newMockEvent()
  )

  aPolEursNewImplementationEvent.parameters = new Array()

  aPolEursNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolEursNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolEursNewImplementationEvent
}

export function createaPolEURSNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolEURSNewMarketInterestRateModel {
  let aPolEursNewMarketInterestRateModelEvent = changetype<
    aPolEURSNewMarketInterestRateModel
  >(newMockEvent())

  aPolEursNewMarketInterestRateModelEvent.parameters = new Array()

  aPolEursNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolEursNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolEursNewMarketInterestRateModelEvent
}

export function createaPolEURSNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolEURSNewPendingAdmin {
  let aPolEursNewPendingAdminEvent = changetype<aPolEURSNewPendingAdmin>(
    newMockEvent()
  )

  aPolEursNewPendingAdminEvent.parameters = new Array()

  aPolEursNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolEursNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolEursNewPendingAdminEvent
}

export function createaPolEURSNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolEURSNewReserveFactor {
  let aPolEursNewReserveFactorEvent = changetype<aPolEURSNewReserveFactor>(
    newMockEvent()
  )

  aPolEursNewReserveFactorEvent.parameters = new Array()

  aPolEursNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolEursNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolEursNewReserveFactorEvent
}

export function createaPolEURSRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolEURSRedeem {
  let aPolEursRedeemEvent = changetype<aPolEURSRedeem>(newMockEvent())

  aPolEursRedeemEvent.parameters = new Array()

  aPolEursRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolEursRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolEursRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolEursRedeemEvent
}

export function createaPolEURSRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolEURSRepayBorrow {
  let aPolEursRepayBorrowEvent = changetype<aPolEURSRepayBorrow>(newMockEvent())

  aPolEursRepayBorrowEvent.parameters = new Array()

  aPolEursRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolEursRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolEursRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolEursRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolEursRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolEursRepayBorrowEvent
}

export function createaPolEURSReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolEURSReservesAdded {
  let aPolEursReservesAddedEvent = changetype<aPolEURSReservesAdded>(
    newMockEvent()
  )

  aPolEursReservesAddedEvent.parameters = new Array()

  aPolEursReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolEursReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolEursReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolEursReservesAddedEvent
}

export function createaPolEURSReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolEURSReservesReduced {
  let aPolEursReservesReducedEvent = changetype<aPolEURSReservesReduced>(
    newMockEvent()
  )

  aPolEursReservesReducedEvent.parameters = new Array()

  aPolEursReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolEursReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolEursReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolEursReservesReducedEvent
}

export function createaPolEURSTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolEURSTransfer {
  let aPolEursTransferEvent = changetype<aPolEURSTransfer>(newMockEvent())

  aPolEursTransferEvent.parameters = new Array()

  aPolEursTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolEursTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolEursTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolEursTransferEvent
}
