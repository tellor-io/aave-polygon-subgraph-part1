import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CErc20Delegator_hUSDCAccrueInterest,
  CErc20Delegator_hUSDCApproval,
  CErc20Delegator_hUSDCBorrow,
  CErc20Delegator_hUSDCFailure,
  CErc20Delegator_hUSDCLiquidateBorrow,
  CErc20Delegator_hUSDCMint,
  CErc20Delegator_hUSDCNewAdmin,
  CErc20Delegator_hUSDCNewComptroller,
  CErc20Delegator_hUSDCNewImplementation,
  CErc20Delegator_hUSDCNewMarketInterestRateModel,
  CErc20Delegator_hUSDCNewPendingAdmin,
  CErc20Delegator_hUSDCNewReserveFactor,
  CErc20Delegator_hUSDCRedeem,
  CErc20Delegator_hUSDCRepayBorrow,
  CErc20Delegator_hUSDCReservesAdded,
  CErc20Delegator_hUSDCReservesReduced,
  CErc20Delegator_hUSDCTransfer
} from "../generated/CErc20Delegator_hUSDC/CErc20Delegator_hUSDC"

export function createCErc20Delegator_hUSDCAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hUSDCAccrueInterest {
  let cErc20DelegatorHUsdcAccrueInterestEvent = changetype<
    CErc20Delegator_hUSDCAccrueInterest
  >(newMockEvent())

  cErc20DelegatorHUsdcAccrueInterestEvent.parameters = new Array()

  cErc20DelegatorHUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  cErc20DelegatorHUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  cErc20DelegatorHUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  cErc20DelegatorHUsdcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHUsdcAccrueInterestEvent
}

export function createCErc20Delegator_hUSDCApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): CErc20Delegator_hUSDCApproval {
  let cErc20DelegatorHUsdcApprovalEvent = changetype<
    CErc20Delegator_hUSDCApproval
  >(newMockEvent())

  cErc20DelegatorHUsdcApprovalEvent.parameters = new Array()

  cErc20DelegatorHUsdcApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cErc20DelegatorHUsdcApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  cErc20DelegatorHUsdcApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHUsdcApprovalEvent
}

export function createCErc20Delegator_hUSDCBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hUSDCBorrow {
  let cErc20DelegatorHUsdcBorrowEvent = changetype<CErc20Delegator_hUSDCBorrow>(
    newMockEvent()
  )

  cErc20DelegatorHUsdcBorrowEvent.parameters = new Array()

  cErc20DelegatorHUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  cErc20DelegatorHUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHUsdcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHUsdcBorrowEvent
}

export function createCErc20Delegator_hUSDCFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): CErc20Delegator_hUSDCFailure {
  let cErc20DelegatorHUsdcFailureEvent = changetype<
    CErc20Delegator_hUSDCFailure
  >(newMockEvent())

  cErc20DelegatorHUsdcFailureEvent.parameters = new Array()

  cErc20DelegatorHUsdcFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  cErc20DelegatorHUsdcFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  cErc20DelegatorHUsdcFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return cErc20DelegatorHUsdcFailureEvent
}

export function createCErc20Delegator_hUSDCLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): CErc20Delegator_hUSDCLiquidateBorrow {
  let cErc20DelegatorHUsdcLiquidateBorrowEvent = changetype<
    CErc20Delegator_hUSDCLiquidateBorrow
  >(newMockEvent())

  cErc20DelegatorHUsdcLiquidateBorrowEvent.parameters = new Array()

  cErc20DelegatorHUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  cErc20DelegatorHUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  cErc20DelegatorHUsdcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return cErc20DelegatorHUsdcLiquidateBorrowEvent
}

export function createCErc20Delegator_hUSDCMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): CErc20Delegator_hUSDCMint {
  let cErc20DelegatorHUsdcMintEvent = changetype<CErc20Delegator_hUSDCMint>(
    newMockEvent()
  )

  cErc20DelegatorHUsdcMintEvent.parameters = new Array()

  cErc20DelegatorHUsdcMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  cErc20DelegatorHUsdcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  cErc20DelegatorHUsdcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return cErc20DelegatorHUsdcMintEvent
}

export function createCErc20Delegator_hUSDCNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): CErc20Delegator_hUSDCNewAdmin {
  let cErc20DelegatorHUsdcNewAdminEvent = changetype<
    CErc20Delegator_hUSDCNewAdmin
  >(newMockEvent())

  cErc20DelegatorHUsdcNewAdminEvent.parameters = new Array()

  cErc20DelegatorHUsdcNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  cErc20DelegatorHUsdcNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return cErc20DelegatorHUsdcNewAdminEvent
}

