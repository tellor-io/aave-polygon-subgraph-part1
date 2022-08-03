import {
  CErc20Delegator_hLINKTransfer as CErc20Delegator_hLINKTransferEvent
} from "../generated/CErc20Delegator_hLINK/CErc20Delegator_hLINK"
import {
  TokenRecipients,
} from "../generated/schema"

export function handleCErc20Delegator_hLINKTransfer(
  event: CErc20Delegator_hLINKTransferEvent
): void {
  let tokenRecipients = TokenRecipients.load("0x5B9451B1bFAE2A74D7b9D0D45BdD0E9a27F7bB22")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0x5B9451B1bFAE2A74D7b9D0D45BdD0E9a27F7bB22")
  }
  if(event.params.to.toHexString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients.push(event.params.to.toHexString())
    tokenRecipients.save()
  }
}