import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CErc20Delegator_hFRAXAccrueInterest,
  CErc20Delegator_hFRAXApproval,
  CErc20Delegator_hFRAXBorrow,
  CErc20Delegator_hFRAXFailure,
  CErc20Delegator_hFRAXLiquidateBorrow,
  CErc20Delegator_hFRAXMint,
  CErc20Delegator_hFRAXNewAdmin,
  CErc20Delegator_hFRAXNewComptroller,
  CErc20Delegator_hFRAXNewImplementation,
  CErc20Delegator_hFRAXNewMarketInterestRateModel,
  CErc20Delegator_hFRAXNewPendingAdmin,
  CErc20Delegator_hFRAXNewReserveFactor,
  CErc20Delegator_hFRAXRedeem,
  CErc20Delegator_hFRAXRepayBorrow,
  CErc20Delegator_hFRAXReservesAdded,
  CErc20Delegator_hFRAXReservesReduced,
  CErc20Delegator_hFRAXTransfer
} from "../generated/CErc20Delegator_hFRAX/CErc20Delegator_hFRAX"

export function createCErc20Delegator_hFRAXAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hFRAXAccrueInterest {
  let cErc20DelegatorHFraxAccrueInterestEvent = changetype<
    CErc20Delegator_hFRAXAccrueInterest
  >(newMockEvent())

  cErc20DelegatorHFraxAccrueInterestEvent.parameters = new Array()

  cErc20DelegatorHFraxAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  cErc20DelegatorHFraxAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  cErc20DelegatorHFraxAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  cErc20DelegatorHFraxAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHFraxAccrueInterestEvent
}

export function createCErc20Delegator_hFRAXApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): CErc20Delegator_hFRAXApproval {
  let cErc20DelegatorHFraxApprovalEvent = changetype<
    CErc20Delegator_hFRAXApproval
  >(newMockEvent())

  cErc20DelegatorHFraxApprovalEvent.parameters = new Array()

  cErc20DelegatorHFraxApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cErc20DelegatorHFraxApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  cErc20DelegatorHFraxApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHFraxApprovalEvent
}

export function createCErc20Delegator_hFRAXBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hFRAXBorrow {
  let cErc20DelegatorHFraxBorrowEvent = changetype<CErc20Delegator_hFRAXBorrow>(
    newMockEvent()
  )

  cErc20DelegatorHFraxBorrowEvent.parameters = new Array()

  cErc20DelegatorHFraxBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHFraxBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  cErc20DelegatorHFraxBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHFraxBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHFraxBorrowEvent
}

export function createCErc20Delegator_hFRAXFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): CErc20Delegator_hFRAXFailure {
  let cErc20DelegatorHFraxFailureEvent = changetype<
    CErc20Delegator_hFRAXFailure
  >(newMockEvent())

  cErc20DelegatorHFraxFailureEvent.parameters = new Array()

  cErc20DelegatorHFraxFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  cErc20DelegatorHFraxFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  cErc20DelegatorHFraxFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return cErc20DelegatorHFraxFailureEvent
}

export function createCErc20Delegator_hFRAXLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): CErc20Delegator_hFRAXLiquidateBorrow {
  let cErc20DelegatorHFraxLiquidateBorrowEvent = changetype<
    CErc20Delegator_hFRAXLiquidateBorrow
  >(newMockEvent())

  cErc20DelegatorHFraxLiquidateBorrowEvent.parameters = new Array()

  cErc20DelegatorHFraxLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  cErc20DelegatorHFraxLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHFraxLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHFraxLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  cErc20DelegatorHFraxLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return cErc20DelegatorHFraxLiquidateBorrowEvent
}

export function createCErc20Delegator_hFRAXMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): CErc20Delegator_hFRAXMint {
  let cErc20DelegatorHFraxMintEvent = changetype<CErc20Delegator_hFRAXMint>(
    newMockEvent()
  )

  cErc20DelegatorHFraxMintEvent.parameters = new Array()

  cErc20DelegatorHFraxMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  cErc20DelegatorHFraxMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  cErc20DelegatorHFraxMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return cErc20DelegatorHFraxMintEvent
}

export function createCErc20Delegator_hFRAXNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): CErc20Delegator_hFRAXNewAdmin {
  let cErc20DelegatorHFraxNewAdminEvent = changetype<
    CErc20Delegator_hFRAXNewAdmin
  >(newMockEvent())

  cErc20DelegatorHFraxNewAdminEvent.parameters = new Array()

  cErc20DelegatorHFraxNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  cErc20DelegatorHFraxNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return cErc20DelegatorHFraxNewAdminEvent
}

