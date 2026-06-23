const { Client, LocalAuth } = require('whatsapp-web.js');
const menu = require('./menu');
const developer = require('./developer');
const responses = require('./responses');

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "aisa-v1" }),
    puppeteer: { 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// استخدم Pairing Code بدل QR - اسهل
client.on('qr', (qr) => {
    console.log('❗ استخدم كود الربط بدل QR. الكود هيظهر بعد 5 ثواني');
});

client.on('ready', async () => {
    console.log('\n================================================================');
    console.log('رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ');
    console.log('وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ');
    console.log('================================================================\n');
    console.log('[Aisa v1] البوت جاهز ومفعّل بالكامل!');

    // كود الربط يظهر مرة واحدة بس لما البوت يفتح
    try {
        const phoneNumber = '201142182793'; 
        const pairingCode = await client.requestPairingCode(phoneNumber);
        console.log('\n==================================================');
        console.log(`🔑 كود ربط الواتساب: ${pairingCode}`);
        console.log('ادخل على واتساب > الأجهزة المرتبطة > ربط جهاز > ربط برقم الهاتف');
        console.log('==================================================\n');
    } catch (err) {
        console.log('❌ فشل توليد كود الربط:', err.message);
    }
});

client.on('message', async (msg) => {
    try {
        const active = await developer.handle(msg, client);
        if (!active) return; 

        await responses.handle(msg);
        await menu.handle(msg);
    } catch (err) {
        console.error('خطأ في معالجة الرسالة:', err);
    }
});

client.on('auth_failure', () => {
    console.log('❌ فشل التوثيق - امسح مجلد session وجرب تاني');
});

client.initialize();
