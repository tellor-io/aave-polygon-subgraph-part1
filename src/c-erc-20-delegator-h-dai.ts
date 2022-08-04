import {
  Transfer as CErc20Delegator_hDAITransferEvent
} from "../generated/CErc20Delegator_hDAI/CErc20Delegator"
import {
  Transfer,
} from "../generated/schema"

export function handleCErc20Delegator_hDAITransfer(event: CErc20Delegator_hDAITransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xE4e43864ea18d5E5211352a4B810383460aB7fcC"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}