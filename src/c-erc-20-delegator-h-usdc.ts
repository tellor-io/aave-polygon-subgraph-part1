import {
  CErc20Delegator_hUSDCAccrueInterest as CErc20Delegator_hUSDCAccrueInterestEvent,
  CErc20Delegator_hUSDCApproval as CErc20Delegator_hUSDCApprovalEvent,
  CErc20Delegator_hUSDCBorrow as CErc20Delegator_hUSDCBorrowEvent,
  CErc20Delegator_hUSDCFailure as CErc20Delegator_hUSDCFailureEvent,
  CErc20Delegator_hUSDCLiquidateBorrow as CErc20Delegator_hUSDCLiquidateBorrowEvent,
  CErc20Delegator_hUSDCMint as CErc20Delegator_hUSDCMintEvent,
  CErc20Delegator_hUSDCNewAdmin as CErc20Delegator_hUSDCNewAdminEvent,
  CErc20Delegator_hUSDCNewComptroller as CErc20Delegator_hUSDCNewComptrollerEvent,
  CErc20Delegator_hUSDCNewImplementation as CErc20Delegator_hUSDCNewImplementationEvent,
  CErc20Delegator_hUSDCNewMarketInterestRateModel as CErc20Delegator_hUSDCNewMarketInterestRateModelEvent,
  CErc20Delegator_hUSDCNewPendingAdmin as CErc20Delegator_hUSDCNewPendingAdminEvent,
  CErc20Delegator_hUSDCNewReserveFactor as CErc20Delegator_hUSDCNewReserveFactorEvent,
  CErc20Delegator_hUSDCRedeem as CErc20Delegator_hUSDCRedeemEvent,
  CErc20Delegator_hUSDCRepayBorrow as CErc20Delegator_hUSDCRepayBorrowEvent,
  CErc20Delegator_hUSDCReservesAdded as CErc20Delegator_hUSDCReservesAddedEvent,
  CErc20Delegator_hUSDCReservesReduced as CErc20Delegator_hUSDCReservesReducedEvent,
  CErc20Delegator_hUSDCTransfer as CErc20Delegator_hUSDCTransferEvent
} from "../generated/CErc20Delegator_hUSDC/CErc20Delegator_hUSDC"
import {
  CErc20Delegator_hUSDCAccrueInterest,
  CErc20Delegator_hUSDCApproval,
  CErc20Delegator_hUSDCBorrow,
  CErc20Delegator_hUSDCFailure,
  CErc20Delegator_hUSDCLiquidateBorrow,
  CErc20Delegator_hUSDCMint,
  CErc20Delegator_hUSDCNewAdmin,
  CErc20Delegator_hUSDCNewComptroller,
  CErc20Delegator_hUSDCNewImplementation,
  CErc20Delegator_hUSDCNewMarketInterestRateModel,
  CErc20Delegator_hUSDCNewPendingAdmin,
  CErc20Delegator_hUSDCNewReserveFactor,
  CErc20Delegator_hUSDCRedeem,
  CErc20Delegator_hUSDCRepayBorrow,
  CErc20Delegator_hUSDCReservesAdded,
  CErc20Delegator_hUSDCReservesReduced,
  CErc20Delegator_hUSDCTransfer
} from "../generated/schema"

export function handleCErc20Delegator_hUSDCAccrueInterest(
  event: CErc20Delegator_hUSDCAccrueInterestEvent
): void {
  let entity = new CErc20Delegator_hUSDCAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hUSDCApproval(
  event: CErc20Delegator_hUSDCApprovalEvent
): void {
  let entity = new CErc20Delegator_hUSDCApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleCErc20Delegator_hUSDCBorrow(
  event: CErc20Delegator_hUSDCBorrowEvent
): void {
  let entity = new CErc20Delegator_hUSDCBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hUSDCFailure(
  event: CErc20Delegator_hUSDCFailureEvent
): void {
  let entity = new CErc20Delegator_hUSDCFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleCErc20Delegator_hUSDCLiquidateBorrow(
  event: CErc20Delegator_hUSDCLiquidateBorrowEvent
): void {
  let entity = new CErc20Delegator_hUSDCLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleCErc20Delegator_hUSDCMint(
  event: CErc20Delegator_hUSDCMintEvent
): void {
  let entity = new CErc20Delegator_hUSDCMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleCErc20Delegator_hUSDCNewAdmin(
  event: CErc20Delegator_hUSDCNewAdminEvent
): void {
  let entity = new CErc20Delegator_hUSDCNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleCErc20Delegator_hUSDCNewComptroller(
  event: CErc20Delegator_hUSDCNewComptrollerEvent
): void {
  let entity = new CErc20Delegator_hUSDCNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleCErc20Delegator_hUSDCNewImplementation(
  event: CErc20Delegator_hUSDCNewImplementationEvent
): void {
  let entity = new CErc20Delegator_hUSDCNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleCErc20Delegator_hUSDCNewMarketInterestRateModel(
  event: CErc20Delegator_hUSDCNewMarketInterestRateModelEvent
): void {
  let entity = new CErc20Delegator_hUSDCNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleCErc20Delegator_hUSDCNewPendingAdmin(
  event: CErc20Delegator_hUSDCNewPendingAdminEvent
): void {
  let entity = new CErc20Delegator_hUSDCNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleCErc20Delegator_hUSDCNewReserveFactor(
  event: CErc20Delegator_hUSDCNewReserveFactorEvent
): void {
  let entity = new CErc20Delegator_hUSDCNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleCErc20Delegator_hUSDCRedeem(
  event: CErc20Delegator_hUSDCRedeemEvent
): void {
  let entity = new CErc20Delegator_hUSDCRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleCErc20Delegator_hUSDCRepayBorrow(
  event: CErc20Delegator_hUSDCRepayBorrowEvent
): void {
  let entity = new CErc20Delegator_hUSDCRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hUSDCReservesAdded(
  event: CErc20Delegator_hUSDCReservesAddedEvent
): void {
  let entity = new CErc20Delegator_hUSDCReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hUSDCReservesReduced(
  event: CErc20Delegator_hUSDCReservesReducedEvent
): void {
  let entity = new CErc20Delegator_hUSDCReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hUSDCTransfer(
  event: CErc20Delegator_hUSDCTransferEvent
): void {
  let entity = new CErc20Delegator_hUSDCTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
