const db = firebase.firestore();
const storage = firebase.storage();

db.collection("instructor-info")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const instructorCard = `
      <div class="item">
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4">
          <div class="team marB20">
              <figure class="team-img">
                <img src="${doc.data().이미지}">
              </figure>
              <div class="trainer">
                  <h4>${doc.data().이름}</h4>
                  <h5>${doc.data().레벨}</h5>
              </div>
          </div>
      </div>
  </div>`;

      $("#trainers").append(instructorCard);
    });
  });

