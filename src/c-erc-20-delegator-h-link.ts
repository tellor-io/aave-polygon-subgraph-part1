import {
  Transfer as CErc20Delegator_hLINKTransferEvent
} from "../generated/CErc20Delegator_hLINK/CErc20Delegator"
import {
  Transfer,
} from "../generated/schema"

export function handleCErc20Delegator_hLINKTransfer(event: CErc20Delegator_hLINKTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x5B9451B1bFAE2A74D7b9D0D45BdD0E9a27F7bB22"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}