export function createCErc20Delegator_hUSDCNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): CErc20Delegator_hUSDCNewComptroller {
  let cErc20DelegatorHUsdcNewComptrollerEvent = changetype<
    CErc20Delegator_hUSDCNewComptroller
  >(newMockEvent())

  cErc20DelegatorHUsdcNewComptrollerEvent.parameters = new Array()

  cErc20DelegatorHUsdcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  cErc20DelegatorHUsdcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return cErc20DelegatorHUsdcNewComptrollerEvent
}

export function createCErc20Delegator_hUSDCNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): CErc20Delegator_hUSDCNewImplementation {
  let cErc20DelegatorHUsdcNewImplementationEvent = changetype<
    CErc20Delegator_hUSDCNewImplementation
  >(newMockEvent())

  cErc20DelegatorHUsdcNewImplementationEvent.parameters = new Array()

  cErc20DelegatorHUsdcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  cErc20DelegatorHUsdcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return cErc20DelegatorHUsdcNewImplementationEvent
}

export function createCErc20Delegator_hUSDCNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): CErc20Delegator_hUSDCNewMarketInterestRateModel {
  let cErc20DelegatorHUsdcNewMarketInterestRateModelEvent = changetype<
    CErc20Delegator_hUSDCNewMarketInterestRateModel
  >(newMockEvent())

  cErc20DelegatorHUsdcNewMarketInterestRateModelEvent.parameters = new Array()

  cErc20DelegatorHUsdcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  cErc20DelegatorHUsdcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return cErc20DelegatorHUsdcNewMarketInterestRateModelEvent
}

export function createCErc20Delegator_hUSDCNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): CErc20Delegator_hUSDCNewPendingAdmin {
  let cErc20DelegatorHUsdcNewPendingAdminEvent = changetype<
    CErc20Delegator_hUSDCNewPendingAdmin
  >(newMockEvent())

  cErc20DelegatorHUsdcNewPendingAdminEvent.parameters = new Array()

  cErc20DelegatorHUsdcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  cErc20DelegatorHUsdcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return cErc20DelegatorHUsdcNewPendingAdminEvent
}

export function createCErc20Delegator_hUSDCNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): CErc20Delegator_hUSDCNewReserveFactor {
  let cErc20DelegatorHUsdcNewReserveFactorEvent = changetype<
    CErc20Delegator_hUSDCNewReserveFactor
  >(newMockEvent())

  cErc20DelegatorHUsdcNewReserveFactorEvent.parameters = new Array()

  cErc20DelegatorHUsdcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  cErc20DelegatorHUsdcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return cErc20DelegatorHUsdcNewReserveFactorEvent
}

export function createCErc20Delegator_hUSDCRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): CErc20Delegator_hUSDCRedeem {
  let cErc20DelegatorHUsdcRedeemEvent = changetype<CErc20Delegator_hUSDCRedeem>(
    newMockEvent()
  )

  cErc20DelegatorHUsdcRedeemEvent.parameters = new Array()

  cErc20DelegatorHUsdcRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  cErc20DelegatorHUsdcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  cErc20DelegatorHUsdcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return cErc20DelegatorHUsdcRedeemEvent
}

export function createCErc20Delegator_hUSDCRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hUSDCRepayBorrow {
  let cErc20DelegatorHUsdcRepayBorrowEvent = changetype<
    CErc20Delegator_hUSDCRepayBorrow
  >(newMockEvent())

  cErc20DelegatorHUsdcRepayBorrowEvent.parameters = new Array()

  cErc20DelegatorHUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  cErc20DelegatorHUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHUsdcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHUsdcRepayBorrowEvent
}

export function createCErc20Delegator_hUSDCReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hUSDCReservesAdded {
  let cErc20DelegatorHUsdcReservesAddedEvent = changetype<
    CErc20Delegator_hUSDCReservesAdded
  >(newMockEvent())

  cErc20DelegatorHUsdcReservesAddedEvent.parameters = new Array()

  cErc20DelegatorHUsdcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  cErc20DelegatorHUsdcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  cErc20DelegatorHUsdcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHUsdcReservesAddedEvent
}

export function createCErc20Delegator_hUSDCReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hUSDCReservesReduced {
  let cErc20DelegatorHUsdcReservesReducedEvent = changetype<
    CErc20Delegator_hUSDCReservesReduced
  >(newMockEvent())

  cErc20DelegatorHUsdcReservesReducedEvent.parameters = new Array()

  cErc20DelegatorHUsdcReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  cErc20DelegatorHUsdcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  cErc20DelegatorHUsdcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHUsdcReservesReducedEvent
}

export function createCErc20Delegator_hUSDCTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): CErc20Delegator_hUSDCTransfer {
  let cErc20DelegatorHUsdcTransferEvent = changetype<
    CErc20Delegator_hUSDCTransfer
  >(newMockEvent())

  cErc20DelegatorHUsdcTransferEvent.parameters = new Array()

  cErc20DelegatorHUsdcTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  cErc20DelegatorHUsdcTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  cErc20DelegatorHUsdcTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHUsdcTransferEvent
}
