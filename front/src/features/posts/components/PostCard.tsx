import React from 'react';
import { Card, CardActionArea, CardContent,Grid, Typography } from '@mui/material';

interface Props {
  author: string | null,
  message: string,
  image: string | null
}

const PostCard:React.FC<Props> = ({author, message,image}) => {
  // let productImage = null;
  // if (image) {
  //   productImage = 'http://127.0.0.1:8000' + '/' + image;
  // }

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} component='div'>
        <Card>
          <CardActionArea>
            <CardContent>
              {/*<CardMedia*/}
              {/*  sx={{height:140}}*/}
              {/*  image={productImage}*/}
              {/*  title='user-img'*/}
              {/*/>*/}
              <Typography gutterBottom variant="h5" component="div">
                { author }
              </Typography>
              <Grid container justifyContent="space-between" alignItems="center">
                <Typography variant="h6" color="text.secondary">
                  <strong>
                    { message }
                  </strong>
                </Typography>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default PostCard;