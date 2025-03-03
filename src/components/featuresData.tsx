import type { Feature } from "../types/feature";

import phpLogo from '/images/technologies/1200px-php-logo.svg_.png';
import jsLogo from '/images/technologies/480px-unofficial_javascript_logo_2.svg_.png';
import mysqlLogo from '/images/technologies/mysql.png';
import laravelLogo from '/images/technologies/laravel-logo.png';
import wpLogo from '/images/technologies/wp-logo_500x500.png';
import cordovaLogo from '/images/technologies/cordova_logo1.png';
import electronLogo from '/images/technologies/1200px-electron_software_framework_logo.svg_.png';
import kohanaLogo from '/images/technologies/kohana.png';
import nettyLogo from '/images/technologies/netty_logo_600px.png';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: phpLogo,
    title: "PHP",
    paragraph:
      "Скриптовый язык интенсивно применяемый для разработки веб-приложений. В настоящее время является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.",
  },
  {
    id: 2,
    icon: jsLogo,
    title: "JAVASCRIPT",
    paragraph:
      "Обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.",
  },
  {
    id: 3,
    icon: mysqlLogo,
    title: "MYSQL",
    paragraph:
      "Свободная реляционная система управления базами данных. Гибкость СУБД MySQL обеспечивается поддержкой большого количества типов таблиц. Разработку и поддержку MySQL осуществляет корпорация Oracle.",
  },
  {
    id: 4,
    icon: laravelLogo,
    title: "LARAVEL",
    paragraph:
      "Laravel - это фреймворк для веб-приложений с выразительным элегантным синтаксисом. Мы считаем, что развитие должно быть приятным и творческим опытом, чтобы быть по-настоящему полезным. Laravel пытается снять боль с разработки, упрощая общие задачи, используемые в большинстве веб-проектов.",
  },
  {
    id: 5,
    icon: wpLogo,
    title: "WORDPRESS",
    paragraph:
      "WordPress - это программное обеспечение с открытым исходным кодом, которое вы можете использовать для создания красивого веб-сайта, блога или приложения.",
  },
  {
    id: 6,
    icon: cordovaLogo,
    title: "APACHE CORDOVA",
    paragraph:
      "Мобильные приложения с HTML , CSS и JS Таргетинг на несколько платформ с одной базой кода Бесплатный и открытый исходный код",
  },
  {
    id: 7,
    icon: electronLogo,
    title: "ELECTRON",
    paragraph:
      "Electron использует Chromium и Node.js, так что Вы можете создавать свои приложения на HTML, CSS и JavaScript.",
  },
  {
    id: 8,
    icon: kohanaLogo,
    title: "KOHANA",
    paragraph:
      "Kohana — это веб-фреймворк с открытым кодом, основанный на PHP5 и использующий концепцию HMVC (Hierarchical Model View Controller — Иерахические Модель-Вид-Контроллер). Его основные цели — быть безопасным, легким и простым в использовании, и это действительно так.",
  },
  {
    id: 9,
    icon: nettyLogo,
    title: "NETTY",
    paragraph:
      "Инфраструктура клиент-сервер для разработки сетевых приложений Java, таких как серверы протоколов и клиенты. Асинхронная среда и инструменты сетевого приложения, управляемые событиями, используются для сетевого программирования.",
  },
];
export default featuresData;
