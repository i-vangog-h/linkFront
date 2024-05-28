import React from 'react';
import LinkItem from './linkItem';

const LinksList = ({ links }) => {
  return (<>
    { links.length > 0 && (
    <table>
        <thead>
          <tr className='headerRow'>
              <th>ID</th>
              <th>Original URL</th>
              <th>Hash</th>
              <th>Created at</th>
              <th>Access count</th>
          </tr>
        </thead>
        <tbody>
          {links.map(link => (
            <LinkItem key={link.id} link={link} />
          ))}
        </tbody>
    </table>)
    } 

    { links.length == 0 && <div className='errorBlock'>
        no links were found
    </div>}

    </>
  );
};

export default LinksList;
