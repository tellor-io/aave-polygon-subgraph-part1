import {
  aPolWMATICVDebtAccrueInterest as aPolWMATICVDebtAccrueInterestEvent,
  aPolWMATICVDebtApproval as aPolWMATICVDebtApprovalEvent,
  aPolWMATICVDebtBorrow as aPolWMATICVDebtBorrowEvent,
  aPolWMATICVDebtFailure as aPolWMATICVDebtFailureEvent,
  aPolWMATICVDebtLiquidateBorrow as aPolWMATICVDebtLiquidateBorrowEvent,
  aPolWMATICVDebtMint as aPolWMATICVDebtMintEvent,
  aPolWMATICVDebtNewAdmin as aPolWMATICVDebtNewAdminEvent,
  aPolWMATICVDebtNewComptroller as aPolWMATICVDebtNewComptrollerEvent,
  aPolWMATICVDebtNewImplementation as aPolWMATICVDebtNewImplementationEvent,
  aPolWMATICVDebtNewMarketInterestRateModel as aPolWMATICVDebtNewMarketInterestRateModelEvent,
  aPolWMATICVDebtNewPendingAdmin as aPolWMATICVDebtNewPendingAdminEvent,
  aPolWMATICVDebtNewReserveFactor as aPolWMATICVDebtNewReserveFactorEvent,
  aPolWMATICVDebtRedeem as aPolWMATICVDebtRedeemEvent,
  aPolWMATICVDebtRepayBorrow as aPolWMATICVDebtRepayBorrowEvent,
  aPolWMATICVDebtReservesAdded as aPolWMATICVDebtReservesAddedEvent,
  aPolWMATICVDebtReservesReduced as aPolWMATICVDebtReservesReducedEvent,
  aPolWMATICVDebtTransfer as aPolWMATICVDebtTransferEvent
} from "../generated/aPolWMATICVDebt/aPolWMATICVDebt"
import {
  aPolWMATICVDebtAccrueInterest,
  aPolWMATICVDebtApproval,
  aPolWMATICVDebtBorrow,
  aPolWMATICVDebtFailure,
  aPolWMATICVDebtLiquidateBorrow,
  aPolWMATICVDebtMint,
  aPolWMATICVDebtNewAdmin,
  aPolWMATICVDebtNewComptroller,
  aPolWMATICVDebtNewImplementation,
  aPolWMATICVDebtNewMarketInterestRateModel,
  aPolWMATICVDebtNewPendingAdmin,
  aPolWMATICVDebtNewReserveFactor,
  aPolWMATICVDebtRedeem,
  aPolWMATICVDebtRepayBorrow,
  aPolWMATICVDebtReservesAdded,
  aPolWMATICVDebtReservesReduced,
  aPolWMATICVDebtTransfer
} from "../generated/schema"

export function handleaPolWMATICVDebtAccrueInterest(
  event: aPolWMATICVDebtAccrueInterestEvent
): void {
  let entity = new aPolWMATICVDebtAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICVDebtApproval(
  event: aPolWMATICVDebtApprovalEvent
): void {
  let entity = new aPolWMATICVDebtApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWMATICVDebtBorrow(
  event: aPolWMATICVDebtBorrowEvent
): void {
  let entity = new aPolWMATICVDebtBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICVDebtFailure(
  event: aPolWMATICVDebtFailureEvent
): void {
  let entity = new aPolWMATICVDebtFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWMATICVDebtLiquidateBorrow(
  event: aPolWMATICVDebtLiquidateBorrowEvent
): void {
  let entity = new aPolWMATICVDebtLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWMATICVDebtMint(
  event: aPolWMATICVDebtMintEvent
): void {
  let entity = new aPolWMATICVDebtMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWMATICVDebtNewAdmin(
  event: aPolWMATICVDebtNewAdminEvent
): void {
  let entity = new aPolWMATICVDebtNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWMATICVDebtNewComptroller(
  event: aPolWMATICVDebtNewComptrollerEvent
): void {
  let entity = new aPolWMATICVDebtNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWMATICVDebtNewImplementation(
  event: aPolWMATICVDebtNewImplementationEvent
): void {
  let entity = new aPolWMATICVDebtNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWMATICVDebtNewMarketInterestRateModel(
  event: aPolWMATICVDebtNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWMATICVDebtNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWMATICVDebtNewPendingAdmin(
  event: aPolWMATICVDebtNewPendingAdminEvent
): void {
  let entity = new aPolWMATICVDebtNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWMATICVDebtNewReserveFactor(
  event: aPolWMATICVDebtNewReserveFactorEvent
): void {
  let entity = new aPolWMATICVDebtNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWMATICVDebtRedeem(
  event: aPolWMATICVDebtRedeemEvent
): void {
  let entity = new aPolWMATICVDebtRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWMATICVDebtRepayBorrow(
  event: aPolWMATICVDebtRepayBorrowEvent
): void {
  let entity = new aPolWMATICVDebtRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICVDebtReservesAdded(
  event: aPolWMATICVDebtReservesAddedEvent
): void {
  let entity = new aPolWMATICVDebtReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWMATICVDebtReservesReduced(
  event: aPolWMATICVDebtReservesReducedEvent
): void {
  let entity = new aPolWMATICVDebtReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWMATICVDebtTransfer(
  event: aPolWMATICVDebtTransferEvent
): void {
  let entity = new aPolWMATICVDebtTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
