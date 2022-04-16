//제이쿼리를 사용한다.
$(document).ready(function () {
  //가입버튼 눌렀을 때
  $(document).on("click", "#user-login", function () {
    //제이쿼리 선택자와 val() 함수를 이용해서 이메일,비밀번호 값을 가져온다.
    var email = $("#email-login").val();
    var password = $("#pw-login").val();

    //파이어베이스 이메일 로그인 함수
    firebaseEmailAuth
      .signInWithEmailAndPassword(email, password)
      .then(function (firebaseUser) {
        //성공하면 firebaseUser에 유저 정보 값이 담겨 넘어온다.
        loginSuccess(firebaseUser);
      })
      .catch(function (error) {
        // 실패했을 때 에러 처리
        alert("로그인 실패");
      });
  });
});

//로그인 성공했을 때
function loginSuccess(firebaseUser) {
  window.location.href = "index.html";
}
