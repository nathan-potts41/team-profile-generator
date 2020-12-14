generatePageLayout = function () {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <title>Team Profile</title>
    </head>
    
    <body>
    
        <nav class="nav-wrapper">
          <a class="brand-logo center">Team Profile</a> 
        </nav>
    
        <div class="row">
        ${manager.generateTemplateLiteral()}
        ${engineer.generateTemplateLiteral()}
        ${intern.generateTemplateLiteral()}
    
        </div>
    
    </body>
    
    
    </html>`
}


module.exports = 'template-logic.js'