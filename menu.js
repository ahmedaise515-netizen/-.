const userSessions = {};

async function handle(msg) {
    const sender = msg.from;
    const body = msg.body? msg.body.trim() : '';

    // عرض المنيو الرئيسي
    if (body === '.الاوامر' || body === '.أوامر' || body === 'الاوامر') {
        const mainMenu =
`رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ
وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِّلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَءُوفٌ رَّحِيمٌ
╭─┈─⟞🎪⟝─┈─╮
┃ ⌯︙1 ~ *قـسـم التـحـمـيـل 📂*
┃ ⌯︙2 ~ *قـسـم الـمـجـمـوعـات 🐞*
┃ ⌯︙3 ~ *قـسـم الـمـلـصـقـات 🌄*
┃ ⌯︙4 ~ *قـسـم الـمـطـوريـن 🇩🇪*
┃ ⌯︙5 ~ *قـسـم امـثـلـه ✳️*
┃ ⌯︙6 ~ *قـسـم الـادوات 🚀*
┃ ⌯︙7 ~ *قـسـم الـبـحـث 🌐*
┃ ⌯︙8 ~ *قـسـم الادمــن 👨🏻‍⚖️*
┃ ⌯︙9 ~ *قـسـم الالــعـاب 🎮*
┃ ⌯︙10 ~ *قـسـم الچيف ✴️*
┃ ⌯︙11 ~ *قـسـم الـبــنـك 💰*
┃ ⌯︙12 ~ *قـسـم الـذكـاء الاصـطـنـاعـي 🤖*
┃ ⌯︙13 ~ *قـسـم الـبـوتـات الـفـرعـي ♥️*
┃ ⌯︙14 ~ *قـسـم مـعـلومـات الـبـوت 🗃️*
┃ ⌯︙15 ~ *قـسـم الـالــقــاب *
┃ ⌯︙16 ~ *قـسـم الـلـوجـوهــات 🎡*
┃ ⌯︙17 ~ *قـسـم تـغـيـر الاصـوات 📢*
┃ ⌯︙18 ~ *قـسـم أخــرى 🌹*
╰─┈─⟞🎪⟝─┈─╯
> *رد عـلـي الـرسـالـه بـ رقـم الـقـسـم فـقـط بـدون نـقـطـه*`;

        await msg.reply(mainMenu);
        userSessions[sender] = 'waiting_for_section';
        return true;
    }

    // استقبال رقم القسم
    if (userSessions[sender] === 'waiting_for_section') {
        if (/^\d+$/.test(body)) {
            const sectionNumber = parseInt(body);
            if (sectionNumber >= 1 && sectionNumber <= 18) {
                let responseText = '';
                switch (sectionNumber) {
                    case 1: responseText = `📂 *قـسـم التـحـمـيـل*:\n• \`.تحميل_يوتيوب\`\n• \`.تحميل_تيكتوك\``; break;
                    case 2: responseText = `🐞 *قـسـم الـمـجـمـوعـات*:\n• \`.رابط\`\n• \`.تفعيل\``; break;
                    case 3: responseText = `🌄 *قـسـم الـمـلـصـقـات*:\n• \`.ستيكر\`\n• ابعت صورة واكتب.ستيكر`; break;
                    case 4: responseText = `🇩🇪 *قـسـم الـمـطـوريـن*:\n• \`.احصائيات\`\n• \`.بنق\``; break;
                    case 5: responseText = `✳️ *قـسـم امـثـلـه*:\n• \`.مثال1\`\n• \`.مثال2\``; break;
                    case 6: responseText = `🚀 *قـسـم الـادوات*:\n• \`.اذان\`\n• \`.طقس\`\n• \`.ترجمه\``; break;
                    case 7: responseText = `🌐 *قـسـم الـبـحـث*:\n• \`.بحث\`\n• \`.جوجل\``; break;
                    case 8: responseText = `👨🏻‍⚖️ *قـسـم الادمــن*:\n• \`.طرد\`\n• \`.حظر\`\n• \`.ترقية\``; break;
                    case 9: responseText = `🎮 *قـسـم الالــعـاب*:\n• \`.اكس_او\`\n• \`.حجر_ورقة\``; break;
                    case 10: responseText = `✴️ *قـسـم الچيف*:\n• \`.جيف\`\n• ابعت كلمة +.جيف`; break;
                    case 11: responseText = `💰 *قـسـم الـبــنـك*:\n• \`.رصيدي\`\n• \`.تحويل\``; break;
                    case 12: responseText = `🤖 *قـسـم الـذكـاء الاصـطـنـاعـي*:\n• \`.اسأل\`\n• \`.تخيل\``; break;
                    case 13: responseText = `♥️ *قـسـم الـبـوتـات الـفـرعـي*:\n• \`.بوت1\`\n• \`.بوت2\``; break;
                    case 14: responseText = `🗃️ *قـسـم مـعـلومـات الـبـوت*:\n• النسخة: *Aisa v1*\n• المطور: انت`; break;
                    case 15: responseText = `👑 *قـسـم الـالــقــاب*:\n• \`.لقبي\`\n• \`.الالقاب\``; break;
                    case 16: responseText = `🎡 *قـسـم الـلـوجـوهــات*:\n• \`.لوجو\`\n• \`.لوجو2\``; break;
                    case 17: responseText = `📢 *قـسـم تـغـيـر الاصـوات*:\n• \`.صوت_سنجاب\`\n• \`.صوت_روبوت\``; break;
                    case 18: responseText = `🌹 *قـسـم أخــرى*:\n• \`.قرآن\`\n• \`.حديث\``; break;
                }
                await msg.reply(responseText);
                delete userSessions[sender];
                return true;
            } else {
                await msg.reply('❌ الرقم لازم يكون من 1 لـ 18');
                return true;
            }
        } else {
            await msg.reply('❌ ابعت رقم القسم بس، بدون نقط أو حروف');
            return true;
        }
    }

    return false;
}

module.exports = { handle };
