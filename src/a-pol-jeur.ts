import {
  aPolJEURAccrueInterest as aPolJEURAccrueInterestEvent,
  aPolJEURApproval as aPolJEURApprovalEvent,
  aPolJEURBorrow as aPolJEURBorrowEvent,
  aPolJEURFailure as aPolJEURFailureEvent,
  aPolJEURLiquidateBorrow as aPolJEURLiquidateBorrowEvent,
  aPolJEURMint as aPolJEURMintEvent,
  aPolJEURNewAdmin as aPolJEURNewAdminEvent,
  aPolJEURNewComptroller as aPolJEURNewComptrollerEvent,
  aPolJEURNewImplementation as aPolJEURNewImplementationEvent,
  aPolJEURNewMarketInterestRateModel as aPolJEURNewMarketInterestRateModelEvent,
  aPolJEURNewPendingAdmin as aPolJEURNewPendingAdminEvent,
  aPolJEURNewReserveFactor as aPolJEURNewReserveFactorEvent,
  aPolJEURRedeem as aPolJEURRedeemEvent,
  aPolJEURRepayBorrow as aPolJEURRepayBorrowEvent,
  aPolJEURReservesAdded as aPolJEURReservesAddedEvent,
  aPolJEURReservesReduced as aPolJEURReservesReducedEvent,
  aPolJEURTransfer as aPolJEURTransferEvent
} from "../generated/aPolJEUR/aPolJEUR"
import {
  aPolJEURAccrueInterest,
  aPolJEURApproval,
  aPolJEURBorrow,
  aPolJEURFailure,
  aPolJEURLiquidateBorrow,
  aPolJEURMint,
  aPolJEURNewAdmin,
  aPolJEURNewComptroller,
  aPolJEURNewImplementation,
  aPolJEURNewMarketInterestRateModel,
  aPolJEURNewPendingAdmin,
  aPolJEURNewReserveFactor,
  aPolJEURRedeem,
  aPolJEURRepayBorrow,
  aPolJEURReservesAdded,
  aPolJEURReservesReduced,
  aPolJEURTransfer
} from "../generated/schema"

export function handleaPolJEURAccrueInterest(
  event: aPolJEURAccrueInterestEvent
): void {
  let entity = new aPolJEURAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolJEURApproval(event: aPolJEURApprovalEvent): void {
  let entity = new aPolJEURApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolJEURBorrow(event: aPolJEURBorrowEvent): void {
  let entity = new aPolJEURBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolJEURFailure(event: aPolJEURFailureEvent): void {
  let entity = new aPolJEURFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolJEURLiquidateBorrow(
  event: aPolJEURLiquidateBorrowEvent
): void {
  let entity = new aPolJEURLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolJEURMint(event: aPolJEURMintEvent): void {
  let entity = new aPolJEURMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolJEURNewAdmin(event: aPolJEURNewAdminEvent): void {
  let entity = new aPolJEURNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolJEURNewComptroller(
  event: aPolJEURNewComptrollerEvent
): void {
  let entity = new aPolJEURNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolJEURNewImplementation(
  event: aPolJEURNewImplementationEvent
): void {
  let entity = new aPolJEURNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolJEURNewMarketInterestRateModel(
  event: aPolJEURNewMarketInterestRateModelEvent
): void {
  let entity = new aPolJEURNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolJEURNewPendingAdmin(
  event: aPolJEURNewPendingAdminEvent
): void {
  let entity = new aPolJEURNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolJEURNewReserveFactor(
  event: aPolJEURNewReserveFactorEvent
): void {
  let entity = new aPolJEURNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolJEURRedeem(event: aPolJEURRedeemEvent): void {
  let entity = new aPolJEURRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolJEURRepayBorrow(
  event: aPolJEURRepayBorrowEvent
): void {
  let entity = new aPolJEURRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolJEURReservesAdded(
  event: aPolJEURReservesAddedEvent
): void {
  let entity = new aPolJEURReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolJEURReservesReduced(
  event: aPolJEURReservesReducedEvent
): void {
  let entity = new aPolJEURReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolJEURTransfer(event: aPolJEURTransferEvent): void {
  let entity = new aPolJEURTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
