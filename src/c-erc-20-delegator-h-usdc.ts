import {
  CErc20Delegator_hUSDCTransfer as CErc20Delegator_hUSDCTransferEvent
} from "../generated/CErc20Delegator_hUSDC/CErc20Delegator_hUSDC"
import {
  TokenRecipients,
} from "../generated/schema"

export function handleCErc20Delegator_hUSDCTransfer(
  event: CErc20Delegator_hUSDCTransferEvent
): void {
  let tokenRecipients = TokenRecipients.load("0x607312a5C671D0C511998171e634DE32156e69d0")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0x607312a5C671D0C511998171e634DE32156e69d0")
  }
  if(event.params.to.toHexString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients.push(event.params.to.toHexString())
    tokenRecipients.save()
  }
}
