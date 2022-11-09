import {
  aPolASUSHIVDebtAccrueInterest as aPolASUSHIVDebtAccrueInterestEvent,
  aPolASUSHIVDebtApproval as aPolASUSHIVDebtApprovalEvent,
  aPolASUSHIVDebtBorrow as aPolASUSHIVDebtBorrowEvent,
  aPolASUSHIVDebtFailure as aPolASUSHIVDebtFailureEvent,
  aPolASUSHIVDebtLiquidateBorrow as aPolASUSHIVDebtLiquidateBorrowEvent,
  aPolASUSHIVDebtMint as aPolASUSHIVDebtMintEvent,
  aPolASUSHIVDebtNewAdmin as aPolASUSHIVDebtNewAdminEvent,
  aPolASUSHIVDebtNewComptroller as aPolASUSHIVDebtNewComptrollerEvent,
  aPolASUSHIVDebtNewImplementation as aPolASUSHIVDebtNewImplementationEvent,
  aPolASUSHIVDebtNewMarketInterestRateModel as aPolASUSHIVDebtNewMarketInterestRateModelEvent,
  aPolASUSHIVDebtNewPendingAdmin as aPolASUSHIVDebtNewPendingAdminEvent,
  aPolASUSHIVDebtNewReserveFactor as aPolASUSHIVDebtNewReserveFactorEvent,
  aPolASUSHIVDebtRedeem as aPolASUSHIVDebtRedeemEvent,
  aPolASUSHIVDebtRepayBorrow as aPolASUSHIVDebtRepayBorrowEvent,
  aPolASUSHIVDebtReservesAdded as aPolASUSHIVDebtReservesAddedEvent,
  aPolASUSHIVDebtReservesReduced as aPolASUSHIVDebtReservesReducedEvent,
  aPolASUSHIVDebtTransfer as aPolASUSHIVDebtTransferEvent
} from "../generated/aPolASUSHIVDebt/aPolASUSHIVDebt"
import {
  aPolASUSHIVDebtAccrueInterest,
  aPolASUSHIVDebtApproval,
  aPolASUSHIVDebtBorrow,
  aPolASUSHIVDebtFailure,
  aPolASUSHIVDebtLiquidateBorrow,
  aPolASUSHIVDebtMint,
  aPolASUSHIVDebtNewAdmin,
  aPolASUSHIVDebtNewComptroller,
  aPolASUSHIVDebtNewImplementation,
  aPolASUSHIVDebtNewMarketInterestRateModel,
  aPolASUSHIVDebtNewPendingAdmin,
  aPolASUSHIVDebtNewReserveFactor,
  aPolASUSHIVDebtRedeem,
  aPolASUSHIVDebtRepayBorrow,
  aPolASUSHIVDebtReservesAdded,
  aPolASUSHIVDebtReservesReduced,
  aPolASUSHIVDebtTransfer
} from "../generated/schema"

export function handleaPolASUSHIVDebtAccrueInterest(
  event: aPolASUSHIVDebtAccrueInterestEvent
): void {
  let entity = new aPolASUSHIVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolASUSHIVDebtApproval(
  event: aPolASUSHIVDebtApprovalEvent
): void {
  let entity = new aPolASUSHIVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolASUSHIVDebtBorrow(
  event: aPolASUSHIVDebtBorrowEvent
): void {
  let entity = new aPolASUSHIVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolASUSHIVDebtFailure(
  event: aPolASUSHIVDebtFailureEvent
): void {
  let entity = new aPolASUSHIVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolASUSHIVDebtLiquidateBorrow(
  event: aPolASUSHIVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolASUSHIVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolASUSHIVDebtMint(
  event: aPolASUSHIVDebtMintEvent
): void {
  let entity = new aPolASUSHIVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolASUSHIVDebtNewAdmin(
  event: aPolASUSHIVDebtNewAdminEvent
): void {
  let entity = new aPolASUSHIVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolASUSHIVDebtNewComptroller(
  event: aPolASUSHIVDebtNewComptrollerEvent
): void {
  let entity = new aPolASUSHIVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolASUSHIVDebtNewImplementation(
  event: aPolASUSHIVDebtNewImplementationEvent
): void {
  let entity = new aPolASUSHIVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolASUSHIVDebtNewMarketInterestRateModel(
  event: aPolASUSHIVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolASUSHIVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolASUSHIVDebtNewPendingAdmin(
  event: aPolASUSHIVDebtNewPendingAdminEvent
): void {
  let entity = new aPolASUSHIVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolASUSHIVDebtNewReserveFactor(
  event: aPolASUSHIVDebtNewReserveFactorEvent
): void {
  let entity = new aPolASUSHIVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolASUSHIVDebtRedeem(
  event: aPolASUSHIVDebtRedeemEvent
): void {
  let entity = new aPolASUSHIVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolASUSHIVDebtRepayBorrow(
  event: aPolASUSHIVDebtRepayBorrowEvent
): void {
  let entity = new aPolASUSHIVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolASUSHIVDebtReservesAdded(
  event: aPolASUSHIVDebtReservesAddedEvent
): void {
  let entity = new aPolASUSHIVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolASUSHIVDebtReservesReduced(
  event: aPolASUSHIVDebtReservesReducedEvent
): void {
  let entity = new aPolASUSHIVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolASUSHIVDebtTransfer(
  event: aPolASUSHIVDebtTransferEvent
): void {
  let entity = new aPolASUSHIVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
