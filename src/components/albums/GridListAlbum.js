import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PropTypes from 'prop-types';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  }
};

const GridListAlbum = (props) => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.photosOfAnAlbum.map((imgURL, index) => (
        <GridTile
          key={index}
            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" />
          </IconButton>}
        >
          <img src={imgURL} alt=""/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListAlbum;

GridListAlbum.propTypes = {
  photosOfAnAlbum: PropTypes.array.isRequired
}
