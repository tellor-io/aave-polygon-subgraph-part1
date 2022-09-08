import {
  aPolUSDTAccrueInterest as aPolUSDTAccrueInterestEvent,
  aPolUSDTApproval as aPolUSDTApprovalEvent,
  aPolUSDTBorrow as aPolUSDTBorrowEvent,
  aPolUSDTFailure as aPolUSDTFailureEvent,
  aPolUSDTLiquidateBorrow as aPolUSDTLiquidateBorrowEvent,
  aPolUSDTMint as aPolUSDTMintEvent,
  aPolUSDTNewAdmin as aPolUSDTNewAdminEvent,
  aPolUSDTNewComptroller as aPolUSDTNewComptrollerEvent,
  aPolUSDTNewImplementation as aPolUSDTNewImplementationEvent,
  aPolUSDTNewMarketInterestRateModel as aPolUSDTNewMarketInterestRateModelEvent,
  aPolUSDTNewPendingAdmin as aPolUSDTNewPendingAdminEvent,
  aPolUSDTNewReserveFactor as aPolUSDTNewReserveFactorEvent,
  aPolUSDTRedeem as aPolUSDTRedeemEvent,
  aPolUSDTRepayBorrow as aPolUSDTRepayBorrowEvent,
  aPolUSDTReservesAdded as aPolUSDTReservesAddedEvent,
  aPolUSDTReservesReduced as aPolUSDTReservesReducedEvent,
  aPolUSDTTransfer as aPolUSDTTransferEvent
} from "../generated/aPolUSDT/aPolUSDT"
import {
  aPolUSDTAccrueInterest,
  aPolUSDTApproval,
  aPolUSDTBorrow,
  aPolUSDTFailure,
  aPolUSDTLiquidateBorrow,
  aPolUSDTMint,
  aPolUSDTNewAdmin,
  aPolUSDTNewComptroller,
  aPolUSDTNewImplementation,
  aPolUSDTNewMarketInterestRateModel,
  aPolUSDTNewPendingAdmin,
  aPolUSDTNewReserveFactor,
  aPolUSDTRedeem,
  aPolUSDTRepayBorrow,
  aPolUSDTReservesAdded,
  aPolUSDTReservesReduced,
  aPolUSDTTransfer
} from "../generated/schema"

export function handleaPolUSDTAccrueInterest(
  event: aPolUSDTAccrueInterestEvent
): void {
  let entity = new aPolUSDTAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTApproval(event: aPolUSDTApprovalEvent): void {
  let entity = new aPolUSDTApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolUSDTBorrow(event: aPolUSDTBorrowEvent): void {
  let entity = new aPolUSDTBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTFailure(event: aPolUSDTFailureEvent): void {
  let entity = new aPolUSDTFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolUSDTLiquidateBorrow(
  event: aPolUSDTLiquidateBorrowEvent
): void {
  let entity = new aPolUSDTLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolUSDTMint(event: aPolUSDTMintEvent): void {
  let entity = new aPolUSDTMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolUSDTNewAdmin(event: aPolUSDTNewAdminEvent): void {
  let entity = new aPolUSDTNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolUSDTNewComptroller(
  event: aPolUSDTNewComptrollerEvent
): void {
  let entity = new aPolUSDTNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolUSDTNewImplementation(
  event: aPolUSDTNewImplementationEvent
): void {
  let entity = new aPolUSDTNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolUSDTNewMarketInterestRateModel(
  event: aPolUSDTNewMarketInterestRateModelEvent
): void {
  let entity = new aPolUSDTNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolUSDTNewPendingAdmin(
  event: aPolUSDTNewPendingAdminEvent
): void {
  let entity = new aPolUSDTNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolUSDTNewReserveFactor(
  event: aPolUSDTNewReserveFactorEvent
): void {
  let entity = new aPolUSDTNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolUSDTRedeem(event: aPolUSDTRedeemEvent): void {
  let entity = new aPolUSDTRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolUSDTRepayBorrow(
  event: aPolUSDTRepayBorrowEvent
): void {
  let entity = new aPolUSDTRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTReservesAdded(
  event: aPolUSDTReservesAddedEvent
): void {
  let entity = new aPolUSDTReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDTReservesReduced(
  event: aPolUSDTReservesReducedEvent
): void {
  let entity = new aPolUSDTReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDTTransfer(event: aPolUSDTTransferEvent): void {
  let entity = new aPolUSDTTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
