import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, Searchbar, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
    state = {
        images: [],
        query: '',
        page: 1,
}

    componentDidUpdate(prevProps, prevState) {
        const {query, page} = this.state
        
        if (prevState.query !== query) {
            this.loadImages(query, page)
        }

        console.log(this.state)
    }
    
    // componentDidMount() {
    //     const data = ImageService.getImages('cat', 1);
    //     console.log(data);
    // }

    loadImages = async (query, page) => {
        const data = await ImageService.getImages(query, page);
        this.setState( prevState => ({
            images: [...prevState.images, ...data.photos]
        }))
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