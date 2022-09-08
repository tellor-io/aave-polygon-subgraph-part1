import {
  Transfer as CErc20Delegator_hFRAXTransferEvent,
  Mint as CErc20Delegator_hFRAXMintEvent
} from "../generated/CErc20Delegator_hFRAX/CErc20Delegator"
import {
  Transfer,
  Mint
} from "../generated/schema"

export function handleCErc20Delegator_hFRAXTransfer(event: CErc20Delegator_hFRAXTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x2c7a9d9919f042C4C120199c69e126124d09BE7c"
  transfer.protocol = "hundred-finance"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

export function handleCErc20Delegator_hFRAXMint(event: CErc20Delegator_hFRAXMintEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let mint = new Mint(id)
  mint.contract = "0x2c7a9d9919f042C4C120199c69e126124d09BE7c"
  mint.minter = event.params.minter.toHexString()
  mint.save()
}