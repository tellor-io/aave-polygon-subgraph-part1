import {
  Transfer as TransferEvent,
  Mint as MintEvent
} from "../generated/CErc20Delegator/CErc20Delegator"
import { 
  Transfer,
  Mint
} from "../generated/schema"

export function handleTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x243E33aa7f6787154a8E59d3C27a66db3F8818ee"
  transfer.protocol = "hundred-finance"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

export function handleMint(event: MintEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let mint = new Mint(id)
  mint.contract = "0x243E33aa7f6787154a8E59d3C27a66db3F8818ee"
  mint.minter = event.params.minter.toHexString()
  mint.save()
}