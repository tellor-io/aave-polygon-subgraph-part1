import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CErc20Delegator_hLINKAccrueInterest,
  CErc20Delegator_hLINKApproval,
  CErc20Delegator_hLINKBorrow,
  CErc20Delegator_hLINKFailure,
  CErc20Delegator_hLINKLiquidateBorrow,
  CErc20Delegator_hLINKMint,
  CErc20Delegator_hLINKNewAdmin,
  CErc20Delegator_hLINKNewComptroller,
  CErc20Delegator_hLINKNewImplementation,
  CErc20Delegator_hLINKNewMarketInterestRateModel,
  CErc20Delegator_hLINKNewPendingAdmin,
  CErc20Delegator_hLINKNewReserveFactor,
  CErc20Delegator_hLINKRedeem,
  CErc20Delegator_hLINKRepayBorrow,
  CErc20Delegator_hLINKReservesAdded,
  CErc20Delegator_hLINKReservesReduced,
  CErc20Delegator_hLINKTransfer
} from "../generated/CErc20Delegator_hLINK/CErc20Delegator_hLINK"

export function createCErc20Delegator_hLINKAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hLINKAccrueInterest {
  let cErc20DelegatorHLinkAccrueInterestEvent = changetype<
    CErc20Delegator_hLINKAccrueInterest
  >(newMockEvent())

  cErc20DelegatorHLinkAccrueInterestEvent.parameters = new Array()

  cErc20DelegatorHLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  cErc20DelegatorHLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  cErc20DelegatorHLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  cErc20DelegatorHLinkAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHLinkAccrueInterestEvent
}

export function createCErc20Delegator_hLINKApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): CErc20Delegator_hLINKApproval {
  let cErc20DelegatorHLinkApprovalEvent = changetype<
    CErc20Delegator_hLINKApproval
  >(newMockEvent())

  cErc20DelegatorHLinkApprovalEvent.parameters = new Array()

  cErc20DelegatorHLinkApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cErc20DelegatorHLinkApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  cErc20DelegatorHLinkApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHLinkApprovalEvent
}

export function createCErc20Delegator_hLINKBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hLINKBorrow {
  let cErc20DelegatorHLinkBorrowEvent = changetype<CErc20Delegator_hLINKBorrow>(
    newMockEvent()
  )

  cErc20DelegatorHLinkBorrowEvent.parameters = new Array()

  cErc20DelegatorHLinkBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHLinkBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  cErc20DelegatorHLinkBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHLinkBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHLinkBorrowEvent
}

export function createCErc20Delegator_hLINKFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): CErc20Delegator_hLINKFailure {
  let cErc20DelegatorHLinkFailureEvent = changetype<
    CErc20Delegator_hLINKFailure
  >(newMockEvent())

  cErc20DelegatorHLinkFailureEvent.parameters = new Array()

  cErc20DelegatorHLinkFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  cErc20DelegatorHLinkFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  cErc20DelegatorHLinkFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return cErc20DelegatorHLinkFailureEvent
}

export function createCErc20Delegator_hLINKLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): CErc20Delegator_hLINKLiquidateBorrow {
  let cErc20DelegatorHLinkLiquidateBorrowEvent = changetype<
    CErc20Delegator_hLINKLiquidateBorrow
  >(newMockEvent())

  cErc20DelegatorHLinkLiquidateBorrowEvent.parameters = new Array()

  cErc20DelegatorHLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  cErc20DelegatorHLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  cErc20DelegatorHLinkLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return cErc20DelegatorHLinkLiquidateBorrowEvent
}

export function createCErc20Delegator_hLINKMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): CErc20Delegator_hLINKMint {
  let cErc20DelegatorHLinkMintEvent = changetype<CErc20Delegator_hLINKMint>(
    newMockEvent()
  )

  cErc20DelegatorHLinkMintEvent.parameters = new Array()

  cErc20DelegatorHLinkMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  cErc20DelegatorHLinkMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  cErc20DelegatorHLinkMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return cErc20DelegatorHLinkMintEvent
}

export function createCErc20Delegator_hLINKNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): CErc20Delegator_hLINKNewAdmin {
  let cErc20DelegatorHLinkNewAdminEvent = changetype<
    CErc20Delegator_hLINKNewAdmin
  >(newMockEvent())

  cErc20DelegatorHLinkNewAdminEvent.parameters = new Array()

  cErc20DelegatorHLinkNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  cErc20DelegatorHLinkNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return cErc20DelegatorHLinkNewAdminEvent
}

