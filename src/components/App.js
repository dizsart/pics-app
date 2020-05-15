import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

class App extends React.Component {
 state = {images: [] };
  //asyn and await syntax 
     onSearchSubmit = async term => {
       const response = await unsplash.get('/search/photos', {
       params: {query: term},
       });
       this.setState.apply({images: response.data.results });
     }
 
 //promise that uses a .then statement
  // onSearchSubmit(term){
  //   console.log(term);
  //   axios.get('http://api.unsplash.com/search/photos', {
  //     params: {
  //       query: term },
  //       headers: {
  //         Authorization: ''
  //       }
  //   }).then((response)=> {
  //     console.log('response')
  //   })
  // }
  render() {

  return (
  <div className = "ui container" style = {{marginTop: '10px'}}>
    <SearchBar onSubmit = {this.onSearchSubmit}/></div>
  )}
}
export default App;