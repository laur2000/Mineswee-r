import { CSSProperties, PropsWithChildren } from "react";
import { Card, CardProps } from "antd";

const cardStyle: CSSProperties = {
  borderRadius: "4px",
  boxShadow: "0px 0px 16px 5px rgba(208, 216, 243, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Container = (props: PropsWithChildren<CardProps>) => {
  return <Card style={cardStyle} {...props} />;
};

export default Container;
