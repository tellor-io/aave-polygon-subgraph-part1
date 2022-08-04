import {
  Transfer as CEther_hMATICTransferEvent
} from "../generated/CEther_hMATIC/CErc20Delegator"
import {
  Transfer
} from "../generated/schema"

export function handleCEther_hMATICTransfer(event: CEther_hMATICTransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xEbd7f3349AbA8bB15b897e03D6c1a4Ba95B55e31"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}