import {
  aPolWBTCDebtAccrueInterest as aPolWBTCDebtAccrueInterestEvent,
  aPolWBTCDebtApproval as aPolWBTCDebtApprovalEvent,
  aPolWBTCDebtBorrow as aPolWBTCDebtBorrowEvent,
  aPolWBTCDebtFailure as aPolWBTCDebtFailureEvent,
  aPolWBTCDebtLiquidateBorrow as aPolWBTCDebtLiquidateBorrowEvent,
  aPolWBTCDebtMint as aPolWBTCDebtMintEvent,
  aPolWBTCDebtNewAdmin as aPolWBTCDebtNewAdminEvent,
  aPolWBTCDebtNewComptroller as aPolWBTCDebtNewComptrollerEvent,
  aPolWBTCDebtNewImplementation as aPolWBTCDebtNewImplementationEvent,
  aPolWBTCDebtNewMarketInterestRateModel as aPolWBTCDebtNewMarketInterestRateModelEvent,
  aPolWBTCDebtNewPendingAdmin as aPolWBTCDebtNewPendingAdminEvent,
  aPolWBTCDebtNewReserveFactor as aPolWBTCDebtNewReserveFactorEvent,
  aPolWBTCDebtRedeem as aPolWBTCDebtRedeemEvent,
  aPolWBTCDebtRepayBorrow as aPolWBTCDebtRepayBorrowEvent,
  aPolWBTCDebtReservesAdded as aPolWBTCDebtReservesAddedEvent,
  aPolWBTCDebtReservesReduced as aPolWBTCDebtReservesReducedEvent,
  aPolWBTCDebtTransfer as aPolWBTCDebtTransferEvent
} from "../generated/aPolWBTCDebt/aPolWBTCDebt"
import {
  aPolWBTCDebtAccrueInterest,
  aPolWBTCDebtApproval,
  aPolWBTCDebtBorrow,
  aPolWBTCDebtFailure,
  aPolWBTCDebtLiquidateBorrow,
  aPolWBTCDebtMint,
  aPolWBTCDebtNewAdmin,
  aPolWBTCDebtNewComptroller,
  aPolWBTCDebtNewImplementation,
  aPolWBTCDebtNewMarketInterestRateModel,
  aPolWBTCDebtNewPendingAdmin,
  aPolWBTCDebtNewReserveFactor,
  aPolWBTCDebtRedeem,
  aPolWBTCDebtRepayBorrow,
  aPolWBTCDebtReservesAdded,
  aPolWBTCDebtReservesReduced,
  aPolWBTCDebtTransfer
} from "../generated/schema"

export function handleaPolWBTCDebtAccrueInterest(
  event: aPolWBTCDebtAccrueInterestEvent
): void {
  let entity = new aPolWBTCDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCDebtApproval(
  event: aPolWBTCDebtApprovalEvent
): void {
  let entity = new aPolWBTCDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWBTCDebtBorrow(event: aPolWBTCDebtBorrowEvent): void {
  let entity = new aPolWBTCDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCDebtFailure(
  event: aPolWBTCDebtFailureEvent
): void {
  let entity = new aPolWBTCDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWBTCDebtLiquidateBorrow(
  event: aPolWBTCDebtLiquidateBorrowEvent
): void {
  let entity = new aPolWBTCDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWBTCDebtMint(event: aPolWBTCDebtMintEvent): void {
  let entity = new aPolWBTCDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWBTCDebtNewAdmin(
  event: aPolWBTCDebtNewAdminEvent
): void {
  let entity = new aPolWBTCDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWBTCDebtNewComptroller(
  event: aPolWBTCDebtNewComptrollerEvent
): void {
  let entity = new aPolWBTCDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWBTCDebtNewImplementation(
  event: aPolWBTCDebtNewImplementationEvent
): void {
  let entity = new aPolWBTCDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWBTCDebtNewMarketInterestRateModel(
  event: aPolWBTCDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWBTCDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWBTCDebtNewPendingAdmin(
  event: aPolWBTCDebtNewPendingAdminEvent
): void {
  let entity = new aPolWBTCDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWBTCDebtNewReserveFactor(
  event: aPolWBTCDebtNewReserveFactorEvent
): void {
  let entity = new aPolWBTCDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWBTCDebtRedeem(event: aPolWBTCDebtRedeemEvent): void {
  let entity = new aPolWBTCDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWBTCDebtRepayBorrow(
  event: aPolWBTCDebtRepayBorrowEvent
): void {
  let entity = new aPolWBTCDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCDebtReservesAdded(
  event: aPolWBTCDebtReservesAddedEvent
): void {
  let entity = new aPolWBTCDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWBTCDebtReservesReduced(
  event: aPolWBTCDebtReservesReducedEvent
): void {
  let entity = new aPolWBTCDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWBTCDebtTransfer(
  event: aPolWBTCDebtTransferEvent
): void {
  let entity = new aPolWBTCDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
