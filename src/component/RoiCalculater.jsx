import React from "react";
import "../component/RoiCalculater.css";
import { RxCross1 } from "react-icons/rx";

import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const RoiCalculater = () => {
  return (
    <div className="main-div">
      <div className="second-maindiv">
        <div className="first-div">
          <h1>ROI Calculater</h1>
          <RxCross1 className="cross-icon" />
        </div>

        <div className="cake-usd">
          <div className="cake">
            <img
              src="https://s3-alpha-sig.figma.com/img/f684/eec0/602b5d578e93a6dbe40819a3407b326b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gxeebDDwGVRUK9qJsiZk4kUQzy56RibQPlkts-Ln8BFpxjrbxHMg2EpqA0sIpPkP~zjlQ5lkTrewE64GpZIZx8fHkJ-gAHA9xBuO70zxSG0JvHjc9D0KfjmeKRhT~0IWCTTo3HhiBKkwArOK2ar6EnDQZoBKb6v9w7RwI475qx9h~U~0b4qdmmAuztwdKC3Zit~-oSOy73nPm0AaKhZ7uSFZF~qN8hW3nbTDzJHuG6HoQCITbbn0nJC5ln63U9Ef9GymUZEd30KbCG4ccZifnpZvI3AYbd4tRHHSUBYAtrob8kUbhu1m3c30vSJfO7uyi29Xm7S8Ptl03eBTfjMd3A__"
              alt=""
            />
            <h1>Cake</h1>
          </div>
          <div className="usd">
            <label class="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>

            <h1>USD</h1>
          </div>
        </div>

        <div className="cakeblnc">
          <div className="CAKE2">
            <h1>2.10000 CAKE</h1>
          </div>
          <h1 className="emtyh1">Nice</h1>
          <div className="usebalance">
            <div className="usebalance1">
              <span>USE BALANCE</span>
            </div>
            <div className="usebalance2">
              <span>$1000</span>
            </div>
            <div className="usebalance2">
              <span>$100</span>
            </div>
            <div className="usebalance-last">
              <div className="usebalance4">
                <span>~$20.82</span>
              </div>
            </div>
          </div>
        </div>

        <div className="timerframe">
          <h1>Timeframe</h1>
        </div>
        <div className="days">
          <div className="div">
            <span className="first-day">1 Day</span>
          </div>
          <div className="div">
            <span className="span">7 Days</span>
          </div>
          <div className="div">
            <span className="span">30 Days</span>
          </div>
          <div className="div">
            <span className="span">1 Year</span>
          </div>
          <div>
            <span className="span">5 Year</span>
          </div>
        </div>
        <div className="apy">
          <h3>Enable Accelerated APY</h3>
          <label class="switch2">
              <input type="checkbox" />
              <span className="slider2 round2"></span>
            </label>
        </div>

        <div className="tier">
          <h4>Select Tier</h4>
        </div>

        <div className="tier-lavel">
          <div className="div">
            <span className="span">Tier 1</span>
          </div>
          <div className="div">
            <span className="span">Tier 2</span>
          </div>
          <div className="div">
            <span className="span">Tier 3</span>
          </div>
          <div className="div">
            <span className="tier4">Tier 4</span>
          </div>
          <div>
            <span className="span">Tier 5</span>
          </div>
        </div>
        <div className="currentrate">ROI at Current Rates</div>
        <div className="hundred-doller">
          <MdOutlineModeEditOutline className="pencil" />
          <h1>100.0 USD</h1>
        </div>
        <div className="cake-10">~3 CAKE + 10 DON</div>
        <div className="buttons">
          <button className="btn1">Apply</button>
          <button className="btn2">Cancel</button>
        </div>
        <div className="hide-details">
          <h4>Hide Details</h4>
          <MdOutlineKeyboardArrowDown className="arrow-down" />
        </div>
        <div className="lastapy">
          <h4>APY</h4>
          <h3>63.34%</h3>
        </div>
        <ul>
          <li>Calculated based on current rates</li>
          <li>
            All fugures are estimates provided for your convenience only, and by
            no means represent guaranted returns.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoiCalculater;
