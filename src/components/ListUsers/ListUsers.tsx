import React from 'react';
import './ListUsersStyle.css';

export class ListUsers extends React.Component<any, any> {
  render() {
    return (
      <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Instrument</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
        <tr>
          <td>John Lennon</td>
          <td>Rhythm Guitar</td>
        </tr>
        <tr>
          <td>Paul McCartney</td>
          <td>Bass</td>
        </tr>
        <tr>
          <td>George Harrison</td>
          <td>Lead Guitar</td>
        </tr>
        <tr>
          <td>Ringo Starr</td>
          <td>Drums</td>
        </tr>
      </tbody>
    </table>
    );
  }
}
