const formatProbability = (decimal) => {
  return Math.round(decimal * 100);
};

const handleNoLookAlikes = mushroom.lookAlikes && mushroom.lookAlikes.length
  ? mushroom.lookAlikes.map(lookAlike => lookAlike.name).join(', ') 
  : "not provided";





export { formatProbability, handleNoLookAlikes }