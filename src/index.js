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

const getWebhookQueryApi = () => {
    const domain = document.getElementById('webhook-query-api').value;
    const surveyId = document.getElementById('survey-id').value;
    const answerHash = document.getElementById('answer-hash').value;

    return `
        ${domain || 'https://${Domain}/webhook/v0/'}${surveyId || '${SVID}'}/${answerHash || '${HASH}'}
    `;
};

const getData = ((headers) => (
    fetch(getWebhookQueryApi(), 
        {
            headers: {
                ...headers,
            }
        }
    )
        .then((res) => res.text())
));

const updateWebhookQueryApiPreview = () => {
    document.getElementById('webhook-query-api-preview').innerHTML = getWebhookQueryApi();
};

const getAnswer = ((headers) => {
    document.getElementById('result').textContent = '';

    const domain = document.getElementById('webhook-query-api').value;
    const surveyId = document.getElementById('survey-id').value;
    const answerHash = document.getElementById('answer-hash').value;
    const hashKey = document.getElementById('hash-key').value;
    const ivKey = document.getElementById('iv-key').value;

    if (!surveyId || !answerHash || !hashKey || !ivKey) {
        return;
    }

    getData(headers)
        .then((res) => parseData(res, hashKey, ivKey))
        .then((data) => {
            document.getElementById('result').textContent = JSON.stringify(data);
        });
});

document.getElementById('webhook-query-api').addEventListener('change', function (){
    updateWebhookQueryApiPreview();
});

document.getElementById('survey-id').addEventListener('change', function (){
    updateWebhookQueryApiPreview();
});

document.getElementById('answer-hash').addEventListener('change', function (){
    updateWebhookQueryApiPreview();
});

document.getElementById('get-data').addEventListener('click', () => {
    const headers = document.getElementById('headers').value ?
        JSON.parse(document.getElementById('headers').value)
        :
        {};

    getAnswer(headers);
});

updateWebhookQueryApiPreview();
