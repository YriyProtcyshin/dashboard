import "./Widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import data from "../../widgetData.json";

const Widget = ({ type }) => {
  let icon;

  switch (type) {
    case "users":
      icon = (
        <PersonOutlinedIcon
          className="icon"
          style={{ backgroundColor: "blue" }}
        />
      );
      break;
    case "order":
      icon = (
        <ShoppingCartCheckoutOutlinedIcon
          className="icon"
          style={{ backgroundColor: "pink" }}
        />
      );
      break;
    case "erarning":
      icon = (
        <MonetizationOnOutlinedIcon
          className="icon"
          style={{ backgroundColor: "rgba(255, 0, 255, 0.54)" }}
        />
      );
      break;
    case "balance":
      icon = (
        <AccountBalanceWalletOutlinedIcon
          className="icon"
          style={{ backgroundColor: "rgba(245, 212, 0, 1)" }}
        />
      );
      break;
    default:
      break;
  }

  const positive = data[0][type]["def"] >= 0 ? "positive" :"negative";

  return (
    <div className="widget">
      <div className="left">
        <div className="title">{data[0][type]["title"]}</div>
        <div className="counter">
          {data[0][type]["isMoney"] && "$ "}
          {data[0][type]["count"]}{" "}
        </div>
        <div className="link">{data[0][type]["link"]}</div>
      </div>
      <div className="right">
        <div className={`persentage ${positive}`}>
          <KeyboardArrowUpIcon className="arrow" />
          {data[0][type]["def"]}
        </div>
        {icon}
      </div>
    </div>
  );
};

export default Widget;
