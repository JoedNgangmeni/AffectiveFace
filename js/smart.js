$(document).ready(function () {
  $("#start").click(function () {
    document.getElementById("load").innerHTML = "Setting up camera. This may take some time. Please wait."
    async function face() {

      const MODEL_URL = '/models'
      //load models
      await faceapi.loadSsdMobilenetv1Model(MODEL_URL)
      await faceapi.loadTinyFaceDetectorModel(MODEL_URL)
      await faceapi.loadFaceLandmarkModel(MODEL_URL)
      await faceapi.loadFaceRecognitionModel(MODEL_URL)
      await faceapi.loadFaceExpressionModel(MODEL_URL)
      await faceapi.loadAgeGenderModel(MODEL_URL)

      const video = document.getElementById("video");

      let exp = [0,0,0,0,0,0,0];
      let maxexp = 0;

      //play video
      navigator.mediaDevices.getUserMedia({
        video: {},
      }).then((stream) => {
        video.srcObject = stream;
      });

      video.addEventListener("playing", () => {
        setInterval(async () => {
          document.getElementById("load").innerHTML = "Detecting Age, Gender, and Emotion....";
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender();
          let age = detections[0].age;
          let gender = detections[0].gender;
          let expressions = detections[0].expressions;

          exp[0] = expressions.angry;
          exp[1] = expressions.disgusted;
          exp[2] = expressions.fearful;
          exp[3] = expressions.happy;
          exp[4] = expressions.neutral;
          exp[5] = expressions.sad;
          exp[6] = expressions.surprised;
          maxexp = Math.max(...exp);

          if (detections) {
            showage(age, gender, expressions);
            displayadd(age, gender, expressions);
          }
        }, 500);
      });
      //show age and gender
      function showage(age, gender, expressions) {
        document.getElementById("age").innerHTML = age
        document.getElementById("gender").innerHTML = gender
        document.getElementById("expressions").innerHTML = whichExp(exp,maxexp)
      }
      //display ads
      function displayadd(age, gender, expressions) {
        if (gender == "male"){
          if (age >= 10){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M10A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M10D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M10F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M10h.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M10N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M10S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M10Su.png";
          }
          if (age > 10 && age <= 20){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M1020A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M1020D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M1020F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M1020H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M1020N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M1020S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M1020Su.png";
          }
          if (age > 20 && age <= 30){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M2030A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M2030D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M2030F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M2030H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M2030N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M2030S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M2030Su.png";
          }
          if (age > 30 && age <= 40){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M3040A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M3040D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M3040F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M3040H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M3040N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M3040S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M3040Su.png";
          }
          if (age > 40 && age <= 50){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M4050A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M4050D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M4050F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M4050H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M4050N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M4050S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M4050Su.png";
          }
          if (age > 50 && age <= 60){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M5060A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M5060D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M5060F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M5060H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M5060N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M5060S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M5060Su.png";
          }
          if (age > 60 ){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M60A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M60D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M60F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M60H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M60N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M60S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M60Su.png";
          }
        else if (gender == "female"){
          if (age >= 10){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M10A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M10D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M10F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M10h.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M10N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M10S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M10Su.png";
          }
          if (age > 10 && age <= 20){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M1020A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M1020D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M1020F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M1020H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M1020N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M1020S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M1020Su.png";
          }
          if (age > 20 && age <= 30){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M2030A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M2030D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M2030F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M2030H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M2030N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M2030S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M2030Su.png";
          }
          if (age > 30 && age <= 40){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M3040A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M3040D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M3040F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M3040H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M3040N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M3040S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M3040Su.png";
          }
          if (age > 40 && age <= 50){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M4050A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M4050D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M4050F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M4050H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M4050N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M4050S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M4050Su.png";
          }
          if (age > 50 && age <= 60){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M5060A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M5060D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M5060F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M5060H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M5060N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M5060S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M5060Su.png";
          }
          if (age > 60 ){
            if(whichExp(exp,maxexp) == "angry")
              document.getElementById("display").src = "../images/M60A.png";
            else if(whichExp(exp,maxexp) == "disgusted")
              document.getElementById("display").src = "../images/M60D.png";
            else if(whichExp(exp,maxexp) == "fearful")
              document.getElementById("display").src = "../images/M60F.png";
            else if(whichExp(exp,maxexp) == "happy")
              document.getElementById("display").src = "../images/M60H.png";
            else if(whichExp(exp,maxexp) == "neutral")
              document.getElementById("display").src = "../images/M60N.png";
            else if(whichExp(exp,maxexp) == "sad")
              document.getElementById("display").src = "../images/M60S.png";
            else if(whichExp(exp,maxexp) == "surprised")
              document.getElementById("display").src = "../images/M60Su.png";
          }

        }
        }
      

    }
      function whichExp(exp, maxexp) {
        let expressions = ["angry", "disgusted", "fearful", "happy", "neutral", "sad", "surprised"];
        let maxIndex = exp.indexOf(maxexp);
        return expressions[maxIndex];
      }
      

    }
    face()
  });
})
