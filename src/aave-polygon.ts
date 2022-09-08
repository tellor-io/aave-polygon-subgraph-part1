import {
  Transfer as TransferEvent
} from "../generated/CErc20Delegator/CErc20Delegator"
import {
  Transfer
} from "../generated/schema"

// aPolAAVETransfer
export function handleaPolAAVETransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolDAITransfer
export function handleaPolDAITransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolUSDTTransfer
export function handleaPolUSDTTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x6ab707Aca953eDAeFBc4fD23bA73294241490620"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolLINKTransfer
export function handleaPolLINKTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolWMATICTransfer
export function handleaPolWMATICTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolUSDCTransfer
export function handleaPolUSDCTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x625E7708f30cA75bfd92586e17077590C60eb4cD"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolAGEURTransfer
export function handleaPolAGEURTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolEURSTransfer
export function handleaPolEURSTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolWBTCTransfer
export function handleaPolWBTCTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x078f358208685046a11C85e8ad32895DED33A249"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolWETHTransfer
export function handleaPolWETHTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolCRVTransfer
export function handleaPolCRVTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolSUSHITransfer
export function handleaPolSUSHITransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolGHSTTransfer
export function handleaPolGHSTTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x8Eb270e296023E9D92081fdF967dDd7878724424"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolJEURTransfer
export function handleaPolJEURTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x6533afac2E7BCCB20dca161449A13A32D391fb00"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolDPITransfer
export function handleaPolDPITransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x724dc807b04555b71ed48a6896b6F41593b8C637"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}

// aPolBALTransfer
export function handleaPolBALTransfer(event: TransferEvent): void {
  const id = event.transaction.hash.toHexString() + event.logIndex.toString()
  let transfer = new Transfer(id)
  transfer.contract = "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692"
  transfer.protocol = "aavePolygon"
  transfer.to = event.params.to.toHexString()
  transfer.save()
}