var firebaseEmailAuth; //파이어베이스 email 인증 모듈 전역변수
var firebaseDatabase; //파이어베이스 db 모듈 전역변수
var userInfo;

const firebaseConfig = {
  apiKey: "AIzaSyD8IsrLJZgSNSTO9jhiGLLOOpD9VNKd9YA",
  authDomain: "rarafit-f3ec8.firebaseapp.com",
  projectId: "rarafit-f3ec8",
  storageBucket: "rarafit-f3ec8.appspot.com",
  messagingSenderId: "749235091196",
  appId: "1:749235091196:web:9173fdf4ababa0d9a38979",
};
firebase.initializeApp(firebaseConfig);
firebaseEmailAuth = firebase.auth();
