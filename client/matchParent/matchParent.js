import date from 'date-and-time';

resetFilters = () => {
    Session.set("names", "");
    $("#sName + input").val("");
    Session.set("foun", "");
    $("#sFoun + input").val("");
    Session.set("age", "");
    $("#sage + input").val("");
    Session.set("gender", "");
    $("#sgender + input").val("");
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
        console.log(Session.get("names"));
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
                // {
                //     "age": {
                //         $regex: ".*" + Session.get("age") + ".*",
                //         '$options': 'i'
                //     }
                // },
                // {
                //     "gender": {
                //         $regex: ".*" + Session.get("gender") + ".*",
                //         '$options': 'i'
                //     }
                // },
                // "dob": dob,
                // "natId": natId,
                // "addr": addr,
                // "height": height,
                // "eye": eye,
                // "hair": hair,
                // "skin": skin,
                // "ethin": ethin,
                // {
                //     "foun": {
                //         $regex: ".*" + Session.get("foun") + ".*",
                //         '$options': 'i'
                //     }
                // },
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
    },
    'input #sFoun + input'() {
        Session.set("foun", $("#sFoun + input").val());
    },
    'input #sAge + input'() {
        Session.set("age", $("#sAge + input").val());
    }
    ,
    'input #sGender + input'() {
        Session.set("gender", $("#sGender + input").val());
    }
});