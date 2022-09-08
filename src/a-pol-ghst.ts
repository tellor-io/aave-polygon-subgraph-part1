import {
  aPolGHSTAccrueInterest as aPolGHSTAccrueInterestEvent,
  aPolGHSTApproval as aPolGHSTApprovalEvent,
  aPolGHSTBorrow as aPolGHSTBorrowEvent,
  aPolGHSTFailure as aPolGHSTFailureEvent,
  aPolGHSTLiquidateBorrow as aPolGHSTLiquidateBorrowEvent,
  aPolGHSTMint as aPolGHSTMintEvent,
  aPolGHSTNewAdmin as aPolGHSTNewAdminEvent,
  aPolGHSTNewComptroller as aPolGHSTNewComptrollerEvent,
  aPolGHSTNewImplementation as aPolGHSTNewImplementationEvent,
  aPolGHSTNewMarketInterestRateModel as aPolGHSTNewMarketInterestRateModelEvent,
  aPolGHSTNewPendingAdmin as aPolGHSTNewPendingAdminEvent,
  aPolGHSTNewReserveFactor as aPolGHSTNewReserveFactorEvent,
  aPolGHSTRedeem as aPolGHSTRedeemEvent,
  aPolGHSTRepayBorrow as aPolGHSTRepayBorrowEvent,
  aPolGHSTReservesAdded as aPolGHSTReservesAddedEvent,
  aPolGHSTReservesReduced as aPolGHSTReservesReducedEvent,
  aPolGHSTTransfer as aPolGHSTTransferEvent
} from "../generated/aPolGHST/aPolGHST"
import {
  aPolGHSTAccrueInterest,
  aPolGHSTApproval,
  aPolGHSTBorrow,
  aPolGHSTFailure,
  aPolGHSTLiquidateBorrow,
  aPolGHSTMint,
  aPolGHSTNewAdmin,
  aPolGHSTNewComptroller,
  aPolGHSTNewImplementation,
  aPolGHSTNewMarketInterestRateModel,
  aPolGHSTNewPendingAdmin,
  aPolGHSTNewReserveFactor,
  aPolGHSTRedeem,
  aPolGHSTRepayBorrow,
  aPolGHSTReservesAdded,
  aPolGHSTReservesReduced,
  aPolGHSTTransfer
} from "../generated/schema"

export function handleaPolGHSTAccrueInterest(
  event: aPolGHSTAccrueInterestEvent
): void {
  let entity = new aPolGHSTAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolGHSTApproval(event: aPolGHSTApprovalEvent): void {
  let entity = new aPolGHSTApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolGHSTBorrow(event: aPolGHSTBorrowEvent): void {
  let entity = new aPolGHSTBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolGHSTFailure(event: aPolGHSTFailureEvent): void {
  let entity = new aPolGHSTFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolGHSTLiquidateBorrow(
  event: aPolGHSTLiquidateBorrowEvent
): void {
  let entity = new aPolGHSTLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolGHSTMint(event: aPolGHSTMintEvent): void {
  let entity = new aPolGHSTMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolGHSTNewAdmin(event: aPolGHSTNewAdminEvent): void {
  let entity = new aPolGHSTNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolGHSTNewComptroller(
  event: aPolGHSTNewComptrollerEvent
): void {
  let entity = new aPolGHSTNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolGHSTNewImplementation(
  event: aPolGHSTNewImplementationEvent
): void {
  let entity = new aPolGHSTNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolGHSTNewMarketInterestRateModel(
  event: aPolGHSTNewMarketInterestRateModelEvent
): void {
  let entity = new aPolGHSTNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolGHSTNewPendingAdmin(
  event: aPolGHSTNewPendingAdminEvent
): void {
  let entity = new aPolGHSTNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolGHSTNewReserveFactor(
  event: aPolGHSTNewReserveFactorEvent
): void {
  let entity = new aPolGHSTNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolGHSTRedeem(event: aPolGHSTRedeemEvent): void {
  let entity = new aPolGHSTRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolGHSTRepayBorrow(
  event: aPolGHSTRepayBorrowEvent
): void {
  let entity = new aPolGHSTRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolGHSTReservesAdded(
  event: aPolGHSTReservesAddedEvent
): void {
  let entity = new aPolGHSTReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolGHSTReservesReduced(
  event: aPolGHSTReservesReducedEvent
): void {
  let entity = new aPolGHSTReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolGHSTTransfer(event: aPolGHSTTransferEvent): void {
  let entity = new aPolGHSTTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
