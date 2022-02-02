import React from 'react';
import './RatingStars.css'

function RatingStars() {
  return <div>
      <div className="rating-star col-12 col-md-12">
			<span>
				<i className="fa fa-star if rating < 0.5 %}-o elif rating >= 0.5 and rating < 1 %}-half-o  endif %}" aria-hidden="true"></i>
				<i className="fa fa-star if rating < 1.5 %}-o elif rating >= 1.5 and rating < 2 %}-half-o  endif %}" aria-hidden="true"></i>
				<i className="fa fa-star if rating < 2.5 %}-o elif rating >= 2.5 and rating < 3 %}-half-o  endif %}" aria-hidden="true"></i>
				<i className="fa fa-star if rating < 3.5 %}-o elif rating >= 3.5 and rating < 4 %}-half-o  endif %}" aria-hidden="true"></i>
				<i className="fa fa-star if rating < 4.5 %}-o elif rating >= 4.5 and rating < 5 %}-half-o {% endif %}" aria-hidden="true"></i>
		<span>1234 reviews</span>
				</span>
		</div>
  </div>;
}

export default RatingStars;

