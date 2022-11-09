import {
  aPolWBTCVDebtAccrueInterest as aPolWBTCVDebtAccrueInterestEvent,
  aPolWBTCVDebtApproval as aPolWBTCVDebtApprovalEvent,
  aPolWBTCVDebtBorrow as aPolWBTCVDebtBorrowEvent,
  aPolWBTCVDebtFailure as aPolWBTCVDebtFailureEvent,
  aPolWBTCVDebtLiquidateBorrow as aPolWBTCVDebtLiquidateBorrowEvent,
  aPolWBTCVDebtMint as aPolWBTCVDebtMintEvent,
  aPolWBTCVDebtNewAdmin as aPolWBTCVDebtNewAdminEvent,
  aPolWBTCVDebtNewComptroller as aPolWBTCVDebtNewComptrollerEvent,
  aPolWBTCVDebtNewImplementation as aPolWBTCVDebtNewImplementationEvent,
  aPolWBTCVDebtNewMarketInterestRateModel as aPolWBTCVDebtNewMarketInterestRateModelEvent,
  aPolWBTCVDebtNewPendingAdmin as aPolWBTCVDebtNewPendingAdminEvent,
  aPolWBTCVDebtNewReserveFactor as aPolWBTCVDebtNewReserveFactorEvent,
  aPolWBTCVDebtRedeem as aPolWBTCVDebtRedeemEvent,
  aPolWBTCVDebtRepayBorrow as aPolWBTCVDebtRepayBorrowEvent,
  aPolWBTCVDebtReservesAdded as aPolWBTCVDebtReservesAddedEvent,
  aPolWBTCVDebtReservesReduced as aPolWBTCVDebtReservesReducedEvent,
  aPolWBTCVDebtTransfer as aPolWBTCVDebtTransferEvent
} from "../generated/aPolWBTCVDebt/aPolWBTCVDebt"
import {
  aPolWBTCVDebtAccrueInterest,
  aPolWBTCVDebtApproval,
  aPolWBTCVDebtBorrow,
  aPolWBTCVDebtFailure,
  aPolWBTCVDebtLiquidateBorrow,
  aPolWBTCVDebtMint,
  aPolWBTCVDebtNewAdmin,
  aPolWBTCVDebtNewComptroller,
  aPolWBTCVDebtNewImplementation,
  aPolWBTCVDebtNewMarketInterestRateModel,
  aPolWBTCVDebtNewPendingAdmin,
  aPolWBTCVDebtNewReserveFactor,
  aPolWBTCVDebtRedeem,
  aPolWBTCVDebtRepayBorrow,
  aPolWBTCVDebtReservesAdded,
  aPolWBTCVDebtReservesReduced,
  aPolWBTCVDebtTransfer
} from "../generated/schema"

export function handleaPolWBTCVDebtAccrueInterest(
  event: aPolWBTCVDebtAccrueInterestEvent
): void {
  let entity = new aPolWBTCVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCVDebtApproval(
  event: aPolWBTCVDebtApprovalEvent
): void {
  let entity = new aPolWBTCVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWBTCVDebtBorrow(
  event: aPolWBTCVDebtBorrowEvent
): void {
  let entity = new aPolWBTCVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCVDebtFailure(
  event: aPolWBTCVDebtFailureEvent
): void {
  let entity = new aPolWBTCVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWBTCVDebtLiquidateBorrow(
  event: aPolWBTCVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolWBTCVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWBTCVDebtMint(event: aPolWBTCVDebtMintEvent): void {
  let entity = new aPolWBTCVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWBTCVDebtNewAdmin(
  event: aPolWBTCVDebtNewAdminEvent
): void {
  let entity = new aPolWBTCVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWBTCVDebtNewComptroller(
  event: aPolWBTCVDebtNewComptrollerEvent
): void {
  let entity = new aPolWBTCVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWBTCVDebtNewImplementation(
  event: aPolWBTCVDebtNewImplementationEvent
): void {
  let entity = new aPolWBTCVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWBTCVDebtNewMarketInterestRateModel(
  event: aPolWBTCVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWBTCVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWBTCVDebtNewPendingAdmin(
  event: aPolWBTCVDebtNewPendingAdminEvent
): void {
  let entity = new aPolWBTCVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWBTCVDebtNewReserveFactor(
  event: aPolWBTCVDebtNewReserveFactorEvent
): void {
  let entity = new aPolWBTCVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWBTCVDebtRedeem(
  event: aPolWBTCVDebtRedeemEvent
): void {
  let entity = new aPolWBTCVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWBTCVDebtRepayBorrow(
  event: aPolWBTCVDebtRepayBorrowEvent
): void {
  let entity = new aPolWBTCVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCVDebtReservesAdded(
  event: aPolWBTCVDebtReservesAddedEvent
): void {
  let entity = new aPolWBTCVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWBTCVDebtReservesReduced(
  event: aPolWBTCVDebtReservesReducedEvent
): void {
  let entity = new aPolWBTCVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWBTCVDebtTransfer(
  event: aPolWBTCVDebtTransferEvent
): void {
  let entity = new aPolWBTCVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
