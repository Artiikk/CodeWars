const response = {
  "response": {
  "count": 265865,
  "items": [{
  "id": 150916,
  "first_name": "Анастасия",
  "last_name": "Егорова",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "14.1"
  }, {
  "id": 154334,
  "first_name": "Анастасия",
  "last_name": "Чашина-Гуркалова",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "29.2"
  }, {
  "id": 157168,
  "first_name": "Алёна",
  "last_name": "Ежова",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "26.2"
  }, {
  "id": 158067,
  "first_name": "Диана",
  "last_name": "Смирнова",
  "deactivated": "deleted"
  }, {
  "id": 158657,
  "first_name": "Дмитрий",
  "last_name": "Жаров",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "14.2.1986"
  }, {
  "id": 163359,
  "first_name": "Елизавета",
  "last_name": "Попкович",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "17.10"
  }, {
  "id": 163594,
  "first_name": "Нина",
  "last_name": "Кухно",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "14.4.1990"
  }, {
  "id": 164559,
  "first_name": "Александр",
  "last_name": "Кусков",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "21.3.1989"
  }, {
  "id": 165943,
  "first_name": "Yura",
  "last_name": "Smirnov",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "13.12"
  }, {
  "id": 166245,
  "first_name": "Ирина",
  "last_name": "Ганцерова",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "16.1"
  }, {
  "id": 166638,
  "first_name": "Юлия",
  "last_name": "Яковлева",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "5.3"
  }, {
  "id": 167184,
  "first_name": "Евгения",
  "last_name": "Сараева",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "8.4.1989"
  }, {
  "id": 168529,
  "first_name": "Natusik",
  "last_name": "Matyukina",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "13.2"
  }, {
  "id": 168835,
  "first_name": "Дмитрий",
  "last_name": "Орезович",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "9.6"
  }, {
  "id": 169305,
  "first_name": "Юленька",
  "last_name": "Муровцева",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "1.10"
  }, {
  "id": 171775,
  "first_name": "Юлия",
  "last_name": "Кокшарова",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "21.4"
  }, {
  "id": 174157,
  "first_name": "Ксения",
  "last_name": "Пармёнова",
  "deactivated": "banned"
  }, {
  "id": 174651,
  "first_name": "Ксения",
  "last_name": "Сова",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "8.7"
  }, {
  "id": 177922,
  "first_name": "Евгения",
  "last_name": "Смирнова",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "30.1.1984"
  }, {
  "id": 178072,
  "first_name": "Жанетта",
  "last_name": "Воронова",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "18.4"
  }, {
  "id": 179313,
  "first_name": "Екатерина",
  "last_name": "Николаева",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "8.12.1987"
  }, {
  "id": 180156,
  "first_name": "Никита",
  "last_name": "Бартович",
  "is_closed": false,
  "can_access_closed": true
  }, {
  "id": 180625,
  "first_name": "Яна",
  "last_name": "Наумова",
  "deactivated": "banned"
  }, {
  "id": 180800,
  "first_name": "Елена",
  "last_name": "Полуда",
  "is_closed": true,
  "can_access_closed": false,
  "bdate": "21.05.2002"
  }, {
  "id": 184141,
  "first_name": "Данил",
  "last_name": "Данилов",
  "is_closed": false,
  "can_access_closed": true,
  "bdate": "13.7"
  }]
  }
}

const responseJSON = JSON.stringify(response)
const parsedJSON = JSON.parse(responseJSON)
const items = parsedJSON.response.items
const filtered = items.filter(item => {
  const dayOfBirth = item.bdate

  if (!dayOfBirth) return item
  else {
    const fixedFormatDate = dayOfBirth.split('.').reverse().join('.')
    const timestampStarted = 1970

    const currentAge = new Date() - new Date(fixedFormatDate)
    const finalAge = new Date(currentAge).getFullYear() - timestampStarted
    if (finalAge >= 18) return item
  }
})

console.log(filtered)