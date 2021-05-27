import React from "react";
import PropTypes from "prop-types";

class ContestPreview extends React.Component {
  render() {
    return (
      <div className="contestPreview" onClick={this.handleClick}>
        <div className="category_name">{this.props.categoryName}</div>
        <div className="contest_name">{this.props.contestName}</div>
      </div>
    );
  }

  handleClick = () => {
    console.log(this.props.categoryName);
    console.log(this.props.contestName);
  };
}

ContestPreview.propTypes = {
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
};

export default ContestPreview;
