import React, { Component } from "react";
import { Grid, Typography, CardHeader, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Send from '@material-ui/icons/Send'
import axios from 'axios';
import ChatList from './chatList/App/index.js'
export default class Dashboard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts: [

        {
          title: "Love Lost",
          description: "This is my first post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUh8Vw2CMarBf4IhzzD9Iu9RDgFDLhampfMmhLqScja8HWYXsL",
          body: ""
        },

        {
          title: "Journey",
          description: "This is my second post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp1PeuwQtnwMQ2r_i0x5ztFzJH0DaePQIIXeOV0N13f4qd4e6S",
          body: ""
        },

        {
          title: "Love",
          description: "This is my third post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnP2iCBPQmX_jAx1KQIRRhYBKy_g_3YgQ5tGjDdVV3J3HIQpbF",
          body: ""
        },

        {
          title: "You are my reason for life",
          description: "This is my fourth post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV82se8NdkhIMflZnKFjBTopZO3DZtRMWl-idP271-iPABR9e6",
          body: ""
        },

        {
          title: "Allow me",
          description: "This is my fifth post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrfA-ZqxWqS9GeRJ7ameS9XAqAJDwOHx68Gq6tkdZq-wnXZUno",
          body: ""
        },

        {
          title: "Closure and A Small Consolation",
          description: "This is my sixth post with more content inside",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRjzBeVVUtSZOV8XyM4ZgjWSuwQK7YW46s0XNyXmXengQ-dRT9",
          body: ""
        }
      ],
      comment: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.comment);
  };

  handleComment = e => {
    this.setState({
      comment: e.target.value
    });
  };

  componentDidMount() {
    // const datas = [];
    axios.get('http://localhost:4000/to/getPosts/')
      .then(response => {
        for (let index = 0; index < response.data.length; index++) {
          this.state.posts.push(response.data[index]);

        }
      })
      .catch((error) => {
        console.log(error);
      })
    // console.log(datas);
  }
  render() {
    return (
      <div>
        <div style={{  float:"right" }}>><ChatList ></ChatList></div>
      <center style={{ marginTop: 20, padding: 20 }}>
      
        <Grid container spacing={20} justify="center">
          {this.state.posts.map(post => (
            <div style={{ marginBottom: 20, marginLeft: 20 }}>
              <Grid item key={post.title}>
                <Card>
                  <CardActionArea>
                    <div>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography component="p">{post.description}</Typography>
                      </CardContent>
                    </div>
                    <CardMedia
                      component="img"
                      alt=" "
                      height='auto'
                      image={post.image}
                      title=" "
                    />
                    <Typography style={{backgroundImage: post.image}}>{post.body}</Typography>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Learn More</Button>
                  </CardActions>
                  <CardActionArea>
                    <form onSubmit={this.handleSubmit}>
                      <TextField style={{ width: "70%" }} onChange={this.handleComment} placeholder="Comment" >
                      </TextField><Button><Send>Comment</Send></Button>

                    </form>
                  </CardActionArea>
                </Card>
              </Grid>
            </div>
          ))}
        </Grid>
      </center>
      </div>
    );
  }
}
