# Компоненты 

### Button

**Пример использования**

```js
<Button text="button" variant="light_blue" size="md"/>
```

#### variantStyles

Стиль кнопки зависит от передаваемого значения `style` его возможные значения и изобажения привыедены в таблице

|Стиль|Изображение|
|---|---|
|light_blue| ![светло-голубая кнопка](public\light_blue_button.png)|
|blue|![голубая кнопка](public\blue_button.png)|
|gray|![серая кнопка](public\gray_button.png)|

#### size

Размер зависит от передаваемого параметра `size` его значения и влияние значения на размет изображены ниже

![размеры кнопок](public\size_button.png)

 #### CheckBoxGroup

 Создание группы `imput` с возможностью выбора нескольких элементов. 

 **Пример использования**

 ```js
   const checkBoxItems = [
    { label: "Значение 1", checked: false, disabled: false },
    { label: "Значение 2", checked: true, disabled: false },
    { label: "Значение 3", checked: false, disabled: true },
    { label: "Значение 4", checked: true, disabled: true },
  ];

  return (
  <div>

    <CheckBoxGroup items={checkBoxItems} />

  </div>
  );

 ```

 ![группа импутов](public\CheckBoxGroup.png)


 ### CustomCalendar

 Компонент выбора даты из предложенных вариантов

 |тип|изображение|
 |---|---|
 |date|![календарь с выбором даты](public\custom_calendar_date.png)| 
 |month|![календарь с выбором месяца](public\custom_calendar_month.png)|

 ### dropdown

 выбор одного варианта из нескольких предложенных

```js
const groupOptions = [
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
  ];

return (
  <div className="m-5" >

    <Dropdown options={groupOptions} />

  </div>
  );
```


![раскрывающееся меню](public\dropdown.png)