export function createCErc20Delegator_hFRAXNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): CErc20Delegator_hFRAXNewComptroller {
  let cErc20DelegatorHFraxNewComptrollerEvent = changetype<
    CErc20Delegator_hFRAXNewComptroller
  >(newMockEvent())

  cErc20DelegatorHFraxNewComptrollerEvent.parameters = new Array()

  cErc20DelegatorHFraxNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  cErc20DelegatorHFraxNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return cErc20DelegatorHFraxNewComptrollerEvent
}

export function createCErc20Delegator_hFRAXNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): CErc20Delegator_hFRAXNewImplementation {
  let cErc20DelegatorHFraxNewImplementationEvent = changetype<
    CErc20Delegator_hFRAXNewImplementation
  >(newMockEvent())

  cErc20DelegatorHFraxNewImplementationEvent.parameters = new Array()

  cErc20DelegatorHFraxNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  cErc20DelegatorHFraxNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return cErc20DelegatorHFraxNewImplementationEvent
}

export function createCErc20Delegator_hFRAXNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): CErc20Delegator_hFRAXNewMarketInterestRateModel {
  let cErc20DelegatorHFraxNewMarketInterestRateModelEvent = changetype<
    CErc20Delegator_hFRAXNewMarketInterestRateModel
  >(newMockEvent())

  cErc20DelegatorHFraxNewMarketInterestRateModelEvent.parameters = new Array()

  cErc20DelegatorHFraxNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  cErc20DelegatorHFraxNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return cErc20DelegatorHFraxNewMarketInterestRateModelEvent
}

export function createCErc20Delegator_hFRAXNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): CErc20Delegator_hFRAXNewPendingAdmin {
  let cErc20DelegatorHFraxNewPendingAdminEvent = changetype<
    CErc20Delegator_hFRAXNewPendingAdmin
  >(newMockEvent())

  cErc20DelegatorHFraxNewPendingAdminEvent.parameters = new Array()

  cErc20DelegatorHFraxNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  cErc20DelegatorHFraxNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return cErc20DelegatorHFraxNewPendingAdminEvent
}

export function createCErc20Delegator_hFRAXNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): CErc20Delegator_hFRAXNewReserveFactor {
  let cErc20DelegatorHFraxNewReserveFactorEvent = changetype<
    CErc20Delegator_hFRAXNewReserveFactor
  >(newMockEvent())

  cErc20DelegatorHFraxNewReserveFactorEvent.parameters = new Array()

  cErc20DelegatorHFraxNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  cErc20DelegatorHFraxNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return cErc20DelegatorHFraxNewReserveFactorEvent
}

export function createCErc20Delegator_hFRAXRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): CErc20Delegator_hFRAXRedeem {
  let cErc20DelegatorHFraxRedeemEvent = changetype<CErc20Delegator_hFRAXRedeem>(
    newMockEvent()
  )

  cErc20DelegatorHFraxRedeemEvent.parameters = new Array()

  cErc20DelegatorHFraxRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  cErc20DelegatorHFraxRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  cErc20DelegatorHFraxRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return cErc20DelegatorHFraxRedeemEvent
}

export function createCErc20Delegator_hFRAXRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hFRAXRepayBorrow {
  let cErc20DelegatorHFraxRepayBorrowEvent = changetype<
    CErc20Delegator_hFRAXRepayBorrow
  >(newMockEvent())

  cErc20DelegatorHFraxRepayBorrowEvent.parameters = new Array()

  cErc20DelegatorHFraxRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  cErc20DelegatorHFraxRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHFraxRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHFraxRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHFraxRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHFraxRepayBorrowEvent
}

export function createCErc20Delegator_hFRAXReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hFRAXReservesAdded {
  let cErc20DelegatorHFraxReservesAddedEvent = changetype<
    CErc20Delegator_hFRAXReservesAdded
  >(newMockEvent())

  cErc20DelegatorHFraxReservesAddedEvent.parameters = new Array()

  cErc20DelegatorHFraxReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  cErc20DelegatorHFraxReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  cErc20DelegatorHFraxReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHFraxReservesAddedEvent
}

export function createCErc20Delegator_hFRAXReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hFRAXReservesReduced {
  let cErc20DelegatorHFraxReservesReducedEvent = changetype<
    CErc20Delegator_hFRAXReservesReduced
  >(newMockEvent())

  cErc20DelegatorHFraxReservesReducedEvent.parameters = new Array()

  cErc20DelegatorHFraxReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  cErc20DelegatorHFraxReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  cErc20DelegatorHFraxReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHFraxReservesReducedEvent
}

export function createCErc20Delegator_hFRAXTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): CErc20Delegator_hFRAXTransfer {
  let cErc20DelegatorHFraxTransferEvent = changetype<
    CErc20Delegator_hFRAXTransfer
  >(newMockEvent())

  cErc20DelegatorHFraxTransferEvent.parameters = new Array()

  cErc20DelegatorHFraxTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  cErc20DelegatorHFraxTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  cErc20DelegatorHFraxTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHFraxTransferEvent
}
