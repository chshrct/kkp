import React, { MouseEvent } from "react";

type ItemType = {
  title: string;
  value: any;
};

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
  items: ItemType[];
  onClick: (value: any) => void;
};

type AccordionBodyPropsType = {
  items: ItemType[];
  onClick: (value: any) => void;
};

export function Accordion(props: AccordionPropsType) {
  return (
    <>
      <AccordionTitle
        title={props.title}
        setCollapsed={() => props.setCollapsed(!props.collapsed)}
      />
      {!props.collapsed && (
        <AccordionBody items={props.items} onClick={props.onClick} />
      )}
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
  setCollapsed: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h3 onClick={props.setCollapsed}>{props.title}</h3>;
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index} onClick={() => props.onClick(item.value)}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}
