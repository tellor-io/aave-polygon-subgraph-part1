import {
  aPolWMATICAccrueInterest as aPolWMATICAccrueInterestEvent,
  aPolWMATICApproval as aPolWMATICApprovalEvent,
  aPolWMATICBorrow as aPolWMATICBorrowEvent,
  aPolWMATICFailure as aPolWMATICFailureEvent,
  aPolWMATICLiquidateBorrow as aPolWMATICLiquidateBorrowEvent,
  aPolWMATICMint as aPolWMATICMintEvent,
  aPolWMATICNewAdmin as aPolWMATICNewAdminEvent,
  aPolWMATICNewComptroller as aPolWMATICNewComptrollerEvent,
  aPolWMATICNewImplementation as aPolWMATICNewImplementationEvent,
  aPolWMATICNewMarketInterestRateModel as aPolWMATICNewMarketInterestRateModelEvent,
  aPolWMATICNewPendingAdmin as aPolWMATICNewPendingAdminEvent,
  aPolWMATICNewReserveFactor as aPolWMATICNewReserveFactorEvent,
  aPolWMATICRedeem as aPolWMATICRedeemEvent,
  aPolWMATICRepayBorrow as aPolWMATICRepayBorrowEvent,
  aPolWMATICReservesAdded as aPolWMATICReservesAddedEvent,
  aPolWMATICReservesReduced as aPolWMATICReservesReducedEvent,
  aPolWMATICTransfer as aPolWMATICTransferEvent
} from "../generated/aPolWMATIC/aPolWMATIC"
import {
  aPolWMATICAccrueInterest,
  aPolWMATICApproval,
  aPolWMATICBorrow,
  aPolWMATICFailure,
  aPolWMATICLiquidateBorrow,
  aPolWMATICMint,
  aPolWMATICNewAdmin,
  aPolWMATICNewComptroller,
  aPolWMATICNewImplementation,
  aPolWMATICNewMarketInterestRateModel,
  aPolWMATICNewPendingAdmin,
  aPolWMATICNewReserveFactor,
  aPolWMATICRedeem,
  aPolWMATICRepayBorrow,
  aPolWMATICReservesAdded,
  aPolWMATICReservesReduced,
  aPolWMATICTransfer
} from "../generated/schema"

export function handleaPolWMATICAccrueInterest(
  event: aPolWMATICAccrueInterestEvent
): void {
  let entity = new aPolWMATICAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICApproval(event: aPolWMATICApprovalEvent): void {
  let entity = new aPolWMATICApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolWMATICBorrow(event: aPolWMATICBorrowEvent): void {
  let entity = new aPolWMATICBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICFailure(event: aPolWMATICFailureEvent): void {
  let entity = new aPolWMATICFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolWMATICLiquidateBorrow(
  event: aPolWMATICLiquidateBorrowEvent
): void {
  let entity = new aPolWMATICLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolWMATICMint(event: aPolWMATICMintEvent): void {
  let entity = new aPolWMATICMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolWMATICNewAdmin(event: aPolWMATICNewAdminEvent): void {
  let entity = new aPolWMATICNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolWMATICNewComptroller(
  event: aPolWMATICNewComptrollerEvent
): void {
  let entity = new aPolWMATICNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolWMATICNewImplementation(
  event: aPolWMATICNewImplementationEvent
): void {
  let entity = new aPolWMATICNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolWMATICNewMarketInterestRateModel(
  event: aPolWMATICNewMarketInterestRateModelEvent
): void {
  let entity = new aPolWMATICNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolWMATICNewPendingAdmin(
  event: aPolWMATICNewPendingAdminEvent
): void {
  let entity = new aPolWMATICNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolWMATICNewReserveFactor(
  event: aPolWMATICNewReserveFactorEvent
): void {
  let entity = new aPolWMATICNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolWMATICRedeem(event: aPolWMATICRedeemEvent): void {
  let entity = new aPolWMATICRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolWMATICRepayBorrow(
  event: aPolWMATICRepayBorrowEvent
): void {
  let entity = new aPolWMATICRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolWMATICReservesAdded(
  event: aPolWMATICReservesAddedEvent
): void {
  let entity = new aPolWMATICReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWMATICReservesReduced(
  event: aPolWMATICReservesReducedEvent
): void {
  let entity = new aPolWMATICReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolWMATICTransfer(event: aPolWMATICTransferEvent): void {
  let entity = new aPolWMATICTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
