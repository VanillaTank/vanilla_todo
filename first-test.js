const crypto = require('crypto');

const storedPrivateKey = '';
const storedTempKey = '';

let signed = ''
let tempKey = ''
let userID = ''
let API_KEY = ''
const app_name = 'webcore';
const username = 'webcore@peoplepowerco.com';
const pwd = 'q1w2e3r4';
const privateKey = `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`

function sign(privateKey, tempKey) {
    const pemKey = `-----BEGIN PRIVATE KEY-----${privateKey}-----END PRIVATE KEY-----`;

    const sign = crypto.createSign('RSA-SHA512');
    sign.update(Buffer.from(tempKey));
    return sign.sign(pemKey, 'base64');
}


describe('Device test', () => {
    it('Login with RSA', async () => {
        const res = await cy.request({
            url: `https://sboxall.presencepro.com/cloud/json/login?sign=true&username=${username}&appName=${app_name}`,
            headers: {
                'Content-Type': 'application/json',
                'PASSWORD': pwd
            }
        })
            const tempKey = res.body.key
            const signature = sign(privateKey, tempKey)

            const loginRes = await cy.request({
                url: `https://sboxall.presencepro.com/cloud/json/login?appName=${app_name}&username=${username}&sign=true&signAlgorithm=SHA512withRSA`,
                headers: {
                    'Content-Type': 'application/json',
                    'passcode': signature
                }
            }).then((res)=> {
                expect(res).to.have.property('status', 200)
                expect(res.body).to.have.property('resultCode', 0)
                userID = res.body.userId
                API_KEY = res.body.key
            })

            
        //     cy.request('https://httpbin.org/get')
        //         .then((res) => {
        //             expect(res).to.have.property('status', 200)
        //         })
        // })
    })

    // it('getOrg', ())
})