import {
  aPolLINKAccrueInterest as aPolLINKAccrueInterestEvent,
  aPolLINKApproval as aPolLINKApprovalEvent,
  aPolLINKBorrow as aPolLINKBorrowEvent,
  aPolLINKFailure as aPolLINKFailureEvent,
  aPolLINKLiquidateBorrow as aPolLINKLiquidateBorrowEvent,
  aPolLINKMint as aPolLINKMintEvent,
  aPolLINKNewAdmin as aPolLINKNewAdminEvent,
  aPolLINKNewComptroller as aPolLINKNewComptrollerEvent,
  aPolLINKNewImplementation as aPolLINKNewImplementationEvent,
  aPolLINKNewMarketInterestRateModel as aPolLINKNewMarketInterestRateModelEvent,
  aPolLINKNewPendingAdmin as aPolLINKNewPendingAdminEvent,
  aPolLINKNewReserveFactor as aPolLINKNewReserveFactorEvent,
  aPolLINKRedeem as aPolLINKRedeemEvent,
  aPolLINKRepayBorrow as aPolLINKRepayBorrowEvent,
  aPolLINKReservesAdded as aPolLINKReservesAddedEvent,
  aPolLINKReservesReduced as aPolLINKReservesReducedEvent,
  aPolLINKTransfer as aPolLINKTransferEvent
} from "../generated/aPolLINK/aPolLINK"
import {
  aPolLINKAccrueInterest,
  aPolLINKApproval,
  aPolLINKBorrow,
  aPolLINKFailure,
  aPolLINKLiquidateBorrow,
  aPolLINKMint,
  aPolLINKNewAdmin,
  aPolLINKNewComptroller,
  aPolLINKNewImplementation,
  aPolLINKNewMarketInterestRateModel,
  aPolLINKNewPendingAdmin,
  aPolLINKNewReserveFactor,
  aPolLINKRedeem,
  aPolLINKRepayBorrow,
  aPolLINKReservesAdded,
  aPolLINKReservesReduced,
  aPolLINKTransfer
} from "../generated/schema"

export function handleaPolLINKAccrueInterest(
  event: aPolLINKAccrueInterestEvent
): void {
  let entity = new aPolLINKAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKApproval(event: aPolLINKApprovalEvent): void {
  let entity = new aPolLINKApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolLINKBorrow(event: aPolLINKBorrowEvent): void {
  let entity = new aPolLINKBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKFailure(event: aPolLINKFailureEvent): void {
  let entity = new aPolLINKFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolLINKLiquidateBorrow(
  event: aPolLINKLiquidateBorrowEvent
): void {
  let entity = new aPolLINKLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolLINKMint(event: aPolLINKMintEvent): void {
  let entity = new aPolLINKMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolLINKNewAdmin(event: aPolLINKNewAdminEvent): void {
  let entity = new aPolLINKNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolLINKNewComptroller(
  event: aPolLINKNewComptrollerEvent
): void {
  let entity = new aPolLINKNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolLINKNewImplementation(
  event: aPolLINKNewImplementationEvent
): void {
  let entity = new aPolLINKNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolLINKNewMarketInterestRateModel(
  event: aPolLINKNewMarketInterestRateModelEvent
): void {
  let entity = new aPolLINKNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolLINKNewPendingAdmin(
  event: aPolLINKNewPendingAdminEvent
): void {
  let entity = new aPolLINKNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolLINKNewReserveFactor(
  event: aPolLINKNewReserveFactorEvent
): void {
  let entity = new aPolLINKNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolLINKRedeem(event: aPolLINKRedeemEvent): void {
  let entity = new aPolLINKRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolLINKRepayBorrow(
  event: aPolLINKRepayBorrowEvent
): void {
  let entity = new aPolLINKRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolLINKReservesAdded(
  event: aPolLINKReservesAddedEvent
): void {
  let entity = new aPolLINKReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolLINKReservesReduced(
  event: aPolLINKReservesReducedEvent
): void {
  let entity = new aPolLINKReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolLINKTransfer(event: aPolLINKTransferEvent): void {
  let entity = new aPolLINKTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
