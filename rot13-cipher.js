function rot13(str) {

    let decipheredStr = '';
    for (let i = 0; i < str.length; i++) {
        let strCharCode = str.charCodeAt(i);
        if (strCharCode >= 65 || strCharCode >= 90) {
            if (strCharCode < 78) {
                decipheredStr += String.fromCharCode(strCharCode + 13);
            } else {
                decipheredStr += String.fromCharCode(strCharCode - 13);
            }
        } else {
            decipheredStr += str.charAt(i);
        }
    }
    return decipheredStr;
}