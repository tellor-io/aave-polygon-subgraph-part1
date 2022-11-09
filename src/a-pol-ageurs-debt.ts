import {
  aPolAGEURSDebtAccrueInterest as aPolAGEURSDebtAccrueInterestEvent,
  aPolAGEURSDebtApproval as aPolAGEURSDebtApprovalEvent,
  aPolAGEURSDebtBorrow as aPolAGEURSDebtBorrowEvent,
  aPolAGEURSDebtFailure as aPolAGEURSDebtFailureEvent,
  aPolAGEURSDebtLiquidateBorrow as aPolAGEURSDebtLiquidateBorrowEvent,
  aPolAGEURSDebtMint as aPolAGEURSDebtMintEvent,
  aPolAGEURSDebtNewAdmin as aPolAGEURSDebtNewAdminEvent,
  aPolAGEURSDebtNewComptroller as aPolAGEURSDebtNewComptrollerEvent,
  aPolAGEURSDebtNewImplementation as aPolAGEURSDebtNewImplementationEvent,
  aPolAGEURSDebtNewMarketInterestRateModel as aPolAGEURSDebtNewMarketInterestRateModelEvent,
  aPolAGEURSDebtNewPendingAdmin as aPolAGEURSDebtNewPendingAdminEvent,
  aPolAGEURSDebtNewReserveFactor as aPolAGEURSDebtNewReserveFactorEvent,
  aPolAGEURSDebtRedeem as aPolAGEURSDebtRedeemEvent,
  aPolAGEURSDebtRepayBorrow as aPolAGEURSDebtRepayBorrowEvent,
  aPolAGEURSDebtReservesAdded as aPolAGEURSDebtReservesAddedEvent,
  aPolAGEURSDebtReservesReduced as aPolAGEURSDebtReservesReducedEvent,
  aPolAGEURSDebtTransfer as aPolAGEURSDebtTransferEvent
} from "../generated/aPolAGEURSDebt/aPolAGEURSDebt"
import {
  aPolAGEURSDebtAccrueInterest,
  aPolAGEURSDebtApproval,
  aPolAGEURSDebtBorrow,
  aPolAGEURSDebtFailure,
  aPolAGEURSDebtLiquidateBorrow,
  aPolAGEURSDebtMint,
  aPolAGEURSDebtNewAdmin,
  aPolAGEURSDebtNewComptroller,
  aPolAGEURSDebtNewImplementation,
  aPolAGEURSDebtNewMarketInterestRateModel,
  aPolAGEURSDebtNewPendingAdmin,
  aPolAGEURSDebtNewReserveFactor,
  aPolAGEURSDebtRedeem,
  aPolAGEURSDebtRepayBorrow,
  aPolAGEURSDebtReservesAdded,
  aPolAGEURSDebtReservesReduced,
  aPolAGEURSDebtTransfer
} from "../generated/schema"

export function handleaPolAGEURSDebtAccrueInterest(
  event: aPolAGEURSDebtAccrueInterestEvent
): void {
  let entity = new aPolAGEURSDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURSDebtApproval(
  event: aPolAGEURSDebtApprovalEvent
): void {
  let entity = new aPolAGEURSDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolAGEURSDebtBorrow(
  event: aPolAGEURSDebtBorrowEvent
): void {
  let entity = new aPolAGEURSDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURSDebtFailure(
  event: aPolAGEURSDebtFailureEvent
): void {
  let entity = new aPolAGEURSDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolAGEURSDebtLiquidateBorrow(
  event: aPolAGEURSDebtLiquidateBorrowEvent
): void {
  let entity = new aPolAGEURSDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolAGEURSDebtMint(event: aPolAGEURSDebtMintEvent): void {
  let entity = new aPolAGEURSDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolAGEURSDebtNewAdmin(
  event: aPolAGEURSDebtNewAdminEvent
): void {
  let entity = new aPolAGEURSDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolAGEURSDebtNewComptroller(
  event: aPolAGEURSDebtNewComptrollerEvent
): void {
  let entity = new aPolAGEURSDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolAGEURSDebtNewImplementation(
  event: aPolAGEURSDebtNewImplementationEvent
): void {
  let entity = new aPolAGEURSDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolAGEURSDebtNewMarketInterestRateModel(
  event: aPolAGEURSDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolAGEURSDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolAGEURSDebtNewPendingAdmin(
  event: aPolAGEURSDebtNewPendingAdminEvent
): void {
  let entity = new aPolAGEURSDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolAGEURSDebtNewReserveFactor(
  event: aPolAGEURSDebtNewReserveFactorEvent
): void {
  let entity = new aPolAGEURSDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolAGEURSDebtRedeem(
  event: aPolAGEURSDebtRedeemEvent
): void {
  let entity = new aPolAGEURSDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolAGEURSDebtRepayBorrow(
  event: aPolAGEURSDebtRepayBorrowEvent
): void {
  let entity = new aPolAGEURSDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURSDebtReservesAdded(
  event: aPolAGEURSDebtReservesAddedEvent
): void {
  let entity = new aPolAGEURSDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolAGEURSDebtReservesReduced(
  event: aPolAGEURSDebtReservesReducedEvent
): void {
  let entity = new aPolAGEURSDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolAGEURSDebtTransfer(
  event: aPolAGEURSDebtTransferEvent
): void {
  let entity = new aPolAGEURSDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
