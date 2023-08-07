tokenAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "mint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "idToRemove",
                "type": "uint256"
            }
        ],
        "name": "removeIdFromList",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "getIdList",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "id_list",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "length",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }
]
tokenAddress = "0x3e286B4efA89630939a1bD63aC74336137601dE7"

auctionFactoryAbi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "auctionContract",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "seller",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "nftId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startingBid",
                "type": "uint256"
            }
        ],
        "name": "AuctionCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "nft",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "nftId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startingBid",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "auctionDuration",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "authorizedAddress",
                        "type": "address"
                    },
                    {
                        "internalType": "address payable",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "internalType": "struct AuctionFactory.AuctionData",
                "name": "data",
                "type": "tuple"
            }
        ],
        "name": "createAuction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "auctions",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllAuctions",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]

auctionFactoryAddress = "0x7bc3F9ea3f9Bd5389aE5108a8Ec3f2AD5fE3B60E"

auctionAbi = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_nft",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_nftId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startingBid",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_auctionDuration",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_authorizedAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_owner",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "AuctionCanceled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Bid",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "highestBidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "End",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "Start",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "bidder",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Withdraw",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "auctionDuration",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "authorizedAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bid",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "bids",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "cancelAuction",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "canceled",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "end",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "endAt",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ended",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAuthorizedAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "highestBid",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "highestBidder",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nft",
        "outputs": [
            {
                "internalType": "contract IERC721",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "nftId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "start",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "started",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]

async function getMyAuction() {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({method: 'eth_requestAccounts'});

            const contract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
            const accounts = await web3.eth.getAccounts();
            const current_address = accounts[0]; 
            contract.methods.getAllAuctions().call()
                .then((datas) => {
                    let nfts = []
                    let container = document.getElementById('myAuction');
                    container.innerHTML = '';
                    let h1 = document.createElement('h1');
                    h1.innerHTML = 'My Auction';
                    container.appendChild(h1);
                    // Determine whether there is an auction
                    if (datas.length === 0) {
                        let p = document.createElement('p');
                        p.innerHTML = 'No Auction';
                        p.style.textAlign = 'center';
                        container.appendChild(p);
                    }

                    datas.forEach((auction_address, index) => {
                        const auction_contract = new web3.eth.Contract(auctionAbi, auction_address);
                        // Get NFT ID
                        auction_contract.methods.nftId().call()
                            .then(nftId => {
                                // Get highest bidder
                                auction_contract.methods.highestBidder().call()
                                    .then(highestBidder => {
                                        auction_contract.methods.highestBid().call()
                                            .then(h_price => {
                                                // Get EndAt
                                                auction_contract.methods.endAt().call()
                                                    .then(endAt => {
                                                        // Get owner
                                                        console.log("截止时间", endAt)
                                                        auction_contract.methods.owner().call()
                                                            .then(owner => {
                                                                if (owner === current_address) {

                                                                    let div = document.createElement('div');
                                                                    div.className = 'nft-item';

                                                                    let img = document.createElement('img');
                                                                    img.className = 'nft-image';
                                                                    img.src = "images/picture-01.jpg"
                                                                    div.appendChild(img);

                                                                    let details = document.createElement('div');
                                                                    details.className = 'nft-details';

                                                                    let idDiv = document.createElement('div');
                                                                    idDiv.textContent = 'NFT ID: ' + nftId;
                                                                    details.appendChild(idDiv);

                                                                    let h_id = document.createElement('div');
                                                                    h_id.textContent = 'highest Bidder: ' + highestBidder;
                                                                    details.appendChild(h_id);

                                                                    let price = document.createElement('div');
                                                                    price.textContent = 'highest price: ' + h_price;
                                                                    
                                                                    let span = document.createElement('span');
                                                                    span.textContent = ' wei';
                                                                    span.style.fontWeight = 'bold';
                                                                    price.appendChild(span);
                                                                    details.appendChild(price);

                                                                    let end_time = document.createElement("div");
                                                                    // endAt 1691344532
                                                                    if (endAt === "0") {
                                                                        endAt = "Not start";
                                                                    }
                                                                    endAt = new Date(parseInt(endAt) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');

                                                                    end_time.textContent = "end time: " + endAt;
                                                                    details.appendChild(end_time);

                                                                    let address = document.createElement('div');
                                                                    address.textContent = 'auctionContractAddress: ' + auction_address;
                                                                    details.appendChild(address);

                                                                    // 在一行加上两个按钮，一个是start一个是end，一个是cancel
                                                                    let buttonDiv = document.createElement('div');
                                                                    buttonDiv.className = 'buttonDiv';
                                                                    let startButton = document.createElement('button');
                                                                    startButton.className = 'nft-button';
                                                                    startButton.textContent = 'start';
                                                                    startButton.onclick = function () {
                                                                        console.log("点击start按钮")
                                                                        auction_contract.methods.start().send({from: current_address})
                                                                            .then(() => {
                                                                                alert('start success');
                                                                            })
                                                                            .catch(error => {
                                                                                console.error(error);
                                                                            })
                                                                    }
                                                                    buttonDiv.appendChild(startButton);
                                                                    let endButton = document.createElement('button');
                                                                    endButton.className = 'nft-button';
                                                                    endButton.textContent = 'end';
                                                                    endButton.onclick = function () {
                                                                        console.log("点击end按钮")
                                                                        auction_contract.methods.end().send({from: current_address})
                                                                            .then(() => {
                                                                                alert('end success');
                                                                            })
                                                                            .catch(error => {
                                                                                console.error(error);
                                                                            })
                                                                    }
                                                                    buttonDiv.appendChild(endButton);
                                                                    let cancelButton = document.createElement('button');
                                                                    cancelButton.className = 'nft-button';
                                                                    cancelButton.textContent = 'cancel';
                                                                    cancelButton.onclick = function () {
                                                                        console.log("点击cancel按钮")
                                                                        auction_contract.methods.cancelAuction().send({from: current_address})
                                                                            .then(() => {
                                                                                alert('cancel success');
                                                                            })
                                                                            .catch(error => {
                                                                                console.error(error);
                                                                            })
                                                                    }
                                                                    buttonDiv.appendChild(cancelButton);


                                                                    details.appendChild(buttonDiv);


                                                                    div.appendChild(details);

                                                                    container.appendChild(div);
                                                                }
                                                            })
                                                            .catch(error => {
                                                                console.error(error);
                                                            })
                                                    })
                                                    .catch(error => {
                                                        console.error(error);
                                                    })
                                            })
                                            .catch(error => {
                                                console.error(error);
                                            });

                                    })
                                    .catch(error => {
                                        console.error(error);
                                    });
                            })
                            .catch(error => {
                                console.error(error);
                            });


                    })
                })

        } catch (error) {
            console.error(error);
        }

    } else {
        console.log();
    }
}


async function fetchMyNFTs() {
    // 获取所有的NFT
    var nfts = []
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
            const accounts = await web3.eth.getAccounts();
            const current_address = accounts[0]; 
            // Get id list
            let nfts = []
            contract.methods.getIdList(current_address).call()
                .then(data => {
                    console.log("id列表", data[0], data[1])
                    ids = data[0]
                    for (let i = 0; i < ids.length; i++) {
                        nfts.push({
                            imageUrl: "images/picture-01.jpg",
                            id: ids[i],
                            priceInWei: 1,
                            index: i
                        })
                    }
                    let container = document.getElementById('myNFT');
                           
                            container.innerHTML = '';
                            let h1 = document.createElement('h1');
                            h1.textContent = 'My NFTs';
                            container.appendChild(h1);
                            if (nfts.length === 0) {
                                let p = document.createElement('p');
                                p.textContent = 'No NFTs minted yet.';
                                p.style.textAlign = 'center';
                                container.appendChild(p);
                            }
                    nfts.forEach(nft => {
                        let div = document.createElement('div');
                        div.className = 'nft-item';

                        let img = document.createElement('img');
                        img.className = 'nft-image';
                        img.src = nft.imageUrl; 
                        div.appendChild(img);

                        let details = document.createElement('div');
                        details.className = 'nft-details';

                        let idDiv = document.createElement('div');
                        idDiv.textContent = 'NFT ID: ' + nft.id;
                        details.appendChild(idDiv);

                        let priceDiv = document.createElement('div');
                        priceDiv.className = 'nft-price';
                        priceDiv.textContent = 'Price: ';
                        let priceInput = document.createElement('input');
                        priceInput.type = 'text';
                        priceInput.value = nft.priceInWei; // 假设价格在nft对象中
                        priceDiv.appendChild(priceInput);
                        details.appendChild(priceDiv);

                        let dutationDiv = document.createElement('div');
                        dutationDiv.className = 'nft-duration';
                        dutationDiv.textContent = 'duration(>=500): ';
                        let dutationInput = document.createElement("input")
                        dutationInput.type = 'text';
                        dutationInput.value = 20
                        dutationDiv.append(dutationInput)
                        details.appendChild(dutationDiv);

                        let auctionButton = document.createElement('button');
                        auctionButton.textContent = 'Create Auction';

                        auctionButton.className = "nft-button";
                        auctionButton.addEventListener('click', function () {
                            // Auction
                            console.log(nft.index);
                            const auctionFactoryContract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);

                            const auctionData = {
                                nft: tokenAddress, // NFT address
                                nftId: nft.id,           // NFT ID
                                startingBid: web3.utils.toWei($('.nft-item').eq(nft.index).find('.nft-price input').val(), 'wei'), // 起始出价
                                auctionDuration: $('.nft-item').eq(nft.index).find('.nft-duration input').val(),  // 拍卖持续时间（例如，24小时）
                                authorizedAddress: current_address, 
                                owner: current_address   // owner
                            }
                            console.log("拍卖合约创建参数", auctionData)
                            auctionFactoryContract.methods.createAuction(auctionData).send({from: current_address})
                                .on('transactionHash', (hash) => {
                                    console.log('交易哈希:', hash);
                                })
                                // .on('data', event => {
                                //     // 获取创建的auction地址
                                //     new_auction_address = event.returnValues[0]
                                //     token_Contract = new web3.eth.Contract(tokenAbi, tokenAddress);
                                //     token_Contract.methods.approve(new_auction_address, nft.id).send({from: current_address})
                                //         .on('transactionHash', function (hash) {
                                //             console.log("Transaction hash: " + hash);
                                //         })
                                //         .on('confirmation', function (confirmationNumber, receipt) {
                                //             console.log("Confirmation number: " + confirmationNumber);
                                //         })
                                //         .on('receipt', function (receipt) {
                                //             console.log("approve success");
                                //             // approve成功
                                //             // auction_Contract = new web3.eth.Contract(auctionAbi, create_auction)
                                //             // auction_Contract.methods.start().send({from: current_address})
                                //             //     .then(receipt => {
                                //             //         console.log("Auction started!", receipt);
                                //             //     })
                                //             //     .catch(error => {
                                //             //         console.error(error);
                                //             //     });
                                //         })
                                //         .on('error', console.error);
                                // })
                                .on('receipt', (receipt) => {
                                    console.log('Receipt::', receipt);
                                    alert('Auction create success!');
                                    // 获取创建的auction地址
                                    factory_Contract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
                                    factory_Contract.methods.getAllAuctions().call()
                                        .then(datas => {
                                            console.log("获取创建的地址", datas)
                                            console.log("create_auction", datas[datas.length - 1])
                                            create_auction = datas[datas.length - 1]
                                            // 拿到创建的auction地址
                                            token_Contract = new web3.eth.Contract(tokenAbi, tokenAddress);
                                            token_Contract.methods.approve(create_auction, nft.id).send({from: current_address})
                                                .on('transactionHash', function (hash) {
                                                    console.log("Transaction hash: " + hash);
                                                })
                                                .on('confirmation', function (confirmationNumber, receipt) {
                                                    console.log("Confirmation number: " + confirmationNumber);
                                                })
                                                .on('receipt', function (receipt) {
                                                    console.log("approve success");
                                                    // approve
                                                    // auction_Contract = new web3.eth.Contract(auctionAbi, create_auction)
                                                    // auction_Contract.methods.start().send({from: current_address})
                                                    //     .then(receipt => {
                                                    //         console.log("Auction started!", receipt);
                                                    //     })
                                                    //     .catch(error => {
                                                    //         console.error(error);
                                                    //     });
                                                })
                                                .on('error', console.error); // 如果在交易过程中出现错误，将在此处捕获
                                        })
                                    // token_contract = new web3.eth.Contract(tokenAbi, tokenAddress);

                                })
                                .on('error', (error) => {
                                    console.error('Error:', error);
                                    alert('Something wrong, pleace try again.');
                                });
                        });
                        details.appendChild(auctionButton);

                        div.appendChild(details);

                        container.appendChild(div);
                    });
                })

            // contract.methods.balanceOf(current_address).call()
            //     .then((balance) => {
            //         const promises = [];
            //         for (let i = 0; i < balance; i++) {
            //             promises.push(contract.methods.id_list(current_address, i).call());
            //         }
            //         console.log(promises);
            //         return Promise.all(promises);
            //
            //     })
            //     .then((ids) => {
            //         console.log('NFT IDs:', ids);
            //         let nfts = []
            //         ids.forEach((id, index) => {
            //             nfts.push({
            //                 imageUrl: "images/picture-01.jpg",
            //                 id: id,
            //                 priceInWei: 1,
            //                 index: index
            //             })
            //         });
            //
            //         let container = document.getElementById('myNFT');
            //         // 清除container中除了h1标签之外的所有内容
            //         container.innerHTML = '';
            //         let h1 = document.createElement('h1');
            //         h1.textContent = 'My NFTs';
            //         container.appendChild(h1);
            //         if (nfts.length === 0) {
            //             let p = document.createElement('p');
            //             p.textContent = 'No NFTs minted yet.';
            //             // 居中显示
            //             p.style.textAlign = 'center';
            //             container.appendChild(p);
            //         }
            //
            //         nfts.forEach(nft => {
            //             let div = document.createElement('div');
            //             div.className = 'nft-item';
            //
            //             let img = document.createElement('img');
            //             img.className = 'nft-image';
            //             img.src = nft.imageUrl; // 假设图片URL在nft对象中
            //             div.appendChild(img);
            //
            //             let details = document.createElement('div');
            //             details.className = 'nft-details';
            //
            //             let idDiv = document.createElement('div');
            //             idDiv.textContent = 'NFT ID: ' + nft.id;
            //             details.appendChild(idDiv);
            //
            //             let priceDiv = document.createElement('div');
            //             priceDiv.className = 'nft-price';
            //             priceDiv.textContent = 'Price: ';
            //             let priceInput = document.createElement('input');
            //             priceInput.type = 'text';
            //             priceInput.value = nft.priceInWei; // 假设价格在nft对象中
            //             priceDiv.appendChild(priceInput);
            //             details.appendChild(priceDiv);
            //
            //             let dutationDiv = document.createElement('div');
            //             dutationDiv.className = 'nft-duration';
            //             dutationDiv.textContent = 'duration: ';
            //             let dutationInput = document.createElement("input")
            //             dutationInput.type = 'text';
            //             dutationInput.value = 20
            //             dutationDiv.append(dutationInput)
            //             details.appendChild(dutationDiv);
            //
            //             let auctionButton = document.createElement('button');
            //             auctionButton.textContent = '拍卖';
            //             // 添加class
            //             auctionButton.className = "nft-button";
            //             auctionButton.addEventListener('click', function () {
            //                 // 拍卖
            //                 console.log(nft.index);
            //                 const auctionFactoryContract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
            //
            //                 const auctionData = {
            //                     nft: tokenAddress, // NFT合约地址
            //                     nftId: nft.id,           // NFT ID
            //                     startingBid: web3.utils.toWei($('.nft-item').eq(nft.index).find('.nft-price input').val(), 'wei'), // 起始出价
            //                     auctionDuration: $('.nft-item').eq(nft.index).find('.nft-duration input').val(),  // 拍卖持续时间（例如，24小时）
            //                     authorizedAddress: current_address, // 授权地址
            //                     owner: current_address   // 拥有者
            //                 }
            //                 console.log("拍卖合约创建参数", auctionData)
            //                 auctionFactoryContract.methods.createAuction(auctionData).send({from: current_address})
            //                     .on('transactionHash', (hash) => {
            //                         console.log('交易哈希:', hash);
            //                     })
            //                     // .on('data', event => {
            //                     //     // 获取创建的auction地址
            //                     //     new_auction_address = event.returnValues[0]
            //                     //     token_Contract = new web3.eth.Contract(tokenAbi, tokenAddress);
            //                     //     token_Contract.methods.approve(new_auction_address, nft.id).send({from: current_address})
            //                     //         .on('transactionHash', function (hash) {
            //                     //             console.log("Transaction hash: " + hash);
            //                     //         })
            //                     //         .on('confirmation', function (confirmationNumber, receipt) {
            //                     //             console.log("Confirmation number: " + confirmationNumber);
            //                     //         })
            //                     //         .on('receipt', function (receipt) {
            //                     //             console.log("approve success");
            //                     //             // approve成功
            //                     //             // auction_Contract = new web3.eth.Contract(auctionAbi, create_auction)
            //                     //             // auction_Contract.methods.start().send({from: current_address})
            //                     //             //     .then(receipt => {
            //                     //             //         console.log("Auction started!", receipt);
            //                     //             //     })
            //                     //             //     .catch(error => {
            //                     //             //         console.error(error);
            //                     //             //     });
            //                     //         })
            //                     //         .on('error', console.error);
            //                     // })
            //                     .on('receipt', (receipt) => {
            //                         console.log('交易收据:', receipt);
            //                         alert('拍卖已创建!');
            //                         // 获取创建的auction地址
            //                         factory_Contract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
            //                         factory_Contract.methods.getAllAuctions().call()
            //                             .then(datas => {
            //                                 console.log("获取创建的地址", datas)
            //                                 console.log("create_auction", datas[datas.length - 1])
            //                                 create_auction = datas[datas.length - 1]
            //                                 // 拿到创建的auction地址
            //                                 token_Contract = new web3.eth.Contract(tokenAbi, tokenAddress);
            //                                 token_Contract.methods.approve(create_auction, nft.id).send({from: current_address})
            //                                     .on('transactionHash', function (hash) {
            //                                         console.log("Transaction hash: " + hash);
            //                                     })
            //                                     .on('confirmation', function (confirmationNumber, receipt) {
            //                                         console.log("Confirmation number: " + confirmationNumber);
            //                                     })
            //                                     .on('receipt', function (receipt) {
            //                                         console.log("approve success");
            //                                         // approve
            //                                         // auction_Contract = new web3.eth.Contract(auctionAbi, create_auction)
            //                                         // auction_Contract.methods.start().send({from: current_address})
            //                                         //     .then(receipt => {
            //                                         //         console.log("Auction started!", receipt);
            //                                         //     })
            //                                         //     .catch(error => {
            //                                         //         console.error(error);
            //                                         //     });
            //                                     })
            //                                     .on('error', console.error); // 如果在交易过程中出现错误，将在此处捕获
            //                             })
            //                         // token_contract = new web3.eth.Contract(tokenAbi, tokenAddress);
            //
            //                     })
            //                     .on('error', (error) => {
            //                         console.error('出错了:', error);
            //                         alert('创建拍卖失败，请稍后重试或联系支持人员。');
            //                     });
            //             });
            //             details.appendChild(auctionButton);
            //
            //             div.appendChild(details);
            //
            //             container.appendChild(div);
            //         });
            //     })
            //     .catch((error) => {
            //         console.error(error);
            //     });
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('MetaMask not detected');
    }
}

