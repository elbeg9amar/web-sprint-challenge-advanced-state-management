import React, {useState} from 'react'


const initialValue = {
    name:'',
    age: '',
    height:'',
    id:''

}
const SmurfInputs = ({postData}) => {
const [input,setInput] = useState(initialValue)

const onChange = e => {
    const {name, value} = e.target
    setInput({...input, [name]:value})
 }

 const onSubmit = (e) => {
     e.preventDefault()
     const newSmurf = {
         name: input.name.trim(),
         age: input.age,
         height: input.height,
         id:  Date()
     }
     postData(newSmurf)
     setInput(initialValue)
 }


    return (
        <div>
            <h2>Add Your Smurfs</h2>
            <form onSubmit={onSubmit}>
                Name:&nbsp;
                <input 
                     type="text"
                     name="name"
                     placeholder="name"
                     value={input.name}
                     onChange={onChange}
                />
                Age:&nbsp;
                <input 
                     type="text"
                     name="age"
                     placeholder="number"
                     value={input.age}
                     onChange={onChange}
                />
                Height:&nbsp;
                <input 
                     type="text"
                     name="height"
                     placeholder="number"
                     value={input.height}
                     onChange={onChange}
                />
                <button> Add </button>
            </form>
        </div>
    )
}

export default SmurfInputs