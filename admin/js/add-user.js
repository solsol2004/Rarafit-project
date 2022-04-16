$(document).ready(function () {
  //가입버튼 눌렀을 때 작동하는 함수
  $(document).on("click", "#add-instructor-list", function () {
    //jquery를 이용해서 입력된 값을 가져온다.
    var email = $("#email-new").val();
    var password = $("#pw-new").val();
    name = $("#name-new").val();

    //이메일로 가입 버튼 눌렀을 때 작동되는 함수 - firebase 인증 모듈
    firebaseEmailAuth.createUserWithEmailAndPassword(email, password).then(
      function (user) {
        userInfo = user; //가입 후 callBack 함수로 생성된 유저의 정보가 user에 담겨서 넘어온다. 전역변수에 할당.

        //뭐가 찍히는지 직접 체크해보세요.
        console.log("userInfo/" + userInfo); //오브젝트 타입
        console.log("userInfo.currentUser/" + userInfo.currentUser); //안됨
        console.log("userInfo.uid/" + userInfo.uid); //vPArtCHqPpOeIOpidEfug0Kgq3v1

        //성공했을 때 작동되는 함수
        logUser();
      },
      function (error) {
        //에러가 발생했을 때
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      }
    );

    //가입 성공했을 때 호출 되는 함수 - 위의 firebase의 인증 모듈과 다른 database 모듈임을 확인하자.
    function logUser() {
      var ref = firebaseDatabase.ref("users/" + userInfo.uid); //저장될 곳을 users라는 부모 키를 레퍼런스로 지정.

      //저장 형식
      var obj = {
        name: name,
      };

      ref.set(obj); // 고유한 자식 키가 하나 생셩이 되면서 json 삽입
      alert("가입성공");

      //메인 페이지로 이동시키고 세션 저장시키기
      window.location.href = "index.html";
    }
  });
});
