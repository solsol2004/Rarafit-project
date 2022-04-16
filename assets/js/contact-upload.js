const db = firebase.firestore();

$("#send-question").click(function () {
  var 저장할거 = {
    성함: $("#name").val(),
    연락처: $("#contact").val(),
    지점명: $(".btn span:first-child").text(),
    문의내용: $("#question-detail").val(),
    날짜: new Date(+new Date() + 3240 * 10000)
      .toISOString()
      .replace("T", " ")
      .replace(/\..*/, ""),
    완료: "https://firebasestorage.googleapis.com/v0/b/rarafit-f3ec8.appspot.com/o/no-check.png?alt=media&token=0b7f0e36-e5de-48df-8a8b-ca2485881d53",
  };

  if (
    $("#name").val() == "" ||
    $("#contact").val() == "" ||
    $(".btn span:first-child").text() == "지점명" ||
    $("#question-detail").val() == ""
  ) {
    $(".alert").alert();
    $(".alert").removeClass("hidden");
  } else {
    db.collection("questions")
      .add(저장할거)
      .then((result) => {
        window.location.href = "contact.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});
