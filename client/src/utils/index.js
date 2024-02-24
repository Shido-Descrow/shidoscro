export const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aggrementId",
				"type": "uint256"
			}
		],
		"name": "approveAggrement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "merchantAddress",
				"type": "address"
			}
		],
		"name": "buyProductAsUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aggrementId",
				"type": "uint256"
			}
		],
		"name": "confirmDellivery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "imageData",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "listProductAsMerchant",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_server",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "itemName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "imageData",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "listerMerchant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "ProductId",
				"type": "uint256"
			}
		],
		"name": "PRODUCTLISTED",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aggrementId",
				"type": "uint256"
			}
		],
		"name": "rejectAggrement",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_aggrementId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "revertMessage",
				"type": "string"
			}
		],
		"name": "rejectDelivery",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "aggrementId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "SERVERCONFIRMDELIVERY",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "aggrementId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "revertMessage",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "revertTxnData",
				"type": "bytes"
			}
		],
		"name": "SERVERREVERTEDDELIVERY",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "aggrementId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "txnData",
				"type": "bytes"
			}
		],
		"name": "TRASACTIONFULLFILLED",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "getAggremnts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "applicant",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "fullfiller",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "item_id",
						"type": "uint256"
					},
					{
						"internalType": "enum MyContract.ItemState",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "aggrementId",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContract.PRODUCT_AGGREMENT[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getAggremntsById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "applicant",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "fullfiller",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "item_id",
						"type": "uint256"
					},
					{
						"internalType": "enum MyContract.ItemState",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "uint256",
						"name": "aggrementId",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContract.PRODUCT_AGGREMENT",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "listedItemById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "item_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image_data",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "merchant_add",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "itemId",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContract.ITEM_DETAIL",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "listedItems",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "item_name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image_data",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "merchant_add",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "price",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "itemId",
						"type": "uint256"
					}
				],
				"internalType": "struct MyContract.ITEM_DETAIL[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "server",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];