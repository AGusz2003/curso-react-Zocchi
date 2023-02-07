import React,{useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import {  collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "./Loading";




const ItemListContainer = () => {
    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

     useEffect(() => {
         const db = getFirestore();
         const itemCollection = collection(db, "Productos");
         console.log(id)
         const q = id ? query( itemCollection, where ("categoria", "==", id)) : itemCollection;

         getDocs(q).then((snapShot) => {
             setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ))
            setLoading(false)
         })
     }, [id] )

    return (
        <div className="container">
         {loading ? <Loading /> : <ItemList items={items} />}
           
        </div>
    )
    }
export default ItemListContainer;