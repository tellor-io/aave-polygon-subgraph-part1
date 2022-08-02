import {
  CErc20Delegator_hWBTCAccrueInterest as CErc20Delegator_hWBTCAccrueInterestEvent,
  CErc20Delegator_hWBTCApproval as CErc20Delegator_hWBTCApprovalEvent,
  CErc20Delegator_hWBTCBorrow as CErc20Delegator_hWBTCBorrowEvent,
  CErc20Delegator_hWBTCFailure as CErc20Delegator_hWBTCFailureEvent,
  CErc20Delegator_hWBTCLiquidateBorrow as CErc20Delegator_hWBTCLiquidateBorrowEvent,
  CErc20Delegator_hWBTCMint as CErc20Delegator_hWBTCMintEvent,
  CErc20Delegator_hWBTCNewAdmin as CErc20Delegator_hWBTCNewAdminEvent,
  CErc20Delegator_hWBTCNewComptroller as CErc20Delegator_hWBTCNewComptrollerEvent,
  CErc20Delegator_hWBTCNewImplementation as CErc20Delegator_hWBTCNewImplementationEvent,
  CErc20Delegator_hWBTCNewMarketInterestRateModel as CErc20Delegator_hWBTCNewMarketInterestRateModelEvent,
  CErc20Delegator_hWBTCNewPendingAdmin as CErc20Delegator_hWBTCNewPendingAdminEvent,
  CErc20Delegator_hWBTCNewReserveFactor as CErc20Delegator_hWBTCNewReserveFactorEvent,
  CErc20Delegator_hWBTCRedeem as CErc20Delegator_hWBTCRedeemEvent,
  CErc20Delegator_hWBTCRepayBorrow as CErc20Delegator_hWBTCRepayBorrowEvent,
  CErc20Delegator_hWBTCReservesAdded as CErc20Delegator_hWBTCReservesAddedEvent,
  CErc20Delegator_hWBTCReservesReduced as CErc20Delegator_hWBTCReservesReducedEvent,
  CErc20Delegator_hWBTCTransfer as CErc20Delegator_hWBTCTransferEvent
} from "../generated/CErc20Delegator_hWBTC/CErc20Delegator_hWBTC"
import {
  CErc20Delegator_hWBTCAccrueInterest,
  CErc20Delegator_hWBTCApproval,
  CErc20Delegator_hWBTCBorrow,
  CErc20Delegator_hWBTCFailure,
  CErc20Delegator_hWBTCLiquidateBorrow,
  CErc20Delegator_hWBTCMint,
  CErc20Delegator_hWBTCNewAdmin,
  CErc20Delegator_hWBTCNewComptroller,
  CErc20Delegator_hWBTCNewImplementation,
  CErc20Delegator_hWBTCNewMarketInterestRateModel,
  CErc20Delegator_hWBTCNewPendingAdmin,
  CErc20Delegator_hWBTCNewReserveFactor,
  CErc20Delegator_hWBTCRedeem,
  CErc20Delegator_hWBTCRepayBorrow,
  CErc20Delegator_hWBTCReservesAdded,
  CErc20Delegator_hWBTCReservesReduced,
  CErc20Delegator_hWBTCTransfer
} from "../generated/schema"

export function handleCErc20Delegator_hWBTCAccrueInterest(
  event: CErc20Delegator_hWBTCAccrueInterestEvent
): void {
  let entity = new CErc20Delegator_hWBTCAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hWBTCApproval(
  event: CErc20Delegator_hWBTCApprovalEvent
): void {
  let entity = new CErc20Delegator_hWBTCApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleCErc20Delegator_hWBTCBorrow(
  event: CErc20Delegator_hWBTCBorrowEvent
): void {
  let entity = new CErc20Delegator_hWBTCBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hWBTCFailure(
  event: CErc20Delegator_hWBTCFailureEvent
): void {
  let entity = new CErc20Delegator_hWBTCFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleCErc20Delegator_hWBTCLiquidateBorrow(
  event: CErc20Delegator_hWBTCLiquidateBorrowEvent
): void {
  let entity = new CErc20Delegator_hWBTCLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleCErc20Delegator_hWBTCMint(
  event: CErc20Delegator_hWBTCMintEvent
): void {
  let entity = new CErc20Delegator_hWBTCMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleCErc20Delegator_hWBTCNewAdmin(
  event: CErc20Delegator_hWBTCNewAdminEvent
): void {
  let entity = new CErc20Delegator_hWBTCNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleCErc20Delegator_hWBTCNewComptroller(
  event: CErc20Delegator_hWBTCNewComptrollerEvent
): void {
  let entity = new CErc20Delegator_hWBTCNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleCErc20Delegator_hWBTCNewImplementation(
  event: CErc20Delegator_hWBTCNewImplementationEvent
): void {
  let entity = new CErc20Delegator_hWBTCNewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleCErc20Delegator_hWBTCNewMarketInterestRateModel(
  event: CErc20Delegator_hWBTCNewMarketInterestRateModelEvent
): void {
  let entity = new CErc20Delegator_hWBTCNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleCErc20Delegator_hWBTCNewPendingAdmin(
  event: CErc20Delegator_hWBTCNewPendingAdminEvent
): void {
  let entity = new CErc20Delegator_hWBTCNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleCErc20Delegator_hWBTCNewReserveFactor(
  event: CErc20Delegator_hWBTCNewReserveFactorEvent
): void {
  let entity = new CErc20Delegator_hWBTCNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleCErc20Delegator_hWBTCRedeem(
  event: CErc20Delegator_hWBTCRedeemEvent
): void {
  let entity = new CErc20Delegator_hWBTCRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleCErc20Delegator_hWBTCRepayBorrow(
  event: CErc20Delegator_hWBTCRepayBorrowEvent
): void {
  let entity = new CErc20Delegator_hWBTCRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hWBTCReservesAdded(
  event: CErc20Delegator_hWBTCReservesAddedEvent
): void {
  let entity = new CErc20Delegator_hWBTCReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hWBTCReservesReduced(
  event: CErc20Delegator_hWBTCReservesReducedEvent
): void {
  let entity = new CErc20Delegator_hWBTCReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hWBTCTransfer(
  event: CErc20Delegator_hWBTCTransferEvent
): void {
  let entity = new CErc20Delegator_hWBTCTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
