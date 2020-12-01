import React, {useMemo, useState, useEffect} from 'react';
import {Checkbox} from '@material-ui/core';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/DeleteSweep';
import EditIcon from '@material-ui/icons/Edit';
import Table from './Table';
import './App.css';

const Genres = ({values}) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className='badge'>
            {genre}
          </span>
        );
      })}
    </>
  );
};

function App() {
  const [data, setData] = useState([]);
  const columns = useMemo(
    () => [
      {
        Header: 'TV Show',
        columns: [
          {
            Header: 'Name',
            accessor: 'show.name',
          },
          {
            Header: 'Type',
            accessor: 'show.type',
          },
        ],
      },
      {
        Header: 'Details',
        columns: [
          {
            Header: 'Language',
            accessor: 'show.language',
          },
          {
            Header: 'Genre(s)',
            accessor: 'show.genres',
            Cell: ({cell: {value}}) => <Genres values={value} />,
          },
          {
            Header: 'Runtime',
            accessor: 'show.runtime',
            Cell: ({cell: {value}}) => {
              const hour = Math.floor(value / 60);
              const min = Math.floor(value % 60);
              return (
                <>
                  {hour > 0 ? `${hour} hr${hour > 1 ? 's' : ''} ` : ''}
                  {min > 0 ? `${min} min${min > 1 ? 's' : ''}` : ''}
                </>
              );
            },
          },
          {
            Header: 'Status',
            accessor: 'show.status',
          },
          {
            Header: 'Delete',
            id: 'delete',
            accessor: 'show.delete',

            Cell: (tableProps) => (
              <span
                style={{
                  cursor: 'pointer',
                  color: 'black',
                  textDecoration: 'underline',
                }}
                onClick={() => {
                  // ES6 Syntax use the rvalue if your data is an array.
                   const dataCopy = [...data];

                  // It should not matter what you name tableProps. It made the most sense to me.
                  // let new_data = dataCopy.splice(tableProps.row.index, 1);
                  alert('deleted ' + tableProps.row.index + ' row');
                  // console.log(tableProps.row.index);
                  dataCopy.filter(
                    (e) => tableProps.row.index !== e.tableProps.row.index,
                  );
                 
                    // Array.prototype.filter returns new array
                    // so we aren't mutating state here
                    // const arrayCopy =dataCopy.filter((row) => row.id !== rowId);
                   
                  setData(dataCopy);
                }}>
                <DeleteIcon style={{color:"#cf2331" , marginLeft:"20px"}}/>
              </span>
            ),
          },
          {
            Header: <EditIcon/>,
            accessor: 'show.edit',
          },
        ],
      },
    ],
    [],
  );

  useEffect(() => {
    (async () => {
      const result = await axios('https://api.tvmaze.com/search/shows?q=snow');
      setData(result.data);
    })();
  }, []);

  return (
    <div className='App'>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
