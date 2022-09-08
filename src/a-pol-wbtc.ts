import {
  aPolWBTCAccrueInterest as aPolWBTCAccrueInterestEvent,
  aPolWBTCApproval as aPolWBTCApprovalEvent,
  aPolWBTCBorrow as aPolWBTCBorrowEvent,
  aPolWBTCFailure as aPolWBTCFailureEvent,
  aPolWBTCLiquidateBorrow as aPolWBTCLiquidateBorrowEvent,
  aPolWBTCMint as aPolWBTCMintEvent,
  aPolWBTCNewAdmin as aPolWBTCNewAdminEvent,
  aPolWBTCNewComptroller as aPolWBTCNewComptrollerEvent,
  aPolWBTCNewImplementation as aPolWBTCNewImplementationEvent,
  aPolWBTCNewMarketInterestRateModel as aPolWBTCNewMarketInterestRateModelEvent,
  aPolWBTCNewPendingAdmin as aPolWBTCNewPendingAdminEvent,
  aPolWBTCNewReserveFactor as aPolWBTCNewReserveFactorEvent,
  aPolWBTCRedeem as aPolWBTCRedeemEvent,
  aPolWBTCRepayBorrow as aPolWBTCRepayBorrowEvent,
  aPolWBTCReservesAdded as aPolWBTCReservesAddedEvent,
  aPolWBTCReservesReduced as aPolWBTCReservesReducedEvent,
  aPolWBTCTransfer as aPolWBTCTransferEvent
} from "../generated/aPolWBTC/aPolWBTC"
import {
  aPolWBTCAccrueInterest,
  aPolWBTCApproval,
  aPolWBTCBorrow,
  aPolWBTCFailure,
  aPolWBTCLiquidateBorrow,
  aPolWBTCMint,
  aPolWBTCNewAdmin,
  aPolWBTCNewComptroller,
  aPolWBTCNewImplementation,
  aPolWBTCNewMarketInterestRateModel,
  aPolWBTCNewPendingAdmin,
  aPolWBTCNewReserveFactor,
  aPolWBTCRedeem,
  aPolWBTCRepayBorrow,
  aPolWBTCReservesAdded,
  aPolWBTCReservesReduced,
  aPolWBTCTransfer
} from "../generated/schema"

export function handleaPolWBTCAccrueInterest(
  event: aPolWBTCAccrueInterestEvent
): void {
  let entity = new aPolWBTCAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCApproval(event: aPolWBTCApprovalEvent): void {
  let entity = new aPolWBTCApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWBTCBorrow(event: aPolWBTCBorrowEvent): void {
  let entity = new aPolWBTCBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCFailure(event: aPolWBTCFailureEvent): void {
  let entity = new aPolWBTCFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWBTCLiquidateBorrow(
  event: aPolWBTCLiquidateBorrowEvent
): void {
  let entity = new aPolWBTCLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWBTCMint(event: aPolWBTCMintEvent): void {
  let entity = new aPolWBTCMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWBTCNewAdmin(event: aPolWBTCNewAdminEvent): void {
  let entity = new aPolWBTCNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWBTCNewComptroller(
  event: aPolWBTCNewComptrollerEvent
): void {
  let entity = new aPolWBTCNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWBTCNewImplementation(
  event: aPolWBTCNewImplementationEvent
): void {
  let entity = new aPolWBTCNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWBTCNewMarketInterestRateModel(
  event: aPolWBTCNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWBTCNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWBTCNewPendingAdmin(
  event: aPolWBTCNewPendingAdminEvent
): void {
  let entity = new aPolWBTCNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWBTCNewReserveFactor(
  event: aPolWBTCNewReserveFactorEvent
): void {
  let entity = new aPolWBTCNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWBTCRedeem(event: aPolWBTCRedeemEvent): void {
  let entity = new aPolWBTCRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWBTCRepayBorrow(
  event: aPolWBTCRepayBorrowEvent
): void {
  let entity = new aPolWBTCRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWBTCReservesAdded(
  event: aPolWBTCReservesAddedEvent
): void {
  let entity = new aPolWBTCReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWBTCReservesReduced(
  event: aPolWBTCReservesReducedEvent
): void {
  let entity = new aPolWBTCReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWBTCTransfer(event: aPolWBTCTransferEvent): void {
  let entity = new aPolWBTCTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
