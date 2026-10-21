const { Client, LocalAuthenticator } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuthenticator(),
});

const contadorMnesajes = {};

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('QR code generated. Please scan it with your WhatsApp app.');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (msg) => {

    if (msg.formMe) return;

const usuariID = msg.from;

if (!contadorMnesajes[usuariID]) {
    contadorMnesajes[usuariID] = 0;
}
contadorMnesajes[usuariID]++;

console.log(`User ${usuariID} has sent ${contadorMnesajes[usuariID]} messages.`);
if (msg.body.toLowerCase() === '!Contando¡') {
    msg.reply(`Has enviado ${contadorMnesajes[usuariID]} messages.`);
    }
});

client.initialize();