import {
  aPolUSDTVDebtAccrueInterest as aPolUSDTVDebtAccrueInterestEvent,
  aPolUSDTVDebtApproval as aPolUSDTVDebtApprovalEvent,
  aPolUSDTVDebtBorrow as aPolUSDTVDebtBorrowEvent,
  aPolUSDTVDebtFailure as aPolUSDTVDebtFailureEvent,
  aPolUSDTVDebtLiquidateBorrow as aPolUSDTVDebtLiquidateBorrowEvent,
  aPolUSDTVDebtMint as aPolUSDTVDebtMintEvent,
  aPolUSDTVDebtNewAdmin as aPolUSDTVDebtNewAdminEvent,
  aPolUSDTVDebtNewComptroller as aPolUSDTVDebtNewComptrollerEvent,
  aPolUSDTVDebtNewImplementation as aPolUSDTVDebtNewImplementationEvent,
  aPolUSDTVDebtNewMarketInterestRateModel as aPolUSDTVDebtNewMarketInterestRateModelEvent,
  aPolUSDTVDebtNewPendingAdmin as aPolUSDTVDebtNewPendingAdminEvent,
  aPolUSDTVDebtNewReserveFactor as aPolUSDTVDebtNewReserveFactorEvent,
  aPolUSDTVDebtRedeem as aPolUSDTVDebtRedeemEvent,
  aPolUSDTVDebtRepayBorrow as aPolUSDTVDebtRepayBorrowEvent,
  aPolUSDTVDebtReservesAdded as aPolUSDTVDebtReservesAddedEvent,
  aPolUSDTVDebtReservesReduced as aPolUSDTVDebtReservesReducedEvent,
  aPolUSDTVDebtTransfer as aPolUSDTVDebtTransferEvent
} from "../generated/aPolUSDTVDebt/aPolUSDTVDebt"
import {
  aPolUSDTVDebtAccrueInterest,
  aPolUSDTVDebtApproval,
  aPolUSDTVDebtBorrow,
  aPolUSDTVDebtFailure,
  aPolUSDTVDebtLiquidateBorrow,
  aPolUSDTVDebtMint,
  aPolUSDTVDebtNewAdmin,
  aPolUSDTVDebtNewComptroller,
  aPolUSDTVDebtNewImplementation,
  aPolUSDTVDebtNewMarketInterestRateModel,
  aPolUSDTVDebtNewPendingAdmin,
  aPolUSDTVDebtNewReserveFactor,
  aPolUSDTVDebtRedeem,
  aPolUSDTVDebtRepayBorrow,
  aPolUSDTVDebtReservesAdded,
  aPolUSDTVDebtReservesReduced,
  aPolUSDTVDebtTransfer
} from "../generated/schema"

export function handleaPolUSDTVDebtAccrueInterest(
  event: aPolUSDTVDebtAccrueInterestEvent
): void {
  let entity = new aPolUSDTVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTVDebtApproval(
  event: aPolUSDTVDebtApprovalEvent
): void {
  let entity = new aPolUSDTVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolUSDTVDebtBorrow(
  event: aPolUSDTVDebtBorrowEvent
): void {
  let entity = new aPolUSDTVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTVDebtFailure(
  event: aPolUSDTVDebtFailureEvent
): void {
  let entity = new aPolUSDTVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolUSDTVDebtLiquidateBorrow(
  event: aPolUSDTVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolUSDTVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolUSDTVDebtMint(event: aPolUSDTVDebtMintEvent): void {
  let entity = new aPolUSDTVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolUSDTVDebtNewAdmin(
  event: aPolUSDTVDebtNewAdminEvent
): void {
  let entity = new aPolUSDTVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolUSDTVDebtNewComptroller(
  event: aPolUSDTVDebtNewComptrollerEvent
): void {
  let entity = new aPolUSDTVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolUSDTVDebtNewImplementation(
  event: aPolUSDTVDebtNewImplementationEvent
): void {
  let entity = new aPolUSDTVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolUSDTVDebtNewMarketInterestRateModel(
  event: aPolUSDTVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolUSDTVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolUSDTVDebtNewPendingAdmin(
  event: aPolUSDTVDebtNewPendingAdminEvent
): void {
  let entity = new aPolUSDTVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolUSDTVDebtNewReserveFactor(
  event: aPolUSDTVDebtNewReserveFactorEvent
): void {
  let entity = new aPolUSDTVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolUSDTVDebtRedeem(
  event: aPolUSDTVDebtRedeemEvent
): void {
  let entity = new aPolUSDTVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolUSDTVDebtRepayBorrow(
  event: aPolUSDTVDebtRepayBorrowEvent
): void {
  let entity = new aPolUSDTVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTVDebtReservesAdded(
  event: aPolUSDTVDebtReservesAddedEvent
): void {
  let entity = new aPolUSDTVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDTVDebtReservesReduced(
  event: aPolUSDTVDebtReservesReducedEvent
): void {
  let entity = new aPolUSDTVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDTVDebtTransfer(
  event: aPolUSDTVDebtTransferEvent
): void {
  let entity = new aPolUSDTVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
