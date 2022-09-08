import {
  Transfer as CErc20Delegator_hUSDCTransferEvent,
  Mint as CErc20Delegator_hUSDCMintEvent
} from "../generated/CErc20Delegator_hUSDC/CErc20Delegator"
import {
  Transfer,
  Mint
} from "../generated/schema"

export function handleCErc20Delegator_hUSDCTransfer(event: CErc20Delegator_hUSDCTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x607312a5C671D0C511998171e634DE32156e69d0"
  transfer.protocol = "hundred-finance"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

export function handleCErc20Delegator_hUSDCMint(event: CErc20Delegator_hUSDCMintEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let mint = new Mint(id)
  mint.contract = "0x607312a5C671D0C511998171e634DE32156e69d0"
  mint.minter = event.params.minter.toHexString()
  mint.save()
}