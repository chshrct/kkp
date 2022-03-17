import { Dispatch, useReducer } from "react";
import { ActionType, reducer, TOGGLE_COLLAPSED } from "./reducer";

type AccordionPropsType = {
  title: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  //   const [collapsed, setCollapsed] = useState(false);
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <>
      <AccordionTitle
        title={props.title}
        onClick={dispatch}
        collapsed={state.collapsed}
      />
      {!state.collapsed && <AccordionBody />}
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
  onClick: Dispatch<ActionType>;
  collapsed: boolean;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => props.onClick({ type: TOGGLE_COLLAPSED })}>
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
