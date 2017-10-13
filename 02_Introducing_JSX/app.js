import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


function concatName(user)
{
	return user.name+ " "+user.lastName;
}


const user = 
{
	name:'User1',
	lastName : 'lastName1'
}

const element = (
					<h1> 
						Hellow world {concatName(user)}
					</h1>
				) 


ReactDOM.render(element
				,
				document.getElementById('root1'));




function concatName2(user2)
{
	return user2.name+ " " +user2.lastName;
}

function getGreeting(user2)
{
	if(user2)
	{
		return <h1> Hellow, {concatName2(user2)} </h1>
	}
	else
	{
		return <h1>Hellow stranger</h1>
	}
}

const user2 = 
{
	name:'user2',
	lastName:'lastName2'
}


ReactDOM.render(getGreeting(user2),document.getElementById('root2'));


const userr = { 
	url:'www.reactjs.com'
}
const class1 = 'myClass';
const color = 'red'

const element3 = <h1 id="hola"  
					 data-color={color}  
					 data-url={userr.url}
					 className = {class1}
					  >Hellow world</h1>;


ReactDOM.render(element3,document.getElementById('root3'));





const link = {url:'http://lorempixel.com/100/100/'};
const element4 = <img src={link.url} />


ReactDOM.render(element4,document.getElementById('root4'));



const template = 	(

						<div>
							<br/>
							<br/>
							<br/>
							<div>
								Hellow div
								<span> Hellow span</span>
							</div>
							<p>Hellow p</p>
							<h3>Hellow h3</h3>
						</div>

					);


ReactDOM.render(template,document.getElementById('root5'));




const title1 = <div>Holas jeje<script>alert()</script></div>;

// const title2 = "<div>Holas jeje<script>alert()</script></div>";


const element7 = <div>{title1}</div> ;//<h1> title  hola</h1>;


ReactDOM.render(element7,document.getElementById('root6'));

//$("body").html(title2);



const element8 = 	(
						<h1 className='greeting'>
							Hellow, world!
						</h1>
					)

const element9 = React.createElement(
										'h1', 
										{className:'greeting'}, 
										'Hellow, world!'
									);


ReactDOM.render(element9,document.getElementById('root7'));




















