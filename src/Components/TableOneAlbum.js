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

const style = {margin: 5};

const TableOneAlbum = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>user ID</TableHeaderColumn>
        <TableHeaderColumn>Id</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>

      <TableRow>

        <TableRowColumn>{props.oneAlbum.userId}</TableRowColumn>
        <TableRowColumn>{props.oneAlbum.id}</TableRowColumn>
        <TableRowColumn>{props.oneAlbum.title}</TableRowColumn>

      </TableRow>
      
    </TableBody>
  </Table>
);

export default TableOneAlbum;

TableOneAlbum.propTypes = {
  oneAlbum: PropTypes.object.isRequired
}
