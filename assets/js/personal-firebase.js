var firebaseEmailAuth; //파이어베이스 email 인증 모듈 전역변수
var firebaseDatabase; //파이어베이스 db 모듈 전역변수
var userInfo;

const firebaseConfig = {
  apiKey: "AIzaSyBaz5ArZkXO3ArY22XB2QyDlQGfXFkRqOg",
  authDomain: "rarafit-f19d6.firebaseapp.com",
  projectId: "rarafit-f19d6",
  storageBucket: "rarafit-f19d6.appspot.com",
  messagingSenderId: "1094120594468",
  appId: "1:1094120594468:web:5e933b8e5f578cdc418cb1",
};
firebase.initializeApp(firebaseConfig);
firebaseEmailAuth = firebase.auth();
