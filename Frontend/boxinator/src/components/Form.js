import { useState } from "react"
import hexRgb from 'hex-rgb';
import {
    Link
} from "react-router-dom";

const Form = () => {
    let [name, setName] = useState("")
    let [weight, setWeight] = useState("")
    let [colour, setColour] = useState("#000000")
    let [country, setCountry] = useState("1")
    let box;

    let id = Math.floor(Math.random() * 100)
    const submit = (e) => {
        e.preventDefault();
        let color = hexRgb(colour, { format: "css" })
        box = { id, name, weight, colour: color, country }
        componentDidMount(box)
        alert("Added box successfully")
        setName("")
        setWeight("")
        setColour("#000000")
        setCountry("1")
    }

    const componentDidMount = (box) => {
        console.log(box)
        fetch("http://localhost:8080/addbox", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000/'
            },
            body: JSON.stringify(box)
        })
    }

    return (
        <form className="container" onSubmit={submit}>
            <div className="form__group field">
                <input type="input" className="form__field" placeholder="receiver name" name="name" id='name' required
                    value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="name" className="form__label">Name</label>
            </div>
            <div className="form__group field">
                <input type="number" className="form__field" placeholder="weight in kilograms" name="name" id='name' required
                    value={weight} onChange={(e) => setWeight(e.target.value)} min="0" />
                <label htmlFor="name" className="form__label" >Weight</label>

            </div>
            <label>Box Colour</label><br />
            <div className="colourPicker">
                <input type="color" id="favcolor" name="favcolor"
                    value={colour} onChange={(e) => setColour(e.target.value)}></input><br />
            </div>
            <br />
            <label>Country</label><br />
            <div className="select">
                <select name="slct" id="slct" value={country} onChange={(e) => setCountry(e.target.value)}>
                    <option value="1">Sweden</option>
                    <option value="2">China</option>
                    <option value="3">Brazil</option>
                    <option value="4">Australia</option>
                </select>
            </div>
            <div>
                <button className="btn" type="submit" > Add Box </button>
            </div>
            <Link to="/listboxes">
                <button className="btn" type="button">
                    List Boxes
                </button>
            </Link>

        </form>
    )
}

export default Form
