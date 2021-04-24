import React from "react";

export class Pdf extends React.PureComponent {
  render() {
    return (
      <div className="pt-2 pl-2">
        <div className="success text-center">
          <img src="/images/success.png" width={70} height={70} alt="Success" />
          <h1 className="transfer-status mt-3">Transfer Success</h1>
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-5">
          <span>Amount</span>
          <p className="mt-2">{this.props.amount}</p>
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-3">
          <span>Balance Left</span>
          <p className="mt-2">{this.props.balanceLeft}</p>
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-3">
          <span>Date & Time</span>
          {this.props.date !== undefined && (
            <p className="mt-2">{this.props.date}</p>
          )}
        </div>
        <div className="details pt-3 pb-1 pl-3 mt-3">
          <span>Notes</span>
          <p className="mt-2">{this.props.notes}</p>
        </div>
        <h1 className="mt-4">Transfer To</h1>
        <div className="users d-flex align-items-center py-3 pl-3 mt-4">
          <div className="image">
            {this.props.image !== undefined && (
              <img
                src={this.props.image}
                width={70}
                height={70}
                alt="User"
                className="user"
              />
            )}
          </div>
          <div className="profile d-flex flex-column ml-3 pr-1">
            <span className="name">{this.props.fullName}</span>
            <span className="number mt-1">{this.props.phoneNumber}</span>
          </div>
        </div>
      </div>
    );
  }
}
