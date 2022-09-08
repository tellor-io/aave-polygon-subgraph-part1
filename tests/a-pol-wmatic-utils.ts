import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  aPolWMATICAccrueInterest,
  aPolWMATICApproval,
  aPolWMATICBorrow,
  aPolWMATICFailure,
  aPolWMATICLiquidateBorrow,
  aPolWMATICMint,
  aPolWMATICNewAdmin,
  aPolWMATICNewComptroller,
  aPolWMATICNewImplementation,
  aPolWMATICNewMarketInterestRateModel,
  aPolWMATICNewPendingAdmin,
  aPolWMATICNewReserveFactor,
  aPolWMATICRedeem,
  aPolWMATICRepayBorrow,
  aPolWMATICReservesAdded,
  aPolWMATICReservesReduced,
  aPolWMATICTransfer
} from "../generated/aPolWMATIC/aPolWMATIC"

export function createaPolWMATICAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): aPolWMATICAccrueInterest {
  let aPolWmaticAccrueInterestEvent = changetype<aPolWMATICAccrueInterest>(
    newMockEvent()
  )

  aPolWmaticAccrueInterestEvent.parameters = new Array()

  aPolWmaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  aPolWmaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  aPolWmaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  aPolWmaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticAccrueInterestEvent
}

export function createaPolWMATICApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): aPolWMATICApproval {
  let aPolWmaticApprovalEvent = changetype<aPolWMATICApproval>(newMockEvent())

  aPolWmaticApprovalEvent.parameters = new Array()

  aPolWmaticApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  aPolWmaticApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  aPolWmaticApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWmaticApprovalEvent
}

export function createaPolWMATICBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWMATICBorrow {
  let aPolWmaticBorrowEvent = changetype<aPolWMATICBorrow>(newMockEvent())

  aPolWmaticBorrowEvent.parameters = new Array()

  aPolWmaticBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  aPolWmaticBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWmaticBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticBorrowEvent
}

export function createaPolWMATICFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): aPolWMATICFailure {
  let aPolWmaticFailureEvent = changetype<aPolWMATICFailure>(newMockEvent())

  aPolWmaticFailureEvent.parameters = new Array()

  aPolWmaticFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  aPolWmaticFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  aPolWmaticFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return aPolWmaticFailureEvent
}

export function createaPolWMATICLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): aPolWMATICLiquidateBorrow {
  let aPolWmaticLiquidateBorrowEvent = changetype<aPolWMATICLiquidateBorrow>(
    newMockEvent()
  )

  aPolWmaticLiquidateBorrowEvent.parameters = new Array()

  aPolWmaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  aPolWmaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWmaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  aPolWmaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return aPolWmaticLiquidateBorrowEvent
}

export function createaPolWMATICMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): aPolWMATICMint {
  let aPolWmaticMintEvent = changetype<aPolWMATICMint>(newMockEvent())

  aPolWmaticMintEvent.parameters = new Array()

  aPolWmaticMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  aPolWmaticMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  aPolWmaticMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return aPolWmaticMintEvent
}

export function createaPolWMATICNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): aPolWMATICNewAdmin {
  let aPolWmaticNewAdminEvent = changetype<aPolWMATICNewAdmin>(newMockEvent())

  aPolWmaticNewAdminEvent.parameters = new Array()

  aPolWmaticNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  aPolWmaticNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return aPolWmaticNewAdminEvent
}

export function createaPolWMATICNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): aPolWMATICNewComptroller {
  let aPolWmaticNewComptrollerEvent = changetype<aPolWMATICNewComptroller>(
    newMockEvent()
  )

  aPolWmaticNewComptrollerEvent.parameters = new Array()

  aPolWmaticNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  aPolWmaticNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return aPolWmaticNewComptrollerEvent
}

export function createaPolWMATICNewImplementationEvent(
  oldImplementation: Address,
  newImplementation: Address
): aPolWMATICNewImplementation {
  let aPolWmaticNewImplementationEvent = changetype<
    aPolWMATICNewImplementation
  >(newMockEvent())

  aPolWmaticNewImplementationEvent.parameters = new Array()

  aPolWmaticNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "oldImplementation",
      ethereum.Value.fromAddress(oldImplementation)
    )
  )
  aPolWmaticNewImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "newImplementation",
      ethereum.Value.fromAddress(newImplementation)
    )
  )

  return aPolWmaticNewImplementationEvent
}

export function createaPolWMATICNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): aPolWMATICNewMarketInterestRateModel {
  let aPolWmaticNewMarketInterestRateModelEvent = changetype<
    aPolWMATICNewMarketInterestRateModel
  >(newMockEvent())

  aPolWmaticNewMarketInterestRateModelEvent.parameters = new Array()

  aPolWmaticNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  aPolWmaticNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return aPolWmaticNewMarketInterestRateModelEvent
}

export function createaPolWMATICNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): aPolWMATICNewPendingAdmin {
  let aPolWmaticNewPendingAdminEvent = changetype<aPolWMATICNewPendingAdmin>(
    newMockEvent()
  )

  aPolWmaticNewPendingAdminEvent.parameters = new Array()

  aPolWmaticNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  aPolWmaticNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return aPolWmaticNewPendingAdminEvent
}

export function createaPolWMATICNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): aPolWMATICNewReserveFactor {
  let aPolWmaticNewReserveFactorEvent = changetype<aPolWMATICNewReserveFactor>(
    newMockEvent()
  )

  aPolWmaticNewReserveFactorEvent.parameters = new Array()

  aPolWmaticNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  aPolWmaticNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return aPolWmaticNewReserveFactorEvent
}

export function createaPolWMATICRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): aPolWMATICRedeem {
  let aPolWmaticRedeemEvent = changetype<aPolWMATICRedeem>(newMockEvent())

  aPolWmaticRedeemEvent.parameters = new Array()

  aPolWmaticRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  aPolWmaticRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  aPolWmaticRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return aPolWmaticRedeemEvent
}

export function createaPolWMATICRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): aPolWMATICRepayBorrow {
  let aPolWmaticRepayBorrowEvent = changetype<aPolWMATICRepayBorrow>(
    newMockEvent()
  )

  aPolWmaticRepayBorrowEvent.parameters = new Array()

  aPolWmaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  aPolWmaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  aPolWmaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  aPolWmaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  aPolWmaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return aPolWmaticRepayBorrowEvent
}

export function createaPolWMATICReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): aPolWMATICReservesAdded {
  let aPolWmaticReservesAddedEvent = changetype<aPolWMATICReservesAdded>(
    newMockEvent()
  )

  aPolWmaticReservesAddedEvent.parameters = new Array()

  aPolWmaticReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  aPolWmaticReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  aPolWmaticReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWmaticReservesAddedEvent
}

export function createaPolWMATICReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): aPolWMATICReservesReduced {
  let aPolWmaticReservesReducedEvent = changetype<aPolWMATICReservesReduced>(
    newMockEvent()
  )

  aPolWmaticReservesReducedEvent.parameters = new Array()

  aPolWmaticReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  aPolWmaticReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  aPolWmaticReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return aPolWmaticReservesReducedEvent
}

export function createaPolWMATICTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): aPolWMATICTransfer {
  let aPolWmaticTransferEvent = changetype<aPolWMATICTransfer>(newMockEvent())

  aPolWmaticTransferEvent.parameters = new Array()

  aPolWmaticTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  aPolWmaticTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  aPolWmaticTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return aPolWmaticTransferEvent
}
