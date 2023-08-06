// nfts.forEach(nft => {
//     // ...
//     let auctionButton = document.createElement('button');
//     auctionButton.textContent = '拍卖';
//     auctionButton.addEventListener('click', function () {
//       // 拍卖逻辑
//       const auctionFactoryContract = new web3.eth.Contract(auctionFactoryAbi, auctionFactoryAddress);
  
//       const auctionData = {
//         nft: nftContractAddress, // NFT合约地址
//         nftId: nft.id,           // NFT ID
//         startingBid: web3.utils.toWei(nft.priceInWei.toString(), 'ether'), // 起始出价
//         auctionDuration: 86400,  // 拍卖持续时间（例如，24小时）
//         authorizedAddress: current_address, // 授权地址
//         owner: current_address   // 拥有者