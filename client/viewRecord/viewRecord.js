import date from 'date-and-time';

Template.viewRecord.onRendered(() => Session.set("breadcrumbs", "View Record"));
Template.viewRecord.helpers({
    records() {
        return profilesdb.find();
    },
    isGirl() {
        let gend = false;
        if (profilesdb.findOne({ _id: this._id }).gender == "Female")
            gend = true;
        return gend;
    }
});

Template.viewRecord.events({
    'click .js-viewMore'(event, instance) {
        $("#childName").html(this.lName + ", " + this.fName);
        $("#dateFound").html(date.format(new Date(this.createdOn), 'dddd, D MMMM YYYY'));

        $("#lname").html("gender: " + this.gender + "<br>" + "age: " + this.age + "<br>" + "dob: " + this.dob + "<br>" + "natId: " + this.natId + "<br>" + "addr: " + this.addr + "<br>" + "height: " + this.height + "<br>" + "eye: " + this.eye + "<br>" + "hair: " + this.hair + "<br>" + "skin: " + this.skin + "<br>" + "ethin: " + this.ethin);
        $("#viewModal").modal('show');
    }
});