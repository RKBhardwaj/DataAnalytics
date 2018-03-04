import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';

class DataGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      height: '300px',
      tableData: props.tableData,
      columnData: props.columnData
    };
  }

  render() {
    const rowId = '_id';
    const {
      fixedHeader,
      height,
      showRowHover,
      stripedRows,
      tableData,
      columnData
    } = this.state;
    const adjustForCheckbox = false;
    return (
      <Table height={height} fixedHeader={fixedHeader}>
        <TableHeader
          adjustForCheckbox={adjustForCheckbox}
          displaySelectAll={adjustForCheckbox}
        >
          <TableRow>
            {
              columnData.map(({ text, title }, index) => (
                <TableHeaderColumn key={index} tooltip={title}>{text}</TableHeaderColumn>
              ))
            }
          </TableRow>
        </TableHeader>
        <TableBody
          showRowHover={showRowHover}
          stripedRows={stripedRows}
          displayRowCheckbox={adjustForCheckbox}
        >
          {
            tableData.map(row => (
              <TableRow key={row[rowId]}>
                <TableRowColumn title={row.username}>{row.username}</TableRowColumn>
                <TableRowColumn title={row.email}>{row.email}</TableRowColumn>
                <TableRowColumn>{JSON.parse(row.roles.join(', '))}</TableRowColumn>
                <TableRowColumn>
                  <div>
                    <button title="Edit User">
                      <EditorModeEdit />
                    </button>
                    <button title="Delete User">
                      <ActionDelete />
                    </button>
                  </div>
                </TableRowColumn>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    );
  }
}

export default DataGrid;
