import {
  CErc20Delegator_hFRAXAccrueInterest as CErc20Delegator_hFRAXAccrueInterestEvent,
  CErc20Delegator_hFRAXApproval as CErc20Delegator_hFRAXApprovalEvent,
  CErc20Delegator_hFRAXBorrow as CErc20Delegator_hFRAXBorrowEvent,
  CErc20Delegator_hFRAXFailure as CErc20Delegator_hFRAXFailureEvent,
  CErc20Delegator_hFRAXLiquidateBorrow as CErc20Delegator_hFRAXLiquidateBorrowEvent,
  CErc20Delegator_hFRAXMint as CErc20Delegator_hFRAXMintEvent,
  CErc20Delegator_hFRAXNewAdmin as CErc20Delegator_hFRAXNewAdminEvent,
  CErc20Delegator_hFRAXNewComptroller as CErc20Delegator_hFRAXNewComptrollerEvent,
  CErc20Delegator_hFRAXNewImplementation as CErc20Delegator_hFRAXNewImplementationEvent,
  CErc20Delegator_hFRAXNewMarketInterestRateModel as CErc20Delegator_hFRAXNewMarketInterestRateModelEvent,
  CErc20Delegator_hFRAXNewPendingAdmin as CErc20Delegator_hFRAXNewPendingAdminEvent,
  CErc20Delegator_hFRAXNewReserveFactor as CErc20Delegator_hFRAXNewReserveFactorEvent,
  CErc20Delegator_hFRAXRedeem as CErc20Delegator_hFRAXRedeemEvent,
  CErc20Delegator_hFRAXRepayBorrow as CErc20Delegator_hFRAXRepayBorrowEvent,
  CErc20Delegator_hFRAXReservesAdded as CErc20Delegator_hFRAXReservesAddedEvent,
  CErc20Delegator_hFRAXReservesReduced as CErc20Delegator_hFRAXReservesReducedEvent,
  CErc20Delegator_hFRAXTransfer as CErc20Delegator_hFRAXTransferEvent
} from "../generated/CErc20Delegator_hFRAX/CErc20Delegator_hFRAX"
import {
  CErc20Delegator_hFRAXAccrueInterest,
  CErc20Delegator_hFRAXApproval,
  CErc20Delegator_hFRAXBorrow,
  CErc20Delegator_hFRAXFailure,
  CErc20Delegator_hFRAXLiquidateBorrow,
  CErc20Delegator_hFRAXMint,
  CErc20Delegator_hFRAXNewAdmin,
  CErc20Delegator_hFRAXNewComptroller,
  CErc20Delegator_hFRAXNewImplementation,
  CErc20Delegator_hFRAXNewMarketInterestRateModel,
  CErc20Delegator_hFRAXNewPendingAdmin,
  CErc20Delegator_hFRAXNewReserveFactor,
  CErc20Delegator_hFRAXRedeem,
  CErc20Delegator_hFRAXRepayBorrow,
  CErc20Delegator_hFRAXReservesAdded,
  CErc20Delegator_hFRAXReservesReduced,
  CErc20Delegator_hFRAXTransfer
} from "../generated/schema"

export function handleCErc20Delegator_hFRAXAccrueInterest(
  event: CErc20Delegator_hFRAXAccrueInterestEvent
): void {
  let entity = new CErc20Delegator_hFRAXAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hFRAXApproval(
  event: CErc20Delegator_hFRAXApprovalEvent
): void {
  let entity = new CErc20Delegator_hFRAXApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleCErc20Delegator_hFRAXBorrow(
  event: CErc20Delegator_hFRAXBorrowEvent
): void {
  let entity = new CErc20Delegator_hFRAXBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hFRAXFailure(
  event: CErc20Delegator_hFRAXFailureEvent
): void {
  let entity = new CErc20Delegator_hFRAXFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleCErc20Delegator_hFRAXLiquidateBorrow(
  event: CErc20Delegator_hFRAXLiquidateBorrowEvent
): void {
  let entity = new CErc20Delegator_hFRAXLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleCErc20Delegator_hFRAXMint(
  event: CErc20Delegator_hFRAXMintEvent
): void {
  let entity = new CErc20Delegator_hFRAXMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleCErc20Delegator_hFRAXNewAdmin(
  event: CErc20Delegator_hFRAXNewAdminEvent
): void {
  let entity = new CErc20Delegator_hFRAXNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleCErc20Delegator_hFRAXNewComptroller(
  event: CErc20Delegator_hFRAXNewComptrollerEvent
): void {
  let entity = new CErc20Delegator_hFRAXNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleCErc20Delegator_hFRAXNewImplementation(
  event: CErc20Delegator_hFRAXNewImplementationEvent
): void {
  let entity = new CErc20Delegator_hFRAXNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleCErc20Delegator_hFRAXNewMarketInterestRateModel(
  event: CErc20Delegator_hFRAXNewMarketInterestRateModelEvent
): void {
  let entity = new CErc20Delegator_hFRAXNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleCErc20Delegator_hFRAXNewPendingAdmin(
  event: CErc20Delegator_hFRAXNewPendingAdminEvent
): void {
  let entity = new CErc20Delegator_hFRAXNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleCErc20Delegator_hFRAXNewReserveFactor(
  event: CErc20Delegator_hFRAXNewReserveFactorEvent
): void {
  let entity = new CErc20Delegator_hFRAXNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleCErc20Delegator_hFRAXRedeem(
  event: CErc20Delegator_hFRAXRedeemEvent
): void {
  let entity = new CErc20Delegator_hFRAXRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleCErc20Delegator_hFRAXRepayBorrow(
  event: CErc20Delegator_hFRAXRepayBorrowEvent
): void {
  let entity = new CErc20Delegator_hFRAXRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hFRAXReservesAdded(
  event: CErc20Delegator_hFRAXReservesAddedEvent
): void {
  let entity = new CErc20Delegator_hFRAXReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hFRAXReservesReduced(
  event: CErc20Delegator_hFRAXReservesReducedEvent
): void {
  let entity = new CErc20Delegator_hFRAXReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hFRAXTransfer(
  event: CErc20Delegator_hFRAXTransferEvent
): void {
  let entity = new CErc20Delegator_hFRAXTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
