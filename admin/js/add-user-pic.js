const db = firebase.firestore();
const storage = firebase.storage();

db.collection("instructor-info")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const insturctorInfo = `
      <div class="item">
      <div class="col-lg-3">
          <div class="team marB30">
              <figure class="team-img">
                  <img src="${doc.data().이미지}">
              </figure>
              <div class="trainer padT20 padB20">
                  <h4>${doc.data().이름}</h4>
                  <h5>${doc.data().레벨}</h5>
              </div>
          </div>
      </div>
  </div>`;

      $(".instructor-card").prepend(insturctorInfo);
    });
  });

$(".add-instructor-button").click(function () {

    var instructorFile = document.querySelector('.instructor-picture').files[0];
    var storageReferance = storage.ref();
    var saveInstructorPath = storageReferance.child('intructor/' + instructorFile.name);
    var 업로드 = saveInstructorPath.put(instructorFile)

    업로드.on( 'state_changed', 
    // 변화시 동작하는 함수 
    null, 
    //에러시 동작하는 함수
    (error) => {
      console.error('실패사유는', error);
    }, 
    // 성공시 동작하는 함수
    () => {
      업로드.snapshot.ref.getDownloadURL().then((url) => {
        console.log('업로드된 경로는', url);

        var saveInstructor = {
            레벨: $(".level-toggle span:first-child").text(),
            이름: $(".instructor-name").val(),
            이미지: url
          };
        
          if (
            $(".level-toggle span:first-child").text() == "레벨" ||
            $(".instructor-name").val() == "" 
          ) {
            alert("필드를 모두 입력해주세요!");
          } else {
            db.collection("instructor-info")
              .add(saveInstructor)
              .then((result) => {
                window.location.href = "add-user-pic.html";
              })
              .catch((error) => {
                console.log(hi);
              });
          }
      });
    }
);
});

$(document).on("click", ".remove-this-row", function () {
  db.collection("instructor-info")
    .doc($(this).children(".uid").text())
    .delete()
    .then((result) => {
      window.location.href = "add-user-pic.html";
    });
});
