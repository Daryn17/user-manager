import { useState } from "react"

const useForm = (inicial) => {
  const [user, setForm] = useState(inicial)
  const handleChange = (e) => {
    setForm({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setForm(inicial)
  }

  return [user, handleChange, reset]
}

export default useForm