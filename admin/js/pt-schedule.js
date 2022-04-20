const db = firebase.firestore();

db.collection("pt-schedule")
  .where("요일", "==", "월요일")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      const monday = `<tr>
                    <td>${doc.data().시간}</td>
                    <td>${doc.data().수업명}</td>
                    <td>${doc.data().강사명}</td>
                    <td>
                      <button class="remove-this-row btn"><i class="fa fa-times fa-2x" aria-hidden="true"></i><span class="uid hidden">${
                        doc.id
                      }</span></button>
                    </td>
                  </tr>`;

      $(".monday-schedule").prepend(monday);
    });
  });

db.collection("pt-schedule")
  .where("요일", "==", "화요일")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const tuesday = `<tr>
      <td>${doc.data().시간}</td>
      <td>${doc.data().수업명}</td>
      <td>${doc.data().강사명}</td>
      <td>
        <button class="remove-this-row btn"><i class="fa fa-times fa-2x" aria-hidden="true"></i><span class="uid hidden">${
                        doc.id
                      }</span></button>
      </td>
    </tr>`;

      $(".tuesday-schedule").prepend(tuesday);
    });
  });

db.collection("pt-schedule")
  .where("요일", "==", "수요일")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const wednesday = `<tr>
      <td>${doc.data().시간}</td>
      <td>${doc.data().수업명}</td>
      <td>${doc.data().강사명}</td>
      <td>
        <button class="remove-this-row btn"><i class="fa fa-times fa-2x" aria-hidden="true"></i><span class="uid hidden">${
                        doc.id
                      }</span></button>
      </td>
    </tr>`;

      $(".wednesday-schedule").prepend(wednesday);
    });
  });

db.collection("pt-schedule")
  .where("요일", "==", "목요일")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const thursday = `<tr>
                    <td>${doc.data().시간}</td>
                    <td>${doc.data().수업명}</td>
                    <td>${doc.data().강사명}</td>
                    <td>
                      <button class="remove-this-row">삭제<span class="uid hidden">${
                        doc.id
                      }</span></button>
                    </td>
                  </tr>`;

      $(".thursday-schedule").prepend(thursday);
    });
  });

db.collection("pt-schedule")
  .where("요일", "==", "금요일")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const friday = `<tr>
      <td>${doc.data().시간}</td>
      <td>${doc.data().수업명}</td>
      <td>${doc.data().강사명}</td>
      <td>
        <button class="remove-this-row btn"><i class="fa fa-times fa-2x" aria-hidden="true"></i><span class="uid hidden">${
                        doc.id
                      }</span></button>
      </td>
    </tr>`;

      $(".friday-schedule").prepend(friday);
    });
  });

db.collection("pt-schedule")
  .where("요일", "==", "토요일")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const saturday = `<tr>
      <td>${doc.data().시간}</td>
      <td>${doc.data().수업명}</td>
      <td>${doc.data().강사명}</td>
      <td>
        <button class="remove-this-row btn"><i class="fa fa-times fa-2x" aria-hidden="true"></i><span class="uid hidden">${
                        doc.id
                      }</span></button>
      </td>
    </tr>`;

      $(".saturday-schedule").prepend(saturday);
    });
  });

$(".add-form-button").click(function () {
  var 저장할거 = {
    요일: $(".class-toggle span:first-child").text(),
    시간: $(".schedule-time").val(),
    수업명: $(".schedule-class").val(),
    강사명: $(".schedule-instructor").val(),
  };

  if (
    $(".class-toggle span:first-child").text() == "요일" ||
    $(".schedule-time").val() == "" ||
    $(".schedule-class").val() == "" ||
    $(".schedule-instructor").val() == ""
  ) {
    alert("필드를 모두 입력해주세요!");
  } else {
    db.collection("pt-schedule")
      .add(저장할거)
      .then((result) => {
        window.location.href = "pt-schedule.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});

$(document).on("click", ".remove-this-row", function () {
  db.collection("pt-schedule")
    .doc($(this).children(".uid").text())
    .delete()
    .then((result) => {
      window.location.href = "pt-schedule.html";
    });
});
