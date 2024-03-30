import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { FhenixClient, EncryptionTypes, getPermit } from "fhenixjs";
import './App.css'
import './styles.css';
import logo from '../public/logo.png'
import profilePhoto from './assets/profilePhoto.png'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import GavelIcon from '@mui/icons-material/Gavel';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const walletAddress = '0xAe9952347606576BAfa7ED44434312df0F519Ea7';
const privateKeyDatingApp = '74a0f218c62ba96d19284ba2b4ba08f3aa763c32f707e7fbf57087b66a952d13';
const wallet = new ethers.Wallet(privateKeyDatingApp);

const providerUrl = 'https://api.testnet.fhenix.zone:7747/';
const provider2 = new ethers.providers.JsonRpcProvider(providerUrl);
const walletConnected = wallet.connect(provider2);



const ABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "ECDSAInvalidSignature",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "length",
        "type": "uint256"
      }
    ],
    "name": "ECDSAInvalidSignatureLength",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "ECDSAInvalidSignatureS",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721IncorrectOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721InsufficientApproval",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "approver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidApprover",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOperator",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidReceiver",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "ERC721InvalidSender",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ERC721NonexistentToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidShortString",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SignerNotMessageSender",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SignerNotOwner",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "str",
        "type": "string"
      }
    ],
    "name": "StringTooLong",
    "type": "error"
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
        "name": "approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
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
    "anonymous": false,
    "inputs": [],
    "name": "EIP712DomainChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
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
        "name": "tokenId",
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "_identitylist",
    "outputs": [
      {
        "internalType": "euint32",
        "name": "dateOfBirth",
        "type": "uint256"
      },
      {
        "internalType": "euint8",
        "name": "medicalData",
        "type": "uint256"
      },
      {
        "internalType": "euint8",
        "name": "criminalRecord",
        "type": "uint256"
      },
      {
        "internalType": "euint8",
        "name": "fertilityMeasure",
        "type": "uint256"
      },
      {
        "internalType": "euint8",
        "name": "marriageStatus",
        "type": "uint256"
      },
      {
        "internalType": "euint8",
        "name": "rating",
        "type": "uint256"
      },
      {
        "internalType": "euint32",
        "name": "lastExamineDate",
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
        "name": "_adminAddress",
        "type": "address"
      }
    ],
    "name": "addAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct inEuint8",
        "name": "__criminalRecord",
        "type": "tuple"
      }
    ],
    "name": "addCriminalRecord",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct inEuint8",
        "name": "__fertilityCount",
        "type": "tuple"
      }
    ],
    "name": "addFertilityCount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct inEuint8",
        "name": "__marriageStatus",
        "type": "tuple"
      }
    ],
    "name": "addMarriageStatus",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct inEuint8",
        "name": "_medicalInfo",
        "type": "tuple"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct inEuint32",
        "name": "_lastExamineDate",
        "type": "tuple"
      }
    ],
    "name": "addMedicalData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct inEuint8",
        "name": "__rating",
        "type": "tuple"
      }
    ],
    "name": "addRating",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "internalType": "struct inEuint32",
        "name": "_dateOfBirth",
        "type": "tuple"
      }
    ],
    "name": "addUserDOBDetails",
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
        "name": "tokenId",
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
        "internalType": "address",
        "name": "_dappAddress",
        "type": "address"
      }
    ],
    "name": "approveViewingOfData",
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
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eip712Domain",
    "outputs": [
      {
        "internalType": "bytes1",
        "name": "fields",
        "type": "bytes1"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "chainId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "verifyingContract",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "salt",
        "type": "bytes32"
      },
      {
        "internalType": "uint256[]",
        "name": "extensions",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
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
        "name": "_userAddress",
        "type": "address"
      }
    ],
    "name": "isAboveEighteen",
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
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
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
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "ownerOf",
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
        "name": "_addressToRemove",
        "type": "address"
      }
    ],
    "name": "removeAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userData",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "publicKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct Permission",
        "name": "perm",
        "type": "tuple"
      }
    ],
    "name": "retrieveCriminalRecord",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_patientData",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "publicKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct Permission",
        "name": "perm",
        "type": "tuple"
      }
    ],
    "name": "retrieveFertilityMeasure",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_patientData",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "publicKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct Permission",
        "name": "perm",
        "type": "tuple"
      }
    ],
    "name": "retrieveLastKnownMedicalData",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userData",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "publicKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct Permission",
        "name": "perm",
        "type": "tuple"
      }
    ],
    "name": "retrieveMarriageStatus",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_patientData",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "publicKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct Permission",
        "name": "perm",
        "type": "tuple"
      }
    ],
    "name": "retrieveMedicalData",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_userData",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "publicKey",
            "type": "bytes32"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct Permission",
        "name": "perm",
        "type": "tuple"
      }
    ],
    "name": "retrieveRating",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_dappAddress",
        "type": "address"
      }
    ],
    "name": "revokeViewingOfData",
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
        "name": "tokenId",
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
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
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
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
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
      },
      {
        "internalType": "uint256",
        "name": "",
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
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_addressToCheck",
        "type": "address"
      }
    ],
    "name": "viewAddressToTokenID",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