async function getNFTMarket() {
    if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
            // 请求用户授权
            await window.ethereum.request({method: 'eth_requestAccounts'});

            const contract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
            const accounts = await web3.eth.getAccounts();
            const current_address = accounts[0]; 
            contract.methods.getAllAuctions().call()
                .then((datas) => {
                    let container = document.getElementById('nftMarket');
                    container.innerHTML = '';
                    // 添加h1标签
                    let h1 = document.createElement('h1');
                    h1.innerHTML = 'Marketplace';
                    container.appendChild(h1);
                
                    if (datas.length === 0) {
                        let p = document.createElement('p');
                        p.innerHTML = 'No NFT';
                        // Middle
                        p.style.textAlign = 'center';
                        container.appendChild(p);
                    }

                    datas.forEach((auction_address, index) => {
                        const auction_contract = new web3.eth.Contract(auctionAbi, auction_address);
                        // Get NFT ID
                        auction_contract.methods.nftId().call()
                            .then(nftId => {
                                // Get highest bidder
                                auction_contract.methods.highestBidder().call()
                                    .then(highestBidder => {
                                        auction_contract.methods.highestBid().call()
                                            .then(h_price => {
                                                // get end time
                                                auction_contract.methods.endAt().call()
                                                    .then(endAt => {
                                                        // Get owner
                                                        console.log("截止时间", endAt)
                                                        auction_contract.methods.owner().call()
                                                            .then(owner => {
                                                                if (endAt !== '0' && endAt > Date.now() / 1000) {
                                                                    

                                                                    let div = document.createElement('div');
                                                                    div.className = 'nft-item';

                                                                    let img = document.createElement('img');
                                                                    img.className = 'nft-image';
                                                                    img.src = "images/picture-01.jpg"
                                                                    div.appendChild(img);

                                                                    let details = document.createElement('div');
                                                                    details.className = 'nft-details';

                                                                    let idDiv = document.createElement('div');
                                                                    idDiv.textContent = 'NFT ID: ' + nftId;
                                                                    details.appendChild(idDiv);

                                                                    let h_id = document.createElement('div');
                                                                    h_id.textContent = 'highest Bidder: ' + highestBidder;
                                                                    details.appendChild(h_id);

                                                                    let price = document.createElement('div');
                                                                    price.textContent = 'highest price: ' + h_price;
                                                                    
                                                                    let span = document.createElement('span');
                                                                    span.textContent = 'wei';
                                                                    span.style.fontWeight = 'bold';
                                                                    price.appendChild(span);
                                                                    details.appendChild(price);

                                                                    let end = document.createElement('div');
                                                                    end.textContent = 'end at: ' + new Date(endAt * 1000).toLocaleString();
                                                                    details.appendChild(end);

                                                                    let ownerDiv = document.createElement('div');
                                                                    ownerDiv.textContent = 'owner: ' + owner;
                                                                    details.appendChild(ownerDiv);
                                                                    
                                                                    let input = document.createElement('input');
                                                                    input.type = 'text';
                                                                    input.placeholder = 'Enter your bid (wei)';
                                                                    input.className = 'nft-input';
                                                                    details.appendChild(input);
                                                                    
                                                                    let button = document.createElement('button');
                                                                    button.textContent = 'Bid';
                                                                    button.className = 'nft-button';
                                                                    button.onclick = function () {
                                                                        auction_contract.methods.bid().send({"from": current_address, "value": web3.utils.toWei(input.value, 'wei')})
                                                                    }
                                                                    details.appendChild(button);

                                                                    div.appendChild(details);

                                                                    container.appendChild(div);
                                                                }
                                                                // if (owner === current_address) {
                                                                //     // 填充页面
                                                                //
                                                                //     let div = document.createElement('div');
                                                                //     div.className = 'nft-item';
                                                                //
                                                                //     let img = document.createElement('img');
                                                                //     img.className = 'nft-image';
                                                                //     img.src = "images/picture-01.jpg"
                                                                //     div.appendChild(img);
                                                                //
                                                                //     let details = document.createElement('div');
                                                                //     details.className = 'nft-details';
                                                                //
                                                                //     let idDiv = document.createElement('div');
                                                                //     idDiv.textContent = 'NFT ID: ' + nftId;
                                                                //     details.appendChild(idDiv);
                                                                //
                                                                //     let h_id = document.createElement('div');
                                                                //     h_id.textContent = 'highest Bidder: ' + highestBidder;
                                                                //     details.appendChild(h_id);
                                                                //
                                                                //     let price = document.createElement('div');
                                                                //     price.textContent = 'highest price: ' + h_price;
                                                                //     // price后面添加一个粗的单位
                                                                //     let span = document.createElement('span');
                                                                //     span.textContent = ' wei';
                                                                //     span.style.fontWeight = 'bold';
                                                                //     price.appendChild(span);
                                                                //     details.appendChild(price);
                                                                //
                                                                //     let end_time = document.createElement("div");
                                                                //     // endAt 1691344532转字符串
                                                                //     if (endAt === "0") {
                                                                //         endAt = "Not start";
                                                                //     }
                                                                //     endAt = new Date(parseInt(endAt) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
                                                                //
                                                                //     end_time.textContent = "end time: " + endAt;
                                                                //     details.appendChild(end_time);
                                                                //
                                                                //     let address = document.createElement('div');
                                                                //     address.textContent = 'auctionContractAddress: ' + auction_address;
                                                                //     details.appendChild(address);
                                                                //
                                                                //     // 在一行加上两个按钮，一个是start一个是end
                                                                //     let buttonDiv = document.createElement('div');
                                                                //     buttonDiv.className = 'buttonDiv';
                                                                //     let startButton = document.createElement('button');
                                                                //     startButton.className = 'startButton';
                                                                //     startButton.textContent = 'start';
                                                                //     startButton.onclick = function () {
                                                                //         console.log("点击start按钮")
                                                                //         auction_contract.methods.start().send({from: current_address})
                                                                //             .then(() => {
                                                                //                 alert('start success');
                                                                //             })
                                                                //             .catch(error => {
                                                                //                 console.error(error);
                                                                //             })
                                                                //     }
                                                                //     buttonDiv.appendChild(startButton);
                                                                //     let endButton = document.createElement('button');
                                                                //     endButton.className = 'endButton';
                                                                //     endButton.textContent = 'end';
                                                                //     endButton.onclick = function () {
                                                                //         console.log("点击end按钮")
                                                                //         auction_contract.methods.end().send({from: current_address})
                                                                //             .then(() => {
                                                                //                 alert('end success');
                                                                //             })
                                                                //             .catch(error => {
                                                                //                 console.error(error);
                                                                //             })
                                                                //     }
                                                                //     buttonDiv.appendChild(endButton);
                                                                //     details.appendChild(buttonDiv);
                                                                //
                                                                //
                                                                //     div.appendChild(details);
                                                                //
                                                                //     container.appendChild(div);
                                                                // }
                                                            })
                                                            .catch(error => {
                                                                console.error(error);
                                                            })
                                                    })
                                                    .catch(error => {
                                                        console.error(error);
                                                    })
                                            })
                                            .catch(error => {
                                                console.error(error);
                                            });

                                    })
                                    .catch(error => {
                                        console.error(error);
                                    });
                            })
                            .catch(error => {
                                console.error(error);
                            });


                    })
                })

        } catch (error) {
            console.error(error);
        }

    } else {
        console.log();
    }
}

