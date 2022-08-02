import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CEther_hMATICAccrueInterest,
  CEther_hMATICApproval,
  CEther_hMATICBorrow,
  CEther_hMATICFailure,
  CEther_hMATICLiquidateBorrow,
  CEther_hMATICMint,
  CEther_hMATICNewAdmin,
  CEther_hMATICNewComptroller,
  CEther_hMATICNewMarketInterestRateModel,
  CEther_hMATICNewPendingAdmin,
  CEther_hMATICNewReserveFactor,
  CEther_hMATICRedeem,
  CEther_hMATICRepayBorrow,
  CEther_hMATICReservesAdded,
  CEther_hMATICReservesReduced,
  CEther_hMATICTransfer
} from "../generated/CEther_hMATIC/CEther_hMATIC"

export function createCEther_hMATICAccrueInterestEvent(
  cashPrior: BigInt,
  interestAccumulated: BigInt,
  borrowIndex: BigInt,
  totalBorrows: BigInt
): CEther_hMATICAccrueInterest {
  let cEtherHMaticAccrueInterestEvent = changetype<CEther_hMATICAccrueInterest>(
    newMockEvent()
  )

  cEtherHMaticAccrueInterestEvent.parameters = new Array()

  cEtherHMaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "cashPrior",
      ethereum.Value.fromUnsignedBigInt(cashPrior)
    )
  )
  cEtherHMaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "interestAccumulated",
      ethereum.Value.fromUnsignedBigInt(interestAccumulated)
    )
  )
  cEtherHMaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "borrowIndex",
      ethereum.Value.fromUnsignedBigInt(borrowIndex)
    )
  )
  cEtherHMaticAccrueInterestEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cEtherHMaticAccrueInterestEvent
}

export function createCEther_hMATICApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
): CEther_hMATICApproval {
  let cEtherHMaticApprovalEvent = changetype<CEther_hMATICApproval>(
    newMockEvent()
  )

  cEtherHMaticApprovalEvent.parameters = new Array()

  cEtherHMaticApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  cEtherHMaticApprovalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  cEtherHMaticApprovalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cEtherHMaticApprovalEvent
}

export function createCEther_hMATICBorrowEvent(
  borrower: Address,
  borrowAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CEther_hMATICBorrow {
  let cEtherHMaticBorrowEvent = changetype<CEther_hMATICBorrow>(newMockEvent())

  cEtherHMaticBorrowEvent.parameters = new Array()

  cEtherHMaticBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cEtherHMaticBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  cEtherHMaticBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cEtherHMaticBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cEtherHMaticBorrowEvent
}

export function createCEther_hMATICFailureEvent(
  error: BigInt,
  info: BigInt,
  detail: BigInt
): CEther_hMATICFailure {
  let cEtherHMaticFailureEvent = changetype<CEther_hMATICFailure>(
    newMockEvent()
  )

  cEtherHMaticFailureEvent.parameters = new Array()

  cEtherHMaticFailureEvent.parameters.push(
    new ethereum.EventParam("error", ethereum.Value.fromUnsignedBigInt(error))
  )
  cEtherHMaticFailureEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromUnsignedBigInt(info))
  )
  cEtherHMaticFailureEvent.parameters.push(
    new ethereum.EventParam("detail", ethereum.Value.fromUnsignedBigInt(detail))
  )

  return cEtherHMaticFailureEvent
}

export function createCEther_hMATICLiquidateBorrowEvent(
  liquidator: Address,
  borrower: Address,
  repayAmount: BigInt,
  cTokenCollateral: Address,
  seizeTokens: BigInt
): CEther_hMATICLiquidateBorrow {
  let cEtherHMaticLiquidateBorrowEvent = changetype<
    CEther_hMATICLiquidateBorrow
  >(newMockEvent())

  cEtherHMaticLiquidateBorrowEvent.parameters = new Array()

  cEtherHMaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  cEtherHMaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cEtherHMaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cEtherHMaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "cTokenCollateral",
      ethereum.Value.fromAddress(cTokenCollateral)
    )
  )
  cEtherHMaticLiquidateBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "seizeTokens",
      ethereum.Value.fromUnsignedBigInt(seizeTokens)
    )
  )

  return cEtherHMaticLiquidateBorrowEvent
}

