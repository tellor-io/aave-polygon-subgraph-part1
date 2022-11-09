import {
  aPolASUSHISDebtAccrueInterest as aPolASUSHISDebtAccrueInterestEvent,
  aPolASUSHISDebtApproval as aPolASUSHISDebtApprovalEvent,
  aPolASUSHISDebtBorrow as aPolASUSHISDebtBorrowEvent,
  aPolASUSHISDebtFailure as aPolASUSHISDebtFailureEvent,
  aPolASUSHISDebtLiquidateBorrow as aPolASUSHISDebtLiquidateBorrowEvent,
  aPolASUSHISDebtMint as aPolASUSHISDebtMintEvent,
  aPolASUSHISDebtNewAdmin as aPolASUSHISDebtNewAdminEvent,
  aPolASUSHISDebtNewComptroller as aPolASUSHISDebtNewComptrollerEvent,
  aPolASUSHISDebtNewImplementation as aPolASUSHISDebtNewImplementationEvent,
  aPolASUSHISDebtNewMarketInterestRateModel as aPolASUSHISDebtNewMarketInterestRateModelEvent,
  aPolASUSHISDebtNewPendingAdmin as aPolASUSHISDebtNewPendingAdminEvent,
  aPolASUSHISDebtNewReserveFactor as aPolASUSHISDebtNewReserveFactorEvent,
  aPolASUSHISDebtRedeem as aPolASUSHISDebtRedeemEvent,
  aPolASUSHISDebtRepayBorrow as aPolASUSHISDebtRepayBorrowEvent,
  aPolASUSHISDebtReservesAdded as aPolASUSHISDebtReservesAddedEvent,
  aPolASUSHISDebtReservesReduced as aPolASUSHISDebtReservesReducedEvent,
  aPolASUSHISDebtTransfer as aPolASUSHISDebtTransferEvent
} from "../generated/aPolASUSHISDebt/aPolASUSHISDebt"
import {
  aPolASUSHISDebtAccrueInterest,
  aPolASUSHISDebtApproval,
  aPolASUSHISDebtBorrow,
  aPolASUSHISDebtFailure,
  aPolASUSHISDebtLiquidateBorrow,
  aPolASUSHISDebtMint,
  aPolASUSHISDebtNewAdmin,
  aPolASUSHISDebtNewComptroller,
  aPolASUSHISDebtNewImplementation,
  aPolASUSHISDebtNewMarketInterestRateModel,
  aPolASUSHISDebtNewPendingAdmin,
  aPolASUSHISDebtNewReserveFactor,
  aPolASUSHISDebtRedeem,
  aPolASUSHISDebtRepayBorrow,
  aPolASUSHISDebtReservesAdded,
  aPolASUSHISDebtReservesReduced,
  aPolASUSHISDebtTransfer
} from "../generated/schema"

export function handleaPolASUSHISDebtAccrueInterest(
  event: aPolASUSHISDebtAccrueInterestEvent
): void {
  let entity = new aPolASUSHISDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolASUSHISDebtApproval(
  event: aPolASUSHISDebtApprovalEvent
): void {
  let entity = new aPolASUSHISDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolASUSHISDebtBorrow(
  event: aPolASUSHISDebtBorrowEvent
): void {
  let entity = new aPolASUSHISDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolASUSHISDebtFailure(
  event: aPolASUSHISDebtFailureEvent
): void {
  let entity = new aPolASUSHISDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolASUSHISDebtLiquidateBorrow(
  event: aPolASUSHISDebtLiquidateBorrowEvent
): void {
  let entity = new aPolASUSHISDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolASUSHISDebtMint(
  event: aPolASUSHISDebtMintEvent
): void {
  let entity = new aPolASUSHISDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolASUSHISDebtNewAdmin(
  event: aPolASUSHISDebtNewAdminEvent
): void {
  let entity = new aPolASUSHISDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolASUSHISDebtNewComptroller(
  event: aPolASUSHISDebtNewComptrollerEvent
): void {
  let entity = new aPolASUSHISDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolASUSHISDebtNewImplementation(
  event: aPolASUSHISDebtNewImplementationEvent
): void {
  let entity = new aPolASUSHISDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolASUSHISDebtNewMarketInterestRateModel(
  event: aPolASUSHISDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolASUSHISDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolASUSHISDebtNewPendingAdmin(
  event: aPolASUSHISDebtNewPendingAdminEvent
): void {
  let entity = new aPolASUSHISDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolASUSHISDebtNewReserveFactor(
  event: aPolASUSHISDebtNewReserveFactorEvent
): void {
  let entity = new aPolASUSHISDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolASUSHISDebtRedeem(
  event: aPolASUSHISDebtRedeemEvent
): void {
  let entity = new aPolASUSHISDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolASUSHISDebtRepayBorrow(
  event: aPolASUSHISDebtRepayBorrowEvent
): void {
  let entity = new aPolASUSHISDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolASUSHISDebtReservesAdded(
  event: aPolASUSHISDebtReservesAddedEvent
): void {
  let entity = new aPolASUSHISDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolASUSHISDebtReservesReduced(
  event: aPolASUSHISDebtReservesReducedEvent
): void {
  let entity = new aPolASUSHISDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolASUSHISDebtTransfer(
  event: aPolASUSHISDebtTransferEvent
): void {
  let entity = new aPolASUSHISDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
