import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const GridListSubheaderAlbum = (props) => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      <Subheader>Photos</Subheader>
      {props.photosOfAnAlbum.map((imgURL, index) => (
        <GridTile
          key={index}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={imgURL} alt=""/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListSubheaderAlbum;

GridListSubheaderAlbum.propTypes = {
  photosOfAnAlbum: PropTypes.array.isRequired
}
