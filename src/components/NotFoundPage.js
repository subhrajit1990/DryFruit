import React from 'react';

export class NotFoundPage extends React.Component {
  render() {
    return (
		<div id="pageNotFound" className="">
			<div className="row">
				<div className="">
		      		<h2>Page not found!</h2><br/>			     		
		    	</div>			    	
			</div>
		</div>
    );
  }
}

export class NoDataFoundPage extends React.Component {
  render() {
    return (
      <div id="noDataFound" className="">
			<div className="row">
				<div className="">
		      		<h2>No data found!</h2><br/>			     		
		    	</div>			    	
			</div>
		</div>
    );
  }
}