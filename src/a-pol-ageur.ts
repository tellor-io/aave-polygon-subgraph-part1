import {
  aPolAGEURAccrueInterest as aPolAGEURAccrueInterestEvent,
  aPolAGEURApproval as aPolAGEURApprovalEvent,
  aPolAGEURBorrow as aPolAGEURBorrowEvent,
  aPolAGEURFailure as aPolAGEURFailureEvent,
  aPolAGEURLiquidateBorrow as aPolAGEURLiquidateBorrowEvent,
  aPolAGEURMint as aPolAGEURMintEvent,
  aPolAGEURNewAdmin as aPolAGEURNewAdminEvent,
  aPolAGEURNewComptroller as aPolAGEURNewComptrollerEvent,
  aPolAGEURNewImplementation as aPolAGEURNewImplementationEvent,
  aPolAGEURNewMarketInterestRateModel as aPolAGEURNewMarketInterestRateModelEvent,
  aPolAGEURNewPendingAdmin as aPolAGEURNewPendingAdminEvent,
  aPolAGEURNewReserveFactor as aPolAGEURNewReserveFactorEvent,
  aPolAGEURRedeem as aPolAGEURRedeemEvent,
  aPolAGEURRepayBorrow as aPolAGEURRepayBorrowEvent,
  aPolAGEURReservesAdded as aPolAGEURReservesAddedEvent,
  aPolAGEURReservesReduced as aPolAGEURReservesReducedEvent,
  aPolAGEURTransfer as aPolAGEURTransferEvent
} from "../generated/aPolAGEUR/aPolAGEUR"
import {
  aPolAGEURAccrueInterest,
  aPolAGEURApproval,
  aPolAGEURBorrow,
  aPolAGEURFailure,
  aPolAGEURLiquidateBorrow,
  aPolAGEURMint,
  aPolAGEURNewAdmin,
  aPolAGEURNewComptroller,
  aPolAGEURNewImplementation,
  aPolAGEURNewMarketInterestRateModel,
  aPolAGEURNewPendingAdmin,
  aPolAGEURNewReserveFactor,
  aPolAGEURRedeem,
  aPolAGEURRepayBorrow,
  aPolAGEURReservesAdded,
  aPolAGEURReservesReduced,
  aPolAGEURTransfer
} from "../generated/schema"

export function handleaPolAGEURAccrueInterest(
  event: aPolAGEURAccrueInterestEvent
): void {
  let entity = new aPolAGEURAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURApproval(event: aPolAGEURApprovalEvent): void {
  let entity = new aPolAGEURApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolAGEURBorrow(event: aPolAGEURBorrowEvent): void {
  let entity = new aPolAGEURBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURFailure(event: aPolAGEURFailureEvent): void {
  let entity = new aPolAGEURFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolAGEURLiquidateBorrow(
  event: aPolAGEURLiquidateBorrowEvent
): void {
  let entity = new aPolAGEURLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolAGEURMint(event: aPolAGEURMintEvent): void {
  let entity = new aPolAGEURMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolAGEURNewAdmin(event: aPolAGEURNewAdminEvent): void {
  let entity = new aPolAGEURNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolAGEURNewComptroller(
  event: aPolAGEURNewComptrollerEvent
): void {
  let entity = new aPolAGEURNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolAGEURNewImplementation(
  event: aPolAGEURNewImplementationEvent
): void {
  let entity = new aPolAGEURNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolAGEURNewMarketInterestRateModel(
  event: aPolAGEURNewMarketInterestRateModelEvent
): void {
  let entity = new aPolAGEURNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolAGEURNewPendingAdmin(
  event: aPolAGEURNewPendingAdminEvent
): void {
  let entity = new aPolAGEURNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolAGEURNewReserveFactor(
  event: aPolAGEURNewReserveFactorEvent
): void {
  let entity = new aPolAGEURNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolAGEURRedeem(event: aPolAGEURRedeemEvent): void {
  let entity = new aPolAGEURRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolAGEURRepayBorrow(
  event: aPolAGEURRepayBorrowEvent
): void {
  let entity = new aPolAGEURRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolAGEURReservesAdded(
  event: aPolAGEURReservesAddedEvent
): void {
  let entity = new aPolAGEURReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolAGEURReservesReduced(
  event: aPolAGEURReservesReducedEvent
): void {
  let entity = new aPolAGEURReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolAGEURTransfer(event: aPolAGEURTransferEvent): void {
  let entity = new aPolAGEURTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
