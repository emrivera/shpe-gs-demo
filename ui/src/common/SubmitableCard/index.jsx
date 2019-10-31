import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import './index.scss';

/**
 *
 * @param headerButtonText - Text to display on the top button before opening
 * @param onSubmit - callback called when submit button is pressed
 * @param onCancel - callback called when cancel button is pressed
 * @param onShow - callback called when card is displaying children components
 * @param children - children to render
 * @returns SubmitableCard component
 */
function SubmitableCard({ headerButtonText, onSubmit, onCancel, onShow, children }) {
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    setShow(false);
    onSubmit();
  };

  const handleCancel = () => {
    setShow(false);
    onCancel();
  };

  useEffect(() => {
    if (show) {
      // Call onShow callback to let parent component know that the children are now visible
      onShow(show);
    }
    // For the purpose of this presentation,
    // We are ignoring the eslint warning for not adding 'onShow' to the dependency array
    // In practice, adding onShow to the dependency array is the correct solution,
    // If this causes too many calls to onShow due to 'onShow' itself changing from parent re-rendering
    // Consider wrapping 'onShow' from the parent using 'useCallback'
    // https://reactjs.org/docs/hooks-reference.html#usecallback
    // eslint-disable-next-line
  }, [show]);

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
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onShow: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired
};

SubmitableCard.defaultProps = {
  headerButtonText: 'Open',
  onSubmit: () => {},
  onCancel: () => {},
  onShow: () => {}
};

export default SubmitableCard;