Template.adminMan.helpers({
    allUsers() {
        return Meteor.users.find();
    }
});