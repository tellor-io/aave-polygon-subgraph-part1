import {
  CErc20Delegator_hUSDTTransfer as CErc20Delegator_hUSDTTransferEvent
} from "../generated/CErc20Delegator_hUSDT/CErc20Delegator_hUSDT"
import {
  TokenRecipients,
} from "../generated/schema"

export function handleCErc20Delegator_hUSDTTransfer(
  event: CErc20Delegator_hUSDTTransferEvent
): void {
  let tokenRecipients = TokenRecipients.load("0x103f2CA2148B863942397dbc50a425cc4f4E9A27")
  if (!tokenRecipients) {
    tokenRecipients = new TokenRecipients("0x103f2CA2148B863942397dbc50a425cc4f4E9A27")
  }
  if(event.params.to.toHexString() != "0x0000000000000000000000000000000000000000") {
    tokenRecipients.recipients.push(event.params.to.toHexString())
    tokenRecipients.save()
  }
}
