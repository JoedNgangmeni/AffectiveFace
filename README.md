## RecogApp<br>

### Description<br>
**A browser-based application which uses face recognition to display ads in a smarter way, gain customer analytics and to help the blind to understand the emotions of the person near them.**<br>

### Getting Started<br>
Link to the web-app: https://recogapp.herokuapp.com/<br>
or<br>
Follow the below instructions to run the app on local host<br>
1. Clone the git repository https://github.com/sowmya10-07/RecogApp.git<br>
2. Have **Node.js** installed in your system<br>
3. In CMD, run the command **npm install http-server -g**<br>
4. Navigate to the specific path of the cloned file in CMD and run the command **http-server**
5. Go to your browser and type **localhost:8080**. Application should run there.

### App Architecture<br>![app_architecture](https://user-images.githubusercontent.com/105663569/170858743-092f393b-4996-48f5-a463-91c0ad40df49.png)
**Features**<br>
The app starts with the home page which links to<br>
<B>1. Smarter Advertising </B><br>
The app detects the faces near the digital advertising board, recognizes their age and gender. This information is used to display ads accordingly on the digital advertising board. In this way people won't be bombarded with irrelavent ads and will lead to better reach of the ad to the concerned person.<br>
<B>2. Customer Analytics</B><br>
The application detects the age, gender, facial expressions of the customers and uses this data to display the analytics.  These analytics help the owners of the store to get an idea of their customers and help them to improve their marketing.<br>
<B>3. Help the Blind</B><br>
The application helps the blind to understand the emotions of the person near them.The application predicts the expressions of the person facing the camera. These expressions are read alound so that the blind person can better understand the situations.<br><br>

### Techstack <br>
* Face-api.js (a javacript api which is used to detect faces, recognize expressions, age and gender)
* HTML
* CSS
* Javascript
* jQuery
 
 ### References <br>
 * Using face-api.js: https://medium.com/theleanprogrammer/face-api-js-a-way-to-build-face-recognition-system-in-browser-c1f4ac922657
