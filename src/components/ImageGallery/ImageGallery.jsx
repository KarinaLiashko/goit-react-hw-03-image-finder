import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, Searchbar, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
    componentDidMount() {
        const data = ImageService.getImages('cat', 1);
        console.log(data);
    }

handleSubmit = query => {
    this.setState({
    query,
    images: [],
    page: 1,
    isShownButton: false,
    isEmpty: false,
    error: null
      
    });
  };

    render() {
        return (
            <>
                <Searchbar onSubmit={this.handleSubmit}/>
            <Text textAlign="center">Sorry. There are no images ...</Text>
            </>
        )
    }
}