const db = firebase.firestore();
db.collection("monday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const day = `<div class="row schedule-center marB10">
      <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-xs-11 schedule-row padLR5 padTB10">
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left schedule-time">${
         doc.data().시간
       }</div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left schedule-time">${
          doc.data().수업명
        }</div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right schedule-time">${
          doc.data().강사명
        }</div>
     </div>
    </div>`;

      $(".mon-table").prepend(day);
    });
  });

db.collection("tuesday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const day = `<div class="row schedule-center marB10">
      <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-xs-11 schedule-row padLR5 padTB10">
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left schedule-time">${
         doc.data().시간
       }</div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left schedule-time">${
          doc.data().수업명
        }</div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right schedule-time">${
          doc.data().강사명
        }</div>
     </div>
    </div>`;

      $(".tue-table").prepend(day);
    });
  });
db.collection("wednesday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const day = `<div class="row schedule-center marB10">
      <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-xs-11 schedule-row padLR5 padTB10">
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left schedule-time">${
         doc.data().시간
       }</div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left schedule-time">${
          doc.data().수업명
        }</div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right schedule-time">${
          doc.data().강사명
        }</div>
     </div>
    </div>`;

      $(".wed-table").prepend(day);
    });
  });

db.collection("thursday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const day = `<div class="row schedule-center marB10">
      <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-xs-11 schedule-row padLR5 padTB10">
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left schedule-time">${
         doc.data().시간
       }</div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left schedule-time">${
          doc.data().수업명
        }</div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right schedule-time">${
          doc.data().강사명
        }</div>
     </div>
    </div>`;

      $(".thu-table").prepend(day);
    });
  });

db.collection("friday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const day = `<div class="row schedule-center marB10">
      <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-xs-11 schedule-row padLR5 padTB10">
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left schedule-time">${
         doc.data().시간
       }</div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left schedule-time">${
          doc.data().수업명
        }</div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right schedule-time">${
          doc.data().강사명
        }</div>
     </div>
    </div>`;

      $(".fri-table").prepend(day);
    });
  });

db.collection("saturday")
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.data());
      const day = `<div class="row schedule-center marB10">
      <div class="col-xl-10 col-lg-10 col-md-11 col-sm-11 col-xs-11 schedule-row padLR5 padTB10">
       <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left schedule-time">${
         doc.data().시간
       }</div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left schedule-time">${
          doc.data().수업명
        }</div>
        <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right schedule-time">${
          doc.data().강사명
        }</div>
     </div>
    </div>`;

      $(".sat-table").prepend(day);
    });
  });
