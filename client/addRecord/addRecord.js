import { Datepicker } from "vanillajs-datepicker";
import 'vanillajs-datepicker/dist/css/datepicker-bs5.css';

Template.addRecord.onRendered(() => {
    const getDatePickerTitle = elem => {
        // From the label or the aria-label
        const label = elem.nextElementSibling;
        let titleText = '';
        if (label && label.tagName === 'LABEL') {
            titleText = label.textContent;
        } else {
            titleText = elem.getAttribute('aria-label') || '';
        }
        return titleText;
    }
    const elems = document.querySelectorAll('.datepicker_input');
    for (const elem of elems) {
        const datepicker = new Datepicker(elem, {
            'format': 'dd/mm/yyyy', // UK format
            title: getDatePickerTitle(elem)
        });
    }
    Session.set("height", 60);
    Session.set("breadcrumbs", "Add Record");
});

Template.addRecord.helpers({
    rangeCM() {
        return Session.get("height") + " cm";
    },
    rangeIN() {
        let inches = Session.get("height") / 2.54;
        inches = Math.round(inches);
        let feet = (inches - (inches % 12)) / 12;
        inches = inches - (feet * 12);
        let footHeight = 0;
        if (inches == 0)
            footHeight = feet + " ft";
        else
            footHeight = feet + " ft " + inches + " in";

        return footHeight;
    }
});

Template.addRecord.events({
    'click .js-print'() {
        window.print();
    },
    'change .js-heightSlide'() {
        Session.set("height", $("#heightRange").val());
    },
    'click .js-addRecord'() {
        let fName = $("#fName").val();
        let lName = $("#lName").val();
        let oName = $("#oName").val();
        let gender = $("#gender").val();
        let age = $("#age").val();
        let dob = $("#dob").val();
        let natId = $("#natId").val();
        let addr = $("#addr").val();
        let height = $("#heightRange").val();
        let eye = $("#eye").val();
        let hair = $("#hair").val();
        let skin = $("#skin").val();
        let ethin = $("#ethin").val();
        let foun = $("#foun").val();

        //validate form
        if (isAddRecordValid(fName, lName, hair, skin, ethin, foun)) {
            $('#saveDialogModal').modal('show');
            // Save data into collection
            profilesdb.insert({
                "fName": fName,
                "lName": lName,
                "oName": oName,
                "gender": gender,
                "age": age,
                "dob": dob,
                "natId": natId,
                "addr": addr,
                "height": height,
                "eye": eye,
                "hair": hair,
                "skin": skin,
                "ethin": ethin,
                "foun": foun,
                "matched": false,
                "agent": Meteor.userId(),
                "agentName": Meteor.user().username,
                "createdOn": new Date().getTime()
            });
            // Clear form
            $("#fName").val("");
            $("#lName").val("");
            $("#oName").val("");
            $("#age").val("");
            $("#dob").val("");
            $("#natId").val("");
            $("#addr").val("");
            $("#hair").val("");
            $("#skin").val("");
            $("#ethin").val("");
            $("#foun").val("");
            Session.set("height", 60);
            $("#heightRange").val(60);
            $("#gender").val("Female");
            $("#eye").val("Brown");
        }
    }
});

// Validate form data
isAddRecordValid = (fName, lName, hair, skin, ethin, foun) => {
    let isValid = true;
    $("#fName").removeClass("invalidWarn");
    $("#names").addClass("d-none");
    $("#lName").removeClass("invalidWarn");
    $("#age").removeClass("invalidWarn");
    $("#ages").addClass("d-none");
    $("#gender").removeClass("invalidWarn");
    $("#gen").addClass("d-none");
    $("#height").removeClass("invalidWarn");
    $("#heights").addClass("d-none");
    $("#hair").removeClass("invalidWarn");
    $("#hairs").addClass("d-none");
    $("#skin").removeClass("invalidWarn");
    $("#skins").addClass("d-none");
    $("#ethin").removeClass("invalidWarn");
    $("#ethins").addClass("d-none");
    $("#foun").removeClass("invalidWarn");
    $("#founs").addClass("d-none");
    if (!fName && !lName) {
        if (!fName) {
            $("#fName").addClass("invalidWarn");
            $("#names").removeClass("d-none");
        }
        if (!lName) {
            $("#lName").addClass("invalidWarn");
            $("#names").removeClass("d-none");
        }
        isValid = false;
    }
    if (!hair) {
        $("#hair").addClass("invalidWarn");
        $("#hairs").removeClass("d-none");
        isValid = false;
    }
    if (!skin) {
        $("#skin").addClass("invalidWarn");
        $("#skins").removeClass("d-none");
        isValid = false;
    }
    if (!ethin) {
        $("#ethin").addClass("invalidWarn");
        $("#ethins").removeClass("d-none");
        isValid = false;
    }
    if (!foun) {
        $("#foun").addClass("invalidWarn");
        $("#founs").removeClass("d-none");
        isValid = false;
    }
    return isValid;
}
