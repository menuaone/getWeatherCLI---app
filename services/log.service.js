// сервис вывода

import chalk from 'chalk';
import dedent from 'dedent';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
    console.log(dedent`${chalk.bgCyan(' HELP ')}
    ###  -h - вывод помощи
    ###  Без параметров - вывод погоды
    ###  -c [CITY] - установка города
    ###  -t [API_KEY] - сохранение токена
    `);
};

const printWeather = (res, icon) => {
    console.log(dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${
        res.name
    }
    ${icon} ${res.weather[0].description}
    ###  Температура: ${res.main.temp} (ощущается, как ${res.main.feels_like})
    ###  Влажность: ${res.main.humidity}%
    ###  Скорость ветра: ${res.wind.speed}
    `);
};

export { printError, printHelp, printSuccess, printWeather };
