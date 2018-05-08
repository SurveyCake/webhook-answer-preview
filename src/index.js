const parseData = ((dat, key, iv) => {
    const cipherParams = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(dat),
    });

    const decrypted = CryptoJS.AES.decrypt(
        cipherParams,
        CryptoJS.enc.Utf8.parse(key),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
        }
    );

    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
});

const getData = ((domain, survey, fileHash) => (
    fetch(`${domain}/webhook/v0/${survey}/${fileHash}`)
        .then((res) => res.text())
));

const getAnswer = (() => {
    const domain = document.getElementById('webhook-domain').value;
    const survey = document.getElementById('survey-hash').value;
    const fileHash = document.getElementById('answer-hash').value;
    const hashKey = document.getElementById('hash-key').value;
    const hashIv = document.getElementById('hash-iv').value;

    if (!survey || !fileHash || !hashKey || !hashIv) {
        return;
    }

    getData(domain, survey, fileHash)
        .then((res) => parseData(res, hashKey, hashIv))
        .then((data) => {
            document.getElementById('result').textContent = JSON.stringify(data);
        });
});

document.getElementById('get-data').addEventListener('click', () => {
    getAnswer();
});