export function createCEther_hMATICMintEvent(
  minter: Address,
  mintAmount: BigInt,
  mintTokens: BigInt
): CEther_hMATICMint {
  let cEtherHMaticMintEvent = changetype<CEther_hMATICMint>(newMockEvent())

  cEtherHMaticMintEvent.parameters = new Array()

  cEtherHMaticMintEvent.parameters.push(
    new ethereum.EventParam("minter", ethereum.Value.fromAddress(minter))
  )
  cEtherHMaticMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintAmount",
      ethereum.Value.fromUnsignedBigInt(mintAmount)
    )
  )
  cEtherHMaticMintEvent.parameters.push(
    new ethereum.EventParam(
      "mintTokens",
      ethereum.Value.fromUnsignedBigInt(mintTokens)
    )
  )

  return cEtherHMaticMintEvent
}

export function createCEther_hMATICNewAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): CEther_hMATICNewAdmin {
  let cEtherHMaticNewAdminEvent = changetype<CEther_hMATICNewAdmin>(
    newMockEvent()
  )

  cEtherHMaticNewAdminEvent.parameters = new Array()

  cEtherHMaticNewAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  cEtherHMaticNewAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return cEtherHMaticNewAdminEvent
}

export function createCEther_hMATICNewComptrollerEvent(
  oldComptroller: Address,
  newComptroller: Address
): CEther_hMATICNewComptroller {
  let cEtherHMaticNewComptrollerEvent = changetype<CEther_hMATICNewComptroller>(
    newMockEvent()
  )

  cEtherHMaticNewComptrollerEvent.parameters = new Array()

  cEtherHMaticNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "oldComptroller",
      ethereum.Value.fromAddress(oldComptroller)
    )
  )
  cEtherHMaticNewComptrollerEvent.parameters.push(
    new ethereum.EventParam(
      "newComptroller",
      ethereum.Value.fromAddress(newComptroller)
    )
  )

  return cEtherHMaticNewComptrollerEvent
}

export function createCEther_hMATICNewMarketInterestRateModelEvent(
  oldInterestRateModel: Address,
  newInterestRateModel: Address
): CEther_hMATICNewMarketInterestRateModel {
  let cEtherHMaticNewMarketInterestRateModelEvent = changetype<
    CEther_hMATICNewMarketInterestRateModel
  >(newMockEvent())

  cEtherHMaticNewMarketInterestRateModelEvent.parameters = new Array()

  cEtherHMaticNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRateModel",
      ethereum.Value.fromAddress(oldInterestRateModel)
    )
  )
  cEtherHMaticNewMarketInterestRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRateModel",
      ethereum.Value.fromAddress(newInterestRateModel)
    )
  )

  return cEtherHMaticNewMarketInterestRateModelEvent
}

export function createCEther_hMATICNewPendingAdminEvent(
  oldPendingAdmin: Address,
  newPendingAdmin: Address
): CEther_hMATICNewPendingAdmin {
  let cEtherHMaticNewPendingAdminEvent = changetype<
    CEther_hMATICNewPendingAdmin
  >(newMockEvent())

  cEtherHMaticNewPendingAdminEvent.parameters = new Array()

  cEtherHMaticNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "oldPendingAdmin",
      ethereum.Value.fromAddress(oldPendingAdmin)
    )
  )
  cEtherHMaticNewPendingAdminEvent.parameters.push(
    new ethereum.EventParam(
      "newPendingAdmin",
      ethereum.Value.fromAddress(newPendingAdmin)
    )
  )

  return cEtherHMaticNewPendingAdminEvent
}

export function createCEther_hMATICNewReserveFactorEvent(
  oldReserveFactorMantissa: BigInt,
  newReserveFactorMantissa: BigInt
): CEther_hMATICNewReserveFactor {
  let cEtherHMaticNewReserveFactorEvent = changetype<
    CEther_hMATICNewReserveFactor
  >(newMockEvent())

  cEtherHMaticNewReserveFactorEvent.parameters = new Array()

  cEtherHMaticNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "oldReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(oldReserveFactorMantissa)
    )
  )
  cEtherHMaticNewReserveFactorEvent.parameters.push(
    new ethereum.EventParam(
      "newReserveFactorMantissa",
      ethereum.Value.fromUnsignedBigInt(newReserveFactorMantissa)
    )
  )

  return cEtherHMaticNewReserveFactorEvent
}

