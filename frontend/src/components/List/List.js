import React from 'react';
import Entry from '../Entry/Entry';
import './List.css';

const List = ({ entries, deleteEntry, updateEntry }) => {
  return (
    <div className="list-container">
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        entries.map((entry) => (
          <Entry
            key={entry.id}
            entry={entry}
            deleteEntry={deleteEntry}
            updateEntry={updateEntry}
          />
        ))
      )}
    </div>
  );
};

export default List;
