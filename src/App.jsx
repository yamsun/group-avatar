import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import GroupAvatar from './components/GroupAvatar';

const sampleIconsList = [
  {
    id: '1',
    name: 'Alice',
    icon: 'https://avatar.iran.liara.run/public/10',
    AvtarColor: '#ff0000',
  },
  {
    id: '2',
    name: 'Bob',
    icon: 'https://avatar.iran.liara.run/public/20',
    AvtarColor: '#00ff00',
  },
  {
    id: '3',
    name: 'Charlie',
    icon: 'https://avatar.iran.liara.run/public/30',
    AvtarColor: '#0000ff',
  },
  {
    id: '4',
    name: 'Dave',
    icon: 'https://avatar.iran.liara.run/public/40',
    AvtarColor: '#ffff00',
  },
  {
    id: '5',
    name: 'Eve',
    icon: 'https://avatar.iran.liara.run/public/50',
    AvtarColor: '#ff00ff',
  },
];

function App() {
  return (
    <>
      <div>
        <h3>Group Avatar</h3>
        <GroupAvatar
          iconsList={sampleIconsList}
          show={true}
          max={3}
          separated={true}
          size="l"
        />
        <GroupAvatar
          iconsList={sampleIconsList}
          show={true}
          max={4}
          separated={false}
          size="m"
        />
        <GroupAvatar
          iconsList={sampleIconsList}
          show={true}
          max={5}
          separated={true}
          size="s"
        />
        <GroupAvatar
          iconsList={sampleIconsList}
          show={true}
          max={6}
          separated={false}
          size="xs"
        />
        <GroupAvatar
          iconsList={sampleIconsList}
          show={true}
          max={5}
          separated={true}
          size="xs"
        />
      </div>
    </>
  );
}

export default App;
