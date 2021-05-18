import React from "react";

import style from "./status.module.css";

export class Pdf extends React.PureComponent {
  render() {
    return (
      <div className="pt-2 pl-2">
        <div className="text-center">
          <img src="/images/success.png" width={70} height={70} alt="Success" />
          <h1 className={[style["main"], ["mt-3"]].join(" ")}>
            Transfer Success
          </h1>
        </div>
        <div className={[style["details"], ["pt-3 pb-1 pl-3 mt-5"]].join(" ")}>
          <span className={style["span"]}>Amount</span>
          <p className={[style["paragraf"], ["mt-2"]].join(" ")}>
            {this.props.amount}
          </p>
        </div>
        <div className={[style["details"], ["pt-3 pb-1 pl-3 mt-3"]].join(" ")}>
          <span className={style["span"]}>Balance Left</span>
          <p className={[style["paragraf"], ["mt-2"]].join(" ")}>
            {this.props.balanceLeft}
          </p>
        </div>
        <div className={[style["details"], ["pt-3 pb-1 pl-3 mt-3"]].join(" ")}>
          <span className={style["span"]}>Date & Time</span>
          {this.props.date !== undefined && (
            <p className={[style["paragraf"], ["mt-2"]].join(" ")}>
              {this.props.date}
            </p>
          )}
        </div>
        <div className={[style["details"], ["pt-3 pb-1 pl-3 mt-3"]].join(" ")}>
          <span className={style["span"]}>Notes</span>
          <p className={[style["paragraf"], ["mt-2"]].join(" ")}>
            {this.props.notes}
          </p>
        </div>
        <h1 className={[style["heading"], ["mt-4"]].join(" ")}>Transfer To</h1>
        <div
          className={[
            style["users"],
            ["d-flex align-items-center py-3 pl-3 mt-4"],
          ].join(" ")}
        >
          <div className={style["image"]}>
            {this.props.image !== undefined && (
              <img
                src={this.props.image}
                width={70}
                height={70}
                alt="User"
                className={style["user"]}
              />
            )}
          </div>
          <div
            className={[
              style["profile"],
              ["d-flex flex-column ml-3 pr-1"],
            ].join(" ")}
          >
            <span className={style["name"]}>{this.props.fullName}</span>
            <span className={[style["number"], ["mt-1"]].join(" ")}>
              {this.props.phoneNumber}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
