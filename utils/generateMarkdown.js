// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
