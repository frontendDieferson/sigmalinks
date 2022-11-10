import "./home.css";
import React, { useState, useEffect } from "react";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";


export default function Home() {
  const [links, setLinks] = useState('')

  useEffect(() => {
    function loadLinks() {
    const linksRef = collection(db, 'links')
    const queryRef = query(linksRef, orderBy('created', 'asc'))

    getDocs(queryRef)
    .then((snapshot) => {
      let list = []
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color
          })
        })
       setLinks(list)
    })

    }
    loadLinks()
  }, [])


  return (
    <div className="home-container">
      <h1>Dieferson Soares</h1>
      <span>Veja meus links 👇</span>
      <main className="links">

      {links.map((item) => {
        return(
          <section key={item.id} className="link-area" style={{backgroundColor: item.bg}}>
          <a href={item.url} target='blank'>
            <p className="link-text" style={{color: item.color}}>{item.name}</p>
          </a>
        </section>
        )
      })}

        <footer>
           <p>Aplicação desenvolvida com carinho por Sigma.dev</p>
         
        </footer>
      </main>
    </div>
  );
}
