import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CErc20Delegator_hWBTCAccrueInterest,
  CErc20Delegator_hWBTCApproval,
  CErc20Delegator_hWBTCBorrow,
  CErc20Delegator_hWBTCFailure,
  CErc20Delegator_hWBTCLiquidateBorrow,
  CErc20Delegator_hWBTCMint,
  CErc20Delegator_hWBTCNewAdmin,
  CErc20Delegator_hWBTCNewComptroller,
  CErc20Delegator_hWBTCNewImplementation,
  CErc20Delegator_hWBTCNewMarketInterestRateModel,
  CErc20Delegator_hWBTCNewPendingAdmin,
  CErc20Delegator_hWBTCNewReserveFactor,
  CErc20Delegator_hWBTCRedeem,
  CErc20Delegator_hWBTCRepayBorrow,
  CErc20Delegator_hWBTCReservesAdded,
  CErc20Delegator_hWBTCReservesReduced,
  CErc20Delegator_hWBTCTransfer
} from "../generated/CErc20Delegator_hWBTC/CErc20Delegator_hWBTC"

export function createCErc20Delegator_hWBTCAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hWBTCAccrueInterest {
  let cErc20DelegatorHWbtcAccrueInterestEvent = changetype<
    CErc20Delegator_hWBTCAccrueInterest
  >(newMockEvent())

  cErc20DelegatorHWbtcAccrueInterestEvent.parameters = new Array()

  cErc20DelegatorHWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  cErc20DelegatorHWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  cErc20DelegatorHWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  cErc20DelegatorHWbtcAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHWbtcAccrueInterestEvent
}

export function createCErc20Delegator_hWBTCApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): CErc20Delegator_hWBTCApproval {
  let cErc20DelegatorHWbtcApprovalEvent = changetype<
    CErc20Delegator_hWBTCApproval
  >(newMockEvent())

  cErc20DelegatorHWbtcApprovalEvent.parameters = new Array()

  cErc20DelegatorHWbtcApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cErc20DelegatorHWbtcApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  cErc20DelegatorHWbtcApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHWbtcApprovalEvent
}

export function createCErc20Delegator_hWBTCBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hWBTCBorrow {
  let cErc20DelegatorHWbtcBorrowEvent = changetype<CErc20Delegator_hWBTCBorrow>(
    newMockEvent()
  )

  cErc20DelegatorHWbtcBorrowEvent.parameters = new Array()

  cErc20DelegatorHWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  cErc20DelegatorHWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHWbtcBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHWbtcBorrowEvent
}

export function createCErc20Delegator_hWBTCFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): CErc20Delegator_hWBTCFailure {
  let cErc20DelegatorHWbtcFailureEvent = changetype<
    CErc20Delegator_hWBTCFailure
  >(newMockEvent())

  cErc20DelegatorHWbtcFailureEvent.parameters = new Array()

  cErc20DelegatorHWbtcFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  cErc20DelegatorHWbtcFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  cErc20DelegatorHWbtcFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return cErc20DelegatorHWbtcFailureEvent
}

export function createCErc20Delegator_hWBTCLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): CErc20Delegator_hWBTCLiquidateBorrow {
  let cErc20DelegatorHWbtcLiquidateBorrowEvent = changetype<
    CErc20Delegator_hWBTCLiquidateBorrow
  >(newMockEvent())

  cErc20DelegatorHWbtcLiquidateBorrowEvent.parameters = new Array()

  cErc20DelegatorHWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  cErc20DelegatorHWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  cErc20DelegatorHWbtcLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return cErc20DelegatorHWbtcLiquidateBorrowEvent
}

export function createCErc20Delegator_hWBTCMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): CErc20Delegator_hWBTCMint {
  let cErc20DelegatorHWbtcMintEvent = changetype<CErc20Delegator_hWBTCMint>(
    newMockEvent()
  )

  cErc20DelegatorHWbtcMintEvent.parameters = new Array()

  cErc20DelegatorHWbtcMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  cErc20DelegatorHWbtcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  cErc20DelegatorHWbtcMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return cErc20DelegatorHWbtcMintEvent
}

export function createCErc20Delegator_hWBTCNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): CErc20Delegator_hWBTCNewAdmin {
  let cErc20DelegatorHWbtcNewAdminEvent = changetype<
    CErc20Delegator_hWBTCNewAdmin
  >(newMockEvent())

  cErc20DelegatorHWbtcNewAdminEvent.parameters = new Array()

  cErc20DelegatorHWbtcNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  cErc20DelegatorHWbtcNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return cErc20DelegatorHWbtcNewAdminEvent
}

export function createCErc20Delegator_hWBTCNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): CErc20Delegator_hWBTCNewComptroller {
  let cErc20DelegatorHWbtcNewComptrollerEvent = changetype<
    CErc20Delegator_hWBTCNewComptroller
  >(newMockEvent())

  cErc20DelegatorHWbtcNewComptrollerEvent.parameters = new Array()

  cErc20DelegatorHWbtcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  cErc20DelegatorHWbtcNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return cErc20DelegatorHWbtcNewComptrollerEvent
}

