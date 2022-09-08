import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWBTCAccrueInterest,
  aPolWBTCApproval,
  aPolWBTCBorrow,
  aPolWBTCFailure,
  aPolWBTCLiquidateBorrow,
  aPolWBTCMint,
  aPolWBTCNewAdmin,
  aPolWBTCNewComptroller,
  aPolWBTCNewImplementation,
  aPolWBTCNewMarketInterestRateModel,
  aPolWBTCNewPendingAdmin,
  aPolWBTCNewReserveFactor,
  aPolWBTCRedeem,
  aPolWBTCRepayBorrow,
  aPolWBTCReservesAdded,
  aPolWBTCReservesReduced,
  aPolWBTCTransfer
} from "../generated/aPolWBTC/aPolWBTC"

export function createaPolWBTCAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWBTCAccrueInterest {
  let aPolWbtcAccrueInterestEvent = changetype<aPolWBTCAccrueInterest>(
    newMockEvent()
  )

  aPolWbtcAccrueInterestEvent.parameters = new Array()

  aPolWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcAccrueInterestEvent
}

export function createaPolWBTCApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWBTCApproval {
  let aPolWbtcApprovalEvent = changetype<aPolWBTCApproval>(newMockEvent())

  aPolWbtcApprovalEvent.parameters = new Array()

  aPolWbtcApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWbtcApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWbtcApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWbtcApprovalEvent
}

export function createaPolWBTCBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWBTCBorrow {
  let aPolWbtcBorrowEvent = changetype<aPolWBTCBorrow>(newMockEvent())

  aPolWbtcBorrowEvent.parameters = new Array()

  aPolWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcBorrowEvent
}

export function createaPolWBTCFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWBTCFailure {
  let aPolWbtcFailureEvent = changetype<aPolWBTCFailure>(newMockEvent())

  aPolWbtcFailureEvent.parameters = new Array()

  aPolWbtcFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWbtcFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWbtcFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWbtcFailureEvent
}

export function createaPolWBTCLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWBTCLiquidateBorrow {
  let aPolWbtcLiquidateBorrowEvent = changetype<aPolWBTCLiquidateBorrow>(
    newMockEvent()
  )

  aPolWbtcLiquidateBorrowEvent.parameters = new Array()

  aPolWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWbtcLiquidateBorrowEvent
}

export function createaPolWBTCMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWBTCMint {
  let aPolWbtcMintEvent = changetype<aPolWBTCMint>(newMockEvent())

  aPolWbtcMintEvent.parameters = new Array()

  aPolWbtcMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWbtcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWbtcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWbtcMintEvent
}

export function createaPolWBTCNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWBTCNewAdmin {
  let aPolWbtcNewAdminEvent = changetype<aPolWBTCNewAdmin>(newMockEvent())

  aPolWbtcNewAdminEvent.parameters = new Array()

  aPolWbtcNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWbtcNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWbtcNewAdminEvent
}

export function createaPolWBTCNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWBTCNewComptroller {
  let aPolWbtcNewComptrollerEvent = changetype<aPolWBTCNewComptroller>(
    newMockEvent()
  )

  aPolWbtcNewComptrollerEvent.parameters = new Array()

  aPolWbtcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWbtcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWbtcNewComptrollerEvent
}

export function createaPolWBTCNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWBTCNewImplementation {
  let aPolWbtcNewImplementationEvent = changetype<aPolWBTCNewImplementation>(
    newMockEvent()
  )

  aPolWbtcNewImplementationEvent.parameters = new Array()

  aPolWbtcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWbtcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWbtcNewImplementationEvent
}

export function createaPolWBTCNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWBTCNewMarketInterestRateModel {
  let aPolWbtcNewMarketInterestRateModelEvent = changetype<
    aPolWBTCNewMarketInterestRateModel
  >(newMockEvent())

  aPolWbtcNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWbtcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWbtcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWbtcNewMarketInterestRateModelEvent
}

export function createaPolWBTCNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWBTCNewPendingAdmin {
  let aPolWbtcNewPendingAdminEvent = changetype<aPolWBTCNewPendingAdmin>(
    newMockEvent()
  )

  aPolWbtcNewPendingAdminEvent.parameters = new Array()

  aPolWbtcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWbtcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWbtcNewPendingAdminEvent
}

export function createaPolWBTCNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWBTCNewReserveFactor {
  let aPolWbtcNewReserveFactorEvent = changetype<aPolWBTCNewReserveFactor>(
    newMockEvent()
  )

  aPolWbtcNewReserveFactorEvent.parameters = new Array()

  aPolWbtcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWbtcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWbtcNewReserveFactorEvent
}

export function createaPolWBTCRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWBTCRedeem {
  let aPolWbtcRedeemEvent = changetype<aPolWBTCRedeem>(newMockEvent())

  aPolWbtcRedeemEvent.parameters = new Array()

  aPolWbtcRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWbtcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWbtcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWbtcRedeemEvent
}

export function createaPolWBTCRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWBTCRepayBorrow {
  let aPolWbtcRepayBorrowEvent = changetype<aPolWBTCRepayBorrow>(newMockEvent())

  aPolWbtcRepayBorrowEvent.parameters = new Array()

  aPolWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWbtcRepayBorrowEvent
}

export function createaPolWBTCReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWBTCReservesAdded {
  let aPolWbtcReservesAddedEvent = changetype<aPolWBTCReservesAdded>(
    newMockEvent()
  )

  aPolWbtcReservesAddedEvent.parameters = new Array()

  aPolWbtcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWbtcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWbtcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWbtcReservesAddedEvent
}

export function createaPolWBTCReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWBTCReservesReduced {
  let aPolWbtcReservesReducedEvent = changetype<aPolWBTCReservesReduced>(
    newMockEvent()
  )

  aPolWbtcReservesReducedEvent.parameters = new Array()

  aPolWbtcReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWbtcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWbtcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWbtcReservesReducedEvent
}

export function createaPolWBTCTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWBTCTransfer {
  let aPolWbtcTransferEvent = changetype<aPolWBTCTransfer>(newMockEvent())

  aPolWbtcTransferEvent.parameters = new Array()

  aPolWbtcTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWbtcTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWbtcTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWbtcTransferEvent
}
