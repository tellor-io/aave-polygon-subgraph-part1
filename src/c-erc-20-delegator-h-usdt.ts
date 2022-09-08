import {
  Transfer as CErc20Delegator_hUSDTTransferEvent,
  Mint as CErc20Delegator_hUSDTMintEvent
} from "../generated/CErc20Delegator_hUSDT/CErc20Delegator"
import {
  Transfer,
  Mint
} from "../generated/schema"

export function handleCErc20Delegator_hUSDTTransfer(event: CErc20Delegator_hUSDTTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x103f2CA2148B863942397dbc50a425cc4f4E9A27"
  transfer.protocol = "hundred-finance"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

export function handleCErc20Delegator_hUSDTMint(event: CErc20Delegator_hUSDTMintEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let mint = new Mint(id)
  mint.contract = "0x103f2CA2148B863942397dbc50a425cc4f4E9A27"
  mint.minter = event.params.minter.toHexString()
  mint.save()
}