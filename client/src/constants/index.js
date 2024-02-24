export const Chain = {
	// Required information for connecting to the network
	chainId: 9007, // Chain ID of the network
	rpc: ["https://rpc-testnet-nodes.shidoscan.com/"], // Array of RPC URLs to use
	// Information for adding the network to your wallet (how it will appear for first time users) === \\
	// Information about the chain's native currency (i.e. the currency that is used to pay for gas)
	nativeCurrency: {
	  decimals: 18,
	  name: "SHIDO",
	  symbol: "$ASHIDO",
	},
	shortName: "Shid", // Display value shown in the wallet UI
	slug: "Shid", // Display value shown in the wallet UI
	testnet: false, // Boolean indicating whether the chain is a testnet or mainnet
	chain: "Shido", // Name of the network
	name: "Shido Testnet", // Name of the network
  };