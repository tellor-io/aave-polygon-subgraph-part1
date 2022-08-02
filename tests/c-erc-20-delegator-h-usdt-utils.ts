import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CErc20Delegator_hUSDTAccrueInterest,
  CErc20Delegator_hUSDTApproval,
  CErc20Delegator_hUSDTBorrow,
  CErc20Delegator_hUSDTFailure,
  CErc20Delegator_hUSDTLiquidateBorrow,
  CErc20Delegator_hUSDTMint,
  CErc20Delegator_hUSDTNewAdmin,
  CErc20Delegator_hUSDTNewComptroller,
  CErc20Delegator_hUSDTNewImplementation,
  CErc20Delegator_hUSDTNewMarketInterestRateModel,
  CErc20Delegator_hUSDTNewPendingAdmin,
  CErc20Delegator_hUSDTNewReserveFactor,
  CErc20Delegator_hUSDTRedeem,
  CErc20Delegator_hUSDTRepayBorrow,
  CErc20Delegator_hUSDTReservesAdded,
  CErc20Delegator_hUSDTReservesReduced,
  CErc20Delegator_hUSDTTransfer
} from "../generated/CErc20Delegator_hUSDT/CErc20Delegator_hUSDT"

export function createCErc20Delegator_hUSDTAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hUSDTAccrueInterest {
  let cErc20DelegatorHUsdtAccrueInterestEvent = changetype<
    CErc20Delegator_hUSDTAccrueInterest
  >(newMockEvent())

  cErc20DelegatorHUsdtAccrueInterestEvent.parameters = new Array()

  cErc20DelegatorHUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  cErc20DelegatorHUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  cErc20DelegatorHUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  cErc20DelegatorHUsdtAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHUsdtAccrueInterestEvent
}

export function createCErc20Delegator_hUSDTApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): CErc20Delegator_hUSDTApproval {
  let cErc20DelegatorHUsdtApprovalEvent = changetype<
    CErc20Delegator_hUSDTApproval
  >(newMockEvent())

  cErc20DelegatorHUsdtApprovalEvent.parameters = new Array()

  cErc20DelegatorHUsdtApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cErc20DelegatorHUsdtApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  cErc20DelegatorHUsdtApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHUsdtApprovalEvent
}

export function createCErc20Delegator_hUSDTBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hUSDTBorrow {
  let cErc20DelegatorHUsdtBorrowEvent = changetype<CErc20Delegator_hUSDTBorrow>(
    newMockEvent()
  )

  cErc20DelegatorHUsdtBorrowEvent.parameters = new Array()

  cErc20DelegatorHUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  cErc20DelegatorHUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHUsdtBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHUsdtBorrowEvent
}

export function createCErc20Delegator_hUSDTFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): CErc20Delegator_hUSDTFailure {
  let cErc20DelegatorHUsdtFailureEvent = changetype<
    CErc20Delegator_hUSDTFailure
  >(newMockEvent())

  cErc20DelegatorHUsdtFailureEvent.parameters = new Array()

  cErc20DelegatorHUsdtFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  cErc20DelegatorHUsdtFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  cErc20DelegatorHUsdtFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return cErc20DelegatorHUsdtFailureEvent
}

export function createCErc20Delegator_hUSDTLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): CErc20Delegator_hUSDTLiquidateBorrow {
  let cErc20DelegatorHUsdtLiquidateBorrowEvent = changetype<
    CErc20Delegator_hUSDTLiquidateBorrow
  >(newMockEvent())

  cErc20DelegatorHUsdtLiquidateBorrowEvent.parameters = new Array()

  cErc20DelegatorHUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  cErc20DelegatorHUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  cErc20DelegatorHUsdtLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return cErc20DelegatorHUsdtLiquidateBorrowEvent
}

export function createCErc20Delegator_hUSDTMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): CErc20Delegator_hUSDTMint {
  let cErc20DelegatorHUsdtMintEvent = changetype<CErc20Delegator_hUSDTMint>(
    newMockEvent()
  )

  cErc20DelegatorHUsdtMintEvent.parameters = new Array()

  cErc20DelegatorHUsdtMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  cErc20DelegatorHUsdtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  cErc20DelegatorHUsdtMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return cErc20DelegatorHUsdtMintEvent
}

export function createCErc20Delegator_hUSDTNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): CErc20Delegator_hUSDTNewAdmin {
  let cErc20DelegatorHUsdtNewAdminEvent = changetype<
    CErc20Delegator_hUSDTNewAdmin
  >(newMockEvent())

  cErc20DelegatorHUsdtNewAdminEvent.parameters = new Array()

  cErc20DelegatorHUsdtNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  cErc20DelegatorHUsdtNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return cErc20DelegatorHUsdtNewAdminEvent
}

