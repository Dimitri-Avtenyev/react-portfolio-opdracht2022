import { useState } from "react";

interface Student {
    name:       string,
    age:        number,
    year:       number
}

const Filtering = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [sortField, setSortField] = useState<string>("name");

    const students:Student[] = [
        {name: "Dimitri", age: 31, year: 2},
        {name: "Dirk", age: 29, year: 1},
        {name: "Jacob", age: 35, year: 2},
        {name: "Jan", age: 27, year: 3},
        {name: "Joris", age: 29, year: 2},
        {name: "Joris", age: 22, year: 3},
        {name: "Korneel", age: 24, year: 1},
        {name: "Mathias", age: 23, year: 3},
        {name: "Muhammad", age: 22, year: 3},
        {name: "Perneel", age: 23, year: 4},
        {name: "Piet", age: 25, year: 2}
    ]

    students.sort((a, b) => {
        if (sortField === "name" && a.name > b.name) {
            return 1;
        } else if (sortField === "age") {
            return a.age - b.age;
        } else if (sortField === "year") {
            return a.year - b.year;
        }
        return 0;
    });

    return (
        <div>
            <div>
                <label>Search: </label>
                <input type="text" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
            </div>
            <table style={{width: "100%", border: "solid 1px black"}}>
                <thead>
                    <tr style={{textAlign : "left"}}>
                        <th style={{fontWeight: sortField === "name" ? "bold" : "normal"}} onClick={(e) => {setSortField("name")}}>Name</th>
                        <th style={{fontWeight: sortField === "age" ? "bold" : "normal"}} onClick={(e) => {setSortField("age")}}>Age</th>
                        <th style={{fontWeight: sortField === "year" ? "bold" : "normal"}} onClick={(e) => {setSortField("year")}}>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {students.filter(student => student.name.toLowerCase().startsWith(searchText.toLowerCase())).map((student, index) => 
                       <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.year}</td>
                       </tr> 
                       )}
                </tbody>
            </table>
        </div>
    )
}

export default Filtering;