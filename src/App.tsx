import React, { useState } from "react";
import "./App.css";
import { Accordion } from "./components/Accordion/Accordion";
import { OnOff } from "./components/OnOff/OnOff";
import { Rating } from "./components/Rating/Rating";
import { Example1 } from "./components/ReactMemo/ReactMemo";
import { Select } from "./components/Select/Select";
import { UncontrolledAccordion } from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UseEffect, { SetTimeoutExample } from "./components/useEffect/useEffect";
import UseMemo, { ReactMemoHelper, UseCallbackAlike } from "./components/UseMemo/UseMemo";
import { UseState } from "./components/useState/useState";

function App() {
  const [rate, setRate] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isOn, setIsOn] = useState<boolean>(false);

  const [accordionItems, setAccordionItems] = useState([
    { title: "123", value: 1 },
    { title: "321", value: 2 },
    { title: "413", value: 3 },
  ]);

  const onClick = (value: any) => {
    console.log(value);
  };

  return (
    <>
      {/* <AppTitle title={"this is app component"} />
      <Rating rate={rate} setRate={setRate} />
      <UncontrolledRating/>
      <Accordion
        title={"Menu"}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        items={accordionItems}
        onClick={onClick}
      />
      <UncontrolledAccordion title={'Menu'}/>
      <UncontrolledAccordion title={'Users'}/>
      <OnOff isOn={isOn} setIsOn={setIsOn} />
      <OnOff isOn={isOn} setIsOn={setIsOn} />
      <Select value={accordionItems[2].title} onChange={() => {}} items={accordionItems} />
      <Example1/> */}
      {/* <UseMemo/> */}
      {/* <ReactMemoHelper/> */}
      {/* <UseCallbackAlike /> */}
      {/* <UseState/> */}
      <SetTimeoutExample/>
    </>
  );
}

type AppTitlePropsType = {
  title: string;
};

function AppTitle(props: AppTitlePropsType) {
  return <div>{props.title}</div>;
}

export default App;
