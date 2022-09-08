import {
  Transfer as CErc20Delegator_hWBTCTransferEvent,
  Mint as CErc20Delegator_hWBTCMintEvent
} from "../generated/CErc20Delegator_hWBTC/CErc20Delegator"
import {
  Transfer,
  Mint
} from "../generated/schema"

export function handleCErc20Delegator_hWBTCTransfer(event: CErc20Delegator_hWBTCTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc"
  transfer.protocol = "hundred-finance"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

export function handleCErc20Delegator_hWBTCMint(event: CErc20Delegator_hWBTCMintEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let mint = new Mint(id)
  mint.contract = "0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc"
  mint.minter = event.params.minter.toHexString()
  mint.save()
}