import { useState } from "react";
import s from "./Select.module.css";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value?: string;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select: React.FC<SelectPropsType> = (props) => {
  const initialValue = props.value ? props.value : props.items[0].title;
  const [selectValue, setSelectValue] = useState(initialValue);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={s.selectContainer}>
      <div className={s.select} onClick={() => setCollapsed(!collapsed)}>
        {selectValue}
      </div>
      {!collapsed && (
        <div className={s.options}>
          {props.items.map((item) => (
            <div key={item.value} onClick={() => setSelectValue(item.title)}>
              {item.title}
            </div>
          ))}
          </div>
      )}
    </div>
  );
};
