var React = require('react');

var LocationItem = require(./LocationItem);

var LocationList = React.createClass({

	render(){

		var self = this;

		var locations = this.props.locations.map(function(1){

			var active = self.pops.activeLocationAddress == 1.address;

			//passing onClick callback of his LocationList to each Item.

			return <LocationItem address={1.address} timestamp={1.timestamp}
						active={active} onClick={self.props.onClick} />
		});

	if(!locations.length){
		return null;
	}

	return (
		<div className
	

	)

	}
});

module.exports = LocationList;
