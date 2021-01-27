# Trackit : activity-tracker-app
<!-- ABOUT THE PROJECT -->
## About Trackit
A web app to keep the track of hours spent on various activities by employees using real-time databse. I am starting this as an assignment to learn and explore as of now. Looking forward building it together with you in near future.

### Features
* User Registration and Login using Google Authentication with Firebase.
* Create a new task with task title, and description of the task.
* List of tasks created by user. 
* Select a task to start working on it. (active task)
* Lunch hours and break during the shift.
* A Dashboard with graphical visualisation showing weekly statistics of time spent on tasks.
* Fairly mobile friendly.

### Design Decisions
* User can fill the shift start and shift end timings only once after registration.
* The lunch break lasts for 45 minutes only.
* A break lasts for 20 minutes only.
* There is no option to pause the task timer except the breaks mentioned above.
* When the task is switched, the old task gets completed and the new task becomes the active task.
* Any active tasks ends as soon as the shift ends.

### Built With
Here are list of frameworks/liberary/technology to know what's empowering Trackit.
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Nodejs](https://nodejs.org/en/)
* [Firebase](https://firebase.google.com/)