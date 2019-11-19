import React from 'react'
import Result from './Result'
import axios from 'axios'

const API_KEY = "024c33794c25d31dc6656ad39d593c9930df60b5a27dff54c394fd0c240a7568"

class FetchInput extends React.Component {
  state = {
    value: "",
    searchResult:[]
  }

  getInfo = e => {
    this.setState({
      value: e.target.value
    })
  }
  
  sendInfo = e => {
    e.preventDefault()
    const findVal = this.state.value
    axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=15&orientation=landscape&query=${findVal}}`)
    .then(res => {
      this.setState({
          
          searchResult: res.data.results
      })     
    })
  }
  render(){
    console.log(this.value)
    return(
      <>
      <form onSubmit={this.sendInfo}>
        <input 
          type="text"
          value={this.state.value}
          placeholder="Type and seach"
          onChange={this.getInfo}
        />
          <button type="submit">Submit</button>
      </form>
        <h1>FetchInput is working</h1>
        <Result res={this.state.searchResult}/>
      </>
    )
  }
}

export default FetchInput