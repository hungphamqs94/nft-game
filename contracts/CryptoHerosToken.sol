pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

/**
 * @title ERC721TokenMock
 * This mock just provides a public mint and burn functions for testing purposes,
 * and a public setter for metadata URI
 */
contract CryptoHerosToken is ERC721, Ownable {
  mapping (uint256 => address) internal tokenOwner;
  uint constant minPrice = 0.01 ether;

  string[] public images;
  string[] public backgrounds;
  string[] public descriptions;
  uint[] public numbers;

  struct Hero {
    uint number;
    string image;
    string background;
    string description;
  }

  uint nonce = 0;
  Hero[] public heros;

  mapping( address => uint256[]) listTokenUser;
  
  mapping(uint256 => Hero) public tokenProperty;
  
  constructor(string memory name, string memory symbol) public
    ERC721(name, symbol)
  { }

  function initImage(string memory _image) public onlyOwner {
    images.push(_image);
  }

  function initBackground(string memory _background) public onlyOwner {
    backgrounds.push(_background);
  }

  function initNumberAndDescription(uint _number, string memory _description) public onlyOwner {
    numbers.push(_number);
    descriptions.push(_description);
  }

  function totalSupply() public view returns (uint256) {
    return heros.length;
  }

  /**
   * Only owner can mint
   */
  function mint() public payable {
    require(numbers.length > 0);
    require(images.length > 0);
    require(backgrounds.length > 0);
    require(descriptions.length > 0);
    require(msg.value >= minPrice);
    //require(owner.send(msg.value));
    uint256 _tokenId = totalSupply();
    tokenOwner[_tokenId] = msg.sender;
    uint256 num = rand(0, numbers.length);
    uint256 _number = numbers[num];
    string memory _image = images[rand(0, images.length)];
    string memory _background = backgrounds[rand(0, backgrounds.length)];
    string memory _description = descriptions[num];
    heros.push(Hero({number: _number, image: _image, background: _background, description: _description}));

    listTokenUser[msg.sender][listTokenUser[msg.sender].length] = _tokenId;

    tokenProperty[_tokenId] = Hero({number: _number, image: _image, background: _background, description: _description});
    super._mint(msg.sender, _tokenId);
  }

  function burn(uint256 _tokenId) public onlyOwner {
    tokenOwner[_tokenId] = address(0);
    for(uint i=0;i<listTokenUser[msg.sender].length; i++){
      if(_tokenId == listTokenUser[msg.sender][i]){
        listTokenUser[msg.sender][i] = listTokenUser[msg.sender][listTokenUser[msg.sender].length-1] ; 
        listTokenUser[msg.sender].pop();
      }
    }
    super._burn(_tokenId);
  }

  function getOwnedTokens(address _owner) external view returns (uint256[] memory) {
    return listTokenUser[_owner];
  }

  function getTokenProperty(uint256 _tokenId) external view returns (uint _number, string memory _image, string memory _background, string memory _description) {
    return (tokenProperty[_tokenId].number, tokenProperty[_tokenId].image, tokenProperty[_tokenId].background, tokenProperty[_tokenId].description);
  }

  function rand(uint min, uint max) private returns (uint){
    nonce++;
    return uint(keccak256(abi.encode(nonce)))%(min+max)-min;
  }

  function getHerosLength() external view returns (uint) {
    return heros.length;
  }

  function withdraw(uint amount) public payable onlyOwner returns(bool) {
    require(amount <= address(this).balance);
    transferFrom(address(this), msg.sender, amount);
    return true;
  }
  
}