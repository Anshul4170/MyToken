// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MeowCoin", "MC") {
        _mint(msg.sender, 12000);
    }

    function decimals()public view virtual override returns (uint8) {
        return 8;
    }
}