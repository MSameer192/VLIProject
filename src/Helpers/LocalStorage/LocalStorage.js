import CryptoJS from 'crypto-js';

export const SetLocalStorage = (name, key) => {
    key = CryptoJS.AES.encrypt(`${JSON.stringify(key)}`, process.env.REACT_APP_EncryptionKey).toString();

    localStorage.setItem(name, JSON.stringify(key));
}


export const GetLocalStorage = (name) => {
    let data = JSON.parse(localStorage.getItem(name))
    if (data) {
        let decrypted = CryptoJS.AES.decrypt(data, process.env.REACT_APP_EncryptionKey);
        decrypted = decrypted.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted)
    }
    else {
        return null
    }
}



export const DeleteLocalStorage = (name) => {
    localStorage.removeItem(name)
}
// `${process.env.REACT_APP_EncryptionKey}`