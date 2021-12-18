import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/Firebase/firebase";

export const ItemDetailContainer = () => {
  const { ID } = useParams();
  const [itemDetails, setItemDetails] = useState();

  const db = getFirestore();
  const itemCollection = db.collection("productos");

  const item = itemCollection.doc(ID);

  item.get().then((doc) => {
    if (!doc.exists) {
      console.log("no results");
    }
    setItemDetails({ id: doc.id, ...doc.data() });
  });

  return (
    <Container>
      <ItemDetail itemDetails={itemDetails} />
    </Container>
  );
};
