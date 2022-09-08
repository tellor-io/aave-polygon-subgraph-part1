import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolSUSHIAccrueInterest,
  aPolSUSHIApproval,
  aPolSUSHIBorrow,
  aPolSUSHIFailure,
  aPolSUSHILiquidateBorrow,
  aPolSUSHIMint,
  aPolSUSHINewAdmin,
  aPolSUSHINewComptroller,
  aPolSUSHINewImplementation,
  aPolSUSHINewMarketInterestRateModel,
  aPolSUSHINewPendingAdmin,
  aPolSUSHINewReserveFactor,
  aPolSUSHIRedeem,
  aPolSUSHIRepayBorrow,
  aPolSUSHIReservesAdded,
  aPolSUSHIReservesReduced,
  aPolSUSHITransfer
} from "../generated/aPolSUSHI/aPolSUSHI"

export function createaPolSUSHIAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolSUSHIAccrueInterest {
  let aPolSushiAccrueInterestEvent = changetype<aPolSUSHIAccrueInterest>(
    newMockEvent()
  )

  aPolSushiAccrueInterestEvent.parameters = new Array()

  aPolSushiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolSushiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolSushiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolSushiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolSushiAccrueInterestEvent
}

export function createaPolSUSHIApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolSUSHIApproval {
  let aPolSushiApprovalEvent = changetype<aPolSUSHIApproval>(newMockEvent())

  aPolSushiApprovalEvent.parameters = new Array()

  aPolSushiApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolSushiApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolSushiApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolSushiApprovalEvent
}

export function createaPolSUSHIBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolSUSHIBorrow {
  let aPolSushiBorrowEvent = changetype<aPolSUSHIBorrow>(newMockEvent())

  aPolSushiBorrowEvent.parameters = new Array()

  aPolSushiBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolSushiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolSushiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolSushiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolSushiBorrowEvent
}

export function createaPolSUSHIFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolSUSHIFailure {
  let aPolSushiFailureEvent = changetype<aPolSUSHIFailure>(newMockEvent())

  aPolSushiFailureEvent.parameters = new Array()

  aPolSushiFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolSushiFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolSushiFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolSushiFailureEvent
}

export function createaPolSUSHILiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolSUSHILiquidateBorrow {
  let aPolSushiLiquidateBorrowEvent = changetype<aPolSUSHILiquidateBorrow>(
    newMockEvent()
  )

  aPolSushiLiquidateBorrowEvent.parameters = new Array()

  aPolSushiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolSushiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolSushiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolSushiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolSushiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolSushiLiquidateBorrowEvent
}

export function createaPolSUSHIMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolSUSHIMint {
  let aPolSushiMintEvent = changetype<aPolSUSHIMint>(newMockEvent())

  aPolSushiMintEvent.parameters = new Array()

  aPolSushiMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolSushiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolSushiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolSushiMintEvent
}

export function createaPolSUSHINewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolSUSHINewAdmin {
  let aPolSushiNewAdminEvent = changetype<aPolSUSHINewAdmin>(newMockEvent())

  aPolSushiNewAdminEvent.parameters = new Array()

  aPolSushiNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolSushiNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolSushiNewAdminEvent
}

export function createaPolSUSHINewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolSUSHINewComptroller {
  let aPolSushiNewComptrollerEvent = changetype<aPolSUSHINewComptroller>(
    newMockEvent()
  )

  aPolSushiNewComptrollerEvent.parameters = new Array()

  aPolSushiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolSushiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolSushiNewComptrollerEvent
}

export function createaPolSUSHINewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolSUSHINewImplementation {
  let aPolSushiNewImplementationEvent = changetype<aPolSUSHINewImplementation>(
    newMockEvent()
  )

  aPolSushiNewImplementationEvent.parameters = new Array()

  aPolSushiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolSushiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolSushiNewImplementationEvent
}

export function createaPolSUSHINewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolSUSHINewMarketInterestRateModel {
  let aPolSushiNewMarketInterestRateModelEvent = changetype<
    aPolSUSHINewMarketInterestRateModel
  >(newMockEvent())

  aPolSushiNewMarketInterestRateModelEvent.parameters = new Array()

  aPolSushiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolSushiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolSushiNewMarketInterestRateModelEvent
}

export function createaPolSUSHINewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolSUSHINewPendingAdmin {
  let aPolSushiNewPendingAdminEvent = changetype<aPolSUSHINewPendingAdmin>(
    newMockEvent()
  )

  aPolSushiNewPendingAdminEvent.parameters = new Array()

  aPolSushiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolSushiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolSushiNewPendingAdminEvent
}

export function createaPolSUSHINewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolSUSHINewReserveFactor {
  let aPolSushiNewReserveFactorEvent = changetype<aPolSUSHINewReserveFactor>(
    newMockEvent()
  )

  aPolSushiNewReserveFactorEvent.parameters = new Array()

  aPolSushiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolSushiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolSushiNewReserveFactorEvent
}

export function createaPolSUSHIRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolSUSHIRedeem {
  let aPolSushiRedeemEvent = changetype<aPolSUSHIRedeem>(newMockEvent())

  aPolSushiRedeemEvent.parameters = new Array()

  aPolSushiRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolSushiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolSushiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolSushiRedeemEvent
}

export function createaPolSUSHIRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolSUSHIRepayBorrow {
  let aPolSushiRepayBorrowEvent = changetype<aPolSUSHIRepayBorrow>(
    newMockEvent()
  )

  aPolSushiRepayBorrowEvent.parameters = new Array()

  aPolSushiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolSushiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolSushiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolSushiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolSushiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolSushiRepayBorrowEvent
}

export function createaPolSUSHIReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolSUSHIReservesAdded {
  let aPolSushiReservesAddedEvent = changetype<aPolSUSHIReservesAdded>(
    newMockEvent()
  )

  aPolSushiReservesAddedEvent.parameters = new Array()

  aPolSushiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolSushiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolSushiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolSushiReservesAddedEvent
}

export function createaPolSUSHIReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolSUSHIReservesReduced {
  let aPolSushiReservesReducedEvent = changetype<aPolSUSHIReservesReduced>(
    newMockEvent()
  )

  aPolSushiReservesReducedEvent.parameters = new Array()

  aPolSushiReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolSushiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolSushiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolSushiReservesReducedEvent
}

export function createaPolSUSHITransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolSUSHITransfer {
  let aPolSushiTransferEvent = changetype<aPolSUSHITransfer>(newMockEvent())

  aPolSushiTransferEvent.parameters = new Array()

  aPolSushiTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolSushiTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolSushiTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolSushiTransferEvent
}
