import React from 'react';
import { Table, Input } from 'reactstrap';

class ListTodo extends React.Component {
  render() {
    return (
      <Table borderless hover className="mt-4">
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>laksdjlaksjdlas</td>
            <td className="text-right">
              <Input type="checkbox" />
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default ListTodo;
