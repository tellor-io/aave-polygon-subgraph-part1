import {
  CErc20Delegator_hFRAXTransfer as CErc20Delegator_hFRAXTransferEvent
} from "../generated/CErc20Delegator_hFRAX/CErc20Delegator_hFRAX"
import {
  Transfer
} from "../generated/schema"

export function handleCErc20Delegator_hFRAXTransfer(event: CErc20Delegator_hFRAXTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x2c7a9d9919f042C4C120199c69e126124d09BE7c"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}