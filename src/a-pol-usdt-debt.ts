import {
  aPolUSDTDebtAccrueInterest as aPolUSDTDebtAccrueInterestEvent,
  aPolUSDTDebtApproval as aPolUSDTDebtApprovalEvent,
  aPolUSDTDebtBorrow as aPolUSDTDebtBorrowEvent,
  aPolUSDTDebtFailure as aPolUSDTDebtFailureEvent,
  aPolUSDTDebtLiquidateBorrow as aPolUSDTDebtLiquidateBorrowEvent,
  aPolUSDTDebtMint as aPolUSDTDebtMintEvent,
  aPolUSDTDebtNewAdmin as aPolUSDTDebtNewAdminEvent,
  aPolUSDTDebtNewComptroller as aPolUSDTDebtNewComptrollerEvent,
  aPolUSDTDebtNewImplementation as aPolUSDTDebtNewImplementationEvent,
  aPolUSDTDebtNewMarketInterestRateModel as aPolUSDTDebtNewMarketInterestRateModelEvent,
  aPolUSDTDebtNewPendingAdmin as aPolUSDTDebtNewPendingAdminEvent,
  aPolUSDTDebtNewReserveFactor as aPolUSDTDebtNewReserveFactorEvent,
  aPolUSDTDebtRedeem as aPolUSDTDebtRedeemEvent,
  aPolUSDTDebtRepayBorrow as aPolUSDTDebtRepayBorrowEvent,
  aPolUSDTDebtReservesAdded as aPolUSDTDebtReservesAddedEvent,
  aPolUSDTDebtReservesReduced as aPolUSDTDebtReservesReducedEvent,
  aPolUSDTDebtTransfer as aPolUSDTDebtTransferEvent
} from "../generated/aPolUSDTDebt/aPolUSDTDebt"
import {
  aPolUSDTDebtAccrueInterest,
  aPolUSDTDebtApproval,
  aPolUSDTDebtBorrow,
  aPolUSDTDebtFailure,
  aPolUSDTDebtLiquidateBorrow,
  aPolUSDTDebtMint,
  aPolUSDTDebtNewAdmin,
  aPolUSDTDebtNewComptroller,
  aPolUSDTDebtNewImplementation,
  aPolUSDTDebtNewMarketInterestRateModel,
  aPolUSDTDebtNewPendingAdmin,
  aPolUSDTDebtNewReserveFactor,
  aPolUSDTDebtRedeem,
  aPolUSDTDebtRepayBorrow,
  aPolUSDTDebtReservesAdded,
  aPolUSDTDebtReservesReduced,
  aPolUSDTDebtTransfer
} from "../generated/schema"

export function handleaPolUSDTDebtAccrueInterest(
  event: aPolUSDTDebtAccrueInterestEvent
): void {
  let entity = new aPolUSDTDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTDebtApproval(
  event: aPolUSDTDebtApprovalEvent
): void {
  let entity = new aPolUSDTDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolUSDTDebtBorrow(event: aPolUSDTDebtBorrowEvent): void {
  let entity = new aPolUSDTDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTDebtFailure(
  event: aPolUSDTDebtFailureEvent
): void {
  let entity = new aPolUSDTDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolUSDTDebtLiquidateBorrow(
  event: aPolUSDTDebtLiquidateBorrowEvent
): void {
  let entity = new aPolUSDTDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolUSDTDebtMint(event: aPolUSDTDebtMintEvent): void {
  let entity = new aPolUSDTDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolUSDTDebtNewAdmin(
  event: aPolUSDTDebtNewAdminEvent
): void {
  let entity = new aPolUSDTDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolUSDTDebtNewComptroller(
  event: aPolUSDTDebtNewComptrollerEvent
): void {
  let entity = new aPolUSDTDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolUSDTDebtNewImplementation(
  event: aPolUSDTDebtNewImplementationEvent
): void {
  let entity = new aPolUSDTDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolUSDTDebtNewMarketInterestRateModel(
  event: aPolUSDTDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolUSDTDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolUSDTDebtNewPendingAdmin(
  event: aPolUSDTDebtNewPendingAdminEvent
): void {
  let entity = new aPolUSDTDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolUSDTDebtNewReserveFactor(
  event: aPolUSDTDebtNewReserveFactorEvent
): void {
  let entity = new aPolUSDTDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolUSDTDebtRedeem(event: aPolUSDTDebtRedeemEvent): void {
  let entity = new aPolUSDTDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolUSDTDebtRepayBorrow(
  event: aPolUSDTDebtRepayBorrowEvent
): void {
  let entity = new aPolUSDTDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDTDebtReservesAdded(
  event: aPolUSDTDebtReservesAddedEvent
): void {
  let entity = new aPolUSDTDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDTDebtReservesReduced(
  event: aPolUSDTDebtReservesReducedEvent
): void {
  let entity = new aPolUSDTDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDTDebtTransfer(
  event: aPolUSDTDebtTransferEvent
): void {
  let entity = new aPolUSDTDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
