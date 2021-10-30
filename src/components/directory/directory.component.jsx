import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProp = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProp)(Directory);
