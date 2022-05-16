const db = firebase.firestore();

$("#send-application").click(function () {
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
