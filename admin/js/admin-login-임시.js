const loginBtn = document.getElementById("user-login");
const db = firebase.firestore();
function login() {
  // var getId=localStorage.getItem("getId");
  var name = document.getElementById("name-login").value;
  var password = document.getElementById("pw-login").value;

  const docRef = db
    .collection("instructors")
    .where("이름", "==", name)
    .where("비밀번호", "==", password);
  // ^ separate .where()

  docRef.get().then((snapshot) => {
    if (snapshot.empty) {
      // no docs matched
      alert("잘못된 정보입니다. 다시 입력해주세요!");
    } else {
      window.location = "index.html";
    }
  });
}
