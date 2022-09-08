import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolUSDCAccrueInterest,
  aPolUSDCApproval,
  aPolUSDCBorrow,
  aPolUSDCFailure,
  aPolUSDCLiquidateBorrow,
  aPolUSDCMint,
  aPolUSDCNewAdmin,
  aPolUSDCNewComptroller,
  aPolUSDCNewImplementation,
  aPolUSDCNewMarketInterestRateModel,
  aPolUSDCNewPendingAdmin,
  aPolUSDCNewReserveFactor,
  aPolUSDCRedeem,
  aPolUSDCRepayBorrow,
  aPolUSDCReservesAdded,
  aPolUSDCReservesReduced,
  aPolUSDCTransfer
} from "../generated/aPolUSDC/aPolUSDC"

export function createaPolUSDCAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolUSDCAccrueInterest {
  let aPolUsdcAccrueInterestEvent = changetype<aPolUSDCAccrueInterest>(
    newMockEvent()
  )

  aPolUsdcAccrueInterestEvent.parameters = new Array()

  aPolUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcAccrueInterestEvent
}

export function createaPolUSDCApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolUSDCApproval {
  let aPolUsdcApprovalEvent = changetype<aPolUSDCApproval>(newMockEvent())

  aPolUsdcApprovalEvent.parameters = new Array()

  aPolUsdcApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolUsdcApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolUsdcApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdcApprovalEvent
}

export function createaPolUSDCBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDCBorrow {
  let aPolUsdcBorrowEvent = changetype<aPolUSDCBorrow>(newMockEvent())

  aPolUsdcBorrowEvent.parameters = new Array()

  aPolUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcBorrowEvent
}

export function createaPolUSDCFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolUSDCFailure {
  let aPolUsdcFailureEvent = changetype<aPolUSDCFailure>(newMockEvent())

  aPolUsdcFailureEvent.parameters = new Array()

  aPolUsdcFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolUsdcFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolUsdcFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolUsdcFailureEvent
}

export function createaPolUSDCLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolUSDCLiquidateBorrow {
  let aPolUsdcLiquidateBorrowEvent = changetype<aPolUSDCLiquidateBorrow>(
    newMockEvent()
  )

  aPolUsdcLiquidateBorrowEvent.parameters = new Array()

  aPolUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolUsdcLiquidateBorrowEvent
}

export function createaPolUSDCMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolUSDCMint {
  let aPolUsdcMintEvent = changetype<aPolUSDCMint>(newMockEvent())

  aPolUsdcMintEvent.parameters = new Array()

  aPolUsdcMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolUsdcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolUsdcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolUsdcMintEvent
}

export function createaPolUSDCNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolUSDCNewAdmin {
  let aPolUsdcNewAdminEvent = changetype<aPolUSDCNewAdmin>(newMockEvent())

  aPolUsdcNewAdminEvent.parameters = new Array()

  aPolUsdcNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolUsdcNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolUsdcNewAdminEvent
}

export function createaPolUSDCNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolUSDCNewComptroller {
  let aPolUsdcNewComptrollerEvent = changetype<aPolUSDCNewComptroller>(
    newMockEvent()
  )

  aPolUsdcNewComptrollerEvent.parameters = new Array()

  aPolUsdcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolUsdcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolUsdcNewComptrollerEvent
}

export function createaPolUSDCNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolUSDCNewImplementation {
  let aPolUsdcNewImplementationEvent = changetype<aPolUSDCNewImplementation>(
    newMockEvent()
  )

  aPolUsdcNewImplementationEvent.parameters = new Array()

  aPolUsdcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolUsdcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolUsdcNewImplementationEvent
}

export function createaPolUSDCNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolUSDCNewMarketInterestRateModel {
  let aPolUsdcNewMarketInterestRateModelEvent = changetype<
    aPolUSDCNewMarketInterestRateModel
  >(newMockEvent())

  aPolUsdcNewMarketInterestRateModelEvent.parameters = new Array()

  aPolUsdcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolUsdcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolUsdcNewMarketInterestRateModelEvent
}

export function createaPolUSDCNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolUSDCNewPendingAdmin {
  let aPolUsdcNewPendingAdminEvent = changetype<aPolUSDCNewPendingAdmin>(
    newMockEvent()
  )

  aPolUsdcNewPendingAdminEvent.parameters = new Array()

  aPolUsdcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolUsdcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolUsdcNewPendingAdminEvent
}

export function createaPolUSDCNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolUSDCNewReserveFactor {
  let aPolUsdcNewReserveFactorEvent = changetype<aPolUSDCNewReserveFactor>(
    newMockEvent()
  )

  aPolUsdcNewReserveFactorEvent.parameters = new Array()

  aPolUsdcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolUsdcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolUsdcNewReserveFactorEvent
}

export function createaPolUSDCRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolUSDCRedeem {
  let aPolUsdcRedeemEvent = changetype<aPolUSDCRedeem>(newMockEvent())

  aPolUsdcRedeemEvent.parameters = new Array()

  aPolUsdcRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolUsdcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolUsdcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolUsdcRedeemEvent
}

export function createaPolUSDCRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolUSDCRepayBorrow {
  let aPolUsdcRepayBorrowEvent = changetype<aPolUSDCRepayBorrow>(newMockEvent())

  aPolUsdcRepayBorrowEvent.parameters = new Array()

  aPolUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolUsdcRepayBorrowEvent
}

export function createaPolUSDCReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDCReservesAdded {
  let aPolUsdcReservesAddedEvent = changetype<aPolUSDCReservesAdded>(
    newMockEvent()
  )

  aPolUsdcReservesAddedEvent.parameters = new Array()

  aPolUsdcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolUsdcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolUsdcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdcReservesAddedEvent
}

export function createaPolUSDCReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolUSDCReservesReduced {
  let aPolUsdcReservesReducedEvent = changetype<aPolUSDCReservesReduced>(
    newMockEvent()
  )

  aPolUsdcReservesReducedEvent.parameters = new Array()

  aPolUsdcReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolUsdcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolUsdcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolUsdcReservesReducedEvent
}

export function createaPolUSDCTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolUSDCTransfer {
  let aPolUsdcTransferEvent = changetype<aPolUSDCTransfer>(newMockEvent())

  aPolUsdcTransferEvent.parameters = new Array()

  aPolUsdcTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolUsdcTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolUsdcTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolUsdcTransferEvent
}
