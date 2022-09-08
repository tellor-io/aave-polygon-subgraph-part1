import {
  aPolBALAccrueInterest as aPolBALAccrueInterestEvent,
  aPolBALApproval as aPolBALApprovalEvent,
  aPolBALBorrow as aPolBALBorrowEvent,
  aPolBALFailure as aPolBALFailureEvent,
  aPolBALLiquidateBorrow as aPolBALLiquidateBorrowEvent,
  aPolBALMint as aPolBALMintEvent,
  aPolBALNewAdmin as aPolBALNewAdminEvent,
  aPolBALNewComptroller as aPolBALNewComptrollerEvent,
  aPolBALNewImplementation as aPolBALNewImplementationEvent,
  aPolBALNewMarketInterestRateModel as aPolBALNewMarketInterestRateModelEvent,
  aPolBALNewPendingAdmin as aPolBALNewPendingAdminEvent,
  aPolBALNewReserveFactor as aPolBALNewReserveFactorEvent,
  aPolBALRedeem as aPolBALRedeemEvent,
  aPolBALRepayBorrow as aPolBALRepayBorrowEvent,
  aPolBALReservesAdded as aPolBALReservesAddedEvent,
  aPolBALReservesReduced as aPolBALReservesReducedEvent,
  aPolBALTransfer as aPolBALTransferEvent
} from "../generated/aPolBAL/aPolBAL"
import {
  aPolBALAccrueInterest,
  aPolBALApproval,
  aPolBALBorrow,
  aPolBALFailure,
  aPolBALLiquidateBorrow,
  aPolBALMint,
  aPolBALNewAdmin,
  aPolBALNewComptroller,
  aPolBALNewImplementation,
  aPolBALNewMarketInterestRateModel,
  aPolBALNewPendingAdmin,
  aPolBALNewReserveFactor,
  aPolBALRedeem,
  aPolBALRepayBorrow,
  aPolBALReservesAdded,
  aPolBALReservesReduced,
  aPolBALTransfer
} from "../generated/schema"

export function handleaPolBALAccrueInterest(
  event: aPolBALAccrueInterestEvent
): void {
  let entity = new aPolBALAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolBALApproval(event: aPolBALApprovalEvent): void {
  let entity = new aPolBALApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolBALBorrow(event: aPolBALBorrowEvent): void {
  let entity = new aPolBALBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolBALFailure(event: aPolBALFailureEvent): void {
  let entity = new aPolBALFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolBALLiquidateBorrow(
  event: aPolBALLiquidateBorrowEvent
): void {
  let entity = new aPolBALLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolBALMint(event: aPolBALMintEvent): void {
  let entity = new aPolBALMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolBALNewAdmin(event: aPolBALNewAdminEvent): void {
  let entity = new aPolBALNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolBALNewComptroller(
  event: aPolBALNewComptrollerEvent
): void {
  let entity = new aPolBALNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolBALNewImplementation(
  event: aPolBALNewImplementationEvent
): void {
  let entity = new aPolBALNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolBALNewMarketInterestRateModel(
  event: aPolBALNewMarketInterestRateModelEvent
): void {
  let entity = new aPolBALNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolBALNewPendingAdmin(
  event: aPolBALNewPendingAdminEvent
): void {
  let entity = new aPolBALNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolBALNewReserveFactor(
  event: aPolBALNewReserveFactorEvent
): void {
  let entity = new aPolBALNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolBALRedeem(event: aPolBALRedeemEvent): void {
  let entity = new aPolBALRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolBALRepayBorrow(event: aPolBALRepayBorrowEvent): void {
  let entity = new aPolBALRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolBALReservesAdded(
  event: aPolBALReservesAddedEvent
): void {
  let entity = new aPolBALReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolBALReservesReduced(
  event: aPolBALReservesReducedEvent
): void {
  let entity = new aPolBALReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolBALTransfer(event: aPolBALTransferEvent): void {
  let entity = new aPolBALTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
