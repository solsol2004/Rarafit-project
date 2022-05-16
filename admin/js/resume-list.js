const db = firebase.firestore();
db.collection("job")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const resume = `<tr>
                    <td>
                    <a href="resume-detail.html?id=${doc.id}"
                    class="font-medium link"
                    >${doc.data().성함}</a>
                    </td>
                    <td>
                     <a href="resume-detail.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().생년월일}</a
                      >
                    </td>
                    <td>${doc.data().졸업학교}</td>
                    <td>
                      <a href="resume-detail.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().희망부문}</a>
                    </td>
                    <td>${doc.data().자기소개}</td>
                    <td>${doc.data().날짜}</td>
                  </tr>`;

      $("tbody").prepend(resume);
    });
  });
