import {
  aPolWETHVDebtAccrueInterest as aPolWETHVDebtAccrueInterestEvent,
  aPolWETHVDebtApproval as aPolWETHVDebtApprovalEvent,
  aPolWETHVDebtBorrow as aPolWETHVDebtBorrowEvent,
  aPolWETHVDebtFailure as aPolWETHVDebtFailureEvent,
  aPolWETHVDebtLiquidateBorrow as aPolWETHVDebtLiquidateBorrowEvent,
  aPolWETHVDebtMint as aPolWETHVDebtMintEvent,
  aPolWETHVDebtNewAdmin as aPolWETHVDebtNewAdminEvent,
  aPolWETHVDebtNewComptroller as aPolWETHVDebtNewComptrollerEvent,
  aPolWETHVDebtNewImplementation as aPolWETHVDebtNewImplementationEvent,
  aPolWETHVDebtNewMarketInterestRateModel as aPolWETHVDebtNewMarketInterestRateModelEvent,
  aPolWETHVDebtNewPendingAdmin as aPolWETHVDebtNewPendingAdminEvent,
  aPolWETHVDebtNewReserveFactor as aPolWETHVDebtNewReserveFactorEvent,
  aPolWETHVDebtRedeem as aPolWETHVDebtRedeemEvent,
  aPolWETHVDebtRepayBorrow as aPolWETHVDebtRepayBorrowEvent,
  aPolWETHVDebtReservesAdded as aPolWETHVDebtReservesAddedEvent,
  aPolWETHVDebtReservesReduced as aPolWETHVDebtReservesReducedEvent,
  aPolWETHVDebtTransfer as aPolWETHVDebtTransferEvent
} from "../generated/aPolWETHVDebt/aPolWETHVDebt"
import {
  aPolWETHVDebtAccrueInterest,
  aPolWETHVDebtApproval,
  aPolWETHVDebtBorrow,
  aPolWETHVDebtFailure,
  aPolWETHVDebtLiquidateBorrow,
  aPolWETHVDebtMint,
  aPolWETHVDebtNewAdmin,
  aPolWETHVDebtNewComptroller,
  aPolWETHVDebtNewImplementation,
  aPolWETHVDebtNewMarketInterestRateModel,
  aPolWETHVDebtNewPendingAdmin,
  aPolWETHVDebtNewReserveFactor,
  aPolWETHVDebtRedeem,
  aPolWETHVDebtRepayBorrow,
  aPolWETHVDebtReservesAdded,
  aPolWETHVDebtReservesReduced,
  aPolWETHVDebtTransfer
} from "../generated/schema"

export function handleaPolWETHVDebtAccrueInterest(
  event: aPolWETHVDebtAccrueInterestEvent
): void {
  let entity = new aPolWETHVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHVDebtApproval(
  event: aPolWETHVDebtApprovalEvent
): void {
  let entity = new aPolWETHVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWETHVDebtBorrow(
  event: aPolWETHVDebtBorrowEvent
): void {
  let entity = new aPolWETHVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHVDebtFailure(
  event: aPolWETHVDebtFailureEvent
): void {
  let entity = new aPolWETHVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWETHVDebtLiquidateBorrow(
  event: aPolWETHVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolWETHVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWETHVDebtMint(event: aPolWETHVDebtMintEvent): void {
  let entity = new aPolWETHVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWETHVDebtNewAdmin(
  event: aPolWETHVDebtNewAdminEvent
): void {
  let entity = new aPolWETHVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWETHVDebtNewComptroller(
  event: aPolWETHVDebtNewComptrollerEvent
): void {
  let entity = new aPolWETHVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWETHVDebtNewImplementation(
  event: aPolWETHVDebtNewImplementationEvent
): void {
  let entity = new aPolWETHVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWETHVDebtNewMarketInterestRateModel(
  event: aPolWETHVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWETHVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWETHVDebtNewPendingAdmin(
  event: aPolWETHVDebtNewPendingAdminEvent
): void {
  let entity = new aPolWETHVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWETHVDebtNewReserveFactor(
  event: aPolWETHVDebtNewReserveFactorEvent
): void {
  let entity = new aPolWETHVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWETHVDebtRedeem(
  event: aPolWETHVDebtRedeemEvent
): void {
  let entity = new aPolWETHVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWETHVDebtRepayBorrow(
  event: aPolWETHVDebtRepayBorrowEvent
): void {
  let entity = new aPolWETHVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHVDebtReservesAdded(
  event: aPolWETHVDebtReservesAddedEvent
): void {
  let entity = new aPolWETHVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWETHVDebtReservesReduced(
  event: aPolWETHVDebtReservesReducedEvent
): void {
  let entity = new aPolWETHVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWETHVDebtTransfer(
  event: aPolWETHVDebtTransferEvent
): void {
  let entity = new aPolWETHVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