export function createCEther_hMATICRedeemEvent(
  redeemer: Address,
  redeemAmount: BigInt,
  redeemTokens: BigInt
): CEther_hMATICRedeem {
  let cEtherHMaticRedeemEvent = changetype<CEther_hMATICRedeem>(newMockEvent())

  cEtherHMaticRedeemEvent.parameters = new Array()

  cEtherHMaticRedeemEvent.parameters.push(
    new ethereum.EventParam("redeemer", ethereum.Value.fromAddress(redeemer))
  )
  cEtherHMaticRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemAmount",
      ethereum.Value.fromUnsignedBigInt(redeemAmount)
    )
  )
  cEtherHMaticRedeemEvent.parameters.push(
    new ethereum.EventParam(
      "redeemTokens",
      ethereum.Value.fromUnsignedBigInt(redeemTokens)
    )
  )

  return cEtherHMaticRedeemEvent
}

export function createCEther_hMATICRepayBorrowEvent(
  payer: Address,
  borrower: Address,
  repayAmount: BigInt,
  accountBorrows: BigInt,
  totalBorrows: BigInt
): CEther_hMATICRepayBorrow {
  let cEtherHMaticRepayBorrowEvent = changetype<CEther_hMATICRepayBorrow>(
    newMockEvent()
  )

  cEtherHMaticRepayBorrowEvent.parameters = new Array()

  cEtherHMaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer))
  )
  cEtherHMaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower))
  )
  cEtherHMaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "repayAmount",
      ethereum.Value.fromUnsignedBigInt(repayAmount)
    )
  )
  cEtherHMaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "accountBorrows",
      ethereum.Value.fromUnsignedBigInt(accountBorrows)
    )
  )
  cEtherHMaticRepayBorrowEvent.parameters.push(
    new ethereum.EventParam(
      "totalBorrows",
      ethereum.Value.fromUnsignedBigInt(totalBorrows)
    )
  )

  return cEtherHMaticRepayBorrowEvent
}

export function createCEther_hMATICReservesAddedEvent(
  benefactor: Address,
  addAmount: BigInt,
  newTotalReserves: BigInt
): CEther_hMATICReservesAdded {
  let cEtherHMaticReservesAddedEvent = changetype<CEther_hMATICReservesAdded>(
    newMockEvent()
  )

  cEtherHMaticReservesAddedEvent.parameters = new Array()

  cEtherHMaticReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "benefactor",
      ethereum.Value.fromAddress(benefactor)
    )
  )
  cEtherHMaticReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addAmount",
      ethereum.Value.fromUnsignedBigInt(addAmount)
    )
  )
  cEtherHMaticReservesAddedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cEtherHMaticReservesAddedEvent
}

export function createCEther_hMATICReservesReducedEvent(
  admin: Address,
  reduceAmount: BigInt,
  newTotalReserves: BigInt
): CEther_hMATICReservesReduced {
  let cEtherHMaticReservesReducedEvent = changetype<
    CEther_hMATICReservesReduced
  >(newMockEvent())

  cEtherHMaticReservesReducedEvent.parameters = new Array()

  cEtherHMaticReservesReducedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  cEtherHMaticReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "reduceAmount",
      ethereum.Value.fromUnsignedBigInt(reduceAmount)
    )
  )
  cEtherHMaticReservesReducedEvent.parameters.push(
    new ethereum.EventParam(
      "newTotalReserves",
      ethereum.Value.fromUnsignedBigInt(newTotalReserves)
    )
  )

  return cEtherHMaticReservesReducedEvent
}

export function createCEther_hMATICTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
): CEther_hMATICTransfer {
  let cEtherHMaticTransferEvent = changetype<CEther_hMATICTransfer>(
    newMockEvent()
  )

  cEtherHMaticTransferEvent.parameters = new Array()

  cEtherHMaticTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  cEtherHMaticTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  cEtherHMaticTransferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return cEtherHMaticTransferEvent
}
