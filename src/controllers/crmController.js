import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

// Creating a model with Contact as the object name and ContactSchema
const Contact = mongoose.model('Contact', ContactSchema)

// Function to add a new contact in the database. 
export const AddNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        }

        // We will receive the contact information and any additional
        // information that has been saved in the db such as an id.
        res.json(contact);
    })
}

export const getContacts = (req, res) => {

    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }
        
        // We will receive the contact information and any additional
        // information that has been saved in the db such as an id.
        res.json(contact);
    })
}

export const getContactWithID = (req, res) => {

    // ensure that the 'contactID' used here is identical the path param defined in crmRoutes
    Contact.findById(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        }

        // We will receive the contact information and any additional
        // information that has been saved in the db such as an id.
        res.json(contact);
    })
}

export const updateContact = (req, res) => {

    // for findOneAndUpdate, we pass in the name of the field that is to be searched which id exactly as per
    // mongo schema - hence '_id'. We pass the req.body containing the new details to be added.
    // We also pass in a JSON to configure some options. Setting 'new: true' will return the updated object
    // whereas false will return the old object after updating. 'useFindAndModify: false' is to use updated functions instead
    // of old deprecated functions. Try removing that and you may get some deprecated warning/errors.
    Contact.findOneAndUpdate({_id: req.params.contactID}, req.body, { new: true, useFindAndModify: false}, (err, contact) => {
        if (err) {
            res.send(err);
        }

        // We will receive the contact information and any additional
        // information that has been saved in the db such as an id.
        res.json(contact);
    })
}

export const deleteContact = (req, res) => {

    // ensure that the 'contactID' used here is identical the path param defined in crmRoutes
    Contact.remove({_id: req.params.contactID}, (err, contact) => {
        if (err) {
            res.send(err);
        }

        // We will receive the contact information and any additional
        // information that has been saved in the db such as an id.
        res.json({message: 'successfully deleted contact'});
    })
}
