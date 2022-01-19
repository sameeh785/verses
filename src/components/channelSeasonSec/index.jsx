import React, { useState, useContex } from "react";
import classes from "./style.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import list from "../JSON/list.js";
import check from "../../Assets/check.png";
import { VerseContext } from "../../context/Verse";

const ChannelSeasonSec = () => {
  const matches = useMediaQuery("(max-width:470px)");
  const { storeData, channel: CHANNEL, found } = React.useContext(VerseContext);

  // const [verses, setVerses] = useState([]);
  // React.useEffect(() => {
  //   let listItem = list.responseItems.map((item, index) => {
  //     let date = new Date(item.timestamp).toDateString();
  //     let time = new Date(item.timestamp).toLocaleTimeString().split(" ")[0];

  //     return {
  //       title: item.data.title,
  //       channel_name: item.data.channel_name,
  //       date,
  //       time,
  //     };
  //   });
  //   setVerses([...listItem]);
  // }, []);
  console.log(storeData.search, "Ssasassass");
  return (
    <div className={classes.TopNode}>
      {storeData.search ? (
        found && storeData.playList.length ? (
          <Container>
            <Grid container spacing={2}>
              <Grid
                item
                md={9}
                sm={6}
                xm={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                className={matches ? classes.mobileParent : classes.parent}
              >
                <div className={classes.sideDiv}>
                  <h1 className={classes.headingTop}>
                    {storeData.playList.length} Result for{" "}
                    <span className={classes.greenText}>{storeData.verse}</span>
                  </h1>
                </div>
              </Grid>
            </Grid>
            <div className={classes.boxChannel}>
              <Grid container>
                <Grid
                  item
                  md={9}
                  sm={8}
                  lg={9}
                  xm={12}
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  // className={matches ? classes.mobileParent : classes.parent}
                >
                  <div className={classes.sideDiv}>
                    <h2 className={classes.headingTopBox}>
                      Men's Advance 2021 Day 2, Session 2{" "}
                      <span
                        className={`${classes.greenText} ${classes.smallText}`}
                      >
                        by
                      </span>
                      <span className={classes.smallText}>
                        {" "}
                        {CHANNEL && CHANNEL}{" "}
                        <img src={check} style={{ paddingTop: "2px" }} />
                      </span>
                    </h2>
                    <p className={classes.textBox}>
                      ..mich gefragt Du hast mich{" "}
                      <span className={classes.greenText}>Jeremy</span> und ich
                      hab' nichts gesagt [Chorus] Will you until...
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  md={3}
                  sm={6}
                  xm={12}
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  // className={matches ? classes.mobileParent : classes.parent}
                >
                  <div className={classes.sideDivButton}>
                    <Button variant="outlined">View</Button>
                  </div>
                </Grid>
              </Grid>
            </div>

            <Grid container spacing={2}>
              <Grid
                item
                md={9}
                sm={6}
                xm={12}
                display={"flex"}
                justifyContent={"center"}
                flexDirection={"column"}
                className={matches ? classes.mobileParent : classes.parent}
              >
                <div className={classes.sideDiv}>
                  <p className={classes.channelText}>
                    From Channel &nbsp;
                    <span className={classes.smallText}>
                      {" "}
                      {storeData?.channelName} <i className="fa fa-tick"></i>
                    </span>
                  </p>
                </div>
              </Grid>
            </Grid>

            {/* below area */}

            {storeData.playList.length &&
              storeData.playList.map((item) => {
                return (
                  <div className={classes.boxChannelTwo}>
                    <Grid container>
                      <Grid
                        item
                        md={9}
                        sm={8}
                        lg={9}
                        xm={12}
                        display={"flex"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        // className={matches ? classes.mobileParent : classes.parent}
                      >
                        <div className={classes.sideDiv}>
                          <List
                            sx={{
                              width: "100%",
                              maxWidth: 560,
                              bgcolor: "background.paper",
                            }}
                          >
                            <ListItem alignItems="flex-start">
                              <ListItemAvatar style={{ width: 85 }}>
                                <Avatar
                                  style={{ width: 65, height: 65 }}
                                  alt="Remy Sharp"
                                  src={item.img}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={
                                  <span
                                    style={{
                                      fontFamily: "Inter",
                                      fontSize: "20px",
                                      fontStyle: "normal",
                                      fontWeight: "700",
                                      lineHeight: "24px",
                                      letterSpacing: "0em",
                                      textSlign: "left",
                                    }}
                                  >
                                    {item.title}
                                  </span>
                                }
                                secondary={
                                  <React.Fragment>
                                    <Typography
                                      variant="body2"
                                      color="text.primary"
                                      style={{
                                        fontFamily: "Inter",
                                        fontStyle: "normal",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                        color: "#647D94",
                                        marginBottom: "8px",
                                      }}
                                    >
                                      {item.channel}{" "}
                                      <img
                                        src={check}
                                        style={{ paddingTop: "2px" }}
                                      />
                                    </Typography>
                                    <Typography
                                      component="span"
                                      variant="body2"
                                      color="text.primary"
                                    >
                                      <span
                                        style={{
                                          background: "#00808014",
                                          padding: "5px 8px",
                                        }}
                                      >
                                        {item.date_published}
                                      </span>
                                      &nbsp;
                                      <span
                                        style={{
                                          background: "#00808014",
                                          padding: "5px 8px",
                                        }}
                                      >
                                        {" "}
                                        {item.time}
                                      </span>
                                    </Typography>
                                  </React.Fragment>
                                }
                              />
                            </ListItem>
                          </List>
                        </div>
                      </Grid>
                      <Grid
                        item
                        md={3}
                        sm={6}
                        xm={12}
                        display={"flex"}
                        justifyContent={"center"}
                        flexDirection={"column"}
                        // className={matches ? classes.mobileParent : classes.parent}
                      >
                        <div className={classes.sideDivButton}>
                          <Button variant="outlined">View</Button>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                );
              })}
            <div className={classes.loadMoreButton}>
              {/* <Button variant="contained">
              <i className="fa fa-spin"></i> Load More
            </Button> */}
            </div>
          </Container>
        ) : (
          <h4 style={{ marginTop: "3rem", textAlignLast: "center" }}>
            Result not found
          </h4>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default ChannelSeasonSec;
