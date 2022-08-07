// BASE
import React from "react";

// STYLES
import "./TodoList.css";

/** 
 * В это компоненте мы реализуем массив в виде табличке данных с редактированием, удалением, сортировкой
  @param todo - первоначальный массив данных
  @param setTodо - функция изменения массива todo с помощью useState
 */

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = React.useState(null);
  const [value, setValue] = React.useState("");
  const [filtered, setFiltered] = React.useState(todo);
  const [search, setSearch] = React.useState("");

  const filteredTodos = filtered.filter((todoItem) => {
    return todoItem.title.toLowerCase().includes(search.toLowerCase());
  });

  function todoFilter(status) {
    if (status === "all") {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltered(newTodo);
    }
  }
  React.useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  /**
   * в функции deleteTodo мы реализуем удаление задачи
   */

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id !== id);
    setTodo(newTodo);
  }

  /**
   * в функции statusTodo мы реализуем изменения статуса задачи на сделана/не сделана
   * @param id - изменение статуса по выбранной нами задаче через id
   */

  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }

  /**
   * @param id - по выбранной задачи id происходит редактирование
   * @param title - сам текст
   */

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  /**
   *
   * @param id - по выбранной id происходит сохранение измененной задачи
   */

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(false);
  }

  return (
    <>
      <div>
        <input
          className="searchInput"
          type="text"
          placeholder="Поиск по задачам..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      <div className="sortButtons">
        <button onClick={() => todoFilter("all")}>Все</button>
        <button
          onClick={() => todoFilter(true)}
          style={{
            background: "#00cfff",
          }}
        >
          В процессе
        </button>
        <button
          onClick={() => todoFilter(false)}
          style={{
            background: "#7fff00",
          }}
        >
          Выполнена
        </button>
        <div className="todo">
          <div className="mainListItemsTodo">
            {filteredTodos.map((item) => (
              <div key={item.id} className="listItems">
                {item.status ? (
                  <p className="truncate">{item.title}</p>
                ) : (
                  <p className="buttonLine">{item.title}</p>
                )}

                {edit == item.id ? (
                  <div className="threeButtons">
                    <button onClick={() => saveTodo(item.id)}>
                      {" "}
                      Сохранить
                    </button>
                  </div>
                ) : (
                  <div className="threeButtons">
                    <button
                      onClick={() => deleteTodo(item.id)}
                      style={{
                        background: "#E75480",
                        WebkitBorderRadius: "10%",
                      }}
                    >
                      Удалить
                    </button>
                    <button
                      onClick={() => editTodo(item.id, item.title)}
                      style={{ WebkitBorderRadius: "10%" }}
                    >
                      Редактировать
                    </button>
                    {item.status ? (
                      <button
                        onClick={() => statusTodo(item.id)}
                        style={{
                          background: "#7fff00",
                          WebkitBorderRadius: "10%",
                        }}
                      >
                        Выполнена
                      </button>
                    ) : (
                      <button onClick={() => statusTodo(item.id)}>
                        Не Выполнена
                      </button>
                    )}
                    {/* <button onClick={() => statusTodo(item.id)}>Выполнена</button> */}
                  </div>
                )}
              </div>
            ))}
          </div>
          {edit ? (
            <div className="mainListItemsEdit">
              <div className="threeButtons">
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>

              <button onClick={() => saveTodo(edit)}> Сохранить</button>
            </div>
          ) : (
            <div className="mainListItemsEdit"></div>
          )}
        </div>
      </div>
    </>
  );
}
export default TodoList;
