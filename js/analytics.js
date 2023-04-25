$(document).ready(function () {
  $("#start").click(function(){
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
      //play video
      navigator.mediaDevices.getUserMedia({
        video: {}, }).then((stream)=>{
          video.srcObject = stream;
        });

      let a=[0,0,0,0,0,0,0,];
      let f = 0,m = 0, h=0 , n=0, s=0;
      video.addEventListener("playing", () => {
        setInterval(async () => {
          document.getElementById("load").innerHTML = "Recognizing Faces...";
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions()
            .withAgeAndGender();
          let age = detections[0].age;
          let gender = detections[0].gender;
          let expressions = detections[0].expressions;
          let maxexp = Math.max(expressions.happy,expressions.neutral, expressions.sad)

          if(detections){
            analytics(age,gender,expressions,maxexp);
          }
        }, 300);
      });

        function analytics(age, gender,expressions,maxexp) {
          //To determine gender
          if(gender=="male")
          m++;
          else if(gender=="female")
          f++;
          //To determine the age groups
          if(age<=10)
            a[0]++;
          else if(age<=20)
            a[1]++;
          else if(age<=30)
            a[2]++;
          else if(age<=40)
            a[3]++;
          else if(age<=50)
            a[4]++;
          else if(age<=60)
            a[5]++;
          else if (age>=60)
            a[6]++;
          let genderTOT = m+f;
          let ageTOT = a[0] + a[1] + a[2] + a[3] + a[4] + a[5] + a[6];
          //To show analytics on screen
          $("#male").animate({
            width: (m/genderTOT)*100 + '%'
          })
          $("#female").animate({
            width: (f/genderTOT)*100 + '%'
          })
          $("#a0").animate({
            width: (a[0]/ageTOT)*100 + '%'
          })
          $("#a1").animate({
            width: (a[1]/ageTOT)*100 + '%'
          })
          $("#a2").animate({
            width: (a[2]/ageTOT)*100 + '%'
          })
          $("#a3").animate({
            width: (a[3]/ageTOT)*100 + '%'
          })
          $("#a4").animate({
            width: (a[4]/ageTOT)*100 + '%'
          })
          $("#a5").animate({
            width: (a[5]/ageTOT)*100 + '%'
          })
          $("#a6").animate({
            width: (a[6]/ageTOT)*100 + '%'
          })
          //to show expressions
          if(maxexp==expressions.happy)
            h++;
          else if(maxexp==expressions.sad)
            s++;
          else if(maxexp==expressions.neutral)
            n++;
          let expTOT = h+n+s;
          $("#happy").animate({
            width: (h/expTOT)*100 + '%'
          })
          $("#sad").animate({
            width: (s/expTOT)*100 + '%'
          })
          $("#neutral").animate({
            width: (n/expTOT)*100 + '%'
          })
          // consolelog("S:", s, " H:", h)          
          
      }

    }
    face()
  });
})