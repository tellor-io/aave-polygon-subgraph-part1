import {
  aPolDPIAccrueInterest as aPolDPIAccrueInterestEvent,
  aPolDPIApproval as aPolDPIApprovalEvent,
  aPolDPIBorrow as aPolDPIBorrowEvent,
  aPolDPIFailure as aPolDPIFailureEvent,
  aPolDPILiquidateBorrow as aPolDPILiquidateBorrowEvent,
  aPolDPIMint as aPolDPIMintEvent,
  aPolDPINewAdmin as aPolDPINewAdminEvent,
  aPolDPINewComptroller as aPolDPINewComptrollerEvent,
  aPolDPINewImplementation as aPolDPINewImplementationEvent,
  aPolDPINewMarketInterestRateModel as aPolDPINewMarketInterestRateModelEvent,
  aPolDPINewPendingAdmin as aPolDPINewPendingAdminEvent,
  aPolDPINewReserveFactor as aPolDPINewReserveFactorEvent,
  aPolDPIRedeem as aPolDPIRedeemEvent,
  aPolDPIRepayBorrow as aPolDPIRepayBorrowEvent,
  aPolDPIReservesAdded as aPolDPIReservesAddedEvent,
  aPolDPIReservesReduced as aPolDPIReservesReducedEvent,
  aPolDPITransfer as aPolDPITransferEvent
} from "../generated/aPolDPI/aPolDPI"
import {
  aPolDPIAccrueInterest,
  aPolDPIApproval,
  aPolDPIBorrow,
  aPolDPIFailure,
  aPolDPILiquidateBorrow,
  aPolDPIMint,
  aPolDPINewAdmin,
  aPolDPINewComptroller,
  aPolDPINewImplementation,
  aPolDPINewMarketInterestRateModel,
  aPolDPINewPendingAdmin,
  aPolDPINewReserveFactor,
  aPolDPIRedeem,
  aPolDPIRepayBorrow,
  aPolDPIReservesAdded,
  aPolDPIReservesReduced,
  aPolDPITransfer
} from "../generated/schema"

export function handleaPolDPIAccrueInterest(
  event: aPolDPIAccrueInterestEvent
): void {
  let entity = new aPolDPIAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDPIApproval(event: aPolDPIApprovalEvent): void {
  let entity = new aPolDPIApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolDPIBorrow(event: aPolDPIBorrowEvent): void {
  let entity = new aPolDPIBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDPIFailure(event: aPolDPIFailureEvent): void {
  let entity = new aPolDPIFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolDPILiquidateBorrow(
  event: aPolDPILiquidateBorrowEvent
): void {
  let entity = new aPolDPILiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolDPIMint(event: aPolDPIMintEvent): void {
  let entity = new aPolDPIMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolDPINewAdmin(event: aPolDPINewAdminEvent): void {
  let entity = new aPolDPINewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolDPINewComptroller(
  event: aPolDPINewComptrollerEvent
): void {
  let entity = new aPolDPINewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolDPINewImplementation(
  event: aPolDPINewImplementationEvent
): void {
  let entity = new aPolDPINewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolDPINewMarketInterestRateModel(
  event: aPolDPINewMarketInterestRateModelEvent
): void {
  let entity = new aPolDPINewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolDPINewPendingAdmin(
  event: aPolDPINewPendingAdminEvent
): void {
  let entity = new aPolDPINewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolDPINewReserveFactor(
  event: aPolDPINewReserveFactorEvent
): void {
  let entity = new aPolDPINewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolDPIRedeem(event: aPolDPIRedeemEvent): void {
  let entity = new aPolDPIRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolDPIRepayBorrow(event: aPolDPIRepayBorrowEvent): void {
  let entity = new aPolDPIRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDPIReservesAdded(
  event: aPolDPIReservesAddedEvent
): void {
  let entity = new aPolDPIReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDPIReservesReduced(
  event: aPolDPIReservesReducedEvent
): void {
  let entity = new aPolDPIReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDPITransfer(event: aPolDPITransferEvent): void {
  let entity = new aPolDPITransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
