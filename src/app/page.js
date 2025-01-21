import Button from "@/components/button";
import PasswordInput from "@/components/passwordInput";
import Dropdown from "@/components/dropdows";
import CustomCalendar from "@/components/CustomCalendar";
import { CheckBoxGroup } from "@/components/CheckBox";
import { RadioButtonGroup } from "@/components/RadioButton";
export default function Home() {

  const groupOptions = [
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
    "ПР-XX.XXX",
  ];
  const availableDates = [
    "2024.01.01",
    "2024.01.02",
    "2024.01.05",
    "2024.01.10",
    "2024.01.01",
    "2024.01.02",
    "2024.01.05",
    "2024.01.10",
    "2024.01.01",
    "2024.01.02",
    "2024.01.05",
    "2024.01.10",
    
  ];

  const checkBoxItems = [
    { label: "Значение 1", checked: false, disabled: false },
    { label: "Значение 2", checked: true, disabled: false },
    { label: "Значение 3", checked: false, disabled: true },
    { label: "Значение 4", checked: true, disabled: true },
  ];

  const radioButtonItems = [
    { label: "Значение 1", checked: false, disabled: false },
    { label: "Значение 2", checked: true, disabled: false },
    { label: "Значение 3", checked: false, disabled: true },
    { label: "Значение 4", checked: false, disabled: true },
  ];


return (
  <div>
    <Button text="button" variant="light_blue" size="md"/>
    <PasswordInput/>

    <Dropdown options={groupOptions} />


    {/* Компонент для выбора даты */}
    <CustomCalendar type="date" availableDates={availableDates} style="white" />

    {/* Компонент для выбора месяца */}
    <CustomCalendar type="month" style="blue" />


    <CheckBoxGroup items={checkBoxItems} />
    <RadioButtonGroup items={radioButtonItems} />

  </div>
  );
}
