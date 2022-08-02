import {
  CErc20Delegator_hDAIAccrueInterest as CErc20Delegator_hDAIAccrueInterestEvent,
  CErc20Delegator_hDAIApproval as CErc20Delegator_hDAIApprovalEvent,
  CErc20Delegator_hDAIBorrow as CErc20Delegator_hDAIBorrowEvent,
  CErc20Delegator_hDAIFailure as CErc20Delegator_hDAIFailureEvent,
  CErc20Delegator_hDAILiquidateBorrow as CErc20Delegator_hDAILiquidateBorrowEvent,
  CErc20Delegator_hDAIMint as CErc20Delegator_hDAIMintEvent,
  CErc20Delegator_hDAINewAdmin as CErc20Delegator_hDAINewAdminEvent,
  CErc20Delegator_hDAINewComptroller as CErc20Delegator_hDAINewComptrollerEvent,
  CErc20Delegator_hDAINewImplementation as CErc20Delegator_hDAINewImplementationEvent,
  CErc20Delegator_hDAINewMarketInterestRateModel as CErc20Delegator_hDAINewMarketInterestRateModelEvent,
  CErc20Delegator_hDAINewPendingAdmin as CErc20Delegator_hDAINewPendingAdminEvent,
  CErc20Delegator_hDAINewReserveFactor as CErc20Delegator_hDAINewReserveFactorEvent,
  CErc20Delegator_hDAIRedeem as CErc20Delegator_hDAIRedeemEvent,
  CErc20Delegator_hDAIRepayBorrow as CErc20Delegator_hDAIRepayBorrowEvent,
  CErc20Delegator_hDAIReservesAdded as CErc20Delegator_hDAIReservesAddedEvent,
  CErc20Delegator_hDAIReservesReduced as CErc20Delegator_hDAIReservesReducedEvent,
  CErc20Delegator_hDAITransfer as CErc20Delegator_hDAITransferEvent
} from "../generated/CErc20Delegator_hDAI/CErc20Delegator_hDAI"
import {
  CErc20Delegator_hDAIAccrueInterest,
  CErc20Delegator_hDAIApproval,
  CErc20Delegator_hDAIBorrow,
  CErc20Delegator_hDAIFailure,
  CErc20Delegator_hDAILiquidateBorrow,
  CErc20Delegator_hDAIMint,
  CErc20Delegator_hDAINewAdmin,
  CErc20Delegator_hDAINewComptroller,
  CErc20Delegator_hDAINewImplementation,
  CErc20Delegator_hDAINewMarketInterestRateModel,
  CErc20Delegator_hDAINewPendingAdmin,
  CErc20Delegator_hDAINewReserveFactor,
  CErc20Delegator_hDAIRedeem,
  CErc20Delegator_hDAIRepayBorrow,
  CErc20Delegator_hDAIReservesAdded,
  CErc20Delegator_hDAIReservesReduced,
  CErc20Delegator_hDAITransfer
} from "../generated/schema"

export function handleCErc20Delegator_hDAIAccrueInterest(
  event: CErc20Delegator_hDAIAccrueInterestEvent
): void {
  let entity = new CErc20Delegator_hDAIAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hDAIApproval(
  event: CErc20Delegator_hDAIApprovalEvent
): void {
  let entity = new CErc20Delegator_hDAIApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleCErc20Delegator_hDAIBorrow(
  event: CErc20Delegator_hDAIBorrowEvent
): void {
  let entity = new CErc20Delegator_hDAIBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hDAIFailure(
  event: CErc20Delegator_hDAIFailureEvent
): void {
  let entity = new CErc20Delegator_hDAIFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleCErc20Delegator_hDAILiquidateBorrow(
  event: CErc20Delegator_hDAILiquidateBorrowEvent
): void {
  let entity = new CErc20Delegator_hDAILiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleCErc20Delegator_hDAIMint(
  event: CErc20Delegator_hDAIMintEvent
): void {
  let entity = new CErc20Delegator_hDAIMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleCErc20Delegator_hDAINewAdmin(
  event: CErc20Delegator_hDAINewAdminEvent
): void {
  let entity = new CErc20Delegator_hDAINewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleCErc20Delegator_hDAINewComptroller(
  event: CErc20Delegator_hDAINewComptrollerEvent
): void {
  let entity = new CErc20Delegator_hDAINewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleCErc20Delegator_hDAINewImplementation(
  event: CErc20Delegator_hDAINewImplementationEvent
): void {
  let entity = new CErc20Delegator_hDAINewImplementation(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldImplementation = event.params.oldImplementation
  entity.newImplementation = event.params.newImplementation
  entity.save()
}

export function handleCErc20Delegator_hDAINewMarketInterestRateModel(
  event: CErc20Delegator_hDAINewMarketInterestRateModelEvent
): void {
  let entity = new CErc20Delegator_hDAINewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleCErc20Delegator_hDAINewPendingAdmin(
  event: CErc20Delegator_hDAINewPendingAdminEvent
): void {
  let entity = new CErc20Delegator_hDAINewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleCErc20Delegator_hDAINewReserveFactor(
  event: CErc20Delegator_hDAINewReserveFactorEvent
): void {
  let entity = new CErc20Delegator_hDAINewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleCErc20Delegator_hDAIRedeem(
  event: CErc20Delegator_hDAIRedeemEvent
): void {
  let entity = new CErc20Delegator_hDAIRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleCErc20Delegator_hDAIRepayBorrow(
  event: CErc20Delegator_hDAIRepayBorrowEvent
): void {
  let entity = new CErc20Delegator_hDAIRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCErc20Delegator_hDAIReservesAdded(
  event: CErc20Delegator_hDAIReservesAddedEvent
): void {
  let entity = new CErc20Delegator_hDAIReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hDAIReservesReduced(
  event: CErc20Delegator_hDAIReservesReducedEvent
): void {
  let entity = new CErc20Delegator_hDAIReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCErc20Delegator_hDAITransfer(
  event: CErc20Delegator_hDAITransferEvent
): void {
  let entity = new CErc20Delegator_hDAITransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
