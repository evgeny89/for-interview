<?php
//1. Какие типы паттернов проектирования существуют?
/*
 * Существуют 3 типа паттернов: структурирующие, пораждающие и поведенческие.
 */

//2. Как можно улучшить Singleton при помощи trait-ов?
/*
 * Можно создать трейт по паттерну Singleton и просто подключать его там где это необходимо.
 */

//3. Как реализуется паттерн Фабричный метод? В чем его отличие от паттерна Фабрика?
/*
 * фабричный метод - это паттерн, при котором мы заранее не знаем какой инстанс будет возвращен.
 * Главное чтобы создавайемый инстанс класса был имплементирован от определенного интерфейса
 * нам важно только наличие определенных методов, но не их реализация.
 * Фабрика - это просто по сути класс имеющий несколько паттернов Фабричный метод.
 */

//4. Объясните назначение и применение магических методов __get, __set, __isset, __unset, __call и __callStatic. Когда, как и почему их стоит использовать (или нет)?
/*
 * Магические методы очень заманчивы, т.к. позволяют очень гибко писать свой код, но эта гибкость может стать очень сложной.
 * Поэтому многие специалисты стараются вобще не использовать "магию" (кроме метода конструктора). такой код проще читать, тестировать и расширять.
 * __set - способен сохранять значение как свойство, не имея этого свойства в классе или не имея к нему доступа (защищенные и приватные поля)
 * __get - возвращает (если существует) значение свойства, добаленного методом __set.
 * __isset выполнится при использовании функций isset() или empty() на недоступных или несуществующих свойствах.
 * __unset - выполнится при использовании функций unset() на недоступных или несуществующих свойствах.
 * __call - сработает при вызове недоступных или несуществующих методов в контексте объекта.
 * __callStatic() - разница от __call что вызывается в статическом контексте.
 */

//5. Опишите несколько структур данных из стандартной библиотеки PHP (SPL). Приведите примеры использования.
/*
 * SplStack - стек, по принципу LIFO. позволяет более низкоуровнево (а значит больее быстро) организовать стек для обработки данных.
 * SplQueue - очередь, по принципу FIFO. позволяет более низкоуровнево (а значит больее быстро) организовать очередь для обработки данных.
 * SplHeap - куча, позволяет создать подобную дереву итерируемую структуру данных.
 */

//6. Найдите все ошибки в коде:
interface MyInt {
    public function funcI();
    //private function funcP(); - в интерфейсе не могут быть приватные методы.
    public function funcP();
}
class A {
    //protected prop1; - нет знака $ перед именем свойства.
    protected $prop1;
    //private prop2; - нет знака $ перед именем свойства.
    private $prop2;

    // помимо этого мы не назначаем значения свойствам выше, но пытаемся их читать.

    function funcA(){
        return $this->prop2;
    }
}
class B extends A {
    function funcB(){
        return $this->prop1;
    }
}
class C extends B implements MyInt {
    function funcB(){
        return $this->prop1;
    }
    //private function funcP(){ - приватный метод не может быть
    public function funcP(){
        return 123;
    }

    //необходимо реализовать метод funcI описанный в имплементируенмом интерфейсе
    public function funcI() {

    }
}
$b = new B();
$b->funcA(); // метод возвращает значение, но мы его никуда не выводим и ничему не присваиваем.
$c = new C();
$c->funcI();
