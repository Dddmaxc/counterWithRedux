import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applySettings,
  setMaxValue,
  setStartValue,
} from "../../state/reduxToolkit";
import { RootState } from "../../state/store";
import { SuperButton } from "../button/SuperButton";
import s from "./Settings.module.css";

export const Settings = () => {
  const { startValue, maxValue } = useSelector(
    (state: RootState) => state.counter
  );
  const dispatch = useDispatch();

  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setStartValue(Number(e.currentTarget.value)));
  };

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValue(Number(e.currentTarget.value)));
  };

  return (
    <div className={s.container}>
      <div>
        <span className={s.span}>Max value:</span>
        <input
          className={s.input}
          value={maxValue}
          type="number"
          onChange={onChangeMaxValue}
        />
      </div>
      <div>
        <span className={s.span}>Start value:</span>
        <input
          className={s.input}
          value={startValue}
          type="number"
          onChange={onChangeStartValue}
        />
      </div>
      <div>
        <SuperButton onClick={() => dispatch(applySettings())} title="Set" />
      </div>
    </div>
  );
};
