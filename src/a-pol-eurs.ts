import {
  aPolEURSAccrueInterest as aPolEURSAccrueInterestEvent,
  aPolEURSApproval as aPolEURSApprovalEvent,
  aPolEURSBorrow as aPolEURSBorrowEvent,
  aPolEURSFailure as aPolEURSFailureEvent,
  aPolEURSLiquidateBorrow as aPolEURSLiquidateBorrowEvent,
  aPolEURSMint as aPolEURSMintEvent,
  aPolEURSNewAdmin as aPolEURSNewAdminEvent,
  aPolEURSNewComptroller as aPolEURSNewComptrollerEvent,
  aPolEURSNewImplementation as aPolEURSNewImplementationEvent,
  aPolEURSNewMarketInterestRateModel as aPolEURSNewMarketInterestRateModelEvent,
  aPolEURSNewPendingAdmin as aPolEURSNewPendingAdminEvent,
  aPolEURSNewReserveFactor as aPolEURSNewReserveFactorEvent,
  aPolEURSRedeem as aPolEURSRedeemEvent,
  aPolEURSRepayBorrow as aPolEURSRepayBorrowEvent,
  aPolEURSReservesAdded as aPolEURSReservesAddedEvent,
  aPolEURSReservesReduced as aPolEURSReservesReducedEvent,
  aPolEURSTransfer as aPolEURSTransferEvent
} from "../generated/aPolEURS/aPolEURS"
import {
  aPolEURSAccrueInterest,
  aPolEURSApproval,
  aPolEURSBorrow,
  aPolEURSFailure,
  aPolEURSLiquidateBorrow,
  aPolEURSMint,
  aPolEURSNewAdmin,
  aPolEURSNewComptroller,
  aPolEURSNewImplementation,
  aPolEURSNewMarketInterestRateModel,
  aPolEURSNewPendingAdmin,
  aPolEURSNewReserveFactor,
  aPolEURSRedeem,
  aPolEURSRepayBorrow,
  aPolEURSReservesAdded,
  aPolEURSReservesReduced,
  aPolEURSTransfer
} from "../generated/schema"

export function handleaPolEURSAccrueInterest(
  event: aPolEURSAccrueInterestEvent
): void {
  let entity = new aPolEURSAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolEURSApproval(event: aPolEURSApprovalEvent): void {
  let entity = new aPolEURSApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolEURSBorrow(event: aPolEURSBorrowEvent): void {
  let entity = new aPolEURSBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolEURSFailure(event: aPolEURSFailureEvent): void {
  let entity = new aPolEURSFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolEURSLiquidateBorrow(
  event: aPolEURSLiquidateBorrowEvent
): void {
  let entity = new aPolEURSLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolEURSMint(event: aPolEURSMintEvent): void {
  let entity = new aPolEURSMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolEURSNewAdmin(event: aPolEURSNewAdminEvent): void {
  let entity = new aPolEURSNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolEURSNewComptroller(
  event: aPolEURSNewComptrollerEvent
): void {
  let entity = new aPolEURSNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolEURSNewImplementation(
  event: aPolEURSNewImplementationEvent
): void {
  let entity = new aPolEURSNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolEURSNewMarketInterestRateModel(
  event: aPolEURSNewMarketInterestRateModelEvent
): void {
  let entity = new aPolEURSNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolEURSNewPendingAdmin(
  event: aPolEURSNewPendingAdminEvent
): void {
  let entity = new aPolEURSNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolEURSNewReserveFactor(
  event: aPolEURSNewReserveFactorEvent
): void {
  let entity = new aPolEURSNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolEURSRedeem(event: aPolEURSRedeemEvent): void {
  let entity = new aPolEURSRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolEURSRepayBorrow(
  event: aPolEURSRepayBorrowEvent
): void {
  let entity = new aPolEURSRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolEURSReservesAdded(
  event: aPolEURSReservesAddedEvent
): void {
  let entity = new aPolEURSReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolEURSReservesReduced(
  event: aPolEURSReservesReducedEvent
): void {
  let entity = new aPolEURSReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolEURSTransfer(event: aPolEURSTransferEvent): void {
  let entity = new aPolEURSTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
