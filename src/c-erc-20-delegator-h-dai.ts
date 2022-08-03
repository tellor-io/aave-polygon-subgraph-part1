import {
  CErc20Delegator_hDAITransfer as CErc20Delegator_hDAITransferEvent
} from "../generated/CErc20Delegator_hDAI/CErc20Delegator_hDAI"
import {
  TokenRecipients,
} from "../generated/schema"

export function handleCErc20Delegator_hDAITransfer(
  event: CErc20Delegator_hDAITransferEvent
): void {
  let tokenRecipients = TokenRecipients.load("0xE4e43864ea18d5E5211352a4B810383460aB7fcC")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0xE4e43864ea18d5E5211352a4B810383460aB7fcC")
  }
  if(event.params.to.toHexString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients.push(event.params.to.toHexString())
    tokenRecipients.save()
  }
}
