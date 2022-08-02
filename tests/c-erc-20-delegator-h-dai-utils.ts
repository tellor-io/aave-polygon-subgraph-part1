import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CErc20Delegator_hDAIAccrueInterest,
  CErc20Delegator_hDAIApproval,
  CErc20Delegator_hDAIBorrow,
  CErc20Delegator_hDAIFailure,
  CErc20Delegator_hDAILiquidateBorrow,
  CErc20Delegator_hDAIMint,
  CErc20Delegator_hDAINewAdmin,
  CErc20Delegator_hDAINewComptroller,
  CErc20Delegator_hDAINewImplementation,
  CErc20Delegator_hDAINewMarketInterestRateModel,
  CErc20Delegator_hDAINewPendingAdmin,
  CErc20Delegator_hDAINewReserveFactor,
  CErc20Delegator_hDAIRedeem,
  CErc20Delegator_hDAIRepayBorrow,
  CErc20Delegator_hDAIReservesAdded,
  CErc20Delegator_hDAIReservesReduced,
  CErc20Delegator_hDAITransfer
} from "../generated/CErc20Delegator_hDAI/CErc20Delegator_hDAI"

export function createCErc20Delegator_hDAIAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hDAIAccrueInterest {
  let cErc20DelegatorHDaiAccrueInterestEvent = changetype<
    CErc20Delegator_hDAIAccrueInterest
  >(newMockEvent())

  cErc20DelegatorHDaiAccrueInterestEvent.parameters = new Array()

  cErc20DelegatorHDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  cErc20DelegatorHDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  cErc20DelegatorHDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  cErc20DelegatorHDaiAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHDaiAccrueInterestEvent
}

export function createCErc20Delegator_hDAIApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): CErc20Delegator_hDAIApproval {
  let cErc20DelegatorHDaiApprovalEvent = changetype<
    CErc20Delegator_hDAIApproval
  >(newMockEvent())

  cErc20DelegatorHDaiApprovalEvent.parameters = new Array()

  cErc20DelegatorHDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cErc20DelegatorHDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  cErc20DelegatorHDaiApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHDaiApprovalEvent
}

export function createCErc20Delegator_hDAIBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hDAIBorrow {
  let cErc20DelegatorHDaiBorrowEvent = changetype<CErc20Delegator_hDAIBorrow>(
    newMockEvent()
  )

  cErc20DelegatorHDaiBorrowEvent.parameters = new Array()

  cErc20DelegatorHDaiBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHDaiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  cErc20DelegatorHDaiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHDaiBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHDaiBorrowEvent
}

export function createCErc20Delegator_hDAIFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): CErc20Delegator_hDAIFailure {
  let cErc20DelegatorHDaiFailureEvent = changetype<CErc20Delegator_hDAIFailure>(
    newMockEvent()
  )

  cErc20DelegatorHDaiFailureEvent.parameters = new Array()

  cErc20DelegatorHDaiFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  cErc20DelegatorHDaiFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  cErc20DelegatorHDaiFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return cErc20DelegatorHDaiFailureEvent
}

export function createCErc20Delegator_hDAILiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): CErc20Delegator_hDAILiquidateBorrow {
  let cErc20DelegatorHDaiLiquidateBorrowEvent = changetype<
    CErc20Delegator_hDAILiquidateBorrow
  >(newMockEvent())

  cErc20DelegatorHDaiLiquidateBorrowEvent.parameters = new Array()

  cErc20DelegatorHDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  cErc20DelegatorHDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  cErc20DelegatorHDaiLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return cErc20DelegatorHDaiLiquidateBorrowEvent
}

export function createCErc20Delegator_hDAIMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): CErc20Delegator_hDAIMint {
  let cErc20DelegatorHDaiMintEvent = changetype<CErc20Delegator_hDAIMint>(
    newMockEvent()
  )

  cErc20DelegatorHDaiMintEvent.parameters = new Array()

  cErc20DelegatorHDaiMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  cErc20DelegatorHDaiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  cErc20DelegatorHDaiMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return cErc20DelegatorHDaiMintEvent
}

export function createCErc20Delegator_hDAINewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): CErc20Delegator_hDAINewAdmin {
  let cErc20DelegatorHDaiNewAdminEvent = changetype<
    CErc20Delegator_hDAINewAdmin
  >(newMockEvent())

  cErc20DelegatorHDaiNewAdminEvent.parameters = new Array()

  cErc20DelegatorHDaiNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  cErc20DelegatorHDaiNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return cErc20DelegatorHDaiNewAdminEvent
}

export function createCErc20Delegator_hDAINewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): CErc20Delegator_hDAINewComptroller {
  let cErc20DelegatorHDaiNewComptrollerEvent = changetype<
    CErc20Delegator_hDAINewComptroller
  >(newMockEvent())

  cErc20DelegatorHDaiNewComptrollerEvent.parameters = new Array()

  cErc20DelegatorHDaiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  cErc20DelegatorHDaiNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return cErc20DelegatorHDaiNewComptrollerEvent
}