export function createCErc20Delegator_hUSDTNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): CErc20Delegator_hUSDTNewComptroller {
  let cErc20DelegatorHUsdtNewComptrollerEvent = changetype<
    CErc20Delegator_hUSDTNewComptroller
  >(newMockEvent())

  cErc20DelegatorHUsdtNewComptrollerEvent.parameters = new Array()

  cErc20DelegatorHUsdtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  cErc20DelegatorHUsdtNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return cErc20DelegatorHUsdtNewComptrollerEvent
}

export function createCErc20Delegator_hUSDTNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): CErc20Delegator_hUSDTNewImplementation {
  let cErc20DelegatorHUsdtNewImplementationEvent = changetype<
    CErc20Delegator_hUSDTNewImplementation
  >(newMockEvent())

  cErc20DelegatorHUsdtNewImplementationEvent.parameters = new Array()

  cErc20DelegatorHUsdtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  cErc20DelegatorHUsdtNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return cErc20DelegatorHUsdtNewImplementationEvent
}

export function createCErc20Delegator_hUSDTNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): CErc20Delegator_hUSDTNewMarketInterestRateModel {
  let cErc20DelegatorHUsdtNewMarketInterestRateModelEvent = changetype<
    CErc20Delegator_hUSDTNewMarketInterestRateModel
  >(newMockEvent())

  cErc20DelegatorHUsdtNewMarketInterestRateModelEvent.parameters = new Array()

  cErc20DelegatorHUsdtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  cErc20DelegatorHUsdtNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return cErc20DelegatorHUsdtNewMarketInterestRateModelEvent
}

export function createCErc20Delegator_hUSDTNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): CErc20Delegator_hUSDTNewPendingAdmin {
  let cErc20DelegatorHUsdtNewPendingAdminEvent = changetype<
    CErc20Delegator_hUSDTNewPendingAdmin
  >(newMockEvent())

  cErc20DelegatorHUsdtNewPendingAdminEvent.parameters = new Array()

  cErc20DelegatorHUsdtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  cErc20DelegatorHUsdtNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return cErc20DelegatorHUsdtNewPendingAdminEvent
}

export function createCErc20Delegator_hUSDTNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): CErc20Delegator_hUSDTNewReserveFactor {
  let cErc20DelegatorHUsdtNewReserveFactorEvent = changetype<
    CErc20Delegator_hUSDTNewReserveFactor
  >(newMockEvent())

  cErc20DelegatorHUsdtNewReserveFactorEvent.parameters = new Array()

  cErc20DelegatorHUsdtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  cErc20DelegatorHUsdtNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return cErc20DelegatorHUsdtNewReserveFactorEvent
}

export function createCErc20Delegator_hUSDTRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): CErc20Delegator_hUSDTRedeem {
  let cErc20DelegatorHUsdtRedeemEvent = changetype<CErc20Delegator_hUSDTRedeem>(
    newMockEvent()
  )

  cErc20DelegatorHUsdtRedeemEvent.parameters = new Array()

  cErc20DelegatorHUsdtRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  cErc20DelegatorHUsdtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  cErc20DelegatorHUsdtRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return cErc20DelegatorHUsdtRedeemEvent
}

export function createCErc20Delegator_hUSDTRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hUSDTRepayBorrow {
  let cErc20DelegatorHUsdtRepayBorrowEvent = changetype<
    CErc20Delegator_hUSDTRepayBorrow
  >(newMockEvent())

  cErc20DelegatorHUsdtRepayBorrowEvent.parameters = new Array()

  cErc20DelegatorHUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  cErc20DelegatorHUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHUsdtRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHUsdtRepayBorrowEvent
}

export function createCErc20Delegator_hUSDTReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hUSDTReservesAdded {
  let cErc20DelegatorHUsdtReservesAddedEvent = changetype<
    CErc20Delegator_hUSDTReservesAdded
  >(newMockEvent())

  cErc20DelegatorHUsdtReservesAddedEvent.parameters = new Array()

  cErc20DelegatorHUsdtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  cErc20DelegatorHUsdtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  cErc20DelegatorHUsdtReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHUsdtReservesAddedEvent
}

export function createCErc20Delegator_hUSDTReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hUSDTReservesReduced {
  let cErc20DelegatorHUsdtReservesReducedEvent = changetype<
    CErc20Delegator_hUSDTReservesReduced
  >(newMockEvent())

  cErc20DelegatorHUsdtReservesReducedEvent.parameters = new Array()

  cErc20DelegatorHUsdtReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  cErc20DelegatorHUsdtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  cErc20DelegatorHUsdtReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHUsdtReservesReducedEvent
}

export function createCErc20Delegator_hUSDTTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): CErc20Delegator_hUSDTTransfer {
  let cErc20DelegatorHUsdtTransferEvent = changetype<
    CErc20Delegator_hUSDTTransfer
  >(newMockEvent())

  cErc20DelegatorHUsdtTransferEvent.parameters = new Array()

  cErc20DelegatorHUsdtTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  cErc20DelegatorHUsdtTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  cErc20DelegatorHUsdtTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHUsdtTransferEvent
}
