import {
  aPolLINKSDebtAccrueInterest as aPolLINKSDebtAccrueInterestEvent,
  aPolLINKSDebtApproval as aPolLINKSDebtApprovalEvent,
  aPolLINKSDebtBorrow as aPolLINKSDebtBorrowEvent,
  aPolLINKSDebtFailure as aPolLINKSDebtFailureEvent,
  aPolLINKSDebtLiquidateBorrow as aPolLINKSDebtLiquidateBorrowEvent,
  aPolLINKSDebtMint as aPolLINKSDebtMintEvent,
  aPolLINKSDebtNewAdmin as aPolLINKSDebtNewAdminEvent,
  aPolLINKSDebtNewComptroller as aPolLINKSDebtNewComptrollerEvent,
  aPolLINKSDebtNewImplementation as aPolLINKSDebtNewImplementationEvent,
  aPolLINKSDebtNewMarketInterestRateModel as aPolLINKSDebtNewMarketInterestRateModelEvent,
  aPolLINKSDebtNewPendingAdmin as aPolLINKSDebtNewPendingAdminEvent,
  aPolLINKSDebtNewReserveFactor as aPolLINKSDebtNewReserveFactorEvent,
  aPolLINKSDebtRedeem as aPolLINKSDebtRedeemEvent,
  aPolLINKSDebtRepayBorrow as aPolLINKSDebtRepayBorrowEvent,
  aPolLINKSDebtReservesAdded as aPolLINKSDebtReservesAddedEvent,
  aPolLINKSDebtReservesReduced as aPolLINKSDebtReservesReducedEvent,
  aPolLINKSDebtTransfer as aPolLINKSDebtTransferEvent
} from "../generated/aPolLINKSDebt/aPolLINKSDebt"
import {
  aPolLINKSDebtAccrueInterest,
  aPolLINKSDebtApproval,
  aPolLINKSDebtBorrow,
  aPolLINKSDebtFailure,
  aPolLINKSDebtLiquidateBorrow,
  aPolLINKSDebtMint,
  aPolLINKSDebtNewAdmin,
  aPolLINKSDebtNewComptroller,
  aPolLINKSDebtNewImplementation,
  aPolLINKSDebtNewMarketInterestRateModel,
  aPolLINKSDebtNewPendingAdmin,
  aPolLINKSDebtNewReserveFactor,
  aPolLINKSDebtRedeem,
  aPolLINKSDebtRepayBorrow,
  aPolLINKSDebtReservesAdded,
  aPolLINKSDebtReservesReduced,
  aPolLINKSDebtTransfer
} from "../generated/schema"

export function handleaPolLINKSDebtAccrueInterest(
  event: aPolLINKSDebtAccrueInterestEvent
): void {
  let entity = new aPolLINKSDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKSDebtApproval(
  event: aPolLINKSDebtApprovalEvent
): void {
  let entity = new aPolLINKSDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolLINKSDebtBorrow(
  event: aPolLINKSDebtBorrowEvent
): void {
  let entity = new aPolLINKSDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKSDebtFailure(
  event: aPolLINKSDebtFailureEvent
): void {
  let entity = new aPolLINKSDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolLINKSDebtLiquidateBorrow(
  event: aPolLINKSDebtLiquidateBorrowEvent
): void {
  let entity = new aPolLINKSDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolLINKSDebtMint(event: aPolLINKSDebtMintEvent): void {
  let entity = new aPolLINKSDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolLINKSDebtNewAdmin(
  event: aPolLINKSDebtNewAdminEvent
): void {
  let entity = new aPolLINKSDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolLINKSDebtNewComptroller(
  event: aPolLINKSDebtNewComptrollerEvent
): void {
  let entity = new aPolLINKSDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolLINKSDebtNewImplementation(
  event: aPolLINKSDebtNewImplementationEvent
): void {
  let entity = new aPolLINKSDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolLINKSDebtNewMarketInterestRateModel(
  event: aPolLINKSDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolLINKSDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolLINKSDebtNewPendingAdmin(
  event: aPolLINKSDebtNewPendingAdminEvent
): void {
  let entity = new aPolLINKSDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolLINKSDebtNewReserveFactor(
  event: aPolLINKSDebtNewReserveFactorEvent
): void {
  let entity = new aPolLINKSDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolLINKSDebtRedeem(
  event: aPolLINKSDebtRedeemEvent
): void {
  let entity = new aPolLINKSDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolLINKSDebtRepayBorrow(
  event: aPolLINKSDebtRepayBorrowEvent
): void {
  let entity = new aPolLINKSDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKSDebtReservesAdded(
  event: aPolLINKSDebtReservesAddedEvent
): void {
  let entity = new aPolLINKSDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolLINKSDebtReservesReduced(
  event: aPolLINKSDebtReservesReducedEvent
): void {
  let entity = new aPolLINKSDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolLINKSDebtTransfer(
  event: aPolLINKSDebtTransferEvent
): void {
  let entity = new aPolLINKSDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
