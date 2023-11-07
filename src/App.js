import { useState } from 'react'

import Card from './components/Card'
import Container from './components/Container'

import UserForm from './components/UserForm'

function App() {
  const [users, setUsers] = useState([])

  const submit = user => {
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <ul>
            {users.map(user => <li key={user.email} style={{padding: 10}}>{`${user.name} ${user.lastName}: ${user.email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App