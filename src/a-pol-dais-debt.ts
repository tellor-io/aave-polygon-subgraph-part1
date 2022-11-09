import {
  aPolDAISDebtAccrueInterest as aPolDAISDebtAccrueInterestEvent,
  aPolDAISDebtApproval as aPolDAISDebtApprovalEvent,
  aPolDAISDebtBorrow as aPolDAISDebtBorrowEvent,
  aPolDAISDebtFailure as aPolDAISDebtFailureEvent,
  aPolDAISDebtLiquidateBorrow as aPolDAISDebtLiquidateBorrowEvent,
  aPolDAISDebtMint as aPolDAISDebtMintEvent,
  aPolDAISDebtNewAdmin as aPolDAISDebtNewAdminEvent,
  aPolDAISDebtNewComptroller as aPolDAISDebtNewComptrollerEvent,
  aPolDAISDebtNewImplementation as aPolDAISDebtNewImplementationEvent,
  aPolDAISDebtNewMarketInterestRateModel as aPolDAISDebtNewMarketInterestRateModelEvent,
  aPolDAISDebtNewPendingAdmin as aPolDAISDebtNewPendingAdminEvent,
  aPolDAISDebtNewReserveFactor as aPolDAISDebtNewReserveFactorEvent,
  aPolDAISDebtRedeem as aPolDAISDebtRedeemEvent,
  aPolDAISDebtRepayBorrow as aPolDAISDebtRepayBorrowEvent,
  aPolDAISDebtReservesAdded as aPolDAISDebtReservesAddedEvent,
  aPolDAISDebtReservesReduced as aPolDAISDebtReservesReducedEvent,
  aPolDAISDebtTransfer as aPolDAISDebtTransferEvent
} from "../generated/aPolDAISDebt/aPolDAISDebt"
import {
  aPolDAISDebtAccrueInterest,
  aPolDAISDebtApproval,
  aPolDAISDebtBorrow,
  aPolDAISDebtFailure,
  aPolDAISDebtLiquidateBorrow,
  aPolDAISDebtMint,
  aPolDAISDebtNewAdmin,
  aPolDAISDebtNewComptroller,
  aPolDAISDebtNewImplementation,
  aPolDAISDebtNewMarketInterestRateModel,
  aPolDAISDebtNewPendingAdmin,
  aPolDAISDebtNewReserveFactor,
  aPolDAISDebtRedeem,
  aPolDAISDebtRepayBorrow,
  aPolDAISDebtReservesAdded,
  aPolDAISDebtReservesReduced,
  aPolDAISDebtTransfer
} from "../generated/schema"

export function handleaPolDAISDebtAccrueInterest(
  event: aPolDAISDebtAccrueInterestEvent
): void {
  let entity = new aPolDAISDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAISDebtApproval(
  event: aPolDAISDebtApprovalEvent
): void {
  let entity = new aPolDAISDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolDAISDebtBorrow(event: aPolDAISDebtBorrowEvent): void {
  let entity = new aPolDAISDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAISDebtFailure(
  event: aPolDAISDebtFailureEvent
): void {
  let entity = new aPolDAISDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolDAISDebtLiquidateBorrow(
  event: aPolDAISDebtLiquidateBorrowEvent
): void {
  let entity = new aPolDAISDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolDAISDebtMint(event: aPolDAISDebtMintEvent): void {
  let entity = new aPolDAISDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolDAISDebtNewAdmin(
  event: aPolDAISDebtNewAdminEvent
): void {
  let entity = new aPolDAISDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolDAISDebtNewComptroller(
  event: aPolDAISDebtNewComptrollerEvent
): void {
  let entity = new aPolDAISDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolDAISDebtNewImplementation(
  event: aPolDAISDebtNewImplementationEvent
): void {
  let entity = new aPolDAISDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolDAISDebtNewMarketInterestRateModel(
  event: aPolDAISDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolDAISDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolDAISDebtNewPendingAdmin(
  event: aPolDAISDebtNewPendingAdminEvent
): void {
  let entity = new aPolDAISDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolDAISDebtNewReserveFactor(
  event: aPolDAISDebtNewReserveFactorEvent
): void {
  let entity = new aPolDAISDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolDAISDebtRedeem(event: aPolDAISDebtRedeemEvent): void {
  let entity = new aPolDAISDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolDAISDebtRepayBorrow(
  event: aPolDAISDebtRepayBorrowEvent
): void {
  let entity = new aPolDAISDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAISDebtReservesAdded(
  event: aPolDAISDebtReservesAddedEvent
): void {
  let entity = new aPolDAISDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDAISDebtReservesReduced(
  event: aPolDAISDebtReservesReducedEvent
): void {
  let entity = new aPolDAISDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDAISDebtTransfer(
  event: aPolDAISDebtTransferEvent
): void {
  let entity = new aPolDAISDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
