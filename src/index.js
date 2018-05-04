// const key = 'HASH_KEY';
// const iv = 'IV_KEY';
// fetch('URL_PATH')
// 	.then((res) => res.text())
// 	.then((dat) => {
// 		const cipherParams = CryptoJS.lib.CipherParams.create({
// 			ciphertext: CryptoJS.enc.Base64.parse(dat),
// 		});
// 		const decrypted = CryptoJS.AES.decrypt(
// 			cipherParams,
// 			CryptoJS.enc.Utf8.parse(key),
// 			{
// 				iv: CryptoJS.enc.Utf8.parse(iv),
// 			}
// 		);
// 		console.log(
// 			JSON.parse( decrypted.toString(CryptoJS.enc.Utf8) )
// 		);
//     });
