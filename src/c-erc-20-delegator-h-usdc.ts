import {
  Transfer as CErc20Delegator_hUSDCTransferEvent
} from "../generated/CErc20Delegator_hUSDC/CErc20Delegator"
import {
  Transfer,
} from "../generated/schema"

export function handleCErc20Delegator_hUSDCTransfer(event: CErc20Delegator_hUSDCTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x607312a5C671D0C511998171e634DE32156e69d0"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}