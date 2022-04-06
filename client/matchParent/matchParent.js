import date from 'date-and-time';

resetFilters = () => {
    Session.set("names", "");
    $("#sName + input").val("");
    Session.set("foun", "");
    $("#sFoun + input").val("");
}

Template.matchParent.onRendered(() => {
    Session.set("breadcrumbs", "Match Parent");
    resetFilters();

});

Template.matchParent.helpers({
    dateFound() {
        return date.format(new Date(this.createdOn), 'dddd, D MMMM YYYY');
    },
    recordsSearched() {
        return profilesdb.find({
            $or: [
                {
                    "fName": {
                        $regex: ".*" + Session.get("names") + ".*",
                        '$options': 'i'
                    }
                },
                {
                    "lName": {
                        $regex: ".*" + Session.get("names") + ".*",
                        '$options': 'i'
                    }
                },
                {
                    "oName": {
                        $regex: ".*" + Session.get("names") + ".*",
                        '$options': 'i'
                    }
                },
                // "gender": gender,
                // "age": age,
                // "dob": dob,
                // "natId": natId,
                // "addr": addr,
                // "height": height,
                // "eye": eye,
                // "hair": hair,
                // "skin": skin,
                // "ethin": ethin,
                {
                    "foun": {
                        $regex: ".*" + Session.get("foun") + ".*",
                        '$options': 'i'
                    }
                },
                // ,
                // "matched": false,
                // "agent": Meteor.userId(),
                // "agentName": Meteor.user().username,
                // { "createdOn": }
            ]
        });
    }
});

Template.matchParent.events({
    'click .js-resetFilters'() {
        resetFilters();
    },
    'input #sName + input'() {
        Session.set("names", $("#sName + input").val());

        console.log(Session.get("names"));
    },
    'input #sFoun + input'() {
        console.log($("#sFoun + input").val());
    }
});