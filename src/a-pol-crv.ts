import {
  aPolCRVAccrueInterest as aPolCRVAccrueInterestEvent,
  aPolCRVApproval as aPolCRVApprovalEvent,
  aPolCRVBorrow as aPolCRVBorrowEvent,
  aPolCRVFailure as aPolCRVFailureEvent,
  aPolCRVLiquidateBorrow as aPolCRVLiquidateBorrowEvent,
  aPolCRVMint as aPolCRVMintEvent,
  aPolCRVNewAdmin as aPolCRVNewAdminEvent,
  aPolCRVNewComptroller as aPolCRVNewComptrollerEvent,
  aPolCRVNewImplementation as aPolCRVNewImplementationEvent,
  aPolCRVNewMarketInterestRateModel as aPolCRVNewMarketInterestRateModelEvent,
  aPolCRVNewPendingAdmin as aPolCRVNewPendingAdminEvent,
  aPolCRVNewReserveFactor as aPolCRVNewReserveFactorEvent,
  aPolCRVRedeem as aPolCRVRedeemEvent,
  aPolCRVRepayBorrow as aPolCRVRepayBorrowEvent,
  aPolCRVReservesAdded as aPolCRVReservesAddedEvent,
  aPolCRVReservesReduced as aPolCRVReservesReducedEvent,
  aPolCRVTransfer as aPolCRVTransferEvent
} from "../generated/aPolCRV/aPolCRV"
import {
  aPolCRVAccrueInterest,
  aPolCRVApproval,
  aPolCRVBorrow,
  aPolCRVFailure,
  aPolCRVLiquidateBorrow,
  aPolCRVMint,
  aPolCRVNewAdmin,
  aPolCRVNewComptroller,
  aPolCRVNewImplementation,
  aPolCRVNewMarketInterestRateModel,
  aPolCRVNewPendingAdmin,
  aPolCRVNewReserveFactor,
  aPolCRVRedeem,
  aPolCRVRepayBorrow,
  aPolCRVReservesAdded,
  aPolCRVReservesReduced,
  aPolCRVTransfer
} from "../generated/schema"

export function handleaPolCRVAccrueInterest(
  event: aPolCRVAccrueInterestEvent
): void {
  let entity = new aPolCRVAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolCRVApproval(event: aPolCRVApprovalEvent): void {
  let entity = new aPolCRVApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleaPolCRVBorrow(event: aPolCRVBorrowEvent): void {
  let entity = new aPolCRVBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolCRVFailure(event: aPolCRVFailureEvent): void {
  let entity = new aPolCRVFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleaPolCRVLiquidateBorrow(
  event: aPolCRVLiquidateBorrowEvent
): void {
  let entity = new aPolCRVLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleaPolCRVMint(event: aPolCRVMintEvent): void {
  let entity = new aPolCRVMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleaPolCRVNewAdmin(event: aPolCRVNewAdminEvent): void {
  let entity = new aPolCRVNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleaPolCRVNewComptroller(
  event: aPolCRVNewComptrollerEvent
): void {
  let entity = new aPolCRVNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleaPolCRVNewImplementation(
  event: aPolCRVNewImplementationEvent
): void {
  let entity = new aPolCRVNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleaPolCRVNewMarketInterestRateModel(
  event: aPolCRVNewMarketInterestRateModelEvent
): void {
  let entity = new aPolCRVNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleaPolCRVNewPendingAdmin(
  event: aPolCRVNewPendingAdminEvent
): void {
  let entity = new aPolCRVNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleaPolCRVNewReserveFactor(
  event: aPolCRVNewReserveFactorEvent
): void {
  let entity = new aPolCRVNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleaPolCRVRedeem(event: aPolCRVRedeemEvent): void {
  let entity = new aPolCRVRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleaPolCRVRepayBorrow(event: aPolCRVRepayBorrowEvent): void {
  let entity = new aPolCRVRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleaPolCRVReservesAdded(
  event: aPolCRVReservesAddedEvent
): void {
  let entity = new aPolCRVReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolCRVReservesReduced(
  event: aPolCRVReservesReducedEvent
): void {
  let entity = new aPolCRVReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleaPolCRVTransfer(event: aPolCRVTransferEvent): void {
  let entity = new aPolCRVTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
