import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { increment, reset } from "../../state/reduxToolkit";
import { SuperButton } from "../button/SuperButton";
import s from "./Screen.module.css";

export const ScreenMain = React.memo(() => {
  const { value, error, disabled } = useSelector(
    (state: RootState) => state.counter
  );
  const dispatch = useDispatch();

  return (
    <div className={disabled ? "" : s.disable}>
      <div className={s.container}>
        <div className={s.mainScreen}>{error ? "Error" : value}</div>
        <div className={s.containerOfButtons}>
          <SuperButton onClick={() => dispatch(increment())} title="inc" />
          <SuperButton onClick={() => dispatch(reset())} title="reset" />
        </div>
      </div>
    </div>
  );
});
