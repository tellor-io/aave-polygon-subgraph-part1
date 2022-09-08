import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWETHAccrueInterest,
  aPolWETHApproval,
  aPolWETHBorrow,
  aPolWETHFailure,
  aPolWETHLiquidateBorrow,
  aPolWETHMint,
  aPolWETHNewAdmin,
  aPolWETHNewComptroller,
  aPolWETHNewImplementation,
  aPolWETHNewMarketInterestRateModel,
  aPolWETHNewPendingAdmin,
  aPolWETHNewReserveFactor,
  aPolWETHRedeem,
  aPolWETHRepayBorrow,
  aPolWETHReservesAdded,
  aPolWETHReservesReduced,
  aPolWETHTransfer
} from "../generated/aPolWETH/aPolWETH"

export function createaPolWETHAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWETHAccrueInterest {
  let aPolWethAccrueInterestEvent = changetype<aPolWETHAccrueInterest>(
    newMockEvent()
  )

  aPolWethAccrueInterestEvent.parameters = new Array()

  aPolWethAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWethAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWethAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWethAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethAccrueInterestEvent
}

export function createaPolWETHApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWETHApproval {
  let aPolWethApprovalEvent = changetype<aPolWETHApproval>(newMockEvent())

  aPolWethApprovalEvent.parameters = new Array()

  aPolWethApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWethApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWethApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWethApprovalEvent
}

export function createaPolWETHBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWETHBorrow {
  let aPolWethBorrowEvent = changetype<aPolWETHBorrow>(newMockEvent())

  aPolWethBorrowEvent.parameters = new Array()

  aPolWethBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWethBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWethBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethBorrowEvent
}

export function createaPolWETHFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWETHFailure {
  let aPolWethFailureEvent = changetype<aPolWETHFailure>(newMockEvent())

  aPolWethFailureEvent.parameters = new Array()

  aPolWethFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWethFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWethFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWethFailureEvent
}

export function createaPolWETHLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWETHLiquidateBorrow {
  let aPolWethLiquidateBorrowEvent = changetype<aPolWETHLiquidateBorrow>(
    newMockEvent()
  )

  aPolWethLiquidateBorrowEvent.parameters = new Array()

  aPolWethLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWethLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWethLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWethLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWethLiquidateBorrowEvent
}

export function createaPolWETHMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWETHMint {
  let aPolWethMintEvent = changetype<aPolWETHMint>(newMockEvent())

  aPolWethMintEvent.parameters = new Array()

  aPolWethMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWethMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWethMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWethMintEvent
}

export function createaPolWETHNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWETHNewAdmin {
  let aPolWethNewAdminEvent = changetype<aPolWETHNewAdmin>(newMockEvent())

  aPolWethNewAdminEvent.parameters = new Array()

  aPolWethNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWethNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWethNewAdminEvent
}

export function createaPolWETHNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWETHNewComptroller {
  let aPolWethNewComptrollerEvent = changetype<aPolWETHNewComptroller>(
    newMockEvent()
  )

  aPolWethNewComptrollerEvent.parameters = new Array()

  aPolWethNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWethNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWethNewComptrollerEvent
}

export function createaPolWETHNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWETHNewImplementation {
  let aPolWethNewImplementationEvent = changetype<aPolWETHNewImplementation>(
    newMockEvent()
  )

  aPolWethNewImplementationEvent.parameters = new Array()

  aPolWethNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWethNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWethNewImplementationEvent
}

export function createaPolWETHNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWETHNewMarketInterestRateModel {
  let aPolWethNewMarketInterestRateModelEvent = changetype<
    aPolWETHNewMarketInterestRateModel
  >(newMockEvent())

  aPolWethNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWethNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWethNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWethNewMarketInterestRateModelEvent
}

export function createaPolWETHNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWETHNewPendingAdmin {
  let aPolWethNewPendingAdminEvent = changetype<aPolWETHNewPendingAdmin>(
    newMockEvent()
  )

  aPolWethNewPendingAdminEvent.parameters = new Array()

  aPolWethNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWethNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWethNewPendingAdminEvent
}

export function createaPolWETHNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWETHNewReserveFactor {
  let aPolWethNewReserveFactorEvent = changetype<aPolWETHNewReserveFactor>(
    newMockEvent()
  )

  aPolWethNewReserveFactorEvent.parameters = new Array()

  aPolWethNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWethNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWethNewReserveFactorEvent
}

export function createaPolWETHRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWETHRedeem {
  let aPolWethRedeemEvent = changetype<aPolWETHRedeem>(newMockEvent())

  aPolWethRedeemEvent.parameters = new Array()

  aPolWethRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWethRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWethRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWethRedeemEvent
}

export function createaPolWETHRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWETHRepayBorrow {
  let aPolWethRepayBorrowEvent = changetype<aPolWETHRepayBorrow>(newMockEvent())

  aPolWethRepayBorrowEvent.parameters = new Array()

  aPolWethRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWethRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWethRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWethRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWethRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWethRepayBorrowEvent
}

export function createaPolWETHReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWETHReservesAdded {
  let aPolWethReservesAddedEvent = changetype<aPolWETHReservesAdded>(
    newMockEvent()
  )

  aPolWethReservesAddedEvent.parameters = new Array()

  aPolWethReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWethReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWethReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWethReservesAddedEvent
}

export function createaPolWETHReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWETHReservesReduced {
  let aPolWethReservesReducedEvent = changetype<aPolWETHReservesReduced>(
    newMockEvent()
  )

  aPolWethReservesReducedEvent.parameters = new Array()

  aPolWethReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWethReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWethReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWethReservesReducedEvent
}

export function createaPolWETHTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWETHTransfer {
  let aPolWethTransferEvent = changetype<aPolWETHTransfer>(newMockEvent())

  aPolWethTransferEvent.parameters = new Array()

  aPolWethTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWethTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWethTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWethTransferEvent
}
