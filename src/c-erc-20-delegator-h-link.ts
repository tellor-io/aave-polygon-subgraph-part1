import {
  Transfer as CErc20Delegator_hLINKTransferEvent,
  Mint as CErc20Delegator_hLINKMintEvent
} from "../generated/CErc20Delegator_hLINK/CErc20Delegator"
import {
  Transfer,
  Mint
} from "../generated/schema"

export function handleCErc20Delegator_hLINKTransfer(event: CErc20Delegator_hLINKTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x5B9451B1bFAE2A74D7b9D0D45BdD0E9a27F7bB22"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

export function handleCErc20Delegator_hLINKMint(event: CErc20Delegator_hLINKMintEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let mint = new Mint(id)
  mint.contract = "0x5B9451B1bFAE2A74D7b9D0D45BdD0E9a27F7bB22"
  mint.minter = event.params.minter.toHexString()
  mint.save()
}