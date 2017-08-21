import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';

const style = {margin: 5};

const TableImages = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Image ID</TableHeaderColumn>
        <TableHeaderColumn>Image URL</TableHeaderColumn>
        <TableHeaderColumn>Image</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.photosOfAnAlbum.map((imageURL, index) =>(
      <TableRow key={index}>

        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{imageURL}</TableRowColumn>
        <TableRowColumn>
          <Avatar
          src={imageURL}
          size={30}
          style={style}
          />
        </TableRowColumn>
      </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default TableImages;

TableImages.propTypes = {
  photosOfAnAlbum: PropTypes.array.isRequired
}
