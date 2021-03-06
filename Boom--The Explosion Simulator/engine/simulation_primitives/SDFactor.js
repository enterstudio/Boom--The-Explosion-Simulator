/**
 * Alexander McCaleb
 * CMPS 179 - Summer 2013
 * Boom -- The Explosion Simulator
 *
 * SDFactor.js
 *
 * Represents a Factor or Thing in a System Dynamics 
 * model as described by Jay Forrester
 * 
 * Factors influence valves. 
 * They can be thought of as a pipe flowing into a valve.
 *
 */

/**
 * Default Constructor
 * Takes the name of the factor and its influence on the valve its connected to
 * Creates a list of attached levels and their corresponding weights
 * Maintains its working value
 */
var SDFactor = function(name, influence)
{
	this.name = name;
	this.influence = influence;
	this.value = influence;
	this.levels = [];
	this.weights = [];
};

/**
 * Attaches a level to this valve with the desired weight 
 */
SDFactor.prototype.attachLevel = function(level, weight)
{
	if(weight < 0 || weight >= 1)
	{
		console.error("SDValve.attachLevel: You must pass a weight between 0 and 0.25");
		return null;
	}
	else
	{
		this.levels.push(level);
		this.weights.push(weight);
	}
};

/**
 * Updates the value of this factor by summing all the weights of the attached levels 
 * Returns the updated value of the factor
 */
SDFactor.prototype.update = function()
{
	var that = this;
	
	// Reset our value
	this.value = this.influence;
	
	// Now sum the weight of all levels
	_.each(this.levels, function(element, index) {
		that.value += that.weights[index] * that.levels[index].value;
	});
	
	return this.value;
};