## EmotionAd (RecogApp Remix)<br>

### Description<br>
**A browser-based application which uses face recognition to display ads in a smarter way.**<br>

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
The application predicts the age, gender, and emotion of the person facing the advertising board. Based on the predicted age, gender, and emotion, ads are displayed on screen. This will lead to better reach of the ad to the concerned person.<br>

### Techstack <br>
* Face-api.js (a javacript api which is used to detect faces, recognize expressions, age and gender)
* HTML
* CSS
* Javascript
* jQuery
 
 ### References <br>
 * Using face-api.js: https://medium.com/theleanprogrammer/face-api-js-a-way-to-build-face-recognition-system-in-browser-c1f4ac922657
