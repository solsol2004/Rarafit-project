$(".erase-ticket").click(function () {
  db.collection("questions").doc().update({ 완료: "yes" });
});
