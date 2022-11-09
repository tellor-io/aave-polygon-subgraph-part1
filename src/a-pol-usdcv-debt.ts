import {
  aPolUSDCVDebtAccrueInterest as aPolUSDCVDebtAccrueInterestEvent,
  aPolUSDCVDebtApproval as aPolUSDCVDebtApprovalEvent,
  aPolUSDCVDebtBorrow as aPolUSDCVDebtBorrowEvent,
  aPolUSDCVDebtFailure as aPolUSDCVDebtFailureEvent,
  aPolUSDCVDebtLiquidateBorrow as aPolUSDCVDebtLiquidateBorrowEvent,
  aPolUSDCVDebtMint as aPolUSDCVDebtMintEvent,
  aPolUSDCVDebtNewAdmin as aPolUSDCVDebtNewAdminEvent,
  aPolUSDCVDebtNewComptroller as aPolUSDCVDebtNewComptrollerEvent,
  aPolUSDCVDebtNewImplementation as aPolUSDCVDebtNewImplementationEvent,
  aPolUSDCVDebtNewMarketInterestRateModel as aPolUSDCVDebtNewMarketInterestRateModelEvent,
  aPolUSDCVDebtNewPendingAdmin as aPolUSDCVDebtNewPendingAdminEvent,
  aPolUSDCVDebtNewReserveFactor as aPolUSDCVDebtNewReserveFactorEvent,
  aPolUSDCVDebtRedeem as aPolUSDCVDebtRedeemEvent,
  aPolUSDCVDebtRepayBorrow as aPolUSDCVDebtRepayBorrowEvent,
  aPolUSDCVDebtReservesAdded as aPolUSDCVDebtReservesAddedEvent,
  aPolUSDCVDebtReservesReduced as aPolUSDCVDebtReservesReducedEvent,
  aPolUSDCVDebtTransfer as aPolUSDCVDebtTransferEvent
} from "../generated/aPolUSDCVDebt/aPolUSDCVDebt"
import {
  aPolUSDCVDebtAccrueInterest,
  aPolUSDCVDebtApproval,
  aPolUSDCVDebtBorrow,
  aPolUSDCVDebtFailure,
  aPolUSDCVDebtLiquidateBorrow,
  aPolUSDCVDebtMint,
  aPolUSDCVDebtNewAdmin,
  aPolUSDCVDebtNewComptroller,
  aPolUSDCVDebtNewImplementation,
  aPolUSDCVDebtNewMarketInterestRateModel,
  aPolUSDCVDebtNewPendingAdmin,
  aPolUSDCVDebtNewReserveFactor,
  aPolUSDCVDebtRedeem,
  aPolUSDCVDebtRepayBorrow,
  aPolUSDCVDebtReservesAdded,
  aPolUSDCVDebtReservesReduced,
  aPolUSDCVDebtTransfer
} from "../generated/schema"

export function handleaPolUSDCVDebtAccrueInterest(
  event: aPolUSDCVDebtAccrueInterestEvent
): void {
  let entity = new aPolUSDCVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCVDebtApproval(
  event: aPolUSDCVDebtApprovalEvent
): void {
  let entity = new aPolUSDCVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolUSDCVDebtBorrow(
  event: aPolUSDCVDebtBorrowEvent
): void {
  let entity = new aPolUSDCVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCVDebtFailure(
  event: aPolUSDCVDebtFailureEvent
): void {
  let entity = new aPolUSDCVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolUSDCVDebtLiquidateBorrow(
  event: aPolUSDCVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolUSDCVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolUSDCVDebtMint(event: aPolUSDCVDebtMintEvent): void {
  let entity = new aPolUSDCVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolUSDCVDebtNewAdmin(
  event: aPolUSDCVDebtNewAdminEvent
): void {
  let entity = new aPolUSDCVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolUSDCVDebtNewComptroller(
  event: aPolUSDCVDebtNewComptrollerEvent
): void {
  let entity = new aPolUSDCVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolUSDCVDebtNewImplementation(
  event: aPolUSDCVDebtNewImplementationEvent
): void {
  let entity = new aPolUSDCVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolUSDCVDebtNewMarketInterestRateModel(
  event: aPolUSDCVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolUSDCVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolUSDCVDebtNewPendingAdmin(
  event: aPolUSDCVDebtNewPendingAdminEvent
): void {
  let entity = new aPolUSDCVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolUSDCVDebtNewReserveFactor(
  event: aPolUSDCVDebtNewReserveFactorEvent
): void {
  let entity = new aPolUSDCVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolUSDCVDebtRedeem(
  event: aPolUSDCVDebtRedeemEvent
): void {
  let entity = new aPolUSDCVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolUSDCVDebtRepayBorrow(
  event: aPolUSDCVDebtRepayBorrowEvent
): void {
  let entity = new aPolUSDCVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCVDebtReservesAdded(
  event: aPolUSDCVDebtReservesAddedEvent
): void {
  let entity = new aPolUSDCVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDCVDebtReservesReduced(
  event: aPolUSDCVDebtReservesReducedEvent
): void {
  let entity = new aPolUSDCVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDCVDebtTransfer(
  event: aPolUSDCVDebtTransferEvent
): void {
  let entity = new aPolUSDCVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
