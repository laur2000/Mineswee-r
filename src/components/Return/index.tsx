import { Button } from "antd";

const Return = () => {
  return <Button onClick={() => window.history.back()}>{"<-"}</Button>;
};

export default Return;
