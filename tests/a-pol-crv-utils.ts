import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolCRVAccrueInterest,
  aPolCRVApproval,
  aPolCRVBorrow,
  aPolCRVFailure,
  aPolCRVLiquidateBorrow,
  aPolCRVMint,
  aPolCRVNewAdmin,
  aPolCRVNewComptroller,
  aPolCRVNewImplementation,
  aPolCRVNewMarketInterestRateModel,
  aPolCRVNewPendingAdmin,
  aPolCRVNewReserveFactor,
  aPolCRVRedeem,
  aPolCRVRepayBorrow,
  aPolCRVReservesAdded,
  aPolCRVReservesReduced,
  aPolCRVTransfer
} from "../generated/aPolCRV/aPolCRV"

export function createaPolCRVAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolCRVAccrueInterest {
  let aPolCrvAccrueInterestEvent = changetype<aPolCRVAccrueInterest>(
    newMockEvent()
  )

  aPolCrvAccrueInterestEvent.parameters = new Array()

  aPolCrvAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolCrvAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolCrvAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolCrvAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolCrvAccrueInterestEvent
}

export function createaPolCRVApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolCRVApproval {
  let aPolCrvApprovalEvent = changetype<aPolCRVApproval>(newMockEvent())

  aPolCrvApprovalEvent.parameters = new Array()

  aPolCrvApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolCrvApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolCrvApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolCrvApprovalEvent
}

export function createaPolCRVBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolCRVBorrow {
  let aPolCrvBorrowEvent = changetype<aPolCRVBorrow>(newMockEvent())

  aPolCrvBorrowEvent.parameters = new Array()

  aPolCrvBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolCrvBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolCrvBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolCrvBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolCrvBorrowEvent
}

export function createaPolCRVFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolCRVFailure {
  let aPolCrvFailureEvent = changetype<aPolCRVFailure>(newMockEvent())

  aPolCrvFailureEvent.parameters = new Array()

  aPolCrvFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolCrvFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolCrvFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolCrvFailureEvent
}

export function createaPolCRVLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolCRVLiquidateBorrow {
  let aPolCrvLiquidateBorrowEvent = changetype<aPolCRVLiquidateBorrow>(
    newMockEvent()
  )

  aPolCrvLiquidateBorrowEvent.parameters = new Array()

  aPolCrvLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolCrvLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolCrvLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolCrvLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolCrvLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolCrvLiquidateBorrowEvent
}

export function createaPolCRVMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolCRVMint {
  let aPolCrvMintEvent = changetype<aPolCRVMint>(newMockEvent())

  aPolCrvMintEvent.parameters = new Array()

  aPolCrvMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolCrvMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolCrvMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolCrvMintEvent
}

export function createaPolCRVNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolCRVNewAdmin {
  let aPolCrvNewAdminEvent = changetype<aPolCRVNewAdmin>(newMockEvent())

  aPolCrvNewAdminEvent.parameters = new Array()

  aPolCrvNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolCrvNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolCrvNewAdminEvent
}

export function createaPolCRVNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolCRVNewComptroller {
  let aPolCrvNewComptrollerEvent = changetype<aPolCRVNewComptroller>(
    newMockEvent()
  )

  aPolCrvNewComptrollerEvent.parameters = new Array()

  aPolCrvNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolCrvNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolCrvNewComptrollerEvent
}

export function createaPolCRVNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolCRVNewImplementation {
  let aPolCrvNewImplementationEvent = changetype<aPolCRVNewImplementation>(
    newMockEvent()
  )

  aPolCrvNewImplementationEvent.parameters = new Array()

  aPolCrvNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolCrvNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolCrvNewImplementationEvent
}

export function createaPolCRVNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolCRVNewMarketInterestRateModel {
  let aPolCrvNewMarketInterestRateModelEvent = changetype<
    aPolCRVNewMarketInterestRateModel
  >(newMockEvent())

  aPolCrvNewMarketInterestRateModelEvent.parameters = new Array()

  aPolCrvNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolCrvNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolCrvNewMarketInterestRateModelEvent
}

export function createaPolCRVNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolCRVNewPendingAdmin {
  let aPolCrvNewPendingAdminEvent = changetype<aPolCRVNewPendingAdmin>(
    newMockEvent()
  )

  aPolCrvNewPendingAdminEvent.parameters = new Array()

  aPolCrvNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolCrvNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolCrvNewPendingAdminEvent
}

export function createaPolCRVNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolCRVNewReserveFactor {
  let aPolCrvNewReserveFactorEvent = changetype<aPolCRVNewReserveFactor>(
    newMockEvent()
  )

  aPolCrvNewReserveFactorEvent.parameters = new Array()

  aPolCrvNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolCrvNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolCrvNewReserveFactorEvent
}

export function createaPolCRVRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolCRVRedeem {
  let aPolCrvRedeemEvent = changetype<aPolCRVRedeem>(newMockEvent())

  aPolCrvRedeemEvent.parameters = new Array()

  aPolCrvRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolCrvRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolCrvRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolCrvRedeemEvent
}

export function createaPolCRVRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolCRVRepayBorrow {
  let aPolCrvRepayBorrowEvent = changetype<aPolCRVRepayBorrow>(newMockEvent())

  aPolCrvRepayBorrowEvent.parameters = new Array()

  aPolCrvRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolCrvRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolCrvRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolCrvRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolCrvRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolCrvRepayBorrowEvent
}

export function createaPolCRVReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolCRVReservesAdded {
  let aPolCrvReservesAddedEvent = changetype<aPolCRVReservesAdded>(
    newMockEvent()
  )

  aPolCrvReservesAddedEvent.parameters = new Array()

  aPolCrvReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolCrvReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolCrvReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolCrvReservesAddedEvent
}

export function createaPolCRVReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolCRVReservesReduced {
  let aPolCrvReservesReducedEvent = changetype<aPolCRVReservesReduced>(
    newMockEvent()
  )

  aPolCrvReservesReducedEvent.parameters = new Array()

  aPolCrvReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolCrvReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolCrvReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolCrvReservesReducedEvent
}

export function createaPolCRVTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolCRVTransfer {
  let aPolCrvTransferEvent = changetype<aPolCRVTransfer>(newMockEvent())

  aPolCrvTransferEvent.parameters = new Array()

  aPolCrvTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolCrvTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolCrvTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolCrvTransferEvent
}
