/**
 * Alexander McCaleb
 * CMPS 179 - Summer 2013
 * Boom -- The Explosion Simulator
 *
 * SDLevel.js
 *
 * Represents a Level or Stock in a System Dynamics
 * model as described by Jay Forrester
 *
 * Levels are tuned by valves
 * They can be thought of as the integration of valves.
 */

/**
 * Default Constructor
 * Takes in a name
 * Creates a list of valves attached to it
 * as well as the sum of the attached valves
 */
var SDLevel = function(name) {
	this.name = name;
	this.valves = [];
	this.value = 0;
};

/**
 * Updates the value of this level by summing all attached valves
 */
SDLevel.prototype.update = function() {
	var that = this;

	// Reset our value
	//this.value = 0;

	// Now sum the influence of all valves
	_.each(this.valves, function(element, index) {
		that.value += element.value;
	});

	// Enforce bounds on value
	if (this.value < 0)
		this.value = 0;
	else if (this.value > 10)
		this.value = 10;
}; 