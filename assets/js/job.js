const db = firebase.firestore();
const storage = firebase.storage();


$("#send-application").click(function () {
  $("section").css("opacity", "0.3");
  $(".job-spinner").show();
  var file = document.querySelector('#candidate-pic').files[0];
  var storageRef = storage.ref();
  var 저장할경로 = storageRef.child('resume/' + file.name);
  var 업로드작업 = 저장할경로.put(file);

  업로드작업.on( 'state_changed', 
  // 변화시 동작하는 함수 
  null, 
  //에러시 동작하는 함수
  (error) => {
    console.error('실패사유는', error);
  }, 
  // 성공시 동작하는 함수
  () => {
    업로드작업.snapshot.ref.getDownloadURL().then((url) => {
      console.log('업로드된 경로는', url);
      
      var application = {
        성함: $("#candidate-name").val(),
        생년월일: $("#candidate-birthday").val(),
        졸업학교:  $("#candidate-school").val(),
        희망부문: $("#candidate-toggle span:first-child").text(),
        연락처:  $("#candidate-number").val(),
        자기소개: $("#candidate-detail").val(),
        날짜: new Date(+new Date() + 3240 * 10000)
          .toISOString()
          .replace("T", " ")
          .replace(/\..*/, ""),
        이미지: url
         };
    
      if (
        $("#candidate-name").val() == "" ||
        $("#candidate-birthday").val() == "" ||
        $("#candidate-school").val() == "" ||
        $(".candidate-toggle-text").text() == "희망부문" ||
        $("#candidate-number").val() == "" ||
        $("#candidate-detail").val() == ""
      ) {
        $(".alert").alert();
        $(".alert").removeClass("hidden");
      } else {
        db.collection("job")
          .add(application)
          .then((result) => {
            window.location.href = "job.html";
          })
          .catch((error) => {
            console.log(hi);
          });
        }
    });
  }
);
});