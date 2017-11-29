var React = requre('react');

var Search = React.createClass({

	getInitialState() {
		return { value: '' };
	},

	handleChange(event) {
		this.setState({value: event.target.value});
	},

	handleSubmiut(event){

		event.preventDefault();

		this.props.onSearch(this.state.value);

		this.getDOMNode().querySelector('input').blur();
	},

	render() {

		return (

			<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className-"form-group">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="input-group">
							<intput type="text" className="form-control" id="address" placeholder="Find a location..."
							value={this.state.value} onChange={this.handleChange} />
							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</span>
						</div>
						
					</div>
					
				</div>

			</form>

		);

	}
});

module.exports = Search;