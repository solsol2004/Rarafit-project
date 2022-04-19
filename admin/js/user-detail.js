const db = firebase.firestore();
const storage = firebase.storage();

var singleUser = new URLSearchParams(window.location.search);

db.collection("instructors")
  .doc(singleUser.get("id"))
  .get()
  .then((result) => {
    console.log(result.data());
    $("#current-schedule-time").html(result.data().날짜);
    $("#current-schedule-name").html(result.data().수업명);
    $("#current-schedule-instructor").html(result.data().강사명);
  });

$("#edit-instructor-list").click(function () {
  db.collection("instructors")
    .doc(singleUser.get("id"))
    .update({
      이름: $("#name-renew").val(),
      지점명: $("#store-renew").val(),
      비밀번호: $("#pw-renew").val(),
    })
    .then((result) => {
      window.location.href = "user-list.html";
      $("#editing-instructor").addClass("hidden");
    });
});

$("#edit-user").click(function () {
  $("#editing-instructor").removeClass("hidden");
});

$("#remove-user").click(function () {
  db.collection("instructors")
    .doc(singleUser.get("id"))
    .delete()
    .then((result) => {
      window.location.href = "user-list.html";
    });
});
