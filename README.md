# Trackit : activity-tracker-app
<!-- ABOUT THE PROJECT -->
## About Trackit

A web app to kepp track of hours spent on various activities by employees using firebase. I am starting this as an assignment to learn and explore as of now. Looking forward building it together with you in near future.

### Features
* User Registration and Login using Google Authentication with Firebase.
* Create a new task with task title, description, and time allotted for the task.
* List of tasks created by user. 
* Select a task to start working on it. (active task)
* Lunch hours and break during the shift.
* A Dashboard with graphical visualisation showing weekly statistics of time spent on tasks.
* Fairly mobile friendly.

### Design Decisions
* User can fill the shift start and shift end timings only once after registration. No updations allowed!
* Any active tasks ends as sooon as shift ends.
* Combined tasks time cannot be greater than the shift time (i.e. 8hrs - 1hr(lunch + 1break) = 7hrs).
* The lunch break lasts for 45 minutes only.
* Only upto two breaks are allowed during the day. A break lasts for 20 minutes only.
* There is no option to pause the task timer except the breaks mentioned above.
* When the task is switched, the old task gets completed and the new task becomes the active task.

Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have have contributed to expanding this template!

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

Here are list of frameworks/liberary/technology to know what's empowering Trackit.
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
* [Nodejs] (https://nodejs.org/en/)
* [Firebase] (https://firebase.google.com/)