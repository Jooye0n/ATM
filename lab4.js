var myUser;

function user(nameParameter, passwordParameter) {
    var name = nameParameter;//계좌주인 이름
    var password = passwordParameter;//비밀번호
    var balance = 0 ;//잔고(정수타입)

    return {
        deposit: function (money) { //입금
            document.getElementById("error-view").style.display = "none";
            document.getElementById("moneyError").style.display = "none";
            document.getElementById("pwError").style.display = "none";
            document.getElementById("balande-view").style.display = "none";

            if(money <0 || (money-Math.floor(money)!=0)) {//돈 범위 오류
                document.getElementById("error-view").style.display = "inline";
                document.getElementById("moneyError").style.display = "inline";
                return;
            } else {//입력된 돈의 범위에 오류 없을 시
                balance+=money;
                document.getElementById("currentBalance").innerHTML=balance;
                document.getElementById("balande-view").style.display = "inline";
                return balance; 
            }
        },
        withdraw: function (pw, money) { //출금
            document.getElementById("error-view").style.display = "none";
            document.getElementById("moneyError").style.display = "none";
            document.getElementById("pwError").style.display = "none";
            document.getElementById("balande-view").style.display = "none";

            if(money <0 || (money-Math.floor(money)!=0)) {//돈 범위 오류
                document.getElementById("error-view").style.display = "inline";
                document.getElementById("moneyError").style.display = "inline";
                return;
            } else {//입력된 돈의 범위에 오류 없을 시
                if(password == pw) {//비밀번호 오류 없음
                    balance-=money;
                    document.getElementById("currentBalance").innerHTML=balance;
                    document.getElementById("balande-view").style.display = "inline";
                    return balance;
                } else { //비밀번호 오류
                    document.getElementById("error-view").style.display = "inline";
                    document.getElementById("pwError").style.display = "inline";
                }
            }
        },
        getBalance: function(pw) { //잔고확인
            document.getElementById("error-view").style.display = "none";
            document.getElementById("moneyError").style.display = "none";
            document.getElementById("pwError").style.display = "none";
            document.getElementById("balande-view").style.display = "none";

            if(password == pw) { //비밀번호 같으면
                document.getElementById("balande-view").style.display = "inline";
            } else { //비밀번호 다르면
                document.getElementById("error-view").style.display = "inline";
                document.getElementById("pwError").style.display = "inline";
            }
        }
    }
}

var newAccount = document.querySelector("#makeaccount").addEventListener("click", function () {
    myUser = user(document.getElementById("name").value,document.getElementById("pw").value);
    document.getElementById("new-account-div").style.display = "none";
    document.getElementById("main-menu-div").style.display = "inline";
})//계좌 생성

var diposit = document.querySelector("#depositBtn").addEventListener("click", function () {
    myUser.deposit(Number(document.getElementById("money").value));
    document.getElementById("pw2").value="";
    document.getElementById("money").value="";
})//입금

var withdraw = document.querySelector("#withdrawBtn").addEventListener("click", function () {
    myUser.withdraw(document.getElementById("pw2").value,Number(document.getElementById("money").value));
    document.getElementById("pw2").value="";
    document.getElementById("money").value="";
})//출금

var balance = document.querySelector("#balanceBtn").addEventListener("click", function () {
    document.getElementById("moneyError").style.display = "none";
    myUser.getBalance(document.getElementById("pw2").value);
    document.getElementById("pw2").value="";
    document.getElementById("money").value="";
})//잔액 확인