(() => {
    $('#content > div').hide();  
    $('#mintNFT').show();  
    $('.nav-link').click(function () {
        
        $('.nav-link').removeClass('nav-cur');
        $(this).addClass('nav-cur');
        var target = $(this).data('target');
        $('#content > div').hide(); 
        $('#' + target).show(); 
        if (target == "myNFT") {
            fetchMyNFTs()
        }
        if (target == "myAuction") {
            getMyAuction()
        }
        if (target == "nftMarket") {
            getNFTMarket()
        }
    });

    $('#connectWallet').click(async function () {
        if (typeof window.ethereum !== 'undefined') {
            window.ethereum.request({method: 'eth_requestAccounts'})
                .then(handleAccountsChanged)
                .catch(function (err) {
                    alert('An error occurred while connecting to the wallet: ' + err.message);
                });
        } else {
            alert('MetaMask is not installed. Please install it to connect your wallet.');
        }
    });

    function handleAccountsChanged(accounts) {
        if (accounts.length === 0) {
            alert('No account connected');
        } else {
            $('#connectWallet').hide();
            $('#walletAddress').text(accounts[0]); 
        }
    }

   
    if (window.ethereum) {
        window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    $('#mintButton').click(async function () {
        var nftId = $('#nftId').val();
        if (nftId == "") {
            alert("请输入id")
            return
        }

        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);
            try {
                
                await window.ethereum.request({method: 'eth_requestAccounts'});

                const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
                const accounts = await web3.eth.getAccounts();
                const current_address = accounts[0]; 

                if (nftId) {
                    console.log('Minting NFT with ID:', nftId);
                    contract.methods.mint(current_address, nftId).send({from: current_address})
                        .on('transactionHash', (hash) => {
                            console.log('Transaction Hash:', hash);
                            alert("Create Successfully!")
                        })
                } else {
                    alert('Please enter an NFT ID');
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            console.log('MetaMask not detected');
        }
    });

})()