# Webhook Answer Preview Tool

[繁中](./README.md) | [English](./README-en.md)

This is a Webhook Answer testing tool. When developing your own Webhook URL, it is possible to obtain answers from Webhook Query API with this tool and preview answer structure using Hash key & IV key decryption.

- Website: https://surveycake.github.io/webhook-answer-preview/


### When to Use

When you develop a Webhook URL and want to know users' answer structure before starting API development.



###  How to Use

The Webhook URL you input in SurveyCake settings will be activated with POST method. It might be cumbersome to print out information from `POST` during development phase.

For this reason, we recommend using `Custom Thank You` in SurveyCake to obtain `${SVID}` & `${HASH}` needed for testing.

![image](/src/images/en/setting-redirection-url.png)

1. Under `Custom Thank You` in the test survey's backend data system, fill in gadget URL and save.
    - `https://surveycake.github.io/webhook-answer-preview/`
2. Open and complete survey, then hit Submit.
3. After survey submission, it will automatically be redirected to specified gadget URL.
4. Then you will see ${SVID} and ${HASH} in URL transmitted by SurveyCake via GET method.
    - `?svid=${SVID}&hash=${HASH}`
5. Now enter `${SVID}` and `${HASH}` from URL into corresponding gadget textbox.
6. Obtain the survey's webhook decrypted `Hash key` & `IV key` in backend data system of SurveyCake Admin, fill in corresponding box.
    - ![image](/src/images/en/keys.jpg)
7. Click on `get answer preview` to see answer structure on the right.


### DIY

Next, try writing your own Webhook URL logic.

We provide another document on concatenation in SurveyCake Webhook, please consult project at: https://github.com/SurveyCake/webhook/blob/master/README-en.md
