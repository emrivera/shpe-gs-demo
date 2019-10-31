import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import './index.scss';

function SubmitableCard({ headerButtonText, onSubmit, onCancel, children }) {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(false);
    onSubmit();
  };

  const handleCancel = () => {
    setShow(false);
    onCancel();
  };

  const renderCard = () => {
    if (!show) {
      return null;
    }
    return (
      <Card className="Card">
        <CardContent className="Content">
          {children}
          <div className="Buttons">
            <Button onClick={handleSubmit} variant="contained" color="primary">
              Submit
            </Button>
            <Button onClick={handleCancel} variant="contained" color="secondary">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="SubmitableCard">
      <Button
        className="HeaderButton"
        variant="contained"
        color="primary"
        onClick={() => {
          setShow(true)
        }}
        disabled={show}
      >
        {headerButtonText}
      </Button>
      {renderCard()}
    </div>
  );
}

SubmitableCard.propTypes = {
  headerButtonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};

SubmitableCard.defaultProps = {
  headerButtonText: 'Open',
  onCancel: () => {}
};

export default SubmitableCard;