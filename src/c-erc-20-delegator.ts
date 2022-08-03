import {
  Transfer as TransferEvent
} from "../generated/CErc20Delegator/CErc20Delegator"
import { 
  TokenRecipients 
} from "../generated/schema"


export function handleTransfer(event: TransferEvent): void {
  const id = "0x243E33aa7f6787154a8E59d3C27a66db3F8818ee";
  let tokenRecipients = TokenRecipients.load(id)
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients(id)
  }
  if(event.params.to.toHexString() != "0000000000000000000000000000000000000000") {
    if(event.params.to.toHexString() != null) {
      tokenRecipients.recipients.push(event.params.to.toHexString())
      tokenRecipients.save()
    } 
  }
}