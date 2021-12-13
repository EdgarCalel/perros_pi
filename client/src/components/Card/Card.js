/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react'
import './card.css'
export default function Card({name, temperament, weight, image}) {
    return (
        <div class="container">
			<div class="card">
			  <div class="imgBx">
              <img src={image} alt="image not found" />
			  </div>
			  <div class="contentBx">
              <h2>{name}</h2>
				<div class="quote">
				<h3>{temperament}</h3>
				</div>
				<div class="name">
                <h3>{weight}</h3>
				</div>
				<a href="#"><i class="fas fa-angle-double-right"></i></a>
			  </div>
			</div>
            </div>
		

       
    )
}

