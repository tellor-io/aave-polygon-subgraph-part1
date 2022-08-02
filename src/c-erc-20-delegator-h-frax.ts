import {
  CErc20Delegator_hFRAXTransfer as CErc20Delegator_hFRAXTransferEvent
} from "../generated/CErc20Delegator_hFRAX/CErc20Delegator_hFRAX"
import {
  TokenRecipients
} from "../generated/schema"

export function handleCErc20Delegator_hFRAXTransfer(
  event: CErc20Delegator_hFRAXTransferEvent
): void {
  let tokenRecipients = TokenRecipients.load("0x2c7a9d9919f042C4C120199c69e126124d09BE7c")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0x2c7a9d9919f042C4C120199c69e126124d09BE7c")
  }
  if(event.params.to.toString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients?.push(event.params.to.toString())
    tokenRecipients.save()
  }
}