export function createCErc20Delegator_hDAINewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): CErc20Delegator_hDAINewImplementation {
  let cErc20DelegatorHDaiNewImplementationEvent = changetype<
    CErc20Delegator_hDAINewImplementation
  >(newMockEvent())

  cErc20DelegatorHDaiNewImplementationEvent.parameters = new Array()

  cErc20DelegatorHDaiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  cErc20DelegatorHDaiNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return cErc20DelegatorHDaiNewImplementationEvent
}

export function createCErc20Delegator_hDAINewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): CErc20Delegator_hDAINewMarketInterestRateModel {
  let cErc20DelegatorHDaiNewMarketInterestRateModelEvent = changetype<
    CErc20Delegator_hDAINewMarketInterestRateModel
  >(newMockEvent())

  cErc20DelegatorHDaiNewMarketInterestRateModelEvent.parameters = new Array()

  cErc20DelegatorHDaiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  cErc20DelegatorHDaiNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return cErc20DelegatorHDaiNewMarketInterestRateModelEvent
}

export function createCErc20Delegator_hDAINewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): CErc20Delegator_hDAINewPendingAdmin {
  let cErc20DelegatorHDaiNewPendingAdminEvent = changetype<
    CErc20Delegator_hDAINewPendingAdmin
  >(newMockEvent())

  cErc20DelegatorHDaiNewPendingAdminEvent.parameters = new Array()

  cErc20DelegatorHDaiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  cErc20DelegatorHDaiNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return cErc20DelegatorHDaiNewPendingAdminEvent
}

export function createCErc20Delegator_hDAINewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): CErc20Delegator_hDAINewReserveFactor {
  let cErc20DelegatorHDaiNewReserveFactorEvent = changetype<
    CErc20Delegator_hDAINewReserveFactor
  >(newMockEvent())

  cErc20DelegatorHDaiNewReserveFactorEvent.parameters = new Array()

  cErc20DelegatorHDaiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  cErc20DelegatorHDaiNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return cErc20DelegatorHDaiNewReserveFactorEvent
}

export function createCErc20Delegator_hDAIRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): CErc20Delegator_hDAIRedeem {
  let cErc20DelegatorHDaiRedeemEvent = changetype<CErc20Delegator_hDAIRedeem>(
    newMockEvent()
  )

  cErc20DelegatorHDaiRedeemEvent.parameters = new Array()

  cErc20DelegatorHDaiRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  cErc20DelegatorHDaiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  cErc20DelegatorHDaiRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return cErc20DelegatorHDaiRedeemEvent
}

export function createCErc20Delegator_hDAIRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CErc20Delegator_hDAIRepayBorrow {
  let cErc20DelegatorHDaiRepayBorrowEvent = changetype<
    CErc20Delegator_hDAIRepayBorrow
  >(newMockEvent())

  cErc20DelegatorHDaiRepayBorrowEvent.parameters = new Array()

  cErc20DelegatorHDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  cErc20DelegatorHDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cErc20DelegatorHDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cErc20DelegatorHDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cErc20DelegatorHDaiRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cErc20DelegatorHDaiRepayBorrowEvent
}

export function createCErc20Delegator_hDAIReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hDAIReservesAdded {
  let cErc20DelegatorHDaiReservesAddedEvent = changetype<
    CErc20Delegator_hDAIReservesAdded
  >(newMockEvent())

  cErc20DelegatorHDaiReservesAddedEvent.parameters = new Array()

  cErc20DelegatorHDaiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  cErc20DelegatorHDaiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  cErc20DelegatorHDaiReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHDaiReservesAddedEvent
}

export function createCErc20Delegator_hDAIReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): CErc20Delegator_hDAIReservesReduced {
  let cErc20DelegatorHDaiReservesReducedEvent = changetype<
    CErc20Delegator_hDAIReservesReduced
  >(newMockEvent())

  cErc20DelegatorHDaiReservesReducedEvent.parameters = new Array()

  cErc20DelegatorHDaiReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  cErc20DelegatorHDaiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  cErc20DelegatorHDaiReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cErc20DelegatorHDaiReservesReducedEvent
}

export function createCErc20Delegator_hDAITransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): CErc20Delegator_hDAITransfer {
  let cErc20DelegatorHDaiTransferEvent = changetype<
    CErc20Delegator_hDAITransfer
  >(newMockEvent())

  cErc20DelegatorHDaiTransferEvent.parameters = new Array()

  cErc20DelegatorHDaiTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  cErc20DelegatorHDaiTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  cErc20DelegatorHDaiTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cErc20DelegatorHDaiTransferEvent
}
