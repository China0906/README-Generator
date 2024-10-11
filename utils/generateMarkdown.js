// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license== 'None') {return ''}
  const badges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'APACHE 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
      'GPL 3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'BSD 3': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
  }
  
  return badges[license] || '';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'APACHE 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
      'GPL 3.0': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'BSD 3': '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)',
  }
  
  return links[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

This project is licensed under the ${license} license. For more information, visit [${license}](${renderLicenseLink(license)}).
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## TITLE
  ${data.title}

  ## DESCRIPTION
  ${data.description}

  ## INSTRUCTIONS
  ${data.instructions}

  ## USAGE
  ${data.usage}

  ## Guidelines
  ${data.guidelines}

  ## TEST
  ${data.test}

  ## LICENSE
  ${data.license

  }

`;
}

module.exports = generateMarkdown;


//generate license fromt he selected license
//table of contents
