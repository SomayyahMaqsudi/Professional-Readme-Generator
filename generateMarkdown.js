// function renderLicenseBadge(license) {
//   if (license === "MIT") {
//     return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//   } else if (license === "Apache 2.0") {
//     return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//   } else if (license === "GPLv3") {
//     return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//   } else if (license === "BSD 3-Clause") {
//     return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
//   } else if (license === "Creative Commons") {
//     return "[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)";
//   } else {
//     return "";
//   }
// }



// function renderLicenseLink(license) {
//   if (license === "MIT") {
//     return "https://opensource.org/licenses/MIT";
//   } else if (license === "Apache 2.0") {
//     return "https://opensource.org/licenses/Apache-2.0";
//   } else if (license === "GPLv3") {
//     return "https://www.gnu.org/licenses/gpl-3.0";
//   } else if (license === "BSD 3-Clause") {
//     return "https://opensource.org/licenses/BSD-3-Clause";
//   } else if (license === "Creative Commons") {
//     return "http://creativecommons.org/licenses/by/4.0/";
//   } else {
//     return "";
//   }
// }


// function renderLicenseSection(license) {
//   if (license === "MIT") {
//     return `
// ## License

// This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
// `;
//   } else if (license === "Apache 2.0") {
//     return `
// ## License

// This project is licensed under the Apache License 2.0 - see the [LICENSE.md](LICENSE.md) file for details.
// `;
//   } else if (license === "GPLv3") {
//     return `
// ## License

// This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.
// `;
//   } else if (license === "BSD 3-Clause") {
//     return `
// ## License

// This project is licensed under the BSD 3-Clause License - see the [LICENSE.md](LICENSE.md) file for details.
// `;
//   } else if (license === "Creative Commons") {
//     return `
// ## License

// This project is licensed under the Creative Commons Attribution 4.0 International Public License - see the [LICENSE.md](LICENSE.md) file for details.
// `;
//   } else {
//     return "";
//   }
// }


// function generateMarkdown(projectName, projectDescription, installationInstructions, usageInstructions, license, contributors) {
//   return `
// # ${projectName}

// ${projectDescription}

// ## Table of Contents

// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributors](#contributors)

// ## Installation

// ${installationInstructions}

// ## Usage

// ${usageInstructions}

// ## License

// ${getLicenseSection(license)}

// ${getLicenseBadge(license)}

// ## Contributors

// ${contributors}
// `;
// }

// module.exports = generateMarkdown;
