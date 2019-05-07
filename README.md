# Device-Inventory-Management-System
To download this project:
follow this url:https://github.com/Sanath982/Device-Inventory-Management-System,u can find 'clone or download' green coloured button,by clicking on that button we can see download zip option ,u can download whole folder and can run in your system.

to run project:-
To run this project,we have to create two folders for front end and back end ,install node modules for both front end and back end using command 'npm install'.we have to go to src folder and run command 'node app.js' and in front end ,run command 'ng serve --open' it will directly redirects to browser and loads whole project.

Project function:-
In this project,I have used html5,css3,bootstrap,angular 7,nodejs,expressjs and mongoDB to develop this application.For front end ,I have used 6 components like admin,login,employee,home,d-display and about-us.

By default,it loads to the home component at port 4200,In this i have two fixed sections ,one is navbar containing one icon and about-us, that icons redirects to home component and about-us redirects to about-us component, second one is header section.In home component,we have two sections one is for admin and another is for employee.Admin button redirects to login component and employee button redirects to employee component.

In employee component,i provided three options to searchm details like system id,system name and user name.For each option ,i have provided different text field and submit button,if the input given exists in database then corresponding system id,system name and user name will be displayed else it will give you error message. to

In Login component,we have to provide username(i.e admin) and password(i.e admin@123),other than any of this will throw you an error saying invalid credentails and page gets reloaded.Once your credentials are correct ,it will redirect to admin component.

In Admin component, i provide 5 tasks for admin to access the data like create new system,deallocate systen,update system details,delete system and display all systems.'Create new system' will provide two fields system id and system name where system id is number and on clicking on submit button,new record will be created in the database.'deallocate system' will take systerm id and deallocates user for specified system id.'update system details' will take system id and user name as input,id system is free it will allocate with user otherwise it updates older user name with new user name.'delete system' will take system id as input and delete record with that system id in the database.'display all systems' will redirects to d-display component.

In d-display component ,it displays all systems present in the database and back button redirects to admin component.
