const {ThirdwebSDK} = require('@thirdweb-dev/sdk')

// If used on the BACKEND pass your 'secretKey'



const confirmDelivery = async (_aggrementId) => {
  const sdk = await ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai", {
    secretKey: "uyLVqlytwYKMjaMOarOly684A3JPTikmag",
  });
  const contract = await sdk.getContract("0x74bc67C463dd2f362CEfd12182A4114B48a6F39b");
  return await contract.call("confirmDellivery", [_aggrementId])
}

const rejectDelivery = async (_aggrementId) => {
  const sdk = await ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai", {
    secretKey: "uyLI6Mwj7npOzRBlV7YKMjaMOarOly684A3JPTikmag",
  });
  const contract = await sdk.getContract("0x74bc67C463dd2f362CEfd12182A4114B48a6F39b");
  return await contract.call("rejectDelivery", [_aggrementId, 'Reverted'])
} 

module.exports =  {confirmDelivery, rejectDelivery}