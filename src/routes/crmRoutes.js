// All routes are defined here

import { AddNewContact, 
         getContacts, 
         getContactWithID,
         updateContact,
         deleteContact 
} from '../controllers/crmController';

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
        }, getContacts)

        // Adding Post endpoint to create a new contact
        .post(AddNewContact)

    app.route('/contact/:contactID')
        // Adding GET endpoint to get a new contact
        .get(getContactWithID)

        // Updating a specific contact
        .put(updateContact)

        // Deleting a specific contact
        .delete(deleteContact)

    
}

export default routes;