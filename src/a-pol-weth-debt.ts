import {
  aPolWETHDebtAccrueInterest as aPolWETHDebtAccrueInterestEvent,
  aPolWETHDebtApproval as aPolWETHDebtApprovalEvent,
  aPolWETHDebtBorrow as aPolWETHDebtBorrowEvent,
  aPolWETHDebtFailure as aPolWETHDebtFailureEvent,
  aPolWETHDebtLiquidateBorrow as aPolWETHDebtLiquidateBorrowEvent,
  aPolWETHDebtMint as aPolWETHDebtMintEvent,
  aPolWETHDebtNewAdmin as aPolWETHDebtNewAdminEvent,
  aPolWETHDebtNewComptroller as aPolWETHDebtNewComptrollerEvent,
  aPolWETHDebtNewImplementation as aPolWETHDebtNewImplementationEvent,
  aPolWETHDebtNewMarketInterestRateModel as aPolWETHDebtNewMarketInterestRateModelEvent,
  aPolWETHDebtNewPendingAdmin as aPolWETHDebtNewPendingAdminEvent,
  aPolWETHDebtNewReserveFactor as aPolWETHDebtNewReserveFactorEvent,
  aPolWETHDebtRedeem as aPolWETHDebtRedeemEvent,
  aPolWETHDebtRepayBorrow as aPolWETHDebtRepayBorrowEvent,
  aPolWETHDebtReservesAdded as aPolWETHDebtReservesAddedEvent,
  aPolWETHDebtReservesReduced as aPolWETHDebtReservesReducedEvent,
  aPolWETHDebtTransfer as aPolWETHDebtTransferEvent
} from "../generated/aPolWETHDebt/aPolWETHDebt"
import {
  aPolWETHDebtAccrueInterest,
  aPolWETHDebtApproval,
  aPolWETHDebtBorrow,
  aPolWETHDebtFailure,
  aPolWETHDebtLiquidateBorrow,
  aPolWETHDebtMint,
  aPolWETHDebtNewAdmin,
  aPolWETHDebtNewComptroller,
  aPolWETHDebtNewImplementation,
  aPolWETHDebtNewMarketInterestRateModel,
  aPolWETHDebtNewPendingAdmin,
  aPolWETHDebtNewReserveFactor,
  aPolWETHDebtRedeem,
  aPolWETHDebtRepayBorrow,
  aPolWETHDebtReservesAdded,
  aPolWETHDebtReservesReduced,
  aPolWETHDebtTransfer
} from "../generated/schema"

export function handleaPolWETHDebtAccrueInterest(
  event: aPolWETHDebtAccrueInterestEvent
): void {
  let entity = new aPolWETHDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHDebtApproval(
  event: aPolWETHDebtApprovalEvent
): void {
  let entity = new aPolWETHDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWETHDebtBorrow(event: aPolWETHDebtBorrowEvent): void {
  let entity = new aPolWETHDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHDebtFailure(
  event: aPolWETHDebtFailureEvent
): void {
  let entity = new aPolWETHDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWETHDebtLiquidateBorrow(
  event: aPolWETHDebtLiquidateBorrowEvent
): void {
  let entity = new aPolWETHDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWETHDebtMint(event: aPolWETHDebtMintEvent): void {
  let entity = new aPolWETHDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWETHDebtNewAdmin(
  event: aPolWETHDebtNewAdminEvent
): void {
  let entity = new aPolWETHDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWETHDebtNewComptroller(
  event: aPolWETHDebtNewComptrollerEvent
): void {
  let entity = new aPolWETHDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWETHDebtNewImplementation(
  event: aPolWETHDebtNewImplementationEvent
): void {
  let entity = new aPolWETHDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWETHDebtNewMarketInterestRateModel(
  event: aPolWETHDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWETHDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWETHDebtNewPendingAdmin(
  event: aPolWETHDebtNewPendingAdminEvent
): void {
  let entity = new aPolWETHDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWETHDebtNewReserveFactor(
  event: aPolWETHDebtNewReserveFactorEvent
): void {
  let entity = new aPolWETHDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWETHDebtRedeem(event: aPolWETHDebtRedeemEvent): void {
  let entity = new aPolWETHDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWETHDebtRepayBorrow(
  event: aPolWETHDebtRepayBorrowEvent
): void {
  let entity = new aPolWETHDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHDebtReservesAdded(
  event: aPolWETHDebtReservesAddedEvent
): void {
  let entity = new aPolWETHDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWETHDebtReservesReduced(
  event: aPolWETHDebtReservesReducedEvent
): void {
  let entity = new aPolWETHDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWETHDebtTransfer(
  event: aPolWETHDebtTransferEvent
): void {
  let entity = new aPolWETHDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
