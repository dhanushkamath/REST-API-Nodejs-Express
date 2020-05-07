// All routes are defined here


const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Express also passes next (by default) that can be used
            // for chaining middlewares. We can omit next if we don't want to
            // use middlewares.

            // Middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            
            // Middleware complete - now pass it to the next function.
            next();
        }, (req,res, next) => {
            res.send(`Get request successful!`)
        })


        .post((req, res) => {
            res.send('POST request successful!')
        })

    app.route('/contact/:contactID')
        .put((req,res) => {
            res.send('PUT request successful!')
        })
        .delete((req, res) => {
            res.send('DELETE request successful!')
        })

    
}

export default routes;