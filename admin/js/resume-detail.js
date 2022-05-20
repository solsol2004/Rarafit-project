const db = firebase.firestore();
const storage = firebase.storage();

var singleQuestion = new URLSearchParams(window.location.search);

db.collection("job")
  .doc(singleQuestion.get("id"))
  .get()
  .then((result) => {
    console.log(result.data());
    $("#resume-name").html(result.data().성함);
    $("#resume-birthday").html(result.data().생년월일);
    $("#resume-school").html(result.data().졸업학교);
    $("#resume-field").html(result.data().희망부문);
    $("#resume-contact").html(result.data().연락처);
    $("#resume-description").html(result.data().자기소개);
    $("#resume-picture").attr("src", result.data().이미지);
  });

