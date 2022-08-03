import {
  CErc20Delegator_hUSDTTransfer as CErc20Delegator_hUSDTTransferEvent
} from "../generated/CErc20Delegator_hUSDT/CErc20Delegator_hUSDT"
import {
  Transfer,
} from "../generated/schema"

export function handleCErc20Delegator_hUSDTTransfer(event: CErc20Delegator_hUSDTTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x103f2CA2148B863942397dbc50a425cc4f4E9A27"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}