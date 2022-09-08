import {
  aPolWETHAccrueInterest as aPolWETHAccrueInterestEvent,
  aPolWETHApproval as aPolWETHApprovalEvent,
  aPolWETHBorrow as aPolWETHBorrowEvent,
  aPolWETHFailure as aPolWETHFailureEvent,
  aPolWETHLiquidateBorrow as aPolWETHLiquidateBorrowEvent,
  aPolWETHMint as aPolWETHMintEvent,
  aPolWETHNewAdmin as aPolWETHNewAdminEvent,
  aPolWETHNewComptroller as aPolWETHNewComptrollerEvent,
  aPolWETHNewImplementation as aPolWETHNewImplementationEvent,
  aPolWETHNewMarketInterestRateModel as aPolWETHNewMarketInterestRateModelEvent,
  aPolWETHNewPendingAdmin as aPolWETHNewPendingAdminEvent,
  aPolWETHNewReserveFactor as aPolWETHNewReserveFactorEvent,
  aPolWETHRedeem as aPolWETHRedeemEvent,
  aPolWETHRepayBorrow as aPolWETHRepayBorrowEvent,
  aPolWETHReservesAdded as aPolWETHReservesAddedEvent,
  aPolWETHReservesReduced as aPolWETHReservesReducedEvent,
  aPolWETHTransfer as aPolWETHTransferEvent
} from "../generated/aPolWETH/aPolWETH"
import {
  aPolWETHAccrueInterest,
  aPolWETHApproval,
  aPolWETHBorrow,
  aPolWETHFailure,
  aPolWETHLiquidateBorrow,
  aPolWETHMint,
  aPolWETHNewAdmin,
  aPolWETHNewComptroller,
  aPolWETHNewImplementation,
  aPolWETHNewMarketInterestRateModel,
  aPolWETHNewPendingAdmin,
  aPolWETHNewReserveFactor,
  aPolWETHRedeem,
  aPolWETHRepayBorrow,
  aPolWETHReservesAdded,
  aPolWETHReservesReduced,
  aPolWETHTransfer
} from "../generated/schema"

export function handleaPolWETHAccrueInterest(
  event: aPolWETHAccrueInterestEvent
): void {
  let entity = new aPolWETHAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHApproval(event: aPolWETHApprovalEvent): void {
  let entity = new aPolWETHApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWETHBorrow(event: aPolWETHBorrowEvent): void {
  let entity = new aPolWETHBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHFailure(event: aPolWETHFailureEvent): void {
  let entity = new aPolWETHFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWETHLiquidateBorrow(
  event: aPolWETHLiquidateBorrowEvent
): void {
  let entity = new aPolWETHLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWETHMint(event: aPolWETHMintEvent): void {
  let entity = new aPolWETHMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWETHNewAdmin(event: aPolWETHNewAdminEvent): void {
  let entity = new aPolWETHNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWETHNewComptroller(
  event: aPolWETHNewComptrollerEvent
): void {
  let entity = new aPolWETHNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWETHNewImplementation(
  event: aPolWETHNewImplementationEvent
): void {
  let entity = new aPolWETHNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWETHNewMarketInterestRateModel(
  event: aPolWETHNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWETHNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWETHNewPendingAdmin(
  event: aPolWETHNewPendingAdminEvent
): void {
  let entity = new aPolWETHNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWETHNewReserveFactor(
  event: aPolWETHNewReserveFactorEvent
): void {
  let entity = new aPolWETHNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWETHRedeem(event: aPolWETHRedeemEvent): void {
  let entity = new aPolWETHRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWETHRepayBorrow(
  event: aPolWETHRepayBorrowEvent
): void {
  let entity = new aPolWETHRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWETHReservesAdded(
  event: aPolWETHReservesAddedEvent
): void {
  let entity = new aPolWETHReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWETHReservesReduced(
  event: aPolWETHReservesReducedEvent
): void {
  let entity = new aPolWETHReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWETHTransfer(event: aPolWETHTransferEvent): void {
  let entity = new aPolWETHTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
