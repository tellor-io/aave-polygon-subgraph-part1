import {
  aPolUSDCSDebtAccrueInterest as aPolUSDCSDebtAccrueInterestEvent,
  aPolUSDCSDebtApproval as aPolUSDCSDebtApprovalEvent,
  aPolUSDCSDebtBorrow as aPolUSDCSDebtBorrowEvent,
  aPolUSDCSDebtFailure as aPolUSDCSDebtFailureEvent,
  aPolUSDCSDebtLiquidateBorrow as aPolUSDCSDebtLiquidateBorrowEvent,
  aPolUSDCSDebtMint as aPolUSDCSDebtMintEvent,
  aPolUSDCSDebtNewAdmin as aPolUSDCSDebtNewAdminEvent,
  aPolUSDCSDebtNewComptroller as aPolUSDCSDebtNewComptrollerEvent,
  aPolUSDCSDebtNewImplementation as aPolUSDCSDebtNewImplementationEvent,
  aPolUSDCSDebtNewMarketInterestRateModel as aPolUSDCSDebtNewMarketInterestRateModelEvent,
  aPolUSDCSDebtNewPendingAdmin as aPolUSDCSDebtNewPendingAdminEvent,
  aPolUSDCSDebtNewReserveFactor as aPolUSDCSDebtNewReserveFactorEvent,
  aPolUSDCSDebtRedeem as aPolUSDCSDebtRedeemEvent,
  aPolUSDCSDebtRepayBorrow as aPolUSDCSDebtRepayBorrowEvent,
  aPolUSDCSDebtReservesAdded as aPolUSDCSDebtReservesAddedEvent,
  aPolUSDCSDebtReservesReduced as aPolUSDCSDebtReservesReducedEvent,
  aPolUSDCSDebtTransfer as aPolUSDCSDebtTransferEvent
} from "../generated/aPolUSDCSDebt/aPolUSDCSDebt"
import {
  aPolUSDCSDebtAccrueInterest,
  aPolUSDCSDebtApproval,
  aPolUSDCSDebtBorrow,
  aPolUSDCSDebtFailure,
  aPolUSDCSDebtLiquidateBorrow,
  aPolUSDCSDebtMint,
  aPolUSDCSDebtNewAdmin,
  aPolUSDCSDebtNewComptroller,
  aPolUSDCSDebtNewImplementation,
  aPolUSDCSDebtNewMarketInterestRateModel,
  aPolUSDCSDebtNewPendingAdmin,
  aPolUSDCSDebtNewReserveFactor,
  aPolUSDCSDebtRedeem,
  aPolUSDCSDebtRepayBorrow,
  aPolUSDCSDebtReservesAdded,
  aPolUSDCSDebtReservesReduced,
  aPolUSDCSDebtTransfer
} from "../generated/schema"

export function handleaPolUSDCSDebtAccrueInterest(
  event: aPolUSDCSDebtAccrueInterestEvent
): void {
  let entity = new aPolUSDCSDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCSDebtApproval(
  event: aPolUSDCSDebtApprovalEvent
): void {
  let entity = new aPolUSDCSDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolUSDCSDebtBorrow(
  event: aPolUSDCSDebtBorrowEvent
): void {
  let entity = new aPolUSDCSDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCSDebtFailure(
  event: aPolUSDCSDebtFailureEvent
): void {
  let entity = new aPolUSDCSDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolUSDCSDebtLiquidateBorrow(
  event: aPolUSDCSDebtLiquidateBorrowEvent
): void {
  let entity = new aPolUSDCSDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolUSDCSDebtMint(event: aPolUSDCSDebtMintEvent): void {
  let entity = new aPolUSDCSDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolUSDCSDebtNewAdmin(
  event: aPolUSDCSDebtNewAdminEvent
): void {
  let entity = new aPolUSDCSDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolUSDCSDebtNewComptroller(
  event: aPolUSDCSDebtNewComptrollerEvent
): void {
  let entity = new aPolUSDCSDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolUSDCSDebtNewImplementation(
  event: aPolUSDCSDebtNewImplementationEvent
): void {
  let entity = new aPolUSDCSDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolUSDCSDebtNewMarketInterestRateModel(
  event: aPolUSDCSDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolUSDCSDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolUSDCSDebtNewPendingAdmin(
  event: aPolUSDCSDebtNewPendingAdminEvent
): void {
  let entity = new aPolUSDCSDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolUSDCSDebtNewReserveFactor(
  event: aPolUSDCSDebtNewReserveFactorEvent
): void {
  let entity = new aPolUSDCSDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolUSDCSDebtRedeem(
  event: aPolUSDCSDebtRedeemEvent
): void {
  let entity = new aPolUSDCSDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolUSDCSDebtRepayBorrow(
  event: aPolUSDCSDebtRepayBorrowEvent
): void {
  let entity = new aPolUSDCSDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCSDebtReservesAdded(
  event: aPolUSDCSDebtReservesAddedEvent
): void {
  let entity = new aPolUSDCSDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDCSDebtReservesReduced(
  event: aPolUSDCSDebtReservesReducedEvent
): void {
  let entity = new aPolUSDCSDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDCSDebtTransfer(
  event: aPolUSDCSDebtTransferEvent
): void {
  let entity = new aPolUSDCSDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