const theme = createTheme({
  palette: {
    primary: {
      light: '#FDEDDD',
      main: '#190478',
      dark: '#190478',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      main: '#fff',
      // dark: '#ba000d',
      // contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Quicksand', // Use Quicksand font for this style
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  if (window.ethereum) {
    console.log('ethereum working')
    // Your code to interact with Ethereum
  } else {
    console.error('MetaMask (window.ethereum) is not available');
  }
  const [connected, setConnected] = useState(false);
  const [displayStates, setDisplayStates] = useState({
    displayV: true,
    displayM: true,
    displayC: true,
    displayS: true,
    displayF: true,
  });

  const [modalOpen, setModalOpen] = useState('settings');

  const contractAddress = '0x0cC63D06fB5882e8dE85FA259010414d0461B6f4'; // Address of the deployed contract

  useEffect(() => {
    const storedAccount = localStorage.getItem("selectedAccount");
    if (storedAccount) {
      setConnected(true);
    }
  }, []);

  async function approveViewingOfData() {
    try {
      // await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, ABI, provider.getSigner());
      const storedAccount = localStorage.getItem("selectedAccount");
      // Call the method
      const tx = await contract.approveViewingOfData(storedAccount);
      await tx.wait(); // Wait for the transaction to be mined
      console.log('Transaction successful:', tx.hash);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async function verifyMarriage() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const client = new FhenixClient({ provider });
      const storedAccount = localStorage.getItem("selectedAccount");
      // await window.ethereum.request({ method: 'eth_requestAccounts' });
      const contract = new ethers.Contract(contractAddress, ABI, provider.getSigner());

      // Call the method
      const permit = await getPermit(contractAddress, provider);
      client.storePermit(permit);
      const permission = client.extractPermitPermission(permit);
      let response0 = await contract.retrieveMedicalData(
        storedAccount,
        permission
      );
      const plaintext = client.unseal(contractAddress, response0);
      // Take this plain text and add details to webpage maybe store in session?
      console.log("plaintext return: " + plaintext.toString());
    } catch (error) {
      console.error('Error:', error);
    }
  }


  async function connect() {
    if (!connected) {
      if (typeof window.ethereum !== "undefined") {
        console.log("MetaMask exists");
        try {
          let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
          const selectedAccount = accounts[0];
          console.log(selectedAccount);
          console.log("Connected");
          localStorage.setItem("selectedAccount", selectedAccount);
          console.log("Account stored in local storage");
          setConnected(true);
        } catch (error) {
          console.error("Error connecting:", error);
        }
      } else {
        console.log("No MetaMask");
      }
    } else {
      try {
        // localStorage.removeItem("selectedAccount");
        // setConnected(false);
        // console.log('connected false', connected);
        // await window.ethereum.request({
        //   method: "wallet_requestPermissions",
        //   params: [
        //     {
        //       eth_accounts: {}
        //     }
        //   ]
        // });
      } catch (error) {
        console.error("Error disconnecting:", error);
      }
    }
  }

  const handleOpenModal = (modal) => {
    setModalOpen(modal);
  };

  const handleCloseModal = () => {
    setModalOpen('settings');
  };


  const handleChange = (event) => {
    const { name, checked } = event.target;
    setDisplayStates(prevStates => ({
      ...prevStates,
      [name]: checked,
    }));
  };

  const grandAccess = (event) => {

  };


  return (
    <div className="body quicksand-400">
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className="top-navigation">
              <Button><FavoriteBorderIcon fontSize="medium" color="primary" sx={{ mr: 0.5 }} />Swipe</Button>
              <Button><VerifiedUserIcon fontSize="medium" color="primary" sx={{ mr: 0.5 }} />My Verifications</Button>
              <Typography variant="h6" component="div" color="primary" sx={{ flexGrow: 1 }}>
                STinDer
              </Typography>
              <Button color="primary" onClick={connect}>
                {connected ? "Connected" : "Connect Wallet"}
              </Button>
            </Toolbar>
          </AppBar>
          <>
            <div className="flex-container">
              <div>
                <div className="profile-container">
                  <div className="profile-inner-border"></div>
                  <img src={profilePhoto} alt="Profile picture" className="profile-picture" />
                </div>
                <div className="flex items-center">
                  <h2 className="username">Ethan</h2>
                  {displayStates.displayV && <VerifiedIcon fontSize="large" className="badge-light" />}
                  {displayStates.displayM && <Diversity3Icon fontSize="large" className="badge-light" />}
                  {displayStates.displayC && <GavelIcon fontSize="large" className="badge-light" />}
                  {displayStates.displayS && <MedicalInformationIcon fontSize="large" className="badge-light" />}
                  {displayStates.displayF && <PregnantWomanIcon fontSize="large" className="badge-light" />}

                </div>
                {modalOpen == 'i' &&
                  <div className="settings-container">
                    <h3>Verify Your Identity</h3>
                    <Button onClick={() => approveViewingOfData()}>Grant Access</Button>
                    <Button onClick={handleCloseModal}>Close</Button>
                  </div>}
                {modalOpen == 'm' &&
                  <div className="settings-container">
                    <h3>Verify Your Marriage Status</h3>
                    <Button onClick={() => verifyMarriage()}>Grant Access</Button>
                    <Button onClick={handleCloseModal}>Close</Button>
                  </div>}
                {modalOpen == 'c' &&
                  <div className="settings-container">
                    <h3>Verify Your Criminal Records</h3>
                    <Button onClick={handleCloseModal}>Close</Button>
                  </div>}
                {modalOpen == 's' &&
                  <div className="settings-container">
                    <h3>Verify Your STD Status</h3>
                    <Button onClick={handleCloseModal}>Close</Button>
                  </div>}
                {modalOpen == 'f' &&
                  <div className="settings-container">
                    <h3>Verify Your Fertility Measure</h3>
                    <Button onClick={handleCloseModal}>Close</Button>
                  </div>}
              </div>
              {modalOpen=='settings' &&
                <div className="settings-container">
                  <h2>My Verifications</h2>
                  <Divider />
                  <br />
                  <div className="section">
                    <div className="pos-abs">
                      <VerifiedIcon fontSize="large" className="badge-dark" />
                      <Switch
                        className="switch"
                        size="large"
                        name="displayV"
                        checked={displayStates.displayV}
                        onChange={handleChange}
                      />
                    </div>
                    <h3 className="h3-category">Identity Verification </h3>
                    <p>Strengthen the trustworthiness of profiles through verified personal identification.</p>
                    <div className="verify-button">
                      <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => handleOpenModal('i')}>
                        Verify
                      </Button>
                    </div>
                  </div>
                  <Divider />
                  <div className="section">
                    <div className="pos-abs">
                      <Diversity3Icon fontSize="large" className="badge-dark" />
                      <Switch
                        className="switch"
                        size="large"
                        name="displayM"
                        checked={displayStates.displayM}
                        onChange={handleChange}
                      />
                    </div>
                    <h3 className="h3-category">Marriage Status</h3>
                    <p>Verify your marital status to enhance trust with potential matches.</p>
                    <div className="verify-button">
                      <Button variant="outlined" endIcon={<ArrowForwardIcon />} onClick={() => handleOpenModal('m')}>
                        Verified
                      </Button>
                    </div>
                  </div>
                  <Divider />
                  <div className="section">
                    <div className="pos-abs">
                      <GavelIcon fontSize="large" className="badge-dark" />
                      <Switch
                        className="switch"
                        size="large"
                        name="displayC"
                        checked={displayStates.displayC}
                        onChange={handleChange}
                      />
                    </div>
                    <h3 className="h3-category">Criminal Records</h3>
                    <p>Confirm a clean legal background to maintain a safe community.</p>
                    <div className="verify-button">
                      <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => handleOpenModal('c')}>
                        Verify
                      </Button>
                    </div>
                  </div>
                  <Divider />
                  <div className="section">
                    <div className="pos-abs">
                      <MedicalInformationIcon fontSize="large" className="badge-dark" />
                      <Switch
                        className="switch"
                        size="large"
                        name="displayS"
                        checked={displayStates.displayS}
                        onChange={handleChange}
                      />
                    </div>
                    <h3 className="h3-category">STD</h3>
                    <p>Share health status discreetly to ensure mutual safety and transparency.</p>
                    <div className="verify-button">
                      <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => handleOpenModal('s')}>
                        Verify
                      </Button>
                    </div>
                  </div>
                  <Divider />
                  <div className="section">
                    <div className="pos-abs">
                      <PregnantWomanIcon fontSize="large" className="badge-dark" />
                      <Switch
                        className="switch"
                        size="large"
                        name="displayF"
                        checked={displayStates.displayF}
                        onChange={handleChange}
                      />
                    </div>
                    <h3 className="h3-category">Fertility Measure</h3>
                    <p>Optional fertility information for those considering future family planning.</p>
                    <div className="verify-button">
                      <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={() => handleOpenModal('f')}>
                        Verify
                      </Button>
                    </div>
                  </div>
                  <Divider />
                  <br />
                </div>
              }
            </div>
          </>
        </Box>
        <div className="background"></div>
      </ThemeProvider>
    </div>
  );
}

export default App
