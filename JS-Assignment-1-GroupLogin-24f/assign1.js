//assigning variables and values. For eg we have chosen group 5 as the correct group
var id = 5;
var uname; //to accept data from user that stores their name and checks the conditions
var uid; // to accept the group number from user to check the condition
//conditional statements

uid = prompt("What is your Group Number: ");
if (!isNaN(uid) && id === parseInt(uid)) { //checks whether the group number enters is a number and a integer. Without it it would accept the binary code for 5 too)
    console.log(uid); //stores group number entered by user in console
    uname = prompt("What is your first name"); //if group number matches it asks user their name
    console.log(uname); //stores the name entered by user in console
    switch (uname.toLowerCase()) { //convert the username into all lowercase and then checks with the 4 cases
        case "sarrah":
            alert("Welome back Sarrah Gandhi");
            break;

        case "dhruv":
            alert("Welome back Dhruv Shah");
            break;

        case "himani":
            alert("Welome back Himani Bansal");
            break;

        case "isha":
            alert("Welome back Isha Shah");
            break;

        default:
            alert("Access Denied. Not a team member"); //if name doesnt match with any of the cases it shows the default text and exits the js
            break;
    }
}
else if (uid == "" || uid == null) { //if the data entered is either empty or null is shows a error message and exits
    alert("Access Denied. No data entered");
}
else {
    alert("Access Denied. Wrong Group"); //if the data is a number but doesnt match the group number it would alert the user about the wrong group
}

