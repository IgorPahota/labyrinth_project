# labyrinth_project
Web приложение для фиксирования поведения подопытного в лабиринте.

### Заказчик
Кафедра высшей нервной дейтельности биологического факультета МГУ им. М.В. Ломоносова

### Алгоритм работы
Пользователь заходит на сайт - https://labyrinth-msu.herokuapp.com/
В верхней части можно задать:
-Название эксперимента
-Номер опыта
-Номер подопытного

В центральной части основное интерактивное поле для построения лабиринта.

При нажатии на кнопку стена в нижней части а затем на ячейку лабиринта она поменяет свой цвет.
Таким образом можно построить лабиринт с условными обозначениями. После создания лаюиринта необходимо нажать кнопку "Начать эесперимент"

Пользователя редиректит на новую страницу с конкертным экспериментом.
Необходимо нажать на кнопку "Начальная позиция" и выбрать на поле место, где будет находиться испытуемый в начале эксперимента.

После, нажать на кнопку "Начать эксперимент" - запускается таймер, стрелочками клавиатуры можно управлять подоптыным в лаюиринте. Все действия фиксируются включая символы в правом верхнем углу.

После окночания эксперимента необходимо нажать на кнопку "Закончить эксперимент" - время останавливается, в загрузку падает файл с результатми эксперимента.
