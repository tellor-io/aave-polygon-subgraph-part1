import {
  CEther_hMATICTransfer as CEther_hMATICTransferEvent
} from "../generated/CEther_hMATIC/CEther_hMATIC"
import {
  TokenRecipients
} from "../generated/schema"


export function handleCEther_hMATICTransfer(
  event: CEther_hMATICTransferEvent
): void {
  let tokenRecipients = TokenRecipients.load("0xEbd7f3349AbA8bB15b897e03D6c1a4Ba95B55e31")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0xEbd7f3349AbA8bB15b897e03D6c1a4Ba95B55e31")
  }
  if(event.params.to.toHexString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients.push(event.params.to.toHexString())
    tokenRecipients.save()
  }
}