import {
  Transfer as aPolDAITransferEvent
} from "../generated/aPolDAI/aPolDAI"
import {
  aPolDAIAccrueInterest,
  aPolDAIApproval,
  aPolDAIBorrow,
  aPolDAIFailure,
  aPolDAILiquidateBorrow,
  aPolDAIMint,
  aPolDAINewAdmin,
  aPolDAINewComptroller,
  aPolDAINewImplementation,
  aPolDAINewMarketInterestRateModel,
  aPolDAINewPendingAdmin,
  aPolDAINewReserveFactor,
  aPolDAIRedeem,
  aPolDAIRepayBorrow,
  aPolDAIReservesAdded,
  aPolDAIReservesReduced,
  aPolDAITransfer
} from "../generated/schema"

export function handleaPolDAIAccrueInterest(
  event: aPolDAIAccrueInterestEvent
): void {
  let entity = new aPolDAIAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAIApproval(event: aPolDAIApprovalEvent): void {
  let entity = new aPolDAIApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolDAIBorrow(event: aPolDAIBorrowEvent): void {
  let entity = new aPolDAIBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAIFailure(event: aPolDAIFailureEvent): void {
  let entity = new aPolDAIFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolDAILiquidateBorrow(
  event: aPolDAILiquidateBorrowEvent
): void {
  let entity = new aPolDAILiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolDAIMint(event: aPolDAIMintEvent): void {
  let entity = new aPolDAIMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolDAINewAdmin(event: aPolDAINewAdminEvent): void {
  let entity = new aPolDAINewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolDAINewComptroller(
  event: aPolDAINewComptrollerEvent
): void {
  let entity = new aPolDAINewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolDAINewImplementation(
  event: aPolDAINewImplementationEvent
): void {
  let entity = new aPolDAINewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolDAINewMarketInterestRateModel(
  event: aPolDAINewMarketInterestRateModelEvent
): void {
  let entity = new aPolDAINewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolDAINewPendingAdmin(
  event: aPolDAINewPendingAdminEvent
): void {
  let entity = new aPolDAINewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolDAINewReserveFactor(
  event: aPolDAINewReserveFactorEvent
): void {
  let entity = new aPolDAINewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolDAIRedeem(event: aPolDAIRedeemEvent): void {
  let entity = new aPolDAIRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolDAIRepayBorrow(event: aPolDAIRepayBorrowEvent): void {
  let entity = new aPolDAIRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolDAIReservesAdded(
  event: aPolDAIReservesAddedEvent
): void {
  let entity = new aPolDAIReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDAIReservesReduced(
  event: aPolDAIReservesReducedEvent
): void {
  let entity = new aPolDAIReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolDAITransfer(event: aPolDAITransferEvent): void {
  let entity = new aPolDAITransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
