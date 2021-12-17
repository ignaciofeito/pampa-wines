import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link, useParams } from "react-router-dom";
import { InputBase, makeStyles, Grid, Container } from "@material-ui/core";
import { ItemListContainerStyle } from "./ItemListContainerStyle";
import { ItemList } from "./ItemList/ItemList";
import { CategoryList } from "./CategoryList/CategoryList";
import { getFirestore } from "../../services/Firebase/firebase";

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { subcategoryId } = useParams();

  const [dataToShow, setDataToShow] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = db.collection("productos");

    if (searchInput === "") {
      if (categoryId === undefined) {
        itemCollection.get().then((response) => {

          const aux = response.docs.map((element) => {
            return { ...element.data(), id: element.id };
          });
          setDataToShow(aux);
        });
      } else if (categoryId !== undefined && subcategoryId === undefined) {
        let filteredCollection = itemCollection.where("categoryId", "==", categoryId);
        filteredCollection.get().then((response) => {

          const aux = response.docs.map((element) => {
            return { ...element.data(), id: element.id };
          });
          setDataToShow(aux);
        });
      } else if (subcategoryId !== undefined) {
        let filteredCollection = itemCollection.where(
          "subcategoryId",
          "==",
          subcategoryId
        );

        filteredCollection.get().then((response) => {

          const aux = response.docs.map((element) => {
            return { ...element.data(), id: element.id };
          });
          setDataToShow(aux);
        });
      }
    } else {
      itemCollection.get().then((response) => {
  
        const aux = response.docs.map((element) => {
          return { ...element.data(), id: element.id };
        });

        let filteredCollection = aux.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        setDataToShow(filteredCollection);
      });
    }
  }, [categoryId, subcategoryId, searchInput]);

  const classes = useStyles();

  return (
    <Container>
      <Grid container columns={16}>
        <Grid item xs={12} m={12} sm={9}>
          <h4>
            <Link className={classes.title} to={"/"}>
              PRODUCTOS
            </Link>
            {categoryId ? (
              <>
                {" "}
                /{" "}
                <Link className={classes.title} to={"/category/" + categoryId}>
                  {categoryId.toUpperCase()}
                </Link>
              </>
            ) : null}
            {subcategoryId ? (
              <>
                {" "}
                /{" "}
                <Link
                  className={classes.title}
                  to={"/category/" + categoryId + "/" + subcategoryId}
                >
                  {subcategoryId.toUpperCase()}
                </Link>
              </>
            ) : null}
          </h4>
        </Grid>
        <Grid item xs={12} m={12} sm={3}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar"
              name="searchInput"
              onChange={(e) => setSearchInput(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} m={12} sm={2}>
          <CategoryList />
        </Grid>

        <Grid item xs={12} m={12} sm={10}>
          <ItemList dataToShow={dataToShow} />
        </Grid>
      </Grid>
    </Container>
  );
};
