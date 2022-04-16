const db = firebase.firestore();

$("#add-instructor-list").click(function () {
  var 저장할거 = {
    이름: $("#name-new").val(),
    지점명: $("#store-new").val(),
    비밀번호: $("#pw-new").val(),
    날짜: new Date(+new Date() + 3240 * 10000)
      .toISOString()
      .replace("T", " ")
      .replace(/\..*/, ""),
  };

  if (
    $("#name-new").val() == "" ||
    $("#store-new").val() == "" ||
    $("#pw-new").val() == ""
  ) {
    $(".alert").alert();
    $(".alert").removeClass("hidden");
  } else {
    db.collection("instructors")
      .add(저장할거)
      .then((result) => {
        $("#adding-instructor").addClass("hidden");
        window.location.href = "user-list.html";
      })
      .catch((error) => {
        console.log(hi);
      });
  }
});

db.collection("instructors")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const userList = `<tr>
                          <td>
                          <a href="user-detail.html?id=${doc.id}"
                              class="font-medium link"
                              >${doc.data().이름}</a
                            >
                        </td>
                        <td>
                        <a href="user-detail.html?id=${doc.id}"
                              class="font-medium link"
                              >${doc.data().지점명}</a
                            ></td>
                            <td>  
                            <a href="user-detail.html?id=${doc.id}"
                            class="font-medium link"
                            >${doc.data().비밀번호}</a
                          ></td>
                          <td>${doc.data().날짜}</td>
                        </tr>`;

      $("tbody").prepend(userList);
    });
  });

$("#add-instructor").click(function () {
  $("#adding-instructor").removeClass("hidden");
});
