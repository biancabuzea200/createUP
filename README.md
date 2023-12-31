<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- ABOUT THE PROJECT -->

# Create a Universal Profile Programmatically and Read Profile Data

## About The Project

This repo aims to get you up to speed with creating a Universal Profile on the LUKSO blockchain programmatically and reading data from it.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

### Built With

- [Node.js](https://nodejs.org/en)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

These examples are very straightforward and all can be run simply with node. We do need to do some minimal setup first though.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- nvm

  We will be changing our node version for some examples so we will be using nvm. If you do not have it set up take a look [here](https://github.com/nvm-sh/nvm#installing-and-updating). This will also ensure you have node.js and npm available.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/biancabuzea200/createUP
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. If you have an UP address or Wallet for LUKSO testnet already you can enter them in the `.env`

   ```md
   MY_PRIVATE_KEY=
   MY_PUPLIC_KEY=
   MY_UP_ADDRESS=
   ```

4. Install the libraries
   ```sh
   npm install @lukso/lsp-factory.js
   npm install web3
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

This repo goes over some simple examples that you can build on.

For more examples, please refer to the [Documentation](https://docs.lukso.tech/)

### Basic Usage

1. Navigate to the directory you are interested in, both the ethers and web3.js examples are equivalent.
2. Follow any additional instructions left as comments in each file. The normal order to follow is `generateKeys.js` -> `deployUP.js` -> `readProfileData.js` since this order generates all values needed for subsequent examples.
3. Each example can be run simply with
   ```sh
   node [filepath]/filename.js
   ```
4. Make sure to add any newly generated variables to the `.env` before proceeding to the next example.

   ```md
   MY_PRIVATE_KEY=
   MY_PUPLIC_KEY=
   MY_UP_ADDRESS=
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Bianca Buzea - [@buzea200](https://twitter.com/buzea200)

Project Link: [https://github.com/biancabuzea200/createUP](https://github.com/biancabuzea200/createUP)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
