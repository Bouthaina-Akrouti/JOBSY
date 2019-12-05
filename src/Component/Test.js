import React, { Component } from "react"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect'



class Test extends Component{
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            profession: ''
        }
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
      };
    render(){
        return(
<div>
            <FormControl>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={this.state.city}
          onChange={this.handleChange}
          inputProps={{
              name: 'city',
              id: 'age-native-simple',
            }}
            >
          <option value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
            <FormControl>
        <InputLabel htmlFor="age-native-simple">Profession</InputLabel>
        <Select
          native
          value={this.state.profession}
          onChange={this.handleChange}
          inputProps={{
              name: 'profession',
              id: 'age-native-simple',
            }}
            >
          <option value="" />
          <option value={'dev'}>ds</option>
          <option value={'arch'}>qq</option>
          <option value={'engenir'}>ff</option>
        </Select>
      </FormControl>
</div>
            )
    }
    
}

export default Test