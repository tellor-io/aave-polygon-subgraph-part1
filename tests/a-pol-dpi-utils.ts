import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolDPIAccrueInterest,
  aPolDPIApproval,
  aPolDPIBorrow,
  aPolDPIFailure,
  aPolDPILiquidateBorrow,
  aPolDPIMint,
  aPolDPINewAdmin,
  aPolDPINewComptroller,
  aPolDPINewImplementation,
  aPolDPINewMarketInterestRateModel,
  aPolDPINewPendingAdmin,
  aPolDPINewReserveFactor,
  aPolDPIRedeem,
  aPolDPIRepayBorrow,
  aPolDPIReservesAdded,
  aPolDPIReservesReduced,
  aPolDPITransfer
} from "../generated/aPolDPI/aPolDPI"

export function createaPolDPIAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolDPIAccrueInterest {
  let aPolDpiAccrueInterestEvent = changetype<aPolDPIAccrueInterest>(
    newMockEvent()
  )

  aPolDpiAccrueInterestEvent.parameters = new Array()

  aPolDpiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolDpiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolDpiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolDpiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDpiAccrueInterestEvent
}

export function createaPolDPIApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolDPIApproval {
  let aPolDpiApprovalEvent = changetype<aPolDPIApproval>(newMockEvent())

  aPolDpiApprovalEvent.parameters = new Array()

  aPolDpiApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolDpiApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolDpiApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDpiApprovalEvent
}

export function createaPolDPIBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDPIBorrow {
  let aPolDpiBorrowEvent = changetype<aPolDPIBorrow>(newMockEvent())

  aPolDpiBorrowEvent.parameters = new Array()

  aPolDpiBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDpiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolDpiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDpiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDpiBorrowEvent
}

export function createaPolDPIFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolDPIFailure {
  let aPolDpiFailureEvent = changetype<aPolDPIFailure>(newMockEvent())

  aPolDpiFailureEvent.parameters = new Array()

  aPolDpiFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolDpiFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolDpiFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolDpiFailureEvent
}

export function createaPolDPILiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolDPILiquidateBorrow {
  let aPolDpiLiquidateBorrowEvent = changetype<aPolDPILiquidateBorrow>(
    newMockEvent()
  )

  aPolDpiLiquidateBorrowEvent.parameters = new Array()

  aPolDpiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolDpiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDpiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDpiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolDpiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolDpiLiquidateBorrowEvent
}

export function createaPolDPIMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolDPIMint {
  let aPolDpiMintEvent = changetype<aPolDPIMint>(newMockEvent())

  aPolDpiMintEvent.parameters = new Array()

  aPolDpiMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolDpiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolDpiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolDpiMintEvent
}

export function createaPolDPINewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolDPINewAdmin {
  let aPolDpiNewAdminEvent = changetype<aPolDPINewAdmin>(newMockEvent())

  aPolDpiNewAdminEvent.parameters = new Array()

  aPolDpiNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolDpiNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolDpiNewAdminEvent
}

export function createaPolDPINewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolDPINewComptroller {
  let aPolDpiNewComptrollerEvent = changetype<aPolDPINewComptroller>(
    newMockEvent()
  )

  aPolDpiNewComptrollerEvent.parameters = new Array()

  aPolDpiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolDpiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolDpiNewComptrollerEvent
}

export function createaPolDPINewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolDPINewImplementation {
  let aPolDpiNewImplementationEvent = changetype<aPolDPINewImplementation>(
    newMockEvent()
  )

  aPolDpiNewImplementationEvent.parameters = new Array()

  aPolDpiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolDpiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolDpiNewImplementationEvent
}

export function createaPolDPINewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolDPINewMarketInterestRateModel {
  let aPolDpiNewMarketInterestRateModelEvent = changetype<
    aPolDPINewMarketInterestRateModel
  >(newMockEvent())

  aPolDpiNewMarketInterestRateModelEvent.parameters = new Array()

  aPolDpiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolDpiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolDpiNewMarketInterestRateModelEvent
}

export function createaPolDPINewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolDPINewPendingAdmin {
  let aPolDpiNewPendingAdminEvent = changetype<aPolDPINewPendingAdmin>(
    newMockEvent()
  )

  aPolDpiNewPendingAdminEvent.parameters = new Array()

  aPolDpiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolDpiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolDpiNewPendingAdminEvent
}

export function createaPolDPINewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolDPINewReserveFactor {
  let aPolDpiNewReserveFactorEvent = changetype<aPolDPINewReserveFactor>(
    newMockEvent()
  )

  aPolDpiNewReserveFactorEvent.parameters = new Array()

  aPolDpiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolDpiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolDpiNewReserveFactorEvent
}

export function createaPolDPIRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolDPIRedeem {
  let aPolDpiRedeemEvent = changetype<aPolDPIRedeem>(newMockEvent())

  aPolDpiRedeemEvent.parameters = new Array()

  aPolDpiRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolDpiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolDpiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolDpiRedeemEvent
}

export function createaPolDPIRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDPIRepayBorrow {
  let aPolDpiRepayBorrowEvent = changetype<aPolDPIRepayBorrow>(newMockEvent())

  aPolDpiRepayBorrowEvent.parameters = new Array()

  aPolDpiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolDpiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDpiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDpiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDpiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDpiRepayBorrowEvent
}

export function createaPolDPIReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolDPIReservesAdded {
  let aPolDpiReservesAddedEvent = changetype<aPolDPIReservesAdded>(
    newMockEvent()
  )

  aPolDpiReservesAddedEvent.parameters = new Array()

  aPolDpiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolDpiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolDpiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDpiReservesAddedEvent
}

export function createaPolDPIReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolDPIReservesReduced {
  let aPolDpiReservesReducedEvent = changetype<aPolDPIReservesReduced>(
    newMockEvent()
  )

  aPolDpiReservesReducedEvent.parameters = new Array()

  aPolDpiReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolDpiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolDpiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDpiReservesReducedEvent
}

export function createaPolDPITransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolDPITransfer {
  let aPolDpiTransferEvent = changetype<aPolDPITransfer>(newMockEvent())

  aPolDpiTransferEvent.parameters = new Array()

  aPolDpiTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolDpiTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolDpiTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDpiTransferEvent
}
