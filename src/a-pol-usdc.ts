import {
  aPolUSDCAccrueInterest as aPolUSDCAccrueInterestEvent,
  aPolUSDCApproval as aPolUSDCApprovalEvent,
  aPolUSDCBorrow as aPolUSDCBorrowEvent,
  aPolUSDCFailure as aPolUSDCFailureEvent,
  aPolUSDCLiquidateBorrow as aPolUSDCLiquidateBorrowEvent,
  aPolUSDCMint as aPolUSDCMintEvent,
  aPolUSDCNewAdmin as aPolUSDCNewAdminEvent,
  aPolUSDCNewComptroller as aPolUSDCNewComptrollerEvent,
  aPolUSDCNewImplementation as aPolUSDCNewImplementationEvent,
  aPolUSDCNewMarketInterestRateModel as aPolUSDCNewMarketInterestRateModelEvent,
  aPolUSDCNewPendingAdmin as aPolUSDCNewPendingAdminEvent,
  aPolUSDCNewReserveFactor as aPolUSDCNewReserveFactorEvent,
  aPolUSDCRedeem as aPolUSDCRedeemEvent,
  aPolUSDCRepayBorrow as aPolUSDCRepayBorrowEvent,
  aPolUSDCReservesAdded as aPolUSDCReservesAddedEvent,
  aPolUSDCReservesReduced as aPolUSDCReservesReducedEvent,
  aPolUSDCTransfer as aPolUSDCTransferEvent
} from "../generated/aPolUSDC/aPolUSDC"
import {
  aPolUSDCAccrueInterest,
  aPolUSDCApproval,
  aPolUSDCBorrow,
  aPolUSDCFailure,
  aPolUSDCLiquidateBorrow,
  aPolUSDCMint,
  aPolUSDCNewAdmin,
  aPolUSDCNewComptroller,
  aPolUSDCNewImplementation,
  aPolUSDCNewMarketInterestRateModel,
  aPolUSDCNewPendingAdmin,
  aPolUSDCNewReserveFactor,
  aPolUSDCRedeem,
  aPolUSDCRepayBorrow,
  aPolUSDCReservesAdded,
  aPolUSDCReservesReduced,
  aPolUSDCTransfer
} from "../generated/schema"

export function handleaPolUSDCAccrueInterest(
  event: aPolUSDCAccrueInterestEvent
): void {
  let entity = new aPolUSDCAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCApproval(event: aPolUSDCApprovalEvent): void {
  let entity = new aPolUSDCApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolUSDCBorrow(event: aPolUSDCBorrowEvent): void {
  let entity = new aPolUSDCBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCFailure(event: aPolUSDCFailureEvent): void {
  let entity = new aPolUSDCFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolUSDCLiquidateBorrow(
  event: aPolUSDCLiquidateBorrowEvent
): void {
  let entity = new aPolUSDCLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolUSDCMint(event: aPolUSDCMintEvent): void {
  let entity = new aPolUSDCMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolUSDCNewAdmin(event: aPolUSDCNewAdminEvent): void {
  let entity = new aPolUSDCNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolUSDCNewComptroller(
  event: aPolUSDCNewComptrollerEvent
): void {
  let entity = new aPolUSDCNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolUSDCNewImplementation(
  event: aPolUSDCNewImplementationEvent
): void {
  let entity = new aPolUSDCNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolUSDCNewMarketInterestRateModel(
  event: aPolUSDCNewMarketInterestRateModelEvent
): void {
  let entity = new aPolUSDCNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolUSDCNewPendingAdmin(
  event: aPolUSDCNewPendingAdminEvent
): void {
  let entity = new aPolUSDCNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolUSDCNewReserveFactor(
  event: aPolUSDCNewReserveFactorEvent
): void {
  let entity = new aPolUSDCNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolUSDCRedeem(event: aPolUSDCRedeemEvent): void {
  let entity = new aPolUSDCRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolUSDCRepayBorrow(
  event: aPolUSDCRepayBorrowEvent
): void {
  let entity = new aPolUSDCRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolUSDCReservesAdded(
  event: aPolUSDCReservesAddedEvent
): void {
  let entity = new aPolUSDCReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDCReservesReduced(
  event: aPolUSDCReservesReducedEvent
): void {
  let entity = new aPolUSDCReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolUSDCTransfer(event: aPolUSDCTransferEvent): void {
  let entity = new aPolUSDCTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
