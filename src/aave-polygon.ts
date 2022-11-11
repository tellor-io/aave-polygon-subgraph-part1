import { BalanceOfUnderlyingCall } from "../generated/aPolAGEUR/aPolAGEUR"
import {
  Transfer as TransferEvent
} from "../generated/CErc20Delegator/CErc20Delegator"
import {
  Transfer
} from "../generated/schema"
import {
  Balance
} from "../generated/schema"
import { CErc20Delegator as ERC20Contract } from "../generated/CErc20Delegator/CErc20Delegator"

// aPolAAVETransfer
export function handleaPolAAVETransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0xf329e36C7bF6E5E86ce2150875a84Ce77f477375"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolDAITransfer
export function handleaPolDAITransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolUSDTTransfer
export function handleaPolUSDTTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x6ab707Aca953eDAeFBc4fD23bA73294241490620"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x6ab707Aca953eDAeFBc4fD23bA73294241490620"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x6ab707Aca953eDAeFBc4fD23bA73294241490620"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x6ab707Aca953eDAeFBc4fD23bA73294241490620"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolLINKTransfer
export function handleaPolLINKTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x191c10Aa4AF7C30e871E70C95dB0E4eb77237530"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWMATICTransfer
export function handleaPolWMATICTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x6d80113e533a2C0fe82EaBD35f1875DcEA89Ea97"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolUSDCTransfer
export function handleaPolUSDCTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x625E7708f30cA75bfd92586e17077590C60eb4cD"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x625E7708f30cA75bfd92586e17077590C60eb4cD"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x625E7708f30cA75bfd92586e17077590C60eb4cD"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x625E7708f30cA75bfd92586e17077590C60eb4cD"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolAGEURTransfer
export function handleaPolAGEURTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolEURSTransfer
export function handleaPolEURSTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x38d693cE1dF5AaDF7bC62595A37D667aD57922e5"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWBTCTransfer
export function handleaPolWBTCTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x078f358208685046a11C85e8ad32895DED33A249"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x078f358208685046a11C85e8ad32895DED33A249"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x078f358208685046a11C85e8ad32895DED33A249"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x078f358208685046a11C85e8ad32895DED33A249"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWETHTransfer
export function handleaPolWETHTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolCRVTransfer
export function handleaPolCRVTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x513c7E3a9c69cA3e22550eF58AC1C0088e918FFf"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolSUSHITransfer
export function handleaPolSUSHITransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0xc45A479877e1e9Dfe9FcD4056c699575a1045dAA"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolGHSTTransfer
export function handleaPolGHSTTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x8Eb270e296023E9D92081fdF967dDd7878724424"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x8Eb270e296023E9D92081fdF967dDd7878724424"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x8Eb270e296023E9D92081fdF967dDd7878724424"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x8Eb270e296023E9D92081fdF967dDd7878724424"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolJEURTransfer
export function handleaPolJEURTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x6533afac2E7BCCB20dca161449A13A32D391fb00"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x6533afac2E7BCCB20dca161449A13A32D391fb00"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x6533afac2E7BCCB20dca161449A13A32D391fb00"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x6533afac2E7BCCB20dca161449A13A32D391fb00"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolDPITransfer
export function handleaPolDPITransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x724dc807b04555b71ed48a6896b6F41593b8C637"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x724dc807b04555b71ed48a6896b6F41593b8C637"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x724dc807b04555b71ed48a6896b6F41593b8C637"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x724dc807b04555b71ed48a6896b6F41593b8C637"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolBALTransfer
export function handleaPolBALTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x8ffDf2DE812095b1D19CB146E4c004587C0A0692"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolAAVESDebtTransfer
export function handleaPolAAVESDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0xfAeF6A702D15428E588d4C0614AEFb4348D83D48"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolAAVEVDebtTransfer
export function handleaPolAAVEVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0xE80761Ea617F66F96274eA5e8c37f03960ecC679"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0xE80761Ea617F66F96274eA5e8c37f03960ecC679"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0xE80761Ea617F66F96274eA5e8c37f03960ecC679"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0xE80761Ea617F66F96274eA5e8c37f03960ecC679"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolAGEURSDebtTransfer
export function handleaPolAGEURSDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x40B4BAEcc69B882e8804f9286b12228C27F8c9BF"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x40B4BAEcc69B882e8804f9286b12228C27F8c9BF"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x40B4BAEcc69B882e8804f9286b12228C27F8c9BF"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x40B4BAEcc69B882e8804f9286b12228C27F8c9BF"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolAGEURVDebtTransfer
export function handleaPolAGEURVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x3ca5FA07689F266e907439aFd1fBB59c44fe12f6"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x3ca5FA07689F266e907439aFd1fBB59c44fe12f6"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x3ca5FA07689F266e907439aFd1fBB59c44fe12f6"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x3ca5FA07689F266e907439aFd1fBB59c44fe12f6"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolSUSHISDebtTransfer
export function handleaPolSUSHISDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x78246294a4c6fBf614Ed73CcC9F8b875ca8eE841"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolSUSHIVDebtTransfer
export function handleaPolSUSHIVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907"
  let balanceTo = new Balance(idTo)
  balanceTo.contract = "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907"
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907"
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = "0x34e2eD44EF7466D5f9E0b782B5c08b57475e7907"
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolDAISDebtTransfer
export function handleaPolDAISDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolDAIVDebtTransfer
export function handleaPolDAIVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolUSDTSDebtTransfer
export function handleaPolUSDTSDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolUSDTVDebtTransfer
export function handleaPolUSDTVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolLINKSDebtTransfer
export function handleaPolLINKSDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolLINKVDebtTransfer
export function handleaPolLINKVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWMATICSDebtTransfer
export function handleaPolWMATICSDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWMATICVDebtTransfer
export function handleaPolWMATICVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolUSDCSDebtTransfer
export function handleaPolUSDCSDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolUSDCVDebtTransfer
export function handleaPolUSDCVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWBTCSDebtTransfer
export function handleaPolWBTCSDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWBTCVDebtTransfer
export function handleaPolWBTCVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWETHSDebtTransfer
export function handleaPolWETHSDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

// aPolWETHVDebtTransfer
export function handleaPolWETHVDebtTransfer(event: TransferEvent): void {
  let erc20Contract = ERC20Contract.bind(event.address)
  const toAddress = event.params.to.toHexString()
  const idTo = toAddress + "-" + event.address.toHexString()
  let balanceTo = new Balance(idTo)
  balanceTo.contract = event.address.toHexString()
  balanceTo.owner = toAddress
  balanceTo.protocol = "aavePolygon"
  balanceTo.balance = erc20Contract.balanceOf(event.params.to)
  balanceTo.save()

  const fromAddress = event.params.from.toHexString()
  const idFrom = fromAddress + "-" + event.address.toHexString()
  let balanceFrom = new Balance(idFrom)
  balanceFrom.contract = event.address.toHexString()
  balanceFrom.owner = fromAddress
  balanceFrom.protocol = "aavePolygon"
  balanceFrom.balance = erc20Contract.balanceOf(event.params.from)
  balanceFrom.save()
}

