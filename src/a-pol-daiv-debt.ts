import {
  aPolDAIVDebtAccrueInterest as aPolDAIVDebtAccrueInterestEvent,
  aPolDAIVDebtApproval as aPolDAIVDebtApprovalEvent,
  aPolDAIVDebtBorrow as aPolDAIVDebtBorrowEvent,
  aPolDAIVDebtFailure as aPolDAIVDebtFailureEvent,
  aPolDAIVDebtLiquidateBorrow as aPolDAIVDebtLiquidateBorrowEvent,
  aPolDAIVDebtMint as aPolDAIVDebtMintEvent,
  aPolDAIVDebtNewAdmin as aPolDAIVDebtNewAdminEvent,
  aPolDAIVDebtNewComptroller as aPolDAIVDebtNewComptrollerEvent,
  aPolDAIVDebtNewImplementation as aPolDAIVDebtNewImplementationEvent,
  aPolDAIVDebtNewMarketInterestRateModel as aPolDAIVDebtNewMarketInterestRateModelEvent,
  aPolDAIVDebtNewPendingAdmin as aPolDAIVDebtNewPendingAdminEvent,
  aPolDAIVDebtNewReserveFactor as aPolDAIVDebtNewReserveFactorEvent,
  aPolDAIVDebtRedeem as aPolDAIVDebtRedeemEvent,
  aPolDAIVDebtRepayBorrow as aPolDAIVDebtRepayBorrowEvent,
  aPolDAIVDebtReservesAdded as aPolDAIVDebtReservesAddedEvent,
  aPolDAIVDebtReservesReduced as aPolDAIVDebtReservesReducedEvent,
  aPolDAIVDebtTransfer as aPolDAIVDebtTransferEvent
} from "../generated/aPolDAIVDebt/aPolDAIVDebt"
import {
  aPolDAIVDebtAccrueInterest,
  aPolDAIVDebtApproval,
  aPolDAIVDebtBorrow,
  aPolDAIVDebtFailure,
  aPolDAIVDebtLiquidateBorrow,
  aPolDAIVDebtMint,
  aPolDAIVDebtNewAdmin,
  aPolDAIVDebtNewComptroller,
  aPolDAIVDebtNewImplementation,
  aPolDAIVDebtNewMarketInterestRateModel,
  aPolDAIVDebtNewPendingAdmin,
  aPolDAIVDebtNewReserveFactor,
  aPolDAIVDebtRedeem,
  aPolDAIVDebtRepayBorrow,
  aPolDAIVDebtReservesAdded,
  aPolDAIVDebtReservesReduced,
  aPolDAIVDebtTransfer
} from "../generated/schema"

export function handleaPolDAIVDebtAccrueInterest(
  event: aPolDAIVDebtAccrueInterestEvent
): void {
  let entity = new aPolDAIVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAIVDebtApproval(
  event: aPolDAIVDebtApprovalEvent
): void {
  let entity = new aPolDAIVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolDAIVDebtBorrow(event: aPolDAIVDebtBorrowEvent): void {
  let entity = new aPolDAIVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAIVDebtFailure(
  event: aPolDAIVDebtFailureEvent
): void {
  let entity = new aPolDAIVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolDAIVDebtLiquidateBorrow(
  event: aPolDAIVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolDAIVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolDAIVDebtMint(event: aPolDAIVDebtMintEvent): void {
  let entity = new aPolDAIVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolDAIVDebtNewAdmin(
  event: aPolDAIVDebtNewAdminEvent
): void {
  let entity = new aPolDAIVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolDAIVDebtNewComptroller(
  event: aPolDAIVDebtNewComptrollerEvent
): void {
  let entity = new aPolDAIVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolDAIVDebtNewImplementation(
  event: aPolDAIVDebtNewImplementationEvent
): void {
  let entity = new aPolDAIVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolDAIVDebtNewMarketInterestRateModel(
  event: aPolDAIVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolDAIVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolDAIVDebtNewPendingAdmin(
  event: aPolDAIVDebtNewPendingAdminEvent
): void {
  let entity = new aPolDAIVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolDAIVDebtNewReserveFactor(
  event: aPolDAIVDebtNewReserveFactorEvent
): void {
  let entity = new aPolDAIVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolDAIVDebtRedeem(event: aPolDAIVDebtRedeemEvent): void {
  let entity = new aPolDAIVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolDAIVDebtRepayBorrow(
  event: aPolDAIVDebtRepayBorrowEvent
): void {
  let entity = new aPolDAIVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAIVDebtReservesAdded(
  event: aPolDAIVDebtReservesAddedEvent
): void {
  let entity = new aPolDAIVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDAIVDebtReservesReduced(
  event: aPolDAIVDebtReservesReducedEvent
): void {
  let entity = new aPolDAIVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDAIVDebtTransfer(
  event: aPolDAIVDebtTransferEvent
): void {
  let entity = new aPolDAIVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
