import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Popover from 'react-awesome-popover'

import styles from "./Actions.scss";

const Actions = ({ onDelete, onEdit }) => {

  return (
    <Fragment>
      <Popover
        arrow={false}
        placement="bottom-end"
        action="click"
        overlayColor="transparent"
      >
        <i className={classNames(styles.edit, "fas fa-ellipsis-v p-2")}></i>
        <div className="card">
          <div className="list-group">
            {/* <button
              className="list-group-item list-group-item-action py-2 px-3"
              onClick={() => onEdit()}
            >
              Edit
            </button> */}
            <button
              className="list-group-item list-group-item-action py-2 px-3"
              onClick={() => onDelete()}
            >
              Delete
            </button>
          </div>
        </div>
      </Popover>
    </Fragment>
  );
};


Actions.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
};


export default Actions;
