Template.viewRecord.helpers({
    records() {
        return profilesdb.find();
    }
});

Template.viewRecord.events({
    'click .js-viewMore'(event, instance) {
        $("#childName").html(this.lName + ", " + this.fName);
        $("#lname").html(this.dob);
        $("#viewModal").modal('show');
    }
});