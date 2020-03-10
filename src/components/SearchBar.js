import React, {Component} from 'react';
import { AutoComplete, Input } from 'antd';
import {BOUNDS} from "../constants"

/* global google */
const Option = AutoComplete.Option;

class SearchBar extends Component {

    state = {
        dataSource: [],
    }

    service = new google.maps.places.AutocompleteService();

    handleSearch = (address) => {
        this.service.getPlacePredictions({input: address, bounds: BOUNDS}, (value) => {
            this.setState({
                dataSource: !value ?
                    [] : value.map(place => ({
                        description: place.description,
                        place_id: place.place_id,
                    }))
            });
        });
    }
    onSelect = (place_id) => {
        this.props.handleSelectPlace(place_id, this.props.placeHolder);
    }

    render() {
        const { dataSource } = this.state;
        const options = dataSource.map((place) => (
            <Option key={place.place_id} value={place.place_id} label={place.description} className="place-option">
                <span className="player-option-label">{place.description}</span>
            </Option>
        ));
        return (
            <AutoComplete
                className="search-bar"
                dataSource={options}
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                placeholder={this.props.placeHolder}
                size="large"
                optionLabelProp="label"
            >
                <Input />
            </AutoComplete>
        );
    }
}

export default SearchBar;