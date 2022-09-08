import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolDAIAccrueInterest,
  aPolDAIApproval,
  aPolDAIBorrow,
  aPolDAIFailure,
  aPolDAILiquidateBorrow,
  aPolDAIMint,
  aPolDAINewAdmin,
  aPolDAINewComptroller,
  aPolDAINewImplementation,
  aPolDAINewMarketInterestRateModel,
  aPolDAINewPendingAdmin,
  aPolDAINewReserveFactor,
  aPolDAIRedeem,
  aPolDAIRepayBorrow,
  aPolDAIReservesAdded,
  aPolDAIReservesReduced,
  aPolDAITransfer
} from "../generated/aPolDAI/aPolDAI"

export function createaPolDAIAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolDAIAccrueInterest {
  let aPolDaiAccrueInterestEvent = changetype<aPolDAIAccrueInterest>(
    newMockEvent()
  )

  aPolDaiAccrueInterestEvent.parameters = new Array()

  aPolDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaiAccrueInterestEvent
}

export function createaPolDAIApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolDAIApproval {
  let aPolDaiApprovalEvent = changetype<aPolDAIApproval>(newMockEvent())

  aPolDaiApprovalEvent.parameters = new Array()

  aPolDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDaiApprovalEvent
}

export function createaPolDAIBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDAIBorrow {
  let aPolDaiBorrowEvent = changetype<aPolDAIBorrow>(newMockEvent())

  aPolDaiBorrowEvent.parameters = new Array()

  aPolDaiBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolDaiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDaiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaiBorrowEvent
}

export function createaPolDAIFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolDAIFailure {
  let aPolDaiFailureEvent = changetype<aPolDAIFailure>(newMockEvent())

  aPolDaiFailureEvent.parameters = new Array()

  aPolDaiFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolDaiFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolDaiFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolDaiFailureEvent
}

export function createaPolDAILiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolDAILiquidateBorrow {
  let aPolDaiLiquidateBorrowEvent = changetype<aPolDAILiquidateBorrow>(
    newMockEvent()
  )

  aPolDaiLiquidateBorrowEvent.parameters = new Array()

  aPolDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolDaiLiquidateBorrowEvent
}

export function createaPolDAIMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolDAIMint {
  let aPolDaiMintEvent = changetype<aPolDAIMint>(newMockEvent())

  aPolDaiMintEvent.parameters = new Array()

  aPolDaiMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolDaiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolDaiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolDaiMintEvent
}

export function createaPolDAINewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolDAINewAdmin {
  let aPolDaiNewAdminEvent = changetype<aPolDAINewAdmin>(newMockEvent())

  aPolDaiNewAdminEvent.parameters = new Array()

  aPolDaiNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolDaiNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolDaiNewAdminEvent
}

export function createaPolDAINewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolDAINewComptroller {
  let aPolDaiNewComptrollerEvent = changetype<aPolDAINewComptroller>(
    newMockEvent()
  )

  aPolDaiNewComptrollerEvent.parameters = new Array()

  aPolDaiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolDaiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolDaiNewComptrollerEvent
}

export function createaPolDAINewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolDAINewImplementation {
  let aPolDaiNewImplementationEvent = changetype<aPolDAINewImplementation>(
    newMockEvent()
  )

  aPolDaiNewImplementationEvent.parameters = new Array()

  aPolDaiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolDaiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolDaiNewImplementationEvent
}

export function createaPolDAINewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolDAINewMarketInterestRateModel {
  let aPolDaiNewMarketInterestRateModelEvent = changetype<
    aPolDAINewMarketInterestRateModel
  >(newMockEvent())

  aPolDaiNewMarketInterestRateModelEvent.parameters = new Array()

  aPolDaiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolDaiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolDaiNewMarketInterestRateModelEvent
}

export function createaPolDAINewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolDAINewPendingAdmin {
  let aPolDaiNewPendingAdminEvent = changetype<aPolDAINewPendingAdmin>(
    newMockEvent()
  )

  aPolDaiNewPendingAdminEvent.parameters = new Array()

  aPolDaiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolDaiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolDaiNewPendingAdminEvent
}

export function createaPolDAINewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolDAINewReserveFactor {
  let aPolDaiNewReserveFactorEvent = changetype<aPolDAINewReserveFactor>(
    newMockEvent()
  )

  aPolDaiNewReserveFactorEvent.parameters = new Array()

  aPolDaiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolDaiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolDaiNewReserveFactorEvent
}

export function createaPolDAIRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolDAIRedeem {
  let aPolDaiRedeemEvent = changetype<aPolDAIRedeem>(newMockEvent())

  aPolDaiRedeemEvent.parameters = new Array()

  aPolDaiRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolDaiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolDaiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolDaiRedeemEvent
}

export function createaPolDAIRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolDAIRepayBorrow {
  let aPolDaiRepayBorrowEvent = changetype<aPolDAIRepayBorrow>(newMockEvent())

  aPolDaiRepayBorrowEvent.parameters = new Array()

  aPolDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolDaiRepayBorrowEvent
}

export function createaPolDAIReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolDAIReservesAdded {
  let aPolDaiReservesAddedEvent = changetype<aPolDAIReservesAdded>(
    newMockEvent()
  )

  aPolDaiReservesAddedEvent.parameters = new Array()

  aPolDaiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolDaiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolDaiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDaiReservesAddedEvent
}

export function createaPolDAIReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolDAIReservesReduced {
  let aPolDaiReservesReducedEvent = changetype<aPolDAIReservesReduced>(
    newMockEvent()
  )

  aPolDaiReservesReducedEvent.parameters = new Array()

  aPolDaiReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolDaiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolDaiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolDaiReservesReducedEvent
}

export function createaPolDAITransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolDAITransfer {
  let aPolDaiTransferEvent = changetype<aPolDAITransfer>(newMockEvent())

  aPolDaiTransferEvent.parameters = new Array()

  aPolDaiTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolDaiTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolDaiTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolDaiTransferEvent
}
