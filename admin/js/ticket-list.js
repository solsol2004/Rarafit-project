const db = firebase.firestore();
db.collection("questions")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const questions = `<tr>
                    <td>
                      <span>${doc.data().성함}</span>
                    </td>
                    <td>
                     <a href="ticket-detail.html?id=${doc.id}"
                        class="font-medium link"
                        >${doc.data().문의내용}</a
                      >
                    </td>
                    <td>
                      <a href="ticket-detail.html?id=${
                        doc.id
                      }" class="font-bold link">${doc.data().지점명}</a>
                    </td>
                    <td>${doc.data().연락처}</td>
                    <td>${doc.data().날짜}</td>
                    <td><img src=${
                      doc.data().완료
                    } alt="" height=20 width=20></img></td>
                  </tr>`;

      $("tbody").prepend(questions);
    });
  });
