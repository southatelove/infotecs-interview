//BASE
import React from "react";

//STYLES
import "./AddTodo.css";
/** 
 * В это компоненте мы реализуем добавление задачи в список задач
  @param todo - первоначальный массив данных
  @param setTodо - функция изменения массива todo с помощью useState
 */
function AddTodo({ todo, setTodo }) {
  const [value, setValue] = React.useState("");
  const [place, setPlace] = React.useState(true);

  /**
   * в функции addTask мы реализуем добавление новых задач, где id у нас присваивается рандомным числом, value вводимый текст,
   * а true означает статус задачи
   */
  function addTask() {
    setTodo([
      ...todo,
      {
        id: Math.random(""),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  /**
   * функция buttonValue проверяет наличие введенных данных в input
   */

  function buttonValue() {
    value ? setPlace(false) : setPlace(true);
  }

  React.useEffect(() => {
    buttonValue();
  }, [value]);

  return (
    <div className="inputTask">
      <div>
        <input
          placeholder="Введите таску..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn" disabled={place} onClick={addTask}>
          Добавить Таску
        </button>
      </div>
    </div>
  );
}
export default AddTodo;
