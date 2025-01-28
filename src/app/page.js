import Button from "@/components/button";
import PasswordInput from "@/components/passwordInput";
import Dropdown from "@/components/dropdows";
import CustomCalendar from "@/components/CustomCalendar";
import { CheckBoxGroup } from "@/components/CheckBox";
import { RadioButtonGroup } from "@/components/RadioButton";
import { NotificationsContainer } from "@/components/Notification";
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

  const notifications = [
    {
      type: "error",
      title: "Что-то пошло не так",
      message: "Мы уже работаем над устранением проблемы",
    },
    {
      type: "success",
      title: "Всё получилось!",
      message: "<Действие> успешно выполнено",
    },
    {
      type: "info",
      title: "Уведомление об оценивании",
      message: "Пожалуйста, обратите внимание",
    },
  ];


return (
  <div className="m-5" >

    <Dropdown options={groupOptions} />



  </div>
  );
}
