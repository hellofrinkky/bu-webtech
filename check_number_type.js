function checkIntegerType() {
    const inputString = prompt("Input integer number");

    if (inputString === null || inputString.trim() === "") {
        alert("คุณไม่ได้กรอกตัวเลข หรือยกเลิกการทำงาน ❌");
        return; // ออกจากฟังก์ชัน
    }

    const number = parseInt(inputString);
  
    if (isNaN(number)) {
        alert(`'${inputString}' ไม่ใช่จำนวนเต็มที่ถูกต้อง โปรดลองใหม่ด้วยจำนวนเต็มเท่านั้น เช่น 10, -5, 0 🚫`);
        return;
    }

    let resultMessage;
    if (number === 0) {
        resultMessage = "zero integer number"; // จำนวนเต็มศูนย์
    }
    else if (number % 2 === 0) {
        resultMessage = "even integer number"; // เลขคู่
    }
    else {
        resultMessage = "odd integer number"; // เลขคี่
    }
    alert(resultMessage);
}
checkIntegerType();
