import { ADD_JOB, CLOSE_JOB, MODIFY_JOB, OPEN_JOB} from "../Action/Types"



const initialState =
  [{
    status: 'open',
    id: Math.round(Math.random() * 1000),
    title: 'Developpeur full stack JS',
    city: 'Sousse',
    companyId: 1,
    date_expiration: 'Dec 04',
    date: 'Nov 04',

    company: 'Chifco',
    open_position: '5',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    status: 'open',
    id: Math.round(Math.random() * 1000),
    title: 'Developpeur Web',
    city: 'Tunis',
    company: 'Connect',
    date: 'Nov 04',
    companyId: 1,
    date_expiration: 'Dec 04',
    open_position: '10',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    status: 'closed',
    id: Math.round(Math.random() * 1000),
    title: 'Developpeur Web',
    city: 'Sousse',
    company: 'Chifco',
    date: 'Nov 25',
    companyId: 1,
    date_expiration: 'Dec 25',
    open_position: '3',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    status: 'open',
    id: Math.round(Math.random() * 1000),
    title: 'Developpeur Frontend React JS',
    city: 'Sousse',
    company: 'Inova Robotic',
    date: 'Nov 30',
    companyId: 3,
    date_expiration: 'Dec 30',
    open_position: '2',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  }
  ]



const JobReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_JOB:
      return [...state, action.payload]
    case MODIFY_JOB:
      return state.map(el => el.id === action.payload.id ? action.payload : el)
    case CLOSE_JOB:
      return state.map(el => el.id === action.payload ? {...el, status: "closed"} : el)
    case OPEN_JOB:
      return state.map(el => el.id === action.payload ? {...el, status: "open"} : el)
    default:
      return state
  }
}



export default JobReducers;