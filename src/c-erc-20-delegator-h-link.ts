import {
  CErc20Delegator_hLINKAccrueInterest as CErc20Delegator_hLINKAccrueInterestEvent,
  CErc20Delegator_hLINKApproval as CErc20Delegator_hLINKApprovalEvent,
  CErc20Delegator_hLINKBorrow as CErc20Delegator_hLINKBorrowEvent,
  CErc20Delegator_hLINKFailure as CErc20Delegator_hLINKFailureEvent,
  CErc20Delegator_hLINKLiquidateBorrow as CErc20Delegator_hLINKLiquidateBorrowEvent,
  CErc20Delegator_hLINKMint as CErc20Delegator_hLINKMintEvent,
  CErc20Delegator_hLINKNewAdmin as CErc20Delegator_hLINKNewAdminEvent,
  CErc20Delegator_hLINKNewComptroller as CErc20Delegator_hLINKNewComptrollerEvent,
  CErc20Delegator_hLINKNewImplementation as CErc20Delegator_hLINKNewImplementationEvent,
  CErc20Delegator_hLINKNewMarketInterestRateModel as CErc20Delegator_hLINKNewMarketInterestRateModelEvent,
  CErc20Delegator_hLINKNewPendingAdmin as CErc20Delegator_hLINKNewPendingAdminEvent,
  CErc20Delegator_hLINKNewReserveFactor as CErc20Delegator_hLINKNewReserveFactorEvent,
  CErc20Delegator_hLINKRedeem as CErc20Delegator_hLINKRedeemEvent,
  CErc20Delegator_hLINKRepayBorrow as CErc20Delegator_hLINKRepayBorrowEvent,
  CErc20Delegator_hLINKReservesAdded as CErc20Delegator_hLINKReservesAddedEvent,
  CErc20Delegator_hLINKReservesReduced as CErc20Delegator_hLINKReservesReducedEvent,
  CErc20Delegator_hLINKTransfer as CErc20Delegator_hLINKTransferEvent
} from "../generated/CErc20Delegator_hLINK/CErc20Delegator_hLINK"
import {
  CErc20Delegator_hLINKAccrueInterest,
  CErc20Delegator_hLINKApproval,
  CErc20Delegator_hLINKBorrow,
  CErc20Delegator_hLINKFailure,
  CErc20Delegator_hLINKLiquidateBorrow,
  CErc20Delegator_hLINKMint,
  CErc20Delegator_hLINKNewAdmin,
  CErc20Delegator_hLINKNewComptroller,
  CErc20Delegator_hLINKNewImplementation,
  CErc20Delegator_hLINKNewMarketInterestRateModel,
  CErc20Delegator_hLINKNewPendingAdmin,
  CErc20Delegator_hLINKNewReserveFactor,
  CErc20Delegator_hLINKRedeem,
  CErc20Delegator_hLINKRepayBorrow,
  CErc20Delegator_hLINKReservesAdded,
  CErc20Delegator_hLINKReservesReduced,
  CErc20Delegator_hLINKTransfer
} from "../generated/schema"

export function handleCErc20Delegator_hLINKAccrueInterest(
  event: CErc20Delegator_hLINKAccrueInterestEvent
): void {
  let entity = new CErc20Delegator_hLINKAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hLINKApproval(
  event: CErc20Delegator_hLINKApprovalEvent
): void {
  let entity = new CErc20Delegator_hLINKApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleCErc20Delegator_hLINKBorrow(
  event: CErc20Delegator_hLINKBorrowEvent
): void {
  let entity = new CErc20Delegator_hLINKBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hLINKFailure(
  event: CErc20Delegator_hLINKFailureEvent
): void {
  let entity = new CErc20Delegator_hLINKFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleCErc20Delegator_hLINKLiquidateBorrow(
  event: CErc20Delegator_hLINKLiquidateBorrowEvent
): void {
  let entity = new CErc20Delegator_hLINKLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleCErc20Delegator_hLINKMint(
  event: CErc20Delegator_hLINKMintEvent
): void {
  let entity = new CErc20Delegator_hLINKMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleCErc20Delegator_hLINKNewAdmin(
  event: CErc20Delegator_hLINKNewAdminEvent
): void {
  let entity = new CErc20Delegator_hLINKNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleCErc20Delegator_hLINKNewComptroller(
  event: CErc20Delegator_hLINKNewComptrollerEvent
): void {
  let entity = new CErc20Delegator_hLINKNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleCErc20Delegator_hLINKNewImplementation(
  event: CErc20Delegator_hLINKNewImplementationEvent
): void {
  let entity = new CErc20Delegator_hLINKNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleCErc20Delegator_hLINKNewMarketInterestRateModel(
  event: CErc20Delegator_hLINKNewMarketInterestRateModelEvent
): void {
  let entity = new CErc20Delegator_hLINKNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleCErc20Delegator_hLINKNewPendingAdmin(
  event: CErc20Delegator_hLINKNewPendingAdminEvent
): void {
  let entity = new CErc20Delegator_hLINKNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleCErc20Delegator_hLINKNewReserveFactor(
  event: CErc20Delegator_hLINKNewReserveFactorEvent
): void {
  let entity = new CErc20Delegator_hLINKNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleCErc20Delegator_hLINKRedeem(
  event: CErc20Delegator_hLINKRedeemEvent
): void {
  let entity = new CErc20Delegator_hLINKRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleCErc20Delegator_hLINKRepayBorrow(
  event: CErc20Delegator_hLINKRepayBorrowEvent
): void {
  let entity = new CErc20Delegator_hLINKRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hLINKReservesAdded(
  event: CErc20Delegator_hLINKReservesAddedEvent
): void {
  let entity = new CErc20Delegator_hLINKReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hLINKReservesReduced(
  event: CErc20Delegator_hLINKReservesReducedEvent
): void {
  let entity = new CErc20Delegator_hLINKReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hLINKTransfer(
  event: CErc20Delegator_hLINKTransferEvent
): void {
  let entity = new CErc20Delegator_hLINKTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
