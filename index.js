const TelegramBot = require('node-telegram-bot-api')
const axios = require('axios')
const https = require('https')

const token = '5469812221:AAGDjgtZwLcxiyW8a8Y_TYbbt6d8KG3mrMs'

const bot = new TelegramBot(token, { polling: true })



bot.onText(/\/echo (.+)/, (msg, match) => {

	const chatId = msg.chat.id
	const resp = match[1]

	bot.sendMessage(chatId, resp)
})

bot.onText(/\/start/,(msg)=>{
	const chatId = msg.chat.id
	let message = 'Привет, я Бот МегаХенд, пока нахожусь в разработке, но у меня есть пару функций: \n' +
		'/card - С помощью этой команды можно посмотреть транзакции по карте клиента, пример "/card 123" где 123 это номер карты \n' +
		'/music - Эта команда позволит вам скачать звуковые ролики для вашего магазина, если у вас отсутствует доступ к ним на гугл диске.(4 категории музыки: Мегахенд, Мирхенд, МегахендСкидка, МирхендСкидка) Пример: /music МегаХенд\n' +
		'/balance - Посмотреть актуальный баланс по карте клиента, пример "/balance 123" где 123 это номер карты'
	bot.sendMessage(chatId, message)
} )


bot.onText(/\/music (.+)/, (msg, match) => {
	const chatId = msg.chat.id
	const response = match[1]

	if(response === 'Мегахенд'){
		bot.sendAudio(chatId,'mega/promo_2 МЕГАХЕНД.wav')
		bot.sendAudio(chatId,'mega/Бренды_здесь_15Юрьев_Хачанова_06_09_2022_2.wav')
		bot.sendAudio(chatId,'mega/Копия МЕГА-ХЭНД _1 _ПРИВЕТСТВИЕ- Юрьев.mp3')
		bot.sendAudio(chatId,'mega/Копия МЕГА-ХЭНД _4_БОЛЬШИЕ РАЗМЕРЫ- Юрьев.mp3')
		bot.sendAudio(chatId,'mega/Копия МЕГА-ХЭНД _8_СПОРТ - Юрьев.mp3')
		bot.sendAudio(chatId,'mega/Копия МЕГА-ХЭНД _9_БРЕНДЫ - Юрьев.mp3')
		bot.sendAudio(chatId,'mega/Копия МЕГА-ХЭНД _10_СТИЛЬ МЕГАХЕНД.mp3')
		bot.sendAudio(chatId,'mega/Копия МЕГА-ХЭНД_5_ДОМ - Юрьев.mp3')
		bot.sendAudio(chatId,'mega/Копия МЕГА-ХЭНД_6_РЕКЛАМА НЗ - Юрьев.mp3')
		bot.sendAudio(chatId,'mega/Что_такое_мегахенд_скидки_15_Хасанова_04_10_2022_1.wav')
	}
	if (response === 'МегахендСкидка'){
		bot.sendAudio(chatId,'megaskidka/Мегахенд_Новый_завоз_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 10_Хасанова_04.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 20_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 30_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 40_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 50_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 60_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 70_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 80_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'megaskidka/Мегахенд_скидка 90_Хасанова_07.10.2022.wav')

	}
	if (response === 'Мирхенд'){
		bot.sendAudio(chatId,'Что_такое_мирахенд_скидки_15_Хасанова_07_10_2022.wav')
	}
	if (response === 'МирхендСкидка'){
		bot.sendAudio(chatId,'mirskidka/МИРхенд_Новый_завоз_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка 05_Хасанова_07.10.2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_20_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_30_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_40_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_50_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_60_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_70_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_80_05_Хасанова_07_10_2022.wav')
		bot.sendAudio(chatId,'mirskidka/МИРхенд_скидка_90_05_Хасанова_07_10_2022.wav')
	}
})


bot.onText(/\/order (.+)/, (msg, match) => {

	const chatId = msg.chat.id
	const response = match[1]
	if(response === 'Астрал'){
		bot.sendAudio(chatId, 'Shadowraze_astral_step.mp3');
	} else{
		const agent = new https.Agent({
			rejectUnauthorized: false
		});
		axios.get('https://api.mhand.ru/query/aho/order/'+response, {httpsAgent: agent}).then((resp)=>{
			var pizda = resp.data[0].status
			console.log(resp.data[0].status)
			bot.sendMessage(chatId, 'Статус заявки: '+pizda)
		})
	}



})
bot.onText(/\/card (.+)/, (msg, match) => {
	const chatId = msg.chat.id
	const response = match[1]

	const config = {
		method: 'POST',
		url: 'https://card.mhand.ru/cardpr',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		data:{
			key: "[$@Qc$;ZOOMmMNOXyT5i|sP-$*70#xWhb8sSfP67kO+D5SvM@k%QYLHN|g=nm",
			method: "getTransactions",
			customer: {
				cardNumbers: response
			}
		}
	}

	axios(config).then((res)=>{
		console.log(res.data)
		let jopa = "Транзакции по карте: \n"
		let b = 0
		if (res.data.length > 100){
			bot.sendMessage(chatId, "Как много транзакций...Подождите пару секунд...")

			for (let i = res.data.length - 100; i < res.data.length; i++){
				b++
				jopa +=b+". "+"Сумма: "+res.data[i].sum +" Дата: "+new Date(res.data[i].created).toLocaleString().substr(0,10) +"\n"
			}
			setTimeout(()=>{
				bot.sendMessage(chatId, "Последние 100 транзакций: ")
				bot.sendMessage(chatId, jopa)
			},5000)

		} else{
			for (let i = 0; i< res.data.length; i++){
				jopa +=i+1+". "+"Сумма: "+res.data[i].sum +" Дата: "+new Date(res.data[i].created).toLocaleString().substr(0,10) +"\n"
				//jopa +=  "["+new Date(res.data[i].created).toLocaleString().substr(0,10)+"]: "+res.data[i].sum+"\n"
			}
			console.log(jopa.length)
			bot.sendMessage(chatId, jopa)
		}


	})
})
bot.onText(/\/balance (.+)/, (msg, match) => {
	const chatId = msg.chat.id
	const response = match[1]

	const config = {
		method: 'POST',
		url: 'https://card.mhand.ru/cardpr',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		data:{
			key: "[$@Qc$;ZOOMmMNOXyT5i|sP-$*70#xWhb8sSfP67kO+D5SvM@k%QYLHN|g=nm",
			method: "getCustomer",
			customer: {
				cardNumbers: response
			}
		}
	}

	axios(config).then((res) =>{
		console.log(res.data)
		let message = "Карта: "+response+" \n"
		message +="Номер телефона: "+res.data.phone+"\n"
		message += "Баланс: "+res.data.balance+" бонусов\n"
		message += "ИО: "+res.data.name+"  "+res.data.surname+""

		bot.sendMessage(chatId, message)

	})

})

