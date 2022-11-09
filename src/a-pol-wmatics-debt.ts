import {
  aPolWMATICSDebtAccrueInterest as aPolWMATICSDebtAccrueInterestEvent,
  aPolWMATICSDebtApproval as aPolWMATICSDebtApprovalEvent,
  aPolWMATICSDebtBorrow as aPolWMATICSDebtBorrowEvent,
  aPolWMATICSDebtFailure as aPolWMATICSDebtFailureEvent,
  aPolWMATICSDebtLiquidateBorrow as aPolWMATICSDebtLiquidateBorrowEvent,
  aPolWMATICSDebtMint as aPolWMATICSDebtMintEvent,
  aPolWMATICSDebtNewAdmin as aPolWMATICSDebtNewAdminEvent,
  aPolWMATICSDebtNewComptroller as aPolWMATICSDebtNewComptrollerEvent,
  aPolWMATICSDebtNewImplementation as aPolWMATICSDebtNewImplementationEvent,
  aPolWMATICSDebtNewMarketInterestRateModel as aPolWMATICSDebtNewMarketInterestRateModelEvent,
  aPolWMATICSDebtNewPendingAdmin as aPolWMATICSDebtNewPendingAdminEvent,
  aPolWMATICSDebtNewReserveFactor as aPolWMATICSDebtNewReserveFactorEvent,
  aPolWMATICSDebtRedeem as aPolWMATICSDebtRedeemEvent,
  aPolWMATICSDebtRepayBorrow as aPolWMATICSDebtRepayBorrowEvent,
  aPolWMATICSDebtReservesAdded as aPolWMATICSDebtReservesAddedEvent,
  aPolWMATICSDebtReservesReduced as aPolWMATICSDebtReservesReducedEvent,
  aPolWMATICSDebtTransfer as aPolWMATICSDebtTransferEvent
} from "../generated/aPolWMATICSDebt/aPolWMATICSDebt"
import {
  aPolWMATICSDebtAccrueInterest,
  aPolWMATICSDebtApproval,
  aPolWMATICSDebtBorrow,
  aPolWMATICSDebtFailure,
  aPolWMATICSDebtLiquidateBorrow,
  aPolWMATICSDebtMint,
  aPolWMATICSDebtNewAdmin,
  aPolWMATICSDebtNewComptroller,
  aPolWMATICSDebtNewImplementation,
  aPolWMATICSDebtNewMarketInterestRateModel,
  aPolWMATICSDebtNewPendingAdmin,
  aPolWMATICSDebtNewReserveFactor,
  aPolWMATICSDebtRedeem,
  aPolWMATICSDebtRepayBorrow,
  aPolWMATICSDebtReservesAdded,
  aPolWMATICSDebtReservesReduced,
  aPolWMATICSDebtTransfer
} from "../generated/schema"

export function handleaPolWMATICSDebtAccrueInterest(
  event: aPolWMATICSDebtAccrueInterestEvent
): void {
  let entity = new aPolWMATICSDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICSDebtApproval(
  event: aPolWMATICSDebtApprovalEvent
): void {
  let entity = new aPolWMATICSDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWMATICSDebtBorrow(
  event: aPolWMATICSDebtBorrowEvent
): void {
  let entity = new aPolWMATICSDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICSDebtFailure(
  event: aPolWMATICSDebtFailureEvent
): void {
  let entity = new aPolWMATICSDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWMATICSDebtLiquidateBorrow(
  event: aPolWMATICSDebtLiquidateBorrowEvent
): void {
  let entity = new aPolWMATICSDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWMATICSDebtMint(
  event: aPolWMATICSDebtMintEvent
): void {
  let entity = new aPolWMATICSDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWMATICSDebtNewAdmin(
  event: aPolWMATICSDebtNewAdminEvent
): void {
  let entity = new aPolWMATICSDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWMATICSDebtNewComptroller(
  event: aPolWMATICSDebtNewComptrollerEvent
): void {
  let entity = new aPolWMATICSDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWMATICSDebtNewImplementation(
  event: aPolWMATICSDebtNewImplementationEvent
): void {
  let entity = new aPolWMATICSDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWMATICSDebtNewMarketInterestRateModel(
  event: aPolWMATICSDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWMATICSDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWMATICSDebtNewPendingAdmin(
  event: aPolWMATICSDebtNewPendingAdminEvent
): void {
  let entity = new aPolWMATICSDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWMATICSDebtNewReserveFactor(
  event: aPolWMATICSDebtNewReserveFactorEvent
): void {
  let entity = new aPolWMATICSDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWMATICSDebtRedeem(
  event: aPolWMATICSDebtRedeemEvent
): void {
  let entity = new aPolWMATICSDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWMATICSDebtRepayBorrow(
  event: aPolWMATICSDebtRepayBorrowEvent
): void {
  let entity = new aPolWMATICSDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICSDebtReservesAdded(
  event: aPolWMATICSDebtReservesAddedEvent
): void {
  let entity = new aPolWMATICSDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWMATICSDebtReservesReduced(
  event: aPolWMATICSDebtReservesReducedEvent
): void {
  let entity = new aPolWMATICSDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWMATICSDebtTransfer(
  event: aPolWMATICSDebtTransferEvent
): void {
  let entity = new aPolWMATICSDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
