import React from "react";
import classes from "./stylePlaylist.module.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import useMediaQuery from "@mui/material/useMediaQuery";

const Playlist = () => {
  const matches = useMediaQuery("(max-width:470px)");

  let data = [
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },

    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },

    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
    {
      title: "Genesis 1:1",
      time: "01:53:52",
      description: "Expect the Goodness of God",
      date: "May 20, 2015",
    },
  ];
  return (
    <>
      <Container>
        <p className={classes.result}>
          388 Result for <span className={classes.greenText}>Jeremy</span>
        </p>
        <br />
        <Grid container>
          <Grid item md={6} sm={12}>
            <Grid container>
              <Grid item sm={3}>
                <Button variant="outlined" className={classes.selected}>
                  Verse (12)
                </Button>
              </Grid>
              <Grid item sm={3} style={{ marginLeft: matches && "1rem" }}>
                <Button variant="outlined" className={classes.btn}>
                  Channel (7)
                </Button>
              </Grid>
              <Grid item sm={5} style={{ marginTop: matches && "1rem" }}>
                <Button variant="outlined" className={classes.btn}>
                  Verse on Channel (2)
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.listData}>
        <Container>
          <br />
          <div className={classes.result2}>
            12 Result verse for{" "}
            <span className={classes.greenText}>Jeremy</span>
          </div>

          <Grid container spacing={2} justifyContent="center">
            {data.map((item, index) => {
              return (
                <Grid item md={4} ey={index}>
                  <div className={classes.cardDiv}>
                    <div className={classes.cardImage}>
                      <p className={classes.title}>{item.title}</p>
                    </div>
                    <div className={classes.description}>
                      <div>
                        <p className={classes.detail}>{item.description}</p>
                        <p className={classes.time}>
                          {item.date} &nbsp; {item.time}
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div className={classes.icon}>
                          <PlayArrowIcon className={classes.play} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
          <br />
        </Container>
      </div>

      <br />
    </>
  );
};
export default Playlist;
