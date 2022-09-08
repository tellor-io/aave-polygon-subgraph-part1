import {
  Transfer as CEther_hMATICTransferEvent,
  Mint as CEther_hMATICMintEvent
} from "../generated/CEther_hMATIC/CErc20Delegator"
import {
  Transfer,
  Mint
} from "../generated/schema"

export function handleCEther_hMATICTransfer(event: CEther_hMATICTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xEbd7f3349AbA8bB15b897e03D6c1a4Ba95B55e31"
  transfer.protocol = "hundred-finance"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

export function handleCEther_hMATICMint(event: CEther_hMATICMintEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let mint = new Mint(id)
  mint.contract = "0xEbd7f3349AbA8bB15b897e03D6c1a4Ba95B55e31"
  mint.minter = event.params.minter.toHexString()
  mint.save()
}