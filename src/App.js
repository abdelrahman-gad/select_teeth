import './App.css';
import Units from './components/Units';



function App() {
  let units =[
    {
      "id": 1,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 1,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 2,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 2,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 3,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 3,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 4,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 4,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 5,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 5,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 6,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 6,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 7,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 7,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 8,
      "direction": "LEFT",
      "level": "UPPER",
      "order": 8,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 9,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 1,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 10,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 2,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 11,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 3,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 12,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 4,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 13,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 5,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 14,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 6,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 15,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 7,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 16,
      "direction": "RIGHT",
      "level": "UPPER",
      "order": 8,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 17,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 1,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 18,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 2,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 19,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 3,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 20,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 4,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 21,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 5,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 22,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 6,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 23,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 7,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 24,
      "direction": "LEFT",
      "level": "LOWER",
      "order": 8,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 25,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 1,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 26,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 2,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 27,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 3,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 28,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 4,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 29,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 5,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 30,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 6,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 31,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 7,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  },
  {
      "id": 32,
      "direction": "RIGHT",
      "level": "LOWER",
      "order": 8,
      "deleted_at": null,
      "created_at": "2023-03-07T22:00:23.000000Z",
      "updated_at": "2023-03-07T22:00:23.000000Z"
  }
];

   return (
    <div className="App">
     <Units   units={units}  />
    </div>
  );
}

export default App;
