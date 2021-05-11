import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  return (
    <>
      {props.isModal ? (
        <button
          type={props.type}
          className={props.className}
          onClick={props.onClick}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          {props.children}
        </button>
      ) : props.isDismiss ? (
        <button
          type={props.type}
          className={props.className}
          onClick={props.onClick}
          data-dismiss="modal"
        >
          {props.children}
        </button>
      ) : props.isNavbar ? (
        <button
          type={props.type}
          className={props.className}
          onClick={props.onClick}
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {props.children}
        </button>
      ) : (
        <button
          type={props.type}
          className={props.className}
          onClick={props.onClick}
          disabled={props.disabled}
        >
          {props.children}
        </button>
      )}
    </>
  );
}

Button.propTypes = {
  className: propTypes.string,
  type: propTypes.string,
  onClick: propTypes.func,
  isModal: propTypes.bool,
  isDismiss: propTypes.bool,
  isNavbar: propTypes.bool,
};
