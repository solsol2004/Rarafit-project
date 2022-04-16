const db = firebase.firestore();
const storage = firebase.storage();

var singleQuestion = new URLSearchParams(window.location.search);

db.collection("questions")
  .doc(singleQuestion.get("id"))
  .get()
  .then((result) => {
    console.log(result.data());
    $("#question-content").html(result.data().문의내용);
    $("#question-date").html(result.data().날짜);
    $("#question-store").html(result.data().지점명);
    $("#question-name").html(result.data().성함);
    $("#question-contact").html(result.data().연락처);
  });

$("#erase-ticket").click(function () {
  db.collection("questions")
    .doc(singleQuestion.get("id"))
    .update({
      완료: "https://firebasestorage.googleapis.com/v0/b/rarafit-f3ec8.appspot.com/o/check.png?alt=media&token=09df715f-9782-40e0-9a3a-00e216898a4a",
    })
    .then((result) => {
      window.location.href = "ticket-list.html";
    });
});
