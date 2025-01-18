import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const getFilterdData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    ); // toLowerCase로 소문자 변환 후 비교를 통해 검색에 대소문자 구분 X 시킴
  };

  const filterdTodos = getFilterdData(); // 이렇게 상수로 저장해줘야 밑에서 map메소드 쓸 수 있음

  return (
    <div className="List">
      <h4>Todo List ✨</h4>
      <input
        value={search}
        onChange={onChangeHandler}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filterdTodos.map((todo) => {
          // todo라는 매개변수 사용
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
