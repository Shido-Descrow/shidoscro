const {ThirdwebSDK} = require('@thirdweb-dev/sdk')

// If used on the BACKEND pass your 'secretKey'



const confirmDelivery = async (_aggrementId) => {
  const sdk = await ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai", {
    secretKey: "13cb841ad59cfc97d828e08e2e5b3405e08f59e7b69efeb817475a86b2113374",
  });
  const contract = await sdk.getContract("0x95b2280e141791bEaa35fcf2C1884554f6991F8e");
  return await contract.call("confirmDellivery", [_aggrementId])
}

const rejectDelivery = async (_aggrementId) => {
  const sdk = await ThirdwebSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai", {
    secretKey: "13cb841ad59cfc97d828e08e2e5b3405e08f59e7b69efeb817475a86b2113374",
  });
  const contract = await sdk.getContract("0x95b2280e141791bEaa35fcf2C1884554f6991F8e");
  return await contract.call("rejectDelivery", [_aggrementId, 'Reverted'])
} 

module.exports =  {confirmDelivery, rejectDelivery}