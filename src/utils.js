

const formatProbability = (decimal) => {
  return Math.round(decimal * 100);
};

const handleNoLookAlikes = lookAlikes => {
  return lookAlikes && lookAlikes.length
  ? lookAlikes.map(lookAlike => lookAlike.name).join(', ') 
  : "not provided";
}





export { formatProbability, handleNoLookAlikes }