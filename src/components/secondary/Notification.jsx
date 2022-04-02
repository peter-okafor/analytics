import { Badge } from "antd";
import { Icon } from "../primary/Icon";

const Notification = ({
  count
}) => {
  return (
    // TODO: add popover for the notifications
    <Badge count={count} offset={[10, 9]}>
      <Icon icon="bell" width={21} height={21} block={true} style={{color: "#A3A3C2"}} />
    </Badge>
  )
};

export default Notification;