export function createCErc20Delegator_hWBTCNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): CErc20Delegator_hWBTCNewImplementation {
  let cErc20DelegatorHWbtcNewImplementationEvent = changetype<
    CErc20Delegator_hWBTCNewImplementation
  >(newMockEvent())

  cErc20DelegatorHWbtcNewImplementationEvent.parameters = new Array()

  cErc20DelegatorHWbtcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  cErc20DelegatorHWbtcNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return cErc20DelegatorHWbtcNewImplementationEvent
}

export function createCErc20Delegator_hWBTCNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): CErc20Delegator_hWBTCNewMarketInterestRateModel {
  let cErc20DelegatorHWbtcNewMarketInterestRateModelEvent = changetype<
    CErc20Delegator_hWBTCNewMarketInterestRateModel
  >(newMockEvent())

  cErc20DelegatorHWbtcNewMarketInterestRateModelEvent.parameters = new Array()

  cErc20DelegatorHWbtcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  cErc20DelegatorHWbtcNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return cErc20DelegatorHWbtcNewMarketInterestRateModelEvent
}

export function createCErc20Delegator_hWBTCNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): CErc20Delegator_hWBTCNewPendingAdmin {
  let cErc20DelegatorHWbtcNewPendingAdminEvent = changetype<
    CErc20Delegator_hWBTCNewPendingAdmin
  >(newMockEvent())

  cErc20DelegatorHWbtcNewPendingAdminEvent.parameters = new Array()

  cErc20DelegatorHWbtcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  cErc20DelegatorHWbtcNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return cErc20DelegatorHWbtcNewPendingAdminEvent
}

export function createCErc20Delegator_hWBTCNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): CErc20Delegator_hWBTCNewReserveFactor {
  let cErc20DelegatorHWbtcNewReserveFactorEvent = changetype<
    CErc20Delegator_hWBTCNewReserveFactor
  >(newMockEvent())

  cErc20DelegatorHWbtcNewReserveFactorEvent.parameters = new Array()

  cErc20DelegatorHWbtcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  cErc20DelegatorHWbtcNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return cErc20DelegatorHWbtcNewReserveFactorEvent
}

export function createCErc20Delegator_hWBTCRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): CErc20Delegator_hWBTCRedeem {
  let cErc20DelegatorHWbtcRedeemEvent = changetype<CErc20Delegator_hWBTCRedeem>(
    newMockEvent()
  )

  cErc20DelegatorHWbtcRedeemEvent.parameters = new Array()

  cErc20DelegatorHWbtcRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  cErc20DelegatorHWbtcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  cErc20DelegatorHWbtcRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return cErc20DelegatorHWbtcRedeemEvent
}

export function createCErc20Delegator_hWBTCRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hWBTCRepayBorrow {
  let cErc20DelegatorHWbtcRepayBorrowEvent = changetype<
    CErc20Delegator_hWBTCRepayBorrow
  >(newMockEvent())

  cErc20DelegatorHWbtcRepayBorrowEvent.parameters = new Array()

  cErc20DelegatorHWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  cErc20DelegatorHWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHWbtcRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHWbtcRepayBorrowEvent
}

export function createCErc20Delegator_hWBTCReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hWBTCReservesAdded {
  let cErc20DelegatorHWbtcReservesAddedEvent = changetype<
    CErc20Delegator_hWBTCReservesAdded
  >(newMockEvent())

  cErc20DelegatorHWbtcReservesAddedEvent.parameters = new Array()

  cErc20DelegatorHWbtcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  cErc20DelegatorHWbtcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  cErc20DelegatorHWbtcReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHWbtcReservesAddedEvent
}

export function createCErc20Delegator_hWBTCReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hWBTCReservesReduced {
  let cErc20DelegatorHWbtcReservesReducedEvent = changetype<
    CErc20Delegator_hWBTCReservesReduced
  >(newMockEvent())

  cErc20DelegatorHWbtcReservesReducedEvent.parameters = new Array()

  cErc20DelegatorHWbtcReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  cErc20DelegatorHWbtcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  cErc20DelegatorHWbtcReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHWbtcReservesReducedEvent
}

export function createCErc20Delegator_hWBTCTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): CErc20Delegator_hWBTCTransfer {
  let cErc20DelegatorHWbtcTransferEvent = changetype<
    CErc20Delegator_hWBTCTransfer
  >(newMockEvent())

  cErc20DelegatorHWbtcTransferEvent.parameters = new Array()

  cErc20DelegatorHWbtcTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  cErc20DelegatorHWbtcTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  cErc20DelegatorHWbtcTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHWbtcTransferEvent
}
