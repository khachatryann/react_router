import React, {useEffect, useState} from "react";
import { FuncComponent } from "../FuncComponent";
import axios from "axios";


export function Home() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
           setUsers(res.data)
        })
      }, [])

    return(
        <>
         <h1 style={{ textAlign: 'center'}}>Home</h1>
         <ul>
            {users
            .filter(item => {
                return item.name.toLowerCase().startsWith(search.toLowerCase())
            })
            .map((user) => {
                return <FuncComponent {...user}/>
            })}
         </ul>
         <input placeholder="search by name" onChange={(e) => setSearch(e.target.value)}/>
        </>
    );
}

















{/* {users
      .filter(item => {
        return item.name.toLowerCase().startsWith(search.toLowerCase())
      })
      .map((user) => {
        return <FuncComponent {...user}/>
      })
      }
    </ul>
    <input onChange={(e) => setSearch(e.target.value)}/> */}