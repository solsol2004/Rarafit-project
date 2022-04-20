const db = firebase.firestore();
db.collection("monday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      const monday = `<tr>
                    <td>
                    <a href="date-scheudle/monday-schedule.html?id=${doc.id}"
                    class="font-medium link"
                    >${doc.data().시간}</a>
                    </td>
                    <td>
                     <a href="date-scheudle/monday-schedule.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().수업명}</a
                      >
                    </td>
                    <td>
                      <a href="date-scheudle/monday-schedule.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().강사명}</a>
                    </td>
                    <td>
                      <div>
                      <button class="delete-row">삭제</button>
                      <span class="deleteBtn-id">${doc.id}</span>
                      </div>
                    </td>
                  </tr>`;

      $(".monday-schedule").prepend(monday);
    });
  });

db.collection("tuesday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const tuesday = `<tr>
                    <td>
                      <span>${doc.data().시간}</span>
                    </td>
                    <td>
                     <a href="ticket-detail.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().수업명}</a
                      >
                    </td>
                    <td>
                      <a href="ticket-detail.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().강사명}</a>
                    </td>
                    <td>
                      <button>삭제</button>
                    </td>
                  </tr>`;

      $(".tuesday-schedule").prepend(tuesday);
    });
  });

db.collection("wednesday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const wednesday = `<tr>
                    <td>
                      <span>${doc.data().시간}</span>
                    </td>
                    <td>
                     <a href="ticket-detail.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().수업명}</a
                      >
                    </td>
                    <td>
                      <a href="ticket-detail.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().강사명}</a>
                    </td>
                    <td>
                      <button>삭제</button>
                    </td>
                  </tr>`;

      $(".wednesday-schedule").prepend(wednesday);
    });
  });

db.collection("thursday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const thursday = `<tr>
                    <td>
                      <span>${doc.data().시간}</span>
                    </td>
                    <td>
                     <a href="ticket-detail.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().수업명}</a
                      >
                    </td>
                    <td>
                      <a href="ticket-detail.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().강사명}</a>
                    </td>
                    <td>
                      <button>삭제</button>
                    </td>
                  </tr>`;

      $(".thursday-schedule").prepend(thursday);
    });
  });

db.collection("friday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const friday = `<tr>
                    <td>
                      <span>${doc.data().시간}</span>
                    </td>
                    <td>
                     <a href="ticket-detail.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().수업명}</a
                      >
                    </td>
                    <td>
                      <a href="ticket-detail.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().강사명}</a>
                    </td>
                    <td>
                      <button>삭제</button>
                    </td>
                  </tr>`;

      $(".friday-schedule").prepend(friday);
    });
  });

db.collection("saturday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const saturday = `<tr>
                    <td>
                      <span>${doc.data().시간}</span>
                    </td>
                    <td>
                     <a href="ticket-detail.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().수업명}</a
                      >
                    </td>
                    <td>
                      <a href="ticket-detail.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().강사명}</a>
                    </td>
                    <td>
                      <button class="remove-row">삭제</button>
                    </td>
                  </tr>`;

      $(".saturday-schedule").prepend(saturday);
    });
  });

$(".monday-form-button").click(function () {
  var 저장할거 = {
    시간: $(".mon-schedule-time").val(),
    수업명: $(".mon-schedule-class").val(),
    강사명: $(".mon-schedule-instructor").val(),
  };

  if (
    $(".mon-schedule-time").val() == "" ||
    $(".mon-schedule-class").val() == "" ||
    $(".mon-schedule-instructor").val() == ""
  ) {
    alert("필드를 모두 입력해주세요!");
  } else {
    db.collection("monday")
      .add(저장할거)
      .then((result) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});

$(".tuesday-form-button").click(function () {
  var 저장할거 = {
    시간: $(".tue-schedule-time").val(),
    수업명: $(".tue-schedule-class").val(),
    강사명: $(".tue-schedule-instructor").val(),
  };

  if (
    $(".tue-schedule-time").val() == "" ||
    $(".tue-schedule-class").val() == "" ||
    $(".tue-schedule-instructor").val() == ""
  ) {
    alert("필드를 모두 입력해주세요!");
  } else {
    db.collection("tuesday")
      .add(저장할거)
      .then((result) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});

$(".wednesday-form-button").click(function () {
  var 저장할거 = {
    시간: $(".wed-schedule-time").val(),
    수업명: $(".wed-schedule-class").val(),
    강사명: $(".wed-schedule-instructor").val(),
  };

  if (
    $(".wed-schedule-time").val() == "" ||
    $(".wed-schedule-class").val() == "" ||
    $(".wed-schedule-instructor").val() == ""
  ) {
    alert("필드를 모두 입력해주세요!");
  } else {
    db.collection("wednesday")
      .add(저장할거)
      .then((result) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});

$(".thursday-form-button").click(function () {
  var 저장할거 = {
    시간: $(".thu-schedule-time").val(),
    수업명: $(".thu-schedule-class").val(),
    강사명: $(".thu-schedule-instructor").val(),
  };

  if (
    $(".thu-schedule-time").val() == "" ||
    $(".thu-schedule-class").val() == "" ||
    $(".thu-schedule-instructor").val() == ""
  ) {
    alert("필드를 모두 입력해주세요!");
  } else {
    db.collection("thursday")
      .add(저장할거)
      .then((result) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});

$(".friday-form-button").click(function () {
  var 저장할거 = {
    시간: $(".fri-schedule-time").val(),
    수업명: $(".fri-schedule-class").val(),
    강사명: $(".fri-schedule-instructor").val(),
  };

  if (
    $(".fri-schedule-time").val() == "" ||
    $(".fri-schedule-class").val() == "" ||
    $(".fri-schedule-instructor").val() == ""
  ) {
    alert("필드를 모두 입력해주세요!");
  } else {
    db.collection("friday")
      .add(저장할거)
      .then((result) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});

$(".saturday-form-button").click(function () {
  var 저장할거 = {
    시간: $(".sat-schedule-time").val(),
    수업명: $(".sat-schedule-class").val(),
    강사명: $(".sat-schedule-instructor").val(),
  };

  if (
    $(".sat-schedule-time").val() == "" ||
    $(".sat-schedule-class").val() == "" ||
    $(".sat-schedule-instructor").val() == ""
  ) {
    alert("필드를 모두 입력해주세요!");
  } else {
    db.collection("saturday")
      .add(저장할거)
      .then((result) => {
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});