export function createCErc20Delegator_hLINKNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): CErc20Delegator_hLINKNewComptroller {
  let cErc20DelegatorHLinkNewComptrollerEvent = changetype<
    CErc20Delegator_hLINKNewComptroller
  >(newMockEvent())

  cErc20DelegatorHLinkNewComptrollerEvent.parameters = new Array()

  cErc20DelegatorHLinkNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  cErc20DelegatorHLinkNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return cErc20DelegatorHLinkNewComptrollerEvent
}

export function createCErc20Delegator_hLINKNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): CErc20Delegator_hLINKNewImplementation {
  let cErc20DelegatorHLinkNewImplementationEvent = changetype<
    CErc20Delegator_hLINKNewImplementation
  >(newMockEvent())

  cErc20DelegatorHLinkNewImplementationEvent.parameters = new Array()

  cErc20DelegatorHLinkNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  cErc20DelegatorHLinkNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return cErc20DelegatorHLinkNewImplementationEvent
}

export function createCErc20Delegator_hLINKNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): CErc20Delegator_hLINKNewMarketInterestRateModel {
  let cErc20DelegatorHLinkNewMarketInterestRateModelEvent = changetype<
    CErc20Delegator_hLINKNewMarketInterestRateModel
  >(newMockEvent())

  cErc20DelegatorHLinkNewMarketInterestRateModelEvent.parameters = new Array()

  cErc20DelegatorHLinkNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  cErc20DelegatorHLinkNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return cErc20DelegatorHLinkNewMarketInterestRateModelEvent
}

export function createCErc20Delegator_hLINKNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): CErc20Delegator_hLINKNewPendingAdmin {
  let cErc20DelegatorHLinkNewPendingAdminEvent = changetype<
    CErc20Delegator_hLINKNewPendingAdmin
  >(newMockEvent())

  cErc20DelegatorHLinkNewPendingAdminEvent.parameters = new Array()

  cErc20DelegatorHLinkNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  cErc20DelegatorHLinkNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return cErc20DelegatorHLinkNewPendingAdminEvent
}

export function createCErc20Delegator_hLINKNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): CErc20Delegator_hLINKNewReserveFactor {
  let cErc20DelegatorHLinkNewReserveFactorEvent = changetype<
    CErc20Delegator_hLINKNewReserveFactor
  >(newMockEvent())

  cErc20DelegatorHLinkNewReserveFactorEvent.parameters = new Array()

  cErc20DelegatorHLinkNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  cErc20DelegatorHLinkNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return cErc20DelegatorHLinkNewReserveFactorEvent
}

export function createCErc20Delegator_hLINKRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): CErc20Delegator_hLINKRedeem {
  let cErc20DelegatorHLinkRedeemEvent = changetype<CErc20Delegator_hLINKRedeem>(
    newMockEvent()
  )

  cErc20DelegatorHLinkRedeemEvent.parameters = new Array()

  cErc20DelegatorHLinkRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  cErc20DelegatorHLinkRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  cErc20DelegatorHLinkRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return cErc20DelegatorHLinkRedeemEvent
}

export function createCErc20Delegator_hLINKRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hLINKRepayBorrow {
  let cErc20DelegatorHLinkRepayBorrowEvent = changetype<
    CErc20Delegator_hLINKRepayBorrow
  >(newMockEvent())

  cErc20DelegatorHLinkRepayBorrowEvent.parameters = new Array()

  cErc20DelegatorHLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  cErc20DelegatorHLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHLinkRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHLinkRepayBorrowEvent
}

export function createCErc20Delegator_hLINKReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hLINKReservesAdded {
  let cErc20DelegatorHLinkReservesAddedEvent = changetype<
    CErc20Delegator_hLINKReservesAdded
  >(newMockEvent())

  cErc20DelegatorHLinkReservesAddedEvent.parameters = new Array()

  cErc20DelegatorHLinkReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  cErc20DelegatorHLinkReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  cErc20DelegatorHLinkReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHLinkReservesAddedEvent
}

export function createCErc20Delegator_hLINKReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hLINKReservesReduced {
  let cErc20DelegatorHLinkReservesReducedEvent = changetype<
    CErc20Delegator_hLINKReservesReduced
  >(newMockEvent())

  cErc20DelegatorHLinkReservesReducedEvent.parameters = new Array()

  cErc20DelegatorHLinkReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  cErc20DelegatorHLinkReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  cErc20DelegatorHLinkReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHLinkReservesReducedEvent
}

export function createCErc20Delegator_hLINKTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): CErc20Delegator_hLINKTransfer {
  let cErc20DelegatorHLinkTransferEvent = changetype<
    CErc20Delegator_hLINKTransfer
  >(newMockEvent())

  cErc20DelegatorHLinkTransferEvent.parameters = new Array()

  cErc20DelegatorHLinkTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  cErc20DelegatorHLinkTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  cErc20DelegatorHLinkTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHLinkTransferEvent
}
