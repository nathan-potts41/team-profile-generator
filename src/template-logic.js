//this is where you will render the tempalte literal
const path = require('path');
const fs = require('fs');

const templatesDir = path.resolve(__dirname, '../temp');

// this was suggested by the TA, not claiming as my own work...
const render = employees => {
    const html = [];

    html.push(
        employees
            .filter(employee => employee.getRole() === 'Manager')
            .map(manager => renderManager(manager))
    );
    html.push(
        employees
            .filter(employee => employee.getRole() === 'Engineer')
            .map(engineer => renderEngineer(engineer))
    );
    html.push(
        employees
            .filter(employee => employee.getRole() === 'Intern')
            .map(intern => renderIntern(intern))
    );

    return renderMain(html.join(''));
};

const renderManager = manager => {
    let template = manager.generateManager();
    return template;
};

const renderEngineer = engineer => {
    let template = engineer.generateEngineer();
    return template;
};

const renderIntern = intern => {
    let template = intern.generateIntern();
    return template;
};

const renderMain = html => {
    const template = fs.readFileSync(
        path.resolve(templatesDir, 'index.html'),
        'utf8'
    );
    return replacePlaceholders(template, 'team', html);
};

const replacePlaceholders = (template, placeholder, value) => {
    const pattern = new RegExp(`{{ ${placeholder} }}`, 'gm');
    return template.replace(pattern, value);
};

module.exports = render;



// const render = employees => {
//     return `<!DOCTYPE html>
//     <html lang="en">
    
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
//         <title>Team Profile</title>
//     </head>
    
//     <body>
    
//         <nav class="nav-wrapper">
//           <a class="brand-logo center">Team Profile</a> 
//         </nav>
    
//         <div class="row">
//         ${teamMembers.generateManager()}
//         ${teamMembers.generateEngineer()}
//         ${teamMembers.generateIntern()}
    
//         </div>
    
//     </body>
    
    
//     </html>`
// }


// module.exports = render