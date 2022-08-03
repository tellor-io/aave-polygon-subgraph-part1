import {
  CErc20Delegator_hWBTCTransfer as CErc20Delegator_hWBTCTransferEvent
} from "../generated/CErc20Delegator_hWBTC/CErc20Delegator_hWBTC"
import {
  Transfer,
} from "../generated/schema"

export function handleCErc20Delegator_hWBTCTransfer(event: CErc20Delegator_hWBTCTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}