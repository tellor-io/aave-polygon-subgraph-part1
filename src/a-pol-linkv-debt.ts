import {
  aPolLINKVDebtAccrueInterest as aPolLINKVDebtAccrueInterestEvent,
  aPolLINKVDebtApproval as aPolLINKVDebtApprovalEvent,
  aPolLINKVDebtBorrow as aPolLINKVDebtBorrowEvent,
  aPolLINKVDebtFailure as aPolLINKVDebtFailureEvent,
  aPolLINKVDebtLiquidateBorrow as aPolLINKVDebtLiquidateBorrowEvent,
  aPolLINKVDebtMint as aPolLINKVDebtMintEvent,
  aPolLINKVDebtNewAdmin as aPolLINKVDebtNewAdminEvent,
  aPolLINKVDebtNewComptroller as aPolLINKVDebtNewComptrollerEvent,
  aPolLINKVDebtNewImplementation as aPolLINKVDebtNewImplementationEvent,
  aPolLINKVDebtNewMarketInterestRateModel as aPolLINKVDebtNewMarketInterestRateModelEvent,
  aPolLINKVDebtNewPendingAdmin as aPolLINKVDebtNewPendingAdminEvent,
  aPolLINKVDebtNewReserveFactor as aPolLINKVDebtNewReserveFactorEvent,
  aPolLINKVDebtRedeem as aPolLINKVDebtRedeemEvent,
  aPolLINKVDebtRepayBorrow as aPolLINKVDebtRepayBorrowEvent,
  aPolLINKVDebtReservesAdded as aPolLINKVDebtReservesAddedEvent,
  aPolLINKVDebtReservesReduced as aPolLINKVDebtReservesReducedEvent,
  aPolLINKVDebtTransfer as aPolLINKVDebtTransferEvent
} from "../generated/aPolLINKVDebt/aPolLINKVDebt"
import {
  aPolLINKVDebtAccrueInterest,
  aPolLINKVDebtApproval,
  aPolLINKVDebtBorrow,
  aPolLINKVDebtFailure,
  aPolLINKVDebtLiquidateBorrow,
  aPolLINKVDebtMint,
  aPolLINKVDebtNewAdmin,
  aPolLINKVDebtNewComptroller,
  aPolLINKVDebtNewImplementation,
  aPolLINKVDebtNewMarketInterestRateModel,
  aPolLINKVDebtNewPendingAdmin,
  aPolLINKVDebtNewReserveFactor,
  aPolLINKVDebtRedeem,
  aPolLINKVDebtRepayBorrow,
  aPolLINKVDebtReservesAdded,
  aPolLINKVDebtReservesReduced,
  aPolLINKVDebtTransfer
} from "../generated/schema"

export function handleaPolLINKVDebtAccrueInterest(
  event: aPolLINKVDebtAccrueInterestEvent
): void {
  let entity = new aPolLINKVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKVDebtApproval(
  event: aPolLINKVDebtApprovalEvent
): void {
  let entity = new aPolLINKVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolLINKVDebtBorrow(
  event: aPolLINKVDebtBorrowEvent
): void {
  let entity = new aPolLINKVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKVDebtFailure(
  event: aPolLINKVDebtFailureEvent
): void {
  let entity = new aPolLINKVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolLINKVDebtLiquidateBorrow(
  event: aPolLINKVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolLINKVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolLINKVDebtMint(event: aPolLINKVDebtMintEvent): void {
  let entity = new aPolLINKVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolLINKVDebtNewAdmin(
  event: aPolLINKVDebtNewAdminEvent
): void {
  let entity = new aPolLINKVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolLINKVDebtNewComptroller(
  event: aPolLINKVDebtNewComptrollerEvent
): void {
  let entity = new aPolLINKVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolLINKVDebtNewImplementation(
  event: aPolLINKVDebtNewImplementationEvent
): void {
  let entity = new aPolLINKVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolLINKVDebtNewMarketInterestRateModel(
  event: aPolLINKVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolLINKVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolLINKVDebtNewPendingAdmin(
  event: aPolLINKVDebtNewPendingAdminEvent
): void {
  let entity = new aPolLINKVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolLINKVDebtNewReserveFactor(
  event: aPolLINKVDebtNewReserveFactorEvent
): void {
  let entity = new aPolLINKVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolLINKVDebtRedeem(
  event: aPolLINKVDebtRedeemEvent
): void {
  let entity = new aPolLINKVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolLINKVDebtRepayBorrow(
  event: aPolLINKVDebtRepayBorrowEvent
): void {
  let entity = new aPolLINKVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKVDebtReservesAdded(
  event: aPolLINKVDebtReservesAddedEvent
): void {
  let entity = new aPolLINKVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolLINKVDebtReservesReduced(
  event: aPolLINKVDebtReservesReducedEvent
): void {
  let entity = new aPolLINKVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolLINKVDebtTransfer(
  event: aPolLINKVDebtTransferEvent
): void {
  let entity = new aPolLINKVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
