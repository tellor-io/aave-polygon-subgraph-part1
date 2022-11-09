import {
  aPolAGEURVDebtAccrueInterest as aPolAGEURVDebtAccrueInterestEvent,
  aPolAGEURVDebtApproval as aPolAGEURVDebtApprovalEvent,
  aPolAGEURVDebtBorrow as aPolAGEURVDebtBorrowEvent,
  aPolAGEURVDebtFailure as aPolAGEURVDebtFailureEvent,
  aPolAGEURVDebtLiquidateBorrow as aPolAGEURVDebtLiquidateBorrowEvent,
  aPolAGEURVDebtMint as aPolAGEURVDebtMintEvent,
  aPolAGEURVDebtNewAdmin as aPolAGEURVDebtNewAdminEvent,
  aPolAGEURVDebtNewComptroller as aPolAGEURVDebtNewComptrollerEvent,
  aPolAGEURVDebtNewImplementation as aPolAGEURVDebtNewImplementationEvent,
  aPolAGEURVDebtNewMarketInterestRateModel as aPolAGEURVDebtNewMarketInterestRateModelEvent,
  aPolAGEURVDebtNewPendingAdmin as aPolAGEURVDebtNewPendingAdminEvent,
  aPolAGEURVDebtNewReserveFactor as aPolAGEURVDebtNewReserveFactorEvent,
  aPolAGEURVDebtRedeem as aPolAGEURVDebtRedeemEvent,
  aPolAGEURVDebtRepayBorrow as aPolAGEURVDebtRepayBorrowEvent,
  aPolAGEURVDebtReservesAdded as aPolAGEURVDebtReservesAddedEvent,
  aPolAGEURVDebtReservesReduced as aPolAGEURVDebtReservesReducedEvent,
  aPolAGEURVDebtTransfer as aPolAGEURVDebtTransferEvent
} from "../generated/aPolAGEURVDebt/aPolAGEURVDebt"
import {
  aPolAGEURVDebtAccrueInterest,
  aPolAGEURVDebtApproval,
  aPolAGEURVDebtBorrow,
  aPolAGEURVDebtFailure,
  aPolAGEURVDebtLiquidateBorrow,
  aPolAGEURVDebtMint,
  aPolAGEURVDebtNewAdmin,
  aPolAGEURVDebtNewComptroller,
  aPolAGEURVDebtNewImplementation,
  aPolAGEURVDebtNewMarketInterestRateModel,
  aPolAGEURVDebtNewPendingAdmin,
  aPolAGEURVDebtNewReserveFactor,
  aPolAGEURVDebtRedeem,
  aPolAGEURVDebtRepayBorrow,
  aPolAGEURVDebtReservesAdded,
  aPolAGEURVDebtReservesReduced,
  aPolAGEURVDebtTransfer
} from "../generated/schema"

export function handleaPolAGEURVDebtAccrueInterest(
  event: aPolAGEURVDebtAccrueInterestEvent
): void {
  let entity = new aPolAGEURVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURVDebtApproval(
  event: aPolAGEURVDebtApprovalEvent
): void {
  let entity = new aPolAGEURVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolAGEURVDebtBorrow(
  event: aPolAGEURVDebtBorrowEvent
): void {
  let entity = new aPolAGEURVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURVDebtFailure(
  event: aPolAGEURVDebtFailureEvent
): void {
  let entity = new aPolAGEURVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolAGEURVDebtLiquidateBorrow(
  event: aPolAGEURVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolAGEURVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolAGEURVDebtMint(event: aPolAGEURVDebtMintEvent): void {
  let entity = new aPolAGEURVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolAGEURVDebtNewAdmin(
  event: aPolAGEURVDebtNewAdminEvent
): void {
  let entity = new aPolAGEURVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolAGEURVDebtNewComptroller(
  event: aPolAGEURVDebtNewComptrollerEvent
): void {
  let entity = new aPolAGEURVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolAGEURVDebtNewImplementation(
  event: aPolAGEURVDebtNewImplementationEvent
): void {
  let entity = new aPolAGEURVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolAGEURVDebtNewMarketInterestRateModel(
  event: aPolAGEURVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolAGEURVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolAGEURVDebtNewPendingAdmin(
  event: aPolAGEURVDebtNewPendingAdminEvent
): void {
  let entity = new aPolAGEURVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolAGEURVDebtNewReserveFactor(
  event: aPolAGEURVDebtNewReserveFactorEvent
): void {
  let entity = new aPolAGEURVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolAGEURVDebtRedeem(
  event: aPolAGEURVDebtRedeemEvent
): void {
  let entity = new aPolAGEURVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolAGEURVDebtRepayBorrow(
  event: aPolAGEURVDebtRepayBorrowEvent
): void {
  let entity = new aPolAGEURVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURVDebtReservesAdded(
  event: aPolAGEURVDebtReservesAddedEvent
): void {
  let entity = new aPolAGEURVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolAGEURVDebtReservesReduced(
  event: aPolAGEURVDebtReservesReducedEvent
): void {
  let entity = new aPolAGEURVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolAGEURVDebtTransfer(
  event: aPolAGEURVDebtTransferEvent
): void {
  let entity = new aPolAGEURVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
