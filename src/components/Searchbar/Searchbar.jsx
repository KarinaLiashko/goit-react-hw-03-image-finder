import { Component } from 'react';
import {Searchbar} from './Searchbar.styles'

export class SearchForm extends Component {
    state = {
        images: [],
        query: '',
        page: 1,
    isShownButton: false,
    isLoading: false,
    isEmpty: false,
    error: null
    }
    
    //   componentDidUpdate(prevProps, prevState) {
    // console.log(this.state);
    // }
    
    handleInputChange = e => {
        const prevValue = this.state.query;
        const nextValue = e.target.value;
        
        if (prevValue !== nextValue) {
      this.setState({ query: nextValue });
    }
    }

    handleFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.quesry);

        this.setState({query:''})
    }

  render() {
    const { query } = this.state;

    return (
      <Searchbar onSubmit={this.handleFormSubmit}>
        <FormBtn type="submit">
          <FiSearch size="16px" />
        </FormBtn>
        <InputSearch
          placeholder="What do you want to write?"
          name="search"
          required
          autoFocus
          value={query}
          onChange={this.handleInputChange}
        />
      </Searchbar>
    );
  }  
}