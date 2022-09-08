import {
  aPolSUSHIAccrueInterest as aPolSUSHIAccrueInterestEvent,
  aPolSUSHIApproval as aPolSUSHIApprovalEvent,
  aPolSUSHIBorrow as aPolSUSHIBorrowEvent,
  aPolSUSHIFailure as aPolSUSHIFailureEvent,
  aPolSUSHILiquidateBorrow as aPolSUSHILiquidateBorrowEvent,
  aPolSUSHIMint as aPolSUSHIMintEvent,
  aPolSUSHINewAdmin as aPolSUSHINewAdminEvent,
  aPolSUSHINewComptroller as aPolSUSHINewComptrollerEvent,
  aPolSUSHINewImplementation as aPolSUSHINewImplementationEvent,
  aPolSUSHINewMarketInterestRateModel as aPolSUSHINewMarketInterestRateModelEvent,
  aPolSUSHINewPendingAdmin as aPolSUSHINewPendingAdminEvent,
  aPolSUSHINewReserveFactor as aPolSUSHINewReserveFactorEvent,
  aPolSUSHIRedeem as aPolSUSHIRedeemEvent,
  aPolSUSHIRepayBorrow as aPolSUSHIRepayBorrowEvent,
  aPolSUSHIReservesAdded as aPolSUSHIReservesAddedEvent,
  aPolSUSHIReservesReduced as aPolSUSHIReservesReducedEvent,
  aPolSUSHITransfer as aPolSUSHITransferEvent
} from "../generated/aPolSUSHI/aPolSUSHI"
import {
  aPolSUSHIAccrueInterest,
  aPolSUSHIApproval,
  aPolSUSHIBorrow,
  aPolSUSHIFailure,
  aPolSUSHILiquidateBorrow,
  aPolSUSHIMint,
  aPolSUSHINewAdmin,
  aPolSUSHINewComptroller,
  aPolSUSHINewImplementation,
  aPolSUSHINewMarketInterestRateModel,
  aPolSUSHINewPendingAdmin,
  aPolSUSHINewReserveFactor,
  aPolSUSHIRedeem,
  aPolSUSHIRepayBorrow,
  aPolSUSHIReservesAdded,
  aPolSUSHIReservesReduced,
  aPolSUSHITransfer
} from "../generated/schema"

export function handleaPolSUSHIAccrueInterest(
  event: aPolSUSHIAccrueInterestEvent
): void {
  let entity = new aPolSUSHIAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolSUSHIApproval(event: aPolSUSHIApprovalEvent): void {
  let entity = new aPolSUSHIApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolSUSHIBorrow(event: aPolSUSHIBorrowEvent): void {
  let entity = new aPolSUSHIBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolSUSHIFailure(event: aPolSUSHIFailureEvent): void {
  let entity = new aPolSUSHIFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolSUSHILiquidateBorrow(
  event: aPolSUSHILiquidateBorrowEvent
): void {
  let entity = new aPolSUSHILiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolSUSHIMint(event: aPolSUSHIMintEvent): void {
  let entity = new aPolSUSHIMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolSUSHINewAdmin(event: aPolSUSHINewAdminEvent): void {
  let entity = new aPolSUSHINewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolSUSHINewComptroller(
  event: aPolSUSHINewComptrollerEvent
): void {
  let entity = new aPolSUSHINewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolSUSHINewImplementation(
  event: aPolSUSHINewImplementationEvent
): void {
  let entity = new aPolSUSHINewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolSUSHINewMarketInterestRateModel(
  event: aPolSUSHINewMarketInterestRateModelEvent
): void {
  let entity = new aPolSUSHINewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolSUSHINewPendingAdmin(
  event: aPolSUSHINewPendingAdminEvent
): void {
  let entity = new aPolSUSHINewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolSUSHINewReserveFactor(
  event: aPolSUSHINewReserveFactorEvent
): void {
  let entity = new aPolSUSHINewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolSUSHIRedeem(event: aPolSUSHIRedeemEvent): void {
  let entity = new aPolSUSHIRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolSUSHIRepayBorrow(
  event: aPolSUSHIRepayBorrowEvent
): void {
  let entity = new aPolSUSHIRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolSUSHIReservesAdded(
  event: aPolSUSHIReservesAddedEvent
): void {
  let entity = new aPolSUSHIReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolSUSHIReservesReduced(
  event: aPolSUSHIReservesReducedEvent
): void {
  let entity = new aPolSUSHIReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolSUSHITransfer(event: aPolSUSHITransferEvent): void {
  let entity = new aPolSUSHITransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
