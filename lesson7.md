1. #### Укажите отличия между PHP 5.6 -> 7 -> 8 (как можно больше). Какие из них вы считаете важными и удобными? ####
    * в 7.xй версиях:
      * появился новый оператор сравнения (космический корабль) __<=>__
      * анонимные классы
      * определение констант через ___define___
      * стрелочные функции
      * 
    * в 8й версии:
      * были добавлены ___файберы___
      * возможность определять свойства объекта в конструкторе

2. #### Чем отличается __autoload от spl_autoload_register? Какие еще функции из SPL знаете? ####
    * главное отличие в том, что __autoload должен быть объявлен в коде 1 раз, а spl_autoload_register имеет свой
      загрузчик позволяющий определять несколько функций в коде
    * полный список функций библиотеки spl и их описание можно подсмотреть по
      адресу: [php.net](https://www.php.net/manual/ru/ref.spl.php)

3. #### Что такое ECMAScript? Чем он отличается от JavaScript? ####
   JavaScript - язык программирования, а ECMAScript - стандарт языка JavaScript.

4. #### Какие типы БД вы знаете? Приведите примеры. ####
    * реляционные
    * файловые
    * иерархические
    * NoSQL базы данных
    * графовые
    * есть другие...

5. #### Для чего нужны составные индексы в БД? Приведите примеры ####
   Составные индексы нужны, когда информации из одного столбца не достаточно для создания индекса. Например, оформление
   заказа. У нас есть таблица заказов и таблица товаров. Чтобы сохранить информацию о заказе - нам понадобится
   промежуточная таблица с составным первичным ключем: заказ-товар. В такой таблице может присутствовать несколько строк
   с идентификатором заказа, как и несколько строк и идентификатором товара, но комбинация id заказа + id товара будет
   уникальна в этой таблице.

6. #### Практическая задача. Спроектируйте систему новостной ленты по указанным требованиям (нужно создать схему БД, указать необходимые индексы, перечислить стек технологий): ####
   > а.Лента новостей выводится по убыванию: от самой свежей новости к более давним;

   > б.Каждая новость снабжена лентой комментариев;

   > в.Лента комментариев выводится по возрастанию: от самого давнего комментария к новым;

   > г.Обе ленты (новостей и комментариев) имеют функционал пагинации: новости – по 10 единиц, комментарии – по 25;

   > д.Комментарии могут оставлять только авторизованные пользователи;

   > е.Новостей и комментариев может быть очень много.


7. ####  * Усложнение задачи 6: ####
   > а. Напишите запрос, который будет отвечать за пагинацию новостей или комментариев.

   > б. Где лучше сортировать выводимые данные – на уровне БД или логики? Почему?

   > в. Сверстайте прототип ленты новостей (без поддержки логики, с AJAX-заглушками).


8. #### Как продать ручку на собеседовании веб-разработчика? (шутка) ####
   Создать карточку товара и реализовать оформление заказа))

9. #### Необходимо обеспечить удаленный доступ программиста к файловому серверу с проектом, над которым он работает. Какие варианты предложите? Как их реализовать? ####
    * самым оптимальным решением будет использование SFTP доступа.
    * так же возможно подключение по SSH.
    * третий вариант FTP, протокол не защищен шифрованием, что сильно ограничивает его использование.

10. #### Задано время отправления поезда и время в пути до конечной станции. Требуется написать в блокноте метод arrivalTime(int hours, int minutes, int hoursOnRoad, int minutesInRoad) : String ####

> которая найдет время прибытия этого поезда (возможно, в другие сутки).
> вход: 13, 20, 1, 30
> выход: "Сейчас 13:20. Время прибытия поезда: 14:50".
> вход: 19, 50, 5, 10
> выход: "Сейчас 19:50. Время прибытия поезда: 01:00 на следующие сутки"

```php
function arrivalTime(int $hours, int $minutes, int $hoursOnRoad, int $minutesInRoad) : String
{
    $MAX_HOUR = 24;
    $MAX_MINUTES = 60;
    
    $sumMinutes = $minutes + $minutesInRoad;
    $sumHours = $hours + $hoursOnRoad + intdiv($sumMinutes, $MAX_MINUTES);
    
    $resultHour = fmod($sumHours, $MAX_HOUR);
    $sumMinutes = fmod($sumMinutes, $MAX_MINUTES);
    
    $nextDay = ".";
    
    if ($sumHours > $MAX_HOUR) {
        $nextDay = " на следующие сутки.";
    }
    
    $resultFormatHour = sprintf("%'.02d", $resultHour);
    $resultFormatMinutes = sprintf("%'.02d", $sumMinutes);

    return "Сейчас {$hours}:{$minutes}. Время прибытия поезда: {$resultFormatHour}:{$resultFormatMinutes}{$nextDay}";
}

echo arrivalTime(13, 20, 1, 30) . PHP_EOL;
echo arrivalTime(19, 50, 5, 10) . PHP_EOL;
```