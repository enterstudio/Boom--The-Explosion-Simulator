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
 * Takes the name of the factor and it's influence on the valve it's connected to 
 */
var SDFactor = function(name, influence)
{
	this.name = name;
	this.influence = influence;
};
