import { useEffect } from "react";
import { useState } from "react"

function shippingCost(country, weight) {
    let cost;
    switch (country) {
        case '1':
            cost = (1.3 * weight).toFixed(2)
            return cost;
        case '2':
            cost = (4.0 * weight).toFixed(2)
            return cost;

        case '3':
            cost = (8.6 * weight).toFixed(2)
            return cost;

        case '4':
            cost = (7.2 * weight).toFixed(2)
            return cost;
        default:
            break;
    }
}

function Table() {
    let [data, setData] = useState([])
    const fetchData = () => {
        return fetch("http://localhost:8080/listboxes")
            .then((response) => response.json())
            .then((data) => setData(data));
    }
    
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="container1">
            <h2>Dispatches</h2>
            <table>
                <thead>
                    <tr>
                        <th>Receiver</th>
                        <th>Weight</th>
                        <th>Box colour</th>
                        <th>Shipping cost</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((data) => {
                        console.log(data)
                        return (
                            <tr>
                                <td>{data.name}</td>
                                <td>{data.weight} kilograms</td>
                                <td style={{ backgroundColor: data.colour.replace(/\s\s/g, ',') }}></td>
                                <td>{shippingCost(data.country, parseInt(data.weight))} SEK</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
