import React, { useEffect, useState } from 'react';
import { useAccount, useContractRead } from 'wagmi';
import { ethers } from 'ethers';

const NFTGallery = () => {
  const { address } = useAccount();
  const [nfts, setNfts] = useState([]);

  const contractAddress = 'YOUR_NFT_CONTRACT_ADDRESS';
  const abi = [ /* Your NFT contract ABI */ ];

  const { data: tokenIds } = useContractRead({
    address: contractAddress,
    abi: abi,
    functionName: 'tokensOfOwner',
    args: [address],
  });

  useEffect(() => {
    if (tokenIds) {
      const fetchNFTs = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const nftData = await Promise.all(tokenIds.map(async (tokenId) => {
          const tokenURI = await contract.tokenURI(tokenId);
          const response = await fetch(tokenURI);
          return response.json();
        }));
        setNfts(nftData);
      };
      fetchNFTs();
    }
  }, [tokenIds]);

  return (
    <div>
      <h2>My NFT Gallery</h2>
      <div className="gallery">
        {nfts.map((nft, index) => (
          <div key={index} className="nft">
            <img src={nft.image} alt={nft.name} />
            <p>{nft.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NFTGallery;
