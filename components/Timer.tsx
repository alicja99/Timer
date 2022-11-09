import React, { useMemo } from "react";
import { Text, ViewStyle } from "react-native";
import { formatTimerInfo } from "../utils/formatTimerInfo";

type Props = {
  style?: ViewStyle;
  lastSeen: number;
};

export const Timer = ({ lastSeen, style }: Props) => {
  const nowTimestamp = Date.now();

  const info = useMemo(
    () => formatTimerInfo(lastSeen, nowTimestamp),
    [lastSeen, nowTimestamp]
  );

  return <Text style={style}>{info}</Text>;
};
