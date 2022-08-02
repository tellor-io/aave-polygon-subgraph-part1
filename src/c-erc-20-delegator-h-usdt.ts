import {
  CErc20Delegator_hUSDTAccrueInterest as CErc20Delegator_hUSDTAccrueInterestEvent,
  CErc20Delegator_hUSDTApproval as CErc20Delegator_hUSDTApprovalEvent,
  CErc20Delegator_hUSDTBorrow as CErc20Delegator_hUSDTBorrowEvent,
  CErc20Delegator_hUSDTFailure as CErc20Delegator_hUSDTFailureEvent,
  CErc20Delegator_hUSDTLiquidateBorrow as CErc20Delegator_hUSDTLiquidateBorrowEvent,
  CErc20Delegator_hUSDTMint as CErc20Delegator_hUSDTMintEvent,
  CErc20Delegator_hUSDTNewAdmin as CErc20Delegator_hUSDTNewAdminEvent,
  CErc20Delegator_hUSDTNewComptroller as CErc20Delegator_hUSDTNewComptrollerEvent,
  CErc20Delegator_hUSDTNewImplementation as CErc20Delegator_hUSDTNewImplementationEvent,
  CErc20Delegator_hUSDTNewMarketInterestRateModel as CErc20Delegator_hUSDTNewMarketInterestRateModelEvent,
  CErc20Delegator_hUSDTNewPendingAdmin as CErc20Delegator_hUSDTNewPendingAdminEvent,
  CErc20Delegator_hUSDTNewReserveFactor as CErc20Delegator_hUSDTNewReserveFactorEvent,
  CErc20Delegator_hUSDTRedeem as CErc20Delegator_hUSDTRedeemEvent,
  CErc20Delegator_hUSDTRepayBorrow as CErc20Delegator_hUSDTRepayBorrowEvent,
  CErc20Delegator_hUSDTReservesAdded as CErc20Delegator_hUSDTReservesAddedEvent,
  CErc20Delegator_hUSDTReservesReduced as CErc20Delegator_hUSDTReservesReducedEvent,
  CErc20Delegator_hUSDTTransfer as CErc20Delegator_hUSDTTransferEvent
} from "../generated/CErc20Delegator_hUSDT/CErc20Delegator_hUSDT"
import {
  CErc20Delegator_hUSDTAccrueInterest,
  CErc20Delegator_hUSDTApproval,
  CErc20Delegator_hUSDTBorrow,
  CErc20Delegator_hUSDTFailure,
  CErc20Delegator_hUSDTLiquidateBorrow,
  CErc20Delegator_hUSDTMint,
  CErc20Delegator_hUSDTNewAdmin,
  CErc20Delegator_hUSDTNewComptroller,
  CErc20Delegator_hUSDTNewImplementation,
  CErc20Delegator_hUSDTNewMarketInterestRateModel,
  CErc20Delegator_hUSDTNewPendingAdmin,
  CErc20Delegator_hUSDTNewReserveFactor,
  CErc20Delegator_hUSDTRedeem,
  CErc20Delegator_hUSDTRepayBorrow,
  CErc20Delegator_hUSDTReservesAdded,
  CErc20Delegator_hUSDTReservesReduced,
  CErc20Delegator_hUSDTTransfer
} from "../generated/schema"

export function handleCErc20Delegator_hUSDTAccrueInterest(
  event: CErc20Delegator_hUSDTAccrueInterestEvent
): void {
  let entity = new CErc20Delegator_hUSDTAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hUSDTApproval(
  event: CErc20Delegator_hUSDTApprovalEvent
): void {
  let entity = new CErc20Delegator_hUSDTApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleCErc20Delegator_hUSDTBorrow(
  event: CErc20Delegator_hUSDTBorrowEvent
): void {
  let entity = new CErc20Delegator_hUSDTBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hUSDTFailure(
  event: CErc20Delegator_hUSDTFailureEvent
): void {
  let entity = new CErc20Delegator_hUSDTFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleCErc20Delegator_hUSDTLiquidateBorrow(
  event: CErc20Delegator_hUSDTLiquidateBorrowEvent
): void {
  let entity = new CErc20Delegator_hUSDTLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleCErc20Delegator_hUSDTMint(
  event: CErc20Delegator_hUSDTMintEvent
): void {
  let entity = new CErc20Delegator_hUSDTMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleCErc20Delegator_hUSDTNewAdmin(
  event: CErc20Delegator_hUSDTNewAdminEvent
): void {
  let entity = new CErc20Delegator_hUSDTNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleCErc20Delegator_hUSDTNewComptroller(
  event: CErc20Delegator_hUSDTNewComptrollerEvent
): void {
  let entity = new CErc20Delegator_hUSDTNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleCErc20Delegator_hUSDTNewImplementation(
  event: CErc20Delegator_hUSDTNewImplementationEvent
): void {
  let entity = new CErc20Delegator_hUSDTNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleCErc20Delegator_hUSDTNewMarketInterestRateModel(
  event: CErc20Delegator_hUSDTNewMarketInterestRateModelEvent
): void {
  let entity = new CErc20Delegator_hUSDTNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleCErc20Delegator_hUSDTNewPendingAdmin(
  event: CErc20Delegator_hUSDTNewPendingAdminEvent
): void {
  let entity = new CErc20Delegator_hUSDTNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleCErc20Delegator_hUSDTNewReserveFactor(
  event: CErc20Delegator_hUSDTNewReserveFactorEvent
): void {
  let entity = new CErc20Delegator_hUSDTNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleCErc20Delegator_hUSDTRedeem(
  event: CErc20Delegator_hUSDTRedeemEvent
): void {
  let entity = new CErc20Delegator_hUSDTRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleCErc20Delegator_hUSDTRepayBorrow(
  event: CErc20Delegator_hUSDTRepayBorrowEvent
): void {
  let entity = new CErc20Delegator_hUSDTRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hUSDTReservesAdded(
  event: CErc20Delegator_hUSDTReservesAddedEvent
): void {
  let entity = new CErc20Delegator_hUSDTReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hUSDTReservesReduced(
  event: CErc20Delegator_hUSDTReservesReducedEvent
): void {
  let entity = new CErc20Delegator_hUSDTReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hUSDTTransfer(
  event: CErc20Delegator_hUSDTTransferEvent
): void {
  let entity = new CErc20Delegator_hUSDTTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
