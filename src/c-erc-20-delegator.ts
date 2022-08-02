import {
  Transfer
} from "../generated/CErc20Delegator/CErc20Delegator"
import { TokenRecipients } from "../generated/schema"


export function handleTransfer(event: Transfer): void {
  let tokenRecipients = TokenRecipients.load("0x243E33aa7f6787154a8E59d3C27a66db3F8818ee")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0x243E33aa7f6787154a8E59d3C27a66db3F8818ee")
  }
  if(event.params.to.toString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients?.push(event.params.to.toString())
    tokenRecipients.save()
  }
}