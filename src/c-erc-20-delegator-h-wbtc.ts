import {
  CErc20Delegator_hWBTCTransfer as CErc20Delegator_hWBTCTransferEvent
} from "../generated/CErc20Delegator_hWBTC/CErc20Delegator_hWBTC"
import {
  TokenRecipients,
} from "../generated/schema"

export function handleCErc20Delegator_hWBTCTransfer(
  event: CErc20Delegator_hWBTCTransferEvent
): void {
  let tokenRecipients = TokenRecipients.load("0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc")
  }
  if(event.params.to.toString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients?.push(event.params.to.toString())
    tokenRecipients.save()
  }
}
