import { useState } from "react";

type ItemType = {
  title: string;
  value: any;
};

type SelectPropsType = {
  value: string;
  onChange: (value: any) => void;
  items: ItemType[];
};

export const Select: React.FC<SelectPropsType> = (props) => {
  const [selectValue, setSelectValue] = useState(props.value);
  const [collapsed,setCollapsed] = useState(false)
  return (
    <div>
      <div onClick={()=>setCollapsed(!collapsed)}>{selectValue}</div>
      {!collapsed && <ul>
          {props.items.map(item=><li key={item.value} onClick={()=>setSelectValue(item.title)}>{item.title}</li>)}
      </ul>}
    </div>
  );
};
