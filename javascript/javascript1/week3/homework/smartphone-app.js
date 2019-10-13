const activities = [];
const dateObj = new Date();
const dateObjStr = dateObj.toLocaleDateString();
const limit = 1800000;


function addActivity(date, activity, duration) {
    activities.push({date, activity, duration});    
}

function showStatus(timeLimit) {

}
console.log(dateObjStr);


// marco solution:
console.log('smart phone');

const activities = [];

function addActivity(date, activity, duration) {
    if (typeof date !== 'string') {
        console.error('date has to be a string');
    }
    
    if (typeof activity !== 'string') {
        console.error('activity has to be a string');
    }
    
    if (typeof duration !== 'number') {
        console.error('duration has to be a number');
    }

    activities.push({date, activity, duration});
}

function showStatus(activities) {
    const usageLimit = 60;

    let numberOfActivities = activities.length;
    if (numberOfActivities === 0) {
        console.log("Add some activities before calling showStatus");
    } else {
        let totalTime = 0;
    
        for (let i = 0; i < activities.length; i++) {
            totalTime += activities[i].duration;
        }

        if (totalTime > usageLimit) {
            console.log("You have reached your limit, no more smartphoning for you!");
        } else {
            console.log("You have added " + numberOfActivities + " activities. They amount to " + totalTime + " min. of usage.");
        }
    }
}

addActivity('23/7-18', 'Youtube', 30);
addActivity('23/7-18', 'Facebook', 30);
addActivity('23/7-18', 'Instagram', 20);
showStatus(activities);