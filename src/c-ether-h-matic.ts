import {
  CEther_hMATICAccrueInterest as CEther_hMATICAccrueInterestEvent,
  CEther_hMATICApproval as CEther_hMATICApprovalEvent,
  CEther_hMATICBorrow as CEther_hMATICBorrowEvent,
  CEther_hMATICFailure as CEther_hMATICFailureEvent,
  CEther_hMATICLiquidateBorrow as CEther_hMATICLiquidateBorrowEvent,
  CEther_hMATICMint as CEther_hMATICMintEvent,
  CEther_hMATICNewAdmin as CEther_hMATICNewAdminEvent,
  CEther_hMATICNewComptroller as CEther_hMATICNewComptrollerEvent,
  CEther_hMATICNewMarketInterestRateModel as CEther_hMATICNewMarketInterestRateModelEvent,
  CEther_hMATICNewPendingAdmin as CEther_hMATICNewPendingAdminEvent,
  CEther_hMATICNewReserveFactor as CEther_hMATICNewReserveFactorEvent,
  CEther_hMATICRedeem as CEther_hMATICRedeemEvent,
  CEther_hMATICRepayBorrow as CEther_hMATICRepayBorrowEvent,
  CEther_hMATICReservesAdded as CEther_hMATICReservesAddedEvent,
  CEther_hMATICReservesReduced as CEther_hMATICReservesReducedEvent,
  CEther_hMATICTransfer as CEther_hMATICTransferEvent
} from "../generated/CEther_hMATIC/CEther_hMATIC"
import {
  CEther_hMATICAccrueInterest,
  CEther_hMATICApproval,
  CEther_hMATICBorrow,
  CEther_hMATICFailure,
  CEther_hMATICLiquidateBorrow,
  CEther_hMATICMint,
  CEther_hMATICNewAdmin,
  CEther_hMATICNewComptroller,
  CEther_hMATICNewMarketInterestRateModel,
  CEther_hMATICNewPendingAdmin,
  CEther_hMATICNewReserveFactor,
  CEther_hMATICRedeem,
  CEther_hMATICRepayBorrow,
  CEther_hMATICReservesAdded,
  CEther_hMATICReservesReduced,
  CEther_hMATICTransfer
} from "../generated/schema"

export function handleCEther_hMATICAccrueInterest(
  event: CEther_hMATICAccrueInterestEvent
): void {
  let entity = new CEther_hMATICAccrueInterest(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.cashPrior = event.params.cashPrior
  entity.interestAccumulated = event.params.interestAccumulated
  entity.borrowIndex = event.params.borrowIndex
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCEther_hMATICApproval(
  event: CEther_hMATICApprovalEvent
): void {
  let entity = new CEther_hMATICApproval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount
  entity.save()
}

export function handleCEther_hMATICBorrow(
  event: CEther_hMATICBorrowEvent
): void {
  let entity = new CEther_hMATICBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.borrower = event.params.borrower
  entity.borrowAmount = event.params.borrowAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCEther_hMATICFailure(
  event: CEther_hMATICFailureEvent
): void {
  let entity = new CEther_hMATICFailure(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.error = event.params.error
  entity.info = event.params.info
  entity.detail = event.params.detail
  entity.save()
}

export function handleCEther_hMATICLiquidateBorrow(
  event: CEther_hMATICLiquidateBorrowEvent
): void {
  let entity = new CEther_hMATICLiquidateBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.liquidator = event.params.liquidator
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.cTokenCollateral = event.params.cTokenCollateral
  entity.seizeTokens = event.params.seizeTokens
  entity.save()
}

export function handleCEther_hMATICMint(event: CEther_hMATICMintEvent): void {
  let entity = new CEther_hMATICMint(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.minter = event.params.minter
  entity.mintAmount = event.params.mintAmount
  entity.mintTokens = event.params.mintTokens
  entity.save()
}

export function handleCEther_hMATICNewAdmin(
  event: CEther_hMATICNewAdminEvent
): void {
  let entity = new CEther_hMATICNewAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldAdmin = event.params.oldAdmin
  entity.newAdmin = event.params.newAdmin
  entity.save()
}

export function handleCEther_hMATICNewComptroller(
  event: CEther_hMATICNewComptrollerEvent
): void {
  let entity = new CEther_hMATICNewComptroller(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldComptroller = event.params.oldComptroller
  entity.newComptroller = event.params.newComptroller
  entity.save()
}

export function handleCEther_hMATICNewMarketInterestRateModel(
  event: CEther_hMATICNewMarketInterestRateModelEvent
): void {
  let entity = new CEther_hMATICNewMarketInterestRateModel(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldInterestRateModel = event.params.oldInterestRateModel
  entity.newInterestRateModel = event.params.newInterestRateModel
  entity.save()
}

export function handleCEther_hMATICNewPendingAdmin(
  event: CEther_hMATICNewPendingAdminEvent
): void {
  let entity = new CEther_hMATICNewPendingAdmin(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldPendingAdmin = event.params.oldPendingAdmin
  entity.newPendingAdmin = event.params.newPendingAdmin
  entity.save()
}

export function handleCEther_hMATICNewReserveFactor(
  event: CEther_hMATICNewReserveFactorEvent
): void {
  let entity = new CEther_hMATICNewReserveFactor(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.oldReserveFactorMantissa = event.params.oldReserveFactorMantissa
  entity.newReserveFactorMantissa = event.params.newReserveFactorMantissa
  entity.save()
}

export function handleCEther_hMATICRedeem(
  event: CEther_hMATICRedeemEvent
): void {
  let entity = new CEther_hMATICRedeem(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.redeemer = event.params.redeemer
  entity.redeemAmount = event.params.redeemAmount
  entity.redeemTokens = event.params.redeemTokens
  entity.save()
}

export function handleCEther_hMATICRepayBorrow(
  event: CEther_hMATICRepayBorrowEvent
): void {
  let entity = new CEther_hMATICRepayBorrow(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.payer = event.params.payer
  entity.borrower = event.params.borrower
  entity.repayAmount = event.params.repayAmount
  entity.accountBorrows = event.params.accountBorrows
  entity.totalBorrows = event.params.totalBorrows
  entity.save()
}

export function handleCEther_hMATICReservesAdded(
  event: CEther_hMATICReservesAddedEvent
): void {
  let entity = new CEther_hMATICReservesAdded(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.benefactor = event.params.benefactor
  entity.addAmount = event.params.addAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCEther_hMATICReservesReduced(
  event: CEther_hMATICReservesReducedEvent
): void {
  let entity = new CEther_hMATICReservesReduced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.admin = event.params.admin
  entity.reduceAmount = event.params.reduceAmount
  entity.newTotalReserves = event.params.newTotalReserves
  entity.save()
}

export function handleCEther_hMATICTransfer(
  event: CEther_hMATICTransferEvent
): void {
  let entity = new CEther_hMATICTransfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.save()
}
